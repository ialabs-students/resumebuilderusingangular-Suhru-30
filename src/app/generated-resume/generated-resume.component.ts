import { Component, Input, OnInit } from '@angular/core';
import { Resume } from '../Model/Resume';

@Component({
  selector: 'app-generated-resume',
  templateUrl: './generated-resume.component.html',
  styleUrls: ['./generated-resume.component.css']
})

export class GeneratedResumeComponent implements OnInit {
   
  formData:Resume;
  constructor() { 
    let data = (localStorage.getItem("formData") ? localStorage.getItem("formData") : "{}") as string;
    this.formData = JSON.parse(data);
  }


  ngOnInit(): void {
  }

}
