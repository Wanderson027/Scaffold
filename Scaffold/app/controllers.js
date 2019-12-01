(function() {
    'use strict';
    var bibliotecaApp = angular.module("bibliotecaApp");
    bibliotecaApp.controller('cadastrarLivrosController', cadastrarLivrosController);

    cadastrarLivrosController.$inject = ['$scope'];

    function cadastrarLivrosController($scope) {
        var vm = this;
        vm.index = -1;
        vm.livro = {};

        vm.livros = [{
            titulo: "Flatulente",
            autor: "Wanderson",
            editora: "poup cannon",
            data: "25-09-1995",
            genero: "indefinido",
            valor: "69,00",

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

    }
}());