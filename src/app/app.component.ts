import { Component } from '@angular/core';

import { UserService } from './modules/core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthUser: boolean = true;
  title: string = '';
  constructor(
    
    public userService: UserService
  ) {
    this.isAuthUser = !userService.isAuth();
    this.title = 'angular-micro-service';
  }

  signOut() {
    this.userService.purgeAuth();
  
    this.title = 'sign out';
  }
}
