// label 형식
// export default function TabButton({ label }) {
//   return (
//     <li><button>{label}</button></li>
//   );
// }

// children은 리액트 리능 고유명
// onSelect는 임의로 이름변경가능 앞에 on을 붙이는게 자주쓰이는 규칙중에 하나
// export default function TabButton({ children, onSelect, isSelected }) {
//   return (
//     <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
//   );
// }

// props를 내보내는 형식을 ...props을 활용하여 TabButton 컴포넌트에서 처리
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li><button className={isSelected ? 'active' : undefined} {...props}>{children}</button></li>
  );
}

