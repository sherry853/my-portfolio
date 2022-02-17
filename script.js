const firebaseConfig = {
    apiKey: "AIzaSyAIoC69dUjN0ZY0Y1iwUdBJmy-Z9fyOENA",
    authDomain: "my-portfolio-47946.firebaseapp.com",
    projectId: "my-portfolio-47946",
    storageBucket: "my-portfolio-47946.appspot.com",
    messagingSenderId: "202584133510",
    appId: "1:202584133510:web:14158ac0a57a4eeab6e607",
    measurementId: "G-ZKQHL20234"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore(); 

let contactList = db.collection("contact-us");

$("#form").submit((event) => {
    event.preventDefault();
    let contact = {
        name: $("#name").val(),
        email: $("#email").val(),
        phonenumber: $("#phoneNumbers").val(),
        subject: $("#subject").val(),
        message: $("#message").val(),
    };

    let namecheck = true;
    let emailcheck = true;
    let phonecheck = true;
    let subjectcheck = true;
    let messagecheck = true;

    if ($("#name").val() === "") {
        $("#errorName").text("*Insert name!");
        namecheck = false;
    }
    
    if ($("#email").val() === "" || !$("#email").val().includes("@")) {
        $("#errorEmail").text("*Insert valid email!");
        emailcheck = false;
    }

    if ($("#phoneNumbers").val() === "" || !$("#phoneNumbers").val().startsWith("08") || $("#phoneNumbers").val().length > 14) {
        $("#errorNumbers").text("*Insert valid phone numbers!");
        phonecheck = false;
    }
    
    if ($("#subject").val() === "") {
        $("#errorSubject").text("*Insert subject!");
        subjectcheck = false;
    }

    const message = $("#message").val().trim().split(" ");
    if ($("#message").val() === "" || $(message).length > 100 || $(message).length < 5) {
        $("#errorMessage").text("*Insert 5-100 words!");
        messagecheck = false;
    }


    if ($("#name").val() != "") {
        $("#errorName").text(""); 
        namecheck = true;
    }
    
    if (!($("#email").val() === "" || !$("#email").val().includes("@"))) {
        $("#errorEmail").text("");
        emailcheck = true;
    }

    if ($("#phoneNumbers").val() != "" && $("#phoneNumbers").val().startsWith("08") && $("#phoneNumbers").val().length < 14) {
        $("#errorNumbers").text("");
        phonecheck = true;
    }
    
    if ($("#subject").val() != "") {
        $("#errorSubject").text("");
        subjectcheck = true;
    }

    if (!($("#message").val() === "" || $(message).length > 100 || $(message).length < 5)) {
        $("#errorMessage").text("");
        messagecheck = true;
    }
     
    if (namecheck == true && emailcheck == true && phonecheck == true && subjectcheck == true && messagecheck == true){
        contactList.add(contact);
        $("#name").val("");
        $("#email").val("");
        $("#phoneNumbers").val("");
        $("#subject").val("");
        $("#message").val("");
        $("#errorName").text("");
        $("#errorEmail").text("");
        $("#errorNumbers").text("");
        $("#errorSubject").text("");
        $("#errorMessage").text("");
        $(".form-text").text("Data saved!");
        $(".form-text").css("color", "green");
        setTimeout (() => {
            $(".form-text").text("We'll never share your data with anyone else.");
            $(".form-text").css("color", "#6c757d");
        },5000);
    }
}); 