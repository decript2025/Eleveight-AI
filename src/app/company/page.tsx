'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  Fullname: string;
  Position: string;
  Bio?: string;
  Image?: {
    url: string;
  };
}

export default function CompanyPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    async function fetchTeamMembers() {
      try {
        const response = await fetch('https://console.eleveight.ai/api/teams?populate=Image');
        const data = await response.json();
        setTeamMembers(data.data || []);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTeamMembers();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">      
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Empowering AI infrastructure & data innovation
            </h1>
            
            <div className="prose prose-lg mx-auto text-black">
              <p className="text-xl mb-8 text-left text-gray-600">
              Eleveight AI is dedicated data cluster under DIGI Data – the largest colocated data center in Armenia, with an installed capacity of 20 MW. Leveraging the technological and infrastructural foundation of DIGI Data, the project ensures high reliability, scalability, and full compliance with the most advanced industry standards.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl text-center md:text-5xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                  To empower the next generation of artificial intelligence by providing world-class infrastructure, computing power, and scientific expertise — enabling innovators, researchers, and enterprises to turn their most ambitious ideas into reality.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl text-center md:text-5xl font-semibold mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                  To establish Armenia as a leading hub for AI innovation and data infrastructure — where technology, research, and industry unite to accelerate global progress.
                  </p>
                </div>
              </div>
              
              <div className="mt-16">
                <h2 className="text-2xl text-center md:text-5xl font-semibold mb-6">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Innovation</h3>
                    <p className="text-sm text-gray-600">
                    We pioneer advancements in AI infrastructure and data technologies, constantly exploring new ways to accelerate the future of artificial intelligence.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Accessibility</h3>
                    <p className="text-sm text-gray-600">
                    We make cutting-edge computing power and AI resources available to innovators and enterprises of all sizes — fostering equal opportunity in the global tech ecosystem.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Excellence</h3>
                    <p className="text-sm text-gray-600">
                    We deliver uncompromising quality across every layer of our work — from engineering and data center operations to customer experience and research partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                  {/* Team Members Section */}
                  <div className="max-w-7xl mx-auto mb-20 px-8">
            <h2 className="text-2xl text-center md:text-5xl font-semibold mb-8">
              Our Team
            </h2>
            
            {!isMounted ? (
              <div className="text-center text-gray-600">Loading team members...</div>
            ) : loading ? (
              <div className="text-center text-gray-600">Loading team members...</div>
            ) : (
              <>
                {/* Mobile: 1 column, Tablet: 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:hidden gap-x-8 gap-y-8 md:gap-y-12">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex flex-col items-center text-center">
                      {member.Image?.url && (
                        <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
                          <Image
                            src={`https://console.eleveight.ai${member.Image.url}`}
                            alt={member.Fullname}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover rounded-full"
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-bold mb-1">{member.Fullname}</h3>
                      <p className="text-sm text-gray-600">{member.Position}</p>
                    </div>
                  ))}
                </div>

                {/* Desktop: Alternating 4-3-4-3 pattern */}
                <div className="hidden lg:block">
                  {(() => {
                    const rows: TeamMember[][] = [];
                    let currentIndex = 0;
                    
                    while (currentIndex < teamMembers.length) {
                      const isFirstRowOfPair = rows.length % 2 === 0;
                      const itemsInRow = isFirstRowOfPair ? 4 : 3;
                      rows.push(teamMembers.slice(currentIndex, currentIndex + itemsInRow));
                      currentIndex += itemsInRow;
                    }
                    
                    return rows.map((row, rowIndex) => {
                      const isFirstRowOfPair = rowIndex % 2 === 0;
                      
                      return (
                        <div 
                          key={rowIndex} 
                          className={`grid gap-x-8 gap-y-12 mb-12 ${isFirstRowOfPair ? 'grid-cols-4' : 'grid-cols-3 max-w-5xl mx-auto'}`}
                        >
                          {row.map((member) => (
                            <div key={member.id} className="flex flex-col items-center text-center">
                              {member.Image?.url && (
                                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
                                  <Image
                                    src={`https://console.eleveight.ai${member.Image.url}`}
                                    alt={member.Fullname}
                                    fill
                                    sizes="160px"
                                    className="object-cover rounded-full"
                                  />
                                </div>
                              )}
                              <h3 className="text-lg font-bold mb-1">{member.Fullname}</h3>
                              <p className="text-sm text-gray-600">{member.Position}</p>
                            </div>
                          ))}
                        </div>
                      );
                    });
                  })()}
                </div>
              </>
            )}
          </div>
      </main>
    </div>
  );
}
