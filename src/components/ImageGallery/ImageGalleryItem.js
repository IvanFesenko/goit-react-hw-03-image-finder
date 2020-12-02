import s from './ImageGallery.module.css';

function ImageGalleryItem({ imageSrc, imageUrl }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={imageSrc}
        alt=""
        data-url={imageUrl}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
}

export default ImageGalleryItem;
