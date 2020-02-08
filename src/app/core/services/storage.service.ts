import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  persons: Array<Person>;

  constructor() { }

  getPersons(){
    this.persons = JSON.parse(localStorage.getItem('persons')) || [];
    return this.persons;
  }

  savePerson(person: Person){
    this.persons.push(person);
    localStorage.setItem('persons', JSON.stringify(this.persons));
  }

  deletePerson(i){
    this.persons.splice(i, 1);
    if(this.persons.length != 0){
      localStorage.setItem('persons', JSON.stringify(this.persons));
    }
    else{
      localStorage.removeItem('persons');
    }
  }
}
