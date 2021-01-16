import users from "./users.js";

//////////////// No1

// const getUserNames = users => users.map(function(user)  {
//   return user.name;
// });
// console.log(getUserNames(users));

const getUserNames = users.map((user) => user.name);

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//////////////// No2

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

////////////// No3

const getUsersWithGender = (users, gender) =>
  users
    .filter(function (user) {
      if (user.gender === gender) {
        return user;
      }
    })
    .map((user) => user.name);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//////////////// No4

const getInactiveUsers = (users) =>
  users.filter(function (user) {
    return !user.isActive;
  });

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//////////////// No5

// const getUserWithEmail = (users, email) => users.find(function (user) {
//   if (user.email === email) {
//     return user;
//   }

// })

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//////////////// No6

// const getUsersWithAge = (users, min, max) => users.filter(function (user) {
//   if (user.age >= min && user.age <= max) {
//     return user;
//   }
// })

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//////////////// No7

const calculateTotalBalance = (users) =>
  users.reduce(function (balance, user) {
    return balance + user.balance;
  }, 0);

console.log(calculateTotalBalance(users)); // 20916

//////////////// No8

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(function (user) {

//     if (user.friends.includes(friendName)) {

//       return user;
//     }
//   }).map(user => user.name);

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

// Массив имен всех пользователей у которых есть друг с указанным именем.

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]



//////////////// No9


// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users.sort(function (prevUser, nextUser) { 
  return prevUser.friends.length - nextUser.friends.length;
  
}).map(user => user.name)

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся
// умений и они должны быть отсортированы в алфавитном порядке.

//////////////// No10


// const getSortedUniqueSkills = (users) =>
//   users.reduce(function (skills, user) {
    
//     skills.push(...user.skills);

    
//     return skills;
//   }, [])


const getSkillsF = (users) =>
  users.reduce(function (skills, user) {
    skills.push(...user.skills);

    return skills;
  }, []);


const getSkills = getSkillsF(users)
console.log(getSkills)

const getUniqueSkillsF = (getSkills) => getSkills.filter(function (skill) { 
  if (getSkills.includes(skill)) {
    const uniqueArray = []
    
    console.log(getSkills)
    console.log(skill)
    console.log(getSkills.includes(skill));
    

    return getSkills
  }
})

console.log(getSkills);
console.log(getUniqueSkillsF(getSkills));

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla