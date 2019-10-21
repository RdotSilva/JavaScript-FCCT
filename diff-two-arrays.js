// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words,
// return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
	let combined = arr1.concat(arr2);

	let difference = combined.filter(item => checkBoth(item));

	function checkBoth(item) {
		if (!arr1.includes(item) || !arr2.includes(item)) {
			return true;
		}
	}
	return difference;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// [32, H, $, $, x, !, .15, B, A, ]
