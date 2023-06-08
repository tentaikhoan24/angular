export class Account {
    id !: number;
    name!: string;
    user_name!: string;
    pass!: string;
    role_User!: number;
  
    constructor(id: number, name: string, user_name: string, pass: string, role_User: number) {
      this.id = id;
      this.name = name;
      this.user_name = user_name;
      this.pass = pass;
      this.role_User = role_User;
    }
  }