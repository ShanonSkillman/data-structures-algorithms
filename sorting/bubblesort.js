const BubbleSort = arr => {
        var swapped;
     do {
         swapped = false;
         for (var i=0; i<arr.length; i++) {
             if (arr[i] > arr[i+1]) {
                 var temp = arr[i];
                 arr[i] = arr[i+1];
                 arr[i+1] = temp;
                 swapped = true;
             }
         }
     } while (swapped);
     return arr
     
    }
    //1st: Compare 1stI with 2ndI
    //if 1stI is > 2ndI swap so >bigger item stays in 2nd position
    //Compare 2ndI with 3rdI
    //if 2ndI is > 3rdI swap or keep position  
    //keep biggest in 3rd position


module.exports = BubbleSort;




