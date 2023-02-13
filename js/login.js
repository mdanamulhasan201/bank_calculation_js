// step-1 : Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(event){
    //step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');

    const email = emailField.value;
   
    // step-3: get Password 
    //3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // ******DANGER: DO NOT VERIFY email password on the client site******
// step -4: verify email and password and check whether valid user or not

if(email === "anamul@gmail.com" && password === 'anamul'){
    window.location.href = 'bank.html'
}
else{
    alert('Please Enter a Valid Email Password')
}


})




