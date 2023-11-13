document.querySelector("#startQuiz").onclick = function(){
    document.querySelector(".container-change").classList.remove("d-none");
    document.querySelector("body").classList.add("appActive");
    setTimeout(function(){
        document.querySelector("#app").classList.add("d-none");
        document.querySelector("body").classList.remove("appActive");
        document.querySelector(".quiz-box").classList.remove("d-none");
    }, 800);
    document.querySelector(".container-change").classList.add("container-changee");
}