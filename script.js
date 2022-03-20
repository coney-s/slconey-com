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

    // About Page animation

    const hola = document.getElementById("hello");


    hola.addEventListener("mouseover", function (event) {
        hola.innerHTML = "Author";
        hola.style.color = "#A6F0C6";
        hola.style.paddingLeft = "20%";
    })

    hola.addEventListener("mouseout", function (event) {
        hola.innerHTML = "Hello,";
        hola.style.color = "ghostwhite";
        hola.style.paddingLeft = "0";
    })

    const isMe = document.getElementById("me");

    isMe.addEventListener("mouseover", function (event) {
        isMe.innerHTML = "of the";
        isMe.style.color = "#A6F0C6";
        isMe.style.paddingLeft = "20%";
    })

    isMe.addEventListener("mouseout", function (event) {
        isMe.innerHTML = "I'm";
        isMe.style.color = "ghostwhite";
        isMe.style.paddingLeft = "0";
    })

    const alsoMe = document.getElementById("aName");

    alsoMe.addEventListener("mouseover", function (event) {
        alsoMe.innerHTML = "Weird";
        alsoMe.style.paddingLeft = "20%";
    })

    alsoMe.addEventListener("mouseout", function (event) {
        alsoMe.innerHTML = "Shaw";
        alsoMe.style.paddingLeft = "0";
    })

    // Trial Animation

    let helloText = ["Author", "Hello,"];
    let counter = 0;

    let inst = setInterval(change, 2000);

    function change() {
        hola.classList.add('fade');
        // hola.style.color = "#A6F0C6";
        // hola.style.paddingLeft = "20%";

        setTimeout(function () {
            hola.innerHTML = helloText[counter];

            if (hola.innerHTML === "Author") {
                hola.style.color = "#A6F0C6";
                hola.style.paddingLeft = "20%";
            } else {
                hola.style.color = "ghostwhite";
                hola.style.paddingLeft = "0";
            }
            hola.classList.remove('fade');
            counter++;
            if (counter >= helloText.length) {
                counter = 0;
            }
        }, 500);

        if ((hola.innerHTML === "Hello,") && (isMe.innerHTML === "I'm") && (alsoMe.innerHTML === "Weird")) {
            window.clearInterval(inst);
            window.clearInterval(inst2);
            window.clearInterval(inst3);

        }

    }

    let meText = ["of the", "I'm"];
    let counter2 = 0;

    let inst2 = setInterval(change2, 2100);

    function change2() {
        isMe.classList.add('fade');

        setTimeout(function () {
            isMe.innerHTML = meText[counter2];

            if (isMe.innerHTML === "of the") {
                isMe.style.color = "#A6F0C6";
                isMe.style.paddingLeft = "20%";
            } else {
                isMe.style.color = "ghostwhite";
                isMe.style.paddingLeft = "0";
            }

            isMe.classList.remove('fade');
            counter2++;
            if (counter2 >= helloText.length) {
                counter2 = 0;
            }
        }, 500);

        if ((hola.innerHTML === "Hello,") && (isMe.innerHTML === "I'm") && (alsoMe.innerHTML === "Weird")) {
            window.clearInterval(inst);
            window.clearInterval(inst2);
            window.clearInterval(inst3);

        }
    }

    let meAlsoText = ["Weird", "Shaw"];
    let counter3 = 0;

    let inst3 = setInterval(change3, 2300); //2250
    function change3() {
        alsoMe.classList.add('fade');

        setTimeout(function () {
            alsoMe.innerHTML = meAlsoText[counter3];

            if (alsoMe.innerHTML === "Weird") {
                alsoMe.style.paddingLeft = "20%";
            } else {
                alsoMe.style.paddingLeft = "0";
            }

            alsoMe.classList.remove('fade');
            counter3++;
            if (counter3 >= meAlsoText.length) {
                counter3 = 0;
            }
        }, 500);

        if ((hola.innerHTML === "Hello,") && (isMe.innerHTML === "I'm") && (alsoMe.innerHTML === "Weird")) {
            window.clearInterval(inst);
            window.clearInterval(inst2);
            window.clearInterval(inst3);

        }

        
    }

    



})

    
