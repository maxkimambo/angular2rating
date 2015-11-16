import {Component,View} from 'angular2/angular2';

@Component({
  selector: 'angular-2-rating'
})

@View({
  templateUrl: 'main.html'
})

export class Angular2Rating {
  constructor() {
    console.info('Angular2Rating Component Mounted Successfully');
  }

}
