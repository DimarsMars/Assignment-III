function sumArr(arr, int) {
    let pairs = []

    // looping untung mengambil elemen pertama
    for (let i = 0; i < arr.length; i++) {
        // looping kedua untuk mengambil elemen kedua
        for (let j = i + 1; j < arr.length; j++) {
            // jika jumlah dari kedua elemen sama dengan int, maka kedua elemen ditambahkan ke hasil
            if(arr[i] + arr[j] === int) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

console.log(sumArr([2,1,4,3],5));
console.log(sumArr([1,8,10,3],11));

// DIMAS RANGGA MARSHANDIKA