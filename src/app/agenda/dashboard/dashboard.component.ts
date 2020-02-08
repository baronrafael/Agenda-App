import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../core/models/person';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  personForm: FormGroup;
  persons: Array<Person>;
  bPersonSelected: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.persons = [];
  }

  handlePerson(){
    this.persons.push(this.personForm.value);
    this.personForm.reset();
  }

  cardSelected(person){
    this.bPersonSelected = !this.bPersonSelected;
    console.log(person);
  }

  goToDetails(person){
    event.cancelBubble = true;
    console.log(person);
  }

  deletePerson(i){
    event.cancelBubble = true;
    this.persons.splice(i, 1);
    this.bPersonSelected = !this.bPersonSelected;
  }

}
