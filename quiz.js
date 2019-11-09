function reponse()
{
    var total=10;
    var score=0;
    var Q1=document.forms["quizform"]["Q1"].value;
    var Q2=document.forms["quizform"]["Q2"].value;
    var Q3=document.forms["quizform"]["Q3"].value;
    var Q4=document.forms["quizform"]["Q4"].value;
    var Q5=document.forms["quizform"]["Q5"].value;
    var Q6=document.forms["quizform"]["Q6"].value;
    var Q7=document.forms["quizform"]["Q7"].value;
    var Q8=document.forms["quizform"]["Q8"].value;
    var Q9=document.forms["quizform"]["Q9"].value;
    var Q10=document.forms["quizform"]["Q10"].value;
    ///// Validation
    for(i=1;i<=total;i++)
    {
        if(eval('Q'+i)==null || eval('Q'+i)=='')
        {
            alert('svp donnée la reponse de la quistion : '+i);
            return false;
        }
    }
    function add()
    {
        var number=100;
        for(i=0;i<=number;i++)
        {
            i++;
            alert('number'+i);
        }


    }
    ////// gere les correct reponse
    var rep=["c","c","a","a","b","c","c","b","c","c"]
    for(i=1;i<=total;i++)
    {
        if(eval('Q'+i)==rep[i=1])
        {
            score++;
        }
    }
   // var reslt=document.getElementById('reslt');
   // reslt.innerHTML='<h3>your scored <span>'+score+'</span> out of <span>'+total+'</span></h3>'
    alert('Ton Score'+score+' out of'+total);
    return false;
}