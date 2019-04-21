import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage {

  numUncategorized = 32;

  constructor(public nav: NavController) {
  }

  viewCategory(cat) {
    this.nav.navigateForward('/tabs/tasks/category/' + cat)
  }

}
