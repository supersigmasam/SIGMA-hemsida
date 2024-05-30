document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / documentHeight;

    const startColor = { r: 0, g: 0, b: 0 }; 
    const endColor = { r: 300, g: 300, b: 300 }; 

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercentage);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercentage);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercentage);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});