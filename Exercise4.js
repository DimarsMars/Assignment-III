function arrSum(arr) {
        // untuk menyimpan jumlah maksimum dari subarray yang ditemukan sejauh ini
        let maxSoFar = arr[0];

        // untuk menyimpan jumlah sementara dari subarray yang sedang diperiksa
        let maxEnding = arr[0];
        let start = 0
        let end = 0
        let s = 0
    
        // Kondisi ini memeriksa apakah elemen saat ini arr[i] lebih besar dari jumlah subarray saat ini (maxEnding + arr[i]).
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxEnding + arr[i]) {
                maxEnding = arr[i];
                s = i;
            } else {
                maxEnding += arr[i];
            }
    
            // Kondisi ini memeriksa apakah jumlah subarray saat ini (maxEnding) lebih besar dari jumlah maksimum yang ditemukan sejauh ini (maxSoFar).
            if (maxEnding > maxSoFar) {
                maxSoFar = maxEnding;
                start = s;
                end = i;
            }
        }
    
        // Mengembalikan subarray dan jumlah maksimalnya
        return [arr.slice(start, end + 1), maxSoFar];
}
    
    console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
    
    
// DIMAS RANGGA MARSHANDIKA