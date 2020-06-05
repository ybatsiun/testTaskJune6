module.exports = app => {
    const transactionService = require("../services/transaction.service.js");

    app.get("/transactions", async (req, res) => {
        res.send(await transactionService.findAll());
    });

    app.post("/transactions", async (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        };
        const newTransaction = await transactionService.create(req.body.transaction)
        res.send(newTransaction);
    });

    app.get("/transactions/:id",async  (req, res) => {
        res.send(await transactionService.findOne(req.params.id))
    });

    app.get("/balance", async(req, res) => {
        res.send({ balance: await transactionService.getBalance() })
    });

    app.post("/transactionCheck", async(req, res) => {
        const approved = await transactionService.checkTransaction(req.body.transaction);
        approved ? res.send({approved:true}) : res.send({approved:false})
    });
};
