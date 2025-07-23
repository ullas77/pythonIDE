import React, { useEffect } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import { app } from "./firebase";

function App() {
  useEffect(() => {
    console.log("Firebase initialized:", app.name);
  }, []);

  return (
    <div>
      <Header />
      <Editor />
    </div>
  );
}

export default App;
