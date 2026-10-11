//תרגיל 10
const catagories = ["Electronics" , "Fashion", "Books", " Home"];
console.log(catagories[0]);
console.log(catagories[catagories.length-1]);

console.log(catagories.includes("Books"));

console.log(catagories.indexOf("Books"));
console.log(catagories.indexOf("Sports"));
//שערך לא נמצא במערך זה יחזיר -1

catagories.push("Sports");
console.log(catagories);

const removed = catagories.pop();
console.log(catagories);
console.log(removed);

catagories.splice(1,1, "Games");
console.log(catagories);

//splice, pop, and push. they add or remove.


//תרגיל 11
const stockAmounts1 = [4, 0, 7, 3, 0];
function calculateTotalStock(array1)
{
    let total = 0;
for (const a of array1) 
{
    
     total +=a
}
console.log(total);
}
calculateTotalStock(stockAmounts1);

function countoutofstock (array2)
{
   let counter =0;
    for(const b of array2){
     
      if(b==0){
counter = counter + 1;
      }
    }
    return      counter;
}

console.log(countoutofstock(stockAmounts1));

function countoutofstock2(arr)
{
    let counter1 =0;
 for(let i = 0; i<arr.length; i++)  
{
if (arr[i]==0){
    counter1++;
}
}
return counter1;
}
console.log(countoutofstock2(stockAmounts1));

//עדיף להשתמש באינדקס כשאכפת לנו ממספרים האיברים במערך 


//תרגיל 12
  const user = {
    id: 1, firstName: "Dana",
    lastName: "Levi",
    age: 17
  };

  console.log(user.firstName); // i used a notation dot... i guess :,)

  user.age = 18;
  console.log(user.age);

  user.email = "danalevi@gmail.com";
  console.log(user.email)

  console.log(user);

  console.log(user.Firstname);//הוא לא יציג בגלל האותיות הגדולות
  //זה צריך להיות console.log(user.firstName);


  //תרגיל 13
  const post = {
    id: 101,
    content: "JavaScript practice day",
    author:{
      id: 7,
      Name: "Noa",
      username: "@noa_dev"
    },
    comments:
    [
      {id: 1, user: "@amit", text: "Goodluck!"},
      {id: 2, user: "@Or", text: "Nice post!"}
    ]
  };

  console.log(post.author.Name, post.author.username);
console.log(post.comments[0]);
console.log(post.comments.length);
post.comments.push({id: 3, user: "@lior", text: "slay queen!!"});
console.log(post.comments[2]);

console.log(post.author.Name); // יודפס Noa
console.log(post.comments[1].user); //יודפס @Or

//תרגיל 14

const products = [
{ id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
{ id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
{ id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
{ id: 4, name: "Backpacck", price: 80, category: "Fashion", inStock: true }
];

for(const product of products){
  console.log(product.id, product.name, product.price);
}

function countAvailableProducts(productlist){
let counter = 0;
for (const product of productlist)
{
  if(product.inStock == true){
    counter++;
  }
}
return counter;
}
console.log(countAvailableProducts(products));

function getProfuctNameById(id, products){

  for(const product of products){
    if(product.id === id){
      return product.name;
    }
  }
   return "Product not found";
}
console.log(getProfuctNameById(3, products));
console.log(getProfuctNameById(99, products));
//names can be the same, every person has their own personal id.
//no id can be the same.