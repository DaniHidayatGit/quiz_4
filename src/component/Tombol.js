export default function Tombol(props) {
  return <button onClick={() => alert(props.name)}>{props.children}</button>;
}
