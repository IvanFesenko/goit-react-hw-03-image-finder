import s from './ImageGallery.module.css';

import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => {
        const { webformatURL, largeImageURL, id } = image;
        return (
          <ImageGalleryItem
            key={id}
            imageSrc={webformatURL}
            imageUrl={largeImageURL}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;
