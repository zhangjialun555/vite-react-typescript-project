import React from 'react';
import { AboutHeader, TechStack, TeamSection, MissionSection } from './components';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-area">
        <AboutHeader />
        
        <div className="space-y-8">
          <TechStack />
          <TeamSection />
          <MissionSection />
        </div>
      </div>
    </div>
  );
};

export default About;
