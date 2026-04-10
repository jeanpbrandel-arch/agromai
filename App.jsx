import React, { useState } from 'react';
import AnaliseEstrategica from './AnaliseEstrategica';
import EstrategiaProjeto from './EstrategiaProjeto';
import VideoInstitucional from './VideoInstitucional';
import Carrossel from './Carrossel';
import Copy from './Copy';
import Conclusao from './Conclusao';

function App() {
  const [activeTab, setActiveTab] = useState('analise');

  const menuItems = [
    { id: 'analise', label: 'Análise', component: <AnaliseEstrategica /> },
    { id: 'estrategia', label: 'Estratégia', component: <EstrategiaProjeto /> },
    { id: 'video', label: 'Vídeo', component: <VideoInstitucional /> },
    { id: 'carrossel', label: 'Carrossel', component: <Carrossel /> },
    { id: 'copy', label: 'Copy', component: <Copy /> },
    { id: 'conclusao', label: 'Conclusão', component: <Conclusao /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navegação Fixa */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter transition-all ${
                activeTab === item.id 
                ? 'bg-[#22c55e] text-black' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Conteúdo Dinâmico */}
      <main className="animate-in fade-in duration-500">
        {menuItems.find(item => item.id === activeTab)?.component}
      </main>
    </div>
  );
}

export default App;
