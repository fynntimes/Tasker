import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tasks',
        children: [
          {
            path: '',
            loadChildren: '../tasks/tasks.module#TasksPageModule'
          },
          {
            path: 'category/:slug',
            loadChildren: '../tasks/category/category.module#CategoryPageModule'
          }
        ]
      },
      {
        path: 'work',
        children: [
          {
            path: '',
            loadChildren: '../work/work.module#WorkPageModule'
          }
        ]
      },
      {
        path: 'trends',
        children: [
          {
            path: '',
            loadChildren: '../trends/trends.module#TrendsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tasks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
