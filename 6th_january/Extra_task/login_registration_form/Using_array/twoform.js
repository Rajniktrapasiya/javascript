var Firstname = new Array();
var Lastname = new Array();
var Email = new Array();
var Phone = new Array();
var Password = new Array();
function formsecond()
{
    var firstname = document.forms['form2']['firstname'].value;
    var lastname = document.forms['form2']['lastname'].value;
    var email2 = document.forms['form2']['email2'].value;
    var phone = document.forms['form2']['phone'].value;
    var pwd2 = document.forms['form2']['pwd2'].value;
    var bol = true;

    console.log(firstname,lastname,email2,phone,pwd2);
    
    
    if(firstname =="")
    {
        alert("Please Enter Valid name");
        return false;
    }
    if(lastname =="")
    {
        alert("Please Enter lastname");
        return false;
    }
    if(email2 =="")
    {
        alert("Please Enter Valid email");
        return false;
    }
    if(phone =="")
    {
        alert("Please Enter Valid phoneNumber");
        return false;
    }
    if(pwd2 =="")
    {
        alert("PassWord is not Empty");
        return false;
    }

    
    for(i=0;i<Email.length;i++) 
    {
        if(email2 == Email[i])
        {
            alert("Email id is already Use.Please Use another");
            bol = false;
        }
        
    }

    console.log(Email[0]);

    if(validFirstLastName(firstname)== true && validFirstLastName(lastname)==true && validEmail(email2)== true && ValidPhone(phone) == true && ValidPass(pwd2) == true && bol == true)
    {
        Firstname.push(firstname);
        Lastname.push(lastname);
        Email.push(email2);
        Phone.push(phone);
        Password.push(pwd2);
        alert("Data Update SuccessFul");
    }

    function validFirstLastName(name)
    {
        if(/^[a-z,A-Z]{3,10}$/.test(name))
        {
            return true;
        }
        else
        {
            alert("Enter Valid Name");
            return false;
        }
    }

    function validEmail(email)
    {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return true;
        }
        else{
            alert("Enter Vadil Email");
            return false;
        }
    }
    function ValidPhone(Pnum)
    {
        if(/^\d{10}$/.test(Pnum))
        {
            return true;
        }
        else{
            alert("Enter Valid Number");
            return false;
        }
    }
    function ValidPass(pass)
    {
        console.log("Function call"+pass);
        if(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{7,15}$/.test(pass))
        {
            return true;
        }
        else{
            alert("Enter Strong Password: It should be contain One Upper-Lower-Digit-specialCharacter and 7 to 8 digit.");
            return false;
        }
    }
}

function formone()
{
    var email1 = document.forms['form1']['email1'].value;
    var pwd = document.forms['form1']['pwd'].value;
    var bol = false;

    for(var i=0;i<Email.length;i++)
    {
        if(email1 == Email[i])
        {
            for(var j=0;j<Password.length;j++)
            {
                if(pwd == Password[j])
                {
                    if(i==j)
                    {
                        alert("login Successful");
                        document.getElementById("Result").innerHTML="FirstName: "+Firstname[i]+"<br>LastName: "+Lastname[i]+"<br>Email: "+Email[i]+"<br>PhoneNumber: "+Phone[i]+"<br>PassWord: "+Password[i];
                        bol= true;
                    }
                }
            }
        }
    }

    if(bol== false)
    {
        alert("Enter valid email and PassWord");
    }
}