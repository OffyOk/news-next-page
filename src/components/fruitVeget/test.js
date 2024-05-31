function twoSum(nums, target) {
  const numMap = new Map(); //hashmap
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log("ans", complement);
    console.log("first log:", numMap);
    if (numMap.has(complement)) {
      console.log("second log:", [numMap.get(complement), i]);
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
    console.log("third log:", numMap);
  }
  return [];
}

function test(nums) {
  const numMap = new Map();
  return numMap;
}
const input1 = [5, 7, 4, 1, 1, 1, 1, 1, 1, 1];
const target1 = 7;
const output1 = twoSum(input1, target1);
const output2 = test(input1);
console.log("result", output1); // Output: [1, 4]
