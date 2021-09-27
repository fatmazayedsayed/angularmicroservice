import { Component, OnInit } from '@angular/core';
import { UserList } from '../../../models/user/user-list';
import { UserListService } from '../../../services/user/user-list-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userArr: UserList[] = [];
  constructor(private userListService:UserListService) { }

  ngOnInit(): void {
  this.userArr=this.userListService.initalizeUserList();
  }

}
