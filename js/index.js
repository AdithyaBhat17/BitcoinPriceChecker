var price = document.querySelector("#price");
var curr = document.querySelector("#curr");

window.onLoad = getPrice(curr.value);

setInterval(function(){
  getPrice(curr.value);
}, 1000);

function getPrice(code) {
  var XHR = new XMLHttpRequest();
  var parsedCode = code.toUpperCase();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
    	if(curr.value== "inr"){
    		price.textContent ="₹ " + JSON.parse(XHR.responseText).bpi[parsedCode].rate;
    	}else if(curr.value === "gbp"){
    		price.textContent = "£ " + JSON.parse(XHR.responseText).bpi[parsedCode].rate;
    	}else if(curr.value === "eur"){
    		price.textContent = "€ " + JSON.parse(XHR.responseText).bpi[parsedCode].rate;
    	}else{
    		price.textContent = "$ " + JSON.parse(XHR.responseText).bpi[parsedCode].rate;
    	}
    }
  }
  if(curr.value ==="inr"){
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/INR.json");
  XHR.send();
}else if(curr.value === "usd"){
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
}
  else{
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
}
  }