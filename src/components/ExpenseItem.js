import './ExpenseItem.scss';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem( props ) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h3>{props.title}</h3>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );

}

export default ExpenseItem;
