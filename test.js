console.log("hello");

let bt = document.getElementById("Refreshbt");


bt.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: doMagic,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function doMagic() {
  console.log("Do Magic !!!!!!!!")

  let theCookies = document.cookie.split(';')
	let cookies = ''
	for (let i = 1; i <= theCookies.length; i++) {
		cookies += i + ' ' + theCookies[i - 1] + '\n'
	}
	console.log( cookies) ;
}