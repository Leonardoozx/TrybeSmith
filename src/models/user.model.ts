import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public insertUser = async (user: User) => {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  };

  public findUserByUserName = async (username: string): Promise<User> => {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );
    const [user] = rows as User[];
    return user;
  };
}
