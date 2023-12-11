import css from './feedbackOptoins.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, leaveFeedback }) => {
    return (
        <ul className={css.listBtn}>
            {options.map((option) => {
                return (
                    <li key={option}>
                            <button name={option} onClick={leaveFeedback} type='button'>
                                {option}
                        </button>
                    </li>   
                )
            })

            }
        
         
        </ul>
    )
 }
    
 
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    leaveFeedback: PropTypes.func
 }