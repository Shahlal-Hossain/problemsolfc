
const idNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 24, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 5, 7, 11, 25, 27, 22, 16]

const result = [];

// for (let i = 0; i < idNumbers.length; i++) {
//     const element = idNumbers[i];
//     if( result.indexOf(element)== -1){
//         result.push(element)
//     }
    
// }
//  console.log(result);

function nowFunction(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (result.indexOf(element)== -1) {
            result.push(element)
        }
        
    }
    return result
}
console.log(nowFunction(idNumbers));