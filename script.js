// Declare and initialize an empty multidimensional array
// let multidimensionalArray = [];

// Example: Adding empty arrays to create a 2D array structure
// for (let i = 0; i < 3; i++) {
//     multidimensionalArray[i] = [];
// }

// console.log(multidimensionalArray);





// Declare and initialize a multidimensional array (matrix)
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix);






// function generateTable() {
    // Get the input values
    // const number = document.getElementById('number').value;
    // const length = document.getElementById('length').value;
    // const resultDiv = document.getElementById('result');

    // Clear any previous results
    // resultDiv.innerHTML = '';

    // Generate the multiplication table
//     for (let i = 1; i <= length; i++) {
//         const result = number * i;
//         const resultText = `${number} * ${i} = ${result}`;
//         const p = document.createElement('p');
//         p.textContent = resultText;
//         resultDiv.appendChild(p);
//     }
// }






// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// const fruitsList = document.getElementById('fruits-list');

// for (let i = 0; i < fruits.length; i++) {
//     const listItem = document.createElement('li');
//     listItem.textContent = fruits[i];
//     fruitsList.appendChild(listItem);
// }


// Function to generate and display the series
// function generateSeries() {
//     const counting = document.getElementById('counting');
//     const reverseCounting = document.getElementById('reverse-counting');
//     const even = document.getElementById('even');
//     const odd = document.getElementById('odd');
//     const series = document.getElementById('series');

    // Counting
    // let countStr = 'Counting: ';
    // for (let i = 1; i <= 15; i++) {
    //     countStr += i + (i < 15 ? ', ' : '');
    // }
    // counting.textContent = countStr;

    // Reverse Counting
    // let reverseCountStr = 'Reverse counting: ';
    // for (let i = 10; i >= 1; i--) {
    //     reverseCountStr += i + (i > 1 ? ', ' : '');
    // }
    // reverseCounting.textContent = reverseCountStr;

    // Even Numbers
    // let evenStr = 'Even: ';
    // for (let i = 0; i <= 20; i += 2) {
    //     evenStr += i + (i < 20 ? ', ' : '');
    // }
    // even.textContent = evenStr;

    // Odd Numbers
    // let oddStr = 'Odd: ';
    // for (let i = 1; i < 20; i += 2) {
    //     oddStr += i + (i < 19 ? ', ' : '');
    // }
    // odd.textContent = oddStr;

    // Series
//     let seriesStr = 'Series: ';
//     for (let i = 2; i <= 20; i += 2) {
//         seriesStr += i + 'k' + (i < 20 ? ', ' : '');
//     }
//     series.textContent = seriesStr;
// }

// Call the function to generate the series
// generateSeries();






const items = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const result = document.getElementById('result');

    if (items.includes(input)) {
        result.textContent = `${input} is found in the list.`;
    } else {
        result.textContent = `${input} is not found in the list.`;
    }
}
