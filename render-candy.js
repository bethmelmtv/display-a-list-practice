export function renderCandyEl(candy /*booger*/) {

    const candyEl = document.createElement('div');

    candyEl.textContent = candy;

    candyEl.classList.add('candy-item');

    return candyEl ;
}