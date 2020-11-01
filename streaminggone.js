// ==UserScript==
// @name         Remove Streaming Now
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the top right corner's streaming now and featured people thingy
// @author       id_9982
// @match        *://krunker.io/*
// @exclude      *://krunker.io/social*
// @grant        none
// ==/UserScript==
document.getElementById("streamContainer").style.display = "none";
document.getElementById("newsholder").style.display = "none";
document.getElementById("google_ads_iframe_/15184186/krunkerio_728x90_1_0__container__").style.display = "none";

