
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleExploreAgents = () => {
    navigate("/signup?role=client");
  };

  const handlePublishAgent = () => {
    navigate("/signup?role=developer");
  };

  return (
    <header className="fixed top-12 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-black/20 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="Axon Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 mb-2">
          <button 
            onClick={handleExploreAgents}
            className="text-gray-700 hover:text-black transition-colors"
          >
            Explore Agents
          </button>
          <button 
            onClick={handlePublishAgent}
            className="text-gray-700 hover:text-black transition-colors"
          >
            Publish Agent
          </button>
          <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
            About
          </Link>
          <a href="#pricing" className="text-gray-700 hover:text-black transition-colors">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <Link to="/signup">Join Our Waiting List</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
