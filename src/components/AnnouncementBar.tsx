
import { Link } from "react-router-dom";

export const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-[length:400%_400%] animate-gradient text-white text-center py-3 px-4 h-12">
      <p className="text-sm font-medium">
        Special discount to early users! 
        <Link to="/signup" className="ml-2 underline hover:no-underline font-semibold">
          Join Our Waiting List
        </Link>
      </p>
    </div>
  );
};
