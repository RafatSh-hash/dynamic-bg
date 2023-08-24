const dynamicBackground = document.querySelector('.dynamic-background');

document.addEventListener('mousemove', (event) => {
    // console.log("mouse moved")
    const xPos = event.clientX;
   
    const yPos = event.clientY;
    console.log(xPos, yPos)
    
    const circleSize = 500;
    const gradient = `radial-gradient(circle ${circleSize}px at ${xPos}px ${yPos}px, #ff0000, transparent)`;

    dynamicBackground.style.backgroundImage = gradient;
});
