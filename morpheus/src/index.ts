import * as angular from 'angular'

import morpheusShared from 'morpheus-shared';

const morpheusApp = angular.module('morpheus', [
    morpheusShared
]);

morpheusApp.component('morpheus', {
    template: `<h1>Hi!</h1>`
})

angular.element(() => angular.bootstrap(document.body, [morpheusApp.name]));