import React from "react";
import "./styles.css";

const BlueHoc = (WrappedComp) => {
  return (props) => (
    <div style={{ backgroundColor: "blue" }}>
      <WrappedComp {...props} />
    </div>
  );
};

function Demo(props) {
  return (
    <div className="App">
      <h1>Hello {props.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
const WithHocComp = BlueHoc(Demo);

function App() {
  return <WithHocComp name="jatin" />;
}

export default App;
