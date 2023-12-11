import stat from './statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    return (
        <ul className={stat.list}>
            <li>Good: {good }</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}</li>
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}