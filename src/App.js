import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Rent",
      amount: 812,
      date: new Date(2023, 0, 5),
    },
    {
      id: "e2",
      title: "Insurance",
      amount: 140,
      date: new Date(2023, 0, 5),
    },
    {
      id: "e3",
      title: "Electrical",
      amount: 96.99,
      date: new Date(2023, 0, 1),
    },
    {
      id: "e4",
      title: "Cable",
      amount: 116.99,
      date: new Date(2023, 0, 15),
    },
    {
      id: "e5",
      title: "Car",
      amount: 210.00,
      date: new Date(2023, 0, 15),
    },
  ];

  return (
    <div>
      <h2 className="title">Reacting to Expenses</h2>
      <Expenses items={expenses} className="expenses" />
    </div>
  );
}

export default App;
