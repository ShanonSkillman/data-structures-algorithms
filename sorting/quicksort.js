const quickSort = arr => {
    if (arr.length <= 1) return arr;
    
    var pivot = arr.shift();
      console.log(pivot)
      console.log(arr)
    var left = [];
    var right = [];
    
    for (var i=0; i< arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
       else right.push(arr[i])
    }
     return [...quickSort(left), pivot, ...quickSort(right)]
    }


module.exports = quickSort;
