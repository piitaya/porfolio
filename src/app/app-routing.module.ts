import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ExperiencesComponent } from './admin/experiences/experiences.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { CategoriesComponent } from './admin/categories/categories.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: []
    }, {
        path: 'admin',
        component: AdminComponent,
        children: [{
            path: 'experiences',
            component: ExperiencesComponent,
            children: []
        }, {
            path: 'skills',
            component: SkillsComponent,
            children: []
        }, {
            path: 'categories',
            component: CategoriesComponent,
            children: []
        }]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
