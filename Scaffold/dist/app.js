!function(){"use strict";angular.module("UnidescBiblioteca",[]);console.log("Está Funfando..")}(),function(){"use strict";angular.module("UnidescBiblioteca");function cadastrarLivroController($scope){var vm=this;vm.index=-1,vm.aluno={},vm.alunos=[{acoes:"",matricula:"UNI8080",nome:"Carlos Eduardo Feitosa da Costa",cpf:"04680698101",email:"carlos@hotmail.com"}],vm.adicionarAlunos=function(){console.log(vm.aluno),-1===vm.index?vm.alunos.push(vm.aluno):vm.alunos[vm.index]=vm.aluno,vm.aluno={},vm.index=-1},vm.editarAluno=function(item){vm.aluno=angular.copy(vm.alunos[item]),vm.index=item},vm.deletarAluno=function(item){vm.alunos.splice(item,1)}}portalApp.controller("cadastrarLivroController",cadastrarLivroController),cadastrarLivroController.$inject=["$scope"]}();