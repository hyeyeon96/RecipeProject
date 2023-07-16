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
        return true;        
    }else if(pw1 == pw2){
        userPwCheckValidation.textContent = '비밀번호가 일치합니다.'
        return false;    
    }else{
        userPwCheckValidation.textContent = '비밀번호가 일치하지 않습니다.'
        return false;
    }       
}

// ===============이름 입력================

const userNameInput = document.getElementById("user_pw_check");