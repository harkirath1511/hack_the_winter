import {
  MessageSquare,
  Search,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Describe Your Idea",
      description:
        "Tell us about your startup concept, target market, and goals. Our AI analyzes everything to create a comprehensive plan.",
    },
    {
      number: "02",
      icon: Search,
      title: "Research & Analyze",
      description:
        "Get deep market insights, competitive analysis, and strategic recommendations tailored to your specific industry.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Generate Assets",
      description:
        "Launch with everything you need - website, marketing copy, social media content, and brand guidelines.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Scale & Iterate",
      description:
        "Monitor performance, get AI-driven optimization suggestions, and continuously improve your campaigns.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From idea to launch in just 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="h-full p-8 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-smooth hover:shadow-md">
                  {/* Step Number */}
                  <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-800">
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Ready to Launch?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Get started with CampaignAI today and transform your startup vision
            into reality.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/prompt")}
            className="gap-2"
          >
            Start Building
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
