let leftBar = document.getElementById("left-bar");

let leftBarContainer = document.getElementById("left-bar-container");
let leftBarContainerSpans = leftBarContainer.getElementsByTagName("span");

let logo = document.getElementById("logo");
let logoImgs = logo.getElementsByTagName("img");

let buttonContainer = document.getElementById("button-container");
let simplifySpans = buttonContainer.getElementsByTagName("span");

let header = document.getElementsByTagName("header");
let footer = document.getElementsByTagName("footer");
let main = document.getElementsByTagName("main");

const firstSectionCategory = document.getElementById("first-section-category");
const firstArrow = firstSectionCategory.querySelector(".expand");
const secondSectionCategory = document.getElementById("second-section-category");
const secondArrow = secondSectionCategory.querySelector(".expand");

const subscription = document.getElementById("subscription");
const subscriptionLink = subscription.querySelector("a");






buttonContainer.addEventListener("click", () => {
    if (leftBar.style.width==="280px") {

        for (let span of leftBarContainerSpans) {
            span.style.visibility = "collapse";
            leftBar.style.width = "46px";
        }

        logoImgs[0].setAttribute("height", "46");

        simplifySpans[0].textContent = ">";
        buttonContainer.style.justifyContent = "left";
        simplifySpans[0].style.marginLeft = "10px";

        header[0].style.width = "calc(100% - 46px)";
        header[0].style.marginLeft = "46px";
        footer[0].style.width = "calc(100% - 46px)";
        footer[0].style.marginLeft = "46px";
        main[0].style.width = "calc(100% - 46px)";
        main[0].style.marginLeft = "46px";

        firstSectionCategory.style.display = "none";
        secondSectionCategory.style.display = "none";

        subscriptionLink.style.display = "none";

    } else {

        for (let span of leftBarContainerSpans) {
            span.style.visibility = "visible";
            leftBar.style.width = "280px";
        }

        logoImgs[0].setAttribute("height", "80");

        simplifySpans[0].textContent = "<";
        buttonContainer.style.justifyContent = "right";
        simplifySpans[0].style.marginLeft = "30px";

        header[0].style.width = "calc(100% - 280px)";
        header[0].style.marginLeft = "280px";
        footer[0].style.width = "calc(100% - 280px)";
        footer[0].style.marginLeft = "280px";
        main[0].style.width = "calc(100% - 280px)";
        main[0].style.marginLeft = "280px";

        firstSectionCategory.style.display = "flex";
        secondSectionCategory.style.display = "flex";

        subscriptionLink.style.display = "flex";
    }

});




firstSectionCategory.addEventListener("mouseover", () => {
    firstArrow.style.visibility = "visible";
});

firstSectionCategory.addEventListener("mouseleave", () => {
    firstArrow.style.visibility = "hidden";
});


secondSectionCategory.addEventListener("mouseover", () => {
    secondArrow.style.visibility = "visible";
});

secondSectionCategory.addEventListener("mouseleave", () => {
    secondArrow.style.visibility = "hidden";
});

