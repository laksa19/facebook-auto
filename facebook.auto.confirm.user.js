// ==UserScript==
// @name         Facebook Auto Confirm
// @version      0.0.15
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
            console.log("Confirm");
            }
    }

}


var counter = 0;
setInterval(function(){
    counter++;
//console.log(counter)
    Confirm(counter)

     if (counter === 20) {
       clearInterval(counter);
     }
  }, 5000);


})();
