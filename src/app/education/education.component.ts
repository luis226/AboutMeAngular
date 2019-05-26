import { Component, OnInit } from '@angular/core';
import { School } from '../school'
import { SchoolService } from '../school.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public Schools : School[];
  
  constructor(private schoolService: SchoolService) { 
  }

  ngOnInit() {
    this.getSchools();
  }

  getSchools(): void {
    this.Schools = this.schoolService.getSchools()
  }

}
