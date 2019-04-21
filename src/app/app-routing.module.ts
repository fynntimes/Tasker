import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'work', loadChildren: './work/work.module#WorkPageModule' },
  { path: 'trends', loadChildren: './trends/trends.module#TrendsPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
