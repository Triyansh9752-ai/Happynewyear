import { useEffect, useState } from 'react';
import { Sparkles as SparklesIcon } from 'lucide-react';

interface SparkleProps {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <SparklesIcon
            className="text-yellow-200/60"
            size={12}
          />
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
