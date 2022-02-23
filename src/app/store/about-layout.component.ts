import { Component } from "@angular/core";
import { mock_presscard_list } from './mock-presscard-list';
import { PressCardItemModel } from './presscard-item.model';
@Component({
    selector: 'quiz-about-layout',
    templateUrl: 'about-layout.component.html',
    styleUrls: ['about-layout.component.css']
})
export class AboutLayoutComponent{
    presscards: PressCardItemModel [] = [];

  constructor() {
    for (var presscard of mock_presscard_list) {
      console.log(presscard);
      this.presscards.push(presscard);
    }
  }
}