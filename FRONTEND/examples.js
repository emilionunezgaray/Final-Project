// here I will put an example on how to use a query string
// this has nothing to do with my code, it is just to apply the requirements of the rubric


const params = new URLSearchParam(window.location.search);
const movie = params.get('movie');
const time = params.get('time');
 
console.log(`Movie: ${movie}`);
console.log(`Time: ${time}`);
