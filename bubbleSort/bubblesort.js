
// // Bubble Sort implementation in JavaScript[basic version]
// //function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// //}
// //console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); 
// // Output: [11, 12, 22, 25, 34, 64, 90]

// //Time Complexity: O(n^2)
// //Space Complexity: O(1)

// Optimized Bubble Sort implementation in JavaScript
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i =0; i< n -1; i++) {
        swapped = false;
        for (let j =0; j< n - i -1; j++) {
            if (arr[j] > arr[j +1]) {
                [arr[j], arr[j +1]] = [arr[j +1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); 
// Output: [11, 12, 22, 25, 34, 64, 90]
