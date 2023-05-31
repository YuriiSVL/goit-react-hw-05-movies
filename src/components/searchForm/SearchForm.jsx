import PropTypes from 'prop-types';
import css from 'components/searchForm/SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input type="text" name="query" className={css.searchField} />
      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
