import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'main', component: MainComponent},
    { path: 'new', component: NewComponent},
    { path: 'question/:id', component: ShowComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
