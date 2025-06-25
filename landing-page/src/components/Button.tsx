/**
 * Componente de botão reutilizável
 * Suporta variantes primária e secundária
 */

import "../styles/buttons.css";

// Interface para as props do botão
interface IButtonProps {
  text: string;
  secondary?: boolean;
}

export default function Button({ text, secondary }: IButtonProps) {
  return (
    <button className={secondary ? "btn-secondary" : "btn-primary"}>
      {text}
    </button>
  );
}
