import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Get breakdown of your final goal",
    description:
      "Break down your goal into actionable steps and create a structured plan",
    accentColor: "accent",
  },
  {
    id: 2,
    title: "Get the website ready",
    description:
      "Generate and preview your website code with real-time editing",
    accentColor: "accent",
  },
  {
    id: 3,
    title: "Generate and automate Instagram & Twitter posts",
    description: "Create and schedule social media posts automatically",
    accentColor: "accent",
  },
  {
    id: 4,
    title: "Call / Email agent for marketing",
    description: "Connect with our marketing team for personalized support",
    accentColor: "accent",
  },
];

function CardGrid({
  brdUrl,
  strategyMarkdown,
  landingPageCode,
  contentData,
  generatedAssets,
}) {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-in">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            accentColor={card.accentColor}
            brdUrl={brdUrl}
            strategyMarkdown={strategyMarkdown}
            landingPageCode={landingPageCode}
            contentData={contentData}
            generatedAssets={generatedAssets}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
