/**
 * Componente de card para o carrossel de habilidades
 * Exibe ícone, descrição, nome e nível da ferramenta
 */

import React from "react";

// Interface para as props do card do carrossel
interface CarouselCardProps {
  image: string;
  alt: string;
  testimony: string;
  name: string;
  title: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  image,
  alt,
  testimony,
  name,
  title,
}) => {
  return (
    <div className="carousel-card">
      <img src={image} alt={alt} />
      <span className="testimony">
        <p>{testimony}</p>
      </span>
      {/* O BLOCO <span className="rating"> FOI COMPLETAMENTE REMOVIDO DAQUI.
       */}
      <span className="names">
        <p>{name}</p>
        <p>{title}</p>
      </span>
    </div>
  );
};

export default CarouselCard;
