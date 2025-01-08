document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("fugitiveButton");

    document.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const buttonRect = button.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;

        const distance = Math.sqrt(
            Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2)
        );

        const fleeDistance = 100;

        if (distance < fleeDistance) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const maxLeft = windowWidth - buttonRect.width;
            const maxTop = windowHeight - buttonRect.height;

            const newLeft = Math.random() * maxLeft;
            const newTop = Math.random() * maxTop;

            button.style.position = "absolute";
            button.style.left = `${newLeft}px`;
            button.style.top = `${newTop}px`;
        }
    });
});
