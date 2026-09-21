/* =========================================
   URL PERSONALIZATION
========================================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const nameFromURL =
    params.get("name");


const typeFromURL =
    params.get("type");


const name =
    nameFromURL
        ? decodeURIComponent(nameFromURL)
        : "you";


const type =
    typeFromURL
        ? typeFromURL.toLowerCase()
        : "friend";


/* =========================================
   EXPERIENCE DATA
========================================= */

const experiences = {

    friend: {

        introEyebrow:
            "A tiny message",

        introText:
            "Someone made something for you.<br>It would be rude not to open it.",

        label:
            "JUST FOR YOU",

        messageIntro:
            "Okay... you made it this far.",

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

        messageIntro:
            "Okay... don't get emotional.",

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

        messageIntro:
            "Well... you clicked it.",

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

        messageIntro:
            "Okay... this one is special.",

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


/* =========================================
   SELECT EXPERIENCE
========================================= */

const experience =
    experiences[type]
    || experiences.friend;


/* =========================================
   ELEMENTS
========================================= */

const introScreen =
    document.getElementById(
        "introScreen"
    );


const loadingScreen =
    document.getElementById(
        "loadingScreen"
    );


const messageScreen =
    document.getElementById(
        "messageScreen"
    );


const finalScreen =
    document.getElementById(
        "finalScreen"
    );


const openButton =
    document.getElementById(
        "openButton"
    );


const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );


const restartButton =
    document.getElementById(
        "restartButton"
    );


const sparkButton =
    document.getElementById(
        "sparkButton"
    );


const sparkMessageButton =
    document.getElementById(
        "sparkMessageButton"
    );


const personName =
    document.getElementById(
        "personName"
    );


const introEyebrow =
    document.getElementById(
        "introEyebrow"
    );


const introText =
    document.getElementById(
        "introText"
    );


const cardLabel =
    document.getElementById(
        "cardLabel"
    );


const cardRecipient =
    document.getElementById(
        "cardRecipient"
    );


const messageIntro =
    document.getElementById(
        "messageIntro"
    );


const messageTitle =
    document.getElementById(
        "messageTitle"
    );


const typingText =
    document.getElementById(
        "typingText"
    );


const finalLine =
    document.getElementById(
        "finalLine"
    );


const finalTitle =
    document.getElementById(
        "finalTitle"
    );


const finalMessage =
    document.getElementById(
        "finalMessage"
    );


const surpriseText =
    document.getElementById(
        "surpriseText"
    );


const loadingStatus =
    document.getElementById(
        "loadingStatus"
    );


const loadingProgress =
    document.getElementById(
        "loadingProgress"
    );


const loadingPercent =
    document.getElementById(
        "loadingPercent"
    );


const starsContainer =
    document.getElementById(
        "stars"
    );


const cursorGlow =
    document.getElementById(
        "cursorGlow"
    );


const messageCard =
    document.getElementById(
        "messageCard"
    );


const particleContainer =
    document.getElementById(
        "particleContainer"
    );


const finalSymbol =
    document.getElementById(
        "finalSymbol"
    );


/* =========================================
   PERSONALIZE PAGE
========================================= */

personName.textContent =
    name !== "you"
        ? name + "..."
        : "you...";


cardRecipient.textContent =
    name !== "you"
        ? name.toUpperCase()
        : "YOU";


introEyebrow.textContent =
    experience.introEyebrow;


introText.innerHTML =
    experience.introText;


cardLabel.textContent =
    experience.label;


messageIntro.textContent =
    experience.messageIntro;


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


/* =========================================
   CREATE STARS
========================================= */

function createStars() {

    const amount =
        window.innerWidth < 600
            ? 45
            : 90;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const star =
            document.createElement(
                "span"
            );


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


        starsContainer.appendChild(
            star
        );

    }

}


createStars();


/* =========================================
   TYPEWRITER
========================================= */

let typingTimer = null;


function typeMessage() {

    clearTimeout(typingTimer);


    typingText.textContent =
        "";


    let index = 0;


    const speed = 27;


    function typeNext() {

        if (
            index >=
            experience.message.length
        ) {

            return;

        }


        typingText.textContent +=
            experience.message[index];


        index++;


        typingTimer =
            setTimeout(
                typeNext,
                speed
            );

    }


    typeNext();

}


/* =========================================
   LOADING
========================================= */

function startLoading() {

    loadingScreen.classList.add(
        "visible"
    );


    const statuses = [

        "Initializing",

        "Finding something special",

        "Polishing pixels",

        "Adding unnecessary animations",

        "Almost ready"

    ];


    let progress = 0;

    let statusIndex = 0;


    loadingProgress.style.width =
        "0%";


    loadingPercent.textContent =
        "0";


    loadingStatus.textContent =
        statuses[0];


    const interval =
        setInterval(() => {

            progress +=
                Math.random() * 7 + 4;


            if (
                progress >= 100
            ) {

                progress = 100;

                clearInterval(
                    interval
                );


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
                            700
                        );


                    }, 450);


                }, 500);

            }


            loadingProgress.style.width =
                `${progress}%`;


            loadingPercent.textContent =
                Math.floor(progress);


            const newIndex =
                Math.min(
                    Math.floor(
                        progress / 20
                    ),
                    statuses.length - 1
                );


            if (
                newIndex !==
                statusIndex
            ) {

                statusIndex =
                    newIndex;


                loadingStatus.textContent =
                    statuses[
                        statusIndex
                    ];

            }

        }, 180);

}


