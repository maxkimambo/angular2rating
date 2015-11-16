// libraries
import {Component, View, bootstrap} from 'angular2/angular2';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
// end libraries

// our components
import {Angular2Rating} from './angular-2-rating';
import {RatingComponent} from './app/rating_component/rating';

var routes = {
  home: {
    path: '/',
    as: 'home',
    component: Main
  },
  post: {
    path: '/post-review',
    as: 'post-review',
    component: RatingComponent
  }

};

@RouteConfig([
    routes.home,
    routes.post
])
  
@Component({
  selector: 'main'
})

@View({
  directives: [Angular2Rating, ROUTER_DIRECTIVES ],
  template: `
    <angular-2-rating></angular-2-rating>
  `
})

class Main {

}

bootstrap(Main, [ROUTER_PROVIDERS]);
