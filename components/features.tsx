import { Zap, Globe, Lock, Gauge } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance optimized for speed and efficiency.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Reach audiences worldwide with our globally distributed infrastructure.',
  },
  {
    icon: Lock,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security to keep your data protected at all times.',
  },
  {
    icon: Gauge,
    title: 'Fully Customizable',
    description: 'Tailor every aspect to match your unique brand and requirements.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed, all in one elegant platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:shadow-xl hover:border-accent transition-all duration-300 group"
              >
                <div className="mb-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
