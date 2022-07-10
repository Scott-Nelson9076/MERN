const arr1 = [5,7,1,3,2,4,6,9,8,10]

const swapVals = (arr1,leftIndex,rightIndex) => {let temp = arr1[leftIndex]; arr1[leftIndex] = arr1[rightIndex]; arr1[rightIndex] = temp;}

const partition = (arr1,left,right) => {let pivot = arr1[Math.floor((right + left)/2)],  i = left, j = right;
    while (i <= j){
        while (arr1[i] < pivot){
            i++;
        }
        while (arr1[j] > pivot){
            j--;
        }
        if (i <= j){
            swapVals(arr1,i,j);
            i++;
            j--;
        }
        return i;
        

    }
}

const quickSort = (arr1,left,right) => {var index; 
    if(arr1.length > 1){
        index = partition(arr1,left,right);
        if ( left < index -1 ){
            quickSort(arr1,left,index-1);
        }
        if (index < right){
            quickSort(arr1,index,right);
        }
    }
    return arr1;
}

const srtArr1 = quickSort(arr1,0,arr1.length -1);
console.log(srtArr1);
console.log(arr1.sort(function(a,b){return a-b}));




