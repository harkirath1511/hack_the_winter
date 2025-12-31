import { Brain, Globe, Share2, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Breakdown",
      description:
        "Get structured, actionable steps with comprehensive analysis. Intelligent recommendations tailored to your startup needs.",
    },
    {
      icon: Globe,
      title: "Website Generation",
      description:
        "Professional, responsive websites created instantly. Production-ready code with SEO optimization and mobile-first design.",
    },
    {
      icon: Share2,
      title: "Social Media",
      description:
        "Auto-generate and post engaging content to Instagram and Twitter. AI-powered copy and visuals that drive engagement.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description:
        "Integrated call management and automated responses. Streamline customer engagement with intelligent routing.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Build, launch, and scale your startup with our comprehensive suite
            of AI-powered tools
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-smooth hover:shadow-md"
              >
                <div className="mb-4 inline-flex p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-smooth">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
