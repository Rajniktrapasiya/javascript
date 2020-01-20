var john ={
   fullname :'john',
   mass:45,
   height:15,
   calculatebmi: function(){
       return this.mass/(this.height*this.height)
   }
}

var mark ={
    fullname :'mark',
    mass:62,
    height:12,
    calculatebmi: function(){
        return this.mass/(this.height*this.height)
    }
}

if(john.calculatebmi > mark.calculatebmi)
{
    console.log("John BMI is highest");
}
else
{
    if(john.calculatebmi == mark.calculatebmi)
    {
        console.log("John And Mark Both have Same BMI");
    }
    else{
        console.log("Mark BMI is Highest");
    }
}

console.log(john);
console.log(mark);