"use client";
import { useTypingText } from "./useTypingText";
import "./titulo.css";

export default function TextSkills() {
  const { word } = useTypingText(
    ["Skills", "Habilidades","Tecnológicas"],
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
