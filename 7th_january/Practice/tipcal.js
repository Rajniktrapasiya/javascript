var bill = [124,48,268];
var total = new Array();
var data = "<p>BILL--BILLwithTIPS</p><br>";
function tipcal(amount)
{
    var tip;
    if(amount<=50)
    {
        //20% tip
        tip = amount*0.2;
        return tip;
    }
    else if(amount<=200)
    {
        //15% tip
        tip = amount*0.15;
        return tip;
    }
    else if(amount>200)
    {
        //10% tip
        tip = amount*0.1;
        return tip;
    }
    else{
        alert("valid amount please");
    }
}

var tip = [tipcal(bill[0]),tipcal(bill[1]),tipcal(bill[2])];

for(var i=0; i<bill.length;i++)
{
    total.push(bill[i]+tip[i]);
    data += "<p>"+bill[i]+"--"+total[i]+"<br>"
}
window.onload = function() {
    what();
    function what(){
        document.getElementById('result').innerHTML = data;
    };
}
console.log(data);
console.log(bill);
console.log(total);
