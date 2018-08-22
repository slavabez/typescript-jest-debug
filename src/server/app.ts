import * as express from "express";
import * as bodyParser from "body-parser";

const app: express.Application = express();

app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
    return res.send({ message: "Hello there"} );
});

app.post("/", (req: express.Request, res: express.Response) => {
    const parameters = req.body;
    if (parameters && parameters.greeting === "Hello there"){
        return res.send({ message: "General Kenobi" });
    } else {
        return res.send({ message: "Hi!" })
    }
});

export default app;