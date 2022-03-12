let Ap = [
    {
        "pageno":"1.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"2.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"3.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"4.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"5.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },  {
        "pageno":"6.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"7.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"8.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"9.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    },
    {
        "pageno":"10.",
        "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "choice1":"A.     120m ",        
        "choice2":"B.     180m ",
        "choice3":"C.     324m ",
        "choice4":"D.     150m ",
        "answer":"The correct answer is (d) <br> Explanation : speed=(60 x 5/18) m/sec = (50/3) m/sec.<br> Length of the train = (speed X time).<br> Therefore Length of the train = (50/3 x 9)m = 150 m."
    }

]




/*function over(){
    var a = new XMLHttpRequest();
    a.open("GET","Aptitude.json",false);
    a.send();
    if(a.readyState == 4 && a.status == 200){
        var result = a.responseText;
        var Ap = JSON.parse(result);
        var fun = "";
        for(var i=0;i<Ap.length;i++)
        {
            fun+='<br><div>\
                <h4>'+Ap[i]["pageno"]+'</h4>\
                <p>'+Ap[i]["question"]+'</p>\
                    <ul>\
                        <li>'+Ap[i]["choice1"]+'</li>\
                        <li>'+Ap[i]["choice2"]+'</li>\
                        <li>'+Ap[i]["choice3"]+'</li>\
                        <li>'+Ap[i]["choice4"]+'</li>\
                    </ul>\
                    <br>\
                    <details>\
                        <summary>See Answer</summary>\
                        <div class="box">\
                        <p>'+Ap[i]["answer"]+'</p>\
                        </div>\
                    </details>\
            </div>';
        }
        document.getElementById("apti").innerHTML=fun;
    }
}*/


    
    function over(){
       // var n = document.querySelector(".pageNumber");
        let fun = "";
        for(var i=0;i<=4;i++)
        {
            fun+='<br><div>\
                <h4>'+Ap[i]["pageno"]+'</h4>\
                <p>'+Ap[i]["question"]+'</p>\
                    <ul>\
                        <li>'+Ap[i]["choice1"]+'</li>\
                        <li>'+Ap[i]["choice2"]+'</li>\
                        <li>'+Ap[i]["choice3"]+'</li>\
                        <li>'+Ap[i]["choice4"]+'</li>\
                    </ul>\
                    <br>\
                    <details>\
                        <summary>See Answer</summary>\
                        <div class="box">\
                        <p>'+Ap[i]["answer"]+'</p>\
                        </div>\
                    </details>\
            </div>';
        }
     document.getElementById("apti").innerHTML=fun;
    }
    function onTwo(){
        funs ="";
        for(var i=5;i<=9;i++)
        {
            funs+='<br><div>\
                <h4>'+Ap[i]["pageno"]+'</h4>\
                <p>'+Ap[i]["question"]+'</p>\
                    <ul>\
                        <li>'+Ap[i]["choice1"]+'</li>\
                        <li>'+Ap[i]["choice2"]+'</li>\
                        <li>'+Ap[i]["choice3"]+'</li>\
                        <li>'+Ap[i]["choice4"]+'</li>\
                    </ul>\
                    <br>\
                    <details>\
                        <summary>See Answer</summary>\
                        <div class="box">\
                        <p>'+Ap[i]["answer"]+'</p>\
                        </div>\
                    </details>\
            </div>';
        }
      document.getElementById("aptui").innerHTML=funs;
    }

