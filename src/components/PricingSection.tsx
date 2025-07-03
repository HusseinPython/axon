import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    {
      name: "Free Tier",
      monthlyPrice: "$0/Month",
      yearlyPrice: "$0/Month",
      monthlyFee: "Platform fee: 15% + 3%",
      yearlyFee: "Platform fee: 15% + 3%",
      features: [
        "Maintenance: 15%",
        "Community access",
        "Basic analytics",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro Tier",
      monthlyPrice: "$25/Month",
      yearlyPrice: "$20/Month",
      originalMonthlyPrice: "$50/Month",
      originalYearlyPrice: "$40/Month",
      monthlyFee: "Platform fee: ~~8%~~ + 3%",
      yearlyFee: "Platform fee: ~~5%~~ + 3%",
      features: [
        isYearly ? "Maintenance: 5%" : "Maintenance: 8%",
        "Drag & drop customization",
        "Advanced analytics",
      ],
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      popular: true,
      earlyUser: true,
      launchPrice: true
    },
    {
      name: "Axon Boost",
      monthlyPrice: "No Monthly Fee",
      yearlyPrice: "No Monthly Fee",
      monthlyFee: "Platform fee: 30%",
      yearlyFee: "Platform fee: 30%",
      features: [
        "Maintenance: Same as base tier",
        "Perfect for exposure to new buyers",
        "Discovery traffic only",
        "Performance-based",
        "No upfront cost",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];
  const navigate = useNavigate();
  const handlePublishAgent = () => {
    navigate("/signup?role=developer");
  };
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Developer Pricing
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-2">
            Choose the pricing model that fits your AI agent development — all plans are developer-first, transparent, and flexible.
          </p>
          <p className="bg-green-100 text-green-700 text-sm max-w-3xl w-fit mx-auto mb-2 px-4 py-2 rounded-md">
            Platform is free for a month for early adopters!
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-1 flex">
            <Button 
              variant={!isYearly ? "default" : "ghost"} 
              size="sm" 
              className={`rounded-md ${!isYearly ? 'bg-black text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setIsYearly(false)}
            >
              💳 Monthly
            </Button>
            <Button 
              variant={isYearly ? "default" : "ghost"} 
              size="sm" 
              className={`rounded-md ${isYearly ? 'bg-black text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setIsYearly(true)}
            >
              📆 Yearly
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`flex flex-col justify-between relative transition-all duration-300 hover:scale-105 hover:shadow-lg ${tier.popular ? 'border-purple-500 shadow-lg' : 'border-gray-200'} bg-white`}>
              {tier.launchPrice && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200">
                    Launch Price
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="text-3xl font-bold text-black">
                  {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                </div>
                <CardTitle className="text-xl font-bold text-black">
                  {tier.name}
                </CardTitle>
                {tier.launchPrice && (
                  <div className="text-lg text-gray-400 line-through">
                    {isYearly ? tier.originalYearlyPrice : tier.originalMonthlyPrice}
                  </div>
                )}
                <div className="text-sm text-gray-600">
                  <span className={tier.earlyUser ? "line-through" : ""}>
                    {isYearly ? tier.yearlyFee : tier.monthlyFee}
                  </span>
                </div>
                {tier.earlyUser && (
                  <div className="mt-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      0% platform fee for first {isYearly ? "45" : "20"} days — for early users
                    </span>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 flex flex-col justify-center items-center">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-4 w-4 mt-0.5 mr-3 flex-shrink-0 text-gray-600" />
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handlePublishAgent}
                  variant={tier.popular ? "default" : "outline"}
                  className={`w-full mt-6 transition-all duration-300 hover:scale-105 ${
                    tier.popular 
                      ? 'bg-black text-white hover:bg-gray-800 hover:shadow-lg' 
                      : 'border-gray-300 text-black hover:bg-gray-50'
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            All maintenance fees are paid monthly by the client to support ongoing AI agent upkeep and deliver zero no-charge communication.
          </p>
        </div>
      </div>
    </section>
  );
};
