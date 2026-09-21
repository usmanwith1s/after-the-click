/* =========================
   URL PERSONALIZATION
========================= */

const params = new URLSearchParams(window.location.search);

const nameFromURL = params.get("name");
const typeFromURL = params.get("type");

const name =
    nameFromURL
        ? decodeURIComponent(nameFromURL)
        : "you";

const type =
    typeFromURL
        ? typeFromURL.toLowerCase()
        : "friend";


/* =========================
   EXPERIENCE DATA
========================= */

const experiences = {

    friend: {

        introEyebrow: "A tiny message",

        introText:
            "Someone made something for you.<br>It would be rude not to open it.",

        label:
            "JUST FOR YOU",

        title:
            "You actually opened it.",

        message:
            "You could have ignored this link like a completely normal person... but you didn't. So I guess you deserve a tiny little message made entirely with code.",

        finalLine:
            "Some things are more fun when they're made instead of said.",

        finalTitle:
            "That's it.",

        finalMessage:
            "Hope this little corner of the internet made your day a little better.",

        button:
            "There's more"

    },


    sister: {

        introEyebrow:
            "Sibling transmission",

        introText:
            "Yes, I actually coded this.<br>Yes, you're still my sister.",

        label:
            "SIBLING EDITION",

        title:
            "You found it.",

        message:
            "I could have sent you a normal message like a civilized person, but apparently I decided to spend time making an entire website instead.",

        finalLine:
            "Being related to a developer has its disadvantages.",

        finalTitle:
            "You're welcome.",

        finalMessage:
            "Now go back to whatever you were doing. This mission is complete.",

        button:
            "Okay, one more"

    },


    cousin: {

        introEyebrow:
            "Classified cousin message",

        introText:
            "This message contains absolutely nothing suspicious.<br>Probably.",

        label:
            "COUSIN EDITION",

        title:
            "You fell for it.",

        message:
            "Congratulations. You clicked a random link sent by your cousin. Fortunately, instead of something terrible, you got a surprisingly polished website.",

        finalLine:
            "Family chaos, but make it digital.",

        finalTitle:
            "Case closed.",

        finalMessage:
            "Your curiosity has officially been rewarded.",

        button:
            "One last thing"

    },


    birthday: {

        introEyebrow:
            "A little birthday surprise",

        introText:
            "This isn't a normal birthday message.<br>Obviously, I had to code it.",

        label:
            "BIRTHDAY EDITION",

        title:
            "Today is yours.",

        message:
            "No complicated speech. No giant paragraph. Just a little corner of the internet made specifically to remind you that someone thought you deserved something different today.",

        finalLine:
            "Some memories are better when they're unexpected.",

        finalTitle:
            "Happy Birthday ✦",

        finalMessage:
            "May the next chapter give you plenty of reasons to smile.",

        button:
            "There's a little more"

    }

};


/* =========================
   SELECT EXPERIENCE
========================= */

const experience =
    experiences[type] || experiences.friend;


/* =========================
   ELEMENTS
========================= */

const introScreen =
    document.getElementById("introScreen");

const loadingScreen =
    document.getElementById("loadingScreen");

const messageScreen =
    document.getElementById("messageScreen");

const finalScreen =
    document.getElementById("finalScreen");

const openButton =
    document.getElementById("openButton");

const surpriseButton =
    document.getElementById("surpriseButton");

const restartButton =
    document.getElementById("restartButton");

const sparkButton =
    document.getElementById("sparkButton");

const personName =
    document.getElementById("personName");

const introEyebrow =
    document.getElementById("introEyebrow");

const introText =
    document.getElementById("introText");

const cardLabel =
    document.getElementById("cardLabel");

const messageTitle =
    document.getElementById("messageTitle");

const typingText =
    document.getElementById("typingText");

const finalLine =
    document.getElementById("finalLine");

const finalTitle =
    document.getElementById("finalTitle");

const finalMessage =
    document.getElementById("finalMessage");

const surpriseText =
    document.getElementById("surpriseText");

const loadingStatus =
    document.getElementById("loadingStatus");

const loadingProgress =
    document.getElementById("loadingProgress");

const starsContainer =
    document.getElementById("stars");

const cursorGlow =
    document.getElementById("cursorGlow");

const messageCard =
    document.getElementById("messageCard");

const particleContainer =
    document.getElementById("particleContainer");

const finalSymbol =
    document.getElementById("finalSymbol");


/* =========================
   PERSONALIZE PAGE
========================= */

personName.textContent =
    name !== "you"
        ? name + "..."
        : "you...";

introEyebrow.textContent =
    experience.introEyebrow;

introText.innerHTML =
    experience.introText;

cardLabel.textContent =
    experience.label;

messageTitle.textContent =
    experience.title;

finalLine.textContent =
    experience.finalLine;

finalTitle.textContent =
    experience.finalTitle;

finalMessage.textContent =
    experience.finalMessage;

surpriseText.textContent =
    experience.button;


/* =========================
   STARS
========================= */

function createStars() {

    const amount =
        window.innerWidth < 600
            ? 45
            : 80;

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("span");

        star.className =
            "star";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        const size =
            Math.random() * 2 + 1;

        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;

        star.style.animationDelay =
            `${Math.random() * 5}s`;

        starsContainer.appendChild(star);
    }
}

