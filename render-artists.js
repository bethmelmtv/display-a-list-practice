

export function renderArtistEl(artistObject) {
//recipe or instructions
    const artistsEl = document.createElement('div');
    const artistNameEl = document.createElement('p');
    const artistOriginEl = document.createElement('p');


    artistsEl.classList.add('artist');
    //were adding a class list for css purposes 

    artistNameEl.textContent = `Artist: ${artistObject.artist_name}`;
    artistOriginEl.textContent = `Origin: ${artistObject.origin}`;

    //we are taking the argument and changing content to name and origin 
    
   

    const artList = document.createElement('ul');

    for (let artwork of artistObject.prestigious_art_work) {
        const prestigiousArtWorkEl = document.createElement('li');
        prestigiousArtWorkEl.textContent = `Prestigious ArtWork: ${artwork.artwork}`;

        artList.append(prestigiousArtWorkEl);
    }
    artistsEl.append(artistNameEl, artistOriginEl, artList);

    return artistsEl;
}