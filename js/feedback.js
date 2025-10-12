
const details = document.getElementById('details');
const tooltip = document.getElementById('tooltip');

details.addEventListener('mouseover', () => {
    details.style.backgroundColor = '#f0f0f0';
    details.style.border = '1px solid #ccc';
    details.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    tooltip.style.display = 'block';
    tooltip.style.top = `${details.offsetTop + 10}px`;
});

details.addEventListener('mouseout', () => {
    details.style.backgroundColor = '';
    details.style.border = '';
    details.style.boxShadow = '';
    tooltip.style.display = 'none';
});