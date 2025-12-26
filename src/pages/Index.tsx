import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const snowContainer = document.getElementById('snow-container');
    if (snowContainer) {
      for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 2}s`;
        snowflake.innerHTML = '❄️';
        snowContainer.appendChild(snowflake);
      }
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const poems = [
    {
      title: "Евгения — свет новогодний",
      text: "Евгения — имя твоё как звезда,\nСияет сквозь снег и метели всегда.\nВ Новый Год пусть мечты все сбываются,\nИ радость с успехом пусть встречаются!"
    },
    {
      title: "Для великой Евгении",
      text: "Великая ты — в имени и в душе,\nПусть счастье живёт в твоём шалаше.\nНовый Год принесёт тебе силы,\nЧтоб мечты становились красивы!"
    },
    {
      title: "Новогоднее пожелание",
      text: "Пусть ёлка сияет огнями яркими,\nА жизнь наполняется подарками.\nЕвгения, будь счастлива всегда,\nНовый Год — это твоя звезда!"
    },
    {
      title: "Волшебство имени",
      text: "В имени твоём — благородство и свет,\nТаких, как ты, во всём мире нет.\nПусть Новый Год волшебство принесёт,\nИ счастье к тебе в дом войдёт!"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div id="snow-container" className="fixed inset-0 pointer-events-none z-50"></div>
      
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2021/11/23/audio_4f4e6e6ab7.mp3" type="audio/mpeg" />
      </audio>

      <Button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        <Icon name={isPlaying ? "Volume2" : "VolumeX"} size={24} />
      </Button>

      <div className="relative">
        <section className="min-h-screen flex items-center justify-center relative px-4">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://media.giphy.com/media/26tPcHAeyXGkD7X0c/giphy.gif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          />
          
          <div className="relative z-10 text-center space-y-8">
            <div className="animate-float">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-3d bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-4">
                С НОВЫМ ГОДОМ
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-3d bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                ЕВГЕНИЯ ВЕЛИКАЯ
              </h2>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Новогодние стихи для Евгении
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {poems.map((poem, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card/80 backdrop-blur-sm border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl animate-sparkle">
                      {['🎄', '⭐', '🎁', '🔔'][index]}
                    </div>
                    <h3 className="text-2xl font-bold text-accent">
                      {poem.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed whitespace-pre-line text-foreground/90">
                    {poem.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-lg border-4 border-accent/50">
              <div className="space-y-6">
                <div className="flex justify-center gap-4">
                  <span className="text-5xl animate-float">🎊</span>
                  <span className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🥂</span>
                  <span className="text-5xl animate-float" style={{ animationDelay: '1s' }}>🎆</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-accent">
                  Пусть Новый Год принесёт:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    { icon: '💫', text: 'Волшебство и радость' },
                    { icon: '🌟', text: 'Исполнение мечты' },
                    { icon: '💝', text: 'Любовь и тепло' },
                    { icon: '🏆', text: 'Успех во всём' },
                    { icon: '🌈', text: 'Яркие краски жизни' },
                    { icon: '💎', text: 'Драгоценные моменты' }
                  ].map((wish, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-all"
                    >
                      <span className="text-3xl animate-sparkle">{wish.icon}</span>
                      <span className="text-lg font-semibold">{wish.text}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-xl font-bold text-primary mt-8">
                  С Новым 2025 Годом, Евгения! 🎉
                </p>
              </div>
            </Card>
          </div>
        </section>

        <footer className="py-8 text-center relative z-10">
          <div className="flex justify-center gap-6 text-4xl mb-4">
            <span className="animate-float">🎄</span>
            <span className="animate-float" style={{ animationDelay: '0.3s' }}>⛄</span>
            <span className="animate-float" style={{ animationDelay: '0.6s' }}>🎅</span>
            <span className="animate-float" style={{ animationDelay: '0.9s' }}>🦌</span>
          </div>
          <p className="text-muted-foreground">
            Счастья, здоровья и волшебства в Новом Году! ✨
          </p>
        </footer>
      </div>

      <style>{`
        .snowflake {
          position: fixed;
          top: -10vh;
          z-index: 9999;
          user-select: none;
          cursor: default;
          animation: snow-fall linear infinite;
          font-size: ${Math.random() * 20 + 10}px;
          opacity: ${Math.random() * 0.5 + 0.5};
        }
      `}</style>
    </div>
  );
};

export default Index;