import users from './users.js';

const getNamesSortedByFriendsCount = users => {
    return users.sort((user1, user2) => user1.friends.lenght - user2.friends.lenght).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]