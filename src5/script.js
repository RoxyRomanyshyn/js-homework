import users from './users.js';

const getUserNames = users.map(user => {
    return user.name
});

console.log(getUserNames);
['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']


// const getUserNames = users => {
//     return users.map(user => {
//         return user.name;
//     });
// };
// const userNames = getUserNames(users);

// console.log(userNames);