import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const request = " http://localhost:3006/posts ";
        const response = await fetch(request);
        const photo = await response.json();
        setPhotos(photo);
        console.log(photo);
      } catch (error) {}
    };
    getData();
  }, []);
  const specificValueFromArray = photos.filter((obj) => obj.id).slice(0, 5);
  console.log(specificValueFromArray);
  return (
    <div>
      <section className="gallery-section">
        <div className="gallery-title">
          <h2>Gallery</h2>
        </div>
        <div className="gallery-photos">
          {specificValueFromArray.map((item) => {
            return (
              <div className="photo" key={item.id}>
                <div className="photo-container">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="photo-content">
                  <h3 className="photo-title">{item.title}</h3>
                  <p className="photo-text">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
