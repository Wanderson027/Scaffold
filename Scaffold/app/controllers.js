(function() {
    'use strict';
    var bibliotecaApp = angular.module("bibliotecaApp");
    bibliotecaApp.controller('cadastrarLivrosController', cadastrarLivrosController);

    cadastrarLivrosController.$inject = ['$scope', '$http'];

    function cadastrarLivrosController($scope, $http) {

        // $scope.message = "alo vc";
        var vm = this;
        var SERVICE_HOST_HTTP = "http://104.167.117.151";

        vm.init = function() {
            vm.listaLivros();
        };



        vm.testService = function() {
            BibliotecaService.test();
        };

        vm.index = -1;
        vm.livro = {};
        vm.livros = [];




        vm.adicionarLivros = function() {
            if (vm.index === -1) {
                vm.livros.push(vm.livro);
                $http.post(SERVICE_HOST_HTTP + '/livros/', vm.livro)
                    .then(
                        function(response) {
                            console.log(response);
                        },
                        function(err) {
                            console.log(err);
                        }
                    );
            } else {
                vm.livros[vm.index] = vm.livros;
            }
            vm.livro = {};
            vm.index = -1;
        };

        vm.listaLivros = function() {
            //$http.get('/someUrl', data, config)
            //.then(successCallback, errorCallback);
            $http.get(SERVICE_HOST_HTTP + '/livros')
                .then(
                    function(response) {
                        vm.livros = response.data.livros;
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        };
        vm.editarLivro = function(item) {
            vm.livro = angular.copy(vm.livros[item]);
            vm.index = item;
        };

        vm.deletarLivro = function(item) {
            vm.livros.splice(item, 1);
        };
        vm.LimparLivro = function(item) {
            vm.livro = {};
            vm.index = -1;
        };

    }
    
  

























    /*function cadastrarLivrosController($scope, $http) {
        var vm = this;
        var SERVICE_HOST_HTTP = "http://104.167.117.151";

        vm.index = -1;
        vm.livro = {};

        vm.livros = [{
            titulo: "",
            autor: "",
            editora: "",
            data: "",
            genero: "",
            valor: "",

        }];


        vm.adicionarLivros = function() {

            if (vm.index === -1) {
                vm.livros.push(vm.livro);
            } else {
                vm.livros[vm.index] = vm.livro;
            }

            vm.livro = {};
            vm.index = -1;
        };
        vm.editarLivros = function(item) {
            vm.livro = angular.copy(vm.livros[item]);
            vm.index = item;
        };
        vm.deletarLivros = function(item) {
            vm.livros.splice(item, 1);
        };

    }*/
}());