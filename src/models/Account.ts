export class Account {
    // id !: number;
    name!: string;
    user_name!: string;
    pass!: string;
    role_user!: number;
  
    constructor(name: string, user_name: string, pass: string, role_user: number) {
      // this.id = id;
      this.name = name;
      this.user_name = user_name;
      this.pass = pass;
      this.role_user = role_user;
    }
  }