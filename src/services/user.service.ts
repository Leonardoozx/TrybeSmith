import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public insertUser = (user: User) => this.model.insertUser(user); 

  public findUserByUsername = (username: string) => this.model.findUserByUsername(username);
}