/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
function sumOfTwo(a , b) {
    let sum = a + b
    if (a === b) {
        return sum * 3
    } else {
        return sum
    }
}

/* console.log(sumOfTwo(2, 2)) */

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
function checkNum(a , b) {
    let sum = a + b
   if(a === 50 || b === 50 || sum === 50) {
    return true
   } else return false
}

/* console.log(checkNum(51 , 1)) */


/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function delChar(pos , str) {
    let newStr = str.substring(pos)
    return newStr
}

/* console.log(delChar(1, "hello")) */


/* 4. Create a function to find and return the largest of three given integers. */
function maxNum(a , b , c) {
    max = 0
    for (let i = 0; i < 3; i++) {
        if (a > max) {
            max = a
        } if (b > max) {
            max = b
        } if (c > max) {
            max = c
        }
        return max
    }
}

/* console.log(maxNum(10 , 1099 , 1)) */


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
function inRange(a, b) {
    if ((a >= 40 && a <= 60 || b >= 40 && b <= 60) && (a >= 70 && a <= 100 || b >= 70 && b <= 100)) {
        return true
    } else {
        return false
    }
}

/* console.log(inRange(20 , 99)) */

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
function repeatString(num , str) {
    let newString = ""
    for (let i = 0; i < num; i++) {
        newString += str
    }
    return newString
}

/* console.log(repeatString(3 , "strive ")) */

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
function cityNames(city) {
    let newCity = city.toLowerCase()
    if (newCity.includes("new") || newCity.includes("los")) {
        console.log(city)
        return true
    } else {
        return false
    }
}

/* console.log(cityNames("Los york")) */


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
function sumArr(_array) {
    let sum = 0
    for (let i = 0; i < _array.length; i++) {
        sum += _array[i]
    }
    return sum
}

/* console.log(sumArr([1, 2023, 5])) */

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
function checkNumberInArr(_array) {
    for (let i = 0; i < 2; i++) {
        if ((_array[i] === 1) || (_array[i] === 3)) {
            return true
        }
    }
    return false
}
/* console.log(checkNumberInArr([200 , 200])) */


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 
    function checkNumberInArr(_array) {
        for (let i = 0; i < 2; i++) {
            if ((_array[i] === 1) || (_array[i] === 3)) {
                return false
            }
        }
        return true
    }
/* console.log(checkNumberInArr([1 , 3])) */

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 
function longestString(str) {
    let longest = 0
    let longer
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest) {
            longest = str[i].length
            longer = str[i]
        }
    }
    return longer
}

/* console.log(longestString(["mid" , "longstring" , "short"])) */

/* 12. Create a function to find the types of a given angle:
    1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

function angles(_angle) {
    let type
    if (_angle >= 0 && _angle < 90) {
        type = "acute"
    } else if (_angle === 90) {
        type = "right"
    } else if (_angle >= 90 && _angle < 180) {
        type = "obtuse"
    } else if (_angle === 180) {
        type = "straight"
    } else {
        type = "error"
    }
    return type
}
/* console.log(angles(90)) */

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
function indexOfMax(arr) {
    let max = arr[0];
    let maxIndex = 0;

    Math.floor(arr)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

/* console.log(indexOfMax([13535535.424, 14324, 3534535353])) */

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
function largestEven(arr) {
    let max = arr[0];
    let maxIndex = 0;
    Math.floor(arr)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            if (arr[i] % 2 === 0) {
                maxIndex = i;
                max = arr[i];
            } else {
                return false
            }
        }
    }
    return maxIndex;
}

/* console.log(largestEven([13, 23, 13])) */

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
function posNeg(a , b) {
    if ( a >= 0 || b >= 0) {
        return true
    } else {
        return false
    }
}

/* console.log(posNeg(-1 , -30)) */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
function upperCased(str) {
    if (str.length > 3) {
        let first = (str.substring(0, 3)).toLowerCase();
        let last = str.substring(3, str.length).toUpperCase();  
        return first + last
    } if (str.length <= 3) {
        return  str.toUpperCase();
    }
}
/* console.log(upperCased("javascript")) */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
function sumRange(a, b) {
    let sum = a + b
    if (sum >= 50 && sum <= 80) {
        return 65
    } else {
        return 80
    }
}

/* console.log(sumRange(50,50)) */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

function acronym(arr){
    let str = ''
    
    for(let i = 0; i < arr.length; i++){
        str += arr[i][0]
    }
    
    return str
}

console.log(acronym(["British" , "Broadcasting", "Corporation"]))