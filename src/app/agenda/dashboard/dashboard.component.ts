import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../core/models/person';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  personForm: FormGroup;
  persons: Array<Person>;
  //This regular expression for emails is much better than the one that the Validators brings by default
  emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailRegEx)]]
    });
    this.persons = this.storageService.getPersons();
  }

  handlePerson(){
    this.storageService.savePerson(this.personForm.value);
    this.personForm.reset();
  }

  cardSelected(person){
    console.log(person);
  }

  goToDetails(person){
    //event.cancelBubble = true;
    console.log(person);
  }

  deletePerson(i){
    //event.cancelBubble = true;
    this.storageService.deletePerson(i);
  }

}
