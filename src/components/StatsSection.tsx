import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

export const StatsSection = () => {
  const [developerCount, setDeveloperCount] = useState(57);
  const [clientCount, setClientCount] = useState(26);
  const [aiAgentsCount, setAIAgentsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (Math.random() < 0.15) { // Lower chance for slower growth
        setDeveloperCount(prev => prev + 1);
      }
      if (Math.random() < 0.08) { // Even lower chance to keep developers higher
        setClientCount(prev => prev + 1);
      }
    }, 15000); // Slower interval (15 seconds)

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    // Fetch client count from Supabase
    const fetchClientCount = async () => {
      const { count, error } = await supabase
        .from('signups')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'client');
      if (!error && typeof count === 'number') {
        setAIAgentsCount(count);
      }
    };
    fetchClientCount();
  }, []);

  const stats = [
    {
      label: "Developers",
      value: developerCount.toString(),
      description: "Building AI solutions"
    },
    {
      label: "Clients", 
      value: clientCount.toString(),
      description: "Finding automation tools"
    },
    {
      label: "AI Agents",
      value: aiAgentsCount.toString(),
      description: "Platform launching soon"
    },
    {
      label: "Growth Rate",
      value: "100%",
      description: "Month over month"
    }
  ];

  return (
    <section ref={sectionRef} className="relative -mt-24 z-20 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center py-12 px-6 transition-all duration-300 hover:bg-gray-50 ${index < 3 ? 'border-r border-gray-200' : ''} ${index < 2 ? 'border-b border-gray-200 md:border-b-0' : ''}`}>
                <div className="text-4xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-black mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
