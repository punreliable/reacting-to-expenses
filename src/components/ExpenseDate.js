import './ExpenseDate.scss';

function ExpenseDate( props ) {

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-item__date">
            <div className="date__month">{month}</div>
            <div className="date__year">{year}</div>
            <div className="date__day">{day}</div>
        </div>
    );

}

export default ExpenseDate;
