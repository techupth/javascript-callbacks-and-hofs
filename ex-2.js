//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
    let total =0;
    for(let i=0 ; i < array.length ; i++ ){
      let scorenumber = array[i];
      if(operation(scorenumber)){
        total++
      }
    }
    return total >=5;
  }


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// atLeastFive(scoreRoom1Result,operation)
function passScore (score){
  return score>70;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1,passScore)? "ผ่านเกณฑ์ ✅": "ไม่ผ่านเกณฑ์ ❌";
let scoreRoom2Result = atLeastFive(studentScoresRoom2,passScore)? "ผ่านเกณฑ์ ✅": "ไม่ผ่านเกณฑ์ ❌";
let scoreRoom3Result = atLeastFive(studentScoresRoom3,passScore)? "ผ่านเกณฑ์ ✅": "ไม่ผ่านเกณฑ์ ❌";

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);