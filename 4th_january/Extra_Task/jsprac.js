    var numArr = ["1"];
var namArr = ['Rajnik'];
var data = "<tr><th>Number</th><th>Name</th></tr>" ;
function Array()
{
    var number = document.getElementById("num").value ;
    var name = document.getElementById("nam").value ;

    numArr.push(number);
   
    namArr.push(name);

    console.log(namArr);
    console.log(numArr);
    data += "<tr><td>"+number+"</td><td>"+name+"</td></tr>";
    document.getElementById("tab").innerHTML = data ;
    console.log(data);

}