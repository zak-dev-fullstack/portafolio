import { useTypingText } from "./useTypingText";
import "./titulo.css";

export default function TextPortafolio() {
  const { word } = useTypingText(
    ["Portafolio", "ZaK DeV", "Bienvenid@s!"],
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
