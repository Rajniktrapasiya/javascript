function BMI() 
{
    var markMass = document.getElementById("mass_mark").value;
    var johnMass = document.getElementById("mass_John").value ;
    var markHeight = document.getElementById("Height_mark").value;
    var johnHeight = document.getElementById("Height_John").value;
    

    var BMI_mark= markMass / (markHeight * markHeight);
    var BMI_John= johnMass / (johnHeight * johnHeight);
    document.getElementById("BMImark").innerHTML="Mark BMI is:-"+BMI_mark;
    document.getElementById("BMIjohn").innerHTML="John BMI is:-"+BMI_John;
    var High = BMI_mark > BMI_John;
    document.getElementById("IS").innerHTML="Mark BMI is Higher Then John BMI is == "+High;
}