import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const Dashboard = () => {
  const [code, setCode] = useState("print('Hello, World!')");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("python");

  const runCode = async () => {
    setOutput("Running...");
    try {
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language,
        source: code,
      });
      setOutput(response.data.run.output);
    } catch (error) {
      setOutput("Error executing code: " + error.message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-900 text-white p-4"> 
        <h2 className="text-xl font-bold">Dashboard</h2>
        <select 
          className="mt-2 p-2 bg-gray-700 text-white rounded"
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Code Editor</h1>
        <div className="bg-gray-800 p-4 rounded">
          <Editor 
            height="300px" 
            defaultLanguage={language} 
            value={code} 
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
          />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={runCode}>Run Code</button>
        </div>
        
        {/* Output Terminal */}
        <div className="bg-gray-900 text-white p-4 mt-4 rounded">
          <h2 className="text-lg font-bold">Output</h2>
          <pre className="bg-black text-green-400 p-2 mt-2 rounded">{output}</pre>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
