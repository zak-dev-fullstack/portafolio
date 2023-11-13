import { useTypingText } from "./useTypingText";
import "./titulo.css";

export default function TextProyectos() {
  const { word } = useTypingText(["Proyectos", "Labs", "Apps"], 60, 60, 60);
  return (
    <>
      <div className="titulo">{word}</div>
    </>
  );
}
