//תרגיל 1
const myName = "Or";
const age = 18;
const Isstudent = true;

const introduction = `my name is ${myName}, I am ${age} years old, student: ${Isstudent}`;
console.log(introduction);
console.log(typeof myName);
console.log(typeof age);
console.log(typeof Isstudent);


//יציג: string, undefined, boolean.
const course = "JavaScript";
let completedExercises;
const isReady = false;

console.log(typeof course);
console.log(typeof completedExercises);
console.log(typeof isReady);

let competedCount = 0;
completedcount = 1;
// הוא עדיף מכיוון שביקשו לשנות את הערך.



//תרגיל 2

const priceText = "120";
const quantityText = "3";
const orderNumber = 5021;

let message = `Before change`
console.log(message);
console.log(typeof priceText);
console.log(typeof quantityText);


const price1 = Number(priceText);
const quantity1 = Number(quantityText);
const totalprice = price1 * quantity1;
console.log(totalprice);

let message2 = `after change`
console.log(message2);
console.log(priceText);
console.log(quantityText);

const orderldText = String(orderNumber);


// const price = 120;
// const quantity = 3;
// const total = price + price + price;
// console.log(total);
// price is string not number, total will bug out because u cant do addition with string.

// console.log(Number("8") + 2);
// console.log(String(8) + 2);
//it should be the opposite, string needs to have "" while number doesnt.



//תרגיל 3

const my_age = 17; //גיל
const has_Permission = true; //אישור
const is_Registration_Open = true; //הרשמה פתוחה
const participant_Id = 24; //מספר משתתף

const check = (my_age>=18);
const status1 = check ? "eligible" : "not eligible";
console.log(status1);


// const completed = true;
// let status;
// if (completed) {
// status ="Done";
// } else {
// status = "In progress";
// }

const completed = true;
const status2 = completed ? "done" : "in progress";
console.log(status2);

const stockmessage = 2;
const check1 = (stockmessage>=0);
const status3 = check1 ? "stock in" : "out of stock";
console.log(status3);

const price = 750;
const label = price >= 700 ? "Premium" : "Regular";
console.log(label);
//premium will show up because 750 is greater then 700. label = true;

//עדיף להשתמש בטרנרי כאשר יש יותר משני ערכים. כאשר יש יותר משני ערכים עדיף להשתמש באיף ואלס.