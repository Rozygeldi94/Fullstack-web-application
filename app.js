import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("salam");
});
app.listen(port, () => {
    console.log(`Server started. Port: ${port}`);
});
