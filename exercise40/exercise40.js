/* Exercise 40: Album:
Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return
a Object containing these two pieces of information. Use the function to make three
dictionaries representing different albums. Print each return value to show that Objects
are storing the album information correctly. Add an optional parameter to make_album()
that allows you to store the number of tracks on an album. If the calling line includes
a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
*/
// Making function makeAlbum with main parameters.
function makeAlbum(artistName, titleName, tracks) {
    //making object album with same parameters but setting tracks as optional.
    var album = {
        artist: artistName,
        title: titleName,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create three different album objects
console.log(makeAlbum("IU", "The Winning"));
console.log(makeAlbum("Taylor Swift", "Midnights", 13)); // Album with tracks specified
console.log(makeAlbum("Adele", "21"));
