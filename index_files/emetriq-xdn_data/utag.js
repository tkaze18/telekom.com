//tealium universal tag - utag.loader ut4.47.202506251439, Copyright 2025 Tealium.com Inc. All Rights Reserved. 

if(typeof utag_err=='undefined')var utag_err=[];window._tealium_old_error=window._tealium_old_error || window.onerror || function(){};window.onerror=function(m,u,l){if(typeof u !== 'undefined' && u.indexOf('/utag.')>0 && utag_err.length < 5)utag_err.push({e:m,s:u,l:l,t:'js'});window._tealium_old_error(m,u,l)};
var utag_condload=false;window.__tealium_twc_switch=false;try{ try{
/*******
 * Title: Consent Management Config
 * Run: Preloader (IMPORTANT: Edit load order so this extension runs before other consent sync extensions)
 * These variables are used by the consent sync extensions.
 * How to use:
 *     hiddenPages: If you want to hide the consent layer on certain pages, enter their page_content_id or URL here.
 *     hideConidtion: Will hide the consent layer if the expression returns true. E.g document.url == 'test.com'.
 *     isSPA: Set to true on Single Page Applications or if manual utag.view
 *     consentSync: This indicates wether the consentSync extensions should run or not.
 *     usesMaxymiser: This option enables adds a loading animation to hide flickering after giving consent for Maxymiser
 *     overwritePrivacyURL: If the profile has a different privacy policy you may enter the url (within quotation marks).
 *******/

window.consentMngmntConfig = {
    consentSync: true,
    hiddenPages: [
        'www.telekom.de.privatkunden.start.datenschutz',
        'datenschutzhinweise.telekom-dienste.de',
        'www.telekom.de.privatkunden.telekom-deutschland-gmbh.datenschutz.datentransparenz',
        'www.telekom.de.privatkunden.start.impressum',
        'www.telekom.de.privatkunden.impressum'
    ],
    hideCondition: false,
    isSPA: false,
    usesMaxymiser: false,
    overwritePrivacyURL: false,
}

} catch(e){ console.log(e) } }catch(e){console.log(e);}

