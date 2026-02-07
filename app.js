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