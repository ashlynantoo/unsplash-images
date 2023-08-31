import { ToastContainer } from "react-toastify";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <main>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};

export default App;
