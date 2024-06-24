import { Fragment } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <Fragment> {/*Fragment는 실제 화면에 랜더링되지 않음*/}
    <> {/*빈태그는 Fragment의 대안*/}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
    </Fragment>
  );
}

export default App;
