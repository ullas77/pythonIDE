import React, { useState } from "react";

const Editor = () => {
  const [code, setCode] = useState("");

  const runPythonCode = async () => {
    const pyodide = await window.loadPyodide();
    const result = pyodide.runPython(code);
    alert(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={50}
        placeholder="Write Python code here..."
      />
      <br />
      <button onClick={runPythonCode}>Run</button>
    </div>
  );
};

export default Editor;
