import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Mail, ArrowRight } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';

const LoveLetter = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const letterText = `Dear Akansha,

This year was beautiful because you were in it.

Your smile, your kindness, your presence — they made everything brighter.

As this New Year begins, I just want you to know how deeply grateful I am for you.

You are my comfort, my happiness, and my favorite thought every day.

Here's to more memories, more laughter, and more love — together.

Forever yours,
With all my heart`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < letterText.length) {
        setDisplayedText(letterText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <FloatingHearts />

      <div className="max-w-3xl w-full z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Mail className="text-pink-500" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-pink-600">
              Dear Akansha
            </h1>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/20 via-rose-300/20 to-purple-300/20 blur-2xl"></div>

          <div className="relative backdrop-blur-xl bg-white/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
            <div className="absolute -top-4 -right-4 animate-bounce-slow">
              <Heart className="text-pink-400" size={32} fill="currentColor" />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <Heart className="text-rose-400" size={24} fill="currentColor" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-wrap font-serif">
                {displayedText}
                <span className="inline-block w-1 h-6 bg-pink-500 ml-1 animate-blink"></span>
              </p>
            </div>

            {isTypingComplete && (
              <div className="mt-12 flex justify-center animate-fade-in">
                <button
                  onClick={() => navigate('/promises')}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-pink-400/50 transition-all duration-300 hover:scale-105"
                >
                  Continue to Our Future
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <Heart className="text-pink-300 animate-heartbeat" size={16} fill="currentColor" />
          <Heart className="text-rose-300 animate-heartbeat" size={16} fill="currentColor" style={{ animationDelay: '0.2s' }} />
          <Heart className="text-pink-400 animate-heartbeat" size={16} fill="currentColor" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
