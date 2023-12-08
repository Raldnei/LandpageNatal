/* Efeito neve em JS já pronto */

document.addEventListener("DOMContentLoaded", function () {
    const snowfallContainer = document.getElementById("snowfall");

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
        snowfallContainer.appendChild(snowflake);
    }
});
