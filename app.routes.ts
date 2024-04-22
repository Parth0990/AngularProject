import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemMaster } from './master/item-master.component';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';

export const routes: Routes = [
    {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
}, 
{
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
},
{
    path: 'purchase',
    component: PurchaseComponent,
    pathMatch: 'full'
},
{
    path: 'item',
    component: ItemMaster,
    pathMatch: 'full'
}];
