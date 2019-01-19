const quickSort = require('../sorting/quickSort.js');

console.log('quicksort', quickSort)

if ([1,2,3,4,5].join('') == quickSort([2,1,3,5,4]).join('')){
    console.log('OMG QUICKSORTS WERRKIN IT OH YAHHHH')
}else{
    console.log('BOOO QUICKSORT IS A FAAAAAAIL', quickSort([2,1,3, 5,4]));
}