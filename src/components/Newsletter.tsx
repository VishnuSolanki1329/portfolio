
import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 via-portfolio-secondary/5 to-portfolio-accent/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16">
            {!isSubscribed ? (
              <>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-portfolio-primary to-portfolio-secondary flex items-center justify-center text-white">
                  <Mail className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get the latest insights on design trends, development tips, and exclusive content delivered straight to your inbox. No spam, just valuable content.
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="px-6 py-3 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white rounded-full hover:from-portfolio-secondary hover:to-portfolio-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to receive emails from me. You can unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Thank You!
                </h2>
                <p className="text-muted-foreground mb-6">
                  You've successfully subscribed to my newsletter. I'll be in touch with valuable content soon!
                </p>
                
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-primary font-medium hover:underline"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
