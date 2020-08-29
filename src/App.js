import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import News from "./component/News/News";
import Header from "./component/Header/Header";
export default function App() {
  return (
    <div className="App">
      <h1 className="text-danger">Hello CodeSandbox</h1>
      <Header></Header>
      <div className="col-md-6">
        <News></News>
      </div>
      <div clasName="col-md-6"></div>
    </div>
  );
}
