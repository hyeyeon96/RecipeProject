/*var user_id = document.getElementById("user_id");
user_id.addEventListener(
    "input", validateUserId
    );
    
function validateUserId(e){
    var userId = user_id.value
    console.log(e.target.value);
    if
}*/

// ==========아이디 유효성 검사==================

const userIdInput = document.getElementById("user_id");
const userIdValidation = document.getElementById("user_id-validation");

userIdInput.addEventListener('input', validateUserId);

function validateUserId(){
    var userId = userIdInput.value;
    var blank_pattern = /[\s]/g;
    var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;    

    if (userId.length < 6){
        userIdValidation.textContent = '아이디는 6자 이상이어야 합니다.';
        return false;
    } else if (special_pattern.test(userId) === true){
        userIdValidation.textContent = '특수문자는 사용할 수 없습니다.';
        return false;
    } else if (blank_pattern.test(userId) === true){
        userIdValidation.textContent = '공백은 사용할 수 없습니다.';
    } else if (userId = null){
        userIdValidation.textContent = '아이디는 필수입력 입니다.';
    } else {
        userIdValidation.textContent = '';
        console.log("통과");
        return true;        
    }

}

function id_overlap_check(){
    //아직 백앤드랑 연동을 못함
}

// ==========비밀번호 유효성 검사===========

const userPwInput = document.getElementById("user_pw");
const userPwValidation = document.getElementById("user_pw-validation");

userPwInput.addEventListener('input', validateUserPw);

function validateUserPw(){

    var pw = userPwInput.value;
    var id = userIdInput.value; //아이디 유효성 검사에서 따옴
    var checkNumber = pw.search(/[0-9]/g);
    var checkEnglish = pw.search(/[a-z]/ig);
 
    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)){
        userPwValidation.textContent = '숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.';
        return false;            
    }else if(checkNumber <0 || checkEnglish <0){
        userPwValidation.textContent = '숫자와 영문자를 혼용하여야 합니다.';
        return false;
    }else if(/(\w)\1\1\1/.test(pw)){
        userPwValidation.textContent = '같은 문자를 4번 이상 사용하실 수 없습니다.';
        return false;
    }else if(pw.search(id) > -1){
        userPwValidation.textContent = '비밀번호에 아이디가 포함되었습니다.';
        return false;
    }else {
        userPwValidation.textContent = '';
        console.log("통과");
        return true;    
    }
}

// ==========비밀번호 확인===========

const userPwCheckInput = document.getElementById("user_pw_check");
const userPwCheckValidation = document.getElementById("pw_same-validation");
userPwCheckInput.addEventListener('input', PwCheck);

function PwCheck(){
    //console.dir(document.getElementById("user_pw"));
    //console.dir(document.getElementById("user_pw_check"));    

    var pw1 = userPwInput.value;
    var pw2 = userPwCheckInput.value;

    if(pw1 == false){
        userPwCheckValidation.textContent = '비밀번호를 먼저 입력하세요.'
        return false;        
    }else if(pw1 == pw2){
        userPwCheckValidation.textContent = '비밀번호가 일치합니다.'
        return true;    
    }else{
        userPwCheckValidation.textContent = '비밀번호가 일치하지 않습니다.'
        return false;
    }       
}

// ===============이름 입력================

const userNameCheckInput = document.getElementById("user_name");
const userNameCheckValidation = document.getElementById("user_name-validation");
userNameCheckInput.addEventListener('input', NameCheck);

function NameCheck(){

    var name = userNameCheckInput.value
    
    if(name == null){
        userNameCheckValidation.textContent = '이름을 입력하세요'
        return false;
    } else{
        userNameCheckValidation.textContent = ''
        return true;
    }
}

// ===============생일 입력===================

//년도 입력

const userYearCheckInput = document.getElementById("birth-year");
const userMonthCheckInput = document.getElementById("birth-month");
const userDayCheckInput = document.getElementById("birth-day");
const userBirthCheckValidation = document.getElementById("user_birth-validation");

