(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.webauthnJsonBundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.get = get;
exports.parseCreationOptionsFromJSON = createRequestFromJSON;
exports.parseRequestOptionsFromJSON = getRequestFromJSON;
exports.supported = supported;
// src/webauthn-json/base64url.ts
function base64urlToBuffer(baseurl64String) {
  const padding = "==".slice(0, (4 - baseurl64String.length % 4) % 4);
  const base64String = baseurl64String.replace(/-/g, "+").replace(/_/g, "/") + padding;
  const str = atob(base64String);
  const buffer = new ArrayBuffer(str.length);
  const byteView = new Uint8Array(buffer);
  for (let i = 0; i < str.length; i++) {
    byteView[i] = str.charCodeAt(i);
  }
  return buffer;
}
function bufferToBase64url(buffer) {
  const byteView = new Uint8Array(buffer);
  let str = "";
  for (const charCode of byteView) {
    str += String.fromCharCode(charCode);
  }
  const base64String = btoa(str);
  const base64urlString = base64String.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return base64urlString;
}

// src/webauthn-json/convert.ts
var copyValue = "copy";
var convertValue = "convert";
function convert(conversionFn, schema, input) {
  if (schema === copyValue) {
    return input;
  }
  if (schema === convertValue) {
    return conversionFn(input);
  }
  if (schema instanceof Array) {
    return input.map(v => convert(conversionFn, schema[0], v));
  }
  if (schema instanceof Object) {
    const output = {};
    for (const [key, schemaField] of Object.entries(schema)) {
      if (schemaField.derive) {
        const v = schemaField.derive(input);
        if (v !== void 0) {
          input[key] = v;
        }
      }
      if (!(key in input)) {
        if (schemaField.required) {
          throw new Error(`Missing key: ${key}`);
        }
        continue;
      }
      if (input[key] == null) {
        output[key] = null;
        continue;
      }
      output[key] = convert(conversionFn, schemaField.schema, input[key]);
    }
    return output;
  }
}
function derived(schema, derive) {
  return {
    required: true,
    schema,
    derive
  };
}
function required(schema) {
  return {
    required: true,
    schema
  };
}
function optional(schema) {
  return {
    required: false,
    schema
  };
}

// src/webauthn-json/basic/schema.ts
var publicKeyCredentialDescriptorSchema = {
  type: required(copyValue),
  id: required(convertValue),
  transports: optional(copyValue)
};
var simplifiedExtensionsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var simplifiedClientExtensionResultsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var credentialCreationOptions = {
  publicKey: required({
    rp: required(copyValue),
    user: required({
      id: required(convertValue),
      name: required(copyValue),
      displayName: required(copyValue)
    }),
    challenge: required(convertValue),
    pubKeyCredParams: required(copyValue),
    timeout: optional(copyValue),
    excludeCredentials: optional([publicKeyCredentialDescriptorSchema]),
    authenticatorSelection: optional(copyValue),
    attestation: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAttestation = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    attestationObject: required(convertValue),
    transports: derived(copyValue, response => {
      var _a;
      return ((_a = response.getTransports) == null ? void 0 : _a.call(response)) || [];
    })
  }),
  clientExtensionResults: derived(simplifiedClientExtensionResultsSchema, pkc => pkc.getClientExtensionResults())
};
var credentialRequestOptions = {
  mediation: optional(copyValue),
  publicKey: required({
    challenge: required(convertValue),
    timeout: optional(copyValue),
    rpId: optional(copyValue),
    allowCredentials: optional([publicKeyCredentialDescriptorSchema]),
    userVerification: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAssertion = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    authenticatorData: required(convertValue),
    signature: required(convertValue),
    userHandle: required(convertValue)
  }),
  clientExtensionResults: derived(simplifiedClientExtensionResultsSchema, pkc => pkc.getClientExtensionResults())
};

// src/webauthn-json/basic/api.ts
function createRequestFromJSON(requestJSON) {
  return convert(base64urlToBuffer, credentialCreationOptions, requestJSON);
}
function createResponseToJSON(credential) {
  return convert(bufferToBase64url, publicKeyCredentialWithAttestation, credential);
}
function getRequestFromJSON(requestJSON) {
  return convert(base64urlToBuffer, credentialRequestOptions, requestJSON);
}
function getResponseToJSON(credential) {
  return convert(bufferToBase64url, publicKeyCredentialWithAssertion, credential);
}

// src/webauthn-json/basic/supported.ts
function supported() {
  return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential);
}

// src/webauthn-json/browser-ponyfill.ts
async function create(options) {
  const response = await navigator.credentials.create(options);
  response.toJSON = () => createResponseToJSON(response);
  return response;
}
async function get(options) {
  const response = await navigator.credentials.get(options);
  response.toJSON = () => getResponseToJSON(response);
  return response;
}

},{}]},{},[1])(1)
});
