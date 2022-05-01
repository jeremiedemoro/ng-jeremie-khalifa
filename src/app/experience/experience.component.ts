import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ExperienceService } from '../services/experience.service';
import { ExperienceArticles, SkillsArticles } from '../interfaces/experience.model';
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() titleHeader: string = 'Experience';
  skillsArticles: SkillsArticles[];
  experienceArticles: ExperienceArticles[];
  
  constructor(private navBarVisibilityService: NavBarVisibilityService, 
              private router: Router,
              private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperienceArticles();
    this.getSkillsArticles();
    console.log(this.experienceArticles)
  }

  getExperienceArticles() {
    this.experienceService.getExperienceArticles().
    subscribe(experienceArticles => this.experienceArticles = experienceArticles)
  }

  getSkillsArticles() {
    this.experienceService.getSkillsArticles().
    subscribe(skillsArticles => this.skillsArticles = skillsArticles)
  }

  goTo() {
    this.router.navigate(['/home'])
  }

}
