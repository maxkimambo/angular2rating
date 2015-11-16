import {Component, View} from 'angular2/angular2'; 

@Component({
	selector: 'rating'
})
@View({
	templateUrl: 'app/rating_component/rating.html'
})
export class RatingComponent{
	 constructor() {
    console.info('Rating Component Mounted Successfully');
  }
}