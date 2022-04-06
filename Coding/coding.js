function pageTwo(init,last){
    window.scrollTo({
        top: 0
    });
    var a = new XMLHttpRequest();
            a.open("GET","./coding.json",false);
            a.send();
            if(a.readyState == 4 && a.status == 200){
                var result = a.responseText;
                var Ap = JSON.parse(result);
                var fun = "";
                for(var i=init;i<last;i++)
                {
                    fun+='<br><div>\
                        <h4>'+Ap[i]["pageno"]+'</h4>\
                        <h5>'+Ap[i]["question"]+'</h5>\
                            <ul>\
                                <li>'+Ap[i]["choice1"]+'</li>\
                                <li>'+Ap[i]["choice2"]+'</li>\
                            </ul>\
                            <p>'+Ap[i]["task"]+'</p>\
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

    
    let ele = document.querySelector(".aline").querySelectorAll('.active');
ele.forEach(element => {
    element.addEventListener("click",function(){
        ele.forEach(nav => nav.classList.remove('act'));
        this.classList.add('act')
    });
});
}
