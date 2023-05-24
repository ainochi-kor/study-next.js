import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { User } from "@/types/type";

const username = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { username },
  } = req;
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/users.json", "utf8");
  const users: User[] = JSON.parse(fileContents);
  let targetUser = null;
  users.forEach((user) => {
    if (user.username === username) {
      targetUser = user;
    }
  });
  if (targetUser) {
    res.status(200).json(targetUser);
  } else {
    res.status(404).json({ notFound: true });
  }
};

export default username;
