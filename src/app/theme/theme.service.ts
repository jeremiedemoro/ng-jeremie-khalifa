import { Injectable } from '@angular/core';
import {Theme, defaultTheme, lightTheme,themeList} from './ThemeInterface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme;
  public active: Theme;
  public availableThemes: Theme[] = [defaultTheme, lightTheme];

  constructor() {
    const windowHostName = window.location.hostname;
    const theme = window['ZP_CONFIG'].themeMap[windowHostName] || 'default';
      console.log(windowHostName)
      this.setActiveTheme(theme)
  }

  toggleTheme() {
    if (this.active.name == 'defaultTheme') {
      this.setLightTheme()
    } else {
      this.setDefaultTheme()
    }
  }

  setDefaultTheme() {
    this.setActiveTheme('default');
  }

  setLightTheme(): void {
    this.setActiveTheme('light');
  }

  setActiveTheme(theme: string): void {
    this.active = themeList[theme];
    this.theme = this.active.theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
