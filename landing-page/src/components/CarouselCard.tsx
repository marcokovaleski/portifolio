import React from "react";

interface CarouselCardProps {
  image: string;
  alt: string;
  testimony: string;
  rating: number;
  name: string;
  title: string;
  star: string;
  starOuter: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  image,
  alt,
  testimony,
  rating,
  name,
  title,
  star,
  starOuter,
}) => {
  return (
    <div className="carousel-card">
      <img src={image} alt={alt} />
      <span className="testimony">
        <p>{testimony}</p>
      </span>
      <span className="rating">
        {[...Array(rating)].map((_, i) => (
          <img key={i} src={star} alt="ícone estrela" width={22} height={20} />
        ))}
        <img
          src={starOuter}
          alt="ícone estrela sem fundo"
          width={20}
          height={22}
        />
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{title}</p>
      </span>
    </div>
  );
};

export default CarouselCard;
