//תרגיל 15

const players = [
    {id: 1, nickname: "Pixel", score: 840, level: 5},
    {id: 2, nickname: "Nova", score: 1200, level: 8},
    {id: 3, nickname: "Blaze", score: 460, level: 3}
];

const Text = (players) => {players.forEach(player => {console.log(`points ${player.score} -  ${player.nickname} ,id: ${player.id}, level: ${player.level}`)
    
});};

Text(players);

const result = players.forEach(player => player.nickname);
console.log(result);
//זה ייצא undefined
//מכיוון שהפונקציה נועדה כדי לבצע פעולה על כל איבר ולא לייצר מערך חדש



//תרגיל 16

const scores = [840, 1200, 460, 950];
const courses = ["JavaScript", "Design", "Databases"];

const updatedScores = scores.map(score => score+100);
console.log(updatedScores);

const courseNameLengths = courses.map(name => name.length);
console.log(courseNameLengths);
//כמות האיברים נשארה אותו הדבר בשני המערכים

const doubledScores = scores.map(score => 
score * 2);
console.log(doubledScores);
//לפי מה שהבנתי, יש שתי דרכים או להוריד את הסוגריים המסולסלות או להוסיף ריטורן



//תרגיל 17

const posts = [
    { id: 101, username: "noa_dev", content: "First project!", likes: 45 },
    { id: 102, username: "dan_codes", content: "New feature", likes: 180 },
    { id: 103, username: "maya_js", content: "Weekend update", likes: 72 }
];

const postUsernames = posts.map(names => names.username);
console.log(postUsernames);

const postLabels = posts.map(label => `likes ${label.likes} | ${label.content} |${label.username}`);
    console.log(postLabels);

    const postCards = posts.map(post => ({id: post.id, label: `${post.username} - ${post.likes} likes`}));
    console.log(postCards);

    console.log(posts);
    //לא, הוא לא השתנה מכיוון ש מאפ לא משנה את המערך 

    

    //תרגיל 18

    const tasks = [
{ id: 1, title: "Write tests", completed: false, priority: "high" },
{ id: 2, title: "Update profile", completed: true, priority: "low" },
{ id: 3, title: "Fix login", completed: false, priority: "high" },
{ id: 4, title: "Review text", completed: false, priority: "medium" }
];

const openTasks = tasks.filter(task => task.completed == false);
console.log(openTasks);

const highPriorityTasks = tasks.filter(task => task.priority == "high");
console.log(highPriorityTasks);

const urgentOpenTasks = tasks.filter(task => task.completed == false && task.priority == "high");
console.log(urgentOpenTasks);

const getTasksByPriority = (task, priority)  => tasks.filter(task => task.priority == priority);
console.log(getTasksByPriority(tasks, "medium"));

const result1 = tasks.filter(task => task.id === 3);
//יהיה פה איבר 1 והוא יציג אובייקס שהזהות שלו היא 3



//תרגיל 19

const movies = [
{ id: 11, title: "Skyline", genre: "Drama", rating: 8.2 },
{ id: 12, title: "Orbit", genre: "Sci-Fi", rating: 7.9 },
{ id: 13, title: "Ocean", genre: "Adventure", rating: 8.5 }
];

const findMyMovieByld = (id, movies) => movies.find(movie => movie.id === id);
console.log(findMyMovieByld(12, movies));
//it works trust^^^

// const movie = movies.filter(movie => movie.id === 12);
// console.log(movie.title);
// נצטרך להחליף את פילטר בפינד כי פילטר נותן מערך ופינד נותן אובייקט

const movie = movies.find(movie => movie.id === 12);
console.log(movie.title);
//find- מחזיר אובייקט
//filter- מחזיר מערך

//תרגיל 20

//א - ForEach
//מכיוון שצריך רק להדפיס ולא לשמור

//ב - map
//מכיוון שצריך ליצור מערך ללא פילטרים

//ג - filter
// מכיוון שצריך למצוא את המשימות הספיציפיות שלא הושלמו

//ד - find 
//מכיוון שמחפשים משהו יחיד ספציפי, אובייקט אחד

//ה - filter
// מכיוון שצריך מערך חדש ספציפי שהוא כל הדירוגים גדולים מ8

// ו - find
//מציאת פוסט יחיד ספיציפי, אובייקט אחד

//מבצע פעולה על כולם foreach
//יוצר תוצאה חדשה מכל אחד map
// שומר רק חלק filter
//מחזיר אחד find



//תרגיל 21

const Nicknames = players.filter(players => players.score >800).map(players => players.nickname);
console.log(Nicknames);

const usernames = posts.filter(users => users.likes > 100).map(users => users.username);
console.log(usernames);

const getOpenTaskTitles = (tasks) =>tasks.filter(task => task.completed == false).map(task => task.title);
console.log(getOpenTaskTitles(tasks));



const result2 = players
.filter(player => player.score > 800)//פה זה מערך חדש עם כל האנשים שניקוד שלהם מעל 800
.map(player => player.nickname); // פה זה מחזיר מהמערך של הפילטר את כל השמות שיש

//מסננים בכדי לדעת את השמות של האנשים עם נתונים ספציפים.