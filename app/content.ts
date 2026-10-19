// Conteúdo do site de Renato Giron Lopes — projeção de ../profile.json para o
// stack da fábrica site-10x, com o sistema visual "fiber/NOC" (ver globals.css).
// Fatos vêm do profile.json; edite aqui apenas a forma como são apresentados.

export const person = {
  brand: "Renato Giron Lopes",
  name: "Renato",
  role: "Especialista em Telecomunicações & Infraestrutura de Redes",
  thesis: "20+ anos em redes de missão crítica — IP/MPLS, FTTH/GPON, backbone óptico.",
  location: "Juiz de Fora – MG, Brasil",
  whatsapp: "5532988751253",
  whatsappLabel: "(32) 98875-1253",
  email: "renatogironlopes@yahoo.com.br",
  linkedin: "https://www.linkedin.com/in/renatogironlopes/",
  year: 2026,
};

export const whatsappHref = `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(
  "Olá Renato, vim pelo seu site e gostaria de falar sobre uma oportunidade ou consultoria em telecomunicações."
)}`;

export const hero = {
  eyebrow: "Aberto às oportunidades certas · #OPENTOWORK",
  titleLead: "Renato Giron Lopes",
  titleAccent: "Especialista em Telecomunicações · 20+ anos",
  lead: "Mais de duas décadas operando, mantendo e levando ao ar redes de missão crítica — da planta analógica da Telemig ao backbone óptico nacional da V.tal. Hoje, avalia a próxima posição de alto nível e projetos de consultoria em telecom e transformação digital.",
  ctaPrimary: "Falar com Renato",
  ctaSecondary: "Ver trajetória",
};

export const stats = [
  { n: 20, prefix: "+", suffix: " anos", label: "Experiência em telecom" },
  { n: 8, suffix: "", label: "Empregadores enterprise" },
  { n: 3, suffix: "", label: "Décadas em operação" },
  { n: 5, suffix: "", label: "Formações complementares" },
];

// Especialidades técnicas — usado na home e na grade "método" de /sobre.
export const diferenciais = {
  eyebrow: "Especialidades técnicas",
  title: "Profundidade em cada camada da rede.",
  lead: "Duas décadas operando os protocolos e equipamentos que sustentam a infraestrutura crítica do Brasil.",
  items: [
    { k: "01", title: "IP/MPLS", body: "Redes IP, LAN e WAN com TCP/IP, MPLS, Frame Relay, PPP, HDLC e X.25 — da ativação ao troubleshooting." },
    { k: "02", title: "FTTH/GPON", body: "Operação de acesso em fibra com equipamentos Huawei 5800 e Alcatel 7360 em ambiente de alta disponibilidade." },
    { k: "03", title: "Backbone Óptico", body: "SDH, DWDM e PDH com equipamentos Tellabs, Padtec, Alcatel e NEC." },
    { k: "04", title: "Roteadores & Switches", body: "Configuração e troubleshooting em Cisco, Huawei, Juniper e Datacom." },
  ],
};

// Stack técnico completo — transparece toda a expertise (projeção de profile.json → expertise).
export const stack = {
  eyebrow: "Stack técnico",
  title: "O arsenal de duas décadas de operação.",
  lead: "Protocolos, equipamentos e fabricantes operados em produção, em ambientes de missão crítica.",
  groups: [
    { label: "Redes & Protocolos", items: ["IP", "LAN", "WAN", "TCP/IP", "MPLS", "Frame Relay", "PPP", "HDLC", "X.25"] },
    { label: "Acesso FTTH/GPON", items: ["FTTH/GPON", "Huawei 5800", "Alcatel 7360"] },
    { label: "Backbone Óptico", items: ["PDH", "SDH", "DWDM", "Tellabs", "Padtec", "Alcatel", "NEC"] },
    { label: "Roteadores & Switches", items: ["Cisco", "Huawei", "Juniper", "Datacom", "Digitel", "Cyclades"] },
    { label: "Serviços Corporativos", items: ["VPN", "Banda larga dedicada", "Circuitos de dados corporativos"] },
    { label: "Serviços de Rede", items: ["DHCP", "NAT", "HTTP", "Roteamento IP"] },
    { label: "Diagnóstico Óptico", items: ["Testes ópticos", "Medição de potência", "Diagnóstico de falhas em fibra"] },
    { label: "Infra & Sistemas", items: ["Cabeamento estruturado", "Infraestrutura física", "Linux (operacional)"] },
  ],
};

// "Como atuo" — usado apenas em /sobre.
export const processo = {
  eyebrow: "Como atuo",
  title: "Da identificação da falha à rede estável outra vez.",
  lead: "Um fluxo testado em mais de duas décadas de campo e missão crítica.",
  steps: [
    { n: "1", title: "Diagnóstico", body: "Testes ópticos, medição de potência e análise de protocolos para isolar a causa raiz da falha." },
    { n: "2", title: "Intervenção", body: "Correção em campo ou via gerência remota, seguindo SLAs rigorosos de ambientes de missão crítica." },
    { n: "3", title: "Documentação", body: "Registro técnico da atividade, circuito e configuração — rastreabilidade para a próxima equipe." },
  ],
};

