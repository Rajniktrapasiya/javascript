function AVG()
{
    var johnTeam = [89,120,103];
    var mikeTeam = [116,94,123];
    var sum1 = 0;
    var sum2 = 0;

    johnTeam.forEach(element => {
        sum1 +=element;
    });

    mikeTeam.forEach(element => {
        sum2 +=element;
    });

    console.log("JOHN TEAM AVERAGE IS:-"+sum1/3);
    console.log("MIKE TEAM AVERAGE IS:-"+sum2/3);
}