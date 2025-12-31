import { useState } from 'react';
import { Heart, Sparkles as SparklesIcon, Moon, Laugh, Map, Star } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';
import Sparkles from '../components/Sparkles';

const Promises = () => {
  const [showFinal, setShowFinal] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const promises = [
    { icon: Laugh, text: 'More laughter with you', color: 'from-pink-400 to-rose-400' },
    { icon: Map, text: 'More adventures together', color: 'from-rose-400 to-purple-400' },
    { icon: SparklesIcon, text: 'More love every single day', color: 'from-purple-400 to-pink-400' },
  ];

  const handleSealWithLove = () => {
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setHearts(newHearts);

    setTimeout(() => {
      setShowFinal(true);
    }, 500);

    setTimeout(() => {
      setHearts([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <FloatingHearts />
      <Sparkles />

      <div className="max-w-4xl w-full z-10 animate-fade-in">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Moon className="text-purple-400 animate-pulse-slow" size={60} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4">
            Akansha, Here's to Us
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Heart className="text-pink-500" size={24} fill="currentColor" />
            <Heart className="text-rose-500" size={20} fill="currentColor" />
            <Heart className="text-pink-400" size={24} fill="currentColor" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/50 rounded-2xl p-8 shadow-xl border border-white/60 hover:scale-105 transition-all duration-300">
                <div className={`flex justify-center mb-4 text-white p-4 rounded-full bg-gradient-to-r ${promise.color} w-16 h-16 mx-auto items-center`}>
                  <promise.icon size={32} />
                </div>
                <p className="text-center text-lg font-semibold text-gray-700">
                  {promise.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative backdrop-blur-xl bg-white/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed mb-2">
              No matter what this year brings,
            </p>
            <p className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
              I choose you — always.
            </p>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 animate-twinkle"
                  size={20}
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {!showFinal && (
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <button
              onClick={handleSealWithLove}
              className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white rounded-full text-xl font-semibold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Sealed With Love
                <Heart size={24} fill="currentColor" className="animate-heartbeat" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {showFinal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fade-in">
            <div className="relative backdrop-blur-xl bg-white/90 rounded-3xl p-12 shadow-2xl border border-white/80 max-w-lg mx-6 text-center animate-scale-in">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-400 blur-xl opacity-50 animate-pulse"></div>
                  <Heart className="text-pink-500 relative animate-heartbeat" size={64} fill="currentColor" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mt-8 mb-6">
                Happy New Year, Akansha
              </h2>

              <p className="text-xl text-gray-700 mb-8 font-serif italic">
                May this year bring us closer, fill our hearts with endless joy, and create beautiful memories together.
              </p>

              <div className="flex justify-center gap-2">
                <Heart className="text-pink-500 animate-heartbeat" size={24} fill="currentColor" />
                <Heart className="text-rose-500 animate-heartbeat" size={28} fill="currentColor" style={{ animationDelay: '0.2s' }} />
                <Heart className="text-pink-600 animate-heartbeat" size={24} fill="currentColor" style={{ animationDelay: '0.4s' }} />
              </div>

              <p className="mt-8 text-pink-400/80 text-sm">
                Forever and always
              </p>
            </div>
          </div>
        )}
      </div>

      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-50 animate-heart-explosion"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
          }}
        >
          <Heart className="text-pink-500" size={32} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default Promises;
