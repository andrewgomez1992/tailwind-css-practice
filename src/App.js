import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        );
        setImages(response?.data?.hits);
        setIsLoading(false);
        console.log("images", response?.data?.hits);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [term]);

  return (
    <div className="container mx-auto mt-4">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">is loading</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
