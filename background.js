chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.url) {
        chrome.downloads.download({
            url: message.url,
            filename: 'tweets.csv'
        });
    }
});
