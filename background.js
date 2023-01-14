chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url.indexOf("https://s3.us-east-1.amazonaws.com/maps-production.fallenlondon.com/6.5.33/london/fallback/london-fallback.jpg") !== -1) {
            return {redirectUrl: "https://i.redd.it/jvp1ojvicpk41.png"};
        }
    },
    {
        urls: ["https://*.amazonaws.com"],
    },
    ["blocking"]
);