// Trajetória — os 8 empregadores (1994–2025). Mesmo array alimenta o resumo
// da home (company/title/period) e a timeline rica de /sobre (+ companyNote
// e highlights, extraídos ipsis litteris de profile.json roles[]).
export const trajetoria = {
  eyebrow: "Trajetória",
  title: "Oito empregadores, uma linha contínua de missão crítica.",
  lead: "De 1994 a 2025 — plantas analógicas, backbone óptico e a maior rede neutra do Brasil.",
  marquee: ["V.tal", "Oi", "Nokia Siemens", "Telemont", "Procisa", "Telebase", "Construtel", "Telemig"],
  items: [
    {
      company: "V.tal", title: "Técnico de Telecomunicações PI", period: "2021–2025",
      companyNote: "Maior empresa de infraestrutura de rede neutra do Brasil, responsável pela operação e expansão da malha de fibra óptica nacional.",
      highlights: [
        "Operação e manutenção de redes de comunicação de dados FTTH/GPON com equipamentos Huawei 5800 e Alcatel 7360 em ambiente de alta disponibilidade",
        "Configuração, monitoramento e troubleshooting de roteadores e switches Cisco, Huawei, Juniper e Datacom",
        "Manutenção de backbone óptico SDH, DWDM e PDH com equipamentos Tellabs, Padtec, Alcatel e NEC",
        "Testes ópticos, medição de potência e diagnóstico de falhas em cabos de fibra óptica",
        "Suporte técnico a serviços corporativos de dados: VPN, MPLS, Frame Relay, PPP e HDLC",
        "Atendimento a SLAs rigorosos em ambientes de missão crítica",
        "Diagnóstico e resolução de falhas complexas em redes IP, LAN e WAN",
        "Documentação técnica de atividades, circuitos e configurações de rede",
      ],
    },
    {
      company: "Oi S.A", title: "Técnico de Telecomunicações PI", period: "2013–2021",
      companyNote: "Uma das maiores operadoras de telecomunicações do Brasil, com atuação em telefonia fixa, móvel, banda larga e serviços corporativos de dados.",
      highlights: [
        "Suporte técnico a circuitos de dados corporativos: MPLS, Frame Relay, VPN e banda larga dedicada",
        "Configuração e troubleshooting de equipamentos de transmissão PDH, SDH e backbone óptico",
        "Operação de redes IP/MPLS com protocolos TCP/IP, PPP, HDLC e X.25",
        "Ativação, comissionamento e testes de circuitos de dados para clientes corporativos",
        "Diagnóstico de falhas em redes LAN, WAN e enlaces de fibra óptica",
        "Atendimento a SLAs e gestão de incidentes com foco em alta disponibilidade",
      ],
    },
    {
      company: "Nokia Siemens Networks", title: "Técnico Manutenção Planta Interna", period: "2011–2013",
      companyNote: "Atual Nokia — uma das líderes globais em infraestrutura de redes de telecomunicações, fornecendo soluções para operadoras em todo o mundo.",
      highlights: [
        "Manutenção preventiva e corretiva de equipamentos de telecomunicações Nokia e Siemens",
        "Suporte técnico a redes de transmissão SDH, PDH e backbone óptico",
        "Diagnóstico e resolução de falhas em equipamentos de grande porte em campo",
        "Manutenção em redes legadas e MPLS Tellabs para a operadora Oi em pontos da empresa MRS em Juiz de Fora",
      ],
    },
    {
      company: "Procisa do Brasil", title: "Técnico de Ativação de Dados", period: "2008–2011",
      companyNote: "",
      highlights: [
        "Ativação e comissionamento de circuitos de dados para clientes corporativos",
        "Testes de conectividade e validação de circuitos IP, Frame Relay e MPLS",
        "Configuração de roteadores de acesso para clientes Embratel (Cisco, Huawei, Digitel, Cyclades)",
      ],
    },
    {
      company: "Telemont Engenharia de Telecomunicações", title: "Técnico de Comunicação de Dados IV – Redes", period: "2005–2008",
      companyNote: "",
      highlights: [
        "Manutenção e operação de comunicação e transmissão de dados (redes IP, LAN, WAN) com protocolos TCP/IP, X.25, Frame Relay, PPP e HDLC",
        "Atendimento a clientes empresariais",
      ],
    },
    {
      company: "Telebase Serviços Básicos em Telecomunicações", title: "Técnico de Telecomunicações", period: "2003–2005",
      companyNote: "",
      highlights: [
        "Manutenção de banda larga e instalação/configuração/manutenção de circuitos de comunicação de dados empresariais",
        "Montagem de hardware de computador",
      ],
    },
    {
      company: "Construtel Participações", title: "Técnico em Telecomunicações IV", period: "2001–2003",
      companyNote: "",
      highlights: [
        "Manutenção de banda larga e instalação/configuração/manutenção de circuitos de comunicação de dados empresariais",
        "Montagem de hardware de computador",
      ],
    },
    {
      company: "Telemig", title: "Técnico de Telecomunicações", period: "1994–2001",
      companyNote: "",
      highlights: [
        "Manutenção e configuração em centrais analógicas e digitais de grande porte",
        "Configuração de plano de assinantes (EPROM) em telefones públicos TUP",
        "Manutenção em redes de comunicação de dados empresariais",
      ],
    },
  ],
};

