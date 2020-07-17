//tinyFriend function
function tinyFriend(friendsName) {
    //check string empty or not 
    if (friendsName.length == 0 || friendsName == '' || friendsName == "") {
        return 'string cannot be empty';
    }
    else {
        var min = friendsName[0].length; // set index 0 is smallest
        var tinyFriendName = friendsName[0];
        for (var i = 1; i < friendsName.length; i++) {
            // compare index 0's length with all others index length 
            if (min > friendsName[i].length) {
                min = friendsName[i].length;
                tinyFriendName = friendsName[i]; // store smallest name in tinyFriendName 
            }
        }
        return tinyFriendName; // return smallest string to function caller 
    }
}

