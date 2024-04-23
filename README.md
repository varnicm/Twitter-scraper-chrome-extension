# Twitter Scraper Chrome Extension

## Description
The Twitter Scraper Chrome Extension is designed to extract tweets from Twitter's search results pages and save them as a CSV file. This tool is intended for personal use and allows users to quickly collect data such as tweet text, user handles, timestamps, likes, and retweets.

## Features
- Scrape tweet data from Twitter search result pages.
- Download scraped data in a CSV format with columns for tweet text, user handle, timestamp, likes, and retweets.
- Easy to use with a simple button click to start scraping.

## Installation
To install the Twitter Scraper Chrome Extension, follow these steps:
1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode by toggling the switch in the top right corner.
4. Click on the "Load unpacked" button.
5. Select the directory where you've saved the unzipped extension files.

## Usage
1. Navigate to a Twitter search results page (e.g., https://twitter.com/search).
2. Click on the Twitter Scraper extension icon in your browser toolbar.
3. A popup will appear with a button labeled "Scrape Tweets". Click this button to begin scraping tweets from the current page.
4. Once the scraping process is complete, the extension will automatically download a CSV file named `tweets.csv` to your default download folder.

## Files Included
- `manifest.json`: The manifest file that Chrome reads to load the extension.
- `background.js`: Handles background tasks like triggering content script execution.
- `content.js`: The content script that scrapes data from Twitter's webpage.
- `popup.html`: The HTML file for the popup interface.
- `popup.js`: JavaScript for handling popup interactions and script execution.
- `icon.png`, `icon16.png`, `icon48.png`, `icon128.png`: Icons used in the extension.

## Limitations and Compliance
- This extension relies on the HTML structure of Twitter, which may change over time, potentially breaking the functionality of this scraper.
- The extension does not interact with Twitter's API and thus is not subject to API rate limits. However, scraping data directly from web pages is against Twitter's terms of service. Use this tool responsibly and consider the ethical implications and potential legal risks of data scraping.

## Support
For support or to report issues, please file an issue in the GitHub repository associated with this project.
