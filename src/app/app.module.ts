import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvcComponent } from './cvc/cvc.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';
import { Mission64Component } from './mission64/mission64.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';

import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo   } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

//imports for the login part.

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvcComponent,
    ResourcesComponent,
    AboutComponent,
    Mission64Component,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,FormsModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "about", component: AboutComponent },
      {path: "sign-up", component: SignUpComponent, ...canActivate(redirectLoggedInToHome)},
      {path: "login", component: LoginComponent, ...canActivate(redirectLoggedInToHome)},
      {path: "cvc", component: CvcComponent, ...canActivate(redirectUnauthorizedToLogin)},
      {path: "resources", component: ResourcesComponent, ...canActivate(redirectUnauthorizedToLogin)},
      {path: "mission64", component: Mission64Component},
      {path: "faq", component: FaqComponent},
      {path: "**", component: NotFoundComponent}

    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot()



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
