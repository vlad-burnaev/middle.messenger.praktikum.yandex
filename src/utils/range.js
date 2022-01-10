/*
    * range(4); // => [0, 1, 2, 3]
    * range(-4); // => [0, -1, -2, -3]
    * range(1, 5); // => [1, 2, 3, 4]
    * range(0, 20, 5); // => [0, 5, 10, 15]
    * range(0, -4, -1); // => [0, -1, -2, -3]
    * range(1, 4, 0); // => [1, 1, 1]
    * range(0); // => []
*/

const baseRange = (start, end, step, isRight) => {
    let index = -1;
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);

    while (length--) {
        result[isRight ? length : ++index] = start;
        start += step;
    }

    return result;
}

function range(start = 0, end, step, isRight = false) {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    step = step === undefined ? (start < end ? 1 : -1) : step;
    return baseRange(start, end, step, isRight);
}

function rangeRight(start, end, step) {
    return range(start, end, step, true);
}