// Assignment 5 - Custom Array myMap() method
// Add a custom method that behaves similarly to Array.prototype.map().
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback, thisArg) {
        if (this == null) {
            throw new TypeError("myMap called on null or undefined");
        }
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const sourceArray = Object(this);
        const result = [];

        for (let index = 0; index < sourceArray.length; index++) {
            // Match map(): skip indexes that do not exist in a sparse array.
            if (index in sourceArray) {
                result[index] = callback.call(thisArg, sourceArray[index], index, sourceArray);
            }
        }
        return result;
    };
}

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log(["a", "b"].myMap((value, index) => `${index}:${value}`));
