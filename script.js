let leftItem = document.querySelector(".split-left");
let rightItem = document.querySelector(".split-right");


leftItem.addEventListener("mouseover", () => {
    leftItem.classList.add("w-75");
    rightItem.classList.add("w-25");
});

leftItem.addEventListener("mouseleave", () => {
    leftItem.classList.remove("w-75");
    rightItem.classList.remove("w-25");
});


rightItem.addEventListener("mouseover", () => {
    rightItem.classList.add("w-75");
    leftItem.classList.add("w-25");
});

rightItem.addEventListener("mouseleave", () => {
    rightItem.classList.remove("w-75");
    leftItem.classList.remove("w-25");
});