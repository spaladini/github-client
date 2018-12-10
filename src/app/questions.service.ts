import { Injectable } from '@angular/core';

const topics = ['Orario', 'Argomenti', 'Docenti'];

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getTopics(): Array<string> {
    return topics;
  }
}
