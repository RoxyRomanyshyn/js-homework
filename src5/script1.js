import users from './users.js';

const getUsersWithEyeColor = (user, color) => users.filter(user => color === user.eyeColor);


console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]