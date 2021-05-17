const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeings");

const USWER_LS = "currentUser";
const SHOWING_CN = "showing";
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.intterText = `Hello ${text}`;
}
function loadName(){
    const currentColor = localStorage.getItem(USWER_LS);
    if(currentUser === null){
        //is not
    } else{
        paintGreeting(currentUser);
    }
}
function init(){

}

init();