/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { GestionadminComponent } from './dashboard/gestionadmin/gestionadmin.component';
import { GestionannoncesComponent } from './dashboard/gestionannonces/gestionannonces.component';
import { UpdateComponent } from './dashboard/update/update.component';
import { DeposerComponent } from './dashboard/deposer/deposer.component';
import { UpdateAnnonceComponent } from './dashboard/update-annonce/update-annonce.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, children: [

    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'deposer', component: DeposerComponent},

    {path: 'settings', component: SettingsComponent},
    {path: 'gestionadmin', component: GestionadminComponent},
    {path: 'gestionannonces', component: GestionannoncesComponent},
    {path: 'update/:email' , component: UpdateComponent},
    {path: 'update-annonce/:id' , component: UpdateAnnonceComponent},
    
  ]},
  {path: 'visiteur', component: RootComponent, children: [

    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
   
    
  ]}
];

export const routing = RouterModule.forRoot(routes);

