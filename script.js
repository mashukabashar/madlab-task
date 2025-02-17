document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorBtn');
    
    button.addEventListener('click', () => {
        // Generate a random color
        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
        document.body.style.backgroundColor = randomColor;
    });
});
