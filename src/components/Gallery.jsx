import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context";
import axios from "axios";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const url = "https://api.unsplash.com/search/photos";
  const accessKey = import.meta.env.VITE_API_KEY;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(
        `${url}?client_id=${accessKey}&query=${searchTerm}&per_page=15`
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="loading-window">
        <div className="loading"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="loading-window">
        <h4>An error occurred. Please try again later.</h4>
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className="loading-window">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