// Oferta — os dois caminhos de conversão (posição sênior / consultoria).
export const oferta = {
  eyebrow: "Consultoria & Oportunidades",
  title: "Dois caminhos, uma mesma profundidade técnica.",
  lead: "Posição sênior em operação de redes ou consultoria para times que querem levar IA à infraestrutura crítica.",
  pillars: [
    {
      tag: "Operação & Manutenção",
      title: "Redes de missão crítica",
      body: "Monitoramento, manutenção preventiva/corretiva e configuração de redes IP/MPLS, FTTH/GPON e backbone óptico, com foco em alta disponibilidade e SLA.",
      chips: ["IP/MPLS", "FTTH/GPON", "SDH/DWDM/PDH"],
    },
    {
      tag: "Troubleshooting",
      title: "Diagnóstico avançado de falhas",
      body: "Testes ópticos, medição de potência e análise de protocolos para resolver incidentes complexos em LAN, WAN e enlaces de fibra.",
      chips: ["Cisco · Huawei · Juniper · Datacom", "Testes ópticos", "Campo & NOC"],
    },
    {
      tag: "Consultoria",
      title: "Telecom → IA & Transformação Digital",
      body: "Consultoria para aplicar IA, automação e novas plataformas digitais a operações de rede — com base em mais de 20 anos de infraestrutura real.",
      chips: ["IA aplicada a negócios", "Vibe coding", "Plataformas digitais"],
    },
  ],
  cta: "Falar sobre oportunidade ou consultoria",
};

// "Quem é Renato" — usado em /sobre. bioLong cobre os 20+ anos em telecom;
// bioPivot é deliberadamente um bloco separado (o pivô para IA/transformação
// digital não é parte da experiência em telecom, é o que vem depois dela).
export const sobre = {
  eyebrow: "Quem é Renato",
  title: "Especialista sênior em Telecomunicações e Infraestrutura de Redes.",
  bioLong:
    "Profissional com mais de 20 anos de experiência em Telecomunicações, Infraestrutura de Redes e Comunicação/Transmissão de Dados, com passagem por empresas líderes do setor como V.tal, Oi S.A e Nokia Siemens Networks. Atua com operação, manutenção e configuração de redes IP/MPLS, FTTH/GPON, backbone óptico (PDH, SDH, DWDM) e equipamentos de grande porte de fabricantes como Cisco, Huawei, Nokia, Juniper e Datacom. Experiência consolidada em ambientes corporativos de missão crítica, com foco em alta disponibilidade, troubleshooting avançado e performance de rede. Perfil analítico, comunicativo e altamente adaptável, com experiência técnica em equipes de campo e forte orientação para resolução de problemas em cenários complexos.",
  pivotEyebrow: "O próximo capítulo",
  bioPivot:
    "Paralelamente, expande a atuação para Tecnologia da Informação e Transformação Digital, com formação e projetos práticos em Inteligência Artificial aplicada a negócios, Web Design, desenvolvimento 'vibe coding' (Lovable, Gemini, Antigravity), plataformas e soluções digitais.",
  pivotSkills: [
    "Inteligência Artificial aplicada a negócios",
    "Web Design",
    "Vibe Coding (Lovable, Gemini, Antigravity)",
    "Plataformas digitais",
    "Soluções digitais",
  ],
  cta: "Falar com Renato",
};

// Credenciais — formação complementar que sustenta o pivô para IA/digital.
export const credentials = {
  eyebrow: "Formação complementar",
  title: "Credenciais que sustentam o pivô.",
  items: [
    { name: "Curso de Figma", issuer: "Felipe Santana / Feux Design" },
    { name: "Excel — Dashboard, Gráficos, Planilhas", issuer: "V.tal (associado)" },
    { name: "Power BI", issuer: "V.tal (associado)" },
    { name: "Método Pedro Primão — Curso de Identidade Visual", issuer: "Pedro Primão" },
    { name: "Power Platform", issuer: "V.tal (associado)" },
  ],
};

// Contato — seção final da home.
export const contact = {
  eyebrow: "Contato",
  title: "Converse direto com o Renato.",
  lead: "Para posições de alto nível ou consultoria em telecom e transformação digital, o canal mais rápido é o WhatsApp.",
  meta: [
    { t: "Localização", v: person.location },
    { t: "WhatsApp", v: person.whatsappLabel },
    { t: "E-mail", v: person.email },
  ],
};

export const nav = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "/#expertise" },
  { label: "Stack", href: "/#stack" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Consultoria", href: "/#oferta" },
  { label: "Sobre", href: "/sobre" },
];
