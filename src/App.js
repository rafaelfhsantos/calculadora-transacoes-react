import "./App.css";
import { Main } from "./style";
import RequestSection from "./components/RequestSection";
import ResponseSection from "./components/ResponseSection";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main>
          <RequestSection />
          <ResponseSection />
          <ToastContainer />
        </Main>
      </header>
    </div>
  );
}

export default App;
