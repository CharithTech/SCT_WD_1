import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 inline-flex mx-auto px-4 py-2 bg-secondary rounded-full border border-border">
          <Sparkles size={16} className="text-accent" />
          <span className="text-sm font-medium text-muted-foreground">Welcome to the future</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
          Elegant Design Meets <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">Powerful Innovation</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Experience the perfect blend of stunning aesthetics and cutting-edge technology. Transform your ideas into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
            Explore Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Decorative element */}
        <div className="pt-16">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-muted">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <img
              src="/modern-tech-workspace-with-gradient-overlay.jpg"
              alt="Hero showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
