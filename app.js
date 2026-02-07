//TWO SUM
//Input : nums=[2,7,11,15] , target = 9

var twoSum = function(nums, target){
    let map = new Map()
    let ans = [-1 , -1]
  for(let i = 0 ; i < nums.length ; i++){
    if(map.has(target - nums[i])){
      ans[0] = i
      ans[1] = map.get(target - nums[i])
      return ans
    }else{
        map.set(nums[i] , i)
    }
  }
  return ans
}

//BEST TIME TO BUY AND SELL STOCKS 
// Input: prices = [7,1,5,3,6,4]

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

var maxProfit = function(prices) {
    let minVal = prices[0]
    let maxProfit = 0

    for(let i = 0 ; i < prices.length ; i++){
        if(prices[i] < minVal){
            minVal = prices[i]
        }

        let currentProfit = prices[i] - minVal

        if(currentProfit > maxProfit){
            maxProfit = currentProfit
        }
    }
    return maxProfit
}

//MAXIMUM SUBARRAY
//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: The subarray [4,-1,2,1] has the largest sum 6.

var maxSubArray = function(nums){
    let sum = nums[0]
    let maxSum = nums[0]

    for(let i = 0 ; i < nums.length ; i++){
        if(sum + nums[i] > nums[i]){
            sum = sum + nums[i]
        }else{
            sum = nums[i]
        }

        if(sum > maxSum){
            maxSum = sum
        }
    }
    return maxSum
}

//CONTAINS DUPLICATE
//Input: nums = [1,2,3,1]
//Output: true
//Explanation: The element 1 occurs at the indices 0 and 3.

var containsDuplicate = function(nums) {
    const map = new Map()

    for(let i = 0 ; i < nums.length ; i++){
        let count = map.get(nums[i]) || 0
        count++

        if(count > 1){
            return true
        }
    }
    return false
}