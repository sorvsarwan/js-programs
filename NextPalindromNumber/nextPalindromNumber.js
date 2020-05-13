/**
 * This program is used to find the next palindrom number.
 * Please run this file as given below.
 * Syntax:
 *      $ node nextPalindromNumber.js <number>
 * Example:
 *      $ node nextPalindromNumber.js 1221
 * Result:
 *      > Next Palindrom Number: 1331
 * 
 * Author: Sourabh Sarwan
 * 
 */


/**
 * This function is used to find the next palindrom number.
 * @param {array} numArr 
 * @param {number} numLength 
 * @return {number} nextNum
 */
function getNextPalindromNumber(numArr, numLength) {

    let midPosition = parseInt(numLength / 2);

    let i = midPosition - 1;
    let j = (numLength % 2 == 0) ? midPosition: parseInt(midPosition) + 1;

    let leftSideNumberSmaller = false;
    

    /** Set the Position on which number digits not matched */
    while (i >= 0 && numArr[i] == numArr[j]) {
        i--;
        j++;
    }

    /** Check middle number need to increment or not. */
    if(i < 0 || numArr[i] < numArr[j]) {
        leftSideNumberSmaller = true;
    }
    
    /** Copy left side digits into right side digits */
    while (i >= 0) {
        numArr[j++] = numArr[i--];
    }
    
    if(leftSideNumberSmaller) {
        let carry = 1;

        /** Odd number of length */
        if(numLength % 2 == 1){
            numArr[midPosition] = parseInt(numArr[midPosition]) + 1;
            carry = parseInt(numArr[midPosition] / 10);
            numArr[midPosition] = numArr[midPosition] % 10;
        }
        
        
        i = midPosition - 1;
        j = (numLength % 2 == 0) ? midPosition : parseInt(midPosition) + 1;
        
        /** Add carry into the number and move carry toward */
        while (i >= 0) {
            numArr[i] = parseInt(numArr[i]) + carry;
            carry = parseInt(numArr[i] / 10);            
            numArr[i] = numArr[i] % 10;
            numArr[j] = numArr[i];

            i--;
            j++;
        }
        
    }
    return numArr.join("");
}
/**
 * This function is used to check given number contain all nines or not.
 * @param {array} numArr 
 * @param {number} numLength 
 */
function checkAllNineNumber(numArr, numLength) {
    for (let i = 0; i < numLength; i++) {
        if(numArr[i] != 9) {
            return false;
        }        
    }

    return true;
}

/**
 * This is used to find the next palindrom number and 
 * also check for all nines digit number case
 * @param {number} num 
 * @return {number} nextNum
 */

function getNextPalindrom(num) {

    let numArr = num.split("");
    let numLength = numArr.length;

    /** Check all nines. */
    if(checkAllNineNumber(numArr, numLength)) {
        let nextNum = [];
        nextNum.push(1);
        for (let i = 0; i < numLength; i++) {
            nextNum.push(0);
        }
        nextNum.push(1);
        return nextNum.join("");
    }
    else {
        return getNextPalindromNumber(numArr, numLength);
    }
    
}


let nextPalindromNumber = getNextPalindrom(process.argv[2]);
console.log('Next Palindrom Number: ' + nextPalindromNumber);
