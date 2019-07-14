// ==UserScript==
// @name         Facebook Auto Confirm
// @version      0.0.10
// @author       Laksamadi Guko
// @description  Facebook Auto Confirm Friend Requests
// @match        *://www.facebook.com/friends/requests/*
// ==/UserScript==

(function() {
    'use strict';
function Confirm(indx){

    var i;
    var el = document.getElementsByTagName("button");

    if(el){
            var getHTML = el[indx].innerHTML;
            if(getHTML == "Confirm"){
            el[indx].click();
            console.log("clicked");
            }
    }

}
setInterval(function(){
    var counter = 0;
    counter++;

    Confirm(counter)

     if (counter === 50) {
       clearInterval(counter);
     }
  }, 5000);


})();
