//תרגיל 5
function CalculateOrderTotal (quantity, unitprice){
    return quantity * unitprice;
}

const ordertotal = CalculateOrderTotal(4,35);
console.log(ordertotal);

const ordertotal1 = CalculateOrderTotal(432,35);
console.log(ordertotal1);

const ordertotal2 = CalculateOrderTotal(4,66);
console.log(ordertotal2);


// תיקנתי את הקוד 
function calculateOrderTotal(unitPrice, quantity) {
return (unitPrice * quantity);
}
const result = calculateOrderTotal(20, 3);
console.log(result);
//I removed the console.log in the function. 



// תרגיל 6

function getletterGrade(grade){
    if(grade >100){
       return "invalid grade";
    }
    if(grade >= 90)
    {
      return  "A";
    }
    else if (grade >=80){
       return "B";
    }
    else if (grade>=70){
      return  "C";
    }
     else if (grade>=60){
       return "D";
    }
     else if (grade>=0){
      return  "F";
    }
    else if(grade <0){
      return  "invalid grade";
    }
}
 console.log( getletterGrade(95))

 //תרגיל 7

const greet = (name1) => ( `Hello,  ${name1}`);

const calculatedfinalprice =  (price, discountprecent) => (price - (price * discountprecent / 100));

console.log(greet("dana"));
console.log(calculatedfinalprice(20, 50))
 
// שניהם שורה אחת????....


//תרגיל 8

const calculatePrice = (price1, price2) => (price1>price2 ? price1+price2*0.5 : price2+price1*0.5);
 console.log(calculatePrice(20,40));
 console.log(calculatePrice(50,10))


 const isexpensive = (price3) => (price3 > 500 ? true : false);
console.log(isexpensive(550));
console.log(isexpensive(400));

const square = number =>
number * number;

console.log(square(2));
console.log(square(4));
//הסוגריים לא היו צריכים להיות שם...


//תרגיל 9

const product = {
id: 1,
name:"Laptop",
price: 999,
inStock: true
}


const getproductsummary = (product) => `${product.name} - ${product.price} NIS `;
console.log(getproductsummary(product));

const getavaliability = (product) => product.inStock==true ? "Available" : "Unavailable";
console.log(getavaliability(product));
//because it could work with any different product and not just the one shown.