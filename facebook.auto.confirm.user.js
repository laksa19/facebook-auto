// ==UserScript==
// @name         Facebook Auto Confirm
// @namespace    https://laksa19.github.io/facebook-auto
// @updateURL    https://raw.githubusercontent.com/laksa19/facebook-auto/master/facebook.auto.confirm.user.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/facebook-auto/master/facebook.auto.confirm.user.js
// @version      0.0.20
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
var auto = setInterval(function(){
    counter++;
    //console.log(counter)
    Confirm(counter)

     if (counter === 25) {
       clearInterval(auto);
     }
  }, 5000);


})();
