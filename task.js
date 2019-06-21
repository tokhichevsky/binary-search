function binarySearch(array, element) {
    const sortedArray = sort(array);
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    while ((right - left) >= 0 && sortedArray[mid][1] !== element ) {
        if (sortedArray[mid][1] < element) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
        console.log(left, right, mid);
    }
    if ((right - left) < 0) return -1;
    return sortedArray[mid][0];
}

function sort(array) {
    let posArray = array.map((el, idx) => [idx, el]);

    posArray.sort((a, b) => {
        if (a[1] > b[1])
            return 1;
        if (a[1] < b[1])
            return -1;
        return 0;
    });
    return posArray;
}