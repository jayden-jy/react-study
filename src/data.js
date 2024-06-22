import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "핵심 UI 구성 요소 - 여러 구성 요소를 결합하여 사용자 인터페이스를 구성합니다.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "렌더링될 실제 마크업을 정의하기 위해 (잠재적으로 동적인) HTML(ish) 코드를 반환합니다.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "입력 데이터를 구성요소에 전달하여 구성요소를 구성 가능하게(따라서 재사용 가능하게) 만듭니다.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "변경 시 구성 요소가 다시 렌더링되고 UI가 업데이트되는 React 관리형 데이터입니다.",
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      '컴포넌트는 React 애플리케이션의 구성 요소입니다. 구성 요소는 일부 출력을 렌더링하는 자체 포함 모듈(HTML + 선택적 CSS + JS)입니다.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX는 JavaScript의 구문 확장입니다. 템플릿 언어와 유사하지만 JavaScript의 모든 기능을 갖추고 있습니다(예: 동적 콘텐츠를 출력할 수 있음).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      '구성 요소는 props라는 임의의 입력을 허용합니다. 이는 함수 인수와 같습니다.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      '상태를 사용하면 React 구성 요소가 사용자 작업, 네트워크 응답 등에 대한 응답으로 시간이 지남에 따라 출력을 변경할 수 있습니다.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};