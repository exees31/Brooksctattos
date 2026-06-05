const canvas = document.getElementById('inkCanvas');
const ctx = canvas.getContext('2d');
const machine = document.getElementById('tattooMachine');

// Resize canvas to match the full document height, not just the viewport window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    // Get the full scrollable height of the document
    canvas.height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
}
window.addEventListener('resize', resizeCanvas);
// Call once on load, and slightly delay a second call to ensure images load and stretch the page
resizeCanvas();
setTimeout(resizeCanvas, 500);

// Draw ink and move machine
document.addEventListener('mousemove', (e) => {
    // 1. Move the tattoo machine graphic
    // Offset slightly so the needle "tip" is where the actual mouse event registers
    machine.style.left = (e.pageX - 10) + 'px'; 
    machine.style.top = (e.pageY - 12) + 'px';

    // 2. Draw the ink trail
    // Using a very dark red/black with low opacity to look like shading/stippling
    ctx.fillStyle = 'rgba(20, 2, 2, 0.4)'; 
    ctx.shadowBlur = 4;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    
    ctx.beginPath();
    // Randomize the size slightly to mimic real needle packing
    let dotSize = Math.random() * 2 + 1; 
    ctx.arc(e.pageX, e.pageY, dotSize, 0, Math.PI * 2); 
    ctx.fill();
});

// Optional: Double click anywhere on the background to "wipe" the canvas clean
document.addEventListener('dblclick', (e) => {
    // Make sure we only wipe if they click the background, not a form or image
    if(e.target.tagName !== 'IMG' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'A') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});
      
