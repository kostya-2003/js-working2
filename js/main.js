const redItems = document.querySelector("#red");
const yellowItems = document.querySelector("#yellow");

redItems.addEventListener("touchmove", (e) => {
    let x =  e.touches[0].pageX;
    let y =  e.touches[0].pageY;

    e.target.style.cssText = `
        transform: translateX(${x}px) translateY(${y}px);
    `
})

yellowItems.addEventListener("touchmove", (e) => {
    let x =  e.touches[0].pageX;
    let y =  e.touches[0].pageY;

    e.target.style.cssText = `
        transform: translateX(${x}px) translateY(${y}px);
    `
})

yellowItems.addEventListener("touchend", ()=>{
    yellowItems.style.background = "darkblue";
    redItems.style.background = "darkgreen";   
});

redItems.addEventListener("touchend", ()=>{
        yellowItems.style.background = "green";
        redItems.style.background = "blue";   
});
// let dragged;

// document.addEventListener("dragstart", (e) => {
//     dragged = e.target;
//     e.target.classList.add("dragging");
// });

// document.addEventListener("dragend", (e) => {
//     e.target.classList.remove("dragging");
// });

// document.addEventListener("dragover", (e) => {
//     e.preventDefault();
// }, false);

// document.addEventListener("dragenter", (e) => {
//     if (e.target.classList.contains("dropzone")) {
//         e.target.classList.add("dragover");
//     }
// });

// document.addEventListener("dragleave", (e) => {
//     if (e.target.classList.contains("dropzone")) {
//         e.target.classList.remove("dragover");
//     }
// });

document.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("dropzone")) {
        e.target.classList.remove("dragover");
        dragged.parentNode.removeChild(dragged);
        e.target.append(dragged);
    }
});
