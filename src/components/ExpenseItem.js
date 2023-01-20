import './ExpenseItem.scss';
import moment from 'moment';

function ExpenseItem( props ) {
    return (
        <div className="expense-item">
            <div className="expense-item__date">
                {moment(props.date).format("MM/DD/YYYY")}
            </div>
            <div className="expense-item__description">
                <h3>{props.title}</h3>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );

}

export default ExpenseItem;
