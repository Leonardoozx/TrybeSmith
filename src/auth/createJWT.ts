import * as jwt from 'jsonwebtoken';

const JWTsecret = 'SUPER_SECRET';

const tokenGenerator = (...data: string[]): string => {
  const token = jwt.sign({ data }, JWTsecret);
  return token;
};

export default tokenGenerator;