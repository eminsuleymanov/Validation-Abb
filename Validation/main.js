const username = document.querySelector('#username').value.trim();
const password = document.querySelector('#password').value.trim();
const email = document.querySelector('#email').value.trim();




function Validation(input){
   
    var emailPattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,14}$/;
    var userPattern = /^[a-z0-9_-]{3,16}$/;
    var userbox = document.querySelectorAll('.user-box');
    var check = document.getElementById('check');
    var nida = document.getElementById('exclamation');


    if(userPattern.test(username)){
       
        document.getElementById('invalidName').style.opacity = '1';
       check.style.opacity = '0';
       nida.style.opacity = '1';
      


        // for (var box in userbox) {
        //     userbox.className = 'user-box error'
            
        // }
        // userbox.classList.remove('success')
        // userbox.classList.add('error');


    }
    else{
       
        for (var box of userbox) {
            box.classList.add('error');
            
        }

        // userbox.classList.add('success')
        // userbox.classList.remove('error');
        document.getElementById('invalidName').style.opacity = '0';
        check.style.opacity = '1';
        nida.style.opacity = '0';
        check.style.color = 'green';
        
       
     
    }



}