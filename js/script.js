
/* =========================
   ELEMENTS
========================= */

const introScreen = document.getElementById("introScreen");
const messageScreen = document.getElementById("messageScreen");
const finalScreen = document.getElementById("finalScreen");

const openButton = document.getElementById("openButton");
const surpriseButton = document.getElementById("surpriseButton");
const restartButton = document.getElementById("restartButton");

const typingText = document.getElementById("typingText");
const starsContainer = document.getElementById("stars");


/* =========================
   CREATE STARS
========================= */

function createStars() {

    const numberOfStars = 70;

    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.animationDelay = `${Math.random() * 4}s`;

        const size = Math.random() * 2 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        starsContainer.appendChild(star);
    }
}

createStars();


/* =========================
   TYPEWRITER
========================= */

const message =
    "You could have ignored this link like a completely normal person... but you didn't. So I guess you deserve a tiny little message made entirely with code.";


function typeMessage() {

    typingText.textContent = "";

    let index = 0;

    const typingSpeed = 35;

    function typeNextCharacter() {

        if (index < message.length) {

            typingText.textContent += message.charAt(index);

            index++;

            setTimeout(typeNextCharacter, typingSpeed);

        }

    }

    typeNextCharacter();
}


/* =========================
   OPEN EXPERIENCE
========================= */

openButton.addEventListener("click", () => {

    introScreen.classList.add("hidden");

    setTimeout(() => {

        messageScreen.classList.add("visible");

        setTimeout(() => {
            typeMessage();
        }, 700);

    }, 500);

});


/* =========================
   FINAL SURPRISE
========================= */

surpriseButton.addEventListener("click", () => {

    messageScreen.classList.remove("visible");

    setTimeout(() => {

        finalScreen.classList.add("visible");

    }, 500);

});


/* =========================
   RESTART
========================= */

restartButton.addEventListener("click", () => {

    finalScreen.classList.remove("visible");

    setTimeout(() => {

        messageScreen.classList.remove("visible");
        introScreen.classList.remove("hidden");

    }, 500);

});


/* =========================
   MOUSE PARALLAX
========================= */

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    document.querySelectorAll(".glow").forEach((glow, index) => {

        const multiplier = index === 0 ? 1 : -1;

        glow.style.transform =
            `translate(${x * multiplier}px, ${y * multiplier}px)`;

    });

});
