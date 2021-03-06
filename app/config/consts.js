(function(){
    angular.module('primeiraApp').constant('consts', {
        appName: 'MEAN - Primeira Aplicação',
        version: '1.0',
        owner: 'Cod3r',
        year: '2019',
        site: 'http://cod3r.com.br',
        apiUrl: 'http://localhost:3003/api',
        oapiUrl: 'http://localhost:3003/oapi',
        userkey: '_primeira_app_user'
    }).run(['$rootScope', 'consts', function($rootScope, consts) {
        $rootScope.consts = consts
    }])
})()