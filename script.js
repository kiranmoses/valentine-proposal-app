function sayYes() {
    document.getElementById("result").innerText =
        "Yayyyyy ❤️ Best decision ever!";
}

function moveButton() {
    const btn = document.getElementById("noBtn");

    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
