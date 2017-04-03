import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAEQaCCLB1ll1CqMqadx303v-NW2EdR3XM",
    authDomain: "porfolio-4bf9e.firebaseapp.com",
    databaseURL: "https://porfolio-4bf9e.firebaseio.com",
    projectId: "porfolio-4bf9e",
    storageBucket: "porfolio-4bf9e.appspot.com",
    messagingSenderId: "352041126110"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