if(!utag_condload){try{ try{
/**
 * Title: Consent Management
 * Run: Pre Loader
 */
var TEALIUM = TEALIUM || {};

TEALIUM.defaultConsentMngmntConfig = {
    consentSync: false,
    hiddenPages: [],
    hideCondition: false,
    isSPA: false,
    usesABTesting: false,
    defaultPrivacyURL: false,
    privacyURLs: false,
    defaultThirdpartyPrivacyURL: false,
    thirdpartyPrivacyURLs: false,
    customCookieName: false,
    consentPeriod: 90,
    imprintURLs: false,
    defaultImprintURL: false,
    fontURLRegular: false,
    fontURLBold: false,
    repeatConsentCheck: false,
    waitForViewEvent: false,
    repeatConsentLinkEvents: false,
    usesUtiq: false,
    utiqURL: "https://utiq.example.com",
    enablecategoryPartnerAnalyticsEnabled: false,
    useCrossDeviceOptionalText: false
}

if(typeof window.consentMngmntConfig == "undefined") {
    window.consentMngmntConfig = TEALIUM.defaultConsentMngmntConfig;
    console.warn("Loaded default Tealium consent management config, since it was not defined before loading the consent library!");
} else {
    // Merge existing config
    for (var key in window.consentMngmntConfig) {
        TEALIUM.defaultConsentMngmntConfig[key] = window.consentMngmntConfig[key];
    }
    //legacy mode for "usesMaxymiser" Flag:
    TEALIUM.defaultConsentMngmntConfig['usesABTesting'] = TEALIUM.defaultConsentMngmntConfig['usesABTesting'] || window.consentMngmntConfig['usesMaxymiser'];
    window.consentMngmntConfig = TEALIUM.defaultConsentMngmntConfig;
}

// Use the custom consent cookie name if there is one
window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
if(window.consentMngmntConfig.customCookieName) {
    window.utag_cfg_ovrd.cmcookiens = window.consentMngmntConfig.customCookieName;
}
// Sets the consent perdiod from the config file. Default ist 90 days
window.utag_cfg_ovrd.consentPeriod = window.consentMngmntConfig.consentPeriod || 90;

TEALIUM.consent_prompt = TEALIUM.consent_prompt || {};
TEALIUM.preferences_prompt = TEALIUM.preferences_prompt || {};
TEALIUM.utiq_revoke = window.TEALIUM.utiq_revoke || {};
window.TEALIUM.consent_prompt.css = '@charset "utf-8";@font-face{font-family:Consent-TeleNeo;font-weight:400;src:url(https://ebs10.telekom.de/opt-in/font/teleneo/teleneo-regular.woff2) format("woff2")}@font-face{font-family:Consent-TeleNeo;font-weight:700;src:url(https://ebs10.telekom.de/opt-in/font/teleneo/teleneo-bold.woff2) format("woff2")}:root{--bu:16px;--outline-container-gap:calc(var(--bu) / 4);--ods-font-family:"Consent-TeleNeo";--color-background:#FFF;--color-text:#000;--color-border:#000;--color-secondary-regular:#000;--color-secondary-hover:#414141;--color-secondary-active:#626262;--color-standard:#E20074;--color-hovered:#E83390;--color-active:#EE66AC;--color-disabled:#B6B6B6;--color-white:#FFF;--color-btn-secondary-bg:transparent;--color-btn-secondary-bg__hover:#DDD;--color-btn-secondary-bg__active:#CACACA;--color-btn-primary-bg:var(--color-standard);--color-btn-primary-bg__hover:var(--color-hovered);--color-btn-primary-bg__active:var(--color-active);--color-accordion-hover:#F1F1F1;--ods-font-body-m-bold:normal 655 var(--bu)/1.25 var(--ods-font-family);--ods-font-body-m-regulal:normal 112 var(--bu)/1.25 var(--ods-font-family);--ods-font-body-l-regulal:normal 655 calc(var(--bu)*1.25)/1.2 var(--ods-font-family);--ods-font-subtitle:655 clamp(calc(var(--bu)*1.375),.1852vw + calc(var(--bu) * 1.3333),calc(var(--bu)*1.5))/1 var(--ods-font-family);--font-size-h2:30px;--font-size-h3:24px;--font-size-paragraph:18px}@media (max-width:375px){:root{--ods-font-body-m-bold:normal 655 var(--bu)/1.25 var(--ods-font-family)}}@media (prefers-color-scheme:dark){:root{--color-background:#000;--color-text:#FFF;--color-border:#FFF;--color-secondary-regular:#FFF;--color-secondary-hover:#DDD;--color-secondary-active:#CACACA;--color-standard:#E20074;--color-hovered:#FF3FA1;--color-active:#FF69B6;--color-disabled:#626262;--color-btn-secondary-bg:transparent;--color-btn-secondary-bg__hover:#626262;--color-btn-secondary-bg__active:#828282;--color-accordion-hover:#414141}}#__tealiumGDPRecModal{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:2147483645}.cl-outer{position:fixed;bottom:0;left:0;right:0;top:0;display:grid;grid-template-columns:repeat(6,1fr);gap:4px;align-items:center;justify-content:center;padding:24px 8px;background-color:rgba(0,0,0,0.5)}.cl-main{display:flex;transform:scale(1);justify-content:flex-start;align-items:flex-start;background-color:white;border-radius:var(--bu);flex-direction:column;flex-shrink:0;padding:0;border:0;transition:all .2s ease-in;transition-delay:50ms}.cl-content{position:relative;z-index:100;box-sizing:border-box;width:100%;height:100%;padding:calc(var(--bu)* 1.5 - var(--outline-container-gap));margin:2px;overflow-y:auto;overflow-x:clip;overflow-clip-margin:padding-box;padding-bottom:var(--bu);display:flex;flex-direction:column;gap:calc(var(--bu)*1.5);color:var(--color-text)}.cl-header{font:var(--ods-font-subtitle);padding:0;margin:var(--outline-container-gap) var(--outline-container-gap) 0 var(--outline-container-gap);color:var(--color-text);font-size:var(--font-size-h2) !important;text-align:left}.cl-intro{font:var(--ods-font-body-m-regulal);flex-grow:1;overflow-y:auto;overflow-x:hidden;position:relative;margin:0;max-width:none;text-align:left;hyphens:auto;padding:var(--outline-container-gap);color:var(--color-text);font-size:var(--font-size-paragraph) !important}.cl-intro>p{font-weight:400;padding:0;padding-right:.5rem;color:var(--color-text);margin:0;font-size:var(--font-size-paragraph) !important}#__tealiumGDPRecModal .cl-intro::-webkit-scrollbar{width:9px}#__tealiumGDPRecModal .cl-intro::-webkit-scrollbar-thumb{background:#B6B6B6;border-radius:5px}.cl-intro i{font-style:italic;font-size:inherit;font-weight:400;line-height:inherit;font-family:Consent-TeleNeo,sans-serif;display:inline}.cl-footer{display:flex;flex-direction:row;width:100%;box-sizing:border-box;justify-content:flex-end;gap:calc(var(--bu)*0.5)}.cl-links{display:flex;gap:var(--bu);font-size:var(--font-size-paragraph) !important;padding:var(--outline-container-gap)}.cl-links>ul>li{margin:0}.ods-dialog{background:var(--color-background);color:var(--color-text);position:unset;max-height:80vh}.ods-dialog:focus-visible,.ods-dialog:focus{outline:0}.ods-dialog-button_left{margin-right:auto}.ods-dialog-button{transition:all .05s ease-out;flex-grow:0;padding:calc(var(--bu)*0.25) calc(var(--bu)*1.25);cursor:pointer;border-radius:999px;display:flex;justify-content:center;align-items:center;gap:8px;outline-color:var(--color-border);font:var(--ods-font-body-m-bold);min-height:calc(var(--bu)*3);outline-offset:0;outline-width:1px;font-size:var(--font-size-paragraph)}.ods-dialog-button:focus{outline-offset:2px;outline-width:2px;outline-style:solid}.ods-dialog-button svg{outline:none}.ods-dialog-button_secondary{color:var(--color-text);background:var(--color-btn-secondary-bg);border:1px var(--color-border) solid}.ods-dialog-button_secondary:hover{background:var(--color-btn-secondary-bg__hover)}.ods-dialog-button_secondary:active{background:var(--color-btn-secondary-bg__active)}.ods-dialog-button_primary{color:var(--color-white);background:var(--color-standard);border:0}.ods-dialog-button_primary:hover{background:var(--color-hovered)}.ods-dialog-button_primary:active{background:var(--color-active)}.cl-link,.ods-link{font:var(--ods-font-body-m-bold);color:var(--color-secondary-regular);text-underline-offset:calc(var(--bu)*.25);transition:all .2ms ease-in-out;text-decoration-thickness:1px;text-decoration:underline;font-size:var(--font-size-paragraph) !important}.cl-link:visited,.ods-link:visited{color:var(--color-secondary-regular)}.cl-link:active,.ods-link:active{color:var(--color-secondary-active)}.cl-link:hover,.ods-link:hover{color:var(--color-secondary-hover);text-decoration-thickness:2px}.cl-link:focus,.ods-link:focus{outline-offset:2px;outline-color:var(--color-border)}@media (max-width:767px){.ods-dialog{width:unset;min-width:0;max-width:none;padding:0;margin:0;left:0;right:0;bottom:0;display:flex}.cl-intro{min-height:0;max-height:unset;max-width:none;flex-grow:1}.cl-footer{display:flex;flex-grow:0;flex-shrink:0;flex-direction:column-reverse}.ods-dialog-button_left{margin:unset}@keyframes slideUpPrompt{0%{height:0;align-self:end}100%{height:80vh;align-self:end}}#promptLayerContent{animation:slideUpPrompt;animation-duration:1s}}@media (min-width:360px){.cl-outer{grid-template-columns:repeat(6,1fr);padding:0;gap:4px}}@media (min-width:768px){.cl-outer{grid-template-columns:repeat(12,1fr);padding:24px;gap:8px}}@media (min-width:1040px){.cl-outer{grid-template-columns:repeat(12,1fr);padding:24px;gap:8px}}@media (min-width:1440px){.cl-outer{grid-template-columns:repeat(12,1fr);padding:24px;gap:8px}}@media (min-width:1680px){.cl-outer{grid-template-columns:repeat(14,1fr);padding:52px;gap:8px}}.mmLoadingDialog{display:inline-block;position:absolute;width:80px;height:80px;margin:auto;z-index:9999}.mmLoadingDialog div{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;-webkit-animation:mmLoadingDialog 1s cubic-bezier(0,0.2,0.8,1) infinite;animation:mmLoadingDialog 1s cubic-bezier(0,0.2,0.8,1) infinite}.mmLoadingDialog div:nth-child(2){-webkit-animation-delay:-0.5s;animation-delay:-0.5s}@keyframes mmLoadingDialog{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0;left:0;width:72px;height:72px;opacity:0}}#__tealiumGDPRecModal{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:2147483645}.cl-intro i{font-style:italic;font-size:inherit;font-weight:400;line-height:inherit;font-family:Consent-TeleNeo,sans-serif;display:inline}.cl-overflow-indicator-hidden{visibility:hidden}@-webkit-keyframes cl-overflow-indicator-display{0%{opacity:0}50%{opacity:0}55%{opacity:.7}95%{opacity:.7}100%{opacity:0}}@keyframes cl-overflow-indicator-display{0%{opacity:0}50%{opacity:0}55%{opacity:.7}95%{opacity:.7}100%{opacity:0}}#cl-overflow-indicator{width:100%;position:sticky;bottom:0;-webkit-animation-name:cl-overflow-indicator-display;animation-name:cl-overflow-indicator-display;-webkit-animation-duration:6s;animation-duration:6s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes cl-overflow-indicator-jump{from{bottom:30px}to{bottom:15px}}@keyframes cl-overflow-indicator-jump{from{bottom:30px}to{bottom:15px}}#cl-overflow-indicator-arrow:after{content:" ";position:absolute;right:15px;bottom:30px;width:20px;height:20px;color:var(--color-secondary-regular);border-bottom:3px solid;border-right:3px solid;border-radius:3px;transform:rotateZ(45deg);-webkit-animation-name:cl-overflow-indicator-jump;animation-name:cl-overflow-indicator-jump;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@media (min-width:1680px){#promptLayerContent{grid-column:4 / -4}}@media (min-width:1440px) and (max-width:1679px){#promptLayerContent{grid-column:3 / -3}}@media (min-width:1040px) and (max-width:1439px){#promptLayerContent{grid-column:3 / -3}}@media (min-width:768px) and (max-width:1039px) and (orientation:landscape){#promptLayerContent{grid-column:1 / -1}}@media (min-width:768px) and (max-width:1039px) and (orientation:portrait){#promptLayerContent{grid-column:1 / -1}}@media (max-width:767px){.cl-outer{align-items:flex-end;padding-bottom:0}#promptLayerContent{grid-column:1 / -1;height:80vh;width:100vw;max-height:unset;max-width:unset}}#mmLoadingPrompt{display:inline-block;position:absolute;width:80px;height:80px;margin:auto;z-index:9999}#mmLoadingPrompt div{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;-webkit-animation:mmLoadingPrompt 1s cubic-bezier(0,0.2,0.8,1) infinite;animation:mmLoadingPrompt 1s cubic-bezier(0,0.2,0.8,1) infinite}#mmLoadingPrompt div:nth-child(2){-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.cl-links>ul{list-style:none;display:contents}#utiqStrong{font-size:17px}#utiqList{font-weight:400;padding:.5em 1em;margin:0 0 .5em 0}#utiqList>li{padding-top:.25em}.utiqLogo{display:inline-block}';
window.TEALIUM.consent_prompt.html = '<!-- Version: 4.0 Date: 15.05.2025 --> <div class=cl-outer > <div class=mmLoadingPrompt  style="display:none;"> <div></div> <div></div> </div> <dialog class="cl-main ods-dialog" id=promptLayerContent  aria-modal=true  role=alertdialog  aria-labelledby=cl-header  autofocus tabindex=-1 > <div class=cl-content > <h2 class=cl-header  id=cl-header > {{title}} </h2> <div class=cl-intro  id=cl-intro > {{message}} <div id=utiqMessage  class="cl-intro utiqDisplayOptional" style="display:none" data-display=block  data-show=false >{{utiq_message}}</div> </div> <div class=cl-links > <ul> <li> <a href="{{privacy_policy_link}}" class="ods-link cl-data-privacy-url" target=_blank  data-tab> {{privacy_policy}} </a> <li> <a href="{{imprint_link}}" class="ods-link cl-data-imprint-url" target=_blank  data-tab> {{imprint}} </a> <li> <a href="{{partner_list_link}}" class="ods-link cl-data-imprint-url" target=_blank  data-tab> {{partner_list}} ({{number_of_partners}}) </a> </ul> </div> <div class=cl-footer > <button id=editSettingsBtn  class="ods-dialog-button ods-dialog-button_left ods-dialog-button_secondary" data-tab> <svg xmlns="http://www.w3.org/2000/svg" width=24  height=24  focusable=false  viewBox="0 0 24 24" aria-hidden=true > <g fill=currentColor > <g> <path fill-rule=evenodd  d="m14 1 .5 2.75a.992.992 0 0 0 1.448.71l.102-.06 2.3-1.6 2.85 2.85-1.6 2.3c-.378.567-.087 1.312.537 1.52l.113.03L23 10v4l-2.75.5a.992.992 0 0 0-.71 1.448l.06.102 1.6 2.3-2.85 2.85-2.3-1.6c-.567-.378-1.312-.087-1.52.537l-.03.113L14 23h-4l-.5-2.75c-.142-.661-.863-1.01-1.448-.71l-.102.06-2.3 1.6-2.85-2.85 1.6-2.3c.378-.567.087-1.312-.537-1.52l-.113-.03L1 14v-4l2.75-.5a.992.992 0 0 0 .71-1.448L4.4 7.95l-1.6-2.3L5.65 2.8l2.3 1.6c.567.378 1.312.087 1.52-.537l.03-.113L10 1zm-1.25 1.5h-1.5l-.3 1.5c-.2 1.2-1.25 2.05-2.45 2.05-.437 0-.875-.115-1.246-.345L5.8 4.7 4.75 5.75l.9 1.3c.464.65.584 1.472.318 2.227L5.9 9.45c-.279.743-.902 1.27-1.67 1.462l-.18.038-1.55.3v1.5l1.55.25c.85.15 1.5.7 1.85 1.5a2.43 2.43 0 0 1-.149 2.247l-.101.153-.9 1.3 1.05 1.05 1.3-.9c.4-.3.9-.45 1.4-.45 1.145 0 2.154.774 2.418 1.889l.332 1.711h1.5l.3-1.55c.2-1.2 1.25-2.05 2.45-2.05.438 0 .875.115 1.245.345L18.2 19.25l1.05-1.05-.9-1.3c-.5-.7-.55-1.6-.25-2.3.279-.743.902-1.27 1.67-1.462l.18-.038 1.55-.3v-1.5l-1.55-.3c-.85-.15-1.5-.7-1.85-1.5a2.43 2.43 0 0 1 .149-2.247l.101-.153.9-1.3-1.05-1.05-1.3.9c-.4.3-.9.45-1.4.45-1.146 0-2.154-.774-2.418-1.889zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6" clip-rule=evenodd > </path> </g> </g> </svg> {{advanced_settings_button}} </button> <button id=rejectAll  class="ods-dialog-button ods-dialog-button_primary" data-tab> {{reject_button}} </button> <button id=consentAcceptAll  class="ods-dialog-button ods-dialog-button_primary" data-tab> {{confirmation_button}} </button> </div> </div> </dialog> </div>';
window.TEALIUM.consent_prompt.js = '(function(){function acceptAllCookies(){utag.gdpr.setConsentValue(1);var finalConsent={};finalConsent[1]=1;finalConsent[3]=1;finalConsent[7]=1;if(window.consentMngmntConfig.categoryPartnerAnalyticsEnabled){finalConsent[6]=1;}else finalConsent[6]=0;if(window.consentMngmntConfig.usesUtiq){finalConsent[10]=1;}else finalConsent[10]=0;utag.gdpr.setPreferencesValues(finalConsent);deferredUtagLink("content.button.consent-agree");triggerConsentChange();initiateLayerClosing(true);};function acceptRequiredCookies(){utag.gdpr.setConsentValue(0);deferredUtagLink("content.button.no-consent");triggerConsentChange();closeConsentLayer();};function goToPreferences(){utag.gdpr.showConsentPreferences();document.getElementById("__tealiumGDPRecModal").style.display="none";deferredUtagLink("content.button.consent-settings");};function closeConsentLayer(){var gdprDomObjects=[gdprModal=document.getElementById("__tealiumGDPRecModal"),gdprStyle=document.getElementById("__tealiumGDPRecStyle"),gdprScript=document.getElementById("__tealiumGDPRecScript"),gdprPrefs=document.getElementById("__tealiumGDPRcpPrefs"),gdprPrefsScript=document.getElementById("__tealiumGDPRcpPrefsScript"),gdprPrefsStyle=document.getElementById("__tealiumGDPRcpStyle")];for(var i=0;i<gdprDomObjects.length;i++){if(gdprDomObjects[i]){gdprDomObjects[i].parentElement.removeChild(gdprDomObjects[i]);}}};function deferredUtagLink(linkData){setTimeout(function(){utag.link({"wt_link_id":linkData});},1000);};(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:null};var evt=document.createEvent("CustomEvent");evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;};window.CustomEvent=CustomEvent;})();function triggerConsentChange(){var consentEvent=new CustomEvent("consentChanged");window.dispatchEvent(consentEvent);};function initiateLayerClosing(marketingCookies){if(window.consentMngmntConfig.usesMaxymiser&&marketingCookies){document.getElementById("promptLayerContent").style.display="none";document.getElementById("mmLoadingPrompt").style.display="block";setTimeout(closeConsentLayer,3000);}else{closeConsentLayer();}};function repeatExplicitConsentCheck(delay=100,repetitions=50){if(document.readyState==="complete"){if(repetitions>0){var consentModalPromptShowing=document.getElementById("__tealiumGDPRecModal")!==null;var consentModalSettingsShowing=document.getElementById("__tealiumGDPRcpPrefs")!==null;if(window.consentSyncReady&&!consentModalPromptShowing&&!consentModalSettingsShowing&&Object.keys(utag.gdpr.getCookieValues()).length==0){console.log("no consent cookie - showing consent again");utag.link({"wt_link_id":"content.layer.consent-repeated-view"});utag.gdpr.showExplicitConsent();return};repetitions--;setTimeout(repeatExplicitConsentCheck,delay,delay,repetitions);}}else{setTimeout(repeatExplicitConsentCheck,delay,delay,repetitions);}};if(window.consentMngmntConfig.repeatConsentCheck){repeatExplicitConsentCheck();};if(window.consentMngmntConfig.usesUtiq){var utiqOptionalTexts=document.querySelectorAll(".utiqDisplayOptional");utiqOptionalTexts.forEach(element=>{var displayType=element.dataset.display||"block";element.style.display=displayType;});var utiqMessage=document.getElementById("utiqMessage");if(utiqMessage)utiqMessage.dataset.show="true";};var btnAcceptAll=document.getElementById("consentAcceptAll");var btnRejectAll=document.getElementById("rejectAll");var btnEditSettings=document.getElementById("editSettingsBtn");btnAcceptAll.addEventListener("click",acceptAllCookies);btnRejectAll.addEventListener("click",acceptRequiredCookies);btnEditSettings.addEventListener("click",goToPreferences);btnRejectAll.addEventListener("keydown",function(e){if(e.code==="Space"){e.preventDefault();acceptRequiredCookies();}});deferredUtagLink("content.layer.consent-view");var dialog=document.getElementById("promptLayerContent");var focusableElements=[...dialog.querySelectorAll("[data-tab]:not(#utiqMessage[data-show=false] a)")];var firstEl=focusableElements[0];var lastEl=focusableElements[focusableElements.length-1];dialog.addEventListener("keydown",(e)=>{if(e.key==="Tab"){if(e.shiftKey){if(document.activeElement===firstEl){e.preventDefault();lastEl.focus();}}else{if(document.activeElement===lastEl){e.preventDefault();firstEl.focus();}}}});})();';
window.TEALIUM.preferences_prompt.css = '@charset "utf-8";@font-face{font-family:Consent-TeleNeo;font-weight:400;src:url(https://ebs10.telekom.de/opt-in/font/teleneo/teleneo-regular.woff2) format("woff2")}@font-face{font-family:Consent-TeleNeo;font-weight:700;src:url(https://ebs10.telekom.de/opt-in/font/teleneo/teleneo-bold.woff2) format("woff2")}:root{--bu:16px;--outline-container-gap:calc(var(--bu) / 4);--ods-font-family:"Consent-TeleNeo";--color-background:#FFF;--color-text:#000;--color-border:#000;--color-secondary-regular:#000;--color-secondary-hover:#414141;--color-secondary-active:#626262;--color-standard:#E20074;--color-hovered:#E83390;--color-active:#EE66AC;--color-disabled:#B6B6B6;--color-white:#FFF;--color-btn-secondary-bg:transparent;--color-btn-secondary-bg__hover:#DDD;--color-btn-secondary-bg__active:#CACACA;--color-btn-primary-bg:var(--color-standard);--color-btn-primary-bg__hover:var(--color-hovered);--color-btn-primary-bg__active:var(--color-active);--color-accordion-hover:#F1F1F1;--color-toggle-text-disabled:#626262;--ods-font-body-m-bold:normal 655 var(--bu)/1.25 var(--ods-font-family);--ods-font-body-m-regulal:normal 112 var(--bu)/1.25 var(--ods-font-family);--ods-font-body-l-regulal:normal 655 calc(var(--bu)*1.25)/1.2 var(--ods-font-family);--ods-font-subtitle:655 clamp(calc(var(--bu)*1.375),.1852vw + calc(var(--bu) * 1.3333),calc(var(--bu)*1.5))/1 var(--ods-font-family);--font-size-h2:30px;--font-size-h3:24px;--font-size-paragraph:18px}@media (max-width:375px){:root{--ods-font-body-m-bold:normal 655 var(--bu)/1.25 var(--ods-font-family)}}@media (prefers-color-scheme:dark){:root{--color-background:#000;--color-text:#FFF;--color-border:#FFF;--color-secondary-regular:#FFF;--color-secondary-hover:#DDD;--color-secondary-active:#CACACA;--color-standard:#E20074;--color-hovered:#FF3FA1;--color-active:#FF69B6;--color-disabled:#626262;--color-btn-secondary-bg:transparent;--color-btn-secondary-bg__hover:#626262;--color-btn-secondary-bg__active:#828282;--color-accordion-hover:#414141;--color-toggle-text-disabled:#C5C5C5}}#__tealiumGDPRecModal{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:2147483645}.cl-outer{position:fixed;bottom:0;left:0;right:0;top:0;display:grid;grid-template-columns:repeat(6,1fr);gap:4px;align-items:center;justify-content:center;padding:24px 8px;background-color:rgba(0,0,0,0.5)}.cl-main{display:flex;transform:scale(1);justify-content:flex-start;align-items:flex-start;background-color:white;border-radius:var(--bu);flex-direction:column;flex-shrink:0;padding:0;border:0;transition:all .2s ease-in;transition-delay:50ms}.cl-content{position:relative;z-index:100;box-sizing:border-box;width:100%;height:100%;padding:calc(var(--bu)* 1.5 - var(--outline-container-gap));margin:2px;overflow-y:auto;overflow-x:clip;overflow-clip-margin:padding-box;padding-bottom:var(--bu);display:flex;flex-direction:column;gap:calc(var(--bu)*1.5);color:var(--color-text)}.cl-header{font:var(--ods-font-subtitle);padding:0;margin:var(--outline-container-gap) var(--outline-container-gap) 0 var(--outline-container-gap);color:var(--color-text);font-size:var(--font-size-h2) !important}.cl-intro{font:var(--ods-font-body-m-regulal);flex-grow:1;overflow-y:auto;overflow-x:hidden;position:relative;margin:0;max-width:none;text-align:left;hyphens:auto;padding:var(--outline-container-gap);color:var(--color-text);font-size:var(--font-size-paragraph) !important}.cl-intro>p{font-weight:400;padding:0;padding-right:.5rem;color:var(--color-text);margin:0;font-size:var(--font-size-paragraph) !important}#__tealiumGDPRcpPrefs .cl-intro::-webkit-scrollbar{width:9px}#__tealiumGDPRcpPrefs .cl-intro::-webkit-scrollbar-thumb{background:#B6B6B6;border-radius:5px}.cl-intro i{font-style:italic;font-size:inherit;font-weight:400;line-height:inherit;font-family:Consent-TeleNeo,sans-serif;display:inline}.cl-footer{display:flex;flex-direction:row-reverse;width:100%;box-sizing:border-box;justify-content:flex-end;gap:calc(var(--bu)*0.5)}.cl-footer-accept-buttons{display:flex;flex-direction:row;gap:calc(var(--bu)*0.5)}.cl-links{display:flex;gap:var(--bu);margin-bottom:1em;font-size:var(--font-size-paragraph) !important;padding:0}.cl-links>ul{list-style:none;display:contents}.ods-dialog{background:var(--color-background);color:var(--color-text);position:unset}.ods-dialog:focus-visible,.ods-dialog:focus{outline:0}.ods-dialog-button_left{margin-right:auto}.ods-dialog-button{transition:all .05s ease-out;flex-grow:0;padding:calc(var(--bu)*0.25) calc(var(--bu)*1.25);cursor:pointer;border-radius:999px;display:flex;justify-content:center;align-items:center;gap:8px;outline-color:var(--color-border);font:var(--ods-font-body-m-bold);min-height:calc(var(--bu)*3);outline-offset:0;outline-width:1px;font-size:var(--font-size-paragraph)}.ods-dialog-button:focus{outline-offset:2px;outline-width:2px;outline-style:solid}.ods-dialog-button svg{outline:none}.ods-dialog-button_secondary{color:var(--color-text);background:var(--color-btn-secondary-bg);border:1px var(--color-border) solid}.ods-dialog-button_secondary:hover{background:var(--color-btn-secondary-bg__hover)}.ods-dialog-button_secondary:active{background:var(--color-btn-secondary-bg__active)}.ods-dialog-button_primary{color:var(--color-white);background:var(--color-standard);border:0}.ods-dialog-button_primary:hover{background:var(--color-hovered)}.ods-dialog-button_primary:active{background:var(--color-active)}.cl-link,.ods-link{font:var(--ods-font-body-m-bold);color:var(--color-secondary-regular);text-underline-offset:calc(var(--bu)*.25);transition:all .2ms ease-in-out;text-decoration-thickness:1px;text-decoration:underline;font-size:var(--font-size-paragraph) !important}.cl-link:visited,.ods-link:visited{color:var(--color-secondary-regular)}.cl-link:active,.ods-link:active{color:var(--color-secondary-active)}.cl-link:hover,.ods-link:hover{color:var(--color-secondary-hover);text-decoration-thickness:2px}.cl-link:focus,.ods-link:focus{outline-offset:2px;outline-color:var(--color-border)}@media (max-width:767px){.ods-dialog{width:unset;min-width:0;max-width:none;padding:0;margin:0;left:0;right:0;bottom:0;display:flex}.cl-intro{min-height:0;max-height:unset;max-width:none;flex-grow:1}.cl-footer{display:flex;flex-grow:0;flex-shrink:0;flex-direction:column-reverse}.cl-footer-accept-buttons{display:flex;flex-grow:0;flex-shrink:0;flex-direction:column}.ods-dialog-button_left{margin:unset}}@media (min-width:360px){.cl-outer{grid-template-columns:repeat(6,1fr);padding:0;gap:4px}}@media (min-width:768px){.cl-outer{grid-template-columns:repeat(12,1fr);padding:24px;gap:8px}}@media (min-width:1040px){.cl-outer{grid-template-columns:repeat(12,1fr);padding:24px;gap:8px}}@media (min-width:1440px){.cl-outer{grid-template-columns:repeat(12,1fr);padding:24px;gap:8px}}@media (min-width:1680px){.cl-outer{grid-template-columns:repeat(14,1fr);padding:52px;gap:8px}}.mmLoadingDialog{display:inline-block;position:absolute;width:80px;height:80px;margin:auto;z-index:9999}.mmLoadingDialog div{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;-webkit-animation:mmLoadingDialog 1s cubic-bezier(0,0.2,0.8,1) infinite;animation:mmLoadingDialog 1s cubic-bezier(0,0.2,0.8,1) infinite}.mmLoadingDialog div:nth-child(2){-webkit-animation-delay:-0.5s;animation-delay:-0.5s}@keyframes mmLoadingDialog{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0;left:0;width:72px;height:72px;opacity:0}}#__tealiumGDPRcpPrefs{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:2147483645}#prefLayerContent{width:unset;max-height:80vh}#prefLayerContent .cl-intro{min-height:unset}.cl-option{display:grid;grid-template-columns:1fr minmax(160px,20%);grid-template-rows:auto auto;align-items:center;padding:16px 0;column-gap:calc(var(--bu) * 2.5)}.cl-option__header{font:var(--ods-font-body-l-regulal);grid-column:1 / 2;grid-row:1 / 2;margin:0;color:var(--color-text);font-size:var(--font-size-h3) !important;text-align:left;padding-bottom:4.32px}.cl-option__text{text-decoration:none;max-width:none;text-align:left;grid-column:1 / 2;grid-row:2 / 3;color:var(--color-text);font-size:var(--font-size-paragraph) !important;margin:0;padding-top:7.275px;padding-bottom:6.24px}.cl-option__toggle-container{display:flex;flex-shrink:0;min-width:160px;width:20%;grid-column:2 / 3;grid-row:2}.cl-option__toggle-container--disabled{pointer-events:none}.cl-option__toggle-container--disabled .cl-option__toggle-switch{border-color:var(--color-disabled)}.cl-option .cl-option__text--detail{display:none;margin:0;padding:0}.cl-option__toggle-label{cursor:pointer;display:inline-block;user-select:none;white-space:nowrap}.cl-option__toggle-label:focus{outline:transparent}.cl-option__toggle-switch{display:inline-block;background:var(--color-background);border:1px solid var(--color-border);border-radius:16px;width:calc(var(--bu) * 2.75);height:calc(var(--bu) * 1.5);margin-right:11px;box-sizing:content-box;position:relative;vertical-align:middle;transition:background .25s}.cl-option__toggle-container--disabled .cl-option__toggle-checkbox:checked + .cl-option__toggle-switch{background:var(--color-disabled);color:var(--color-background)}.cl-option__toggle-container--disabled .cl-option__toggle-checkbox:not(:checked) + .cl-option__toggle-switch{background:var(--color-background);color:var(--color-disabled)}.cl-option__toggle-switch:before,.cl-option__toggle-switch:after{content:""}.cl-option__toggle-switch:before{background:var(--color-text);border-radius:50%;width:var(--bu);height:var(--bu);top:4px;left:4px;position:absolute;transition:left .25s;box-sizing:border-box;display:block}.cl-option__toggle-checkbox{position:absolute;opacity:0;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);border:0}.cl-option__toggle-checkbox:focus + .cl-option__toggle-switch{outline:1px solid var(--color-border);outline-offset:2px}@media (prefers-color-scheme:dark){.cl-option__toggle-checkbox:focus + .cl-option__toggle-switch{border-color:var(--color-btn-secondary-bg__hover)}}.cl-option__toggle-checkbox:checked + .cl-option__toggle-switch{background:var(--color-standard)}.cl-option__toggle-checkbox:checked + .cl-option__toggle-switch:before{left:calc(var(--bu) * 1.5);background:var(--color-white)}@media (prefers-color-scheme:dark){.cl-option__toggle-checkbox:checked + .cl-option__toggle-switch:before{background:var(--color-background)}.cl-option__toggle-container--disabled .cl-option__toggle-checkbox:checked + .cl-option__toggle-switch:before{background:var(--color-text)}.cl-details_rules{color:#828282}}.cl-option__toggle-checkbox:checked ~ .cl-option__toggle-text--prevent{display:none}.cl-option__toggle-checkbox:checked ~ .cl-option__toggle-text--allow{display:inline-flex}.cl-option__toggle-text{position:relative;top:2px;cursor:pointer;text-decoration:none;vertical-align:top;white-space:nowrap;font-weight:600;color:var(--color-text)}#boxRequiredCookies ~ .cl-option__toggle-text{color:var(--color-toggle-text-disabled)}.cl-option__toggle-text--prevent{display:inline-flex}.cl-option__toggle-text--allow{display:none}.cl-details_rules{color:#B6B6B6;margin-top:23px;margin-bottom:23px}.cl-details_summary{font:var(--ods-font-body-m-bold);font-weight:700;list-style:none;cursor:pointer;position:relative;height:calc(var(--bu) * 3);padding:0 16px 0 0;display:flex;align-items:center;color:var(--color-text);font-size:var(--font-size-paragraph)}.cl-details_summary::after{content:"";position:absolute;right:0;top:50%;transform:translateY(-50%);width:48px;height:8px;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NTIxIDAuNzIxODlDMTMuMjcxMSAwLjQxNjg5IDEyLjc5NjEgMC4zOTk4OSAxMi40OTIxIDAuNjc5ODlMNy4wMDEwOSA1Ljc0ODg5TDEuNTEwMDkgMC42Nzk4OUMxLjIwNjA5IDAuMzk5ODkgMC43MzEwOTMgMC40MTY4OSAwLjQ0OTA5MyAwLjcyMTg5QzAuMTY5MDkzIDEuMDI2ODkgMC4xODgwOTMgMS41MDA4OSAwLjQ5MjA5MyAxLjc4MTg5TDcuMDAxMDkgNy43ODk4OUwxMy41MTAxIDEuNzgxODlDMTMuODE0MSAxLjUwMDg5IDEzLjgzMzEgMS4wMjY4OSAxMy41NTIxIDAuNzIxODlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=);background-size:contain;background-repeat:no-repeat;background-position:50% 50%;transition:transform .3s ease}@media (prefers-color-scheme:dark){.cl-details_summary::after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NTIxIDAuNzIxODlDMTMuMjcxMSAwLjQxNjg5IDEyLjc5NjEgMC4zOTk4OSAxMi40OTIxIDAuNjc5ODlMNy4wMDEwOSA1Ljc0ODg5TDEuNTEwMDkgMC42Nzk4OUMxLjIwNjA5IDAuMzk5ODkgMC43MzEwOTMgMC40MTY4OSAwLjQ0OTA5MyAwLjcyMTg5QzAuMTY5MDkzIDEuMDI2ODkgMC4xODgwOTMgMS41MDA4OSAwLjQ5MjA5MyAxLjc4MTg5TDcuMDAxMDkgNy43ODk4OUwxMy41MTAxIDEuNzgxODlDMTMuODE0MSAxLjUwMDg5IDEzLjgzMzEgMS4wMjY4OSAxMy41NTIxIDAuNzIxODlaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==)}}.cl-details_summary:hover{background:var(--color-accordion-hover)}.cl-details_summary:focus{outline:var(--color-border) solid 2px}.cl-details_content{margin:calc(var(--bu) / 2) calc(var(--bu)/ 4) calc(var(--bu) * 1.5) calc(var(--bu)/ 4);color:var(--color-text);font-size:var(--font-size-paragraph) !important}.cl-details[open] .cl-details_summary::after{transform:translateY(-50%) rotate(180deg)}@media (min-width:1680px){#prefLayerContent{grid-column:4 / -4;height:80vh}}@media (min-width:1440px) and (max-width:1679px){#prefLayerContent{grid-column:3 / -3;height:80vh}}@media (min-width:1040px) and (max-width:1439px){#prefLayerContent{grid-column:2 / -2;height:90vh}}@media (min-width:768px) and (max-width:1039px) and (orientation:landscape){#prefLayerContent{grid-column:1 / -1;height:70vh}}@media (min-width:768px) and (max-width:1039px) and (orientation:portrait){#prefLayerContent{grid-column:1 / -1;height:80vh}.cl-option{gap:calc(var(--bu) / 1.25);grid-template-columns:1fr;grid-template-rows:auto auto auto}.cl-option__header{grid-column:1 / 1;grid-row:1 / 2}.cl-option__text{grid-column:1 / 1;grid-row:3 / 4}.cl-option__toggle-container{display:flex;flex-shrink:0;grid-column:1 / 1;grid-row:2 / 3}}@media (max-width:767px){#prefLayerContent{width:100vw;height:100vh;max-height:unset;max-width:unset;grid-column:1 / -1}.cl-option{gap:calc(var(--bu) / 1.25);grid-template-columns:1fr;grid-template-rows:auto auto auto;padding:0}.cl-option__header{grid-column:1 / 1;grid-row:1 / 2}.cl-option__text{margin:0;grid-column:1 / 1;grid-row:3 / 4}.cl-option__toggle-container{display:flex;flex-shrink:0;grid-column:1 / 1;grid-row:2 / 3}@keyframes slideUpPref{0%{height:0;align-self:end}100%{height:100vh;align-self:end}}#prefLayerContent{animation-name:slideUpPref;animation-duration:1s}}';
window.TEALIUM.preferences_prompt.html = '<!-- Version: 4.0 Date: 15.05.2025--> <div class=cl-outer > <div class=mmLoadingPrompt  style="display:none;"> <div></div> <div></div> </div> <dialog class="cl-main ods-dialog" id=prefLayerContent  aria-modal=true  role=alertdialog  aria-labelledby=cl-header-pref  autofocus tabindex=-1 > <div class=cl-content > <h2 class=cl-header  id=cl-header-pref >{{title}}</h2> <div class=cl-intro > {{message}} <div class=cl-links > <ul> <li> <a href="{{privacy_link}}" class="ods-link cl-data-privacy-url" target=_blank  data-tab> {{privacy}} </a> <li> <a href="{{partner_list_link}}" class="ods-link cl-data-imprint-url" target=_blank  data-tab> {{partner_list}} ({{number_of_partners}})</a> </ul> </div> <div class=cl-option  aria-describedby=category_required_description  aria-labelledby=category_required_title > <h3 class=cl-option__header  id=category_required_title >{{category_required_title}}</h3> <p class=cl-option__text  id=category_required_description >{{category_required_description}}</p> <div class="cl-option__toggle-container cl-option__toggle-container--disabled"> <label class=cl-option__toggle-label  for=boxRequiredCookies > <input class=cl-option__toggle-checkbox  type=checkbox  checked value=required_cookies  id=boxRequiredCookies  disabled aria-labelledby=category_required_title > <span class=cl-option__toggle-switch ></span> <span class=cl-option__toggle-text  aria-hidden=true >{{required}}</span> </label> </div> </div> <hr class=cl-details_rules > <div class=cl-option  aria-describedby=category_analytics_description  aria-labelledby=analyticsTitle > <h3 class=cl-option__header  id=analyticsTitle >{{category_analytics_title}}</h3> <p class=cl-option__text  id=category_analytics_description >{{category_analytics_description}} </p> <div class=cl-option__toggle-container > <label class=cl-option__toggle-label  for=boxAnalyticalCookies  aria-labelledby=analyticsTitle > <input class=cl-option__toggle-checkbox  type=checkbox  value=analytics  data-consent-num=1  id=boxAnalyticalCookies  aria-labelledby=analyticsTitle  data-tab /> <span class=cl-option__toggle-switch ></span> <span class="cl-option__toggle-text cl-option__toggle-text--prevent" aria-hidden=true >{{no}}</span> <span class="cl-option__toggle-text cl-option__toggle-text--allow" aria-hidden=true >{{yes}}</span> </label> </div> </div> <details class=cl-details > <summary class=cl-details_summary  aria-describedby=analyticsTitle  data-tab>{{expand_detail_button}}</summary> <p class=cl-details_content >{{category_analytics_detail}}</p> <a class="cl-details_content ods-link cl-data-imprint-url" href="{{category_analytics_partner_list_link}}" target=_blank  data-tab>{{partner_list}}</a> </details> <hr class=cl-details_rules > <div class=cl-option  aria-describedby=category_display_ads_description  aria-labelledby=displayAdsTitle > <h3 class=cl-option__header  id=displayAdsTitle >{{category_display_ads_title}}</h3> <p class=cl-option__text  id=category_display_ads_description > {{category_display_ads_description}}</p> <div class=cl-option__toggle-container > <label class=cl-option__toggle-label  for=boxMarketingCookies  aria-labelledby=displayAdsTitle > <input class=cl-option__toggle-checkbox  type=checkbox  value=display_ads  data-consent-num=3  id=boxMarketingCookies  aria-labelledby=displayAdsTitle  data-tab /> <span class=cl-option__toggle-switch ></span> <span class="cl-option__toggle-text cl-option__toggle-text--prevent" aria-hidden=true >{{no}}</span> <span class="cl-option__toggle-text cl-option__toggle-text--allow" aria-hidden=true >{{yes}}</span> </label> </div> </div> <details class=cl-details > <summary class=cl-details_summary  aria-describedby=displayAdsTitle  data-tab>{{expand_detail_button}}</summary> <p class=cl-details_content >{{category_display_ads_detail}}</p> <a class="cl-details_content ods-link cl-data-imprint-url" href="{{category_display_ads_partner_list_link}}" target=_blank  data-tab>{{partner_list}}</a> </details> <!-- Analytics through Partners start--> <section id=analyticsThroughPartnersCategory  style="display: none;"> <hr class=cl-details_rules > <div class=cl-option  aria-describedby=category_personalization_description  aria-labelledby=personalizationTitle > <h3 class=cl-option__header  id=personalizationTitle >{{category_personalization_title}}</h3> <p class=cl-option__text  id=category_personalization_description >{{category_personalization_description}}</p> <div class=cl-option__toggle-container > <label class=cl-option__toggle-label  for=boxPersonalizationCookies  aria-labelledby=personalizationTitle > <input class=cl-option__toggle-checkbox  type=checkbox  value=social  data-consent-num=6  id=boxPersonalizationCookies  aria-labelledby=personalizationTitle  data-tab /> <span class=cl-option__toggle-switch ></span> <span class="cl-option__toggle-text cl-option__toggle-text--prevent" aria-hidden=true >{{no}}</span> <span class="cl-option__toggle-text cl-option__toggle-text--allow" aria-hidden=true >{{yes}}</span> </label> </div> </div> <details class=cl-details > <summary class=cl-details_summary  aria-describedby=personalizationTitle  data-tab>{{expand_detail_button}}</summary> <p class=cl-details_content >{{category_personalization_detail}}</p> <a class="cl-details_content ods-link cl-data-imprint-url" href="{{category_personalization_partner_list_link}}" target=_blank  data-tab>{{partner_list}}</a> </details> </section> <!-- Analytics through Partners end--> <hr class=cl-details_rules > <div class=cl-option  aria-describedby=category_social_description  aria-labelledby=socialAdsTitle > <h3 class=cl-option__header  id=socialAdsTitle >{{category_social_title}}</h3> <p class=cl-option__text  id=category_social_description >{{category_social_description}}</p> <div class=cl-option__toggle-container > <label class=cl-option__toggle-label  for=boxThirdPartyCookies  aria-labelledby=socialAdsTitle > <input class=cl-option__toggle-checkbox  type=checkbox  value=social  data-consent-num=7  id=boxThirdPartyCookies  aria-labelledby=socialAdsTitle  data-tab /> <span class=cl-option__toggle-switch ></span> <span class="cl-option__toggle-text cl-option__toggle-text--prevent" aria-hidden=true >{{no}}</span> <span class="cl-option__toggle-text cl-option__toggle-text--allow" aria-hidden=true >{{yes}}</span> </label> </div> </div> <details class=cl-details > <summary class=cl-details_summary  aria-describedby=socialAdsTitle  data-tab>{{expand_detail_button}}</summary> <p class=cl-details_content >{{category_social_detail}}</p> <a class="cl-details_content ods-link cl-data-imprint-url" href="{{category_social_partner_list_link}}" target=_blank  data-tab>{{partner_list}}</a> </details> <section id=utiqCategory  style="display: none;"> <hr class=cl-details_rules > <div class=cl-option  aria-describedby=category_cookiematch_description  aria-labelledby=cookiematchTitle > <h3 class=cl-option__header  id=cookiematchTitle >{{category_cookiematch_title}}</h3> <p class=cl-option__text  id=category_cookiematch_description  style="margin-top: 4px;">{{category_cookiematch_description}}</p> <div class=cl-option__toggle-container > <label class=cl-option__toggle-label  for=boxUtiqCookies  aria-labelledby=cookiematchTitle > <input class=cl-option__toggle-checkbox  type=checkbox  value=cookiematch  data-consent-num=10  id=boxUtiqCookies  aria-labelledby=cookiematchTitle  data-tab /> <span class=cl-option__toggle-switch ></span> <span class="cl-option__toggle-text cl-option__toggle-text--prevent" aria-hidden=true >{{no}}</span> <span class="cl-option__toggle-text cl-option__toggle-text--allow" aria-hidden=true >{{yes}}</span> </label> </div> </div> <details class=cl-details > <summary class=cl-details_summary  aria-describedby=cookiematchTitle  data-tab>{{expand_detail_button}}</summary> <p class=cl-details_content >{{category_cookiematch_detail}}</p> <a class="cl-details_content ods-link cl-data-imprint-url" href="{{category_cookiematch_partner_list_link}}" target=_blank  data-tab>{{partner_list}}</a> </details> </section> </div> <div class=cl-footer > <div class=cl-footer-accept-buttons > <button id=consentAcceptChoice  class="ods-dialog-button ods-dialog-button_primary" data-tab>{{accept_choice_button}}</button> <button id=consentSettingsAcceptAll  class="ods-dialog-button ods-dialog-button_primary" data-tab> {{confirmation_button}}</button> </div> <button id=backBtn  class="ods-dialog-button ods-dialog-button_left ods-dialog-button_secondary" data-tab> <svg width=14  height=10  viewBox="0 0 14 10" fill=none  xmlns="http://www.w3.org/2000/svg"> <path fill-rule=evenodd  clip-rule=evenodd  d="M10.1668 3.00002H5.3335V0.554688L0.833496 3.50002L5.3335 6.44535V4.00002H10.1668C11.3615 4.00002 12.3335 4.97202 12.3335 6.16669C12.3335 7.36135 11.3615 8.33335 10.1668 8.33335H7.50016C7.22416 8.33335 7.00016 8.55702 7.00016 8.83335C7.00016 9.10969 7.22416 9.33335 7.50016 9.33335H10.1668C11.9128 9.33335 13.3335 7.91269 13.3335 6.16669C13.3335 4.42069 11.9128 3.00002 10.1668 3.00002Z" fill=currentColor  aria-hidden=true /> </svg> {{back_button}} </button> </div> </div> </dialog> </div>';
window.TEALIUM.preferences_prompt.js = '(function(){function getCookie(cname){try{var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var cookieArray=decodedCookie.split(";");for(var i=0;i<cookieArray.length;i++){var currentCookie=cookieArray[i];while(currentCookie.charAt(0)==" "){currentCookie=currentCookie.substring(1);};if(currentCookie.indexOf(name)==0){return currentCookie.substring(name.length,currentCookie.length);}};return"";}catch(error){console.error("Error in getCookie:",error);}};function goBackToPrompt(){try{utag.gdpr.showExplicitConsent();document.getElementById("__tealiumGDPRcpPrefs").style.display="none";deferredUtagLink("content.button.consent-go-back");}catch(error){console.error("Error in goBackToPrompt:",error);}};function updateConsentToggles(){try{var analyticsToggle=document.getElementById("boxAnalyticalCookies");var partnerMarketingToggle=document.getElementById("boxMarketingCookies");var partnerAnalyticsToggle=document.getElementById("boxPersonalizationCookies");var thirdPartyToggle=document.getElementById("boxThirdPartyCookies");var utiqToggle=document.getElementById("boxUtiqCookies");var consent=getCookie(utag.gdpr.cookieNS);if(consent.indexOf("c1:1")>-1)analyticsToggle.checked=true;if(consent.indexOf("c3:1")>-1)partnerMarketingToggle.checked=true;if(consent.indexOf("c6:1")>-1)partnerAnalyticsToggle.checked=true;if(consent.indexOf("c7:1")>-1)thirdPartyToggle.checked=true;if(consent.indexOf("c10:1")>-1)utiqToggle.checked=true;if(consent.indexOf("consent:false")>-1){analyticsToggle.checked=false;partnerMarketingToggle.checked=false;partnerAnalyticsToggle.checked=false;thirdPartyToggle.checked=false;utiqToggle.checked=false;};if(consent.indexOf("consent:true")>-1&&!(consent.indexOf("c1:")>-1)){analyticsToggle.checked=true;partnerMarketingToggle.checked=true;partnerAnalyticsToggle.checked=true;thirdPartyToggle.checked=true;utiqToggle.checked=true;}}catch(error){console.error("Error in updateConsentToggles:",error);}};function acceptAllCookies(){try{var finalConsent={};finalConsent[1]=1;finalConsent[3]=1;finalConsent[7]=1;if(window.consentMngmntConfig.categoryPartnerAnalyticsEnabled){finalConsent[6]=1;}else finalConsent[6]=0;if(window.consentMngmntConfig.usesUtiq){finalConsent[10]=1;}else finalConsent[10]=0;utag.gdpr.setPreferencesValues(finalConsent);deferredUtagLink("content.layer.consent-agree");triggerConsentChange();initiateLayerClosing(true);}catch(error){console.error("Error in acceptAllCookies:",error);}};function saveConsentPreferences(){try{var finalConsent={};var consentBoxes=document.querySelectorAll(".cl-option__toggle-checkbox:not(#boxRequiredCookies)");for(var i=0;i<consentBoxes.length;i++){finalConsent[consentBoxes[i].getAttribute("data-consent-num")]=Number(consentBoxes[i].checked);};if(!window.consentMngmntConfig.usesUtiq){finalConsent[10]=0;};if(!window.consentMngmntConfig.categoryPartnerAnalyticsEnabled){finalConsent[6]=0;};utag.gdpr.setPreferencesValues(finalConsent);trackPreferences(finalConsent);triggerConsentChange();initiateLayerClosing(finalConsent[3]);}catch(error){console.error("Error in saveConsentPreferences:",error);}};function trackPreferences(consent){try{var catNames={1:"analytics",3:"marketing",6:"personalization",7:"drittanbieter",10:"cookiematch"};for(var key in consent){deferredUtagLink("content.layer.consent-"+catNames[key]+"."+(consent[key]?"yes":"no"));}}catch(error){console.error("Error in trackPreferences:",error);}};function closeConsentLayer(){try{var gdprDomObjects=[gdprModal=document.getElementById("__tealiumGDPRecModal"),gdprStyle=document.getElementById("__tealiumGDPRecStyle"),gdprScript=document.getElementById("__tealiumGDPRecScript"),gdprPrefs=document.getElementById("__tealiumGDPRcpPrefs"),gdprPrefsScript=document.getElementById("__tealiumGDPRcpPrefsScript"),gdprPrefsStyle=document.getElementById("__tealiumGDPRcpStyle")];for(var i=0;i<gdprDomObjects.length;i++){if(gdprDomObjects[i]){gdprDomObjects[i].parentElement.removeChild(gdprDomObjects[i]);}}}catch(error){console.error("Error in closeConsentLayer:",error);}};function deferredUtagLink(linkData){try{setTimeout(function(){try{utag.link({"wt_link_id":linkData});}catch(error){console.error("Error in deferredUtagLink setTimeout:",error);}},1000);}catch(error){console.error("Error in deferredUtagLink:",error);}};function triggerConsentChange(){try{var consentEvent=new CustomEvent("consentChanged");window.dispatchEvent(consentEvent);}catch(error){console.error("Error in triggerConsentChange:",error);}};function initiateLayerClosing(marketingCookies){try{if(window.consentMngmntConfig.usesMaxymiser&&marketingCookies){document.getElementById("prefLayerContent").style.display="none";document.getElementById("mmLoadingDialog").style.display="block";setTimeout(closeConsentLayer,3000);}else{closeConsentLayer();}}catch(error){console.error("Error in initiateLayerClosing:",error);}};try{if(window.consentMngmntConfig.usesUtiq){var utiqCategory=document.getElementById("utiqCategory");if(utiqCategory){utiqCategory.style.display="contents";};var utiqOptionalTexts=document.querySelectorAll(".utiqDisplayOptional");utiqOptionalTexts.forEach(element=>{var displayType=element.dataset.display||"block";element.style.display=displayType;});};if(window.consentMngmntConfig.categoryPartnerAnalyticsEnabled){var personalizationCategory=document.getElementById("analyticsThroughPartnersCategory");if(personalizationCategory){personalizationCategory.style.display="contents";}};if(window.consentMngmntConfig.useCrossDeviceOptionalText){var crossDeviceText=document.getElementById("crossDeviceOptionalText");if(crossDeviceText){crossDeviceText.style.display="contents";}};var btnAcceptSome=document.getElementById("consentAcceptChoice");var btnAcceptAll=document.getElementById("consentSettingsAcceptAll");var btnGoBack=document.getElementById("backBtn");btnAcceptSome.addEventListener("click",saveConsentPreferences);btnAcceptAll.addEventListener("click",acceptAllCookies);btnGoBack.addEventListener("click",goBackToPrompt);updateConsentToggles();var toggleLabels=document.querySelectorAll(".cl-option__toggle-label");for(var k=0;k<toggleLabels.length;k++){toggleLabels[k].addEventListener("keydown",function(e){try{if(["Space","Enter"].includes(e.code)){e.preventDefault();var currentBox=document.getElementById(this.getAttribute("for"));currentBox.checked=!currentBox.checked;e.target.ariaChecked==="true"?e.target.ariaChecked=false:e.target.ariaChecked=true;}}catch(error){console.error("Error in toggleLabels keydown event:",error);}});};var toggleLabelInputs=document.querySelectorAll(".cl-option__toggle-label input");for(var k=0;k<toggleLabelInputs.length;k++){toggleLabelInputs[k].addEventListener("change",function(e){try{var target=e.target;target.parentElement.ariaChecked=target.checked;}catch(error){console.error("Error in toggleLabelInputs change event:",error);}});}}catch(error){console.error("Error in main script initialization:",error);};var dialog=document.getElementById("prefLayerContent");var focusableElements=[...dialog.querySelectorAll("[data-tab]")];var firstEl=focusableElements[0];var lastEl=focusableElements[focusableElements.length-1];dialog.addEventListener("keydown",(e)=>{if(e.key==="Tab"){if(e.shiftKey){if(document.activeElement===firstEl){e.preventDefault();lastEl.focus();}}else{if(document.activeElement===lastEl){e.preventDefault();firstEl.focus();}}}});})();';
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
/**
 * Title: Consent Sync
 * Run: Preloader (runs before ConsentHide Extension)
 * Version: 2.3 (allow for custom cookie name)
 * Date: 23.01.2023
 */

(function() {

    // Only execute the extension if ConsentManagementConfig is present
    if (window.consentMngmntConfig.consentSync) {
    
        // copy local consent to remote
        function sendConsentToServer() {
            var setRequest = new XMLHttpRequest();
            setRequest.open('GET', 'https://ebs10.telekom.de/opt-in/set.php?consent=' + utag.data['cp.' + utag.gdpr.cookieNS]);
            setRequest.withCredentials = true;
            setRequest.send();
        }
    
        // event 'consentChanged' is fired in the Consent Management Scripts
        window.addEventListener('consentChanged', sendConsentToServer);
    
        // if the server returns an error show the consent layer
        function consentSyncFallback() {
            logCSMsg("Consent Sync Error: Network Error");
            logCSMsg("Consent Sync Fallback: Showing Consent Prompt");
            triggerExplicitConsent();
            triggerPageEvents();
        }
    
    
        function initiateGetRequest() {
            var getRequest = new XMLHttpRequest();
            getRequest.addEventListener("load", responseHandler);
            getRequest.addEventListener("error", consentSyncFallback)
            getRequest.open('GET', 'https://ebs10.telekom.de/opt-in/cookie.php');
            getRequest.withCredentials = true;
            getRequest.send();
        }
    
        // substitutes utag.gdpr.getCookieValues() function as utag.gdpr may not yet be present
        function getCookie(e) {
            for (var n = e + "=", t = decodeURIComponent(document.cookie).split(";"), o = 0; o < t.length; o++) {
                for (var r = t[o];
                    " " == r.charAt(0);) r = r.substring(1);
                if (0 == r.indexOf(n)) return r.substring(n.length, r.length)
            }
            return false;
        }
        
        // For debugging. To use, enter window.consentsync_debug=true in console
        function logCSMsg(msg) {
            if (getCookie('consentsync_debug') === 'true') {
                console.log('[CONSENT SYNC] ' + msg);
            } 
        }
    
        // Display Consent Layer
        function triggerExplicitConsent() {
            var consentModalPromptShowing = document.getElementById('__tealiumGDPRecModal') !== null; // prompt
            var consentModalSettingsShowing = document.getElementById('__tealiumGDPRcpPrefs') !== null; // settings
            // only if no local consent is present and not on hiddenPages and not already showing
            if(
                !getCookie(utag.gdpr.cookieNS) &&
                !window.consentMngmntConfig.hideCondition &&
                ((typeof utag_data === "undefined") || window.consentMngmntConfig.hiddenPages.indexOf(utag_data['page_content_id']) === -1) && 
                !(window.consentMngmntConfig.hiddenPages.indexOf(window.location.href) > -1) &&
                !consentModalPromptShowing && !consentModalSettingsShowing
            ) { 
                if (typeof utag != "undefined" && typeof utag.gdpr != "undefined") {
                    if (window.consentMngmntConfig.waitForViewEvent) {
                        utag.gdpr.triggerExplicitConsent = utag.gdpr.triggerExplicitConsent || triggerExplicitConsent;
                        if (window.viewEventRegistered) {
                            utag.gdpr.showExplicitConsent();
                        }
                    }
                    else {
                        utag.gdpr.showExplicitConsent();
                    }

                } else {
                    document.removeEventListener("readystatechange", this);
                    document.addEventListener("readystatechange", this);
                }
            }
        }
        
        // push page events into queue in case utag is not defined yet
        function triggerPageEvents(){
            if ((window.utag && window.utag.udoname) || (window.utag && window.utag_data)) {
                window.consentSyncEventStack = window.consentSyncEventStack || [];
                while(e = window.consentSyncEventStack.shift()){
                    if(e.event == 'link')
                        utag.tealiumLink(e.data, e.cb, e.uids);
                    if(e.event == 'view')
                        utag.tealiumView(e.data, e.cb, e.uids);
                }
                document.removeEventListener("readystatechange", this);
                window.consentSyncReady = true;
            } else {
                document.removeEventListener("readystatechange", this);
                document.addEventListener("readystatechange", this);
            }
        }
        
        try {
            window.consentsync_debug = window.consentsync_debug || getCookie('consentsync_debug');
            window.utag_data = window.utag_data || {};
        
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.noview = true;
    
            var responseHandler = function responseHandler() {
                if (this.status === 200) {
        
                    var timestampRegEx = new RegExp(/ts:([0-9]+)\|?/);
        
                    // get local cookie
                    var localTimestamp = 0;
                    var localConsentCookie = utag.data['cp.' + utag.gdpr.cookieNS];
                    if (timestampRegEx.test(localConsentCookie)){
                        localTimestamp = localConsentCookie.replace(/.*\|?ts:([0-9]+)\|?.*/, "$1");
                        logCSMsg('Local Cookie: ' + localConsentCookie);
                    }
        
                    // get remote cookie
                    var remoteTimestamp = 0;
                    var remoteConsentCookie = false;
                    if (this.responseText !== '' && timestampRegEx.test(this.responseText)) {
                        remoteConsentCookie = this.responseText;
                        remoteTimestamp = remoteConsentCookie.replace(/.*\|?ts:([0-9]+)\|?.*/, "$1");
                        logCSMsg('Remote Cookie: ' + remoteConsentCookie);
                    }
                    
                    // CASE: Neither local nor remote consent exists
                    if (!localConsentCookie && !remoteConsentCookie) {
                        logCSMsg('No Consent Information found, triggering Consent Display');
                        triggerExplicitConsent();
                        triggerPageEvents();
                        return;
                    }
                    
                    // CASE: Remote cookie is newer or local does not exist
                    if (remoteTimestamp > localTimestamp) {
                        logCSMsg('Writing Remote Cookie to Local Storage');
                        var i, optOut, values = {}, optOutData = decodeURI(this.responseText).split("|");
                        for (i = 0; i < optOutData.length; i++) {
                            optOut = optOutData[i].split(":");
                            values[optOut[0]] = optOut[1];
                        }
                        utag.gdpr.setCookie(values);
                        triggerPageEvents();
                        return;
                    }
                    
                    // CASE: Local and remote consent are identical => extend cookies expiry date
                    // CASE: Only local consent is present => send to remote
                    // CASE: Local consent is newer => replace remote
                    logCSMsg('Sending Local Cookie to Sync Server');
                    sendConsentToServer();
                    triggerPageEvents();
                }
            };
        
            initiateGetRequest();
    
        } catch (e) {
            logCSMsg("Consent Sync Error: " + e);
            logCSMsg("Consent Sync Fallback: Showing Consent Prompt");
            triggerExplicitConsent();
            triggerPageEvents();
        }
    }
    
    })();
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
function getQueryParameter(n){var t=null,e=[];return location.search.substr(1).split("&").forEach(function(o){(e=o.split("="))[0].toLowerCase()===n.toLowerCase()&&(t=decodeURIComponent(e[1]))}),t}

function optOutAll() {
    var isUtagDefined = typeof utag !== 'undefined';
    var isGdprDefined = isUtagDefined && typeof utag.gdpr !== 'undefined';

    if (isGdprDefined) {
        utag.gdpr.setConsentValue(0);
        utag.gdpr.consent_prompt.noShow = "true";
        var target = window.document.querySelector('#__tealiumGDPRecModal');
        // Fallback for sites that display the layer nonetheless
        if (target) {
            target.style.display = 'none';
        }
    } else {
        setTimeout(optOutAll, 10);
    }
}

var isWebview = getQueryParameter("utag_app") == "msa" || getQueryParameter("utag_app") == "mma";

if(isWebview) {
    optOutAll();
}
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
/**
 * Title: Consent Utiq
 * Run: Once - Preloader (runs after ConsentSync Extension)
 * Version: 1.2
 * Date: 25.03.2025
 */

(function () {

    function setCookieObjectValue(cname, cvalue, cdomain, exdays = 90) {
        try {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            var value = JSON.stringify(cvalue);
            value = encodeURIComponent(value);
            document.cookie = cname + "=" + value + "; " + expires + ";domain=" + cdomain + ";path=/;secure;samesite=none";
        } catch(e) {
            console.error("Could not stringify JSON to cookie " + cname);
        }
    }

    function getCookieObjectValue(cname) {
        try {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = decodeURIComponent(ca[i]);
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return JSON.parse(c.substring(name.length, c.length));
                }
            }
        } catch(e) {
            console.error("Could not parse JSON from cookie " + cname);
        }
        return {};
    }

    //wrapper function to wait for utag.gdpr
    function initializeUtiq() {
        if (window.consentMngmntConfig.usesUtiq) {
            loadUtiqSDK();

            // event 'consentChanged' is fired in the Consent Management Scripts
            window.addEventListener('consentChanged', loadUtiqSDK);
            window.addEventListener('consentChanged', passConsentToUtiq); //on consent change on site -> snychronize to utiq web SDK
        }
    }


    // load UTIQ SDK if valid consent exists
    function loadUtiqSDK(event = null, i = 0) {
        if (typeof window.utag !== "undefined" && typeof window.utag.gdpr !== "undefined") {
            if (typeof window.Utiq !== "undefined" || !utag.gdpr.getSelectedCategories().includes("cookiematch")) return;

            window.Utiq = window.Utiq || {};
            window.Utiq.config = {
                CMP: 'none',
                customUtiqHost: window.consentMngmntConfig.utiqURL,
                customizationOptions: {
                    buttons: {
                        bodyColor: '#e20074',
                        textColor: '#ffffff',
                        radius: 4,
                    },
                    contentTextColor: '#262626'
                },
                listeners: {
                    onInitialised: () => {
                        passConsentToUtiq();
                    },
                    onIdsAvailable: ({ mtid, attrid, category }) => {
                        if (utag && utag.data) {
                            utag.data["utiq_mtid"] = mtid;
                        }

                        // persist martech pass ID in tel_usr_ids cookie
                        var currentTelUsrIdsObject = getCookieObjectValue("tel_usr_ids");
                        currentTelUsrIdsObject["utiq_mtid"] = mtid;
                        setCookieObjectValue("tel_usr_ids", currentTelUsrIdsObject, utag.loader.lh());

                        //send utag.link() tracking call
                        utag.link({
                            "event": "utiq_ids_available",
                            "utiq_mtid": mtid,
                            "wt_link_id": "wt_ignore",
                        });
                    },
                    onConsentUpdateFinished: ({ isConsentGranted }) => {
                        updateConsentCookieValue(isConsentGranted);
                    }
                }
            };

            const s = document.createElement("script");
            s.type = "text/javascript";
            s.src = window.consentMngmntConfig.utiqURL + "/utiqLoader.js";
            s.onload = () => {
                console.log("Utiq SDK loaded successfully - applying Callbacks on Event Listeners");
            };
            s.onerror = () => {
                console.error("Failed to load Utiq SDK");
            };
            document.head.appendChild(s);
        } else {
            if (i < 100)
                setTimeout(function () { loadUtiqSDK(null, i + 1); }, 100);
        }
    }

    // Checks consent cookie value for Utiq consent and pass it to Utiq SDK
    function passConsentToUtiq() {
        // if consent cookie isnt found or consent value is false
        var utiqConsentGiven = utag.gdpr.getSelectedCategories().includes("cookiematch");
        window.Utiq ||= {};
        window.Utiq.queue ||= [];
        window.Utiq.queue.push(() => {
            try {
                window.Utiq.API.handleConsentChange(utiqConsentGiven)
            } catch (err) {
                console.error(`handleConsentChange API call failed. Reason: ${err.message}`)
            }
        });
    }

    // Updates the Utiq consent value in the consent cookie
    function updateConsentCookieValue(isUtiqConsentGranted) {
        var consentValue = isUtiqConsentGranted ? "1" : "0";
        //we use the consent category c10 "cookie match" for utiq
        // No need to Check if utag.gdpr is available before calling this, bc callback is only defined after utag.gdpr is initialized
        utag.gdpr.setPreferencesValues({ "cookiematch": consentValue });
    }

    initializeUtiq();
})();
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
/**
 * Title: Init Utiq Consent Revoke Popup
 * Run: Once - Preloader
 * Version: 1.1
 * Date: 12.03.2025
 */
(function () {
    window.closeUtiqRevokePopup = function() {
        var utiqRevokeHideLayer = document.getElementById("utiq-revoke-hide-layer");
        if (typeof utiqRevokeHideLayer !== "undefined") {
            utiqRevokeHideLayer.remove();
            removeUtiqRevokePopupStyles();
        }
    }
    
    window.openUtiqRevokePopup = function() {

        var language = (typeof utag !== "undefined" && typeof utag.gdpr !== "undefined" && typeof utag.gdpr.getLanguage !== "undefined") ? utag.gdpr.getLanguage() : "en";
        if (language.length > 2) language = language.substring(0, 2);
        var dataController = (typeof utag !== "undefined" 
                            && typeof utag.gdpr !== "undefined" 
                            && utag.gdpr.consent_prompt 
                            && typeof utag.gdpr.consent_prompt.languages[language] !== "undefined" 
                            && typeof utag.gdpr.consent_prompt.languages[language].custom_tokens.data_controller !== "undefined") 
                            ? utag.gdpr.consent_prompt.languages[language].custom_tokens.data_controller : window.location.hostname;

        var utiqRevokePopupTexts = {
            en: {
                title: "You have successfully withdrawn your Utiq consent for " + dataController,
                subtitle: "Further information on the Utiq service can be found in <a target=\"_blank\" href=\"https://consenthub.utiq.com/\">Utiq\'s consenthub</a>.",
                buttonText: "Close"
            },
            de: {
                title: "Du hast erfolgreich deine Einwilligung zur Nutzung von Utiq-Diensten über " + dataController + " widerrufen.",
                subtitle: "Weitere Informationen zur Nutzung von Utiq-Diensten lassen sich in <a target=\"_blank\" href=\"https://consenthub.utiq.com/\">Utiq\'s \consenthub\</a> finden.",
                buttonText: "Schließen"
            }
        }
    
        var utiqRevokeHideLayer = document.createElement("div");
        var utiqRevokeWrapper = document.createElement("div");
        var utiqRevokeLogoWrapper = document.createElement("div");
        var utiqRevokeLogo = document.createElement("img");
        var utiqRevokeTitleWrapper = document.createElement("div");
        var utiqRevokeTitle = document.createElement("h4");
        var utiqRevokeSubtitleWrapper = document.createElement("div");
        var utiqRevokeSubtitle = document.createElement("p");
        var utiqRevokeButtonWrapper = document.createElement("div");
        var utiqRevokeButton = document.createElement("a");
    
        utiqRevokeHideLayer.id = "utiq-revoke-hide-layer";
        utiqRevokeWrapper.id = "utiq-revoke-outer";
        utiqRevokeLogoWrapper.id = "utiq-revoke-logo-container";
        utiqRevokeLogo.id = "utiq-revoke-logo";
        utiqRevokeTitleWrapper.id = "utiq-revoke-title-container";
        utiqRevokeSubtitleWrapper.id = "utiq-revoke-subtitle-container";
        utiqRevokeButtonWrapper.id = "utiq-revoke-button-container";
        utiqRevokeButton.id = "utiq-revoke-button-close";
    
        utiqRevokeLogo.src = "https://ebs10.telekom.de/opt-in/icon/utiq.svg";
    
        utiqRevokeButtonWrapper.appendChild(utiqRevokeButton);
        utiqRevokeSubtitleWrapper.appendChild(utiqRevokeSubtitle);
        utiqRevokeTitleWrapper.appendChild(utiqRevokeTitle);
        utiqRevokeLogoWrapper.appendChild(utiqRevokeLogo);
        utiqRevokeWrapper.appendChild(utiqRevokeLogoWrapper);
        utiqRevokeWrapper.appendChild(utiqRevokeTitleWrapper);
        utiqRevokeWrapper.appendChild(utiqRevokeSubtitleWrapper);
        utiqRevokeWrapper.appendChild(utiqRevokeButtonWrapper);
        utiqRevokeHideLayer.appendChild(utiqRevokeWrapper);
    
        utiqRevokeButton.addEventListener("click", window.closeUtiqRevokePopup);
    
        insertUtiqRevokePopupStyles();

        if (typeof utiqRevokePopupTexts[language] !== "undefined") {
            utiqRevokeTitle.innerText = utiqRevokePopupTexts[language].title;
            utiqRevokeSubtitle.innerHTML = utiqRevokePopupTexts[language].subtitle;
            utiqRevokeButton.innerText = utiqRevokePopupTexts[language].buttonText;
    
            document.body.insertAdjacentElement("afterbegin", utiqRevokeHideLayer);
        } else {
            utiqRevokeTitle.innerText = utiqRevokePopupTexts["en"].title;
            utiqRevokeSubtitle.innerHTML = utiqRevokePopupTexts["en"].subtitle;
            utiqRevokeButton.innerText = utiqRevokePopupTexts["en"].buttonText;
    
            document.body.insertAdjacentElement("afterbegin", utiqRevokeHideLayer);
        }
    }
    
    window.revokeUtiqConsentWithPopup = function() {
        utag.gdpr.setPreferencesValues({ "cookiematch": "0" });
        // dispatch event -> activates listener to pass new consent to Utiq SDK
        var consentEvent = new CustomEvent("consentChanged");
        window.dispatchEvent(consentEvent);
        openUtiqRevokePopup();
    }

    function insertUtiqRevokePopupStyles() {
        var sheet = (function() {
            // Create the <style> tag
            var style = document.createElement("style");
            style.id = "utiqRevokePopupStylesheet";
            // WebKit hack
            style.appendChild(document.createTextNode(""));
            // Add the <style> element to the page
            document.head.appendChild(style);
            return style.sheet;
        })();

        sheet.insertRule("#utiq-revoke-hide-layer { z-index: 214748365; width: 100%; height: 100%; top: 0; left: 0; position: fixed; background-color: #000A; justify-content: center; align-items: center; display: flex; }", 0);
        sheet.insertRule("#utiq-revoke-outer { z-index: 214748366; position: fixed; background-color: white; border-radius: 15px; min-width: 300px; min-height: 300px; max-width: 60vw; max-height: 50vh; display: grid; padding: 0 12px; }", 1);
        sheet.insertRule("#utiq-revoke-outer > div { display: flex; }", 2);
        sheet.insertRule("#utiq-revoke-outer > div > p { margin: 0; padding: 0 32px; text-align: left; font-size: 16px; font-weight: 400; line-height: 1.2; }", 3);
        sheet.insertRule("#utiq-revoke-outer > div > h4 { margin: 0; padding: 0 32px; text-align: center; font-weight: 700; font-size: 22px; line-height: 1.2; }", 4);
        sheet.insertRule("#utiq-revoke-logo-container { justify-content: start; align-self: center; margin-top: 10px; margin-bottom: 5px; }", 5);
        sheet.insertRule("#utiq-revoke-logo { width: 85px; height: auto; margin-left: 15px; margin-top: 5px; }", 6);
        sheet.insertRule("#utiq-revoke-title-container { justify-content: center; text-align: center; font-size: 20px; }", 7);
        sheet.insertRule("#utiq-revoke-subtitle-container { justify-content: center; text-align: center; }", 8);
        sheet.insertRule("#utiq-revoke-button-container { justify-content: center; margin-bottom: 15px; }", 9);
        sheet.insertRule("#utiq-revoke-button-close { align-items: center; background-color: #e20074; border: 1px solid transparent; border-radius: 0.2499975rem; box-shadow: none; box-sizing: border-box; color: #fff; cursor: pointer; display: inline-flex; height: 2.625rem; justify-content: center; padding: 0.41875rem 6rem; text-decoration: none; vertical-align: middle; font-family: 'TeleNeo', sans-serif; font-size: 1.125rem; font-weight: 700; line-height: 1.5rem; margin: 0; transition: background-color 0.2s ease, color 0.2s ease; }", 10);
        sheet.insertRule("@media only screen and (max-width: 1020px) { #utiq-revoke-logo { width: 75px; margin-left: 7px; margin-top: 0px; } #utiq-revoke-outer > div > h4 { padding: 0 15px; font-size: 21px; } #utiq-revoke-outer > div > p { padding: 0 15px; font-size: 14px; line-height: 1; } #utiq-revoke-button-close { padding: .41875rem 5.5rem; font-size: 1rem; } }", 11);
    }

    function removeUtiqRevokePopupStyles() {
        var sheet = document.getElementById("utiqRevokePopupStylesheet");
        if (!sheet) return;
        sheet.remove();
    }

})();
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"telekom.idm",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log : [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined' || !utag.ut.hasOwn(a,'src')) {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?utag.cfg.template+a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_telekom.idm_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(tid, tcat, a, b, c, d, f, g) {
        g = {};
        utag.loader.RDcp(g);
        try {
          if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                    // if we know the tid but don't know the category and this is a category opt out...
                    if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true; 
                  }
                  if (tcat == b[0].substring(1)) return true;
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                  if (tid == b[0]) return true;
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
        return false;
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o){
        // Read visitor attributes in local storage
        var readAttr = function(o, l ){
          var a = "", b;
          a = localStorage.getItem(l);
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(o,b,1);
        }
        try{
          readAttr(o, "tealium_va" );
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"] );
        }catch(e){ utag.DB(e) }
      },
      RDut: function(o, a){
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        var t = {};
        var d = new Date();
        var m = ( utag.ut.typeOf(d.toISOString) == "function" );
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        t["tealium_event"] = o["ut.event"] = a || "view";
        t["tealium_visitor_id"] = o["ut.visitor_id"]=o["cp.utag_main_v_id"];
        t["tealium_session_id"] = o["ut.session_id"]=o["cp.utag_main_ses_id"];
        t["tealium_session_number"] = o["cp.utag_main__sn"];
        t["tealium_session_event_number"] = o["cp.utag_main__se"];
        try{
          t["tealium_datasource"] = utag.cfg.datasource;
          t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
          t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
          t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
        }catch(e){ utag.DB(e) }

        t["tealium_random"] = Math.random().toFixed(16).substring(2);
        t["tealium_library_name"] = "ut"+"ag.js";
        t["tealium_library_version"] = ( utag.cfg.template + "0" ).substring(2);
        t["tealium_timestamp_epoch"] = Math.floor( d.getTime() / 1000 );
        t["tealium_timestamp_utc"] = ( m ? d.toISOString() : "");
        // Adjust date to local time
        d.setHours( d.getHours() - ( d.getTimezoneOffset() / 60 ) );
        t["tealium_timestamp_local"] = ( m ? d.toISOString().replace( "Z","" ) : "" );

        // Any existing data elements with "tealium_" will not be overwritten
        utag.ut.merge( o, t, 0 );
      },
      RDses: function( o, a, c ) {
        a = (new Date()).getTime();
        c = ( a + parseInt( utag.cfg.session_timeout ) ) + "";

        // cp.utag_main_ses_id will not be in the data layer when it has expired or this is first page view of all time
	if ( !o["cp.utag_main_ses_id"] ) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__se"] = "1";
          o["cp.utag_main__sn"] = ( 1 + parseInt( o["cp.utag_main__sn"] || 0 ) ) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
          o["cp.utag_main__se"] = ( 1 + parseInt( o["cp.utag_main__se"] || 0 ) ) + "";
        }

        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;

        utag.loader.SC( "utag_main", { "_sn": ( o["cp.utag_main__sn"] || 1 ), "_se": o["cp.utag_main__se"], "_ss": o["cp.utag_main__ss"], "_st": c, "ses_id": ( o["cp.utag_main_ses_id"] || a ) + ";exp-session", "_pn": o["cp.utag_main__pn"] + ";exp-session" } );
      },
      RDpv: function( o ) {
        if ( typeof utag.pagevars == "function" ) {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RD: function( o, a ) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        utag.loader.RDcp(o);

        if ( !utag.loader.rd_flag ) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
          o["cp.utag_main__pn"] = ( 1 + parseInt( o["cp.utag_main__pn"] || 0 ) ) + "";
          // the _st value is not-yet-set for first page view so we'll need wait to write in _pn value (which is exp-session)
          // The SC function expires (removes) cookie values that expired with the session
          utag.loader.SC( "utag_main", { "v_id": o["cp.utag_main_v_id"] } );
          utag.loader.RDses(o);
        }

        // first utag.track call for noview should not clear session start (_ss) value
        if(a && !utag.cfg.noview)utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (utag.ut.typeOf(j[f]) == "array") {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (utag.ut.typeOf(d[e]) == "array") ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (utag.ut.typeOf(d[g]) == "array") {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g,"") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
              utag.DB("SENDING: "+a);
              try{
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: "+a);
                  while( d = utag.loader.sendq[a].shift() ) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view',utag.handler.C(utag.data));
                }
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
	        utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if(!utag.data){
            try {
              utag.cl = {'_all_': 1};
              utag.loader.initdata();    
              utag.loader.RD(utag.data);
            }catch(e){ utag.DB(e) };
          }
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	(function(a,b,c,l){if(typeof utag_err!='undefined'&&utag_err.length>0){
                                                a='//uconnect.tealiumiq.com/ulog/_error?utid='+utag.cfg.utid;
                                                l=utag_err.length > 5 ? 5:utag_err.length;
                                                for(b=0;b<l;b++){
                                                    c=utag_err[b];
                                                    a+='&e'+b+'='+encodeURIComponent(c.t+'::'+c.l+'::'+c.s+'::'+c.e);
                                                }
                                                utag.dbi.push((new Image()).src=a);
                                            }})();

        v = utag.cfg.path;
        // both .tiqcdn.com and .tiqcdn.cn supported
        w = v.indexOf(".tiqcdn.");
        if(w>0 && b["cp.utag_main__ss"]==1 && !utag.cfg.no_session_count)utag.ut.loader({src:v.substring(0,v.indexOf("/ut"+"ag/")+6)+"tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        var t;
        if(utag.ut.typeOf(a) == "object"){
          t=utag.handler.C(a)
        }else{
          t=a
        }
        utag.db_log.push(t);
        try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a || {}, cfg:{cb:c,uids:d}})
    },
    link: function(a,c,d) {
      return this.track({event:'link', data:a || {}, cfg:{cb:c,uids:d}})
    },
    track: function(a,b,c,d,e) {
      a = a || {};
      if (typeof a == "string") {
        a = { event: a, data: b || {}, cfg:{cb:c,uids:d} } 
      }

      // track called directly also supports a 3rd option where first param (a) is data layer and second param (b) is cb function
      for(e in utag.loader.GV(utag.o)){
        utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {cb:b,uids:c})
      }
      a.cfg = a.cfg || {cb:b};
      if(typeof a.cfg.cb == "function")a.cfg.cb();

      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(b){
        utag.DB("Load Rules");
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c!="alr" && !this.cfg_extend){
          return 0; 
        }
        utag.DB("RE: "+c);
        if(c=="alr")utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || f[c]==0){
                  e=1
                }else{
                  if(f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a+(c && c.uids?":"+c.uids.join(","):""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }

        // update all values for AJAX pages
        utag.ut.merge(b,this.df,0);
        utag.loader.RD( b, a );

        // clearing noview flag after the RD function call
        utag.cfg.noview = false;

        function sendTag(a, b, d){
          try {
            if(typeof utag.sender[d]!="undefined"){
              utag.DB("SENDING: "+d);
              utag.sender[d].send(a, utag.handler.C(b));
	      utag.rpt['s_' + d] = 0;
            }else if (utag.loader.cfg[d].load!=2){
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({"event":a, "data":utag.handler.C(b)});
              utag.loader.sendq.pending++;
              utag.loader.AS({id : d, load : 1}); 
            }
          }catch (e) {utag.DB(e)}
        }
        
        // utag.track( { event : "view", data: {myvar : "myval" }, cfg: { uids : [1,2,10] } } );
        if(c && c.uids){
          this.RE(a,b,"alr");
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            // bypass load rules, but still check the OPTOUTMULTI cookie before firing
            if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
              sendTag(a, b, d);
            }
          }
        }else if(utag.cfg.load_rules_ajax){
          this.RE(a,b,"blr");
          // process load rules based on current data layer
          this.LR(b);
          this.RE(a,b,"alr");
          
          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
              sendTag(a, b, d);
            }
          }
        }else{
          // legacy behavior
          this.RE(a,b,"alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a,b,"end");
      },
      // "sort-of" copy
      C: function(a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(utag.ut.typeOf(a[c]) == "array"){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        if(!utag.v_id){
          a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;
        }
        return utag.v_id
      },
      hasOwn: function(o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          if (utag.ut.hasOwn(o,a))return false
        }
        return true
      },
      isEmpty: function(o) {
        var t = utag.ut.typeOf(o);
        if ( t == "number" ){
          return isNaN(o)
        }else if ( t == "boolean" ){
          return false
        }else if ( t == "string" ){
          return o.length === 0
        }else return utag.ut.isEmptyObject(o)
      },
      typeOf: function(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || utag.ut.typeOf(c) == "array") {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      encode: function(a, b) {
        b = "";
        try{b = encodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = escape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
      },
      loader: function(o, a, b, c, l, m) {
        utag.DB(o);
        a=document;
        if (o.type=="iframe") {
          // if an iframe of same id already exists, remove and add again (to keep DOM clean and avoid impacting browser history)
          m = a.getElementById( o.id );
          if ( m && m.tagName == "IFRAME" ) {
            m.parentNode.removeChild(m);
          }
          b = a.createElement("iframe");
          o.attrs = o.attrs || {};
          utag.ut.merge( o.attrs, { "height" : "1", "width" : "1", "style" : "display:none" } , 0 );
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b = new Image();
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
        }
        if(o.id){b.id=o.id};
        for( l in utag.loader.GV(o.attrs) ){
          b.setAttribute( l, o.attrs[l] )
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }
        if(typeof o.error=="function"){
          utag.loader.EV(b, "error", o.error);
        }
        if ( o.type != "img" ) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to "+l+": "+o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b)
            }
          }
        }
      }
    }
  };
  utag.o['telekom.idm']=utag;
  utag.cfg = {
    template : "ut4.47.",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    datasource: "##UTDATASOURCE##".replace("##"+"UTDATASOURCE##",""),
    path: "//tags-eu.tiqcdn.com/utag/telekom/idm/prod/",
    utid: "telekom/idm/202506251439"
  };
  utag.cfg.v = utag.cfg.template + "202506251439";
  utag.cond={3:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page.xtpage']=xtpage}catch(e){utag.DB(e)};try{ud['js_page.page_test_case']=page_test_case}catch(e){utag.DB(e)};try{ud['js_page.page_personalization_segment_case']=page_personalization_segment_case}catch(e){utag.DB(e)};try{ud['js_page.BrowserDetect.browser']=BrowserDetect.browser}catch(e){utag.DB(e)};try{ud['js_page.utag.cfg.path']=utag.cfg.path}catch(e){utag.DB(e)};};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '3':try{c[3]|=(typeof d['eid_marketing_master']!='undefined'&&typeof d['eid_marketing_master']!='undefined'&&d['eid_marketing_master']!=''&&typeof d['qp.zid']!='undefined'&&typeof d['qp.zid']!='undefined'&&d['qp.zid']!=''&&d['event']=='cc_callback')}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();    };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[379]=='undefined'){utag.runonce.ext[379]=1;if(1){
/**
 * Title: Consent Track overwrite
 * Run: Before Load Rules (runs after ConsentSync Extension)
 * Version: 2.1
 * Date: 21.03.2021
 */

(function () {

	// Only execute the extension if ConsentManagementConfig is present
	if (window.consentMngmntConfig.consentSync) {

		// suppress the consent layer
		utag.gdpr.consent_prompt.noShow = true;

		window.consentSyncEventStack = [];
		if (typeof window.consentSyncReady == "undefined")
			window.consentSyncReady = false;

		utag.tealiumLink = utag.link;
		utag.tealiumView = utag.view;
		utag.link = function (data, cb, uids) {
			if (window.consentSyncReady) {
				utag.tealiumLink(data, cb, uids);
			} else {
				window.consentSyncEventStack.push({ event: 'link', data: data, cb: cb, uids: uids });
			}
		}
		utag.view = function (data, cb, uids) {
			if (window.consentSyncReady) {
				utag.tealiumView(data, cb, uids);
			} else {
				window.consentSyncEventStack.push({ event: 'view', data: data, cb: cb, uids: uids });
			}
		}

		if (!window.consentMngmntConfig.isSPA) {
			var utagDataCopy = window[window.utag && window.utag.udoname || "utag_data"];
			utag.view(utagDataCopy);
		}
	}

})();
}
}} catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[380]=='undefined'){utag.runonce.ext[380]=1;if(1){
/**
 * Title: Consent Layer Hide
 * Run: Before Load Rules
 * Version: 2.1 (IE11 Support)
 * Date: 15.02.2021
 */

// set the noShow Property if the hideCondition is met or we are on a hiddenPages-Site and do not use the consent sync
if(typeof utag != "undefined" && typeof utag.gdpr != "undefined" && typeof utag.data != "undefined") {
    if(
        window.consentMngmntConfig.hideCondition ||
        window.consentMngmntConfig.hiddenPages.indexOf(utag.data['page_content_id']) > -1 || 
        window.consentMngmntConfig.hiddenPages.indexOf(window.location.href) > -1
    ) 
        utag.gdpr.consent_prompt.noShow=true;
} 
}
}} catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[387]=='undefined'){utag.runonce.ext[387]=1;if(1){
/** 
 *
 * Title: Overwrite Global Config
 * Run: Once - Before Load Rules
 * Version: 2.0
 * Date: 19.11.2024
 */

 (function(){
    // Font File Src URL
    if (typeof window.consentMngmntConfig.fontURLRegular == "string") {
        var re = /(@font-face{.+?font-weight:400.+?src:url\().+?(\)\sformat)/;
        utag.gdpr.consent_prompt.content.css = utag.gdpr.consent_prompt.content.css.replace(re, "$1" + window.consentMngmntConfig.fontURLRegular + "$2");
        utag.gdpr.preferences_prompt.content.css = utag.gdpr.preferences_prompt.content.css.replace(re, "$1" + window.consentMngmntConfig.fontURLRegular + "$2");
    }
    
    if (typeof window.consentMngmntConfig.fontURLBold == "string") {
        var re = /(@font-face{.+?font-weight:700.+?src:url\().+?(\)\sformat)/;
        utag.gdpr.consent_prompt.content.css = utag.gdpr.consent_prompt.content.css.replace(re, "$1" + window.consentMngmntConfig.fontURLBold + "$2");
        utag.gdpr.preferences_prompt.content.css = utag.gdpr.preferences_prompt.content.css.replace(re, "$1" + window.consentMngmntConfig.fontURLBold + "$2");
    }

    // IMPRINT
    // Set profile specific fallback imprint URL if exists
    if (typeof window.consentMngmntConfig.defaultImprintURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.consent_prompt.languages[language].custom_tokens.imprint_link = window.consentMngmntConfig.defaultImprintURL;
        }
    }

    // Multiple URL present, replace according to langauge code
    if (typeof window.consentMngmntConfig.imprintURLs == "object") {

        for (var language in utag.gdpr.consent_prompt.languages) {
            // Try to use a exact language code match to get the URL
            if (window.consentMngmntConfig.imprintURLs.hasOwnProperty(language)) {
                var currImprintLangURL = window.consentMngmntConfig.imprintURLs[language];

                utag.gdpr.consent_prompt.languages[language].custom_tokens.imprint_link = currImprintLangURL;
            }
            // If not found, use language code without country code to find URL
            else if (window.consentMngmntConfig.imprintURLs.hasOwnProperty(language.split('-')[0])) {
                var langWithoutCountryCode = language.split('-')[0];
                var currImprintLangURL = window.consentMngmntConfig.imprintURLs[langWithoutCountryCode];

                utag.gdpr.consent_prompt.languages[langWithoutCountryCode].custom_tokens.imprint_link = currImprintLangURL;
            }
        }
    }

    //PRIVACY
    // Set profile specific fallback privacy URL if exists
    if (typeof window.consentMngmntConfig.defaultPrivacyURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.consent_prompt.languages[language].custom_tokens.privacy_policy_link = window.consentMngmntConfig.defaultPrivacyURL;
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.privacy_link = window.consentMngmntConfig.defaultPrivacyURL;
        }
    }

    // Multiple URL present, replace according to language code
    if (typeof window.consentMngmntConfig.privacyURLs == "object") {

        for (var language in utag.gdpr.consent_prompt.languages) {
            // Try to use a exact language code match to get the URL
            if (window.consentMngmntConfig.privacyURLs.hasOwnProperty(language)) {
                var currPrivacyLangURL = window.consentMngmntConfig.privacyURLs[language];

                utag.gdpr.consent_prompt.languages[language].custom_tokens.privacy_policy_link = currPrivacyLangURL;
                utag.gdpr.preferences_prompt.languages[language].custom_tokens.privacy_link = currPrivacyLangURL;

            }
            // If not found, use language code without country code to find URL
            else if (window.consentMngmntConfig.privacyURLs.hasOwnProperty(language.split('-')[0])) {
                var langWithoutCountryCode = language.split('-')[0];
                var currPrivacyLangURL = window.consentMngmntConfig.privacyURLs[langWithoutCountryCode];

                utag.gdpr.consent_prompt.languages[langWithoutCountryCode].custom_tokens.privacy_policy_link = currPrivacyLangURL;
                utag.gdpr.preferences_prompt.languages[langWithoutCountryCode].custom_tokens.privacy_link = currPrivacyLangURL;
            }
        }
    }

    // Set profile specific fallback thirdparty privacy URL if exists
    if (typeof window.consentMngmntConfig.defaultThirdpartyPrivacyURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.consent_prompt.languages[language].custom_tokens.privacy_thirdparty_link = window.consentMngmntConfig.defaultThirdpartyPrivacyURL;
        }
    }

    // Multiple thirdparty URL present, replace according to language code
    if (typeof window.consentMngmntConfig.thirdpartyPrivacyURLs == "object") {

        for (var language in utag.gdpr.consent_prompt.languages) {
            // Try to use a exact language code match to get the URL
            if (window.consentMngmntConfig.thirdpartyPrivacyURLs.hasOwnProperty(language)) {
                var currPrivacyLangURL = window.consentMngmntConfig.thirdpartyPrivacyURLs[language];

                utag.gdpr.consent_prompt.languages[language].custom_tokens.privacy_thirdparty_link = currPrivacyLangURL;
            }
            // If not found, use language code without country code to find URL
            else if (window.consentMngmntConfig.thirdpartyPrivacyURLs.hasOwnProperty(language.split('-')[0])) {
                var langWithoutCountryCode = language.split('-')[0];
                var currPrivacyLangURL = window.consentMngmntConfig.thirdpartyPrivacyURLs[langWithoutCountryCode];

                utag.gdpr.consent_prompt.languages[langWithoutCountryCode].custom_tokens.privacy_thirdparty_link = currPrivacyLangURL;
            }
        }
    }
        
    // DATA CONTROLLER
    for (var language in utag.gdpr.consent_prompt.languages) {
        // Set profile specific fallback data controller if exists
        if (typeof window.consentMngmntConfig.dataController == "string") {
            utag.gdpr.consent_prompt.languages[language].custom_tokens.data_controller = window.consentMngmntConfig.dataController;
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.data_controller = window.consentMngmntConfig.dataController;
        }
    }

    // Replace {{data_controller}} in category titles
    for (var language in utag.gdpr.consent_prompt.languages) {
        utag.gdpr.preferences_prompt.languages[language].categories["analytics"].name = utag.gdpr.preferences_prompt.languages[language].categories["analytics"].name.replace("{{data_controller}}", utag.gdpr.consent_prompt.languages[language].custom_tokens.data_controller);
        utag.gdpr.preferences_prompt.languages[language].categories["display_ads"].name = utag.gdpr.preferences_prompt.languages[language].categories["display_ads"].name.replace("{{data_controller}}", utag.gdpr.consent_prompt.languages[language].custom_tokens.data_controller);
    }

    // NUMBER OF PARTNERS
    if (typeof window.consentMngmntConfig.numberOfPartners == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.consent_prompt.languages[language].custom_tokens.number_of_partners = window.consentMngmntConfig.numberOfPartners;
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.number_of_partners = window.consentMngmntConfig.numberOfPartners;
        }
    }

    // PARTNER LIST URLS
    // default partner list url
    if (typeof window.consentMngmntConfig.defaultPartnerListURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.consent_prompt.languages[language].custom_tokens.partner_list_link = window.consentMngmntConfig.defaultPartnerListURL;
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.partner_list_link = window.consentMngmntConfig.defaultPartnerListURL;
        }
    } else if (typeof window.consentMngmntConfig.defaultPartnerListURL == "object") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            // Try to use a exact language code match to get the URL
            if (window.consentMngmntConfig.defaultPartnerListURL.hasOwnProperty(language)) {
                var currPartnerListURL = window.consentMngmntConfig.defaultPartnerListURL[language];

                utag.gdpr.consent_prompt.languages[language].custom_tokens.partner_list_link = currPartnerListURL;
                utag.gdpr.preferences_prompt.languages[language].custom_tokens.partner_list_link = currPartnerListURL;
            }
            // If not found, use language code without country code to find URL
            else if (window.consentMngmntConfig.thirdpartyPrivacyURLs.hasOwnProperty(language.split('-')[0])) {
                var langWithoutCountryCode = language.split('-')[0];
                var currPartnerListURL = window.consentMngmntConfig.defaultPartnerListURL[langWithoutCountryCode];
                
                utag.gdpr.consent_prompt.languages[langWithoutCountryCode].custom_tokens.partner_list_link = currPartnerListURL;
                utag.gdpr.preferences_prompt.languages[langWithoutCountryCode].custom_tokens.partner_list_link = currPartnerListURL;
            }
        }
    }

    // category analytics
    if (typeof window.consentMngmntConfig.categoryAnalyticsPartnerListURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.category_analytics_partner_list_link = window.consentMngmntConfig.categoryAnalyticsPartnerListURL;
        }
    }
    // category marketing
    if (typeof window.consentMngmntConfig.categoryMarketingPartnerListURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.category_display_ads_partner_list_link = window.consentMngmntConfig.categoryMarketingPartnerListURL;
        }
    }
    // category social ads (marketing through partners)
    if (typeof window.consentMngmntConfig.categorySocialAdsPartnerListURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.category_social_partner_list_link = window.consentMngmntConfig.categorySocialAdsPartnerListURL;
        }
    }
    // category personalization (analytics through partners) | TODO token anlegen
    if (typeof window.consentMngmntConfig.categoryPartnerAnalyticsPartnerListURL == "string") {
        for (var language in utag.gdpr.consent_prompt.languages) {
            utag.gdpr.preferences_prompt.languages[language].custom_tokens.category_personalization_partner_list_link = window.consentMngmntConfig.categoryPartnerAnalyticsPartnerListURL;
        }
    }
})();

}
}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['ut.event']=='view'){
/**
 * Title: Cleanup Utiq Consent
 * Run: Every - Before Load Rules
 * Trigger: On pageview
 * Version: 3.0
 * Date: 30.05.2025
 */

(function() {
    // check for utiq consent and do nothing if consent given
    if (utag.gdpr.getSelectedCategories().includes("cookiematch")) return;
    
    // delete connectId cookie
    document.cookie = 'connectId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Update the cookie with the new value "ZmFsc2U=" (base64 for false)
    document.cookie = "utiq_consent_given=ZmFsc2U=; path=/";

    // delete martech pass ID from tel_usr_ids cookie
    let currentTelUsrIdsObject = getCookieObjectValue('tel_usr_ids');
    delete currentTelUsrIdsObject["utiq_mtid"];
    setCookieObjectValue("tel_usr_ids", currentTelUsrIdsObject, utag.loader.lh());

    // cleanup localStorage
    localStorage.removeItem("utiqPass");
    localStorage.removeItem("utiqEligibility");
    localStorage.removeItem("utiqDataCallTimestamp");

    function setCookieObjectValue(cname, cvalue, cdomain, exdays = 90) {
        try {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            var value = JSON.stringify(cvalue);
            value = encodeURIComponent(value);
            document.cookie = cname + "=" + value + "; " + expires + ";domain=" + cdomain + ";path=/;secure;samesite=none";
        } catch(e) {
            console.error("Could not stringify JSON to cookie " + cname);
        }
    }

    function getCookieObjectValue(cname) {
        try {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = decodeURIComponent(ca[i]);
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return JSON.parse(c.substring(name.length, c.length));
                }
            }
        } catch(e) {
            console.error("Could not parse JSON from cookie " + cname);
        }
        return {};
    }
})();
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[389]=='undefined'){utag.runonce.ext[389]=1;if((typeof b['cp.CONSENTMGR']!='undefined'&&b['cp.CONSENTMGR']!=''&&b['cp.CONSENTMGR'].toString().indexOf('consent:true')>-1&&b['cp.CONSENTMGR'].toString().indexOf('c3:0')<0)){
window.wtcc_setCookie = function (b, e, c) {
   try{
      if(b == "wt3_eid"){
         utag.link({
            "event": "cc_callback",
            "eid_marketing_master": e.split("|")[1]
         })
      }
   }catch(e){}
};

utag.ut.loader({
   type: "script",
   src: "https://pix.telekom.de/786452015021125/cc?a=c&c=wteid_786452015021125&rn_wteid_786452015021125=wt3_eid&cp=/&cd=180&ccl=180&w=3",
})
}}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
let ids = decodeURIComponent(getCookie('tel_usr_ids'));
let utiq_mtid = isJSONObject(ids) ? JSON.parse(ids)?.["utiq_mtid"] || JSON.parse(ids)?.["utiq_id"] : '';

