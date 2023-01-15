if (!chrome.declarativeNetRequest) {
    chrome.webRequest.onBeforeRequest.addListener(
        function (details) {
            if (details.url.indexOf("london-fallback.jpg") !== -1) {
                return {redirectUrl: "https://i.redd.it/jvp1ojvicpk41.png"};
            }
        },
        {
            urls: ["https://*.amazonaws.com/*"],
        },
        ["blocking"]
    );
}