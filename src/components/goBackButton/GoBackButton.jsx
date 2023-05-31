import { Link } from 'react-router-dom';
import css from 'components/goBackButton/GoBackButton.module.css';

const GoBackButton = ({ backLinkLocationRef }) => {
  return (
    <Link to={backLinkLocationRef} className={css.goBackBtn}>
      Go back
    </Link>
  );
};

export default GoBackButton;
