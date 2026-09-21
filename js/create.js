const nameInput = document.getElementById("personName");
const typeInput = document.getElementById("personType");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

generateBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const type = typeInput.value;

    if (!name) {
        nameInput.focus();

        result.innerHTML = `
            <p>Please enter their name first.</p>
        `;

        return;
    }

    const baseURL = window.location.origin + "/after-the-click/";

    const personalizedURL =
        baseURL +
        "?name=" + encodeURIComponent(name) +
        "&type=" + encodeURIComponent(type);

    result.innerHTML = `
        <p class="result-label">Your experience is ready ✨</p>

        <div class="generated-link">
            ${personalizedURL}
        </div>

        <div class="creator-actions">

            <button id="copyBtn">
                Copy Link
            </button>

            <a
                id="whatsappBtn"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                WhatsApp
            </a>

        </div>

        <p id="copyStatus"></p>
    `;

    const copyBtn = document.getElementById("copyBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");
    const copyStatus = document.getElementById("copyStatus");

    copyBtn.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(personalizedURL);

            copyBtn.textContent = "Copied ✓";

            copyStatus.textContent = "Link copied to your clipboard.";

            setTimeout(() => {
                copyBtn.textContent = "Copy Link";
                copyStatus.textContent = "";
            }, 2000);

        } catch (error) {

            copyStatus.textContent =
                "Copy failed. Please copy the link manually.";

        }

    });

    const whatsappMessage =
        `I made something for you 👀\n\n${personalizedURL}`;

    whatsappBtn.href =
        "https://wa.me/?text=" +
        encodeURIComponent(whatsappMessage);

});
