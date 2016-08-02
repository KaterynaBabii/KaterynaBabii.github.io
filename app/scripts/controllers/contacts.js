myApp.controller("contactController", function ($scope) {
    // $scope.location = "Lviv, Interesting str, 8";
    // $scope.location = {"address":"Shyroka 1", "city":"Lviv", "province":"Ukraine",},
    // $scope.phone = +380970000000;
    // $scope.email = "email@gmail.com";
    // $scope.busHours = "from 8a.m to 8p.m";
    $scope.contactInfo = [
        {
            "location" : {"description":"Адрес", "city":"Львів", "street":"вул. Центральна 12а", },
            "phones": {"description":"Телефони", "phone1":"+38 (097) 865-72-18", "phone2":"+38 (097) 865-72-18", },
            "contacts": {"description":"Контакти", "email":"email@gmail.com", "skype":"skype", },
            "works": {"description": "Works hours", "workDay": "Понеділок-Пятниця: 9.00-18.00", "weekend": "Субота: 11.00-15.00", "dayoff":"",},
        }, ];
});


