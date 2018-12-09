import { Injectable } from '@angular/core';

const topics = [
  'Orario del corso', 'Argomenti trattati', 'Comprensibilità', 'Preparazione docenti'
];


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getAll(): Array<string> {
    return topics;
  }
}
