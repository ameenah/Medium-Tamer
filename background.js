

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  
chrome.cookies.getAll({domain: "medium.com"}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {  
        chrome.cookies.remove({url: "https://medium.com" + cookies[i].path, name: cookies[i].name});
    }
  });
  console.log(tab.url);
});




// console.log("hello from BG.js")

// chrome.cookies.getAll({domain: "medium.com"}, function(cookies) {
//     for(var i=0; i<cookies.length;i++) {  
//         chrome.cookies.remove({url: "https://medium.com" + cookies[i].path, name: cookies[i].name});
//     }
//   });


