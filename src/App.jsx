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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/roadmap" element={<RoadMaps />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userDash" element={<Dashboard />} />

          {/* Dashboard PAges  */}
          <Route
            path="/dashboard/certifications"
            element={<CertificationPage />}
          />
          <Route path="/dashboard/resources" element={<ResourcesPage />} />
          <Route
            path="/dashboard/repositories"
            element={<RepositoriesPage />}
          />
          <Route path="/dashboard/links" element={<LinksPage />} />
          <Route path="/dashboard/topics" element={<TopicsPage />} />
          <Route path="/dashboard/goals" element={<GoalsPage />} />
          <Route path="/dashboard/study-buddies" element={<StudyBuddyPage />} />
          <Route path="/dashboard/hackathons" element={<HackathonPage />} />
          <Route path="/dashboard/roadmaps" element={<RoadmapsPage />} />
          <Route path="/dashboard/calendar" element={<CalendarPage />} />
          <Route path="/dashboard/progress" element={<ProgressPage />} />
          <Route path="/dashboard/notes" element={<NotesPage />} />
          <Route path="/dashboard/resume" element={<ResumeUploadPage />} />
          <Route path="/dashboard/forum" element={<ForumPage />} />
          <Route path="/dashboard/mentorship" element={<MentorshipPage />} />

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
