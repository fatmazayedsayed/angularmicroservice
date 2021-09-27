import { UserList } from "../../models/user/user-list";

export class UserListService {
     userArr: UserList[] = [];
    initalizeUserList()
    {
        this.userArr = [
            { userId: 10, userName: "fz", userEmail: "fz@fz.com" },
            { userId: 20, userName: "ola", userEmail: "maha@fz.com" },
            { userId: 30, userName: "maha", userEmail: "maha@fz.com" },
            { userId: 40, userName: "borham", userEmail: "borham@fz.com" },
            { userId: 50, userName: "heba", userEmail: "heba@fz.com" }
          ];
          return this.userArr;
    }
}
