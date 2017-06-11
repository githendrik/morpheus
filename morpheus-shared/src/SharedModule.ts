// Styles
import './components/MyComponent.styles'

// Angular
import * as angular from 'angular'

// Components / Services
import {MyComponent} from './components/MyComponent'

const sharedModule = angular.module('morpheus.shared', []).component('myComponent', MyComponent);

export default sharedModule.name;