import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent  implements OnInit {
  classroomForm : FormGroup;
  constructor(public router : Router, private route : ActivatedRoute, private formBuilder : FormBuilder) {
    this.classroomForm = this.formBuilder.group({
      'class-name' : [null, Validators.required],
      'students' : this.formBuilder.array([])
    })
  }

  ngOnInit() {}


  createStudent(){

  }

}
