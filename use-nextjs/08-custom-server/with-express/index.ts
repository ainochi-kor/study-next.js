import express, { Request, Response } from "express";
import next from "next";
import { parse } from "url";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const main = async () => {
  try {
    await app.prepare();

    const handle = app.getRequestHandler();
    const server = express();

    server
      .get("/", (req: Request, res: Response) => {
        res.send("Hello World");
      })
      .get("/about", (req: Request, res: Response) => {
        const { query } = parse(req.url, true);
        app.render(req, res, "/about", query);
      })
      .get("/api/greet", (req: Request, res: Response) => {
        res.json({ name: req.query?.name ?? "unknown" });
      })
      .get(/_next\/.+/, (req: Request, res: Response) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
      })
      .listen(3000, () => console.log("server ready"));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

main();
