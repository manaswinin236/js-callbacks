const cookies = [{ name: "Chocolate Cookies" }, { name: "Macaron Cookies" }];
const newCookie = { name: "Biscotti Cookies" };

// Progression 1: create a function to get all the cookies
function getCookies() {
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let output = "";
    for (let i = 0; i < cookies.length; i++) {
      output += cookies[i].name + "\n";
    }
    document.body.innerHTML = output;
  }, 1000);
}

// Progression 3: Create a function to create cookies
function createCookie(newCookie) {
  setTimeout(() => {
    cookies.push(newCookie);
    getCookies();
  }, 2000);
}

// Progression 4: calling functions
getCookies(); 
createCookie(newCookie); 
