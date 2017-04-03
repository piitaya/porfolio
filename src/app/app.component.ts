import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    name: string = '';

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => {
            if(auth) {
                this.name = <any>auth.google.displayName;
            }
        });
    }

    login() {
        this.af.auth.login();
    }
}
