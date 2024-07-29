let nums = [1,3,4,1,2,3,1]
// let nums = [1,2,3,4]
// let nums = [2,1,1]

const findMatrix = (nums) => {
  let result = []
  let tempArray = []

  while (nums.length != 0) {
    //Obtiene los elementos que se repiten del array y los guarda en un array temporal
    for(let i = 0; i < nums.length; i++){
      if (tempArray.indexOf(nums[i]) == -1){
        tempArray.push(nums[i])
      }
    }
  
    // Limpia el array de los elementos repetidos
    for(let i = 0; i < tempArray.length; i++) {
      let temp = nums.indexOf(tempArray[i])
      nums.splice(temp, 1)
    }

    result.push(tempArray)
    tempArray = []
  }

  return result
}

console.log(findMatrix(nums))