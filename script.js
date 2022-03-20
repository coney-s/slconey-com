window.addEventListener("load", function (){
    const myName = document.getElementById("brandName");

    myName.addEventListener("mouseover", function (event){
        // myName.style.color = "#FC997C";
        // Original green myName.style.color = "#B4FE98"
        myName.style.color = "#A6F0C6"
        myName.style.fontSize = "32px";
        myName.innerHTML="Take Me Home"
    })

    myName.addEventListener("mouseout", function(event) {
        myName.style.color = "ghostwhite";
        myName.style.fontSize = "30px";
        myName.innerHTML="s. l. coney"
    })

    const about = document.getElementById("aboutLink");

    about.addEventListener("mouseover", function (event){
        about.style.color = "#A6F0C6";
        about.style.fontSize = "1.7rem";
    })

    about.addEventListener("mouseout", function(event) {
        about.style.color = "ghostwhite";
        about.style.fontSize = "1.5rem";
    })

    const pubs = document.getElementById("pubsLink");

    pubs.addEventListener("mouseover", function (event){
        pubs.style.color = "#A6F0C6";
        pubs.style.fontSize = "1.7rem";
    })

    pubs.addEventListener("mouseout", function(event) {
        pubs.style.color = "ghostwhite";
        pubs.style.fontSize = "1.5rem";
    })

    const face = document.getElementById("faceLink");

    face.addEventListener("mouseover", function (event){
        face.style.color = "#A6F0C6";
        face.style.fontSize = "1.7rem";
    })

    face.addEventListener("mouseout", function(event) {
        face.style.color = "ghostwhite";
        face.style.fontSize = "1.5rem";
    })

    const contact = document.getElementById("contactLink");

    contact.addEventListener("mouseover", function (event){
        contact.style.color = "#A6F0C6";
        contact.style.fontSize = "1.7rem";
    })

    contact.addEventListener("mouseout", function(event) {
        contact.style.color = "ghostwhite";
        contact.style.fontSize = "1.5rem";
    })

    const twit = document.getElementById("twitLink");

    twit.addEventListener("mouseover", function (event){
        twit.style.color = "#A6F0C6";
        twit.style.fontSize = "1.7rem";
    })

    twit.addEventListener("mouseout", function(event) {
        twit.style.color = "ghostwhite";
        twit.style.fontSize = "1.5rem";
    })

    const reads = document.getElementById("good");

    reads.addEventListener("mouseover", function(event) {
        reads.style.color="#A6F0C6";
        reads.style.fontSize = "1.7rem";
    })

    reads.addEventListener("mouseout", function(event){
        reads.style.color = "ghostwhite";
        reads.style.fontSize = "1.5rem";
    })

    const gram = document.getElementById("instaLink");
    gram.addEventListener("mouseover", function(event) {
        gram.style.color = "#A6F0C6";
        gram.style.fontSize = "1.7rem";
    })

    gram.addEventListener("mouseout", function(event) {
        gram.style.color = "ghostwhite";
        gram.style.fontSize = "1.5rem";
    })

    // Form Submission

    
})