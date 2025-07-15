function isUserVerifyingPlatformAuthenticatorAvailable(resultCallback) {
    if (webauthnJsonBundle.supported()) {
        PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
            .then((available) => {
                resultCallback(available);
            })
    }
}



function registerPasskey(createOptionsJson, onSuccessCallback , onErrorCallback) {
    var createOptions = webauthnJsonBundle.parseCreationOptionsFromJSON(createOptionsJson);
    webauthnJsonBundle.create(createOptions).then(onSuccessCallback).catch(onErrorCallback);
}

function authPasskey(assertionRequestJson, onSuccessCallback , onErrorCallback) {
    var assertionRequest = webauthnJsonBundle.parseRequestOptionsFromJSON(assertionRequestJson);
    webauthnJsonBundle.get(assertionRequest).then(onSuccessCallback).catch(onErrorCallback);
}

function autofillPasskey(assertionRequestJson, onSuccessCallback , onErrorCallback) {
    var assertionRequest = webauthnJsonBundle.parseRequestOptionsFromJSON(assertionRequestJson);

    webauthnJsonBundle.get({
        publicKey: assertionRequest.publicKey,
        mediation: "conditional"
    }).then(onSuccessCallback).catch(onErrorCallback);
}

const mediationAvailable = () => {
    const pubKeyCred = PublicKeyCredential;
    // Check if the function exists on the browser - Not safe to assume as the page will crash if the function is not available
    //typeof check is used as browsers that do not support mediation will not have the 'isConditionalMediationAvailable' method available
    if (
        typeof pubKeyCred.isConditionalMediationAvailable === "function" &&
        pubKeyCred.isConditionalMediationAvailable()
    ) {
        console.log("Conditional Mediation is available");
        return true;
    }
    console.log("Conditional Mediation is not available");
    return false;
};