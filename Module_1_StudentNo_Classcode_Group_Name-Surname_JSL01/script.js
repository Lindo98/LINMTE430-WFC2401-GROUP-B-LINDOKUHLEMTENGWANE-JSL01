function validateSyntax() {
    let input = document.getElementById('petInput').value;


    // I added a const for the characters, so I can be able to use characters in my username
    const characters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let result = ("")  // I left the string empty so it can return the results that are inside the function once it starts running


    // I used the if else statement and used the startWith to define/control how the username should start

        if (input.startsWith("pet_") && characters.test(input.substring(4))) { // I used the substring to method specifies the index at which to begin extracting characters from the string
            result = 'Valid Syntax';
            document.getElementById('dot').style.backgroundColor = 'green'; // This is for the dot to turn green when the results are valif 
            console.log('Valid Syntax');
            

        } else {
            result = 'Invalid Syntax';
            console.log('Invalid Syntax');
            document.getElementById('dot').style.backgroundColor = 'red';
        }
    
        document.getElementById('result').innerText = result;

        const dotElement = document.getElementById('dot');

    }
