// forEach()

function customForEach(array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    callbackFn(array[i] * 2, i, array);
  }
}

console.log("\nTest for customForEach");
const myArray = [1, 2, 3, 4, 5];
customForEach(myArray, function (element, index, array) {
  console.log(element);
});

// map()

function customMap(array, cb) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(cb(array[i]));
  }
  console.log(result);
}

console.log("\nTest for customMap");
customMap([1, 2, 3, 4, 5], (item) => item + 1);

// filter()
function customFilter(array, cb) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log("\nTest for customFilter");
// console.log(myFilter([1, 2, 3, 4, 5], (item) => item >= 3));

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);

// some() any
function customSome(array, cb) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      result.push(array[i]);
    }
  }
  if (result.length > 1) {
    return true;
  } else {
    return false;
  }
}

console.log("\nTest for customSome");
console.log(customSome([1, 2, 3, 4, 5], (item) => item >= 3));

// Checks whether an element is even
const even = (element) => element % 2 === 0;

function customEvery(array, cb) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      result.push(array[i]);
    }
  }
  if (result.length == array.length) {
    return true;
  } else {
    return false;
  }
}

console.log("\nTest for customEvery");
console.log(customEvery([1, 2, 3, 4, 5], (item) => item >= 3));

// Reduce

function customReduce(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

console.log("\nTest for customReduce");
let myReduceTest = [1, 2, 3];
console.log(customReduce(myReduceTest));

// Includes

function customIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}

console.log("\nTest for customIncludes");
myIncludesTest = [1, 2, 3, 4, 5, 6];
console.log(customIncludes(myIncludesTest, 4));

// indexOf

function customIndexOf(array, target) {
  let result = -1;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element == target) {
      result = index;
      break;
    }
  }
  return result;
}

console.log("\nTest for customIndecOf");
indexOfTest = customIndexOf([1, 2, 3, 4, 5, 6], 7);
console.log(indexOfTest);

// Push

function customPush(array, value) {
  array.splice(array.length, 0, value);
  return array;
}

console.log("\nTest for customPush");
let testPush = [1, 2, 3];
console.log(customPush(testPush, 4));

// lastIndexOf

function customUnshift(arr, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log("\nTest for customUnshift");
let myUnshiftTest = [1, 2, 3, 4, 2];
console.log(customUnshift(myUnshiftTest, 2));

// Object.keys()

function grabKeys(object) {
  let newArray = [];
  for (element in object) {
    newArray.push(element);
  }
  return newArray;
}

console.log("\nTest for customUnshift");
const object1 = {
  a: 123,
  b: 321,
  c: "ABC",
};
console.log(grabKeys(object1));

// Object.values()

function grabValues(object) {
  let newArray = [];
  for (element in object) newArray.push(object[element]);
  return newArray;
}

console.log("\nTest for customUnshift");
const object2 = {
  CSI: "CUNY",
  Stoneybrook: "SUNY",
  NYU: "Private",
};
console.log(grabValues(object2));

// move zeros function using two pointers

function moveZeros(nums) {
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[j] === 0) {
      j += 1;
    } else {
      nums[i] = nums[j];
      i += 1;
      j += 1;
    }
  }
  for (let index = i; index < j; index++) {
    nums[index] = 0;
  }
  return nums;
}

const nums = [0, 1, 0, 3, 12];
const results = moveZeros(nums);
console.log("\nmoveZeros test");
console.log(results + "\n");

//sum of range

function range(start, end, step = 1) {
  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log("sum of range test");
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

//reverse array

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  const length = array.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
  }
}

let arrayVal = [3, 4, 5, 6, 7];
reverseArrayInPlace(arrayVal);
console.log("\nreverse array test");
console.log(arrayVal);

//A List

function arrayToList(arr) {
  var res = null,
    temp = null;
  for (let i = 0; i < arr.length; i++) {
    if (res == null) {
      res = { value: arr[i], rest: null };
      temp = res;
    } else {
      temp["rest"] = { value: arr[i], rest: null };
      temp = temp["rest"];
    }
  }
  return res;
}

function listToArray(list) {
  var res = [];
  let temp = list;
  while (list != null) {
    res.push(list["value"]);
    list = list["rest"];
  }
  return res;
}

function prepend(ele, list) {
  return { value: ele, rest: list };
}

function nth(list, pos) {
  let i = 0;
  let temp = list;
  while (i != pos) {
    temp = temp["rest"];
    i = i + 1;
  }
  return temp["value"];
}

console.log("\nA List test");
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

//deep comparison

function deepComparison(obj1, obj2) {
  if (
    obj1 != null &&
    obj2 != null &&
    typeof obj1 == "object" &&
    typeof obj2 == "object"
  ) {
    let obj1Length = Object.keys(obj1).length;
    let obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
      let isEqual = true;

      for (let prop in obj1) {
        if (obj2[prop] != null) {
          isEqual = isEqual && deepComparison(obj1[prop], obj2[prop]);
        } else {
          return false;
        }
      }
      return isEqual;
    } else {
      return false;
    }
  } else {
    return obj1 === obj2;
  }
}

console.log("\nDeep comparison test");
var obj = { here: { is: "an" }, object: 2 };
console.log(deepComparison(obj, obj));
console.log(deepComparison(obj, { here: 1, object: 2 }));
console.log(deepComparison(obj, { here: { is: "an" }, object: 2 }));
