import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css"; 

const MasonryImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {

    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.imgbb.com/1/images?key=19f2c08c2ca4048231db43077011d7b2");

        const imageData = response.data.data;
        setImages(imageData); 
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Uploaded Images</h2>
      <Masonry
        breakpointCols={{
          default: 4,  
          500: 1,      
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <div key={image.id} className="mb-4">
            <img
              src={image.url} 
              alt={image.title}
              className="w-full h-auto object-cover"
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryImageList;
