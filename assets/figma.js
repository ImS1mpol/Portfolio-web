const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Add the event listener to all cards, but handle the expansion logic inside the event handler
    card.addEventListener('click', () => {
        // Check if the clicked card is not lpcard5, opcard4, or cltrcard5
        if (!card.classList.contains('lpcard5') && !card.classList.contains('opcard4') && !card.classList.contains('cltrcard5')) {
            // Check if the clicked card is already expanded
            const isExpanded = card.classList.contains('expanded');

            // Remove 'expanded' class from all cards
            cards.forEach(c => {
                c.classList.remove('expanded');
            });

            // If the clicked card wasn't expanded, expand it
            if (!isExpanded) {
                card.classList.add('expanded');
            }
        }
    });
});
