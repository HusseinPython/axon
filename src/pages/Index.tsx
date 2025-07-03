
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Header } from "@/components/Header";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorksNew } from "@/components/HowItWorksNew";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const navigate = useNavigate();

  const handleExploreAgents = () => {
    navigate("/signup?role=client");
  };

  const handlePublishAgent = () => {
    navigate("/signup?role=developer");
  };

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <AnimatedGrid />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight tracking-tight">
            <span className="inline-block animate-fade-in">AI AGENTS </span>
            <span className="inline-block animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] mx-2"> MARKETPLACE</span>
          </h1>
          <div className="w-px h-12 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Axon is a peer-to-peer marketplace where small businesses find custom AI automation tools made by developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-4 bg-black text-white hover:bg-gray-800 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={handleExploreAgents}
            >
              Explore Agents
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              onClick={handlePublishAgent}
            >
              Publish Agent
            </Button>
          </div>
        </div>
      </section>

      <StatsSection />
      <HowItWorksNew />
      <PricingSection />
      <CTASection />
      <Footer />

      {/* Sign Up Modal */}
      <Dialog open={showSignUpModal} onOpenChange={setShowSignUpModal}>
        <DialogContent className="sm:max-w-md bg-white">
          <div className="text-center space-y-6 p-6">
            <h2 className="text-2xl font-bold text-black">Join Our Waiting List</h2>
            <p className="text-gray-600">How would you like to get started?</p>
            <div className="space-y-3">
              <Button 
                className="w-full h-14 text-lg bg-black text-white hover:bg-gray-800"
                onClick={() => {
                  console.log("Navigate to developer signup");
                  setShowSignUpModal(false);
                }}
              >
                I'm a Developer
                <span className="text-sm opacity-80 block">Build and sell AI agents</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-14 text-lg border-2 border-gray-300 text-black hover:bg-gray-50"
                onClick={() => {
                  console.log("Navigate to client signup");
                  setShowSignUpModal(false);
                }}
              >
                I'm a Client
                <span className="text-sm opacity-80 block">Find AI solutions for your business</span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
