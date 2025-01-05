import React from 'react'

const ArrayMethods = () => {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("1", arr.push(11), arr) // 11 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    console.log("2", arr.pop(), arr) // 11 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log("3", arr.shift(), arr) // 1 [2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log("4", arr.unshift(1), arr) //10 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log("5" , arr.splice(1, 2) , arr) // [2, 3]
    console.log("6", arr.splice(1, 3, 10, 12, 13), arr) // arr.splice(start , deleteTill, addItem1, item2, item3...)  [2, 3, 4] [1, 10, 12, 13, 5, 6, 7, 8, 9, 10] 
    // console.log("7", arr.fill(1), arr) // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    console.log("8" , arr.concat([11, 12, 13])) // [1, 10, 12, 13, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    return (
        <div>ArrayMethods</div>

    )
}

export default ArrayMethods