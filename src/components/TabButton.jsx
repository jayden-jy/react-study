export default function TabButton({ children }) {
  function handleClick() {
    console.log("Hello World");
  }

  return (
    <li><button onClick={handleClick}>{children}</button></li>
  );
}

// label 형식
// export default function TabButton({ label }) {
//   return (
//     <li><button>{label}</button></li>
//   );
// }