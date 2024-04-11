const ExpenseModel = require('../../models/expense-model');

exports.createExpense = async (req, res) => {
    const expenseInfo = new ExpenseModel({
        title: req.body.title,
        description: req.body.description ?? '',
        amount: req.body.amount,
        date : req.body.date,
        category : req.body.category
    })

    try {
        const expenseToSave = await expenseInfo.save();
        res.status(200).json(expenseToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getAllExpenses = async (req, res) => {
    try{
        const data = await ExpenseModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getExpenseById = async (req, res) => {
    try{
        const data = await ExpenseModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.updateExpense = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await ExpenseModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ExpenseModel.findByIdAndDelete(id)
        res.send(`Expense ${data.title} has been removed..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
