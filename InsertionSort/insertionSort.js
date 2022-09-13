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