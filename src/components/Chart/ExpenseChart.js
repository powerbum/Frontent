// src/components/ExpenseChart.js
import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ExpenseChart = () => {
  const [expense, setExpense] = useState('');
  const [expenseError, setExpenseError] = useState('');
  const [chartData, setChartData] = useState([]);
  const [batteryData, setBatteryData] = useState([]);
  const [batterySolarData, setBatterySolarData] = useState([]);

  const validateExpense = (value) => {
    if (isNaN(value) || parseFloat(value) < 0) {
      setExpenseError('Please enter a valid positive number');
      return false;
    } else {
      setExpenseError('');
      return true;
    }
  };

  const handleExpenseChange = (e) => {
    const value = e.target.value;
    setExpense(value);
  };

  const calculateCompoundExpenses = useCallback((monthlyExpense) => {
    const yearlyData = [];
    if (!isNaN(monthlyExpense) && monthlyExpense >= 0) {
      let thisYearExpenses = 0;
      for (let year = 1; year <= 10; year++) {
        thisYearExpenses += monthlyExpense * 12;
        yearlyData.push(thisYearExpenses);
      }
    }
    return yearlyData;
  }, []);

  const calculateBatteryPlan = useCallback((monthlyExpense) => {
    const yearlyData = [];
    if (!isNaN(monthlyExpense) && monthlyExpense >= 0) {
      let thisYearExpenses = monthlyExpense * 50;
      for (let year = 1; year <= 10; year++) {
        thisYearExpenses += (monthlyExpense / 4) * 12;
        yearlyData.push(thisYearExpenses);
      }
    }
    return yearlyData;
  }, []);

  const calculateSolarBatteryPlan = useCallback((monthlyExpense) => {
    const yearlyData = [];
    if (!isNaN(monthlyExpense) && monthlyExpense >= 0) {
      let thisYearExpenses = monthlyExpense * 100;
      for (let year = 1; year <= 10; year++) {
        thisYearExpenses -= (monthlyExpense / 4) * 12;
        yearlyData.push(thisYearExpenses);
      }
    }
    return yearlyData;
  }, []);

  useEffect(() => {
    if (validateExpense(expense)) {
      const monthlyExpense = parseFloat(expense);
      setChartData(calculateCompoundExpenses(monthlyExpense));
      setBatteryData(calculateBatteryPlan(monthlyExpense));
      setBatterySolarData(calculateSolarBatteryPlan(monthlyExpense));
    }
  }, [expense, calculateCompoundExpenses, calculateBatteryPlan, calculateSolarBatteryPlan]);

  const data = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10'],
    datasets: [
      {
        label: 'Projected Yearly Expenses',
        data: chartData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Projected Battery Plan',
        data: batteryData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Projected Solar/Battery Plan',
        data: batterySolarData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="expense-chart-container">
      <h2>Monthly Electricity Expenses</h2>
      <div className="input-container">
        <label htmlFor="expense-input">Expense: </label>
        <input
          id="expense-input"
          type="number"
          placeholder="Enter expense"
          value={expense}
          onChange={handleExpenseChange}
        />
        {expenseError && <p className="error-message">{expenseError}</p>}
      </div>
      <div style={{ width: '100%', maxWidth: '1000px', height: '800px' }}>
        <Line data={data} />
      </div>
    </div>
  );
};

export default ExpenseChart;
