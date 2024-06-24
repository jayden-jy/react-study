import { useState } from "react"; // 리액트 훅

import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data";

export default function Examples() {
  //let tabContent = "please click a button"; // 일반적인 변수로는 UI를 업데이트를 할 수 없음
  const [selectedTopic, setSelectedTopic] = useState();

  // selectedButton 커스텀식별자와 커스텀매개변수를 얻음
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log(selectedButton);

    // tabContent = selectedButton; UI가 업데이트 안됨
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>주제를 선택해주세요.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {/* <TabButton label="Components" /> label 형식 */}
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
      {/* {selectedTopic} */}

      {/* 삼항연산자
      {!selectedTopic ? (
        <p>주제를 선택해주세요.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

      {/* &&을 이용한 속임수 코드간결하게 변경 
      {!selectedTopic && <p>주제를 선택해주세요.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

      {/* 변수를 이용한 방법 */}
      {tabContent}
    </section>
  )
}