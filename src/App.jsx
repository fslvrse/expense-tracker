import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.description.localeCompare(b.description);
    } else {
      return b.description.localeCompare(a.description);
    }
  });

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ExpenseTable expenses={sortedExpenses} onDelete={handleDelete} />
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Description ({sortOrder})
      </button>
    </div>
  );
};

export default App;
