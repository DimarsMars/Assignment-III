function threeStepsAB (str) {
    // menentukan dimulai dari index 0, jika index 0 adalah a dan index 4 adalah b maka hasilnya true
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && i + 4 < str.length && str[i + 4] === 'b') {
            return true;
        }
        if (str[i] === 'b' && i + 4 < str.length && str[i + 4] === 'a') {
            return true;
        }
    }

    return false;
}

console.log("DIMAS RANGGA MARSHANDIKA");
console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("beacon and meat"));


// DIMAS RANGGA MARSHANDIKA