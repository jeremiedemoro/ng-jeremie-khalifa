import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ExperienceArticles, SkillsArticles } from '../interfaces/experience.model';
import { EXPERIENCEARTICLES, SKILLSARTICLES } from '../mock-info/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperienceArticles(): Observable<ExperienceArticles[]> {
    return of(EXPERIENCEARTICLES)
  }

  getSkillsArticles(): Observable<SkillsArticles[]> {
    return of(SKILLSARTICLES)
  }
}
