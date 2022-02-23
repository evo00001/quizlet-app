import { Component } from "@angular/core";
import { FlashCardItemModel } from "./flashcard-item.model";
import { mock_flashcard_list } from "./mock-flashcard-list";

@Component({
    selector: 'quiz-arts-layout',
    templateUrl: 'arts-layout.component.html',
    styleUrls: ['arts-layout.component.css']
})
export class ArtsLayoutComponent{
    flashcards: FlashCardItemModel [] = [];

  constructor() {
    for (var flashcard of mock_flashcard_list) {
      console.log(flashcard);
      this.flashcards.push(flashcard);
    }
  }
}