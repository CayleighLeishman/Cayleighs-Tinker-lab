// Flag to check if the sparkle effect is enabled or not
let sparkleEnabled = true;

// Get the checkbox (toggle switch)
const sparkleToggle = document.getElementById('sparkleToggle');

// Add event listener to toggle the sparkle effect
sparkleToggle.addEventListener('change', (e) => {
    sparkleEnabled = e.target.checked;  // Update the flag based on the checkbox state
});

// Event listener to create sparkle effect on mousemove
document.addEventListener('mousemove', (e) => {
    if (!sparkleEnabled) return;  // If sparkle is disabled, return early

    const sparklesContainer = document.getElementById('sparkles-container');
    const sparkle = document.createElement('div');
    
    // Position sparkle at cursor
    const x = e.clientX;
    const y = e.clientY;
    
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${x - 4}px`;  // Adjust position to center the sparkle
    sparkle.style.top = `${y - 4}px`;  // Adjust position to center the sparkle
    
    // Append sparkle to the container
    sparklesContainer.appendChild(sparkle);
  
    // Remove sparkle after animation ends
    setTimeout(() => {
        sparkle.remove();
    }, 1000);  // Time matches the duration of the animation
});