createStars();


/* =========================
   TYPEWRITER
========================= */

function typeMessage() {

    typingText.textContent = "";

    let index = 0;

    const speed = 28;

    function typeNext() {

        if (index >= experience.message.length) {
            return;
        }

        typingText.textContent +=
            experience.message[index];

        index++;

        setTimeout(
            typeNext,
            speed
        );
    }

    typeNext();
}


/* =========================
   LOADING SEQUENCE
========================= */

function startLoading() {

    loadingScreen.classList.add("visible");

    const statuses = [
        "Initializing",
        "Finding something special",
        "Polishing pixels",
        "Adding unnecessary animations",
        "Almost ready"
    ];

    let progress = 0;

    let statusIndex = 0;

    const interval =
        setInterval(() => {

            progress +=
                Math.random() * 7 + 4;

            if (progress >= 100) {

                progress = 100;

                clearInterval(interval);

                setTimeout(() => {

                    loadingScreen.classList.remove(
                        "visible"
                    );

                    setTimeout(() => {

                        messageScreen.classList.add(
                            "visible"
                        );

                        setTimeout(
                            typeMessage,
                            650
                        );

                    }, 400);

                }, 500);
            }

            loadingProgress.style.width =
                `${progress}%`;

            const newIndex =
                Math.min(
                    Math.floor(progress / 20),
                    statuses.length - 1
                );

            if (newIndex !== statusIndex) {

                statusIndex =
                    newIndex;

                loadingStatus.textContent =
                    statuses[statusIndex];
            }

        }, 180);
}


/* =========================
   OPEN
========================= */

openButton.addEventListener(
    "click",
    (event) => {

        createParticles(
            event.clientX,
            event.clientY,
            18
        );

        introScreen.classList.add(
            "hidden"
        );

        setTimeout(
            startLoading,
            550
        );
    }
);


/* =========================
   SURPRISE
========================= */

surpriseButton.addEventListener(
    "click",
    (event) => {

        createParticles(
            event.clientX,
            event.clientY,
            25
        );

        messageScreen.classList.remove(
            "visible"
        );

        setTimeout(() => {

            finalScreen.classList.add(
                "visible"
            );

        }, 500);
    }
);


/* =========================
   RESTART
========================= */

restartButton.addEventListener(
    "click",
    () => {

        finalScreen.classList.remove(
            "visible"
        );

        setTimeout(() => {

            introScreen.classList.remove(
                "hidden"
            );

        }, 500);
    }
);


/* =========================
   PARTICLES
========================= */

function createParticles(
    x,
    y,
    amount
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";

        particle.style.left =
            `${x}px`;

        particle.style.top =
            `${y}px`;

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            40 + Math.random() * 130;

        const moveX =
            Math.cos(angle) * distance;

        const moveY =
            Math.sin(angle) * distance;

        particle.style.setProperty(
            "--x",
            `${moveX}px`
        );

        particle.style.setProperty(
            "--y",
            `${moveY}px`
        );

        particle.style.width =
            `${Math.random() * 4 + 2}px`;

        particle.style.height =
            particle.style.width;

        particleContainer.appendChild(
            particle
        );

        setTimeout(() => {

            particle.remove();

        }, 950);
    }
}


/* =========================
   SPARK BUTTON
========================= */

sparkButton.addEventListener(
    "click",
    (event) => {

        const rect =
            sparkButton.getBoundingClientRect();

        createParticles(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            50
        );
    }
);


/* =========================
   FINAL STAR
========================= */

let secretActivated = false;

finalSymbol.addEventListener(
    "click",
    (event) => {

        createParticles(
            event.clientX,
            event.clientY,
            70
        );

        finalSymbol.style.transform =
            "rotate(360deg) scale(1.25)";

        setTimeout(() => {

            finalSymbol.style.transform =
                "";

        }, 500);

        secretActivated = true;
    }
);


/* =========================
   MOUSE GLOW
========================= */

document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

        const x =
            (event.clientX /
                window.innerWidth - 0.5) * 20;

        const y =
            (event.clientY /
                window.innerHeight - 0.5) * 20;

        document
            .querySelector(".glow-one")
            .style.transform =
            `translate(${x}px, ${y}px)`;

        document
            .querySelector(".glow-two")
            .style.transform =
            `translate(${-x}px, ${-y}px)`;

    }
);


/* =========================
   CARD 3D EFFECT
========================= */

messageCard.addEventListener(
    "mousemove",
    (event) => {

        if (window.innerWidth < 700) {
            return;
        }

        const rect =
            messageCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 7;

        const rotateX =
            ((y / rect.height) - 0.5) * -7;

        messageCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        const shine =
            messageCard.querySelector(
                ".card-shine"
            );

        shine.style.left =
            `${x}px`;

        shine.style.top =
            `${y}px`;
    }
);

messageCard.addEventListener(
    "mouseleave",
    () => {

        messageCard.style.transform =
            "";

    }
);


/* =========================
   TOUCH PARTICLES
========================= */

document.addEventListener(
    "touchstart",
    (event) => {

        const touch =
            event.touches[0];

        createParticles(
            touch.clientX,
            touch.clientY,
            8
        );
    },
    {
        passive: true
    }
);
