import { useTypingText } from "./useTypingText";
import "./titulo.css";

export default function TextZakdev() {
  const { word } = useTypingText(
    ["Bio", "Servicios", "Full-Stack"],
    60,
    60,
    60
  );
  return (
    <>
      <div className="titulo">{word}</div>
    </>
  );
}
