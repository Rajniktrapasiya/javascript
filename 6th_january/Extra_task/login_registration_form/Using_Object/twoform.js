var data = function(Firstname,Lastname,Email,Phone,Password) {
this.Firstname = Firstname ;
this.Lastname = Lastname ;
this.Email  = Email;
this.Phone  =Phone;
this.Password =Password;
}
var datalist = new Array();
function formsecond()
{
    var firstname = document.forms['form2']['firstname'].value;
    var lastname = document.forms['form2']['lastname'].value;
    var email2 = document.forms['form2']['email2'].value;
    var phone = document.forms['form2']['phone'].value;
    var pwd2 = document.forms['form2']['pwd2'].value;
    var bol = true;
    var datanumber = 0;

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

    
    for(i=0;i<datalist.length;i++) 
    {
        if(email2 == datalist[i].Email)
        {
            alert("Email id is already Use.Please Use another");
            bol = false;
        }
        
    }



    if(validFirstLastName(firstname)== true && validFirstLastName(lastname)==true && validEmail(email2)== true && ValidPhone(phone) == true && ValidPass(pwd2) == true && bol == true)
    {
        var tempdata = new data(firstname,lastname,email2,phone,pwd2);
        datalist.push(tempdata);
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

    for(var i=0;i<datalist.length;i++)
    {
        if(email1 == datalist[i].Email)
        {
            if(pwd == datalist[i].Password)
            {
                alert("login Successful");
                document.getElementById("Result").innerHTML="FirstName: "+datalist[i].Firstname+"<br>LastName: "+datalist[i].Lastname+"<br>Email: "+datalist[i].Email+"<br>PhoneNumber: "+datalist[i].Phone+"<br>PassWord: "+datalist[i].Password;
                bol= true;
                    
            }
        }
    }
    console.log(datalist[0].Email);
    console.log(datalist);

    if(bol== false)
    {
        alert("Enter valid email and PassWord");
    }
}