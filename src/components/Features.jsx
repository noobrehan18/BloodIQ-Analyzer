import React from "react";
import { Globe, Database, LightningBolt } from "lucide-react"; // Install lucide-react for icons

const features = [
  { title: "Instant Analysis", icon: <LightningBolt className="w-10 h-10 text-blue-400" /> },
  { title: "Indian Lab Support", icon: <Globe className="w-10 h-10 text-blue-400" /> },
  { title: "Smart Export", icon: <Database className="w-10 h-10 text-blue-400" /> },
];

const Features = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <h3 className="text-3xl font-bold text-center mb-8">Powerful Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            {feature.icon}
            <h4 className="text-xl font-semibold mt-4">{feature.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
