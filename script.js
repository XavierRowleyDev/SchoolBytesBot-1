// ==UserScript==
// @name         SchoolBytesBot 
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Automatic sport selection on schoolbytes.
// @author       moonlacee
// @match        http://*/* (
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    window.document.onload = verify();
    var name = "name";//change based on client
    var form = document.getElementsByClassName("form-control sportpref_dropdown");

    function verify() {
        if (document.body.getElementsByClassName("name")[0].innerHTML != 'Not ' + name) {
            document.body.innerHTML = '';
        } else {
            return localStorage.set("botVerified",true);
        }
    }

    function searchSport() {
        var ice = form.search("Ice");
        x= ice-30;

    }
    var sports = {
        iceskating: form[0][2],
        basketball: form[0][3],
        chess: form[0][4],
        croquet: form[0][5],
        dance: form[0][6],
        fitnesswalking8: form[0][7],
        fitnesswalking9: form[0][8],
        fitnesswalking10: form[0][9],
        gymfitness: form[0][10],
        lawnbowls10: form[0][11],
        mixedsport: form[0][12],
        tabletennis: form[0][13],
        tennis89: form[0][14],
        tennis10: form[0][15],
        yoga: form[0][16],
        lasertag: form[0][17],
        taekwondo: form[0][18],
    }

    function fill() {
        sports.iceskating.disabled = false;
        sports.iceskating.selected = true;
    }
    window.addEventListener("keydown", function(e) {
        if (e.keyCode == 71 && localStorage.botVerified == true) { //G for hotkey
            fill();
            console.log(sports[0][0])
        }
    })
})();
