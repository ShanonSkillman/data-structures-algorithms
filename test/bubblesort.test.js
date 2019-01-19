const BubbleSort = require('../sorting/bubblesort.js');

console.log('bubblesort', BubbleSort)

if ([1, 2, 3, 4, 5].join('') == BubbleSort([2, 1, 3, 5, 4]).join('')){
    console.log('OMG BUBBLESORTS WERRKIN IT OH YAHHHH')
}else{
    console.log('BOOO BUBBLESORT IS A FAAAAAAIL', BubbleSort([2, 1, 3, 5, 4]));
}