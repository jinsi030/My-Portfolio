/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PeripheralFrame } from './components/PeripheralFrame';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { WorkView } from './components/WorkView';
import { AboutView } from './components/AboutView';
import { BuildLabSection } from './components/BuildLabSection';
import { ResumeView } from './components/ResumeView';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PROJECTS } from './data/projects';
import { NavTab, Project } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track window scroll progress for the peripheral measuring rail
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when changing tabs
  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedCaseStudy(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-[#FBF7F5] text-[#21151F] flex flex-col justify-between selection:bg-[#E9C8CF] selection:text-[#351C35]">
      {/* Custom Contextual Cursor Follower (Desktop only) */}
      <CustomCursor />

      {/* Brand Apart Fixed Peripheral Navigation, Progress Rail & Bottom CTA */}
      <PeripheralFrame
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        scrollProgress={scrollProgress}
      />

      {/* Main Content Area (With ample margins to respect peripheral interface) */}
      <main className="flex-1 pt-20 sm:pt-24 pb-28 lg:px-16 xl:px-24">
        {currentTab === 'home' && (
          <HomeView
            onOpenCaseStudy={handleOpenCaseStudy}
            onNavigateToWork={() => handleSelectTab('work')}
            onNavigateToResume={() => handleSelectTab('resume')}
            onNavigateToContact={() => handleSelectTab('contact')}
          />
        )}

        {currentTab === 'work' && (
          <WorkView onOpenCaseStudy={handleOpenCaseStudy} />
        )}

        {currentTab === 'about' && (
          <AboutView
            onNavigateToContact={() => handleSelectTab('contact')}
            onNavigateToResume={() => handleSelectTab('resume')}
          />
        )}

        {currentTab === 'build-lab' && (
          <div className="py-8">
            <BuildLabSection onSelectProject={handleOpenCaseStudy} />
          </div>
        )}

        {currentTab === 'resume' && (
          <ResumeView onBackToFunVersion={() => handleSelectTab('home')} />
        )}

        {currentTab === 'contact' && (
          <ContactSection onOpenResume={() => handleSelectTab('resume')} />
        )}
      </main>

      {/* 7-Stage Architectural Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={handleCloseCaseStudy}
          onSelectProject={handleOpenCaseStudy}
          allProjects={PROJECTS}
        />
      )}

      {/* Global Minimal Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}

