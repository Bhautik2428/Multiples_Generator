// var arr = [] ;
// var langth = 0 ;
// var myalgo = ( num , langth ) => {
// 	var main = [];
// 	var number = 2 ;
// 	for (var i = 1 ; i <= langth ; i++) {
// 		main.push(num * i)
// 	}
// 	return main ;
// }
// document.getElementById('array').innerHTML=myalgo(5, 10);

// console.log(myalgo(5 , 10));



// document.addEventListener("DOMContentLoaded", () => {
//     const generateButton = document.getElementById("button_submit");
//     generateButton.addEventListener("click", generateMultiples);
// });

// function generateMultiples() {
//     const numInput = document.getElementById("num");
//     const lengthInput = document.getElementById("length");
//     const resultList = document.getElementById("result-list");
//     const resultContainer = document.getElementById("result-container");

//     const num = parseInt(numInput.value);
//     const length = parseInt(lengthInput.value);

//     if (isNaN(num) || isNaN(length)) {
//         alert("Please enter valid numbers.");
//         return;
//     }

//     const multiples = [];

//     for (let i = 1; multiples.length < length; i++) {
//         multiples.push(num * i);
//     }

//     // Display results
//     multiples.forEach((multiple) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = ` ${multiple}`;    // `${num} x ${multiples.indexOf(multiple) + 1} =
//         resultList.appendChild(listItem);
//     });

//     resultContainer.style.display = "block";
// }
