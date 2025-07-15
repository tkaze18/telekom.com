Login = (() => {

    let formSubmitted = false;
    let timePageLoad;
    let otpSendTimeLoaded = false;

    // function to check dom ready
    const onReady = function (callback) {
        if (document.readyState != "loading") callback();
        else document.addEventListener("DOMContentLoaded", callback);
    }

    const clickSubmitButton = (ev) => {
        let form = document.querySelector("form");
        let fakeButton = document.createElement("button");
        fakeButton.style.display = 'none';
        fakeButton.type = "submit";
        fakeButton.name = ev.target.name;
        if (ev.target.value !== undefined) {
            fakeButton.value = ev.target.value;
        }
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
    }

    const toggleTargetVisibility = (event) => {
        let closestButton = event.target.closest("scale-button");
        let isPressed = closestButton.shadowRoot.host.classList.toggle("pressed");
        closestButton.setAttribute("inner-aria-label",
            isPressed ? closestButton.getAttribute("data-label-close") : closestButton.getAttribute("data-label-open"));
        let target = document.querySelector(closestButton.getAttribute("data-target"));

        target.classList.toggle("info-box--informational");
        target.toggleAttribute("opened");
        target.toggleAttribute("hidden");
        target.setAttribute("aria-hidden", !isPressed);
    }

    const toggleTargetVisibilityForLink = (event) => {
        let closestLink = event.target.closest("scale-link");
        let isPressed = closestLink.shadowRoot.host.classList.toggle("pressed");
        let toggleIconAttr = closestLink.getAttribute("data-toggle-icon");
        if (toggleIconAttr) {
            let toggleIcon = document.querySelector(toggleIconAttr);
            toggleIcon.toggleAttribute("selected");
            toggleIcon.setAttribute("accessibility-title",
                isPressed ? closestLink.getAttribute("data-label-close") : closestLink.getAttribute("data-label-open"));
        }

        let target = document.querySelector(closestLink.getAttribute("data-target"));
        target.toggleAttribute("opened");
        target.toggleAttribute("hidden");
        target.setAttribute("aria-hidden", !isPressed);

        let toggle = closestLink.getAttribute("data-toggle");
        if (toggle === 'true'){
            let icons = closestLink.querySelectorAll(".toggle-icon");
            icons.forEach(icon => {
                icon.classList.toggle("display-hidden");
            });
            if (closestLink.getAttribute("data-label-close")) {
                let text = closestLink.querySelector(".text")
                text.setAttribute("aria-label",
                    isPressed? closestLink.getAttribute("data-label-close") : closestLink.getAttribute("data-label-open"))
            }
        }
    }

    const onSubmitLoginForm = (event) => {
        if (formSubmitted) {
            event.preventDefault();
        } else {
            formSubmitted = true;
        }
    }

    const resetInputInvalidState = (event) => {
        let closest = event.target.closest("scale-text-field");
        closest.removeAttribute("invalid");
        closest.removeAttribute("helper-text");
    }


    /**
     * Applies a time lock to the login/submit button. This just happens depending on
     * several backend parameters.
     *
     * @return    {Undefined}
     */
    const applyTimeLock = () => {
        let now = new Date().getTime();
        let loginButton = document.querySelector("#login scale-button[name='pw_submit']");
        if (!loginButton && document.querySelector("form#accessPwdForm")) {
            loginButton = document.querySelector("#accessPwdForm scale-button[name='next']");
        }
        if ((self.accountLockedPermanent || (self.accountLocked && self.accountLockExpiration > now)) && loginButton) {
            disableElement(loginButton);
            loginButton.setAttribute("inner-aria-label", loginButton.getAttribute("data-label-locked"));
            self.accountLockedPermanent || setTimeout(() => {
                enableElement(loginButton);
                loginButton.setAttribute("inner-aria-label", loginButton.getAttribute("data-label-unlocked"));
            }, self.accountLockExpiration - now);
        }
    }

    /**
     * Enables an element.
     *
     * @param    {Object}    the element
     * @return    {Undefined}
     */
    const enableElement = (element) => {
        element.removeAttribute('disabled');
        let spinner = document.querySelector(element.tagName + " scale-loading-spinner");
        if (spinner != null) {
            spinner.remove();
        }
    }

    /**
     * Disables an element.
     *
     * @param    {Object}    the element
     * @return    {Undefined}
     */
    const disableElement = (element) => {
        element.setAttribute('disabled', true);
        let spinner = document.createElement("scale-loading-spinner");
        spinner.style.position = 'absolute';
        spinner.style.right = '8px';
        spinner.setAttribute('aria-hidden', 'true');
        element.appendChild(spinner);
    }

    /**
     * Open and close account switch menu and set focus on the first element in the menu.
     *
     * @param event
     */
    const toggleAccountSwitchMenu = (event) => {
        let asButton = document.querySelector(".account-switch__button");
        let isMenuOpen = asButton.shadowRoot.host.classList.toggle("pressed");
        asButton.setAttribute("inner-aria-label",
            isMenuOpen ? asButton.getAttribute("data-label-close") : asButton.getAttribute("data-label-open"));

        let menu = document.querySelector(".account-switch__menu");
        menu.toggleAttribute("opened");

        // set focus to first element
        if (isMenuOpen) {
            asButton.setAttribute("aria-expanded", "true");
            let menuList = menu.querySelectorAll("scale-button");
            try {
                menuList.forEach(scaleButton => {
                    scaleButton.shadowRoot.querySelector("button").setAttribute("role", "menuitem");
                })
                menuList[0].shadowRoot.querySelector("button").focus();
            } catch (err) { }
        } else {
            asButton.setAttribute("aria-expanded", "false");
        }
    }

    /**
     * Handles keydown event for the account switch button
     *
     * @param event
     */
    const handleAccountSwitchButtonKeyDown = (event) => {
        let isMenuOpen = document.querySelector(".account-switch__button").shadowRoot.host.classList.contains("pressed");
        if (isMenuOpen && ('Tab' === event.key || (event.key === 'Tab' && event.shiftKey))) {
            toggleAccountSwitchMenu();
        }
    }

    /**
     * Handles keydown event for the account switch menu
     *
     * @param event
     */
    const handleAccountSwitchMenuKeyDown = (event) => {
        let menu = document.querySelector(".account-switch__menu");
        let menuList = menu.querySelectorAll("scale-button");

        function shiftFocus(direction) {
            try {
                let currIndex = Array.prototype.indexOf.call(menuList, document.activeElement);
                let nextIndex = currIndex + direction;
                if (nextIndex === menuList.length) {
                    nextIndex = 0;
                } else if (nextIndex < 0) {
                    nextIndex = menuList.length - 1;
                }
                menuList[nextIndex].shadowRoot.querySelector("button").focus();
            } catch (err) {
            }
        }

        if ('ArrowDown' === event.key) {
            shiftFocus(1);
            return;
        }
        if ('ArrowUp' === event.key) {
            shiftFocus(-1);
            return;
        }

        if ('ArrowLeft' === event.key || 'Escape' === event.key) {
            toggleAccountSwitchMenu(event);
            let asButton = document.querySelector(".account-switch__button");
            asButton.shadowRoot.querySelector("button").focus();
            return;
        }

        if ('Tab' === event.key || (event.key === 'Tab' && event.shiftKey) ) {
            toggleAccountSwitchMenu(event);
        }

    }

    const tryResendOtp = (event) => {
        let otpResendStorageKey = "otp_resend_storage_key";
        let resendNotification = document.querySelector("#otpResend");
        let resendNotificationUnderThreeMinutes = document.querySelector("#otpResendUnderThreeMinutes");

        function storageAvailable(type) {
            let storage;
            try {
                storage = window[type];
                let x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
            } catch (e) {
                return e instanceof DOMException && (
                        // everything except Firefox
                        e.code === 22 ||
                        // Firefox
                        e.code === 1014 ||
                        // test name field too, because code might not be present
                        // everything except Firefox
                        e.name === 'QuotaExceededError' ||
                        // Firefox
                        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                    // acknowledge QuotaExceededError only if there's something already stored
                    (storage && storage.length !== 0);
            }
        }
        let clearStorage = function (key) {
            if (storageAvailable('sessionStorage')) {
                return window.sessionStorage.removeItem(key);
                return null;
            }
        }

        let rememberValueInStorage = function (key, elementId, value) {
            if (storageAvailable('sessionStorage')) {
                let obj = {};
                obj[elementId] = value;
                window.sessionStorage.setItem(key, JSON.stringify(obj));
            }
        }

        let getValueFromStorage = function (key, elementId) {
            if (storageAvailable('sessionStorage')) {
                let item = window.sessionStorage.getItem(key);
                if (item) {
                    return JSON.parse(item)[elementId];
                }
            }

            return null;
        }

        let currentTime = getCurrentTime();
        let lastResendTime = getValueFromStorage(otpResendStorageKey, "lastResendTime");
        let otpState = document.body.getAttribute("data-otp-state");
        if ((otpState === "SENT" || !lastResendTime || lastResendTime === "") && !otpSendTimeLoaded) {
            clearStorage(otpResendStorageKey);
            lastResendTime = timePageLoad;
            rememberValueInStorage(otpResendStorageKey, "lastResendTime", lastResendTime);
            otpSendTimeLoaded = true;
        }
        // if the last resend time is not set, set it to 3 minutes (default)
        if(!otpResendTimeOut){
            otpResendTimeOut = 180000;
        }

        if (currentTime - lastResendTime <= otpResendTimeOut){
            if (resendNotification && resendNotification.hasAttribute("opened")){
                resendNotification.toggleAttribute("opened");
                resendNotification.setAttribute("aria-hidden", "true");
                setTimeout(() => {
                    resendNotificationUnderThreeMinutes.toggleAttribute("opened");
                }, 400)
            } else if (resendNotificationUnderThreeMinutes.hasAttribute("opened")){
                resendNotificationUnderThreeMinutes.toggleAttribute("opened");
                setTimeout(() => {
                    resendNotificationUnderThreeMinutes.toggleAttribute("opened");
                }, 400)
            } else {
                resendNotificationUnderThreeMinutes.toggleAttribute("opened");
            }

        } else {
            //creating the button to trigger a resend
            let button = document.createElement("button");
            button.type = "submit";
            button.name = document.querySelector("#resend-otp").name;
            button.id = "resend_otp";
            //hide the button for Frontend/SR and append it to the form
            button.className = "btn-hidden";
            button.ariaHidden = "true";
            document.querySelector("#refresh_button").appendChild(button);

            //remembering last time pressed
            rememberValueInStorage(otpResendStorageKey, "lastResendTime", currentTime);

            //click it
            document.querySelector("#resend_otp").click();
        }
    }

    const registerEventHandler = () => {
        // add submit listener in order to submit the form only once
        let loginForm = document.querySelector("form");
        loginForm.addEventListener("submit", onSubmitLoginForm);

        // add click event listeners for all submit buttons
        document.querySelectorAll("scale-button[data-button-type='submit']").forEach(button => {
            button.addEventListener("click", clickSubmitButton);
        });

        // add input field listener in order to remove error state
        document.querySelectorAll("scale-text-field").forEach(field => {
            field.addEventListener("input", resetInputInvalidState);
        });

        // add listener for interactive info buttons
        document.querySelectorAll("scale-button[data-target]").forEach(button => {
            button.addEventListener("click", toggleTargetVisibility);
        });

        // add listener for interactive info links
        document.querySelectorAll("scale-link[data-target]").forEach(button => {
            button.addEventListener("click", toggleTargetVisibilityForLink);
        });

        // add listener for the account switch
        document.querySelectorAll(".account-switch__button").forEach(button => {
            button.addEventListener("click", toggleAccountSwitchMenu);
            button.addEventListener("keydown", handleAccountSwitchButtonKeyDown);
        });
        document.querySelectorAll(".account-switch__menu").forEach(button => {
            button.addEventListener("keydown", handleAccountSwitchMenuKeyDown);
        });

        document.querySelectorAll("#resend-otp").forEach(button => {
            button.addEventListener("click", tryResendOtp);
        });
    }

    /**
     * Bind an event listener to the password field icon in order to make the password visible.
     *
     */
    const bindTogglePasswordVisibility = () => {
        let pwDisplayClassStorageKey = "pw_display_class_storage_key";
        let pwdIconButton = document.querySelector('#toggle-password-visibility');
        let pwdIconHide = document.querySelector('#toggle-password-visibility scale-icon-action-hide-password');
        let pwdIconShow = document.querySelector('#toggle-password-visibility scale-icon-action-show-password');

        function storageAvailable(type) {
            let storage;
            try {
                storage = window[type];
                let x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
            } catch (e) {
                return e instanceof DOMException && (
                        // everything except Firefox
                        e.code === 22 ||
                        // Firefox
                        e.code === 1014 ||
                        // test name field too, because code might not be present
                        // everything except Firefox
                        e.name === 'QuotaExceededError' ||
                        // Firefox
                        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                    // acknowledge QuotaExceededError only if there's something already stored
                    (storage && storage.length !== 0);
            }
        }


        let clearStorage = function (key) {
            if (storageAvailable('sessionStorage')) {
                return window.sessionStorage.removeItem(key);
                return null;
            }
        }

        if (pwdIconButton == null) {
            clearStorage(pwDisplayClassStorageKey);
            return;
        }

        let rememberValueInStorage = function (key, elementId, value) {
            if (storageAvailable('sessionStorage')) {
                let obj = {};
                obj[elementId] = value;
                window.sessionStorage.setItem(key, JSON.stringify(obj));
            }
        }

        let getValueFromStorage = function (key, elementId) {
            if (storageAvailable('sessionStorage')) {
                let item = window.sessionStorage.getItem(key);
                if (item) {
                    return JSON.parse(item)[elementId];
                }
            }

            return null;
        }

        let changeState = function (newState) {
            if (newState === "icon-password-pressed") {
                pwdIconButton.classList.add("pressed");
                pwdIconButton.setAttribute("inner-aria-label", pwdIconButton.getAttribute("data-label-close"));
                pwdIconShow.classList.add("display-hidden");
                pwdIconHide.classList.remove("display-hidden");
                toggleElement.setAttribute('type', 'input');
            } else {
                pwdIconButton.classList.remove("pressed");
                pwdIconButton.setAttribute("inner-aria-label", pwdIconButton.getAttribute("data-label-open"));
                pwdIconHide.classList.add("display-hidden");
                pwdIconShow.classList.remove("display-hidden");
                toggleElement.setAttribute('type', 'password');
            }
        }

        let toggleElementId = pwdIconButton.dataset.toggleElementId;
        let useStateFromStorage = pwdIconButton.dataset.toggleUseStateFromStorage;
        let toggleElement = document.querySelector("#" + toggleElementId);

        if (useStateFromStorage === "true") {
            let pwDisplayState = getValueFromStorage(pwDisplayClassStorageKey, toggleElementId);
            if (pwDisplayState) {
                changeState(pwDisplayState);
            }
        } else {
            clearStorage(pwDisplayClassStorageKey)
        }

        pwdIconButton.addEventListener("click", function (e) {
            // set type between password and input
            if (this.classList.contains("pressed")) {
                changeState("icon-password-not-pressed")
                rememberValueInStorage(pwDisplayClassStorageKey, toggleElementId, "icon-password-not-pressed");
            } else {
                changeState("icon-password-pressed")
                rememberValueInStorage(pwDisplayClassStorageKey, toggleElementId, "icon-password-pressed");
            }
        });
    }
    const getCurrentTime = () => {
        return new Date().getTime();
    }

    const arrangeBrowserHistory = () => {
        if(self.redirectToStartUrl)
           window.history.replaceState(null, "", self.redirectToStartUrl)
    };

    onReady(() => {
        applyTimeLock();
        registerEventHandler();
        bindTogglePasswordVisibility();
        arrangeBrowserHistory();
        timePageLoad = getCurrentTime()
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            window.location.reload();
        }
    });

    // expose onReady function, so it can be used everywhere
    return {
        onReady : onReady,
    }
})();