import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionVisibleService {
  private activeSection = 'welcome';
  constructor() { }

  setSectionVisible(value:  string = 'welcome'|| 'functions' || 'history' || 'project' || 'contact' || 'footer'): void {
    this.activeSection = value;
  }

  getActiveSection(): string {
    return this.activeSection;
  }
}
