import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import html2pdf from "html2pdf.js";

const NotesPage = () => {
  const [value, setValue] = useState("");
  const [fileName, setFileName] = useState("MyNote");
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    const savedName =
      localStorage.getItem("knowledgeverse_note_name") || "MyNote";
    const savedNote = localStorage.getItem(`knowledgeverse_note_${savedName}`);
    setFileName(savedName);
    if (savedNote) setValue(savedNote);
    loadSavedNotes();
  }, []);

  const loadSavedNotes = () => {
    const keys = Object.keys(localStorage);
    const noteFiles = keys
      .filter((key) => key.startsWith("knowledgeverse_note_"))
      .map((key) => key.replace("knowledgeverse_note_", ""));
    setSavedNotes(noteFiles);
  };

  const handleSave = () => {
    if (!fileName.trim()) {
      alert("Please enter a valid filename.");
      return;
    }
    localStorage.setItem("knowledgeverse_note_name", fileName);
    localStorage.setItem(`knowledgeverse_note_${fileName}`, value);
    loadSavedNotes();
    alert("Note saved successfully ✨");
  };

  const handleDownload = () => {
    const element = document.createElement("div");
    element.innerHTML = value;
    html2pdf()
      .from(element)
      .set({ margin: 1, filename: `${fileName}.pdf` })
      .save();
  };

  const handleLoadNote = (name) => {
    const noteContent = localStorage.getItem(`knowledgeverse_note_${name}`);
    if (noteContent !== null) {
      setValue(noteContent);
      setFileName(name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-yellow-50 py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-yellow-300">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6 text-center">
          📝 KnowledgeVerse Notes
        </h1>
        <p className="text-yellow-800 text-center text-lg mb-6">
          Create and organize your notes beautifully. Great for journaling your
          learning progress, writing article drafts, or saving ideas.
        </p>

        <div className="mb-6">
          <label className="block text-yellow-800 font-semibold mb-2">
            File Name:
          </label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full border border-yellow-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your note file name"
          />
        </div>

        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="bg-white border border-yellow-300 rounded-xl shadow-md h-[400px] mb-6"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-end mb-6">
          <button
            onClick={handleSave}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            Save Note
          </button>
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            Download PDF
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            📂 Your Saved Notes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedNotes.length === 0 ? (
              <p className="text-yellow-800">
                No notes found. Start creating one!
              </p>
            ) : (
              savedNotes.map((note) => (
                <button
                  key={note}
                  onClick={() => handleLoadNote(note)}
                  className="bg-yellow-100 border border-yellow-300 rounded-xl px-4 py-3 text-left text-yellow-800 font-medium shadow-sm hover:shadow-md hover:bg-yellow-200 transition duration-300"
                >
                  📄 {note}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
