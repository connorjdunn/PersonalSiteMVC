function validateForm(event) {

    //Gather all our HTML controls into a collection instead of creating a seperate varaible for each
    let controls = document.getElementsByClassName('contactControl');


    console.log(controls);

    let validationMessages = document.getElementsByClassName('invalid');

    console.log(validationMessages);

    //Regular Expression object for Email
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);


    //Regular Expression object for Name
    let rxpName = new RegExp(/^[A-Z]+$/i);


    //Check the length of all controls - if any of them have not been filled out, stop the form from submitting
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 ||
        controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value) || !rxpName.test(controls['name'].value)) {

        //Stop the form from submitting
        event.preventDefault();

        //Check individual controls and display an error message if needed

        //----------------- NAME Validation ----------------
        //LENGTH
        if (controls['name'].value.length == 0) {
            validationMessages['vname'].textContent = "* Name is required";
        }
        else {
            validationMessages['vname'].textContent = "";
        }

        //REGEX
        if (!rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['vname'].textContent = "* Name must only include alphabetical characters";
        }
        if (rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['vname'].textContent = "";
        }

        //----------------- EMAIL Validation ----------------

        //LENGTH
        if (controls['email'].value.length == 0) {
            validationMessages['vemail'].textContent = "* Email is required";
        }
        else {
            validationMessages['vemail'].textContent = "";
        }
        //REGEX
        if (!rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['vemail'].textContent = "* Please enter a valid email adress";
        }
        if (rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['vemail'].textContent = "";
        }




        //----------------- SUBJECT Validation ----------------
        //LENGTH
        if (controls['subject'].value.length == 0) {
            validationMessages['vsubject'].textContent = "* Subject is required";
        }
        else {
            validationMessages['vsubject'].textContent = "";
        }



        //----------------- MESSAGE Validation ----------------
        //LENGTH
        if (controls['message'].value.length == 0) {
            validationMessages['vmessage'].textContent = "* Message is required";
        }
        else {
            validationMessages['vmessage'].textContent = "";
        }


    }

}