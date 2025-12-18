
const faqButtons = document.querySelectorAll('.group');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Buscamos el div con la respuesta que está justo después del botón
        const answer = button.nextElementSibling;
        const icon = button.querySelector('svg');

        // Si ya está abierto, lo cerramos
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            // Si está cerrado, calculamos su altura real y se la aplicamos
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.style.transform = 'rotate(180deg)';
        }
    });
});