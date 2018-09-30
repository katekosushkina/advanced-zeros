module.exports = function getZerosCount(number, base) {
  let res = 0;
  let minRes = 999999999;
  let div = 2;
  let countDiv = 0;
  let mNumber = number;
  while (base>1){
    while (base%div == 0){
      countDiv++;
      base = Math.floor(base/div);
    }
    if (countDiv !=0){
      res = 0;
      while (mNumber > 0){
        mNumber = Math.floor(mNumber/div);
        res = res + mNumber;
      }
      res = Math.floor(res/countDiv);
      if (res<minRes) minRes=res;
    }
    div = div+1;
    countDiv = 0;
    mNumber = number;
  }
  return minRes;
  
}