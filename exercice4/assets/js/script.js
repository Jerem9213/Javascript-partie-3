function Validate() {
    var passeword = document.getElementById('passeword').value;
    var confirmedpassword = document.getElementById('passeword').value;
    if (passeword != confiremedpasseword) {
        document.getElementById('passeword').style.borderColor = '5px solid red';
    }
    else (passeword == confiremedpasseword){
        document.getElementById('passeword').style.borderColor = '5px solid green';
    };
};
