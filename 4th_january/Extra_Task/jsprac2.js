var ans = ["a","a","b","c","d"];
var showAns = "<br>(1)1 may 1960 <br>(2)sabarmati<br>(3)kutch<br>(4)Gandhinagar<br>(5)Ahmedabad"
var score = 0;
function result(){
    var q1 = document.forms['frm1']['q1'].value;
    var q2 = document.forms['frm1']['q2'].value;
    var q3 = document.forms['frm1']['q3'].value;
    var q4 = document.forms['frm1']['q4'].value;
    var q5 = document.forms['frm1']['q5'].value;


    for(i=1;i<=5;i++)
    {
        if(eval('q'+i)==ans[i-1])
        {
            score++;
        }
    }

    console.log(score);
    document.getElementById("res").innerHTML="Your Score Is out of 5 :-"+ score +showAns;

}