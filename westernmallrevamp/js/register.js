"use strict";

const $ = selector => document.querySelector(selector); 

window.addEventListener("load", function(){
    //setTimeout() method sets a timer which executes a function once the timer expires
    setTimeout(
        function open(event){
            checkCookie();
        },
        2000 // 1 seconds = 1000 milliseconds
    )
});

function setCookie(hasVisited, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = hasVisited + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(hasVisited) {
    let visited = hasVisited + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(visited) == 0) {
        return c.substring(visited.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    let visited = getCookie("hasVisited");
    if (visited != "true" || visited == "") {
        // set to none to continue work on the website, needs to be set back to block
        document.querySelector(".popup").style.display = "none";
    } else {
        document.querySelector(".popup").style.display = "none";
        $(".flexContainer").blur();
    }
}

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");
    const comments = $("#comments");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    } 
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number."; 
    } 
    if (country.value == "") {
        msgs[msgs.length] = "Please select a country.";
    } 
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service."; 
    }
    if (comments.value == "") {
        msgs[msgs.length] = "Please enter a comment.";
    }

    // submit the form or notify user of errors
    if (msgs.length == 0) {  // no error messages
        document.querySelector(".popup").style.display = "none";
        document.querySelector(".confirmed").style.display = "block";
        setCookie("hasVisited", "true", 365);
        $("form").submit(); 
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    $("form").reset();
    
    // remove error messages
    $("ul").remove();
    
    //$("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#close_form").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
    });
    $("#nav3").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "block";
    });
    $("#navMenu").addEventListener("click", function(){
        document.querySelector("#faqs").style.display = "block";
    });
    $("#close_faqs").addEventListener("click", function(){
        document.querySelector("#faqs").style.display = "none";
    });
});

