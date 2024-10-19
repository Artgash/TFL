document.querySelector('.more-info').addEventListener('click', () => {
    const seasonInfoElements = document.querySelectorAll('.season-info');
    seasonInfoElements.forEach(season => {
        if (season.style.display === 'none') {
            season.style.display = 'block';
        } else {
            season.style.display = 'none';
        }
    });
});
