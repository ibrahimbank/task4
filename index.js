/* Part one 
1. how to convert to celsius
2. how to round up number to four decimal places
3. how to check if its not a valid number or string
*/

function convertFahrToCelsius(num) {
  /* 1 */
  temp = (num - 32) * (5 / 9);

  /* 2 */
  temp = Number(temp.toFixed(4));

  /* 3 */
  let check = JSON.stringify(num);
  if (Array.isArray(num)) {
    return `${check} is not a valid number but a/an array`;
  } else if (num === " ") {
    return `${check} is not a valid number but a/an ${typeof num}`;
  } else if (num === "") {
    return `${check} is not a valid number but a/an ${typeof num}`;
  } else if ("object" === typeof num) {
    return `${check} is not a valid number but a/an ${typeof num}`;
  }
  return temp;
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));

/* Part two
1. how to create an array from 1-n
2. Replacing Multiple of 2,3,5 with 'yu', 'gi', 'oh'
 i. how to get multiples of numbers
3. return invalid parameter
4. return the array
*/

function checkYuGiOh(n) {
  /* 3 */
  let check = JSON.stringify(n);
  if (Array.isArray(n) || isNaN(n) || n === " " || n === "") {
    let message = `invalid parameter: ${check}`;
    return message;
  }

  /* 1 */
  let arr = [];

  /* 2 */

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      arr.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      arr.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      arr.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("gi-oh");
    } else if (i % 2 === 0) {
      arr.push("yu");
    } else if (i % 3 === 0) {
      arr.push("gi");
    } else if (i % 5 === 0) {
      arr.push("oh");
    } else {
      arr.push(i);
    }
  }

  /* 4 */

  return arr;
}

console.log(checkYuGiOh("10"));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
