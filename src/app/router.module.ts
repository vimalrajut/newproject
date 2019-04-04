import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import { CreateScratchOrderComponent } from './create-scratch-order/create-scratch-order.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: 'dashBoard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'createNOC', component: CreateNewOrderComponent},
    { path: 'createSOC', component: CreateScratchOrderComponent},
    

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
