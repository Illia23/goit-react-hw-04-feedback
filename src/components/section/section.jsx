import PropTypes from 'prop-types';
import css from './section.module.css'

export const Section = ({ title, children }) => {
    return (
        <div className={css.containerSection}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}