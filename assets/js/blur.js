let loadText = document.querySelector(".loading-text");
let blurringBg = document.querySelector('.bg');
let load = 0;
const Blurring = () => {
    load++;
    Loading(load);
}
const Loading = (l) => {
    loadText.innerHTML = `${l}%`;
    if (l === 100) {
        clearInterval(interval);
    }
    loadText.style.opacity = scale(l, 0, 100, 1, 0);
    blurringBg.style.filter = `blur(${scale(l, 0, 100, 30, 0)}px)`;
}
let interval = setInterval(Blurring, 35);
const scale = (num, inMin, inMax, opMin, opMax) => {
    return (num - inMin) * (opMax - opMin) / (inMax - inMin) + opMin;
}

