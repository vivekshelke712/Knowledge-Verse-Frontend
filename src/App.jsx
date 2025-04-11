import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import RoadMaps from "./pages/RoadMaps";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import CertificationPage from "./pages/DashboardPages/CertificationPage";
import ResourcePage from "./pages/DashboardPages/ResourcePage";
import RepositoriesPage from "./pages/DashboardPages/RepositoriesPage";
import LinksPage from "./pages/DashboardPages/LinksPage";
import TopicsPage from "./pages/DashboardPages/TopicsPage";
import GoalsPage from "./pages/DashboardPages/GoalsPage";
import StudyBuddyPage from "./pages/DashboardPages/StudyBuddyPage";
import HackathonPage from "./pages/DashboardPages/HAckathonPage";
import RoadMapsPage from "./pages/DashboardPages/RoadMapsPage";
import CalendarPage from "./pages/DashboardPages/CalendarPage";
import ProgressPage from "./pages/DashboardPages/ProgressPage";
import NotesPage from "./pages/DashboardPages/NotesPage";
import ResumeUploadPage from "./pages/DashboardPages/ResumeUploadPage";
import MentorShipPage from "./pages/DashboardPages/MentorShipPage";
import AIToolsPage from "./pages/DashboardPages/AIToolsPage";
import Register from "./components/Register";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import Test from "./pages/Test";

const App = () => {
  return (
    <div>
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/roadmap" element={<RoadMaps />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Dashboard PAges  */}
          <Route
            path="/dashboard/certifications"
            element={<CertificationPage />}
          />
          <Route path="/dashboard/resources" element={<ResourcePage />} />
          <Route
            path="/dashboard/repositories"
            element={<RepositoriesPage />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/links" element={<LinksPage />} />
          <Route path="/dashboard/topics" element={<TopicsPage />} />
          <Route path="/dashboard/goals" element={<GoalsPage />} />
          <Route path="/dashboard/study-buddies" element={<StudyBuddyPage />} />
          <Route path="/dashboard/hackathons" element={<HackathonPage />} />
          <Route path="/dashboard/roadmaps" element={<RoadMapsPage />} />
          <Route path="/dashboard/calendar" element={<CalendarPage />} />
          <Route path="/dashboard/progress" element={<ProgressPage />} />
          <Route path="/dashboard/notes" element={<NotesPage />} />
          <Route path="/dashboard/resume" element={<ResumeUploadPage />} />
          <Route path="/dashboard/forum" element={<AIToolsPage />} />
          <Route path="/dashboard/mentorship" element={<MentorShipPage />} />

          {/* <Route path="/aboutus" element={<h1>Page Not Found</h1>} /> */}
          {/* <Route path="/aboutus" element={<h1>Page Not Found</h1>} /> */}
          {/* <Route path="/aboutus" element={<h1>Page Not Found</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
