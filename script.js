// Always start page at top
history.scrollRestoration = "manual";

window.onload = function(){
    window.scrollTo(0,0);
};



// Navbar scroll effect

const navbar = document.querySelector("nav");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background="rgba(2,6,23,0.95)";

    }
    else{

        navbar.style.background="rgba(2,6,23,0.85)";

    }

});





// Typing animation

const text = "Junior Network Engineer | NOC Engineer";

let i = 0;


function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,70);

    }

}


typing();






// Particle background


tsParticles.load("tsparticles",{

    particles:{

        number:{

            value:70

        },


        color:{

            value:"#38bdf8"

        },


        links:{

            enable:true,

            color:"#38bdf8"

        },


        move:{

            enable:true,

            speed:1

        }


    }


});







// Scroll animation


ScrollReveal().reveal("section",{

    distance:"60px",

    duration:1200,

    origin:"bottom",

    reset:false

});
