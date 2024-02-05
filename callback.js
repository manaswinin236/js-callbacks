const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies(callback) {
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let output = '';
    for (let i = 0; i < cookies.length; i++) {
      output += cookies[i].name + '\n';
    }
    document.body.innerHTML = output;
    callback(); 
  }, 1000);
}

// Progression 3: Create a function to create cookies
function createCookie(newCookie, callback) {
  setTimeout(() => {
    cookies.push(newCookie);
    callback(); 
  }, 2000);
}

// Progression 5: calling function
createCookie(newCookie, getCookies); // Adding a new cookie and displaying
