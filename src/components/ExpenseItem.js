import './ExpenseItem.scss';

function ExpenseItem( props ) {
    return (
        <div className="expense-item">
            <div className="expense-item__date">
                {props.date.toISOString()}
            </div>
            <div className="expense-item__description">
                <h3>{props.title}</h3>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );

}

export default ExpenseItem;
