import * as express from "express";

const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
    return res.send({ message: "Hello there"} );
});

app.post("/", (req: express.Request, res: express.Response) => {
    const parameters = req.body;
    if (parameters.greeting === "Hello there"){
        return res.send({ message: "General Kenobi" });
    } else {
        return res.send({ message: "Hi!" })
    }
});

export default app;