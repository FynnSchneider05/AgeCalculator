
const DAY_RESUTLT = document.getElementById('resultDay')
const MONTH_RESULT = document.getElementById('resultMonth')
const YEAR_RESULT = document.getElementById('resultYear')

const DAY_INPUT = document.getElementById('dayInput')
const MONTH_INPUT = document.getElementById('monthInput')
const YEAR_INPUT = document.getElementById('yearInput')

const ERROR_DAY = document.getElementById('errorDay')
const ERROR_MONTH= document.getElementById('errorMonth')
const ERROR_YEAR = document.getElementById('errorYear')

const DAY_LABEL = document.querySelector('#day label')
const MONTH_LABEL = document.querySelector('#month label')
const YEAR_LABEL = document.querySelector('#year label')


const DAYS_PER_MONTH = {1: 32, 2: 28, 3: 31, 4:30, 5: 31, 6: 30,
                        7:31, 8:31, 9: 30, 10:31, 11:30, 12:31 }



function submit(){

    DAY_LABEL.style.color = ''
    MONTH_LABEL.style.color = ''
    YEAR_LABEL.style.color = ''

    ERROR_DAY.style.display = 'none';
    ERROR_MONTH.style.display = 'none';
    ERROR_YEAR.style.display = 'none';

    DAY_INPUT.style.border = '';
    MONTH_INPUT.style.border = '';
    YEAR_INPUT.style.border = '';

    let day = DAY_INPUT.value;
    let month = MONTH_INPUT.value;
    let year = YEAR_INPUT.value;

    const today = new Date();
    
    if(!checkInputs(day, month, year, today)){
        return;
    }


    ageYear = today.getFullYear() - year;
    ageMonth = today.getMonth() - month+1;
    ageDay = today.getDate() - day;
    
    if(ageMonth < 0){
        ageYear--;
        ageMonth = 12 - ageMonth
    }

    if(ageMonth == 0 && ageDay < 0){
        year--;
        ageMonth = 12;
        ageDay = DAYS_PER_MONTH[ageMonth] - ageDay;
    }



    DAY_RESUTLT.innerText = ageDay;
    MONTH_RESULT.innerText = ageMonth;
    YEAR_RESULT.innerText = ageYear;
}


function checkInputs(day, month, year, today){

    let valid = true;

    if(day == ''){
        valid = false;

        DAY_INPUT.style.border = '1px solid red';
        ERROR_DAY.innerHTML = "This field <br class='linebreak'>  is required";
        console.log(ERROR_DAY.innerText)
        ERROR_DAY.style.display = 'block';
        DAY_LABEL.style.color = 'red';
    }

    else if(month == '' && day > 31){
        valid = false;

        DAY_INPUT.style.border = '1px solid red';
        ERROR_DAY.innerHTML = "Enter valid <br class='linebreak'> Day";
        ERROR_DAY.style.display = 'block';
        DAY_LABEL.style.color = 'red';
    }

    else if(day > DAYS_PER_MONTH[month] || day < 1){
        valid = false;

        DAY_INPUT.style.border = '1px solid red';
        ERROR_DAY.innerHTML = "Enter valid <br class='linebreak'> Day";
        ERROR_DAY.style.display = 'block';
        DAY_LABEL.style.color = 'red';

    }

    else if(year == today.getFullYear() && month == today.getMonth()+1 && day > today.getDate()){
        valid = false;

        DAY_INPUT.style.border = '1px solid red';
        ERROR_DAY.innerHTML = "Enter valid <br class='linebreak'> Day";
        ERROR_DAY.style.display = 'block';
        DAY_LABEL.style.color = 'red';

    }

    if(month == ''){
        valid = false;

        MONTH_INPUT.style.border = '1px solid red';
        ERROR_MONTH.innerHTML = "This field <br class='linebreak'>  is required";
        ERROR_MONTH.style.display = 'block';
        MONTH_LABEL.style.color = 'red';

    }

    else if(month > 12 || month < 1){
        valid = false;

        MONTH_INPUT.style.border = '1px solid red';
        ERROR_MONTH.innerHTML = "Enter valid <br class='linebreak'>  Month";
        ERROR_MONTH.style.display = 'block';
        MONTH_LABEL.style.color = 'red';

    }
    if(year == ''){
        valid = false;

        YEAR_INPUT.style.border = '1px solid red';
        ERROR_YEAR.innerHTML = "This field is <br class='linebreak'>  required";
        ERROR_YEAR.style.display = 'block';
        YEAR_LABEL.style.color = 'red';

    }

    else if(year > today.getFullYear()){
        valid = false;

        YEAR_INPUT.style.border = '1px solid red';
        ERROR_YEAR.innerHTML = "Enter valid <br class='linebreak'>  Year";
        ERROR_YEAR.style.display = 'block';
        YEAR_LABEL.style.color = 'red';

    }

    if(year == today.getFullYear() && month > today.getMonth()+1){
        valid = false;

        MONTH_INPUT.style.border = '1px solid red';
        ERROR_MONTH.innerHTML = "Enter valid <br class='linebreak'>  Month";
        ERROR_MONTH.style.display = 'block';
        MONTH_LABEL.style.color = 'red';

    }


    return valid;
}