import css from 'components/searchForm/SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="query" className={css.searchField} />
      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
