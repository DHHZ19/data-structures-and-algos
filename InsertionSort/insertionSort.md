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
## Explanation

We will start with this array [1|3,-1,5,6]
### First iteration of outer loop

The whole point or jist of Insertion sort is that we assume we have a sorted half and a unsorted half and go from there.

`let array = [1|3,-1,5,6]`

#### First iteration of inner loop

If we passed in this loop the very first interation would look like that. We are choosing index zero to be sorted and assuming the right side is unsorted.

We then ask if `array[0] > array[1] && j >= 0 // this is false`


So we move out of the loop and insert, now 3 is part of the sorted array

`[1,3|-1,5,6]`

``
### Second iteration of outer loop
Now numberToInsert = array[2] and j is going to equal 1
#### Frist iteration of inner loop 

`[1,3|-1,5,6]`

We then ask if `array[1] > NumberToInsert && j >= 0 // this is true`

So we move to the array[j] one to the right

`[1,|3,5,6]`
// notice array[1] is now empty

#### Second iteration of inner loop

We then ask if `array[0] > NumberToInsert && j >= 0 // this is true`

so we move to the array[0] to the right

`[,1,3,5,6]`
// notice array[0] is now empty

#### Third iteration of inner loop
We then ask if `array[-1] > NumberToInsert && j >= 0 // this is true`

j is not >= 0 so we dont do anything and move on from the loop

we do the insertion 

`[-1,1,3|5,6]`
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

```

### Resources and Others:

Great explantion from Brain Holt on his frontend masters course website [Insertion Sort Problem](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort)

Also take a look at a visulization at [7 VisuAlgo.net](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort)