(function() {
    'use strict';
    var bibliotecaApp = angular.module("bibliotecaApp");
    bibliotecaApp.controller('cadastrarLivrosController', cadastrarLivrosController);

    cadastrarLivrosController.$inject = ['$scope', '$http'];

    function cadastrarLivrosController($scope, $http) {

        // $scope.message = "alo vc";
        var vm = this;
        var SERVICE_HOST_HTTP = "http://localhost:3001";

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
            $http.get(SERVICE_HOST_HTTP + '/livro')
                .then(
                    function(response) {
                        vm.livros = response.data.cadastrarLivro;
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        };
        vm.editarLivro = function(item) {
            vm.livro = angular.copy(vm.livros[item]);
            vm.index = item;
            console.log("verifica editar");
        };

        vm.deletarLivro = function(item) {
            vm.livros.splice(item, 1);
        };
        vm.LimparLivro = function(item) {
            vm.livro = {};
            vm.index = -1;
        };
/*------------------------------------------------------------- */
vm.editarLivroBase = function() {
    $http.put(SERVICE_HOST_HTTP + '/livro/' + vm.livros[vm.index]._id, vm.livro)
        .then(
            function(response) {
                vm.cadastrarLivro[vm.index] = vm.livro;
                vm.limparCampos();
            },
            function(err) {
                console.log(err);
            }
        );
};
vm.limparLivro = function(item){
    vm.livro = {};
    vm.index = -1;
};
vm.deletarLivroBase = function(item) {
    $http.delete(SERVICE_HOST_HTTP + '/livro/' + vm.livro[item]._id)
        .then(
            function(response) {
                vm.livro.splice(item, 1); //remover da tela
            },
            function(err) {
                console.log(err);
            }
        );
};
vm.adicionarLivroBase = function() {
    $http.post(SERVICE_HOST_HTTP + '/livro/', vm.livro)
        .then(
            function(response) {
                vm.livros.push(vm.livro);
                vm.limparCampos();
                console.log(response);
            },
            function(err) {
                console.log(err);
            }
        );
};
    }    
}());  

