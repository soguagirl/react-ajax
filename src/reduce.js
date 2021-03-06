module.exports = function(arr, fn, initial){
    var idx = 0;
    var len = arr.length;
    var curr = arguments.length == 3
        ? initial
        : arr[idx++];

    while (idx < len) {
        curr = fn.call(null, curr, arr[idx], ++idx, arr);
    }

    return curr;
};
