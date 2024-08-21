function duplicates (nums) {
    const duplicates = {};

    nums.forEach(num => {
        if (duplicates[num]) {
            duplicates[num]++
        } else {
            duplicates[num] = 1
        }
    });

    let duplicateCount = 0
    for (let dup in duplicates) {
        if (duplicates[dup] > 1) {
            duplicateCount++
        }
    }

    console.log(duplicateCount)
}

const arrayAleatorio = [34, 7, 23, 89, 56, 12, 45, 78, 90, 2, 7, 9, 10, 12, 88, 45];
duplicates(arrayAleatorio)
