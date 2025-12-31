import { useNavigate } from 'react-router-dom';
import FloatingHearts from '../components/FloatingHearts';
import Sparkles from '../components/Sparkles';
import { Heart } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <FloatingHearts />
      <Sparkles />

      <div className="text-center z-10 animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-400/30 blur-3xl rounded-full animate-pulse-slow"></div>
            <Heart
              className="text-pink-500 relative animate-heartbeat"
              size={80}
              fill="currentColor"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Happy New Year
        </h1>

        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-pink-600 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Akansha
        </h2>

        <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300"></div>
          <p className="text-xl md:text-2xl text-pink-700/80 italic">
            Every moment feels special when it's with you
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300"></div>
        </div>

        <div className="mb-8 text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          2025
        </div>

        <button
          onClick={() => navigate('/letter')}
          className="group relative px-10 py-5 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full text-xl font-semibold shadow-2xl hover:shadow-pink-400/50 transition-all duration-300 hover:scale-110 animate-fade-in-up overflow-hidden"
          style={{ animationDelay: '1.2s' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Enter Our Story
            <Heart size={20} fill="currentColor" className="animate-heartbeat" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <p className="mt-16 text-pink-400/60 text-sm animate-fade-in" style={{ animationDelay: '1.5s' }}>
          Made with love just for Akansha
        </p>
      </div>
    </div>
  );
};

export default Landing;
