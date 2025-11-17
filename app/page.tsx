'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SuccessModal from '@/components/success-modal';

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContactSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Contact onSubmit={handleContactSubmit} />
      <Footer />
      {showSuccess && <SuccessModal />}
    </main>
  );
}
