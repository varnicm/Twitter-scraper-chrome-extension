function collectTweets() {
    const tweets = [];
    document.querySelectorAll('article').forEach((tweet) => {
        const textElement = tweet.querySelector('div[data-testid="tweetText"]');
        const handleElement = tweet.querySelector('a div[dir="ltr"]');
        const timestampElement = tweet.querySelector('time');
        const likesElement = tweet.querySelector('[data-testid="like"]');
        const retweetsElement = tweet.querySelector('[data-testid="retweet"]');
        
        if (textElement && handleElement && timestampElement && likesElement && retweetsElement) {
            const tweetData = {
                text: textElement.innerText,
                handle: handleElement.innerText,
                timestamp: timestampElement.getAttribute('datetime'),
                likes: likesElement.innerText,
                retweets: retweetsElement.innerText
            };
            tweets.push(tweetData);
        }
    });
    return tweets;
}

function downloadCSV(tweets) {
    if (tweets.length === 0) return; // Avoid creating an empty CSV
    const csvRows = ['text,handle,timestamp,likes,retweets'];
    tweets.forEach((row) => {
        const values = [
            `"${row.text}"`,
            `"${row.handle}"`,
            `"${row.timestamp}"`,
            `"${row.likes}"`,
            `"${row.retweets}"`
        ];
        csvRows.push(values.join(','));
    });
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    chrome.runtime.sendMessage({url: url});
}

const tweets = collectTweets();
downloadCSV(tweets);
