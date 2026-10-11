//תרגיל 22


const movie = {
id: 41,
title: "Orbit",
genre: "Sci-Fi",
rating: 8.4
};

const {title, genre, rating} = movie;
console.log(`${movie.rating} | ${movie.genre} | ${movie.title}`);


const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);

//ידפיס : orbit  ocean

//תרגיל 23
const user = {
id: 7,
name: "Dana Levi",
email: "dana@example.com",
isActive: true
};

const formatUser = (email, name3) => { return(`${name3} - ${email} `)};

console.log(formatUser(user.name, user.email));

const getUserStatus = (isActive, name4) => {
    if(isActive === true){
        return (`${name4}, Active`)
    }
    return (`${name4}, Inactive`)
     };

     console.log(getUserStatus(user.isActive, user.name));
     
     // לא מכיוון שהפונקציה מחלצת תכונות ספציפיות מתוך האוביקט


     //תרגיל 24


     const player = {
id: 1,
nickname: "Noni",
score: 1200,
level: 8
};
console.log(player);
const comments = [
{ id: 1, user: "Noa", text: "Great game!", likes: 12 },
{ id: 2, user: "Dan", text: "Well played", likes: 7 }
];

const newComment = {
id: 3,
user: "Maya",
text: "Amazing score!",
likes: 0
};

const updatedPlayer = {...player, score:1350};
console.log(updatedPlayer);

const commentsAfterAdd = [...comments, newComment ];
console.log(commentsAfterAdd);

// אין שוני, זה אותו שחקן רק במשתנים שונים 


//תרגיל 25

const tasks = [
{ id: 1, title: "Write tests", completed: false, priority: "high" },
{ id: 2, title: "Update profile", completed: true, priority: "low" },
{ id: 3, title: "Fix login", completed: false, priority: "high" }
];

const removeTaskById = (id, tasks) => tasks.filter(task => task.id !== id);
console.log(removeTaskById(2, tasks));

const tasksAfterDelete = removeTaskById(2, tasks);

console.log(tasks);
console.log(`space :3`);
console.log(tasksAfterDelete);

//מכיוון שאין id 
//הפונקציה תחזיר אותו הדבר כמו המערך הנתון
// לא יהיה תנאי שיעיף משימה החוצה



