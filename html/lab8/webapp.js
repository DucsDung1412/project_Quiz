var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "home.html",
        controller: "homeCtr"
    }).when("/about", {
        templateUrl: "about.html",
        controller: "aboutCtr"
    }).when("/contact", {
        templateUrl: "contact.html",
        controller: "contactCtr"
    }).when("/feedback", {
        templateUrl: "feedback.html",
        controller: "feedbackCtr"
    }).when("/faq", {
        templateUrl: "faq.html",
        controller: "faqCtr"
    }).when("/account/:name", {
        templateUrl: "account.html",
        controller: "accountCtr"
    }).when("/category/:name", {
        templateUrl: "productList.html",
        controller: "categoryCtr"
    }).when("/supplier/:name", {
        templateUrl: "productList.html",
        controller: "supplierCtr"
    }).when("/special/:name", {
        templateUrl: "productList.html",
        controller: "specialCtr"
    }).when("/viewcart", {
        templateUrl: "viewcart.html",
        controller: "viewcartCtr"
    })
    
})

app.controller("homeCtr", function($scope){
    $scope.msg = "TRANG CHỦ"
})
app.controller("aboutCtr", function($scope){
    $scope.msg = "GIỚI THIỆU"
})
app.controller("contactCtr", function($scope){
    $scope.msg = "LIÊN HỆ"
})
app.controller("feedbackCtr", function($scope){
    $scope.msg = "GÓP Ý"
})
app.controller("faqCtr", function($scope){
    $scope.msg = "CÂU HỎI"
})
app.controller("accountCtr", function($scope, $routeParams){
    $scope.msg = $routeParams.name
})
app.controller("categoryCtr", function($scope, $routeParams){
    $scope.msg = "CATEGORY MANAGER"
     $scope.name = $routeParams.name
})
app.controller("supplierCtr", function($scope, $routeParams){
    $scope.msg = "SUPPLIER MANAGER"
     $scope.name = $routeParams.name
})
app.controller("specialCtr", function($scope, $routeParams){
    $scope.msg = "SPECIAL MANAGER"
     $scope.name = $routeParams.name
})
app.controller("viewcartCtr", function($scope, $routeParams){
    $scope.msg = "VIEW CARD"
})

app.run(function($rootScope){
    $rootScope.$on("$routeChangeStart", function(){
        $rootScope.loading = true;
    })
    $rootScope.$on("$routeChangeSuccess", function(){
        $rootScope.loading = false;
    })
    $rootScope.$on("$routeChangeError", function(){
        $rootScope.loading = false;
        alert("Lỗi, không tải được template");
    })
})