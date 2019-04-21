import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage {

  numUncategorized = 32;

  categories = [
    {
      slug: 'schoolwork',
      title: 'Schoolwork',
      color: 'warning',
      num: '8'
    },
    {
      slug: 'personal_projects',
      title: 'Personal Projects',
      color: 'secondary',
      num: '3'
    },
    {
      slug: 'housework',
      title: 'Housework',
      color: 'danger',
      num: '1'
    },
    {
      slug: 'recreation',
      title: 'Recreation',
      color: 'tertiary',
      num: '8'
    }
  ]

  constructor(private nav: NavController) {
  }

  viewCategory(cat: string) {
    this.nav.navigateForward('/tabs/tasks/category/' + cat)
  }

}