userYearCheckInput.addEventListener('input', BirthCheck);
userMonthCheckInput.addEventListener('input', BirthCheck);
userDayCheckInput.addEventListener('input', BirthCheck);

function BirthCheck(){

    var year = userYearCheckInput.value
    var month = userMonthCheckInput.value
    var day = userDayCheckInput.value

    //년도 조건
    function YearCheck(){
        if(year.length != 4){
            userBirthCheckValidation.textContent = '년도는 4자리 입니다'
            return false;
        }else if(year < 1920 || year > 2023){
            userBirthCheckValidation.textContent = '1920년과 2023년 사이여야 합니다.'
            return false;
        }else{
            userBirthCheckValidation.textContent = ''
            return true;
        }
    }

    //월 조건
    function MonthCheck(){
        if(month.length != 2){
            userBirthCheckValidation.textContent = '월은 2자리 입니다 ex) 1월의 경우 01이라고 입력해주세요'
            return false;
        }else if(month < 1 || month > 12){
            userBirthCheckValidation.textContent = '01월과 12월 사이여야 합니다.'
            return false;
        }else{
            userBirthCheckValidation.textContent = ''
            return true;
        }
    }

    //일 조건
    function DayCheck(){
        if(day.length != 2){
            userBirthCheckValidation.textContent = '일은 2자리 입니다 ex) 1일의 경우 01이라고 입력해주세요'
            return false;
        }else if(day < 1 || day > 31){
            userBirthCheckValidation.textContent = '01일과 31일 사이여야 합니다.'
            return false;
        }else{
            userBirthCheckValidation.textContent = ''
            return true;
        }
    }

    //윤년과 30일 달
    function Month_DayCheck(){
        if (month == 2 ){
            if (year%4 == 0){
                if (day > 29){
                    userBirthCheckValidation.textContent = '해당년도의 2월은 29일까지 입니다.'
                    return false
                }else {
                    userBirthCheckValidation.textContent = ''
                    return true
                }
            }else{
                if (day > 28){
                    userBirthCheckValidation.textContent = '해당년도의 2월은 28일까지 입니다.'
                    return false
                }else {
                    userBirthCheckValidation.textContent = ''
                    return true
                }
            }
        }else if (month == 4, 6, 9, 11){
            if (day > 30){
                userBirthCheckValidation.textContent = '해당월은 30일까지 입니다.'
                return false
            }else {
                userBirthCheckValidation.textContent = ''
                return true
            }
        }
    }

    if(YearCheck()==false || MonthCheck()==false || DayCheck()==false || Month_DayCheck()==false){
        return false
    }else{
        return true
    }    
}

//==============전화번호 입력================

const userPhoneCheckInput = document.getElementById("user_phone");
const userPhoneCheckValidation = document.getElementById("user_phone-validation");

userPhoneCheckInput.addEventListener('input', PhoneCheck);

function PhoneCheck() {
    var phone = userPhoneCheckInput.value;  
    var regPhone= /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;
  
    if (regPhone.test(phone) == true) {
        userPhoneCheckValidation.textContent = ''
        return true;
  
    }else{
        userPhoneCheckValidation.textContent = '형식이 알맞지 않습니다.'
        return false;
    }  
}

//==============이메일 유효성 검사==================

const userEmailCheckInput = document.getElementById("email_id");
const userEmailCheckValidation = document.getElementById("user_email-validation");

userEmailCheckInput.addEventListener('input', EmailCheck);

function EmailCheck(){

    var email = userEmailCheckInput.value;
    var regEmail =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (regEmail.test(email)==true){
        userEmailCheckValidation.textContent = ''
        return true;
    }else{
        userEmailCheckValidation.textContent = '이메일 형식이 알맞지 않습니다.'
        return false;
    }
}

//==============가입완료 버튼==================

function JoinCommit(){
    if(validateUserId() == false || validateUserPw() == false || PwCheck() == false 
    || NameCheck() == false || BirthCheck() == false || PhoneCheck() == false || EmailCheck() == false){
        alert("입력방식이 올바르지 않은 형식이 있습니다.");
        return false
    }else{
        return true
    }
}