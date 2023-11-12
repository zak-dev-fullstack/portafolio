/* eslint-disable react/react-in-jsx-scope */
import Logozakdev from "./logozakdev.webp";
import "./logo.css";
import Link from "next/link";
import Image from "next/image";


function ZakdevLogo() {
  return (
    <>
      <Link href="/">
        <Image src={Logozakdev} className="zakdev-logo" alt="zak-dev-logo" />
      </Link>
    </>
  );
}

export default ZakdevLogo;
