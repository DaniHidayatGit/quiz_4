import { useState } from "react";
import Tombol from "./Tombol";

export default function KotakTeks(props) {
  const [teks, setTeks] = useState(" ");

  return (
    <>
      <input onChange={(e) => setTeks(e.target.value)} type="text"></input>
      <Tombol name={teks}>Input saya</Tombol>
    </>
  );
}
