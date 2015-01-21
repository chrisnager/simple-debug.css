chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: "var d,t=document.createElement('style'),h=document.getElementsByTagName('head')[0];t.setAttribute('id','simple-debug-css');t.innerHTML='*{outline:1px solid #fff!important;background-color:rgba(0,2,54,.1)!important}';d=document.getElementById('simple-debug-css');d==null?h.appendChild(t):h.removeChild(d)"
    });
});
