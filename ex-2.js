//Exercise #2: At Least Five Function
/**ต่อมาโรงเรียนมีเกณฑ์ในการตรวจสอบคุณภาพของนักเรียนแต่ละห้อง ดังนี้

ถ้ามีนักเรียนจำนวนตั้งแต่ 5 คนขึ้นไป ที่ได้คะแนนมากกว่า 70 จะถือว่าผ่านเกณฑ์ ✅
ถ้ามีนักเรียนจำนวนไม่ถึง 5 คน ที่ได้คะแนนมากกว่า 70 จะถือว่าไม่ผ่านเกณฑ์ ❌ */

function atLeastFive(array, operation) {
  //เอาเช็คเกอร์มาเช็คกับเงื่ีอนไข
  // Start coding here
  const checker = operation(array);
  console.log(checker);
  if (checker >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else if (checker < 5) {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

const pass70Checker = (array) => {
  let checker = 0;
  for (let score of array) {
    console.log(score);
    if (score > 70) {
      checker++;
    }
  }
  return checker;
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

pass70Checker(studentScoresRoom1);
// // Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, pass70Checker);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, pass70Checker);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, pass70Checker);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);