document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.floating-icon');
    
    icons.forEach(icon => {
        const speed = Math.random() * 2 + 1; // Velocidad entre 1 y 3
        let directionX = Math.random() < 0.5 ? -1 : 1;
        let directionY = Math.random() < 0.5 ? -1 : 1;

        let posX = Math.random() * (window.innerWidth - 50); // se decide aleatoriamente la direccion de el movimiento sobre el eje x
        let posY = Math.random() * (window.innerHeight - 50); // se decide aleatoriamente la direccion de el movimiento sobre el eje y

        icon.style.left = `${posX}px`;
        icon.style.top = `${posY}px`;

        const updatePosition = () => {
            posX += directionX * speed;
            posY += directionY * speed;

            if (posX >= window.innerWidth - 50 || posX <= 0) directionX *= -1;
            if (posY >= window.innerHeight - 50 || posY <= 0) directionY *= -1;

            icon.style.left = `${posX}px`;
            icon.style.top = `${posY}px`;

            requestAnimationFrame(updatePosition);
        };

        updatePosition();
    });
});