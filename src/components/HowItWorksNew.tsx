
import { useState } from "react";

export const HowItWorksNew = () => {
  const [activeTab, setActiveTab] = useState<"clients" | "developers">("clients");

  const clientSteps = [
    {
      number: 1,
      title: "Discover Agents",
      description: "Browse ready to use AI agents."
    },
    {
      number: 2,
      title: "Instant Purchase",
      description: "Buy pre-built agents with one click."
    },
    {
      number: 3,
      title: "Rate the Agent",
      description: "Help ensure quality with community-powered ratings."
    },
    {
      number: 4,
      title: "Post a Job",
      description: "Need custom AI agent? Publish a request and let top developers apply."
    }
  ];

  const developerSteps = [
    {
      number: 1,
      title: "Publish Agents",
      description: "List your agents to the marketplace."
    },
    {
      number: 2,
      title: "Receive Requests",
      description: "Get inquiries and connect directly with buyers."
    },
    {
      number: 3,
      title: "Grow Community",
      description: "Engage with other builders and scale your presence."
    },
    {
      number: 4,
      title: "Customize Everything",
      description: "Use drag & drop tools to design your profile and agent page."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            How It Works
          </h2>
          
          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab("clients")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "clients"
                    ? "bg-black text-white"
                    : "bg-transparent text-black hover:bg-gray-200"
                }`}
              >
                For Clients
              </button>
              <button
                onClick={() => setActiveTab("developers")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "developers"
                    ? "bg-black text-white"
                    : "bg-transparent text-black hover:bg-gray-200"
                }`}
              >
                For Developers
              </button>
            </div>
          </div>
        </div>

        {/* Steps Content */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {(activeTab === "clients" ? clientSteps : developerSteps).map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                {/* Number */}
                <div className="flex-shrink-0 text-lg font-bold text-black">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
