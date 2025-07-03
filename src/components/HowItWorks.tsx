
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Developers Build",
      description: "Create custom AI agents for specific business needs using our platform tools."
    },
    {
      number: "02", 
      title: "Clients Browse",
      description: "Small businesses discover ready-to-use AI solutions tailored to their industry."
    },
    {
      number: "03",
      title: "Connect & Deploy",
      description: "Seamless integration with ongoing support and maintenance from developers."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A simple three-step process connecting developers with businesses seeking AI automation solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-gray-300 dark:text-gray-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
