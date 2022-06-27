import { Component, OnInit } from '@angular/core';
import { Resume } from '../Model/Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  formData: Resume;
  showResume: boolean = false;

  constructor() { 
    this.formData = {
      firstName: "",
      middleName: "",
      lastName: "",
      Email: "",
      mobile:"",
      dob:"",
      Address:"",
      Gender:"",
      university1:"",
      university2:"",
      university3:"",
      university4:"",
      yearofpassing1:"",
      yearofpassing2:"",
      yearofpassing3:"",
      yearofpassing4:"",
      percentage1:"",
      percentage2:"",
      percentage3:"",
      percentage4:"",
      organization1:"",
      organization2:"",
      doj1:"",
      doj2:"",
      dor1:"",
      dor2:"",
      Experience:"",
      Experience1:"",
      tech1:"",
      tech2:"",
      tech3:"",
      tech4:"",
      tech5:"",
      company1:"",
      company2:"",
      company3:"",
      company4:"",
      company5:"",
      lastworkedon1:"",
      lastworkedon2:"",
      lastworkedon3:"",
      lastworkedon4:"",
      lastworkedon5:"",
      rate1:"",
      rate2:"",
      rate3:"",
      rate4:"",
      rate5:"",
      Describe:"",
      Declaration:"",
      Signature:"",
      fb:"",
      Ln:"",
      In:"",

  }
}

  ngOnInit(): void {
  }
  saveFormData() {
    console.log(this.formData);
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.showResume = true;

}
}
