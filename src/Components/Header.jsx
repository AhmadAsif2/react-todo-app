import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        showAdd={showAdd}
        color={showAdd ? 'red' : 'green'}
      />
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
