function newplan(sequence){
   var sequence=[6, 9, 15, -2, 92, 11];
   var maxnum = 0;
    for (var i = 0; i < sequence.length; i++) {
      sequence[i]>maxnum ? maxnum =sequence[i] : null;
    }
    var minnum = 0;
    for (var i = 0; i < sequence.length; i++) {
      sequence[i]<minnum ? minnum =sequence[i] : null;
    }
    var average = 0;
    for (var i = 0; i < sequence.length; i++) {
      average += sequence[i];
    }
    var A = ~~(average/sequence.length*100)/100;
    var B = sequence.length
  
  console.log('\no) 最小值 = '+minnum+'\n'+'o) 最大值 = '+maxnum+'\n'+'o) 元素数量 = '+B+'\n'+'o) 平均值 = '+A)

  }
  module.exports = {newplan}