b["utiq_mtid"] = utag.data?.["utiq_mtid"] || utiq_mtid;

function getCookie(r){for(var t=r+"=",n=document.cookie.split(";"),e=0;e<n.length;e++){for(var i=decodeURIComponent(n[e]);" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}

function isJSONObject(str) {
    try {
        return JSON.parse(str) && !!Object.entries(JSON.parse(str))?.length;
    } catch(e) {
        return false;
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['ut.event']=='view'){
/**
 * Title: Register View Event & Repeat Pre-Consent Actions
 * Run: Always - After Tag Extensions
 * Condition: ut.event === 'view'
 * Version: 2.2
 * Date: 08.05.2024
 */

if (window.viewEventRegistered) return;
window.viewEventRegistered = true;

// repeat link events
window.rptr = window.rptr || {};
if (window.consentMngmntConfig.repeatConsentLinkEvents && window.rptr.linkEventQueue?.length >= 1) {
    for (var i = 0; i < window.rptr.linkEventQueue?.length; i++) {
            if (window.rptr.linkEventQueue[i]?.repeated) return;
            window.rptr.linkEventQueue[i]?.func();
    }
}

// wait for SPA to be fully loaded before showing consent
if (!window.consentMngmntConfig.waitForViewEvent) return;
utag.gdpr && utag.gdpr.triggerExplicitConsent && utag.gdpr.triggerExplicitConsent();
} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"bwq":0,"alr":0,"blr":1,"end":0,"id":"379"},{"id":"380","end":0,"blr":1,"alr":0,"bwq":0},{"alr":0,"bwq":0,"id":"387","end":0,"blr":1},{"id":"394","end":0,"blr":1,"alr":0,"bwq":0},{"bwq":0,"alr":1,"blr":0,"end":0,"id":"389"},{"id":"395","end":0,"blr":0,"alr":1,"bwq":0},{"id":"391","end":1,"blr":0,"alr":0,"bwq":0}];
if (utag.gdpr) {    var consentEnabled = true;    var preferencesEnabled = true;    var doNotSellEnabled = false;    utag.gdpr.doNotSell = utag.gdpr.doNotSell || {};    utag.gdpr.preferences_prompt = utag.gdpr.preferences_prompt || {};    utag.gdpr.consent_prompt = utag.gdpr.consent_prompt || {};    utag.gdpr.applyConsentState = function () {        var enforcementMode = utag.gdpr.getEnforcementMode();        if (enforcementMode === 'none')            return;        utag.DB('Consent Manager: Applying consent');        try {            var i, lc = utag.loader.cfg, cs = utag.gdpr.getConsentState(), ot = utag.gdpr.omittedTags;            if (typeof cs === 'number') {                if ((utag.gdpr.consent_prompt.isEnabled && parseInt(cs) !== 1) || ((!consentEnabled && preferencesEnabled && enforcementMode === 'opt-in') && (parseInt(cs) === -1 || parseInt(cs) === 0))) {                    utag.DB('Consent Manager: Setting all tags to off');                    for (i in utag.loader.GV(lc)) {                        if (typeof ot[i] === 'undefined') {                            lc[i].load = 0;                        }                    }                }            } else if (((utag.gdpr.consent_prompt.isEnabled || utag.gdpr.preferences_prompt.isEnabled) || (!consentEnabled && preferencesEnabled)) && enforcementMode === 'opt-in') {                utag.DB('Consent Manager: Partial Consent');                for (i in utag.loader.GV(lc)) {                    if (typeof ot[i] === 'undefined') {                        if (lc[i].tcat > 0 && cs[lc[i].tcat - 1].ct != '1') {                            lc[i].load = 0;                        }                    }                }            }            var btl = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : null;            utag.DB('Consent Manager: Do Not Sell Tags');            if (enforcementMode === 'opt-out' && btl) {                for (i in utag.loader.GV(lc)) {                    if (parseInt(btl[i]) === 1) {                        lc[i].load = 0;                    }                }            }            try {                if (window.tealiumConsentRegister && window.tealiumConsentRegister.currentDecision === null) {                    var cookieValues = utag.gdpr.getCookieValues();                    var hasDnsCookie = typeof cookieValues.dns === 'string';                    var hasConsentCookie = typeof cookieValues.consent === 'string';                    var decisionType = (enforcementMode === 'opt-in' && hasConsentCookie) || (enforcementMode === 'opt-out' && hasDnsCookie) ? 'explicit' : 'implicit';                    var decision = (decisionType === 'implicit' && enforcementMode === 'opt-in') ? [] : utag.gdpr.getSelectedCategories();                    decision.unshift('always_on');                    decision.type = decisionType;                    window.tealiumConsentRegister.addConsentDecision(decision);                }            } catch (e) {                utag.DB(e);            }        } catch (e) {            utag.DB(e);        }    };    utag.gdpr.promptEnabledSetting = function() {        if (!utag.gdpr.dr && (utag.cfg.readywait || utag.cfg.waittimer)) {            utag.gdpr.dr = 1;            return;        }        utag.gdpr.consent_prompt.wasInitiallyEnabled = consentEnabled;        utag.gdpr.preferences_prompt.wasInitiallyEnabled = preferencesEnabled;        utag.gdpr.doNotSell.wasInitiallyEnabled = doNotSellEnabled;        if (consentEnabled === true && !(1)) {            utag.gdpr.consent_prompt.isEnabled = false;        }        if (preferencesEnabled === true && (consentEnabled === true && !(1))) {            utag.gdpr.preferences_prompt.isEnabled = false;        }        if (doNotSellEnabled === true && !(1)) {            utag.gdpr.doNotSell.isEnabled = false;        }        if (preferencesEnabled === true && consentEnabled === false && !(1)) {            utag.gdpr.preferences_prompt.isEnabled = true;        }    };    var splitGdprModules = false;    if (typeof utag.gdpr.getEnforcementMode !== 'function') {        splitGdprModules = true;    }    utag.gdpr.getEnforcementMode = function() {        utag.gdpr.promptEnabledSetting();        var optInModulesAreActive = (utag.gdpr.consent_prompt && utag.gdpr.consent_prompt.isEnabled === true);        var optOutModuleIsActive = (utag.gdpr.doNotSell && utag.gdpr.doNotSell.isEnabled === true);        var optInPreferencesOnly = (!optInModulesAreActive && !utag.gdpr.consent_prompt.wasInitiallyEnabled && utag.gdpr.preferences_prompt.wasInitiallyEnabled && !optOutModuleIsActive) || (splitGdprModules && utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.wasInitiallyEnabled);        var enforcementMode = 'opt-in';        if (optOutModuleIsActive && !optInModulesAreActive)            enforcementMode = 'opt-out';        if (!optOutModuleIsActive && optInPreferencesOnly)            enforcementMode = 'opt-in';        if (!optOutModuleIsActive && !optInModulesAreActive && !optInPreferencesOnly)            enforcementMode = 'none';        return enforcementMode;    };}  utag.loader.initcfg = function(){
    utag.loader.cfg={"1":{load:1,tcat:7,send:1,v:202503111253,wait:1,tid:20011},"2":{load:1,tcat:1,send:1,v:202103260835,wait:1,tid:20011},"4":{load:((utag.cond[3])),tcat:3,send:1,v:202306211239,wait:1,tid:20067}};
utag.loader.cfgsort=["1","2","4"];
if (utag.gdpr && utag.gdpr.getEnforcementMode() === 'opt-in') {  Object.keys(utag.loader.cfg).forEach(function (tagId) {      if (utag.loader.cfg[tagId].tcat === 16) {          utag.DB('Consent Manager: Removing uncategorized tag from utag.loader.cfg in opt-in mode: ' + tagId);          delete utag.loader.cfg[tagId];          utag.loader.cfgsort = utag.loader.cfgsort.filter(function(id) {              return id !== tagId;          });       }  })}  }
utag.loader.initcfg();
try {utag.gdpr.applyConsentState();} catch(e) {utag.DB(e)}}
//tealium universal tag - utag.gdpr ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
//tv:3.2.0
utag.gdpr = {
    version: 'v3.2.0',
    consent_prompt : {
        noShow : false,
        isEnabled : true,
content : {}
},
preferences_prompt : {
single_cookie: false,
    noShow : false,
        isEnabled: true,
    defaultState : false,
    content : {},
    categories : {"engagement":{"id":13,"enabled":"1"},"crm":{"id":15,"enabled":"1"},"monitoring":{"id":14,"enabled":"1"},"personalization":{"id":6,"enabled":"1"},"uncategorized":{"enabled":"0","id":16},"cookiematch":{"id":10,"enabled":"1"},"cdp":{"id":11,"enabled":"1"},"affiliates":{"enabled":"1","id":2},"big_data":{"id":8,"enabled":"1"},"mobile":{"enabled":"1","id":12},"analytics":{"enabled":"1","id":1},"social":{"id":7,"enabled":"1"},"email":{"id":5,"enabled":"1"},"misc":{"enabled":"1","id":9},"display_ads":{"enabled":"1","id":3},"search":{"enabled":"1","id":4}}
},
// Do Not Sell functionality is integrated with GDPR consent logic. The relevant logic is enabled as required
doNotSell : {
    noShow: false,
    isEnabled : false
},
getCategories : function(onlyEnabledCats){
    if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) {
        return [];
    }
    var length    = utag.gdpr.keys(utag.gdpr.preferences_prompt.categories).length,
        cats      = new Array(length),
        gdpr_cats = utag.gdpr.preferences_prompt.categories;
    for (var cat in gdpr_cats){
        if (!gdpr_cats.hasOwnProperty(cat)) {
            continue;
        }
        var isCatEnabled = gdpr_cats[cat].enabled === true || gdpr_cats[cat].enabled == 1; //The JSON can be true | "1" | 1
        if (onlyEnabledCats && !isCatEnabled) {
            continue;
        }
        cats[gdpr_cats[cat].id - 1] = cat;
    }
    for (var i = cats.length - 1; i >= 0; i--){
        if (cats[i] === undefined) {
            cats.splice(i, 1);
        }
    }
    return cats;
},
getSelectedCategories : function(){
    var sc = [], gc = utag.gdpr.getCategories(true), cs = utag.gdpr.getConsentState(), i;
    try {
        if (typeof cs === "number") {
            return (parseInt(cs) === 1) ? gc : sc;
        } else {
            for (i in utag.loader.GV(cs)){
                if ("1" === cs[i].ct) {
                    sc.push(cs[i].name);
                }
            }
        }
    }
    catch (e) {
        utag.DB(e);
    }
    return sc;
},
getCategoryLanguage : function(category){
    if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) {
        return [];
    }
    var language = utag.gdpr.getLanguage(utag.gdpr.preferences_prompt);
    return utag.gdpr.preferences_prompt.languages[language].categories[category];
},
getConsentState : function(){
    var re         = /^c\d+/,
        cd         = utag.gdpr.getCookieValues(),
        np         = 1,
        gc         = utag.gdpr.getCategories(),
        pc         = (function(gc){
            var pc = [];
            for (var i = 0; i < gc.length; i++){
                pc.push({
                    ct : null,
                    name : gc[i]
                });
            }
            return pc;
        }(gc)),
        filteredCD = (function(cd){
            var d = {};
            for (var prop in cd){
                if (!cd.hasOwnProperty(prop)) {
                    continue;
                }
                if (re.test(prop)) {
                    d[prop] = cd[prop];
                }
            }
            return d;
        }(cd));
    filteredCD = utag.gdpr.sortedObject(filteredCD, function(val1, val2){
        var idx1 = parseInt((val1 || "").substring(1), 10),
            idx2 = parseInt((val2 || "").substring(1), 10);
        if (isNaN(idx1) || isNaN(idx2)) {
            return 0;
        }
        return idx1 > idx2 ? 1 : -1;
    });
    for (var cn in utag.loader.GV(filteredCD)){
        if (cn.match(re)) {
            var idx = parseInt(cn.substring(1), 10) - 1,
                ct  = gc[idx];
            pc[idx].ct = cd[cn];
            if (cd[cn] * 1 !== 1) {
                np = 0;
            }
        }
    }
    if (cd.consent) {
        if (cd.consent === true || cd.consent === "true") {
            return np ? np : pc;
        } else {
            return -1;
        }
    } else if (np === 0) {
        return pc;
    } else {
        return 0;
    }
},
getCookieValues : function(){
    var values = {},
        rcd    = (function(){
            var value = "; " + document.cookie;
            var parts = value.split("; " + utag.gdpr.cookieNS + "=");
            if (parts.length == 2) return utag.ut.decode(parts.pop().split(";").shift());
        }()),
        cd     = utag.gdpr.typeOf(rcd) === "string" ? rcd : "";
    if (utag.data && cd) {
        utag.data["cp." + utag.gdpr.cookieNS] = cd;
    }
    if (cd) {
        var i,
            optOut,
            optOutData = decodeURI(cd).split("|");
        for (i = 0; i < optOutData.length; i++){
            optOut = optOutData[i].split(":");
            values[optOut[0]] = optOut[1];
        }
    }
    utag.gdpr.values = values;
    return values;
},
getDeTokenizedContent : function(data, _lang){
    if (utag.gdpr.isEmpty(data)) return null;
    var tokenRegExpPattern = /{{(.*?)}}/gm,
        token_match        = /[{}]/g,
        two_part           = /display_ads|big_data/;
    var lang     = utag.gdpr.getLanguage(data, _lang),
        langData = utag.gdpr.clone(data.languages[lang]);
    for (var t1 in utag.gdpr.sortedObject(langData.common_tokens)){
        if (!langData.common_tokens.hasOwnProperty(t1)) {
            continue;
        }
        langData.common_tokens[t1] = tokenReplace(langData.common_tokens[t1]);
    }
    for (var t2 in utag.gdpr.sortedObject(langData.custom_tokens)){
        if (!langData.custom_tokens.hasOwnProperty(t2)) {
            continue;
        }
        langData.custom_tokens[t2] = tokenReplace(langData.custom_tokens[t2]);
    }
    function tokenReplace(str){
        if (!str) return str;
        var replacements = str.match(tokenRegExpPattern);
        if (!replacements) return str;
        for (var i = 0; i < replacements.length; i++){
            var token = replacements[i].replace(token_match, "") || "";
            var regExpReplaceAll = new RegExp(replacements[i],"g");
            if (langData.common_tokens[token]) {
                str = str.replace(regExpReplaceAll, langData.common_tokens[token]);
            } else if (langData.custom_tokens[token]) {
                str = str.replace(regExpReplaceAll, langData.custom_tokens[token]);
            } else if (langData.categories && token.indexOf("category_") > -1) {
                var split_token = token.split("_");
                if (token.match(two_part)) {
                    split_token[1] = split_token[1] + "_" + split_token[2];
                    split_token.splice(2, 1);
                }
                var category = langData.categories[split_token[1]],
                    key      = {
                        "title" : "name",
                        "description" : "notes"
                    }[split_token[2]];
                if (category[key]) {
                    str = str.replace(regExpReplaceAll, category[key]);
                }
            }
        }
        return str;
    }
    return {
        language: lang,
        tokens: langData,
        js : tokenReplace(data.content.js),
        html : tokenReplace(data.content.html),
        css : tokenReplace(data.content.css)
    };
},
getLanguage : function(promptData, preferredLang){
    var udoName = window.utag.udoname || "utag_data";
    var dataObject = window.utag.data || window[udoName];
    var langLocale = (preferredLang || dataObject[window.utag.cfg.gdprDLRef] || (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage)).toLowerCase();
    var lang = (langLocale || "").split("-")[0];
    if (!promptData) {
        return langLocale;
    }
    var languages = promptData.languages;
    return languages[langLocale] ? langLocale : languages[lang] ? lang : promptData.defaultLang;
},
getTokenLanguage : function(promptData, token, lang){
    if (utag.gdpr.isEmpty(promptData)) return null;
    if (utag.gdpr.isEmpty(token)) return null;
    var getDeTokenizedContent = utag.gdpr.getDeTokenizedContent(promptData, lang);
    var langData = getDeTokenizedContent.tokens;
    if (lang && getDeTokenizedContent.language !== lang) return null;
    if (utag.gdpr.isEmpty(langData)) return null;
    if (langData.common_tokens[token]) {
        return langData.common_tokens[token];
    } else if (langData.custom_tokens[token]) {
        return langData.custom_tokens[token];
    } else if (langData.categories && token.indexOf("category_") > -1) {
        var split_token = token.split("_"),
            category    = langData.categories[split_token[1]];
        if (category[split_token[2]]) {
            return category[split_token[2]];
        }
    }
    return null;
},
refreshCookie:function(){if (utag && utag.DB) {utag.DB("utag.gdpr.refreshCookie has been deprecated");}},
setCookie : function(cookieData){
    utag.DB("Consent Manager: Set Cookie");
    if (utag.gdpr.typeOf(cookieData) !== "object") {
        return;
    }
    if (utag.gdpr.keys(cookieData).length === 0) {
        return;
    }
    var consentType = utag.gdpr.typeOf(cookieData.consent);
    if (consentType === "number") {
        cookieData.consent = cookieData.consent == 1; //convert a 1 to true, everything else is false
        consentType = utag.gdpr.typeOf(cookieData.consent);
    }
    if (consentType !== "boolean" &&
        !(consentType === "string" && (cookieData.consent.toLowerCase() === "true" || cookieData.consent.toLowerCase() === "false"))) {
        utag.DB("Invalid option sent to setCookie [consent must be true/false]");
        return;
    }
    if (utag.gdpr.typeOf(cookieData.ts) !== "number" || (cookieData.ts.toString().length !== 13)) {
        cookieData.ts = new Date().getTime();
    }
    utag.gdpr.values = cookieData;
    var mo2Val = [];
    for (var i in utag.loader.GV(cookieData)){
        if (/^(consent|dns|ts|id|c\d+)$/.test(i)) {
            mo2Val.push(i + ":" + cookieData[i]);
        } else {
            utag.DB("Invalid option sent to setCookie [" + i + "], is unknown");
        }
    }
    var daysToSet = utag.gdpr.consentPeriod;
    if (!daysToSet) {
        var expiryMonths = cookieData.dns == undefined ? 12 : 13;
        var today = new Date();
        today.setMonth(today.getMonth() + expiryMonths);
        daysToSet = Math.ceil((today.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    }
    var expiry = new Date(cookieData.ts);
    expiry.setDate(expiry.getDate() + daysToSet);
    var cookie_string = [
        utag.gdpr.cookieNS +"="+ encodeURI(mo2Val.join("|")),
        "path=" + utag.gdpr.path,
        "expires=" + expiry.toGMTString()];
    if (utag.gdpr.domain){
        cookie_string.push("domain=" + utag.gdpr.domain);
    }
    document.cookie = cookie_string.join("; ");
    utag.data["cp." + utag.gdpr.cookieNS] = mo2Val.join("|"); // Keep utag.data in sync with what's in the cookie
},
defaultConsentForDoNotSell : function(key, cookieData){
    if (key === 'dns'){ // Fixes the issue where consent is nonexistent in a purely DNS scenario.
        var consentType = utag.gdpr.typeOf(cookieData.consent);
        if (consentType === "undefined") {
            utag.DB("Consent Manager: Defaulting missing consent for Do Not Sell.");
            cookieData.consent = "true";
        }
    }
    return cookieData;
},
setCookieValue : function(key, value){
    utag.DB("Consent Manager: Set Cookie Value");
    if (!key || (utag.gdpr.typeOf(value) === "undefined" || utag.gdpr.typeOf(value) === "null")) return;
    var cookieData = utag.handler.C(utag.gdpr.getCookieValues());
    cookieData[key] = value;
    cookieData = utag.gdpr.defaultConsentForDoNotSell(key, cookieData);
    utag.gdpr.setCookie(cookieData);
},
setConsentValue : function(_response){
    utag.DB("Consent Manager: Set Consent Value: " + _response);
    var valid = {
        true : 1,
        "true" : 1,
        1 : 1,
        false : 0,
        "false" : 0,
        0 : 0
    };
    if (!valid.hasOwnProperty(_response)) {
        throw new Error("No response supplied");
    }
    var response = valid[_response] === 1;
    utag.gdpr.setCookieValue("ts", new Date().getTime()); //timestamp
    utag.gdpr.setCookieValue("consent", response); //response
    utag.gdpr.processQueue(response);

    // emit consent events for consumption by any client or tool
    try {
        var decision = response ? utag.gdpr.getCategories(true) : []
        decision.unshift('always_on');
        decision.type = 'explicit';
        window.tealiumConsentRegister.addConsentDecision(decision);
    } catch(e) {
        utag.DB(e);
    }
},
setPreferencesValues : function(categories, noCollect){
    utag.DB("Consent Manager: Set Preferences Values");
    var i,
        fld,
        cookie_data  = utag.gdpr.getCookieValues(),
        lookup       = {},
        rgx          = /\D/,
        names        = utag.gdpr.getCategories(),
        chosen_list  = [],
        consent_seen = false,
        decline_seen = false,
        crgx         = /c\d/;
    if (utag.gdpr.typeOf(categories) !== "object") {
        utag.DB("Categories is not type object.");
        return;
    }
    try {
        for (i = 0; i < names.length; i++){
            lookup[names[i]] = "c" + (i + 1);
        }
        for (var cat in categories){
            if (!categories.hasOwnProperty(cat)) {
                continue;
            }
            if (categories[cat] !== "1" && categories[cat] !== "0" && categories[cat] !== 1 && categories[cat] !== 0) {
                continue;
            }
            if (cat.match(rgx)) {
                cookie_data[lookup[cat]] = categories[cat];
                if (categories[cat] != 0) {
                    chosen_list.push(cat);
                }
            } else {
                cookie_data["c" + cat] = categories[cat];
                if (categories[cat] != 0) {
                    chosen_list.push(names[cat - 1]);
                }
            }
        }
        for (fld in utag.loader.GV(cookie_data)){
            if (fld.match(crgx)) {
                if (cookie_data[fld] != 0) {
                    consent_seen = true;
                } else {
                    decline_seen = true;
                }
            }
        }
        cookie_data["ts"] = new Date().getTime();
        cookie_data["consent"] = consent_seen;
        utag.gdpr.setCookie(cookie_data);
        utag.gdpr.processQueue(consent_seen);
    }
    catch (e) {
        utag.DB(e);
    }
    if (noCollect) {
        return;
    }

    // emit consent events for consumption by any client or tool
    try {
        var decision = (function () {
            var consentCategories;
            if (decline_seen) {
                if (consent_seen) {
                    consentCategories = utag.gdpr.getSelectedCategories();
                } else {
                    consentCategories = [];
                }
            } else if (!decline_seen && consent_seen) {
                consentCategories = utag.gdpr.getSelectedCategories();
            }
            consentCategories.unshift('always_on');
            consentCategories.type = 'explicit';
            return consentCategories;
        }());
        decision.type = 'explicit';
        window.tealiumConsentRegister.addConsentDecision(decision);
    } catch(e) {
        utag.DB(e);
    }
},
setAllCategories : function(state, noCollect){
    utag.DB("Consent Manager: Set Preferences All Categories: " + state);
    if (state === undefined) return;
    if (utag.gdpr.typeOf(state) !== "boolean") return;
    var allCats = utag.gdpr.getCategories(), prefs = {};
    for (var i = 0; i < allCats.length; i++){
        prefs["" + (i + 1)] = state ? "1" : "0";
    }
    utag.gdpr.setPreferencesValues(prefs, noCollect);
},
setPreferencesFromList : function(list){
    utag.DB("Consent Manager: Set Preferences From List");
    var prefs = {}, allCats = utag.gdpr.getCategories();
    if (utag.gdpr.typeOf(list) !== "array") {
        utag.DB("List should be of type array");
        return;
    }
    for (var i = 0; i < list.length; i++){
        prefs[list[i]] = "1";
    }
    for (var j = 0; j < allCats.length; j++){
        if (!prefs[allCats[j]]) {
            prefs[allCats[j]] = "0";
        }
    }
    utag.gdpr.setPreferencesValues(prefs);
},
processQueue : function(consent_seen){
    utag.DB("Consent Manager: Processing Consent Queue");
    if (utag.gdpr.noqueue) {
        return;
    }
    if (!consent_seen) {
        utag.gdpr.queue = [];
        return;
    }
    utag.DB("Consent Manager: Processing Consent Queue Length: " + utag.gdpr.queue.length);
    var event, data, originalData, conds = {};
    //create a new cond object for us to modify
    utag.gdpr.merge(conds, utag.cond);
    for (var i = 0; i < utag.gdpr.queue.length; i++){
        event = utag.gdpr.queue[i];
        if (utag.loader.blr_always && !utag.cfg.suppress_before_load_rules_with_uids) {
            originalData = {...(event.data || {})}
        }
        if (!(event.cfg && event.cfg.uids)) {
            data = {};
            //Copy core data over
            utag.loader.RD(data, event.event);
            //Copy data user sent
            utag.gdpr.merge(data, event.data, true);
            //Make sure we reset all conds to 0/false;
            for (var cond in conds){
                if (!conds.hasOwnProperty(cond)) {
                    continue;
                }
                conds[cond] = 0;
            }
            //Need to trigger the BLR extensions before re-processing the load rules
            utag.handler.RE(event.event, data, "blr");
            //Find out what LRs trigger for the data we have
            utag.loader.loadrules(data, conds);
            event.cfg = event.cfg || {};
            event.cfg.uids = [];
            event.data = data;
            //Store conds into utag.conds so that the initcfg can pull them in for setting the tags (& any future extensions)
            utag.cond = conds;
            //Call initcfg so we can get utag.loader.cfg[X].load evaluated
            utag.loader.initcfg();
            //Re-apply consentState
            utag.gdpr.applyConsentState();
            //create an array of UIDs to call, excluding the omittedTags as they have already fired.
            var consentState = utag.gdpr.getConsentState();
            var csType = utag.gdpr.typeOf(consentState);
            for (var id in utag.loader.GV(utag.loader.cfg)){
                if (utag.gdpr.omittedTags[id]) continue;
                var tag = utag.loader.cfg[id];
                if(tag.load && tag.send) {
                    if (tag.tcat !== 0) {
                        if ((csType === "array" && consentState[tag.tcat - 1].ct == "1") ||
                            (csType === "number" && consentState == 1)) {
                            event.cfg.uids.push(id);
                        }
                    } else if (tag.tcat === 0) {
                        event.cfg.uids.push(id);
                    }
                }
            }
        }
        if (utag.loader.blr_always && !utag.cfg.suppress_before_load_rules_with_uids) {
            event.data = originalData;
        }
        // call old track call with data from the array
        // call - this is correct as we are using the stored event as an object
        // add a setTimeout to space the events out more
        (function(event){
            setTimeout(function(){
                if (event.cfg.uids) {
                    // make sure that we remove omitted tag uids as these have already gone through the process
                    for (var indexCfgUID = event.cfg.uids.length - 1;  indexCfgUID > -1; indexCfgUID--){
                        if (!utag.gdpr.omittedTags[event.cfg.uids[indexCfgUID]]) continue;
                        event.cfg.uids.splice(indexCfgUID,1);
                    }
                }
                utag.track_old.call(this, event);
            }, 150 * i);
        })(event);
    }
    utag.gdpr.queue = [];
},
typeOf : function(e){
    return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
},
merge : function(a, b, c, d){
    if (c) {
        for (d in utag.loader.GV(b)){
            a[d] = b[d];
        }
    } else {
        for (d in utag.loader.GV(b)){
            if (typeof a[d] == "undefined")
                a[d] = b[d];
        }
    }
},
getEnforcementMode: function () {
    utag.gdpr.promptEnabledSetting(); // make sure the enforcement rules are applied
    var optInModulesAreActive = (utag.gdpr.consent_prompt && utag.gdpr.consent_prompt.isEnabled === true);
    var optOutModuleIsActive = (utag.gdpr.doNotSell && utag.gdpr.doNotSell.isEnabled === true);
    var enforcementMode = 'opt-in'; // default to opt-in mode (strictest)
    if (optOutModuleIsActive && !optInModulesAreActive) enforcementMode = 'opt-out';
    if (!optOutModuleIsActive && !optInModulesAreActive) enforcementMode = 'none';
    return enforcementMode;
},
shouldBlockTag : function(taguid){
    if (!taguid) return true;
    var enforcementMode = utag.gdpr.getEnforcementMode();
    if (enforcementMode === 'none') return false;
    var lc = utag.loader.cfg,
        cs = utag.gdpr.getConsentState(),
        uid = taguid;
    //If no uid then this function shouldn't of been called.
    //To be safe we will stop any firing
    if (utag.gdpr.typeOf(uid) === "undefined") return true;
    utag.DB("Consent Manager: Applying consent: " + uid);
    var csTYpe = utag.gdpr.typeOf(cs);
    var tag = lc[uid];
    // fix cases where a missing or inactive tag is explicitly called by UID
    if (typeof tag !== "object") {
        utag.DB("Consent Manager: Missing/inactive tag: " + uid + " not allowed to send (nothing to fire anyway)");
        return true;
    }
    // improve DNS module (Opt-out module) detection to avoid bugs
    var blockedTagLookup = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : {};
    if (enforcementMode === 'opt-out' && tag.send && tag.tcat !== 0) {
        // if there's no lookup here, all tags are allowed because there is no opt-out signal even though we're in opt-out mode
        if (blockedTagLookup === null) {
            utag.DB("Consent Manager: Applying consent: " + uid + " allowed to send (enforcement is off).");
            return false;
        }
        if (parseInt(blockedTagLookup[uid]) !== 1) {
            utag.DB("Consent Manager: Applying consent: " + uid + " allowed to send");
            return false;
        }
    }
    if (enforcementMode === 'opt-in') {
        if ((utag.gdpr.omittedTags[uid] || tag.tcat == 0) && tag.send){
            utag.DB("Consent Manager: Omitted Tag: " + uid + " allowed to send");
            return false;
        }
        if ((csTYpe === "array" && cs[tag.tcat - 1].ct == "1") || (csTYpe === "number" && cs == 1)){
            utag.DB("Consent Manager: Applying consent: " + uid + " allowed to send");
            return false;
        }
    }
    utag.DB("Consent Manager: Applying consent: " + uid + " not allowed to send");
    return true;
},
applyConsentState : function(){
    // if we don't need to enforce, don't enforce at all
    var enforcementMode = utag.gdpr.getEnforcementMode()
    if (enforcementMode === 'none') return;
    utag.DB("Consent Manager: Applying consent");
    try {
        var i, lc = utag.loader.cfg, cs = utag.gdpr.getConsentState(),
            ot                          = utag.gdpr.omittedTags;
        if (typeof cs === "number") {
            if ((utag.gdpr.consent_prompt.isEnabled && parseInt(cs) !== 1) ||
                ((!utag.gdpr.consent_prompt.isEnabled && utag.gdpr.preferences_prompt.isEnabled) && (parseInt(cs) === -1 || parseInt(cs) === 0))) {
                utag.DB("Consent Manager: Setting all tags to off");
                for (i in utag.loader.GV(lc)){
                    if (typeof ot[i] === "undefined") {
                        lc[i].load = 0;
                    }
                }
            }
        } else if (utag.gdpr.consent_prompt.isEnabled || utag.gdpr.preferences_prompt.isEnabled) { // GDPR Partial consent
            utag.DB("Consent Manager: Partial Consent");
            for (i in utag.loader.GV(lc)){
                if (typeof ot[i] === "undefined") {
                    if (lc[i].tcat > 0 && cs[lc[i].tcat - 1].ct != "1") {
                        lc[i].load = 0;
                    }
                }
            }
        }
        // CCPA Do Not Sell
        var btl = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : null;
        utag.DB("Consent Manager: Do Not Sell Tags");
        if (enforcementMode === 'opt-out' && btl) { // If dns isn't in use, this will be null
            for (i in utag.loader.GV(lc)) {
                if (parseInt(btl[i]) === 1) {
                    lc[i].load = 0;
                }
            }
        }
        // fallback logic
        try {
            if (window.tealiumConsentRegister && window.tealiumConsentRegister.currentDecision === null) {
                var cookieValues = utag.gdpr.getCookieValues();
                var hasDnsCookie = typeof cookieValues.dns === 'string';
                var hasConsentCookie = typeof cookieValues.consent === 'string';
                var decisionType = (enforcementMode === 'opt-in' && hasConsentCookie) || (enforcementMode === 'opt-out' && hasDnsCookie)  ? 'explicit' : 'implicit';
                var decision = (decisionType === 'implicit' && enforcementMode === 'opt-in')  ? [] : utag.gdpr.getSelectedCategories();
                decision.unshift('always_on');
                decision.type = decisionType;
                window.tealiumConsentRegister.addConsentDecision(decision);
            }
        } catch(e) {
            utag.DB(e);
        }
    }
    catch (e) {
        utag.DB(e);
    }
},
updateConsentCookie : function(consent_categories){
    utag.DB("Consent Manager: Updating consent cookie");
    var list,
        listType = utag.gdpr.typeOf(consent_categories);
    if (listType === "string") {
        list = consent_categories.split(/\s*,\s*/);
    } else if (listType !== "array") {
        list = [];
    } else {
        list = consent_categories.slice();
    }
    if (list.length === 0) {
        utag.gdpr.setConsentValue(false);
        utag.gdpr.setAllCategories(false);
        return;
    }
    utag.gdpr.setPreferencesFromList(list);
},
keys : function(obj){
    if (Object.keys) {
        return Object.keys(obj);
    }
    var array = [];
    for (var prop in obj){
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }
        array.push(prop);
    }
    return array;
},
sortedObject : function(obj, func){
    var _obj = {};
    if (obj !== undefined) {
        var _k1 = utag.gdpr.keys(obj).sort(func);
        for (var z = 0; z < _k1.length; z++){
            _obj[_k1[z]] = obj[_k1[z]];
        }
    }
    return _obj;
},
clone: function(a) {
    var level = 0;
    return cloner(a);
    function cloner(a){
        var b = {};
        var c;
        level++;
        if (level === 5) return a;
        for (c in utag.loader.GV(a)) {
            if (utag.gdpr.typeOf(a[c]) === "array") {
                b[c] = a[c].slice(0)
            } else if (utag.gdpr.typeOf(a[c]) === "object") {
                b[c] = cloner(a[c]);
            } else {
                b[c] = a[c];
            }
        }
        level--;
        return b;
    }
},
isEmpty : function(obj){
    var t = utag.gdpr.typeOf(obj);
    switch (t){
        case "string":
        case "array":
            return obj.length === 0;
        case "object":
            for (var p in obj){
                if (!obj.hasOwnProperty(p)) {
                    continue;
                }
                return false;
            }
        default:
            return true;
    }
},
getTraceId : function() {
    var cookieName = "trace_id=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var cookie = ca.find(item => item.trim().startsWith(cookieName));
    cookie = cookie ? cookie.trim() : cookie;
    return cookie ? cookie.substring(cookieName.length, cookie.length) : "";
},
setVisitorId : function() {
    var visitorId;
    var consentCookies = utag.gdpr.getCookieValues();
    if (consentCookies && consentCookies.id) {
        visitorId = consentCookies.id;
    } else if (utag.data['cp.utag_main_v_id']) {
        visitorId = utag.data['cp.utag_main_v_id'];
    } else {
        visitorId = utag.ut.vi((new Date()).getTime());
    }
    utag.gdpr.setCookieValue('id', visitorId)
    return visitorId;
},
queue : [],
    domain : window.utag_cfg_ovrd && window.utag_cfg_ovrd.domain || utag.cfg.domain,
    path : window.utag_cfg_ovrd && window.utag_cfg_ovrd.cookie_path || "/",
    noqueue : window.utag_cfg_ovrd && window.utag_cfg_ovrd.nogdprqueue || false,
    noview : window.utag_cfg_ovrd && window.utag_cfg_ovrd.noview || false,
    consentPeriod : (window.utag_cfg_ovrd && window.utag_cfg_ovrd.consentPeriod) || 0,
    cookieNS : window.utag_cfg_ovrd && window.utag_cfg_ovrd.cmcookiens || "CONSENTMGR",
    eventProfile : window.utag_cfg_ovrd && window.utag_cfg_ovrd.cmeventprofile || "main" || "main",
    omittedTags : {"4":1,"6":1}
};
if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.domain == ""){
    utag.gdpr.domain = "";
}
utag.loader.initdataOld = utag.loader.initdata;
utag.loader.initdata = function(){
    utag.loader.initdataOld();
    if (utag.gdpr.getConsentState() !== 0) return;
    if (utag.gdpr.noview) return;
    if (!utag.loader.rd_flag && !utag.gdpr.noqueue) {
        utag.gdpr.queue.push({
            event : "view",
            data : utag.handler.C(utag.data)
        });
    }
};
utag.gdpr.promptEnabledSetting = function() {
    if (!utag.gdpr.dr && (utag.cfg.readywait || utag.cfg.waittimer)) {
        utag.gdpr.dr = 1;
        return;
    }
    if (utag.gdpr.consent_prompt.isEnabled === true && !(1)) {
        utag.gdpr.consent_prompt.isEnabled = false;
    }
    if (utag.gdpr.preferences_prompt.isEnabled === true && !(1)) {
        utag.gdpr.preferences_prompt.isEnabled = false;
    }
    if (utag.gdpr.doNotSell.isEnabled === true && !(1)) {
        utag.gdpr.doNotSell.isEnabled = false;
    }
}
utag.preOld = utag.pre;
utag.pre = function(){
    utag.preOld();
    utag.gdpr.promptEnabledSetting();
    utag.pre = utag.preOld;
};
utag.gdpr.consent_prompt.languages={"en":{"common_tokens":{"title":"Cookies and similar technologies","message":"<p>We use cookies and similar technologies<span id=\"includingUtiq\" class=\"utiqDisplayOptional\" style=\"display: none\" data-display=\"contents\"> (including <img id=\"utiqLogoParagraph\" class=\"utiqLogo\" style=\"height: 0.7em;\" src=\"https://ebs10.telekom.de/opt-in/icon/utiq.svg\" title=\"Utiq\" alt=\"Utiq-Logo\" aria-label=\"Utiq-Logo\" />)</span> on our website to save, read out and process information on your device. In doing so, we enhance your experience, analyze site traffic, and show you content and ads that interest you. User profiles are created across websites and devices for this purpose. Our partners use these technologies as well.</p>\n<br><p>By selecting &ldquo;Only Required&rdquo;, you only accept cookies that make our website function properly. &ldquo;Accept All&rdquo; means that you allow access to information on your device and the use of all cookies for analytics and marketing purposes by {{data_controller}} and our partners. Your data might then be transferred to countries outside the European Union where we cannot ensure the same level of data protection as in the EU (see Art. 49 (1) a GDPR). Under &ldquo;Settings&rdquo;, you can specify everything in detail and change your consent at any time.</p>\n<br><p>Find more information in the Privacy Policy and Partner List.</p>","confirmation_button":"Accept All"},"isDefault":"false","custom_tokens":{"utiq_message":"<hr /> <img id=\"utiqLogo\" class=\"utiqLogo\" style=\"height: 1em; margin-right: 3px;\" src=\"https://ebs10.telekom.de/opt-in/icon/utiq.svg\" title=\"Utiq\" alt=\"Utiq-Logo\" aria-label=\"Utiq-Logo\" /><strong>Use of Utiq technology powered by your telecom operator</strong> <p><br />We, {{data_controller}}, use the Utiq technology for digital marketing or analytics (as described on this consent notice) based on your browsing activity across <a class=\"external-link ods-link\" target=\"_blank\" href=\"https://www.telekom.de/ueber-das-unternehmen/datenschutz/utiq-verwalten#1157216\" data-tab>our websites</a> (only if you are using a <a class=\"external-link ods-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement#telecom-operators\" rel=\"nofollow\" shape=\"rect\" data-tab>supported internet connection</a> provided by a participating telecom operator&nbsp;and consent on each website).<br /><br />The Utiq technology is privacy centric to give you choice and control.<br /><br />It uses an identifier created by your <strong>telecom operator </strong>based on your IP address and a telecom reference such as your telecom account (e.g., mobile number).<br /><br />The identifier is assigned to the internet connection, so anyone connecting their device and consenting to the Utiq technology will receive the same identifier. Typically:</p><ul id=\"utiqList\"><li>on a <strong>broadband connection </strong>(e.g., Wi-Fi), the marketing or analytics will be performed based on the browsing activities of consenting household members’.</li><li>on <strong>mobile data</strong>, the marketing will be more personalised, as it will be based on the browsing of the individual mobile user only.</li></ul><p>By consenting, you confirm that you have permission from the telecom account holder to enable the Utiq technology on this internet connection.<br /><br />You can withdraw this consent anytime via \"Manage Utiq\" at the bottom of this site or in <a class=\"external-link ods-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/\" rel=\"nofollow\" shape=\"rect\" data-tab><u>Utiq’s privacy portal (“consenthub”)</u></a>. For more, see <a class=\"external-link ods-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement\" rel=\"nofollow\" shape=\"rect\" data-tab><u>Utiq's privacy statement</u></a>.</p></p>","partner_list":"Partner List","privacy_policy_text":"","opt_out":"","privacy_policy":"Privacy Policy","advanced_settings_button":"Settings","reject_button":"Only required","opt_in":"","number_of_partners":"21","data_controller":"Telekom Deutschland GmbH","imprint":"Imprint","manage_utiq_url":"https://www.telekom.de/ueber-das-unternehmen/datenschutz/utiq-verwalten","privacy_policy_url":"","privacy_thirdparty_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#drittland-verarbeitung","privacy_adequacy_decisions":"https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en","privacy_policy_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz","imprint_link":"https://www.telekom.de/impressum","partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","company_logo_url":""}},"de":{"isDefault":"true","custom_tokens":{"utiq_message":"<hr /> <img id=\"utiqLogo\" class=\"utiqLogo\" style=\"height: 1em; margin-right: 3px;\" src=\"https://ebs10.telekom.de/opt-in/icon/utiq.svg\" title=\"Utiq\" alt=\"Utiq-Logo\" aria-label=\"Utiq-Logo\" /><strong id=\"utiqStrong\">Nutzung der Utiq-Technologie, unterstützt durch Ihren Telekommunikationsanbieter</strong> <p><br />Wir, {{data_controller}}, verwenden die Utiq-Technologie für digitales Marketing oder Analysen (wie in dieser Einwilligungserklärung beschrieben). Dies geschieht auf Basis Ihrer Surfaktivitäten auf <a class=\"external-link ods-link\" target=\"_blank\" href=\"https://www.telekom.de/ueber-das-unternehmen/datenschutz/utiq-verwalten#1157216\" data-tab>unseren Webseiten</a> (jedoch nur, wenn Sie eine <a class=\"external-link ods-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement#telecom-operators\" data-tab>unterstützte Internetverbindung</a> eines teilnehmenden Telekommunikationsanbieters nutzen und auf jeder Webseite Ihre Einwilligung geben).<br /><br />Die Utiq-Technologie ist auf den Schutz der Privatsphäre ausgerichtet, indem sie Ihnen Wahlmöglichkeiten und Kontrolle gibt.<br /><br />Die Technologie verwendet eine Kennung, die von Ihrem <strong>Telekommunikationsanbieter</strong> auf Grundlage Ihrer IP-Adresse und einer Referenz zu Ihrem Kundenkonto (z. B. der Telefonnummer) erstellt wird.<br /><br />Die Kennung wird der jeweiligen Internetverbindung zugewiesen, so dass jeder Nutzer, der diese Verbindung mit seinem Gerät nutzt und der Utiq-Technologie zustimmt, die gleiche Kennung erhält. Typischerweise</p><ul id=\"utiqList\"><li>werden bei einer <strong>Festnetzverbindung</strong> (z. B. Wi-Fi) das Marketing oder die Analysen auf der Grundlage der Surfaktivitäten aller Haushaltsmitglieder durchgeführt, die ihre Einwilligung gegeben haben;</li><li>ist bei einer <strong>Mobilfunkverbindung</strong> das Marketing stärker personalisiert, da es nur auf dem Surfverhalten des einzelnen mobilen Nutzers basiert.</li></ul><p>Mit Ihrer Einwilligung bestätigen Sie, dass Sie die Erlaubnis des Anschlussinhabers haben, die Utiq-Technologie auf dieser Internetverbindung zu aktivieren. <br /><br />Sie können diese Einwilligung jederzeit über „Utiq verwalten“ unten auf dieser Webseite oder im <a class=\" ods-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/\" rel=\"nofollow\" shape=\"rect\" data-tab>Datenschutzportal von Utiq („consenthub“)</a> widerrufen. Weitere Informationen finden Sie in der <a class=\"external-link ods-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement\" rel=\"nofollow\" shape=\"rect\" data-tab>Datenschutzerklärung von Utiq</a>.</p>","manage_utiq_url":"https://www.telekom.de/ueber-das-unternehmen/datenschutz/utiq-verwalten","partner_list":"Partnerliste","advanced_settings_button":"Einstellungen","privacy_policy":"Datenschutzhinweis","reject_button":"Nur erforderliche","privacy_thirdparty_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#drittland-verarbeitung","imprint":"Impressum","privacy_adequacy_decisions":"https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_de","data_controller":"Telekom Deutschland GmbH","privacy_policy_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz","imprint_link":"https://www.telekom.de/impressum","number_of_partners":"21","partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste"},"display_name":"German (de)","common_tokens":{"title":"Cookies und ähnliche Technologien","message":"<p>Wir setzen Cookies und ähnliche Technologien<span id=\"includingUtiq\" class=\"utiqDisplayOptional\" style=\"display: none\" data-display=\"contents\"> (einschließlich <img id=\"utiqLogoParagraph\" class=\"utiqLogo\" style=\"height: 0.7em;\" src=\"https://ebs10.telekom.de/opt-in/icon/utiq.svg\" title=\"Utiq\" alt=\"Utiq-Logo\" aria-label=\"Utiq-Logo\"/>)</span> auf unserer Website ein, um Informationen auf Ihrem Endgerät zu speichern, auszulesen und weiterzuverarbeiten. Dadurch verbessern wir Ihr Erlebnis, analysieren den Traffic auf der Website und zeigen Ihnen Inhalte und Werbung, die für Sie interessant sind. Dafür werden website- und geräteübergreifend Nutzungsprofile erstellt. Auch unsere Partner nutzen diese Technologien.</p>\n<br><p>Wenn Sie &ldquo;Nur erforderliche&rdquo; wählen, akzeptieren Sie nur Cookies, die zum richtigen Funktionieren unserer Website nötig sind. &ldquo;Alle akzeptieren&rdquo; bedeutet, dass Sie den Zugriff auf Informationen auf Ihrem Endgerät und die Verwendung aller Cookies zur Analyse und für Marketingzwecke durch {{data_controller}} und unsere Partner erlauben. Ihre Daten könnten dann in Länder außerhalb der Europäischen Union übermittelt werden, wo wir kein Datenschutzniveau garantieren können, das dem der EU entspricht (siehe Art. 49 (1) a DSGVO). Unter &ldquo;Einstellungen&rdquo; können Sie alles im Detail festlegen und Ihre Einwilligung jederzeit ändern.</p>\n<br><p>Weitere Informationen finden Sie im Datenschutzhinweis und in der Partnerliste.</p>","confirmation_button":"Alle akzeptieren"}}};utag.gdpr.consent_prompt.content.css=window.TEALIUM.consent_prompt.css;utag.gdpr.consent_prompt.content.html=window.TEALIUM.consent_prompt.html;utag.gdpr.consent_prompt.content.js=window.TEALIUM.consent_prompt.js;utag.gdpr.consent_prompt.defaultLang="de";utag.gdpr.showExplicitConsent=function(_lang){var cn=document.getElementById("__tealiumGDPRecStyle");if(cn){cn.parentNode.removeChild(cn);}var hn=document.getElementById("__tealiumGDPRecModal");if(hn){hn.parentNode.removeChild(hn);}var sn=document.getElementById("__tealiumGDPRecScript");if(sn){sn.parentNode.removeChild(sn);}var dtc=utag.gdpr.getDeTokenizedContent(utag.gdpr.consent_prompt,_lang);var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style"),mDiv=document.createElement("div"),scr=document.createElement("script"),body=document.body||document.getElementsByTagName("body")[0];style.type="text/css";style.id="__tealiumGDPRecStyle";if(style.styleSheet){style.styleSheet.cssText=dtc.css;}else{style.appendChild(document.createTextNode(dtc.css));}head.appendChild(style);mDiv.innerHTML=dtc.html;mDiv.id="__tealiumGDPRecModal";body.appendChild(mDiv);scr.language="javascript";scr.type="text/javascript";scr.text="try{"+dtc.js+"} catch(e){utag.DB(e)}";scr.id="__tealiumGDPRecScript";head.appendChild(scr);};
utag.gdpr.preferences_prompt.languages={"en":{"common_tokens":{"message":"<p>We use cookies and similar technologies<span id=\"includingUtiqPref\" class=\"utiqDisplayOptional\" style=\"display: none\" data-display=\"contents\"> (including <img id=\"utiqLogoParagraphPref\" class=\"utiqLogo\" style=\"height: 0.7em;\" src=\"https://ebs10.telekom.de/opt-in/icon/utiq.svg\" title=\"Utiq\" alt=\"Utiq-Logo\" aria-label=\"Utiq-Logo\" />)</span> on our website to save, read out and process information on your device. Our partners use these technologies as well. We and our partners can only use these technologies for analytics and marketing purposes with your consent.</p>\n<br><p>Please use the switches to set your consent and revoke it at any time. You can always open the current page from the footer of our website.</p>\n<br><p>Your consent is also the basis for data transfers to non-EU countries (Art. 49 (1) a GDPR). {{data_controller}} cannot ensure the same level of data protection as in the EU. There is a possibility, for example, that local authorities may have access to your data. Exercising your data protection rights may also be restricted. If you want to know more, please read our information on <a class=\"ods-link\" target=\"_blank\" href=\"{{partner_list_link}}\" data-tab>data processing in non-EU countries and our list of {{number_of_partners}} partners</a>.</p>\n<br>","confirmation_button":"Accept All","no":"Off","title":"Settings for cookies and similar technologies","yes":"On"},"isDefault":"false","categories":{"cookiematch":{"name":"Use of Utiq technology powered by your telecom operator","notes":"If you consent and only if you're using a <a class=\"ods-link external-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement#telecom-operators\" rel=\"nofollow\" shape=\"rect\" data-tab>supported internet connection</a> from a <strong>participating telecom operator</strong>, you will allow the activation and use of Utiq technology on this website.\n"},"misc":{"name":"","notes":""},"affiliates":{"notes":"","name":""},"display_ads":{"name":"{{data_controller}} marketing ","notes":"We use these cookies to show you personalized ads and content that is relevant to you. "},"cdp":{"name":"","notes":""},"search":{"name":"","notes":""},"email":{"name":"","notes":""},"big_data":{"name":"","notes":""},"monitoring":{"name":"","notes":""},"social":{"name":"Marketing through partners","notes":"We and our partners use these cookies to show you personalized content that is relevant to you."},"analytics":{"name":"{{data_controller}} analytics","notes":"These cookies help us improve our understanding of user behavior."},"personalization":{"notes":"These cookies help us and our partners improve services.","name":"Analytics through partners"},"mobile":{"name":"","notes":""},"engagement":{"notes":"","name":""},"crm":{"name":"","notes":""}},"custom_tokens":{"category_personalization_detail":"We use cookies and similar technologies on our websites to help us improve our services. These technologies are also used by our partners who offer their services independently or under joint responsibility with {{data_controller}}.<br><br>Data and information are transmitted to partners for analysis purposes, and sometimes also processed there for the partners’ own analysis purposes and merged with third-party data. This means that information about your use of the digital service is collected and processed to better understand and improve our products and offers.","category_personalization_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","category_display_ads_detail":"Cookies and similar marketing technologies ensure that you only see ads that match your interests instead of random ads. We also use marketing technologies to check how well users receive an advertisement. This helps us constantly improve our advertising. <br><br>Marketing technologies are also used on the websites of our advertising partners. This is called retargeting. It enables us to show you suitable advertising on other sites as well. <br><br>With the help of marketing technologies, we create pseudonymous profiles about the content and ads you view. This information helps us understand what interests you. It also enables us to show you relevant advertising on other websites. <span id=\"crossDeviceOptionalText\" style=\"display: none;\">{{cross_device_optional_detail}}</span>","privacy":"Privacy policy","required":"Always on","privacy_policy_url":"","accept_choice_button":"Save settings","category_cookiematch_detail":"<u class=\"utiqHeadingSecondary\">Activation details:</u> <br />As part of the activation of the technology, Utiq confirms this using your IP address. If confirmed, your IP address is shared with your telecom operator to create a pseudonymous identifier (\"Network Signal\"). This is done by matching your IP address to a reference to the telecom account associated with the connection (e.g. telecom account number or mobile number). This identifier is then provided to Utiq, without sharing other personal data. Utiq uses it to operate the technology which involves the creation of additional identifiers, including marketing specific ones, with limited duration, as described in Utiq’s privacy statement. These are stored in your browser along with first party cookies and other device storage information.<br /><br /><u class=\"utiqHeadingSecondary\">Usage by this website:</u><br />We only receive the marketing identifiers from Utiq. We use them for activities like personalising ads or content and analytics on this and other websites using the Utiq technology, depending on the consents you gave. They help us understand your browsing behaviour and connect visits across <a class=\"ods-link external-link\" target=\"_blank\" href=\"https://www.telekom.de/ueber-das-unternehmen/datenschutz/utiq-verwalten#1157216\" rel=\"nofollow\" shape=\"rect\" data-tab>our websites</a> (only if you agree to the activation of the Utiq technology on each one separately). These identifiers are also shared with partner advertising platforms, where needed to conduct the specific marketing or analytics activities.<br /><br /><u class=\"utiqHeadingSecondary\">What are Utiq privacy controls?</u><br />The Utiq technology is designed around privacy: it uses minimal personal data, secure, time-limited identifiers, and limits data sharing. Utiq also offers a self-serve privacy portal (“<a class=\"ods-link external-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/\" rel=\"nofollow\" shape=\"rect\" data-tab><u>consenthub</u></a>”) to exercise your privacy rights.<br /><br />For more details, visit <a class=\"ods-link external-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement\" rel=\"nofollow\" shape=\"rect\" data-tab><u>Utiq’s privacy statement</u></a>.","category_analytics_detail":"We use cookies and analytics technologies to get a better understanding of how our website is used. They help us optimize our digital services. For example, we can determine how many people visit our website or a particular service. They are also useful for statistical evaluations that show us how people use our digital services. The analysis is based on pseudonymous information.","company_logo_url":"","partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","privacy_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz","collapse_detail_button":"Read Less","category_cookiematch_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","category_display_ads_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","expand_detail_button":"Read More","category_required_description":"These cookies are always active and necessary for our website to function properly.","privacy_policy_text":"","category_required_title":"Basic website functionality","category_social_detail":"We and our partners use cookies and similar marketing technologies to serve personalized advertising. Some of our partners act independently or in joint controllership with {{data_controller}}. They use these technologies to collect data for marketing purposes. The data can be used for the partners’ advertising purposes, processed further and combined with data from other sources.<br><br>When you use our website, we create a profile. This helps us show you ads on other websites that are tailored to your interests. We also measure the effectiveness of this advertising and collect further information about your online behavior.","category_social_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","back_button":"Back","partner_list":"Partner List","category_analytics_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","category_required_detail":"to be deleted","cross_device_optional_detail":"<br><br>If you are logged in to a website, information about your previous purchases, selected tariffs, options and contract renewals is also included in the creation of advertising profiles. This is done by comparing various IDs with the encrypted e-mail address you use when you log in. Some of the data is supplemented with socio-demographic information (such as gender, decade of age and zip code) and used for analyses, retargeting and to display personalized content and offers on Telekom Deutschland GmbH and other websites. Our partners also use this data for their own purposes, e.g. by merging this data with their own data. <br><br>If you provide your consent for the InfoService and your cookie consent, we also take into account pseudonymized information from your contracts to display personalized offers on Telekom Deutschland GmbH and other websites. This information is assigned to your user data via a cookie or e-mail hash.","data_controller":"Telekom Deutschland GmbH","number_of_partners":"21"}},"de":{"display_name":"German (de)","common_tokens":{"confirmation_button":"Alle akzeptieren","title":"Einstellungen zu Cookies und ähnlichen Technologien","status":"","yes":"An","description":"","message":"<p>Wir setzen Cookies und ähnliche Technologien<span id=\"includingUtiqPref\" class=\"utiqDisplayOptional\" style=\"display: none\" data-display=\"contents\"> (einschließlich <img id=\"utiqLogoParagraphPref\" class=\"utiqLogo\" style=\"height: 0.7em;\" src=\"https://ebs10.telekom.de/opt-in/icon/utiq.svg\" title=\"Utiq\" alt=\"Utiq-Logo\" aria-label=\"Utiq-Logo\"/>)</span> auf unserer Website ein, um Informationen auf Ihrem Endgerät zu speichern, auszulesen und weiterzuverarbeiten. Unsere Partner nutzen diese Technologien ebenfalls. Nur mit Ihrer Einwilligung nutzen wir und unsere Partner diese Technologien zur Analyse und für Marketingzwecke.</p>\n<br><p>Über die Schalter können Sie Ihre Einwilligung jederzeit anpassen und widerrufen. Die aktuelle Seite können Sie immer über den Footer unserer Website öffnen.</p>\n<br><p>Ihre Einwilligung ist gleichzeitig die Grundlage für Datenübermittlungen in Nicht-EU-Staaten (Art. 49 (1) a DSGVO). Dort kann {{data_controller}} ein Datenschutzniveau, das dem der EU entspricht, nicht garantieren. Es besteht z. B. die Möglichkeit, dass dortige Behörden Zugriff auf Ihre Daten haben und die Ausübung Ihrer Datenschutzrechte eingeschränkt ist. Mehr erfahren Sie in unserer Information zur <a class=\"ods-link\"target=\"_blank\" href=\"{{partner_list_link}}\" data-tab>Datenverarbeitung in Nicht-EU-Staaten und unserer Liste von {{number_of_partners}} Partnern</a>.</p>\n<br>","category":"","no":"Aus"},"isDefault":"true","custom_tokens":{"category_required_title":"Basis-Website-Funktionalität der Website","category_social_detail":"Wir und unsere Partner nutzen Cookies und ähnliche Marketing-Technologien, um Ihnen personalisierte Werbung zu präsentieren. Unsere Partner agieren teilweise eigenständig oder in gemeinsamer Verantwortung mit {{data_controller}}. Sie nutzen diese Technologien, um Daten für Marketingzwecke zu sammeln. Die Daten können für Werbezwecke der Partner genutzt, weiterverarbeitet und mit Daten aus anderen Quellen kombiniert werden.<br><br>Wenn Sie unsere Website nutzen, erstellen wir ein Profil. Dieses hilft uns, Ihnen auch auf anderen Websites Werbung zu zeigen, die auf Ihre Interessen zugeschnitten ist. Wir messen auch die Wirksamkeit dieser Werbung und sammeln weitere Informationen über Ihr Online-Verhalten.","partner_list":"Partnerliste","category_social_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","back_button":"Zurück","category_required_description":"Diese Cookies sind immer aktiv und notwendig, damit die Website richtig funktioniert.","number_of_partners":"21","data_controller":"Telekom Deutschland GmbH","category_required_detail":"to be deleted","cross_device_optional_detail":"<br><br>Sollten Sie auf einer Webseite eingeloggt sein, fließen auch Informationen über Ihre bisherigen Käufe, die gewählten Tarife, Optionen und Vertragsverlängerungen in die Erstellung von Werbeprofilen ein. Dies geschieht durch den Abgleich verschiedener IDs mit Ihrer verschlüsselten E-Mail-Adresse, die Sie beim Einloggen verwenden.Die Daten werden teilweise mit soziodemografischen Informationen (wie z. B. Geschlecht, Altersdekade und PLZ-Bereich) ergänzt und für Analysen, Retargeting und zur Ausspielung von personalisierten Inhalten und Angeboten auf Websites von Telekom Deutschland GmbH und anderen Websites genutzt. Unsere Partner nutzen diese Daten ebenfalls für eigene Zwecke, z. B., indem sie diese Daten mit ihren Daten zusammenführen. <br><br>Wenn Sie uns Ihre Einwilligung zum InfoService sowie Ihre Cookie-Einwilligung erteilen, berücksichtigen wir auch pseudonymisierte Informationen aus Ihren Verträgen, um Ihnen personalisierte Angebote auf Telekom Deutschland GmbH und anderen Websites anzuzeigen. Diese Informationen werden über einen Cookie oder E-Mail-Hash Ihren Nutzerdaten zugeordnet.","category_analytics_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","category_cookiematch_detail":"<u class=\"utiqHeadingSecondary\">Einzelheiten zur Aktivierung:</u> <br />Im Rahmen der Aktivierung der Technologie bestätigt Utiq dies anhand Ihrer IP-Adresse. Nach Bestätigung wird Ihre IP-Adresse an Ihren Telekommunikationsanbieter weitergegeben, um eine pseudonyme Kennung (das sog. „Network Signal“) zu erstellen. Dies geschieht durch den Abgleich Ihrer IP-Adresse mit einer zugehörigen Kundenkonto-Referenz (z. B. Kunden- oder Telefonnummer) beim Telekommunikationsanbieter. Nur die Kennung wird dann an Utiq weitergegeben, ohne dass andere persönliche Daten übermittelt werden. Utiq verwendet sie zum Betrieb seiner Technologie. Dies beinhaltet die Erstellung zusätzlicher Kennungen, einschließlich Marketing-bezogener Kennungen mit begrenzter Laufzeit, wie in der Datenschutzerklärung von Utiq beschrieben. Diese werden in Ihrem Browser zusammen mit sog. „First Party Cookies“ und anderen Gerätespeicherinformationen abgelegt.<br /><br /><u class=\"utiqHeadingSecondary\">Nutzung durch diese Webseite:</u><br />Wir erhalten von Utiq nur die Marketing-bezogenen Kennungen. Wir verwenden diese für Aktivitäten wie die Personalisierung von Anzeigen oder Inhalten sowie Analysen auf dieser und anderen Webseiten, die die Utiq-Technologie nutzen, je nach den von Ihnen erteilten Einwilligungen. Sie helfen uns, Ihr Surfverhalten zu verstehen und Besuche auf <a class=\"ods-link external-link\" target=\"_blank\" href=\"https://www.telekom.de/ueber-das-unternehmen/datenschutz/utiq-verwalten#1157216\" rel=\"nofollow\" shape=\"rect\" data-tab>unseren Webseiten</a> miteinander zu verbinden (nur wenn Sie der Aktivierung der Utiq-Technologie auf jeder einzelnen Webseite zustimmen). Diese Kennungen werden auch an Partner-Werbeplattformen weitergegeben, wenn dies für die Durchführung spezifischer Marketing- oder Analyseaktivitäten erforderlich ist.<br /><br /><u class=\"utiqHeadingSecondary\">Was sind die Datenschutzkontrollen von Utiq?</u><br />Die Utiq-Technologie ist auf den Schutz der Privatsphäre ausgerichtet: Sie verwendet ein Minimum an personenbezogenen Daten - d.h. sichere, zeitlich begrenzte Kennungen -  und beschränkt die Weitergabe von Daten. Utiq bietet außerdem ein Self-Service-Datenschutzportal („<a class=\"external-link ods-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/\" rel=\"nofollow\" shape=\"rect\" data-tab>consenthub</a>“) an, über das Sie Ihre Datenschutzrechte wahrnehmen können.<br /><br />Weitere Einzelheiten finden Sie in der <a class=\"ods-link external-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement\" rel=\"nofollow\" shape=\"rect\" data-tab>Datenschutzerklärung von Utiq.</a>","required":"Immer an","accept_choice_button":"Nur ausgewählte","category_display_ads_detail":"Cookies und ähnliche Marketing-Technologien sorgen dafür, dass Sie statt beliebiger Anzeigen nur Werbung sehen, die zu Ihren Interessen passt. Wir nutzen Marketing-Technologien auch, um zu prüfen, wie gut eine Werbeanzeige bei den Nutzenden ankommt. So können wir unsere Werbung stetig verbessern. <br><br>Diese Marketing-Technologien werden auch auf den Websites unserer Werbepartner genutzt. Das nennt man Retargeting. Dadurch können wir Ihnen auch auf anderen Seiten passende Werbung zeigen. <br><br>Mithilfe der Marketing-Technologien erstellen wir pseudonyme Profile über die Inhalte und Anzeigen, die Sie sich ansehen. Diese Informationen helfen uns zu verstehen, was Sie interessiert. Zusätzlich ermöglichen sie es uns, Ihnen auch auf anderen Websites relevante Werbung zu präsentieren. <span id=\"crossDeviceOptionalText\" style=\"display: none;\">{{cross_device_optional_detail}}</span>","privacy":"Datenschutzhinweis","category_personalization_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","category_personalization_detail":"Wir nutzen auf unseren Webseiten Cookies und Analyse-Technologien, die uns helfen, unsere Dienste zu verbessern. Diese Technologien werden auch von unseren Partnern verwendet, die ihre Dienstleistungen eigenständig oder in gemeinsamer Verantwortung mit  {{data_controller}} anbieten.<br><br>Hierbei werden Daten und Informationen zu Analysezwecken an Partner übermittelt, dort teilweise zu eigenen Analysezwecken der Partner weiterverarbeitet und mit Daten Dritter zusammengeführt. Das bedeutet, dass Informationen über Ihre Nutzung des digitalen Dienstes erfasst und verarbeitet werden, um unsere Produkte und Angebote besser zu verstehen und zu verbessern.","category_display_ads_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","expand_detail_button":"Mehr lesen","category_cookiematch_partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","partner_list_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz#partnerliste","category_analytics_detail":"Wir verwenden Cookies und Analyse-Technologien, um ein besseres Verständnis dafür zu entwickeln, wie unsere Website genutzt wird. Sie helfen uns dabei, unsere digitalen Dienste zu optimieren. Wir können beispielsweise feststellen, wie viele Personen unsere Website oder einen bestimmten Service besuchen. Sie sind auch nützlich für statistische Auswertungen, die uns zeigen, wie unsere digitalen Dienste genutzt werden. Die Analyse stützt sich auf pseudonyme Informationen.","privacy_link":"https://www.telekom.de/ueber-das-unternehmen/datenschutz","collapse_detail_button":"Weniger lesen"},"categories":{"big_data":{"name":"","notes":""},"monitoring":{"name":"","notes":""},"analytics":{"notes":"Diese Cookies helfen uns, das Nutzungsverhalten besser zu verstehen.","name":"Analyse durch {{data_controller}}"},"mobile":{"notes":"","name":""},"personalization":{"notes":"Diese Cookies helfen uns und unseren Partnern, Services zu verbessern.","name":"Analyse durch unsere Partner"},"social":{"notes":"Wir und unsere Partner setzen diese Cookies ein, um Ihnen relevante personalisierte Inhalte anzuzeigen.","name":"Marketing durch unsere Partner"},"engagement":{"notes":"","name":""},"crm":{"name":"","notes":""},"cookiematch":{"notes":"Wenn Sie Ihre Einwilligung geben und nur dann, wenn Sie eine <a class=\"ods-link external-link\" target=\"_blank\" href=\"https://consenthub.utiq.com/pages/privacy-statement#telecom-operators\" rel=\"nofollow\" shape=\"rect\" data-tab>unterstützte Internetverbindung</a> von einem <strong>teilnehmenden Telekommunikationsanbieter</strong> nutzen, erlauben Sie die Aktivierung und Nutzung der Utiq-Technologie auf dieser Webseite.\n","name":"Nutzung der Utiq-Technologie, unterstützt durch Ihren Telekommunikationsanbieter"},"misc":{"notes":"","name":""},"affiliates":{"name":"","notes":""},"display_ads":{"name":"Marketing durch {{data_controller}}","notes":"Wir setzen diese Cookies ein, um Ihnen relevante personalisierte Werbung und Inhalte anzuzeigen."},"search":{"name":"","notes":""},"cdp":{"name":"","notes":""},"email":{"name":"","notes":""}}}};utag.gdpr.preferences_prompt.content.css=window.TEALIUM.preferences_prompt.css;utag.gdpr.preferences_prompt.content.html=window.TEALIUM.preferences_prompt.html;utag.gdpr.preferences_prompt.content.js=window.TEALIUM.preferences_prompt.js;utag.gdpr.preferences_prompt.defaultLang="de";utag.gdpr.showConsentPreferences=function(_lang){function cloneObject(source,target,depth){if(depth===undefined){depth=1;}else if(depth===-1){utag.DB("Max Clone depth exceeded, using reference");return source;}if(window.JSON){return JSON.parse(JSON.stringify(source));}target=target||{};for(var prop in source){if(!source.hasOwnProperty(prop)){continue;}switch(utag.gdpr.typeOf(source[prop])){case"array":target[prop]=source[prop].slice(0);break;case"object":target[prop]=cloneObject(source[prop],target[prop],--depth);break;default:target[prop]=source[prop];}}return target;}try{if(utag.gdpr.preferences_prompt.noShow){return;}var cn=document.getElementById("__tealiumGDPRcpStyle");if(cn){cn.parentNode.removeChild(cn);}var hn=document.getElementById("__tealiumGDPRcpPrefs");if(hn){hn.parentNode.removeChild(hn);}var sn=document.getElementById("__tealiumGDPRcpPrefsScript");if(sn){sn.parentNode.removeChild(sn);}var promptData=cloneObject(utag.gdpr.preferences_prompt);var activeCats=utag.gdpr.getCategories(true);var cats='';var id;for(var i=0;i<activeCats.length;i++){id=utag.gdpr.preferences_prompt.categories[activeCats[i]].id;cats+='<tr><td>{{category_'+activeCats[i]+'_title}}</td><td>{{category_'+activeCats[i]+'_description}}</td><td><input type="checkbox" class="toggle" id="toggle_cat'+id+'"/><label for="toggle_cat'+id+'"> <span class="on">{{yes}}</span> <span class="off">{{no}}</span></label></td></tr>';}promptData.content.html=promptData.content.html.replace('<!--CATEGORIES-->',cats);var dtc=utag.gdpr.getDeTokenizedContent(promptData,_lang);var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style"),mDiv=document.createElement("div"),scr=document.createElement("script"),body=document.body||document.getElementsByTagName("body")[0];style.type="text/css";style.id="__tealiumGDPRcpStyle";if(style.styleSheet){style.styleSheet.cssText=dtc.css;}else{style.appendChild(document.createTextNode(dtc.css));}head.appendChild(style);mDiv.innerHTML=dtc.html;mDiv.id="__tealiumGDPRcpPrefs";body.appendChild(mDiv);scr.language="javascript";scr.type="text/javascript";scr.text="try{"+dtc.js+"} catch(e){utag.DB(e)}";scr.id="__tealiumGDPRcpPrefsScript";head.appendChild(scr);}catch(e){utag.DB(e);}};
utag.gdpr.dns = null;

utag.track_old = utag.track;
utag.track = function(a, b, c, d){
    if (typeof a == "string") a = {
        event : a,
        data : b,
        cfg : {
            cb : c,
            uids : d
        }
    };
    if (a.event === "update_consent_cookie" && b.consent_categories) {
        utag.gdpr.updateConsentCookie(b.consent_categories);
    } else if (a.event === "set_dns_state" && typeof b.do_not_sell !== 'undefined') {
        utag.gdpr.dns.setDnsState(b.do_not_sell);
    } else {
        if (utag.gdpr.getConsentState() === 0) {
            if (!utag.gdpr.noqueue) utag.gdpr.queue.push({
                event : a.event,
                data : utag.handler.C(a.data),
                cfg : utag.handler.C(a.cfg)
            });
        }
        if (a.cfg.uids) {
            var uids = [];
            for (var i = 0; i < a.cfg.uids.length; i++){
                if (!utag.gdpr.shouldBlockTag(a.cfg.uids[i])) {
                    uids.push(a.cfg.uids[i]);
                }
            }
            a.cfg.uids = uids;
        }
        return utag.track_old.apply(this, arguments);
    }
};
utag.loader.OU_old = utag.loader.OU;
utag.loader.OU = function(tid){
    try {
        utag.gdpr.applyConsentState();
    }
    catch (e) {
        utag.DB(e);
    }
};
if (utag.gdpr.preferences_prompt.single_cookie) {
    window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
    utag.loader.SC("utag_main", null, "da");
    window.utag_cfg_ovrd.nocookie = true;
}
if (!utag.gdpr.consent_prompt.isEnabled && !utag.gdpr.doNotSell.isEnabled && utag.gdpr.getConsentState() == 0) {
    utag.gdpr.setAllCategories(utag.gdpr.preferences_prompt.defaultState, !0);
}
// class that emits consent events as decision change
class TealiumConsentRegister {
    constructor() {
        this.currentDecision = null;
        this.decisions = [];
        this.version = 'v1.1.0';
    }
    isTagAllowed (id) {
        // if no id is passed, we can't determine if the tag is allowed, default to false to block things
        if (!id) return false
        // consent integrations case
        if (window.tealiumCmpIntegration && typeof window.tealiumCmpIntegration.tagBasedMap === "object") {
            var tagPurposes = (window.tealiumCmpIntegration.tagBasedMap[id] && window.tealiumCmpIntegration.tagBasedMap[id].split(',')) || []
            var consentedPurposes = window.tealiumConsentRegister.getCurrentDecision()
            if (Array.isArray(tagPurposes) && Array.isArray(consentedPurposes) && tagPurposes.length > 0) {
                for (var i = 0; i < tagPurposes.length; i++) {
                    if (consentedPurposes.indexOf(tagPurposes[i]) === -1) {
                        return false
                    }
                }
                return true
            }
            return false
        }
        // consent manager case
        if (window.utag.gdpr && typeof window.utag.gdpr.shouldBlockTag === "function") {
            return !utag.gdpr.shouldBlockTag(id)
        }
        // something went wrong, default to false to block things
        return false
    }
    addConsentDecision(decision) {
        // only accept 'implicit' or 'explicit' decisions
        if (!decision || (decision.type !== 'implicit' && decision.type !== 'explicit')) {
            return;
        }
        // don't emit the same decision twice in a row
        if (!this.isNewDecision(this.currentDecision, decision)) {
            return;
        }
        const eventType = this.currentDecision === null ? 'consent_loaded' : 'consent_updated';
        this.currentDecision = decision;
        this.decisions.push(decision);
        const event = new CustomEvent(eventType, { detail: { decision: decision} });
        window.dispatchEvent(event);
    }
    getCurrentDecision() {
        return this.currentDecision;
    }
    getAllDecisions() {
        return this.decisions;
    }
    isNewDecision(desc1, desc2) {
        if (!desc1 || !desc2 || desc1.length !== desc2.length || desc1.type !== desc2.type) return true;
        for (let i = 0; i < desc1.length; i++) {
            if (desc1[i] !== desc2[i]) {
                return true;
            }
        }
        return false;
    }
}
window.tealiumConsentRegister = window.tealiumConsentRegister || new TealiumConsentRegister();
  if(typeof utag_cfg_ovrd!='undefined'){for(utag._i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[utag._i]=utag_cfg_ovrd[utag._i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR(utag.data);
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].block == 1 || (a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!=''))){
        a[b].block = 1;
        c=1;
        this.bq[b]=1;
      }
    }
    if(c==1) {
      for (b in this.GV(a)) {
        if(a[b].block){
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id=b; 
          if(a[b].load==4)a[b].load=1; 
 	  a[b].cb=function(){
            var d=this.uid;
            utag.loader.cfg[d].cbf=1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr"); 

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if(b.block != 1){
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait||utag.cfg.noview) && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        }else if (b.wait == 1 && utag.loader.rf == 0) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{if(utag.cfg.readywait||utag.cfg.waittimer){utag.loader.EV("","ready",function(){setTimeout(function(){utag.gdpr.promptEnabledSetting();cmExplicitDomReady();cmDNSDomReady();},utag.cfg.waittimer||1);});}else{utag.gdpr.promptEnabledSetting();cmExplicitDomReady();cmDNSDomReady();}function cmExplicitDomReady(){try{if(utag.gdpr.consent_prompt.isEnabled){if(!utag.gdpr.consent_prompt.noShow){if(!utag.gdpr.getConsentState()){utag.gdpr.showExplicitConsent();}}}}catch(e){utag.DB(e);}}function cmDNSDomReady(){try{if(utag.gdpr.doNotSell.isEnabled){if(!utag.gdpr.doNotSell.noShow){if(!utag.gdpr.dns.getDnsState()){utag.gdpr.showDoNotSellBanner();}}}}catch(e){utag.DB(e);}}}catch(e){utag.DB(e);}}})

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}

