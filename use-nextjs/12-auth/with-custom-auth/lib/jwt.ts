import jwt from "jsonwebtoken";

const JWT_SECRET = "my_jwt_password";

export const encode = (payload: string | object | Buffer) => {
  return jwt.sign(payload, JWT_SECRET);
};

export const decode = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
