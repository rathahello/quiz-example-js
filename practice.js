// var javascript = () => {
//     var script = document.getElementsByName("subject[]");
//     var result = " ";
//     for(let i = 0; i < script.length; i++){
//         if(script[i].checked){
//             result += script[i].value + " ";
//         }
//     }
//    document.getElementById("result").innerHTML = result;
// }
// document.addEventListener('change', javascript);


// var javascript = () => {
//     var java = document.getElementsByName("subject[]");
//     var results = " ";
//     for(let i = 0; i < java.length; i++){
//         if(java[i].checked){
//             results += java[i].value + " ";
//         }
//     }
//     document.getElementById("result").innerHTML = results;
// }
// document.addEventListener('click', javascript);

var changeScore = () => {

    var score = 0;
    // question one
    let html = document.getElementById("html");
    let html1 = document.getElementById("html1");
    let html2 = document.getElementById("html2");

    if (html.checked) {
        score += 25;
    } else if (html1.checked) {
        score += 0;
    } else if (html2.checked) {
        score += 0;
    }

    // question 2
    let css = document.getElementById("css");
    let css1 = document.getElementById("css1");
    let css2 = document.getElementById("css2");

    if (css.checked) {
        score += 0;
    } else if (css1.checked) {
        score += 25;
    } else if (css2.checked) {
        score += 0;
    }
    // checkbox 
    var check = document.getElementsByName("subject[]");
    for(let i = 0; i < check.length; i++){
        if(check[i].checked){
            if(check[i].value == "CSS"){
                score += 0;
                break;
            }else if(check[i].value == "PHP" || check[i].value == "JavaScript"){
                score += 25/2;
            }
        }
    }
    //choose your best answer for JS
    var chooses = document.getElementById("chooseJs");
    if(chooses.value != "best"){
        score += 0;
    }else{
        score += 25;
    }
    //answer on screen
    document.getElementById("result").innerHTML = score;
}
let btn = document.getElementById("answer");
btn.addEventListener('click', changeScore);
