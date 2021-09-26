import { Component } from '@angular/core';
import { UserCreateComponent } from './modules/hr/components/user/user-create/user-create.component';
import { UserListComponent } from './modules/hr/components/user/user-list/user-list.component';
import { HrModule } from './modules/hr/hr.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public userList:HrModule)
  {

  }
  title = 'angular-micro-service';
}
