
document.getElementById('scrapeTweets').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs.length > 0) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ['content.js']
            });
        } else {
            console.error('No active tab found');
        }
    });
});
