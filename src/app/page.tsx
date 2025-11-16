'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [countdown, setCountdown] = useState({
    months: 4,
    days: 27,
    hours: 9,
    minutes: 1
  });

  const [selectedVideo, setSelectedVideo] = useState({
    id: 'eOJpb7ZCxQY',
    title: 'Datos claves sobre las Elecciones Generales 2026'
  });

  const videos = [
    {
      id: 'eOJpb7ZCxQY',
      title: 'Datos claves sobre las Elecciones Generales 2026',
      label: 'Datos claves'
    },
    {
      id: '0QeTxLP9EmU',
      title: 'Principales cambios normativos',
      label: 'Principales cambios normativos'
    },
    {
      id: 'tg0UXVd14pc',
      title: 'Requisitos para el Voto Digital',
      label: 'Requisitos para el Voto Digital'
    },
    {
      id: 'L6ykzeczm3I',
      title: 'Jefe de la ONPE comparte 3 datos clave',
      label: 'Jefe de la ONPE comparte 3 datos clave'
    },
    {
      id: '_7VL9RIpnzU',
      title: 'Distritos electorales',
      label: 'Distritos electorales'
    }
  ];

  useEffect(() => {
    const targetDate = new Date('2026-04-12T07:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30);
        const remainingDays = days % 30;
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setCountdown({
          months,
          days: remainingDays,
          hours,
          minutes
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Image
                src="https://ext.same-assets.com/3536222468/1072281264.svg"
                alt="ONPE Logo"
                width={100}
                height={60}
                className="h-14 w-auto"
              />
            </div>

            {/* Countdown */}
            <div className="text-center">
              <p className="text-sm font-semibold mb-2">Faltan:</p>
              <div className="flex gap-2">
                <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 min-w-[70px]">
                  <div className="text-2xl font-bold text-onpe-blue">{String(countdown.months).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600">Meses</div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 min-w-[70px]">
                  <div className="text-2xl font-bold text-onpe-blue">{String(countdown.days).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600">Días</div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 min-w-[70px]">
                  <div className="text-2xl font-bold text-onpe-blue">{String(countdown.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600">Horas</div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 min-w-[70px]">
                  <div className="text-2xl font-bold text-onpe-blue">{String(countdown.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600">Minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-onpe-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-1">
              <a href="#" className="text-white px-6 py-4 hover:bg-onpe-blue transition-colors text-sm font-medium">Inicio</a>
              <a href="#" className="text-white px-6 py-4 hover:bg-onpe-blue transition-colors text-sm font-medium">Para electores</a>
              <a href="#" className="text-white px-6 py-4 hover:bg-onpe-blue transition-colors text-sm font-medium">La organización</a>
              <a href="#" className="text-white px-6 py-4 hover:bg-onpe-blue transition-colors text-sm font-medium">Acerca del proceso</a>
              <a href="#" className="text-white px-6 py-4 hover:bg-onpe-blue transition-colors text-sm font-medium">Lo nuevo</a>
              <a href="#" className="text-white px-6 py-4 hover:bg-onpe-blue transition-colors text-sm font-medium">Voto Digital</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-onpe-blue relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Elecciones<br />
                  Generales<br />
                  2026
                </h1>
                <p className="text-lg mb-8">
                  Todo lo que debes saber sobre las elecciones a realizarse el 12 de abril de 2026.
                </p>
                <a href="https://youtu.be/1l0783CZRWA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-onpe-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Conoce la cédula
                </a>
              </div>
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/3536222468/1793460604.png"
                  alt="Hero Illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
            }}></div>
          </div>
        </section>

        {/* ¿Qué elegiremos? Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-onpe-dark text-center mb-4">
              ¿Qué elegiremos en estas<br />Elecciones Generales 2026?
            </h2>
            <p className="text-center text-gray-700 mb-12">
              Estas son las autoridades por las cuales votaremos en las próximas Elecciones Generales 2026.
            </p>

            <div className="flex flex-wrap justify-center items-end gap-8">
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/3536222468/2489534146.png"
                  alt="Presidente"
                  width={174}
                  height={179}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/3536222468/2733763157.png"
                  alt="Vicepresidentes"
                  width={174}
                  height={179}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/3536222468/160987966.png"
                  alt="Senadores"
                  width={174}
                  height={179}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/3536222468/2626431238.png"
                  alt="Diputados"
                  width={174}
                  height={179}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/3536222468/3354953076.png"
                  alt="Parlamento Andino"
                  width={174}
                  height={179}
                  className="mx-auto mb-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
              {/* Tabs */}
              <div className="grid grid-cols-2">
                <div className="bg-gray-400 py-3 px-6 text-center border-r border-gray-300">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">ACERCA DE</span>
                </div>
                <div className="bg-onpe-blue py-3 px-6 text-center">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">LO QUE DEBES SABER</span>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 border-r border-gray-200">
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-3 font-semibold">ACERCA DE</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-onpe-dark mb-4 leading-tight">
                    Conoce más sobre el proceso electoral 2026
                  </h3>
                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                    Estar informados es fundamental para una democracia saludable, ¿Quieres conocer más sobre este importante proceso electoral?
                  </p>
                  <a href="#" className="text-onpe-blue text-sm font-semibold hover:underline">Saber más</a>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-3 font-semibold">LO QUE DEBES SABER</p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-tight">
                    Algunos puntos importantes sobre estas elecciones 2026
                  </h3>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Las Elecciones Generales se realizarán el <strong>Domingo 12 de abril de 2026 de 7 a. m. a 5 p. m.</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Donde más de 27 millones de peruanos elegirán quienes tomaron los siguientes cargos:
                  </p>
                  <p className="text-sm text-gray-900 font-semibold">
                    Presidente, vicepresidentes, senadores, diputados y titulares del parlamento andino.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-onpe-dark text-center mb-12">
              Revisa nuestro material informativo
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-2">
                <div className="text-lg font-semibold text-onpe-dark mb-4">Conoce más sobre las EG 2026</div>
                {videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo({ id: video.id, title: video.title })}
                    className={`w-full text-left p-4 bg-white border-l-4 rounded-md hover:bg-gray-50 transition-colors ${
                      selectedVideo.id === video.id
                        ? 'border-onpe-blue'
                        : 'border-transparent hover:border-onpe-blue'
                    }`}
                  >
                    <div className="font-medium">{video.label}</div>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-onpe-dark mb-4">
                  {selectedVideo.title}
                </h3>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                  <iframe
                    key={selectedVideo.id}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <a href="https://www.youtube.com/@onpeprensa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-onpe-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  Suscríbete a nuestro canal de YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Downloadable Materials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-onpe-dark text-center mb-8">Materiales descargables</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="#" className="border-2 border-gray-200 rounded-lg p-6 hover:border-onpe-blue transition-colors group">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/3536222468/795822502.png"
                    alt="PDF Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">Presidenciales</h4>
                <p className="text-gray-600 text-center text-sm">Conoce más sobre el proceso electoral</p>
              </a>

              <a href="#" className="border-2 border-gray-200 rounded-lg p-6 hover:border-onpe-blue transition-colors group">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/3536222468/795822502.png"
                    alt="PDF Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">Congresales</h4>
                <p className="text-gray-600 text-center text-sm">Conoce más sobre el proceso electoral</p>
              </a>

              <a href="#" className="border-2 border-gray-200 rounded-lg p-6 hover:border-onpe-blue transition-colors group">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/3536222468/795822502.png"
                    alt="PDF Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">Parlamento Andino</h4>
                <p className="text-gray-600 text-center text-sm">Conoce más sobre el proceso electoral</p>
              </a>

              <a href="#" className="border-2 border-gray-200 rounded-lg p-6 hover:border-onpe-blue transition-colors group">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/3536222468/795822502.png"
                    alt="PDF Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">Voto digital</h4>
                <p className="text-gray-600 text-center text-sm">Conoce todo acerca del voto digital</p>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-onpe-blue py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-center md:text-left">
                <p className="text-xl font-bold mb-2">Boletín informativo</p>
                <p className="text-lg">Tu derecho es estar informado de primera mano.</p>
              </div>
              <a href="#" className="bg-white text-onpe-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Suscríbete a la ONPE aquí
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-onpe-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Oficina central</h4>
              <p className="text-gray-300">Jr. Washington 1894, Cercado de Lima</p>
              <p className="text-gray-300">Lunes a viernes de 8:30 a. m. a 5:00 p. m.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contáctanos:</h4>
              <p className="text-gray-300">informes@onpe.gob.pe</p>
              <p className="text-gray-300">(01)4170630</p>
              <p className="text-gray-300">
                <Image
                  src="https://ext.same-assets.com/3536222468/2484976572.svg"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="inline mr-2"
                />
                Whatsapp: 995 404 991
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Síguenos:</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="https://ext.same-assets.com/3536222468/1577194571.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="https://ext.same-assets.com/3536222468/1505071152.svg"
                    alt="Twitter/X"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="https://ext.same-assets.com/3536222468/3416355903.svg"
                    alt="TikTok"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="https://ext.same-assets.com/3536222468/2136811271.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="https://ext.same-assets.com/3536222468/362232716.svg"
                    alt="YouTube"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
