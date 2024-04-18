const express = require('express');
const expenseController = require('../controllers/expense-tracker/trackerController');

const router = express.Router()
router.route('/expense').post(expenseController.createExpense).get(expenseController.getAllExpensesForUser);
router.route('/expense/:id').get(expenseController.getExpenseById).put(expenseController.updateExpense).delete(expenseController.deleteExpense);
router.route('/expense/user/:id').get(expenseController.getAllExpensesForUser);
module.exports = router;