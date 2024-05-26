/* Exercise 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames
are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
// Assigning array. i am usning camelCase.
var currentUsers = ["zain", "admin", "kashif", "asif", "asim"];
var newUsers = ["zain", "FARHAN", "osama", "kashif", "sami"];
// Converting all current usernames to lowercase for case insensitive comparison
var currentUsersLowercase = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    // Convert the new username to lowercase for case insensitive comparison
    if (currentUsersLowercase.includes(newUser.toLowerCase())) {
        console.log("The username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
