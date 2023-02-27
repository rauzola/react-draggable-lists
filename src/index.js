import React from "react";
import ReactDOM from "react-dom";
import DraggableList from "react-draggable-lists";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <hi>react-draggable-lists</hi>
        <div style={{ width: 250, margin: "0 auto" }}>
          <DraggableList
            width={250}
            height={300}
            padding={5}
            margin={10}
            rowSize={2}
          >
            <div style={{ width: 250, height: 300, background: "green" }}>
              1
            </div>
            <div style={{ width: 250, height: 300, background: "blue" }}>2</div>
            <div style={{ width: 250, height: 300, background: "red" }}>3</div>
            <div style={{ width: 250, height: 300, background: "yellow" }}>
              3
            </div>
          </DraggableList>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
