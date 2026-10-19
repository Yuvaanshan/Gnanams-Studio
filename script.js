const galleryButton = document.querySelector(".button1");
const gallerySection = document.querySelector("#gallery");
const tipsButton = document.querySelector("#tips-button");
const visitTips = document.querySelector("#visit-tips");

if (galleryButton && gallerySection) {
    galleryButton.addEventListener("click", function () {
        gallerySection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

if (tipsButton && visitTips) {
    tipsButton.addEventListener("click", function () {
        visitTips.hidden = !visitTips.hidden;

        tipsButton.textContent = visitTips.hidden
            ? "Show visit tips +"
            : "Hide visit tips −";

        tipsButton.setAttribute(
            "aria-expanded",
            String(!visitTips.hidden)
        );
    });
}