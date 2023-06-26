let isDOBOpen = false;
let dateofBirth;
const settinggearEl = document.getElementById("settingsicon");
const settingcontentEl = document.getElementById("settingscontent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const dobbuttonEl = document.getElementById("dobbutton");
const dobinputEl = document.getElementById("dobinput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {

    return number > 9 ? number : '0${number}';
};

const toggleDateofBirthselector = () => {

    if(isDOBOpen){
        settingcontentEl.classList.add("hide");
    } else {
        settingcontentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    
    console.log("toggle", isDOBOpen);
};
    const updateAge = () => {

    const currentdate = new Date();

    const dateDiff = currentdate - dateofBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24 )) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60 )) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60 )) % 60;
    const second = Math.floor(dateDiff / 1000 ) % 60;

    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minuteEl.innerHTML = makeTwoDigitNumber(minute);
    secondEl.innerHTML = makeTwoDigitNumber(second);
};
const localStoragegetter = () => {
    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const day = localStorage.getItem("day");
    const hour = localStorage.getItem("hour");
    const minute = localStorage.getItem("minute");
    const second = localStorage.getItem("second");
    if(year && month && day && hour && minute && second){
        dateofBirth = new date(year, month , day , hour , minute ,second);
}
updateAge();
};

const contenttoggler = () => {
    updateAge();
    if(dateofBirth) {
       
    initialTextEl.classList.add("hide");
    afterDOBBtnTxtEl.classList.remove("hide");

    
    } else {
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
}
const setDOBHandler = () => {
   
    const datestring = dobinputEl.value;
    dateofBirth = datestring ? new Date(datestring) : null;

    
    }



    if(dateofBirth) {
        localStorage.setItem("year", dateofBirth.getFullYear());
        localStorage.setItem("month", dateofBirth.getmonth());
        localStorage.setItem("day", dateofBirth.getday());
        localStorage.setItem("hour", dateofBirth.gethour());
        localStorage.setItem("minute", dateofBirth.getminute());
        localStorage.setItem("second", dateofBirth.getsecond());
    
    } 
    contenttoggler();  
    setInterval(() => updateAge(), 1000);
    

localStoragegetter();
contenttoggler();








settinggearEl.addEventListener("click", toggleDateofBirthselector);
dobbuttonEl.addEventListener("click", setDOBHandler );
