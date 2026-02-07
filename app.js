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

//CONTAINER WITH MOST WATER 

var maxArea = function(height) {
    let ans = 0 , i = 0 , j = height.length - 1 //why extra variable ans because we have to Return the maximum amount of water a container can store.

    while(i < j){
        ans = Math.max(ans , Math.min(height[i] , height[j]) * (j - i))

        if(height[i] < height[j]) i++
        else j--
    }
    return ans
};

//MOVE ZEROES
//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

var moveZeroes = function(nums){
    let i = 0 , j = 0 
    while(i < nums.length){
        if(i != 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp

            j++
        }
        i++
    }
}

//MERGE SORTED ARRAY 
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]
var merge = function(nums1, m, nums2, n){
    let newArr = new Array(m+n)

    let i = 0 , j = 0 , k = 0
    while(i < m && j < n){
        if(nums1[i] < nums2[j]){
          newArr[k++] = nums1[i++]
        } else{
           newArr[k++] = nums2[j++]
        }
    }
    while(i < m){
        newArr[k++] = nums1[i++]
    }
     while(j < n){
        newArr[k++] = nums2[j++]
    }
    
    for(let i = 0 ; i< m+n ; i++){
        nums1[x] = newArr[x]
    }
}