console.log('Background script loaded.');

// Event listener for extension installation
chrome.runtime.onInstalled.addListener(function() {
  console.log('Extension installed.');
});

// Event listener for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('Message received:', message);
  // You can perform actions based on the received message
});

// Example: Send a message to content scripts or other parts of the extension
function sendMessageToContentScript() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {greeting: "Hello from background!"});
  });
}
// background.js

// Define a function to open Google in a new tab
function openGoogle() {
  // Specify the URL of Google
  var url = 'https://www.google.com';

  // Create a new tab with the specified URL
  chrome.tabs.create({ url: url }, function(tab) {
    // Tab created successfully
    console.log('Google tab opened:', tab);
  });
}


// Call the function to open Google when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
  openGoogle();
});