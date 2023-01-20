import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Rent",
      amount: 812,
      date: new Date(2023, 1, 5),
    },
    {
      id: "e2",
      title: "Insurance",
      amount: 140,
      date: new Date(2023, 1, 5),
    },
    {
      id: "e3",
      title: "Electrical",
      amount: 96.99,
      date: new Date(2023, 1, 1),
    },
    {
      id: "e4",
      title: "Cable",
      amount: 116.99,
      date: new Date(2023, 1, 15),
    },
    {
      id: "e5",
      title: "Car",
      amount: 210.00,
      date: new Date(2023, 1, 15),
    },
  ];

  return (
    <div>
      <h2 className="title">Reacting to Expenses</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
            <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
