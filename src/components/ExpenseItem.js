import './ExpenseItem.scss';
import moment from 'moment';

function ExpenseItem( props ) {

    const month = props.date.toLocaleString('en-US', {month: 'long'});

    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div className="expense-item__date">
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h3>{props.title}</h3>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );

}

export default ExpenseItem;
