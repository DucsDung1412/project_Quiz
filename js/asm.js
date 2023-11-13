var timer;

document.querySelector("#startQz").onclick = function(){
    document.querySelector(".homeStart").classList.add("d-none");
    document.querySelector(".main").classList.add("mainStart");
    document.querySelector(".element-footer").classList.remove("d-none");
    document.querySelector(".element-body").classList.remove("d-none");
}

document.querySelector("#home").onclick = function(){
    document.querySelector(".main").classList.remove("mainStart");
    setTimeout(function(){
        document.querySelector(".myProfile").classList.add("d-none");
        document.querySelector(".element-body").classList.add("d-none");
        try {
            document.querySelector(".element-body_info").classList.add("d-none");
        } catch (error) {
        }
        document.querySelector(".homeStart").classList.remove("d-none");   
        document.querySelector(".element-footer").classList.add("d-none"); 
    }, 500)
}

document.querySelector(".change-info").onclick = function(){
    // document.querySelector(".element-body").classList.add("d-none");
    document.querySelector(".element-body_info").classList.remove("d-none");
    document.querySelector(".element-body_info").classList.add("quiz-box-animation");
}

document.querySelector(".btn-login").onclick = function(){
    document.querySelector(".modal-singIn").classList.add("active");
    document.querySelector(".modal-singUp").classList.remove("active");
    document.querySelector(".tab-singIn").classList.add("show");
    document.querySelector(".tab-singUp").classList.remove("show");
    document.querySelector(".tab-singIn").classList.add("active");
    document.querySelector(".tab-singUp").classList.remove("active");
}

document.querySelector(".forgot").onclick = function(){
    document.querySelector(".main").classList.add("mainStart");
    document.querySelector(".homeStart").classList.add("d-none");
    document.querySelector(".element-body").classList.add("d-none");
    document.querySelector(".element-footer").classList.remove("d-none");
    document.querySelector(".myProfile").classList.remove("d-none");
    document.querySelector(".myProfileOwn").classList.add("d-none");
    document.querySelector(".myForgotPassWord").classList.remove("d-none");
    try {
        document.querySelector(".viewNG").classList.add("d-none");
    } catch (error) {

    }
}

document.querySelector(".btn-SignInErr2").onclick = function(){
    alert("Sai tai khoan hoac mat khau")
}

document.querySelector(".btn-SignInSucc").onclick = function(){
    document.querySelector(".login-active").classList.remove("d-none");
    document.querySelector(".nav-btn").classList.add("d-none");
    document.querySelector(".nav-btn").classList.remove("quiz-box-animation");
    document.querySelector(".login-active").classList.add("quiz-box-animation");
    if(document.querySelector(".myForgotPassWord").classList.length < 5){
        document.querySelector(".myForgotPassWord").classList.add("d-none");
        document.querySelector(".myProfileOwn").classList.remove("d-none");
        document.querySelector(".profile_setting").classList.remove("d-none");
    }
    alert("Dang nhap thanh cong")
}

document.querySelector(".btn-profile").onclick = function(){
    document.querySelector(".main").classList.add("mainStart");
    document.querySelector(".homeStart").classList.add("d-none");
    document.querySelector(".element-body").classList.add("d-none");
    document.querySelector(".myProfile").classList.remove("d-none");
    document.querySelector(".element-footer").classList.remove("d-none");
    document.querySelector(".myForgotPassWord").classList.add("d-none");
    document.querySelector(".myProfileOwn").classList.remove("d-none");
    document.querySelector(".profile_setting").classList.remove("d-none");
    document.querySelector(".change_passowrd").classList.add("d-none");
    try {
        document.querySelector(".viewNG").classList.add("d-none");
    } catch (error) {

    }
}

document.querySelectorAll(".btn-out").forEach(function(element){
    element.onclick = function(){
        document.querySelector(".login-active").classList.add("d-none");
        document.querySelectorAll(".nav-btn").forEach(function(element){
            element.classList.remove("d-none");
            element.classList.add("quiz-box-animation");
        })
        document.querySelector(".login-active").classList.remove("quiz-box-animation");
        if(document.querySelector(".myProfile").classList.length < 6){
            document.querySelector(".main").classList.remove("mainStart");
            setTimeout(function(){
                document.querySelector(".myProfile").classList.add("d-none");
                document.querySelector(".profile_setting").classList.add("d-none");
                document.querySelector(".change_passowrd").classList.add("d-none");
                document.querySelector(".element-body").classList.add("d-none");
                try {
                    document.querySelector(".element-body_info").classList.add("d-none");
                } catch (error) {
                }
                document.querySelector(".homeStart").classList.remove("d-none");   
                document.querySelector(".element-footer").classList.add("d-none"); 
            }, 500)
        }
    }
})

