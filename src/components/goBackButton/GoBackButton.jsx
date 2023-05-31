import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from 'components/goBackButton/GoBackButton.module.css';

const GoBackButton = ({ backLinkLocationRef }) => {
  return (
    <Link to={backLinkLocationRef} className={css.goBackBtn}>
      Go back
    </Link>
  );
};

GoBackButton.propTypes = {
  backLinkLocationRef: PropTypes.object,
};

export default GoBackButton;
