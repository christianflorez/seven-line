import React from "react";
import Container from "react-bootstrap/Container";
import ImageGallery from "react-image-gallery";

import * as S from "./styles";

const images = [
  {
    original: "images/gallery/IMG_3106.JPG",
    thumbnail: "images/gallery/IMG_3106_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3112.JPG",
    thumbnail: "images/gallery/IMG_3112_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3116.JPG",
    thumbnail: "images/gallery/IMG_3116_tn.jpg",
  },
  {
    original: "images/gallery/gdc.jpg",
    thumbnail: "images/gallery/gdc_tn.jpg",
    description:
      "A sacred terma statue of Guru Rinpoche known as Guru Dewa Chenpo, said to liberate one upon seeing it. This was one of the most precious items kept by Kyabje Dudjom Jigdral Yeshe Dorje Rinpoche, who would often sit in meditation with it. While he meditated with it, it would shed tears of amrita.",
  },
  {
    original: "images/gallery/IMG_3121.JPG",
    thumbnail: "images/gallery/IMG_3121_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3132.JPG",
    thumbnail: "images/gallery/IMG_3132_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3158.JPG",
    thumbnail: "images/gallery/IMG_3158_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3161.JPG",
    thumbnail: "images/gallery/IMG_3161_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3167.JPG",
    thumbnail: "images/gallery/IMG_3167_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3171.JPG",
    thumbnail: "images/gallery/IMG_3171_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3107.JPG",
    thumbnail: "images/gallery/IMG_3107_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3113.JPG",
    thumbnail: "images/gallery/IMG_3113_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3117.JPG",
    thumbnail: "images/gallery/IMG_3117_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3123.JPG",
    thumbnail: "images/gallery/IMG_3123_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3154.JPG",
    thumbnail: "images/gallery/IMG_3154_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3159.JPG",
    thumbnail: "images/gallery/IMG_3159_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3162.JPG",
    thumbnail: "images/gallery/IMG_3162_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3168.JPG",
    thumbnail: "images/gallery/IMG_3168_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3109.JPG",
    thumbnail: "images/gallery/IMG_3109_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3114.JPG",
    thumbnail: "images/gallery/IMG_3114_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3118.JPG",
    thumbnail: "images/gallery/IMG_3118_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3130.JPG",
    thumbnail: "images/gallery/IMG_3130_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3155.JPG",
    thumbnail: "images/gallery/IMG_3155_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3160.JPG",
    thumbnail: "images/gallery/IMG_3160_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3163.JPG",
    thumbnail: "images/gallery/IMG_3163_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3169.JPG",
    thumbnail: "images/gallery/IMG_3169_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3111.JPG",
    thumbnail: "images/gallery/IMG_3111_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3115.JPG",
    thumbnail: "images/gallery/IMG_3115_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3120.JPG",
    thumbnail: "images/gallery/IMG_3120_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3131.JPG",
    thumbnail: "images/gallery/IMG_3131_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3157.JPG",
    thumbnail: "images/gallery/IMG_3157_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3160_1.JPG",
    thumbnail: "images/gallery/IMG_3160_1_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3165.JPG",
    thumbnail: "images/gallery/IMG_3165_tn.jpg",
  },
  {
    original: "images/gallery/IMG_3170.JPG",
    thumbnail: "images/gallery/IMG_3170_tn.jpg",
  },
];

function Gallery() {
  return (
    <Container>
      <S.PageHeader>Gallery</S.PageHeader>
      <ImageGallery items={images} />
    </Container>
  );
}

export default Gallery;
