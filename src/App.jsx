import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./pages/Dashboard";
import TopicManagement from "./pages/TopicManagement";
import ResourceLibrary from "./pages/ResourceLibrary";
import RevisionScheduler from "./pages/RevisionScheduler";
import FlashcardsQuizzes from "./pages/FlashcardsQuizzes";
import InterviewVault from "./pages/InterviewVault";
import ProgressTracker from "./pages/ProgressTracker";
import CodeSnippetLibrary from "./pages/CodeSnippetLibrary";
import LearningInsights from "./pages/LearningInsights";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/topics" element={<TopicManagement />} />
              <Route path="/resources" element={<ResourceLibrary />} />
              <Route path="/revision" element={<RevisionScheduler />} />
              <Route path="/flashcards" element={<FlashcardsQuizzes />} />
              <Route path="/interview-vault" element={<InterviewVault />} />
              <Route path="/progress" element={<ProgressTracker />} />
              <Route path="/snippets" element={<CodeSnippetLibrary />} />
              <Route path="/insights" element={<LearningInsights />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
