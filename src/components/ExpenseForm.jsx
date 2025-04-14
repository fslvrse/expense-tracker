import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && description && amount) {
      onAddExpense({ date, description, amount });
      setDate("");
      setDescription("");
      setAmount("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit" className="add-btn">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
