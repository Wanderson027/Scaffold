!function(){"use strict";angular.module("bibliotecaApp",[]);console.log("Está Funfando..")}(),function(){"use strict";function cadastrarLivrosController($scope,$http){var vm=this;vm.init=function(){vm.listaLivros()},vm.testService=function(){BibliotecaService.test()},vm.index=-1,vm.livro={},vm.livros=[],vm.adicionarLivros=function(){-1===vm.index?(vm.livros.push(vm.livro),$http.post("http://localhost:3001/livros/",vm.livro).then(function(response){console.log(response)},function(err){console.log(err)})):vm.livros[vm.index]=vm.livros,vm.livro={},vm.index=-1},vm.listaLivros=function(){$http.get("http://localhost:3001/livro").then(function(response){vm.livros=response.data.cadastrarLivro},function(err){console.log(err)})},vm.editarLivro=function(item){vm.livro=angular.copy(vm.livros[item]),vm.index=item,console.log("verifica editar")},vm.deletarLivro=function(item){vm.livros.splice(item,1)},vm.LimparLivro=function(item){vm.livro={},vm.index=-1},vm.editarLivroBase=function(){$http.put("http://localhost:3001/livro/"+vm.livros[vm.index]._id,vm.livro).then(function(response){vm.cadastrarLivro[vm.index]=vm.livro,vm.limparCampos()},function(err){console.log(err)})},vm.limparLivro=function(item){vm.livro={},vm.index=-1},vm.deletarLivroBase=function(item){$http.delete("http://localhost:3001/livro/"+vm.livro[item]._id).then(function(response){vm.livro.splice(item,1)},function(err){console.log(err)})},vm.adicionarLivroBase=function(){$http.post("http://localhost:3001/livro/",vm.livro).then(function(response){vm.livros.push(vm.livro),vm.limparCampos(),console.log(response)},function(err){console.log(err)})}}angular.module("bibliotecaApp").controller("cadastrarLivrosController",cadastrarLivrosController),cadastrarLivrosController.$inject=["$scope","$http"]}();