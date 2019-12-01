(function() {
    'use strict';
    var bibliotecaApp = angular.module("bibliotecaApp");
    bibliotecaApp.controller('cadastrarLivrosController', cadastrarLivrosController);

    cadastrarLivrosController.$inject = ['$scope'];

    function cadastrarLivrosController($scope) {
        var vm = this;
        vm.index = -1;
        vm.livro = {};

        vm.livro = [{
            titulo: "",
            autor: "",
            editora: "",
            data: "",
            genero: "",
            valor: "",

        }];


        vm.adicionarLivros = function() {
            console.log(vm.livro);
            if (vm.index === -1) {
                vm.livro.push(vm.livro);
            } else {
                vm.livro[vm.index] = vm.livro;
            }

            vm.livro = {};
            vm.index = -1;
        };
        vm.editarLivros = function(item) {
            vm.livro = angular.copy(vm.livro[item]);
            vm.index = item;
        };
        vm.deletarLivros = function(item) {
            vm.livro.splice(item, 1);
        };

    }
}());