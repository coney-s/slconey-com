window.addEventListener("load", function (){
    const myName = document.getElementById("brandName");

    myName.addEventListener("mouseover", function (event){
        myName.style.color = "#91d9c9";
    })

    myName.addEventListener("mouseout", function(event) {
        myName.style.color = "ghostwhite";
    })

    const about = document.getElementById("aboutLink");

    about.addEventListener("mouseover", function (event){
        about.style.color = "#91d9c9";
    })

    about.addEventListener("mouseout", function(event) {
        about.style.color = "ghostwhite";
    })

    const pubs = document.getElementById("pubsLink");

    pubs.addEventListener("mouseover", function (event){
        pubs.style.color = "#91d9c9";
    })

    pubs.addEventListener("mouseout", function(event) {
        pubs.style.color = "ghostwhite";
    })

    const face = document.getElementById("faceLink");

    face.addEventListener("mouseover", function (event){
        face.style.color = "#91d9c9";
    })

    face.addEventListener("mouseout", function(event) {
        face.style.color = "ghostwhite";
    })

    // const blog = document.getElementById("blogLink");

    // blog.addEventListener("mouseover", function (event){
    //     blog.style.color = "#91d9c9";
    // })

    // blog.addEventListener("mouseout", function(event) {
    //     blog.style.color = "ghostwhite";
    // })

    const contact = document.getElementById("contactLink");

    contact.addEventListener("mouseover", function (event){
        contact.style.color = "#91d9c9";
    })

    contact.addEventListener("mouseout", function(event) {
        contact.style.color = "ghostwhite";
    })

    const twit = document.getElementById("twitLink");

    twit.addEventListener("mouseover", function (event){
        twit.style.color = "#91d9c9";
    })

    twit.addEventListener("mouseout", function(event) {
        twit.style.color = "ghostwhite";
    })

    const gram = document.getElementById("instant");

    gram.addEventListener("mouseover", function(event){
        gram.style.color = "#91d9c9";
    })

    gram.addEventListener("mouseout", function(event) {
        gram.style.color = "ghostwhite";
    })
})