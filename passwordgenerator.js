class Password {
  constructor() {
    this.lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    this.uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.specialChars = "!@#$%^&*()_?/-";
    this.numsChars = "0123456789";
    
    this.copy = document.getElementById("copy");
    this.dilobox = document.getElementById("dilobox")
    this.lowercase = document.getElementById("lowercase");
    this.uppercase = document.getElementById("uppercase");
    this.specialChar = document.getElementById("specialChar");
    this.nums = document.getElementById("nums");
    this.display = document.getElementById("display");
    this.length = document.getElementById("length");
  }
// Methods for randomly choose characters
  getLowercase() {
    return this.lowercaseChars[Math.floor(Math.random() * this.lowercaseChars.length)];
  }
  getUppercase() {
    return this.uppercaseChars[Math.floor(Math.random() * this.uppercaseChars.length)];
  }
  getSpecialChars() {
    return this.specialChars[Math.floor(Math.random() * this.specialChars.length)];
  }
  getNums() {
    return this.numsChars[Math.floor(Math.random() * this.numsChars.length)];
  }

  //Method for showing password
  showDisplay() {
    let len = this.length.value;
    let password = "";

    for (let i = 0; i < len; i++) {
      let x = this.generatePassword();
      password += x;
    }
    this.display.value = password;

// Method for copy password to clipboard
    this.copy.addEventListener("click", async (e) => {
      e.preventDefault();
    
      let copyText = password;
    
      try {
        await navigator.clipboard.writeText(copyText);
        console.log('Text copied to clipboard:', copyText);
      } catch (err) {
        console.error('Unable to copy text to clipboard', err);
      }
  
  });
  }
  
  
  // Main logic
  generatePassword() {
    const xs = [];

    if (this.lowercase.checked) {
      xs.push(this.getLowercase());
    }
    if (this.uppercase.checked) {
      xs.push(this.getUppercase());
    }
    if (this.specialChar.checked) {
      xs.push(this.getSpecialChars());
    }
    if (this.nums.checked) {
      xs.push(this.getNums());
    }

    if (xs.length < 4) {
      return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
  }

}

//Generate Password Button
let generate = document.getElementById("generate");
let p = new Password();
generate.addEventListener("click", (e) => {
  e.preventDefault();
  p.showDisplay();
});



