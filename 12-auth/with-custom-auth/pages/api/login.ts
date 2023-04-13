import { encode } from "@/lib/jwt";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const authenticateUser = (email: string, password: string) => {
  const vaildEmail = "nochi@somecompany.com";
  const vaildPassword = "stringpassword";

  if (email === vaildEmail && password === vaildPassword) {
    return encode({
      id: "f678f078-fcfe-43ca-9d20-e8c9a95209b6",
      name: "Nochi",
      email,
    });
  }

  return null;
};

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { email, password } = req.body;

  console.log("들어옴");

  if (method !== "POST") {
    return res.status(404).end;
  }

  if (!email || !password) {
    return res.status(400).json({
      error: "Missing required params",
    });
  }

  const user = authenticateUser(email, password);

  if (user) {
    res.setHeader(
      "Set-Cookie",
      serialize("my_auth", user, { path: "/", httpOnly: true })
    );
    return res.json({ success: true });
  } else {
    return res.status(401).json({
      success: false,
      error: "Wrong email of password",
    });
  }
};

export default login;
