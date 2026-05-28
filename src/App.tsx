import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { InstituteLayout } from './components/layout/InstituteLayout';
import { InstituteHome } from './pages/institute/Home';
import { InstituteAbout } from './pages/institute/About';
import { InstituteCourses } from './pages/institute/Courses';
import { InstituteNews } from './pages/institute/News';
import { InstituteNewsDetail } from './pages/institute/NewsDetail';
import { InstituteContact } from './pages/institute/Contact';
import { InstituteApply } from './pages/institute/Apply';
import { PortalLogin } from './pages/institute/PortalLogin';
import { PortalDashboard } from './pages/institute/PortalDashboard';
import { SchoolLayout } from './components/layout/SchoolLayout';
import { SchoolHome } from './pages/school/Home';
import { SchoolAbout } from './pages/school/About';
import { SchoolPrograms } from './pages/school/Programs';
import { SchoolAdmissions } from './pages/school/Admissions';
import { SchoolGallery } from './pages/school/Gallery';
import { SchoolContact } from './pages/school/Contact';
import { useScreenInit } from './useScreenInit';
export function App() {
  useScreenInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Institute Portal Routes (No Layout) */}
        <Route path="/institute/portal" element={<PortalLogin />} />
        <Route
          path="/institute/portal/dashboard"
          element={<PortalDashboard />} />
        

        {/* Institute Main Routes (With Layout) */}
        <Route path="/institute" element={<InstituteLayout />}>
          <Route index element={<InstituteHome />} />
          <Route path="about" element={<InstituteAbout />} />
          <Route path="courses" element={<InstituteCourses />} />
          <Route path="news" element={<InstituteNews />} />
          <Route path="news/:slug" element={<InstituteNewsDetail />} />
          <Route path="contact" element={<InstituteContact />} />
          <Route path="apply" element={<InstituteApply />} />
        </Route>

        {/* School Routes */}
        <Route path="/school" element={<SchoolLayout />}>
          <Route index element={<SchoolHome />} />
          <Route path="about" element={<SchoolAbout />} />
          <Route path="programs" element={<SchoolPrograms />} />
          <Route path="admissions" element={<SchoolAdmissions />} />
          <Route path="gallery" element={<SchoolGallery />} />
          <Route path="contact" element={<SchoolContact />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}