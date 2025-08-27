import React from 'react';
import { useAutoTranslation } from '../../../utils/autoI18n';
import AutoTranslatedText from '../../../components/AutoTranslatedText';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar?: string;
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ className = '' }) => {
  const { translate } = useAutoTranslation();

  const teamMembers: TeamMember[] = [
    {
      name: '张三',
      role: '前端开发工程师',
      description: '专注于React和TypeScript开发，热爱新技术和最佳实践。'
    },
    {
      name: '李四',
      role: 'UI/UX设计师',
      description: '负责用户界面设计和用户体验优化，确保产品美观易用。'
    },
    {
      name: '王五',
      role: '全栈开发工程师',
      description: '具备前后端开发能力，负责系统架构和技术选型。'
    }
  ];

  return (
    <div className={`bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 ${className}`}>
      <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4">
        <AutoTranslatedText>我们的团队</AutoTranslatedText>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 font-semibold">
                  {member.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">{member.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
