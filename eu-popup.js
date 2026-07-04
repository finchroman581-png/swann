jQuery(document).ready(function($) {
    // console.log("POPUP");
    // Testing mode flag
    const TEST_MODE = false; // Set to true to enable testing features
    
    /*********************
     * Cookie Functions  *
     *********************/
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') { c = c.substring(1); }
            if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
        }
        return null;
    }
    
    /****************************
     * Popup Show/Hide Functions *
     ****************************/
    function showPopup() {
        $('#geo-popup').show();
        // Prevent scrolling on the body
        $('body').css('overflow', 'hidden');
        // For iOS Safari
        $('body').css('position', 'fixed');
        $('body').css('width', '100%');
    }
    
    function hidePopup() {
        $('#geo-popup').hide();
        // Re-enable scrolling
        $('body').css('overflow', '');
        // Remove fixed position
        $('body').css('position', '');
        $('body').css('width', '');
    }
    
    /**************************************************
     * Testing Functions *
     **************************************************/
    function testApis() {
        // console.log("Testing all APIs sequentially...");
        
        // console.log("Testing primary API (ipapi.co)...");
        $.ajax({
            url: 'https://ipapi.co/json/',
            dataType: 'json',
            timeout: TEST_MODE ? 1000 : 0 // 1 second timeout in test mode
        })
        .done(function(data) {
            // console.log("Primary API success:", data);
        })
        .fail(function(err) {
            // console.log("Primary API failed:", err);
        });

        console.log("Testing fallback 1 (ipwhois.app)...");
        $.ajax({
            url: 'https://ipwhois.app/json/',
            dataType: 'json',
            timeout: TEST_MODE ? 1000 : 0
        })
        .done(function(data) {
            // console.log("Fallback 1 success:", data);
        })
        .fail(function(err) {
            // console.log("Fallback 1 failed:", err);
        });

        console.log("Testing fallback 2 (ip-api.com)...");
        $.ajax({
            url: 'http://ip-api.com/json',
            dataType: 'json',
            timeout: TEST_MODE ? 1000 : 0
        })
        .done(function(data) {
            // console.log("Fallback 2 success:", data);
        })
        .fail(function(err) {
            // console.log("Fallback 2 failed:", err);
        });
    }
    
    /**************************************************
     * Geolocation with Fallback APIs Function (jQuery) *
     **************************************************/
    function getGeoData() {
        // Primary API: ipapi.co
        return $.ajax({
            url: 'https://ipapi.co/json/',
            dataType: 'json',
            timeout: TEST_MODE ? 1000 : 0 // 1 second timeout in test mode
        })
        .then(function(data) {
            //console.log("Primary API response:", data);
            if (data && data.country_code) {
                return { countryCode: data.country_code };
            } else {
                return $.Deferred().reject("ipapi.co: country_code missing");
            }
        })
        .fail(function(err) {
            console.error("Primary API (ipapi.co) failed:", err, "trying fallback 1...");
            // Fallback API #1: ipwhois.app
            return $.ajax({
                url: 'https://ipwhois.app/json/',
                dataType: 'json',
                timeout: TEST_MODE ? 1000 : 0
            })
            .then(function(data) {
                // console.log("Fallback 1 response:", data);
                if (data && data.country_code) {
                    return { countryCode: data.country_code };
                } else {
                    return $.Deferred().reject("ipwhois.app: country_code missing");
                }
            })
            .fail(function(err) {
                //console.error("Fallback API #1 (ipwhois.app) failed:", err, "trying fallback 2...");
                // Fallback API #2: ip-api.com
                return $.ajax({
                    url: 'http://ip-api.com/json',
                    dataType: 'json',
                    timeout: TEST_MODE ? 1000 : 0
                })
                .then(function(data) {
                    //console.log("Fallback 2 response:", data);
                    if (data && data.countryCode) {
                        return { countryCode: data.countryCode };
                    } else {
                        return $.Deferred().reject("ip-api.com: countryCode missing");
                    }
                });
            });
        });
    }
    
    /***************************************
     * European Country Codes List + Brazil *
     ***************************************/
    var europeanCountries = [
        "AL", "AD", "AM", "AT", "AZ", "BY", "BE", "BA", "BG", "HR",
        "CY", "CZ", "DK", "EE", "FI", "FR", "GE", "DE", "GR", "HU",
        "IS", "IE", "IT", "KZ", "LV", "LI", "LT", "LU", "MT", "MD",
        "MC", "ME", "NL", "MK", "NO", "PL", "PT", "RO", "RU", "SM",
        "RS", "SK", "SI", "ES", "SE", "CH", "TR", "UA", "GB", "VA"
    ];
    
    // All supported countries (Europe + Brazil)
    var supportedCountries = europeanCountries.concat(["BR"]);
    
    /**************************************************
     * Check Cookie & Run Geolocation if Needed *
     **************************************************/
    if (!getCookie("popupAccepted")) {
        // In test mode, run the API tests
        if (TEST_MODE) {
            testApis();
        }
        
        getGeoData().done(function(geo) {
            //console.log("Successfully got user country:", geo.countryCode);
            if ($.inArray(geo.countryCode, supportedCountries) !== -1) {
                // Show Brazil specific content or European content
                if (geo.countryCode === "BR") {
                    $('.popup-content-eu').hide();
                    $('.popup-content-br').show();
                } else {
                    $('.popup-content-eu').show();
                    $('.popup-content-br').hide();
                }
                showPopup();
            }
        })
        .fail(function(err) {
            console.error("All geolocation APIs failed:", err);
            // Default behavior when all APIs fail
            showPopup(); // Show popup by default if we can't determine location
        });
    } else {
        //console.log("Popup already accepted, skipping geolocation check");
    }
    
    /*************************************
     * Popup Button Event Listeners      *
     *************************************/
    // Event listener for all proceed buttons
    $('.proceed-btn').on('click', function() {
        setCookie("popupAccepted", "true", 30); // Save cookie for 30 days
        hidePopup();
    });
    
    // Event listener for all back buttons
    $('.back-btn').on('click', function() {
        window.history.back();
    });

    // For testing: function to clear the cookie
    window.clearPopupCookie = function() {
        document.cookie = "popupAccepted=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // console.log("Popup cookie cleared");
    };
});