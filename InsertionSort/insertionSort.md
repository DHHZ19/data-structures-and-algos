# Insertion sort is a qudratic alogrithim and is not used it production but it is a algo thats taught. 

If you dont know what insrtion sort is I recommend taking a stab at the problem for 10 mintues then come back or just check out how to implement it in.
 
Here is Free Code Camps explnantion: 
This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases. [Insertion Sort Problem](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort) here are the instructions from Free Code Camp 

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

## The code

``` 
function insertionSort(array) {
    for(let i = 1; i < array.length; i++){
      let numberToInsert = array[i]
      let j;
        for(j = i - 1; array[j] > numberToInsert && j >= 0; j--){
          array[j + 1] = array[j]
        }
        array[j + 1] = numberToInsert
    }
    return array
  }

// commented
function insertionSort(array) {
    // We make a double for loop
    // Notice the index starts at 1 leaving index 0 as the sorted array
    for(let i = 1; i < array.length; i++){
        // the number to insrt will always be the number we currently are on in this loop
        let numberToInsert = array[i]
         // We also iniatlize j
        let j;
        // does the insertion when either array[j] > numberToInsert or j >= 0
        for(j = i - 1; array[j] > numberToInsert && j >= 0; j--){
          // moves the number to ther right
          array[j + 1] = array[j]
        }
        // does the insertion
        array[j + 1] = numberToInsert

    }
    return array
  }

```

### Footer 
Great explantion from Brain Holt from his frontend masters course website [Insertion Sort Problem](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort)