const machine = document.getElementById('largeTattooMachine');

document.addEventListener('mousemove', (e) => {
    // Move the large machine based on mouse position
    // Divided by 20 to create a smooth parallax effect
    const x = e.clientX / 20;
    const y = e.clientY / 20;
    machine.style.transform = `translate(${x}px, ${y}px)`;
});
