

//were creating a new div element for each instance 

export function renderOwlEl(owl) {

    const owlEl = document.createElement('div');
    const owlNameEl = document.createElement('p');
    const conservationEl = document.createElement('p');

    owlEl.classList.add('type-of-owl');

    owlNameEl.textContent = `Owl Name: ${owl.name}`;
    conservationEl.textContent = `Conservation Status: ${owl.conservation_status}`;

    owlEl.append(owlNameEl, conservationEl);

    return owlEl;
}