document.querySelectorAll(".btn_profile").forEach(function(element){
    element.onclick = function(){
        document.querySelector(".main").classList.add("mainStart");
        document.querySelector(".homeStart").classList.add("d-none");
        document.querySelector(".element-body").classList.add("d-none");
        document.querySelector(".myProfile").classList.remove("d-none");
        document.querySelector(".element-footer").classList.remove("d-none");
        document.querySelector(".myForgotPassWord").classList.add("d-none");
        document.querySelector(".myProfileOwn").classList.remove("d-none");
        document.querySelector(".profile_setting").classList.remove("d-none");
        document.querySelector(".change_passowrd").classList.add("d-none");
        try {
            document.querySelector(".viewNG").classList.add("d-none");
        } catch (error) {
    
        }
    }
})  

document.querySelectorAll(".btn_changePassowrd").forEach(function(element){
    element.onclick = function(){
        document.querySelector(".main").classList.add("mainStart");
        document.querySelector(".homeStart").classList.add("d-none");
        document.querySelector(".element-body").classList.add("d-none");
        document.querySelector(".myProfile").classList.remove("d-none");
        document.querySelector(".element-footer").classList.remove("d-none");
        document.querySelector(".myForgotPassWord").classList.add("d-none");
        document.querySelector(".myProfileOwn").classList.remove("d-none");
        document.querySelector(".profile_setting").classList.add("d-none");
        document.querySelector(".change_passowrd").classList.remove("d-none");
        try {
            document.querySelector(".viewNG").classList.add("d-none");
        } catch (error) {
    
        }
        document.querySelector(".new-password").value = ""
        document.querySelector(".confirm-password").value = ""
    }
})  
    
document.querySelectorAll(".fa-eye").forEach(function(element){
    element.onclick = function(){
        element.parentElement.querySelector(".fa-eye-slash").classList.remove("d-none");
        element.classList.add("d-none");
        element.parentElement.parentElement.querySelector("input").type = "text";
    }
})

document.querySelectorAll(".fa-eye-slash").forEach(function(element){
    element.onclick = function(){
        element.parentElement.querySelector(".fa-eye").classList.remove("d-none");
        element.classList.add("d-none");
        element.parentElement.parentElement.querySelector("input").type = "password";
    }
})

document.querySelector(".modal-singIn").onclick = function(){
    document.querySelector(".btn-SignInErr2").classList.add("d-none");
	document.querySelector(".btn-SignInSucc").classList.add("d-none");
    document.querySelector(".btn-SignInErr1").classList.remove("d-none");
    document.querySelector(".tab-singIn").querySelectorAll(".form-control").forEach(function(element){
        element.value = "";
    })
    document.querySelector(".tab-singIn").querySelectorAll(".invalid-feedback").forEach(function(element){
        element.innerHTML = "  ";
    })
}

document.querySelector(".modal-singUp").onclick = function(){
    document.querySelector(".btn-signUpErr").classList.remove("d-none");
	document.querySelector(".btn-signUpSucc").classList.add("d-none");
    document.querySelector(".tab-singUp").querySelectorAll(".form-control").forEach(function(element){
        element.value = "";
    })
    document.querySelector(".tab-singUp").querySelectorAll(".invalid-feedback").forEach(function(element){
        element.innerHTML = "  ";
    })
}

