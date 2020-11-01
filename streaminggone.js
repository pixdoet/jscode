// ==UserScript==
// @name         Remove Streaming Now
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Removes the top right corner's streaming now and featured people thingy, as well as the news
// @author       id_9982
// @match        *://krunker.io/*
// @exclude      *://krunker.io/social*
// @grant        none
// ==/UserScript==

document.getElementById("streamContainer").style.display = "none";
document.getElementById("newsHolder").style.display = "none";

