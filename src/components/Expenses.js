import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

function Expenses(props) {
  return (
    <div>
        <aside>
            <p>
                🚨 Sorry, your browser doesn't support <code>:has()</code> - view this demo in <a href="https://caniuse.com/css-has" target="_blank" without rel="noreferrer">a supported browser</a>.
            </p>
        </aside>
        <ul>
            <li>
            <span>Lorem</span>
            </li>
            <li>
            <span>Eaque</span>
            </li>
            <li>
            <span>Quasi</span>
            </li>
            <li>
            <span>Eligendi</span>
            </li>
            <li>
            <span>Delectus</span>
            </li>
            <li>
            <span>Illum</span>
            </li>
            <li>
            <span>Ratione</span>
            </li>
        </ul>

        <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
        ></ExpenseItem>
        <ExpenseItem
            title={props.items[4].title}
            amount={props.items[4].amount}
            date={props.items[4].date}
        ></ExpenseItem>
    </div>
  );
}

export default Expenses;
