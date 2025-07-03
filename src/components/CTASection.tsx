
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">
          Be First to use on AXON
        </h2>
        <div className="space-y-2 mb-8">
          <p className="text-gray-600">
            Get early access, creator perks, and AI-powered growth tools.
          </p>
          <p className="text-gray-600">
            Early users will receive special launch discounts.
          </p>
          <p className="text-gray-600">
            No spam — just valuable updates and opportunities.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 border-gray-300"
          />
          <Button className="bg-black text-white hover:bg-gray-800 px-8">
            Request Access
          </Button>
        </div>
      </div>
    </section>
  );
};
