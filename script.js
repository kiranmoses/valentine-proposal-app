function sayYes() {
    document.getElementById("result").innerText =
        "Yayyyyy ❤️, That's my girl !!! Let's go on a date in London!";
}

function moveButton() {
    const btn = document.getElementById("noBtn");

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
