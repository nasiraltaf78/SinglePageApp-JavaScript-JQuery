var xhr = new XMLHttpRequest(); // Sends a new request to 
xhr.onload = function() {       // When loading
    if(xhr.status === 200) {    // Checking the results status 
        response = JSON.parse(xhr.responseText); 

        var string1 = '', 
            string2 = '',
            string3 = '',
            string4 = '',
            string5 = '',
            string6 = '';
            string7 = '';

        for(var i = 0; i < response.friends.length ; i++ ) {    // Looping inside the JSON Object
            
            var babyStepValue = response.friends[i].babyStep;
        
            // If JSON baby step value is equal to num X then build string containing friends names.
            if(babyStepValue == 2) {
                var string1 = response.friends[i].firstName + ' ' + response.friends[i].lastName + ' ';
            };
            
            if(babyStepValue == 3){
                string2 += response.friends[i].firstName + ' ' + response.friends[i].lastName + ' ' ;
            };

            if(babyStepValue == 4){
                string3 += response.friends[i].firstName + ' ' + response.friends[i].lastName;
            };

            if(babyStepValue == 5){
                string4 += response.friends[i].firstName + ' ' + response.friends[i].lastName + ',';
            };
        }

        // Step 2
        $('.json-2').html('<span>' + string1 + '</span> is also in Baby Step 2');

        // Step 3
        var newString2 = string2.replace(/Thomas T/g,'Thomas and T'); 
        $('.json-3').html('<span>'+ newString2 + '</span> are also in Baby Step 3');

        // Step 4
        var newString3 = string3.replace(/Mark/g,',').replace(/Young/g,''); 
        $('.json-4').html('<span>' + newString3 + ',</span> and 1 other friend are also in Baby Step 4');

        // Step 5, 6 and 7
        var newString4 = string4
            .replace(/Joseph/g,'')
            .replace(/Lee/g,'')
            .replace(/,Mary/g,'')
            .replace(/White,/g,'')
            .replace(/Garcia,Patricia/g,'Garcia, Patricia');
        var multiuse = '<span>' + newString4 + '</span> and 2 other friends are also in Baby Step 5';
        $('.json-5, .json-6, .json-7').html(multiuse);

    }
};
xhr.open('GET', './assets/javascripts/baby-steps.json', true); // Opens the file location on server, finds the file and as a GET request
xhr.send(null); // This request is then successfully sent, which will provide us the working file.