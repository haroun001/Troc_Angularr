import { Back } from './models/back.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

import { SettingsService } from './services/settings.service';
import { GestionadminComponent } from './dashboard/gestionadmin/gestionadmin.component';
import { GestionannoncesComponent } from './dashboard/gestionannonces/gestionannonces.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './dashboard/update/update.component';
import { DeposerComponent } from './dashboard/deposer/deposer.component';
import { UpdateAnnonceComponent } from './dashboard/update-annonce/update-annonce.component';








@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,

    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    GestionadminComponent,
    GestionannoncesComponent,
    UpdateComponent,
    DeposerComponent,
    UpdateAnnonceComponent,
   

  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
