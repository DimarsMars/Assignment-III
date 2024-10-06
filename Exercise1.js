function artimatika(arr) {
  // array dengan 1 atau 0 elemen bisa dianggap sebagai deret aritmatika
  if (arr.length <= 1) {
      return false;
  }
  // mencari selisih dari index 0 dan 1 sebagai acuan
  const selisih = arr[1] - arr[0];

  // mengecek apakah selisih diseluruh index sama
  for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== selisih) {
          return false;
      }
  }
  return true;

}

console.log("1,2,3,4,5 = ",artimatika([1,2,3,4,5]));
console.log("2,4,8,12 = ",artimatika([2,4,8,12]));
console.log("2,4,6,8 = ",artimatika([2,4,6,8]));
console.log("2,6,18,54 = ",artimatika([2,6,18,54]));
console.log("1,2,3,4,7 = ",artimatika([1,2,3,4,7]));
console.log("1 = ",artimatika([1]));


// DIMAS RANGGA MARSHANDIKA
