import { Component } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  public readonly timelineHistory: {year: number, title: string, description: string}[] = [
    {
      year: 2018,
      title: 'Start of a Dream',
      description: "In 2018 a had 19y and I worker in Shopping popular for of High class of my city. My job was security and I don't liked but I needed. The click to change my life was decision to make a prove to a Technical School of a best University in my city, to my surprise, I passed and here begini everthing.",
    },
    {
      year: 2019,
      title: 'Learning and Achievements',
      description: 'In 2019 I made a hard decision in my life, get out of a job or bet in my dream, my father had all suport to I can follow my dream and continue studing. He just studing fundamental school, with this i make two promisse to him first I will his one of the best studants and second I will get a job in a year.(I made)'
    },
    {
      year: 2020,
      title: 'Fruit of the conquests',
      description: 'In 2020 I started internship on CI&T a big company,where  a learn a lot things and still learn, so comprir the second promisse and became a monitor on my course. Monitor are the student with betteres note and know explaing the content show in the course, so the first promisse was completed'
    }
  ];

  constructor() { }

}