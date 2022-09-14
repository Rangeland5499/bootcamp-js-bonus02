// ________opgave 1_______//

var state =false;
function changeColor() {


    if(state){
        document.getElementById("myH").style.color = "#7f7";
    }
    else{
        document.getElementById("myH").style.color = "#eee";
    }
    state=!state
  
  }




//   _______opgave 2_____//

function beregnForhold(a,b){
    return a/b;
}

var c= beregnForhold(4,3);
console.log(c);




//   _______opgave 2-extra opgave_____//

function beregnForhold2(a,b){

    if(b==0){
        return 0;
    }
    else{
        return a/b;
    }       
}

var c= beregnForhold2(4,3);
console.log(c);



//   _______opgave 3_____//


hideElementViaCssSelector(".my-p")
hideElementViaCssSelector("#my-div")

function hideElementViaCssSelector(cssSelector){
    let element=document.querySelector(cssSelector)
    if(element)element.style.display='none'
 }








  