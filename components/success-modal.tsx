import { CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SuccessModal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center p-4 z-50 pointer-events-none">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto animate-in fade-in" />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 pointer-events-auto">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="text-green-500" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">Message Sent Successfully! 🎉</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Thanks for reaching out. We'll get back to you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
