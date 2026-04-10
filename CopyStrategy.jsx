import React, { useState } from 'react';
import { 
  Linkedin, 
  Instagram, 
  Video, 
  Target, 
  Globe, 
  Copy, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const AccordionItem = ({ channel, objective, highlight, fullText, icon: Icon, isOpen, onClick }) => {
  const [copied, setCopied] = useState(false);
  const hasContent = fullText && fullText.length > 0;

  const handleCopy = (e) => {
    e.stopPropagation();
    if (fullText) {
      const el = document.createElement('textarea');
      el.value = fullText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className={`border rounded-xl transition-all duration-300 overflow-hidden mb-3 ${
        isOpen 
          ? 'bg-[#0f110f] border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]' 
          : 'bg-[#0a0a0a] border-white/5 hover:border-emerald-500/20'
      }`}
    >
      {/* Header do Accordion */}
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-lg border transition-all duration-300 ${
            isOpen ? 'bg-emerald-500 text-black border-emerald-500' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
          }`}>
            <Icon size={20} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white tracking-tight">{channel}</h4>
            <p className="text-xs text-slate-500 font-medium">{objective}</p>
          </div>
        </div>
        
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : 'text-slate-600'}`}>
          <ChevronDown size={20} />
        </div>
      </button>

      {/* Conteúdo Expansível */}
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-5 pb-6 pt-2 space-y-5 border-t border-white/5">
          
          <div className="bg-emerald-500/5 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 border border-emerald-500/10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-1.5 text-emerald-500">
                <Target size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Foco Estratégico</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed italic">{highlight}</p>
            </div>
            
            {hasContent && (
              <button 
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all shrink-0 ${
                  copied 
                    ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]' 
                    : 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border border-emerald-500/20'
                }`}
              >
                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copied ? "Copiado" : "Copiar Texto"}
              </button>
            )}
          </div>

          <div className="bg-black/40 p-5 rounded-lg border border-white/5">
            {!hasContent ? (
              <p className="text-sm text-slate-600 italic text-center py-4">
                Conteúdo em desenvolvimento...
              </p>
            ) : (
              <p className="text-sm md:text-base text-slate-300 leading-relaxed whitespace-pre-line font-light">
                {fullText}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CopyStrategy = () => {
  const [openIndex, setOpenIndex] = useState(3); // Inicia no último adicionado (Roteiro)

  const contents = [
    {
      channel: "Institucional",
      objective: "Apresentação formal da autoridade Agromai no setor.",
      highlight: "Foco em GeoAI, previsibilidade e segurança nas decisões estratégicas do produtor.",
      icon: Globe,
      fullText: `Agromai: GeoAI Aplicada ao Agronegócio Brasileiro\n\nA agricultura moderna exige decisões cada vez mais estratégicas e baseadas em dados precisos. Em um cenário de desafios crescentes, como as mudanças climáticas, a volatilidade dos mercados e as rigorosas exigências ambientais, a capacidade de transformar informação em previsibilidade e segurança é fundamental para o sucesso e a sustentabilidade do agronegócio.\n\nA Agromai surge como a resposta a essa demanda, liderando a revolução da GeoAI (Inteligência Artificial Geoespacial) no campo. Combinando o poder da inteligência artificial com a riqueza dos dados de satélite, a Agromai oferece soluções inovadoras que capacitam produtores rurais, instituições financeiras e empresas do setor a tomar decisões mais inteligentes e assertivas.\n\nNossa plataforma integra monitoramento de safras em tempo real, análise preditiva de riscos, gestão de crédito rural e conformidade ambiental, tudo fundamentado em dados geoespaciais reais e processados por algoritmos avançados de IA. Isso permite uma visão 360º das operações agrícolas, otimizando recursos, mitigando perdas e impulsionando a rentabilidade.\n\nCom a Agromai, o futuro do agronegócio é construído sobre a base sólida da tecnologia, da inteligência e da sustentabilidade. Agromai: GeoAI aplicada ao agronegócio brasileiro – transformando o campo com decisões mais inteligentes.`
    },
    {
      channel: "LinkedIn",
      objective: "Networking corporativo e posicionamento de pensamento líder.",
      highlight: "Aborda a nova era do agro, sensoriamento remoto e o compromisso com a sustentabilidade.",
      icon: Linkedin,
      fullText: `Agromai: Desvendando o Futuro do Agronegócio com GeoAI\n\nO agronegócio está entrando em uma nova era, onde a inteligência artificial e o sensoriamento remoto são os pilares para decisões mais rápidas, seguras e estratégicas. Na Agromai, estamos na vanguarda dessa transformação, capacitando produtores e empresas a navegar pelos desafios complexos do campo com confiança.\n\nNossa tecnologia GeoAI integra dados de satélite e algoritmos avançados para oferecer soluções precisas em:\n\n• Monitoramento de safras: Acompanhamento em tempo real da saúde e desenvolvimento das culturas.\n• Análise de crédito rural: Avaliação de risco mais eficiente e justa para instituições financeiras.\n• Conformidade ambiental: Garantia de práticas sustentáveis e atendimento às regulamentações.\n\nCom a Agromai, você transforma dados em previsibilidade, otimiza recursos e impulsiona a rentabilidade. É a tecnologia, os dados e a inteligência trabalhando juntos para um agronegócio mais próspero e sustentável.\n\n#Agromai #GeoAI #Agronegócio #InteligenciaArtificial #Sustentabilidade #InovaçãoNoCampo #Agricultura40`
    },
    {
      channel: "Redes Sociais",
      objective: "Engajamento direto e educação rápida do público-alvo.",
      highlight: "Texto rápido com foco em benefícios claros e hashtags estratégicas.",
      icon: Instagram,
      fullText: `Agromai: Inteligência Artificial no Agronegócio\n\nTransforme o campo com dados! 🚀\nCom a Agromai, você tem:\n• Dados de satélite: Visão precisa da sua lavoura.\n• Monitoramento de safras: Acompanhamento em tempo real para decisões ágeis.\n• Análise preditiva: Antecipe riscos e otimize resultados.\n\nAgromai: GeoAI aplicada ao campo, para um agronegócio mais inteligente e produtivo.\n\n#Agromai #GeoAI #AgronegócioInteligente #AgriculturaDigital #InovaçãoNoCampo #DadosNoCampo`
    },
    {
      channel: "Roteiro de Vídeo",
      objective: "Comunicação audiovisual de alto impacto emocional e técnico.",
      highlight: "Estrutura rápida para vídeos curtos (Reels/TikTok/Ads) com CTA direto.",
      icon: Video,
      fullText: `Agromai: Inteligência Artificial no Agronegócio\n\nTransforme o campo com dados! 🚀\nCom a Agromai, você tem:\n• Dados de satélite: Visão precisa da sua lavoura.\n• Monitoramento de safras: Acompanhamento em tempo real para decisões ágeis.\n• Análise preditiva: Antecipe riscos e otimize resultados.\n\nAgromai: GeoAI aplicada ao campo, para um agronegócio mais inteligente e produtivo.\n\n#Agromai #GeoAI #AgronegócioInteligente #AgriculturaDigital #InovaçãoNoCampo #DadosNoCampo`
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] p-6 md:p-12 font-sans text-slate-200">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* HEADER AREA */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
            Estratégia de <span className="text-emerald-500">Copy</span>
          </h1>
          <p className="text-slate-500 text-sm">
            Agromai: Repositório central de mensagens para multicanais.
          </p>
        </div>

        {/* LISTA ACCORDION */}
        <div className="space-y-1">
          {contents.map((item, index) => (
            <AccordionItem 
              key={index} 
              {...item} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* FOOTER */}
        <div className="pt-8 flex justify-center text-[10px] text-slate-700 font-mono tracking-widest uppercase border-t border-white/5">
        </div>
      </div>
    </div>
  );
};

export default CopyStrategy;
}
