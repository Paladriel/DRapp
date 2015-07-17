Router.configure({
	layoutTemplate: 'MasterLayout',
  	loadingTemplate: 'Loading',
  	notFoundTemplate: 'NotFound'
});

Router.route('/', {
  	name: 'home',
  	controller: 'HomeController',
  	action: 'action',
  	where: 'client'
});


Router.route('inicio', {
  	name: 'inicio',
  	controller: 'InicioController',
  	action: 'action',
  	where: 'client'
});

Router.route('cursos', {
  	name: 'cursos',
  	controller: 'CursosController',
  	action: 'action',
  	where: 'client'
});


