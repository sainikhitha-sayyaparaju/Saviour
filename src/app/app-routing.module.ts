import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FishComponent } from './fish/fish.component';
import { HomeComponent } from './home/home.component';
import { QuickguideComponent } from './quickguide/quickguide.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [ {path:'',component: HomeComponent},
                          {path:'prawns',component: TodayComponent},
                          {path:'about',component: AboutComponent},
                           {path: 'fishes', component: FishComponent},
                           {path:'quickguide',component: QuickguideComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
