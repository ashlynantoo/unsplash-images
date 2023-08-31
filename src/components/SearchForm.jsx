import { toast } from "react-toastify";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (!searchValue) {
      toast.error("Please enter the input");
    } else {
      setSearchTerm(searchValue);
    }
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="website"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