/* =========================================
   OPEN EXPERIENCE
========================================= */

openButton.addEventListener(
    "click",
    (event) => {

        createParticles(
            event.clientX,
            event.clientY,
            22
        );


        introScreen.classList.add(
            "hidden"
        );


        setTimeout(
            startLoading,
            500
        );

    }
);


/* =========================================
   NEXT MESSAGE
========================================= */

surpriseButton.addEventListener(
    "click",
    (event) => {

        createParticles(
            event.clientX,
            event.clientY,
            30
        );


        messageScreen.classList.remove(
            "visible"
        );


        setTimeout(() => {

            finalScreen.classList.add(
                "visible"
            );


            createParticles(
                window.innerWidth / 2,
                window.innerHeight / 2,
                35
            );


        }, 550);

    }
);


/* =========================================
   MESSAGE SPARKLE BUTTON
========================================= */

sparkMessageButton.addEventListener(
    "click",
    () => {

        const rect =
            sparkMessageButton
                .getBoundingClientRect();


        createParticles(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            45
        );


        sparkMessageButton
            .querySelector(
                ".spark-icon"
            )
            .animate(
                [
                    {
                        transform:
                            "rotate(0deg) scale(1)"
                    },
                    {
                        transform:
                            "rotate(180deg) scale(1.5)"
                    },
                    {
                        transform:
                            "rotate(360deg) scale(1)"
                    }
                ],
                {
                    duration: 600,
                    easing: "ease-out"
                }
            );

    }
);


/* =========================================
   RESTART
========================================= */

restartButton.addEventListener(
    "click",
    () => {

        finalScreen.classList.remove(
            "visible"
        );


        messageScreen.classList.remove(
            "visible"
        );


        loadingScreen.classList.remove(
            "visible"
        );


        loadingProgress.style.width =
            "0%";


        loadingPercent.textContent =
            "0";


        typingText.textContent =
            "";


        setTimeout(() => {

            introScreen.classList.remove(
                "hidden"
            );

        }, 500);

    }
);


/* =========================================
   PARTICLES
========================================= */

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
            document.createElement(
                "span"
            );


        particle.className =
            "particle";


        particle.style.left =
            `${x}px`;


        particle.style.top =
            `${y}px`;


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            40 +
            Math.random() *
            140;


        const moveX =
            Math.cos(angle) *
            distance;


        const moveY =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--x",
            `${moveX}px`
        );


        particle.style.setProperty(
            "--y",
            `${moveY}px`
        );


        const size =
            Math.random() * 4 + 2;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particleContainer.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 950);

    }

}


/* =========================================
   FINAL SPARK
========================================= */

sparkButton.addEventListener(
    "click",
    (event) => {

        const rect =
            sparkButton.getBoundingClientRect();


        createParticles(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            60
        );


        sparkButton.animate(
            [
                {
                    transform:
                        "scale(1)"
                },
                {
                    transform:
                        "scale(1.25) rotate(20deg)"
                },
                {
                    transform:
                        "scale(1)"
                }
            ],
            {
                duration: 500
            }
        );

    }
);


/* =========================================
   SECRET STAR
========================================= */

finalSymbol.addEventListener(
    "click",
    (event) => {

        createParticles(
            event.clientX,
            event.clientY,
            80
        );


        finalSymbol.animate(
            [
                {
                    transform:
                        "rotate(0deg) scale(1)"
                },
                {
                    transform:
                        "rotate(180deg) scale(1.3)"
                },
                {
                    transform:
                        "rotate(360deg) scale(1)"
                }
            ],
            {
                duration: 700,
                easing: "ease-out"
            }
        );

    }
);


/* =========================================
   MOUSE GLOW
========================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        if (!cursorGlow) {
            return;
        }


        cursorGlow.style.left =
            `${event.clientX}px`;


        cursorGlow.style.top =
            `${event.clientY}px`;


        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 20;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 20;


        document
            .querySelector(".aurora-one")
            .style.transform =
            `translate(${x}px, ${y}px)`;


        document
            .querySelector(".aurora-two")
            .style.transform =
            `translate(${-x}px, ${-y}px)`;

    }
);


/* =========================================
   CARD 3D EFFECT
========================================= */

messageCard.addEventListener(
    "mousemove",
    (event) => {

        if (
            window.innerWidth < 700
        ) {

            return;

        }


        const rect =
            messageCard.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left;


        const y =
            event.clientY -
            rect.top;


        const rotateY =
            (
                x / rect.width -
                0.5
            ) * 7;


        const rotateX =
            (
                y / rect.height -
                0.5
            ) * -7;


        messageCard.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateZ(3px)`;


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


/* =========================================
   TOUCH PARTICLES
========================================= */

document.addEventListener(
    "touchstart",
    (event) => {

        const touch =
            event.touches[0];


        createParticles(
            touch.clientX,
            touch.clientY,
            7
        );

    },
    {
        passive: true
    }
);
