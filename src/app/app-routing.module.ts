import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  // { path: '', component: HomeComponent, data: { animation: 'Home' } },
  // { path: 'portfolio', component: ProjectsComponent, data: { animation: 'Portfolio' } },
  // { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
  // { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  // { path: 'services', component: ServicesComponent, data: { animation: 'Services' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
