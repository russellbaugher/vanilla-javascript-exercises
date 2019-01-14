// Listen For Form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // Get Form Values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if (!validateForm(siteName, siteUrl)) {
      return false;

    }

    var bookmark = {
      name: siteName,
      url: siteUrl
    }
    /*
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    // Test If Bookmarks Is Null
    if(localStorage.getItem('bookmarks') === null) {
      // Init Array
      var bookmarks = [];
      // Add To Array
      bookmarks.push(bookmark);
      //Set To Local Storage // Into String
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      // Get Bookmarks From Local Storage // Into JSON
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      // Add Bookmark To Array
      bookmarks.push(bookmark);
      // Re-Set Back to Local Storage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

      // Clear form
      document.getElementById('myForm').reset();

      // Re-Fetch bookmarks
      fetchBookmarks();

      // Prevent Form From Submitting
      e.preventDefault();
};

//Delete Bookmark
function deleteBookmark(url) {
    // Get Bookmarks From Local Storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Loop Through bookmarks
    for (var i = 0; i < bookmarks.length; i++) {
      if(bookmarks[i].url == url) {
        //Remove From Array
        bookmarks.splice(i, 1);
      }
    }
    // Re-Set Back to Local Storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // Re-Fetch bookmarks
    fetchBookmarks();

};

// Fetch Bookmarks
function fetchBookmarks() {
    // Get Bookmarks From Local Storage // Into JSON
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Get Output ID
    var bookmarksResults = document.getElementById('bookmarksResults');

    // Build Output
    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
      // Current Iteration
      var name = bookmarks[i].name;
      var url = bookmarks[i].url;
      // Append
      bookmarksResults.innerHTML +=
      '<div class="well">' + '<h3>' +name+
      ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
      '</h3>' + '</div>';
    }
};

function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
      alert('Please fill in the form');
      return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
      alert('Please use a valid URL');
      return false;
    }

    return true;
}
