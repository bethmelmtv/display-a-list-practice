// import functions and grab DOM elements
//import from candies-data.js and render-candy.js


import { candies } from './candies-data.js';
import { renderCandyEl } from './render-candy.js';

import { owls } from './owls.js';
import { renderOwlEl } from './render-owls.js';

import { artists } from './artist-data.js';
import { renderArtistEl } from './render-artists.js';



// initialize global state

const candyListEl = document.querySelector('.candies-list');
//this line creates an element and equates it to a query selector that gets
// the first element in the document with this class '.candies-list'


for (let candy of candies) {
    const candyEl = renderCandyEl(candy);
    candyListEl.append(candyEl);
}
// for each item candies array, we will 
// line 16 create candyEl and equate it to the renderCandyEl for each item in candy
// renderCandyEl creates a new div element, in line 16 we're creating a new div for each candy
// line 17 appends (candyEl-new div element we created for each candy in line 16) to 
//  candyListEl (the element created in line 10 which references the parent div container in html)


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


const OwlListEl = document.querySelector('.Owls');

for (let owl of owls) {
    const OwlEl = renderOwlEl(owl);
    OwlListEl.append(OwlEl);
}


const artistListEl = document.querySelector('.artists');

for (let artist of artists) {
    const artistEl = renderArtistEl(artist); //guac
//were going to loop through the artist array and  create an artist element 
    artistListEl.append(artistEl);
}