// Angular
var app = angular.module("myApp", ["ngRoute"]);
app.controller("controllerCourse", function($scope, $rootScope){
    $rootScope.numQ = 0;

    $rootScope.nextQuestion = function(){
        $rootScope.isSelected = true;
        if($rootScope.numQ >= $rootScope.course.listQuestion.length - 1){
            console.log("zo day")
            document.querySelector(".quiz-box ").classList.add("d-none");
            document.querySelector(".result-box").classList.add("quiz-box-animation");
            document.querySelector(".result-box").classList.remove("d-none");
            clearInterval(timer);
            document.querySelector(".time-out").innerHTML = document.querySelector(".time-out").id;

            var circularProgress = document.querySelector(".circular-progress");
            var progressValue = document.querySelector(".progress-value");
            var progressStartValue = -1;
            var progressEndValue = ($rootScope.score /  $rootScope.course.listQuestion.length) * 100;
            var speed = 20;
            var progress = setInterval(function(){
                progressStartValue++;

                progressValue.textContent = `${progressStartValue}%`
                  
                circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`

                if(progressStartValue == progressEndValue){
                    clearInterval(progress);
                }
            }, speed)
        } else {
            $rootScope.numQ = $rootScope.numQ + 1;
        }
    }

    $rootScope.btnTryAgain = function(){
        $rootScope.numQ = 0;
        $rootScope.score = 0;
        document.querySelector(".quiz-box ").classList.remove("d-none");
        document.querySelector(".result-box").classList.remove("quiz-box-animation");
        document.querySelector(".result-box").classList.add("d-none");

        document.querySelectorAll(".option ").forEach(function(element){
            element.classList.remove("isCorrect");
            element.classList.remove("inCorrect");
            element.classList.remove("correct");
        })

        var countDownEl = document.querySelector(".time-out");
        var startingMinutes = Number.parseInt(countDownEl.id.slice(0, countDownEl.id.indexOf(":")));
        var second = Number.parseInt(countDownEl.id.slice(countDownEl.id.indexOf(":") + 1));
        var time = startingMinutes * 60 + second;
        timer = setInterval(function (){
            var minutes = Math.floor(time / 60);
            var seconds = time % 60;
            
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            
            if(time < 0){
                clearInterval(timer);
                $rootScope.isSelected = true;
                $rootScope.numQ = $rootScope.course.listQuestion.length;
                $rootScope.nextQuestion();
                document.querySelector(".quiz-box ").classList.add("d-none");
                document.querySelector(".result-box").classList.add("quiz-box-animation");
                document.querySelector(".result-box").classList.remove("d-none");
                countDownEl.innerHTML = countDownEl.id;
            } else {
                countDownEl.innerHTML = `${minutes}:${seconds}`;
            }
            time--;
        }, 1000);
    }

    $rootScope.btnGoHome = function() {
        $rootScope.numQ = 0;
        $rootScope.score = 0;
        document.querySelector(".container-change").classList.remove("container-changee");
        document.querySelector(".quiz-section-temp").classList.remove("d-none");
        document.querySelector(".quiz-section").classList.add("d-none");
        document.querySelector(".result-box").classList.remove("quiz-box-animation");
        document.querySelector(".quiz-box").classList.remove("d-none");
        document.querySelector(".result-box").classList.add("d-none");
        document.querySelector(".app").classList.remove("d-none");
        document.querySelector(".main").classList.remove("mainStart");
        document.querySelector(".element-body").classList.add("d-none");
        document.querySelector(".element-body_info").classList.add("d-none");
        document.querySelector(".homeStart").classList.remove("d-none");   
        document.querySelector(".element-footer").classList.add("d-none");

        document.querySelectorAll(".option ").forEach(function(element){
            element.classList.remove("isCorrect");
            element.classList.remove("inCorrect");
            element.classList.remove("correct");
        })
    }
    
    $rootScope.isSelected = true;
    $rootScope.score = 0;
    $rootScope.checkAnswer = function(index, option){
        document.querySelectorAll(".option").forEach(function(element){
            element.classList.add("isCorrect");
            if(element.innerText === $rootScope.course.listQuestion[index].options[option]){
                if(element.innerText !== $rootScope.course.listQuestion[index].answer){
                    element.classList.remove("isCorrect");
                    element.classList.add("inCorrect");
                } else {
                    $rootScope.score = $rootScope.score + 1;
                }
            }
            if(element.innerText === $rootScope.course.listQuestion[index].answer){
                element.classList.remove("isCorrect");
                element.classList.add("correct");
            }
        })
        $rootScope.isSelected = false
        document.querySelector(".next-btn").classList.add("active");
    }

    $scope.badges = [
        "Beginner"
        ,"All level"
    ]

    $scope.listCourse = [
        {
             image: "https://eduport.webestica.com/assets/images/courses/4by3/02.jpg"
            ,badge: $scope.badges[0]
            ,heart: "fa-solid"
            ,heart_color: "text-danger"
            ,title: "Graphic Design Masterclass"
            ,describe: "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms."
            ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fas fa-star-half-alt",
                "4.5/5.0"
            ]
            ,time: "00m10"
            ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 1"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 1"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
        }
        ,{
             image: "https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
            ,badge: $scope.badges[1]
            ,heart: "fa-regular"
            ,heart_color: "text-dark fw-bold"
            ,title: "Sketch from A to Z: for app designer"
            ,describe: "Proposal indulged no do sociable he throwing settling."
            ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-regular fa-star",
                "4.0/5.0"
            ]
            ,time: "56m"
            ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 3"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 3"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
        }
        ,{
            image: "https://eduport.webestica.com/assets/images/courses/4by3/03.jpg"
           ,badge: $scope.badges[0]
           ,heart: "fa-regular"
           ,heart_color: "text-dark fw-bold"
           ,title: "Create a Design System in Figma"
           ,describe: "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end."
           ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fas fa-star-half-alt",
                "4.5/5.0"
           ]
           ,time: "56m"
           ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 4"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 4"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
       }
        ,{
            image: "https://eduport.webestica.com/assets/images/courses/4by3/07.jpg"
           ,badge: $scope.badges[0]
           ,heart: "fa-solid"
           ,heart_color: "text-danger"
           ,title: "Deep Learning with React-Native"
           ,describe: "Far advanced settling say finished raillery. Offered chiefly farther."
           ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-regular fa-star",
                "4.0/5.0"
           ]
           ,time: "56m"
           ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 5"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 5"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
       }
       ,{
             image: "https://eduport.webestica.com/assets/images/courses/4by3/11.jpg"
            ,badge: $scope.badges[1]
            ,heart: "fa-solid"
            ,heart_color: "text-danger"
            ,title: "Build Responsive Websites with HTML"
            ,describe: "Far advanced settling say finished raillery. Offered chiefly farther."
            ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-regular fa-star",
                "4.0/5.0"
            ]
            ,time: "56m"
            ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 6"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 6"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
        }
       ,{
             image: "https://eduport.webestica.com/assets/images/courses/4by3/12.jpg"
            ,badge: $scope.badges[0]
            ,heart: "fa-regular"
            ,heart_color: "text-dark fw-bold"
            ,title: "Build Websites with CSS"
            ,describe: "Far advanced settling say finished raillery. Offered chiefly farther."
            ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fas fa-star-half-alt",
                "4.5/5.0"
            ]
            ,time: "56m"
            ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 7"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 7"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
        }
        ,{
            image: "https://eduport.webestica.com/assets/images/courses/4by3/04.jpg"
           ,badge: $scope.badges[1]
           ,heart: "fa-solid"
           ,heart_color: "text-danger"
           ,title: "Learn Invision"
           ,describe: "Arrived off she elderly beloved him Course regard to up he hardly."
           ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fas fa-star-half-alt",
                "fa-regular fa-star",
                "3.5/5.0"
           ]
           ,time: "56m"
           ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 8"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 8"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
       }
       ,{
             image: "https://eduport.webestica.com/assets/images/courses/4by3/09.jpg"
            ,badge: $scope.badges[0]
            ,heart: "fa-regular"
            ,heart_color: "text-dark fw-bold"
            ,title: "JavaScript: Full Understanding"
            ,describe: "Far advanced settling say finished raillery. Offered chiefly farther."
            ,star: [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "5.0/5.0"
            ]
            ,time: "56m15"
            ,listQuestion: [
                {
                    numb: 1
                    ,question: "Hello 9"
                    ,answer: "C. Hello Hello"
                    ,options: [
                        "A. Hello la Helo"
                        ,"B. Hello is Helo"
                        ,"C. Hello Hello"
                        ,"D. Solo yasuo?"
                    ]
                }
                ,{
                    numb: 2
                    ,question: "Bye 9"
                    ,answer: "C. Bye Bye"
                    ,options: [
                        "A. Bye la bey"
                        ,"B. Bye is bey"
                        ,"C. Bye Bye"
                        ,"D. Solo leesin?"
                    ]
                }
            ]
        }
    ]

    $rootScope.listCourse = $scope.listCourse;

    $scope.page = 0;
    $scope.changePage = function(value){
        $scope.page = $scope.listCourse.length - ($scope.listCourse.length - (value-1)*3)
    }

    $scope.first = 1;
    $scope.last = function(){
        var j = 0;
        for(var i = 0; i < $scope.listCourse.length; i++){
            if(i <= ($scope.listCourse.length + 1) / 3 && i != 0){
                j = i;
            }
        }
        return j;
    }
})

app.config(function($routeProvider){
    var listRoutes = [];

    for(var i = 0 ; i < 9; i++){
        var obj = {id: "/" + i + "/:id", templateUrl: "homecopy.html", controller: i + "Ctr"}
        listRoutes.push(obj);
    }

    listRoutes.forEach(function(route){
        $routeProvider.when(route.id, {
            templateUrl: route.templateUrl,
            controller: route.controller
        })
    })
})

for(var i = 0 ; i < 9; i++){
    var ctr = i + "Ctr"
    app.controller(ctr, function($scope, $routeParams, $rootScope){
        document.querySelector(".element-body").classList.add("d-none");
        $scope.title = $rootScope.listCourse[(Number.parseInt($routeParams.id))].title;
        $scope.badge = $rootScope.listCourse[(Number.parseInt($routeParams.id))].badge;
        $scope.question = $rootScope.listCourse[(Number.parseInt($routeParams.id))].listQuestion.length;
        $scope.time = $rootScope.listCourse[(Number.parseInt($routeParams.id))].time;
    })
}

app.controller("controllerSI", function($scope, $rootScope, $http){
    $scope.listStudent = [];
    $http.get("http://localhost:3000/student").then(function(response) {
        $scope.listStudent = response.data;
    })      
    
    $scope.onBlur = function(){
        $http.get("http://localhost:3000/student").then(function(response) {
            $scope.listStudent = response.data;
            for(var i = 0; i < $scope.listStudent.length; i++){
                // console.log($scope.listStudent[i].email + ": " + $scope.listStudent[i].password + " / " + $scope.password);
                if($scope.listStudent[i].email === $scope.email && $scope.listStudent[i].password == $scope.password){
                    if(document.querySelector(".btn-SignInErr1").classList.contains("d-none")){
                        document.querySelector(".btn-SignInErr2").classList.add("d-none");
                    } else {
                        document.querySelector(".btn-SignInErr2").classList.add("d-none");
                    }
                    document.querySelector(".btn-SignInSucc").classList.remove("d-none");
                    
                    $rootScope.student = {
                        "id": $scope.listStudent[i].id,
                        "email": $scope.listStudent[i].email,
                        "password": $scope.listStudent[i].password,
                        "profile": {
                            "fullname": $scope.listStudent[i].profile.fullname,
                            "username": $scope.listStudent[i].profile.username
                          }
                    };
                    break;
                } else {
                    if(document.querySelector(".btn-SignInErr1").classList.contains("d-none")){
                        document.querySelector(".btn-SignInErr2").classList.remove("d-none");
                    }
                    document.querySelector(".btn-SignInSucc").classList.add("d-none");
                }
            }
        }) 
    }
})

app.controller("controllerSU", function($scope, $rootScope, $http){
    $scope.listStudent = [];
    $http.get("http://localhost:3000/student").then(function(response) {
        $scope.listStudent = response.data;
    })  

    $scope.checkStudent = function(){
        $scope.checkExist = false;
        for(var i = 0; i < $scope.listStudent.length; i++){
            if($scope.listStudent[i].email === $scope.email){
                alert("Ton tai r");
                $scope.checkExist = true;
                break;
            }
        }
        var n = 0;
        document.querySelector("#signup-tab").querySelectorAll(".form-control").forEach(function(element){
            if(element.value === ""){
                n++ ;
            }
        })

        if(!$scope.checkExist && n == 0){
            alert("Thanh cong");
            var student = { 
                            "id": new Date(), 
                            "email": $scope.email, 
                            "password": $scope.password,
                            "profile": {
                                        "fullname": $scope.fullname,
                                        "username": ""
                                        }
                            }
            $http.post("http://localhost:3000/student", student).then(function() {
                $http.get("http://localhost:3000/student").then(function(response) {
                    $scope.listStudent = response.data;
                }) 
            })  
        }
    }
})

app.controller("quiz", function($scope, $rootScope){
    $scope.startQ = function(){
        $scope.minute = Number.parseInt(document.querySelector(".time_Quiz").innerHTML.slice(0, document.querySelector(".time_Quiz").innerHTML.indexOf("m")));
        $scope.minute = $scope.minute < 10 ? "0" + $scope.minute : $scope.minute;

        if(document.querySelector(".time_Quiz").innerHTML.slice(document.querySelector(".time_Quiz").innerHTML.indexOf("m")+1).length > 0){
            $scope.second = Number.parseInt(document.querySelector(".time_Quiz").innerHTML.slice(document.querySelector(".time_Quiz").innerHTML.indexOf("m")+1));
            $scope.second = $scope.second < 10 ? "0" + $scope.second : $scope.second;
        } else {
            $scope.second = "00";
        }

        $rootScope.timeQuiz = $scope.minute + ":" + $scope.second;

        $rootScope.listCourse.forEach(function(course){
            if(course.title === document.querySelector(".title_info").innerText){
                $rootScope.course = course;
            }
        }) 

        document.querySelector(".container-change").classList.remove("d-none");
        document.querySelector("body").classList.add("appActive");
        document.querySelector(".container-change").classList.add("container-changee");
        document.querySelector(".quiz-section-temp").classList.remove("d-none");
        setTimeout(function(){
            document.querySelector(".quiz-section-temp").classList.add("d-none");
            document.querySelector(".quiz-box").classList.add("quiz-box-animation");
            document.querySelector(".quiz-section").classList.remove("d-none");
            document.querySelector(".app").classList.add("d-none");
            document.querySelector("body").classList.remove("appActive");
    
            var countDownEl = document.querySelector(".time-out");
            var startingMinutes = Number.parseInt(countDownEl.id.slice(0, countDownEl.id.indexOf(":")));
            var second = Number.parseInt(countDownEl.id.slice(countDownEl.id.indexOf(":") + 1));
            var time = startingMinutes * 60 + second;
            document.querySelector(".time-out").innerHTML = $rootScope.timeQuiz;
            timer = setInterval(function (){
                var minutes = Math.floor(time / 60);
                var seconds = time % 60;
                
                seconds = seconds < 10 ? '0' + seconds : seconds;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                
                if(time < 0){
                    clearInterval(timer);
                    $rootScope.isSelected = true;
                    $rootScope.numQ = $rootScope.course.listQuestion.length;
                    $rootScope.nextQuestion();
                    countDownEl.innerHTML = countDownEl.id;
                } else {
                    countDownEl.innerHTML = `${minutes}:${seconds}`;
                }
                time--;
            }, 1000);
        }, 900);
    }
})

app.controller("settingPassword", function($scope, $rootScope, $http){
    $scope.changePassWord = function(){
        if(document.querySelector(".new-password").value === document.querySelector(".confirm-password").value && document.querySelector(".new-password").value !== ""){
            $scope.listStudent = [];
            $http.get("http://localhost:3000/student").then(function(response) {
                $scope.listStudent = response.data;
                $scope.listStudent.forEach(function(student){
                    if(student.email === $rootScope.student.email){
                        student.password = document.querySelector(".new-password").value;
                        $http.put("http://localhost:3000/student/"+student.id, student).then(function(){
                            $http.get("http://localhost:3000/student").then(function(response) {
                                $scope.listStudent = response.data;
                            })
                        })
                    }
                })
            })
            alert("Doi password thanh cong");
            $http.get("http://localhost:3000/student").then(function(response) {
                $scope.listStudent.forEach(function(student){
                    if(student.email === $rootScope.student.email){
                        console.log($rootScope.student.password + " = " + student.password)
                        $rootScope.student.password = student.password;
                    }
                })
                document.querySelector(".new-password").value = ""
                document.querySelector(".confirm-password").value = ""
            })
            
        } else {
            alert("Doi mat khau that bai");
        }
    }
})

app.controller("controllerForgotPassword", function($scope, $http){
    $scope.getPassword = function(){
        $scope.listStudent = [];
        $http.get("http://localhost:3000/student").then(function(response) {
            $scope.listStudent = response.data;
            $scope.listStudent.forEach(function(student){
                if(student.email === document.querySelector(".email-forgot").value){
                    alert("Password: " + student.password);
                }
            })
        })
    }
})

app.controller("updateProfile", function($scope, $rootScope, $http){
    $scope.btnUpdateProfile = function(){
        $scope.listStudent = [];
        $http.get("http://localhost:3000/student").then(function(response){
            $scope.listStudent = response.data;
            $scope.listStudent.forEach(function(student){
                if(student.email === $rootScope.student.email){
                    student.profile.fullname = document.querySelector("#profile-name").value;
                    student.profile.username = document.querySelector("#profile-username").value;
                    $http.put("http://localhost:3000/student/"+student.id, student).then(function(){
                        $http.get("http://localhost:3000/student").then(function(response) {
                            $scope.listStudent = response.data;
                        })
                    })
                    alert("Thanh cong");
                    $http.get("http://localhost:3000/student").then(function(response) {
                        $scope.listStudent.forEach(function(student){
                            if(student.email === $rootScope.student.email){
                                $rootScope.student.profile.username = student.profile.username;
                                $rootScope.student.profile.fullname = student.profile.fullname;
                            }
                        })
                    })
                } 
            })
        })
        
    }
})