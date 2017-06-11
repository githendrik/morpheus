import {MyComponentController} from './MyComponentController'

export const MyComponent = {
    template: `<div>
    <h1>My Super Awesome Component</h1>
    <h2>{{ $ctrl.myControllerProperty }}</h2>
    <h3>{{ $ctrl.myBindingProperty }}</h3>
    </div>`,
    bindings: {
        myBindingProperty: '@'
    },
    controller: MyComponentController
}