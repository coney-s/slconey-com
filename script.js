window.addEventListener("load", function (){
    const myName = document.getElementById("brandName");

    myName.addEventListener("mouseover", function (event){
        // myName.style.color = "#FC997C";
        myName.style.color = "#B4FE98"
        myName.style.fontSize = "32px";
        myName.innerHTML="Take Me Home"
    })

    myName.addEventListener("mouseout", function(event) {
        myName.style.color = "ghostwhite";
        myName.style.fontSize = "27px";
        myName.innerHTML="sl coney"
    })

    const about = document.getElementById("aboutLink");

    about.addEventListener("mouseover", function (event){
        about.style.color = "#B4FE98";
        about.style.fontSize = "1.5rem";
    })

    about.addEventListener("mouseout", function(event) {
        about.style.color = "ghostwhite";
        about.style.fontSize = "1.2rem";
    })

    const pubs = document.getElementById("pubsLink");

    pubs.addEventListener("mouseover", function (event){
        pubs.style.color = "#B4FE98";
        pubs.style.fontSize = "1.5rem";
    })

    pubs.addEventListener("mouseout", function(event) {
        pubs.style.color = "ghostwhite";
        pubs.style.fontSize = "1.2rem";
    })

    const face = document.getElementById("faceLink");

    face.addEventListener("mouseover", function (event){
        face.style.color = "#B4FE98";
        face.style.fontSize = "1.5rem";
    })

    face.addEventListener("mouseout", function(event) {
        face.style.color = "ghostwhite";
        face.style.fontSize = "1.2rem";
    })

    const contact = document.getElementById("contactLink");

    contact.addEventListener("mouseover", function (event){
        contact.style.color = "#B4FE98";
        contact.style.fontSize = "1.5rem";
    })

    contact.addEventListener("mouseout", function(event) {
        contact.style.color = "ghostwhite";
        contact.style.fontSize = "1.2rem";
    })

    const twit = document.getElementById("twitLink");

    twit.addEventListener("mouseover", function (event){
        twit.style.color = "#B4FE98";
        twit.style.fontSize = "1.5rem";
    })

    twit.addEventListener("mouseout", function(event) {
        twit.style.color = "ghostwhite";
        twit.style.fontSize = "1.2rem";
    })

    const reads = document.getElementById("good");

    reads.addEventListener("mouseover", function(event) {
        reads.style.color="#B4FE98";
        reads.style.fontSize = "1.5rem";
    })

    reads.addEventListener("mouseout", function(event){
        reads.style.color = "ghostwhite";
        reads.style.fontSize = "1.2rem";
    })

    const gram = document.getElementById("instaLink");
    gram.addEventListener("mouseover", function(event) {
        gram.style.color = "#B4FE98";
        gram.style.fontSize = "1.5rem";
    })

    gram.addEventListener("mouseout", function(event) {
        gram.style.color = "ghostwhite";
        gram.style.fontSize = "1.2rem";
    })
})