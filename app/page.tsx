"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Cpu,
  Download,
  ExternalLink,
  Mail,
  Menu,
  Rocket,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  FileDown,
  X,
  TrendingUp,
  Quote,
  Instagram,
  Linkedin,
  Sun,
  Moon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

/* ============================================================================
   LINKS / ARQUIVOS
   ========================================================================== */
const LINKS = {
  mgiLivroHome: "https://www.gov.br/transferegov/pt-br/rede-parcerias",
  mgiLivro:
    "https://www.gov.br/transferegov/pt-br/rede-parcerias/aniversario/livro/livro-rede-de-parcerias-versao-digital",
  mgiLivroPdf:
    "https://www.gov.br/transferegov/pt-br/rede-parcerias/aniversario/livro/livro-rede-de-parcerias-versao-digital/%40%40download/file",
  micbrResultado:
    "https://www.gov.br/cultura/pt-br/assuntos/editais/inscricoes-encerradas/edital-micbr-2025/copy_of_resultadofinaldaselecaodeempreendedoresmicbr2025.pdf",
  mroscManual:
    "https://www.gov.br/transferegov/pt-br/legislacao/portarias/MANUALMROSCDoPlanejamentoPrestaodeContasreduzido13082025.pdf",
  cvPdf: "/cv/alessandra-vecchi-cv.pdf",
};

const SOCIAL = {
  instagram: "https://www.instagram.com/alessandrapaulinovecchi?igsh=cTkzendoNnVoZDF5",
  linkedin: "https://www.linkedin.com/in/alessandravecchi/",
};

const FILES = {
  certOrcamento: "/certificados/orcamento-publico-enap-2025.pdf",
  certGovernanca: "/certificados/governanca-gestao-enap-2025.pdf",
  certMrosc: "/certificados/mrosc-execucao-monitoramento-2024.pdf",
  certAgenteIFG: "/certificados/agente-cultural-ifg-2025.pdf",
  certMincAppc: "/certificados/minc-appc-certificado.pdf",
  certTera: "/certificados/tera.pdf",
  certPnud: "/certificados/pnud-agenda2030.pdf",
  certFenix: "/certificados/captacao-eua-canada.pdf",
  certNasba: "/certificados/nasba.png",
  certSixSigma: "/certificados/SixSigmaYellowBelt.pdf",
};

const WHATSAPP = {
  phone: "5548988257788",
  message: "Olá, vi seu portfólio e gostaria de falar com você! 😊",
};

/* ============================================================================
   DADOS
   ========================================================================== */
const highlights = [
  { label: "Projetos aprovados (Lei Rouanet)", value: "40+" },
  { label: "Projetos avaliados (Lei Rouanet)", value: "500+" },
  { label: "Líderes mentorados (Conexão Inclusiva)", value: "50" },
  { label: "Agentes de impacto capacitados", value: "40" },
] as const;

const tools = [
  {
    title: "Edital Certo",
    desc: "Lemos o edital por você, traduzimos regras e geramos um parecer claro — com projeto pronto quando precisar.",
    icon: ShieldCheck,
  },
  {
    title: "Cuidatoria Connect (CRM)",
    desc: "Centralize contatos, funis e editais. Tenha previsibilidade de captação e relatórios de impacto em 1 clique.",
    icon: Cpu,
  },
  {
    title: "Cuidatoria Incentivos",
    desc: "Encontre empresas certas, estime aportes por lei e conduza até o aceite — do primeiro contato ao aporte.",
    icon: Rocket,
  },
  {
    title: "Cuidatoria Score OSC",
    desc: "Score (0–100) de transparência e elegibilidade com evidências. Reduz risco e acelera decisão de aporte.",
    icon: TrendingUp,
  },
] as const;

const experiences = [
  {
    role: "Diretora de Desenvolvimento de Negócios",
    org: "Cuidatoria",
    period: "mar/2025 — atual • Florianópolis/SC (Híbrida)",
    bullets: [
      "Liderança comercial e de produto do ecossistema Cuidatoria 360°.",
      "Desenvolvimento de soluções digitais para 3º setor (APIs, dashboards, IA).",
    ],
  },
  {
    role: "Conselho Fiscal",
    org: "Instituto Woman's Power",
    period: "abr/2024 — atual • Palhoça/SC (Híbrida)",
    bullets: ["Apoio à governança e transparência; avaliação de projetos e resultados."],
  },
  {
    role: "CEO",
    org: "Lion Pro Business",
    period: "jul/2023 — jul/2025 • Palhoça/SC (Presencial)",
    bullets: ["Gestão e expansão de serviços B2B com foco em impacto e inovação."],
  },
] as const;

const PARTNER_LOGOS = [
  { name: "Instituto Woman's Power", src: "/logos/Womans-power.png" },
  { name: "IGI", src: "/logos/igi-ong.png" },
  { name: "CGSAP'S Work", src: "/logos/cgsap-ong.png" },
  { name: "Instituto Encontro Cultural", src: "/logos/encontro-ong.png" },
] as const;

type CompactCert = { title: string; file: string };
const compactCerts: CompactCert[] = [
  { title: "Básico em Orçamento Público (ENAP)", file: FILES.certOrcamento },
  { title: "Modelo de Governança e Gestão – gestaopublicagov.br (ENAP)", file: FILES.certGovernanca },
  { title: "MROSC — Execução, Monitoramento e Avaliação (ENAP)", file: FILES.certMrosc },
  { title: "Agente Cultural (IFG)", file: FILES.certAgenteIFG },
  { title: "MINC APPC — Certificado de Conclusão", file: FILES.certMincAppc },
  { title: "Digital Product Leadership (Tera)", file: FILES.certTera },
  { title: "Integrando a Agenda 2030 e ODS (PNUD Brasil)", file: FILES.certPnud },
  { title: "Captação de Recursos EUA/Canadá (Fênix Educação)", file: FILES.certFenix },
  { title: "Product Owner Agile (NASBA)", file: FILES.certNasba },
  { title: "Six Sigma Yellow Belt", file: FILES.certSixSigma },
];

const TESTIMONIALS = [
  {
    name: "Aline Pascale",
    role: "CEO • Cuidatoria",
    photo: "/testimonials/aline.jpeg",
    text:
      "A Alessandra nos ajudou a tirar o projeto do papel e a prestar contas com segurança. Visão estratégica e muito coração.",
  },
  {
    name: "Dra. Adriana Camilo",
    role: "Presidente • Encontro Cultural | Advogada",
    photo: "/testimonials/adriana.jpeg",
    text:
      "Elevou nossa governança e abriu portas com parceiros. É tecnologia e cuidado ao mesmo tempo — resultados reais.",
  },
  {
    name: "Sara Pascale",
    role: "CEO • Kemet",
    photo: "/testimonials/sara.jpeg",
    text:
      "Os materiais são aplicáveis no dia a dia. O CRM e o Score OSC mudaram nossa rotina de captação.",
  },
] as const;

/* Animação helper (usada nos motion.div) */
const fade = (i = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: i * 0.05 },
  viewport: { once: true, margin: "-80px" },
});

/* ============================================================================
   NAV
   ========================================================================== */
const NAV_SECTIONS = [
  { id: "inicio", label: "Início" },
  { id: "tecnologia", label: "Co-criadas por mim e Cuidatoria" },
  { id: "experiencia", label: "Experiência" },
  { id: "parceiros", label: "Parceiros" },
  { id: "premiacoes", label: "Minhas premiações" },
  { id: "certificacoes", label: "Meus certificados" },
  // removidos: vídeo e cursos
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
] as const;

/* ============================================================================
   PÁGINA
   ========================================================================== */
export default function Page() {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const [open, setOpen] = useState(false);
  const email = "alessandravecchi52@gmail.com";

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100">
      <TechCultureBG />
      <ScrollProgress />
      <TopNav active={active} open={open} setOpen={setOpen} />

      {/* HERO =============================================================== */}
      <section id="inicio" className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <motion.div {...fade(0)}>
              <p className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-slate-700/85 dark:text-white/90">
                <Sparkles className="h-4 w-4" aria-hidden /> Currículo • Portfólio • Landing
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                Alessandra{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Vecchi
                </span>
              </h1>
              <p className="mt-3 text-lg md:text-xl text-slate-800/90 dark:text-white/90 max-w-2xl">
                Impacto Social • Inovação • Tecnologia • Cultura — conecto organizações, governo e iniciativas culturais a
                resultados medíveis, transparência e sustentabilidade.
              </p>

              {/* Badges */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={LINKS.mgiLivro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/85 dark:bg-slate-900/70 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  <BookOpen className="h-4 w-4" aria-hidden /> Artigo publicado — Rede de Parcerias (MGI, 2025)
                  <ExternalLink className="h-3 w-3 ml-1" aria-hidden />
                </a>
                <a
                  href={LINKS.micbrResultado}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/85 dark:bg-slate-900/70 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  <Award className="h-4 w-4" aria-hidden /> Selecionada MICBR 2025 — Áreas Técnicas
                  <ExternalLink className="h-3 w-3 ml-1" aria-hidden />
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/85 dark:bg-slate-900/70 dark:border-white/10">
                  <BadgeCheck className="h-4 w-4" aria-hidden /> Agente Cultural • ID 1700746
                </span>
              </div>

              {/* CTAs + redes */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button onClick={copyEmail} className="text-base shadow-sm" aria-label="Copiar e-mail">
                  <Mail className="h-4 w-4 mr-2" aria-hidden /> {copied ? "E-mail copiado!" : "Fale comigo"}
                </Button>
                <a
                  href={LINKS.cvPdf}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-base bg-white/85 dark:bg-slate-900/70 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition shadow-sm"
                >
                  <Download className="h-4 w-4" aria-hidden /> Baixar Currículo (PDF)
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm bg-white/85 dark:bg-slate-900/70 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  <Instagram className="h-4 w-4" aria-hidden /> Instagram
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm bg-white/85 dark:bg-slate-900/70 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                </a>
              </div>

              {/* Destaque de Impacto */}
              <ImpactHighlights />
            </motion.div>

            {/* Foto */}
            <ProfileBlock />
          </div>
        </div>
      </section>

      {/* TECNOLOGIA ========================================================= */}
      <section id="tecnologia" className="mx-auto max-w-6xl px-6 py-10">
        <Header
          title="Co-criadas por mim e Cuidatoria"
          subtitle="Soluções para acelerar captação, elevar transparência e simplificar a execução."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {tools.map(({ title, desc, icon: Icon }, i) => (
            <motion.div key={title} {...fade(i)}>
              <Card className="h-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border-white/60 dark:border-white/10 hover:-translate-y-0.5 hover:shadow-md transition">
                <CardHeader className="pb-2 flex-row items-center gap-2">
                  <div className="rounded-xl border p-2 bg-white dark:bg-slate-900 dark:border-white/10">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700 dark:text-slate-300">{desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIA ======================================================== */}
      <section id="experiencia" className="mx-auto max-w-6xl px-6 py-2">
        <Header title="Experiência" />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <motion.div key={exp.role} {...fade(i)}>
              <Card className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border-white/60 dark:border-white/10 hover:-translate-y-0.5 hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-lg">{exp.role}</CardTitle>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium">{exp.org}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PARCEIROS ========================================================= */}
      <section id="parceiros" className="mx-auto max-w-7xl px-6 py-10">
        <Header
          title="Instituições parceiras e projetos"
          subtitle="Algumas organizações com quem já atuei e/ou desenvolvi projetos."
        />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {PARTNER_LOGOS.map((l, i) => (
            <motion.div key={l.name} {...fade(i)} className="flex items-center justify-center">
              <div className="w-full h-[110px] md:h-[130px] rounded-xl bg-white/75 dark:bg-slate-900/60 backdrop-blur-md ring-1 ring-white/60 dark:ring-white/10 shadow-sm hover:shadow-md transition p-3">
                <div className="relative w-full h-full">
                  <SkeletonImg src={l.src} alt={l.name} sizes="260px" />
                </div>
              </div>
              <span className="sr-only">{l.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MINHAS PREMIAÇÕES ================================================= */}
      <section id="premiacoes" className="mx-auto max-w-6xl px-6 py-8">
        <Header title="Minhas premiações" />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {/* Livro */}
          <motion.div {...fade(0)}>
            <Card className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-white/60 dark:border-white/10 hover:-translate-y-0.5 hover:shadow-md transition">
              <CardHeader className="py-2">
                <CardTitle className="text-base md:text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden /> Livro — Rede de Parcerias (MGI/SEGES, 2025)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <a
                  href={LINKS.mgiLivroPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full rounded-lg overflow-hidden ring-1 ring-white/60 dark:ring-white/10 bg-white dark:bg-slate-800"
                  title="Baixar PDF do livro"
                >
                  <div className="relative w-full h-40 md:h-44 lg:h-48">
                    <Image
                      src="/images/livro-rede-parcerias.png"
                      alt="Capa: Rede de Parcerias — 10 anos mudando a vida das pessoas"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </a>
                <p className="mt-3 text-sm md:text-[15px] text-slate-700 dark:text-slate-300">
                  Coautora em <em>“Rede de Parcerias: 10 anos mudando a vida das pessoas”</em>. Versão digital gratuita em PDF.
                </p>
              </CardContent>
              <CardFooter className="gap-2 pt-1">
                <a
                  href={LINKS.mgiLivroPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs md:text-sm bg-white/70 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  Baixar PDF <Download className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={LINKS.mgiLivroHome}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs md:text-sm bg-white/70 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  Página do livro <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </CardFooter>
            </Card>
          </motion.div>

          {/* MICBR */}
          <motion.div {...fade(1)}>
            <Card className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-white/60 dark:border-white/10 hover:-translate-y-0.5 hover:shadow-md transition">
              <CardHeader className="py-2">
                <CardTitle className="text-base md:text-lg flex items-center gap-2">
                  <Award className="h-5 w-5" aria-hidden /> Selecionada — MICBR 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="relative w-full rounded-lg overflow-hidden ring-1 ring-white/60 dark:ring-white/10 bg-white dark:bg-slate-800">
                  <div className="relative w-full h-40 md:h-44 lg:h-48">
                    <Image
                      src="/images/micbr.png"
                      alt="MICBR 2025"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                <p className="mt-3 text-sm md:text-[15px] text-slate-700 dark:text-slate-300">
                  Habilitada como <strong>Vendedora Sênior</strong> — Setor <strong>Áreas Técnicas</strong> (Região Sul) no Mercado de
                  Indústrias Criativas do Brasil — Fortaleza (CE), dez/2025.
                </p>
              </CardContent>
              <CardFooter className="pt-1">
                <a
                  href={LINKS.micbrResultado}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs md:text-sm bg-white/70 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  Ver resultado oficial <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICADOS ======================================================= */}
      <section id="certificacoes" className="mx-auto max-w-6xl px-6 py-8">
        <Header title="Meus certificados" subtitle="Baixe os arquivos oficiais." />
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {compactCerts.map((c, i) => (
            <motion.div key={c.title} {...fade(i)}>
              <Card className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border-white/60 dark:border-white/10 hover:-translate-y-0.5 hover:shadow-md transition">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/15 dark:bg-emerald-400/15 flex items-center justify-center">
                      <FileDown className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden />
                    </div>
                    <h3 className="font-semibold leading-snug flex-1">{c.title}</h3>
                    <a
                      href={c.file}
                      download
                      className="ml-2 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm bg-white/80 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition whitespace-nowrap"
                    >
                      Baixar <Download className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS ======================================================= */}
      <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-12">
        <Header title="Depoimentos" subtitle="O que dizem sobre trabalhar comigo." />
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} {...fade(i)}>
              <Card className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-white/60 dark:border-white/10 hover:-translate-y-0.5 hover:shadow-md transition">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/60 dark:ring-white/10">
                      <SkeletonImg src={t.photo} alt={t.name} sizes="48px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <Quote className="inline h-4 w-4 mr-1 text-emerald-500" aria-hidden />
                    {t.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTATO / RODAPÉ ================================================ */}
      <footer id="contato" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute top-24 right-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-8 shadow-xl">
            <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  Vamos criar{" "}
                  <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
                    impacto real
                  </span>{" "}
                  juntos?
                </h3>
                <p className="mt-2 text-slate-700 dark:text-slate-300 max-w-2xl">
                  Diagnóstico, incentivos, tecnologia sob medida e transparência. Conte comigo para acelerar seu projeto.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button onClick={() => window.open(`mailto:${email}`)} className="text-base shadow-sm" aria-label="Enviar e-mail">
                    <Mail className="h-4 w-4 mr-2" aria-hidden /> Enviar e-mail
                  </Button>
                  <a
                    href={`https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(WHATSAPP.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-base bg-white/80 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                  >
                    Falar no WhatsApp <MessageCircle className="h-5 w-5" aria-hidden />
                  </a>

                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto md:ml-6 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm bg-white/70 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                  >
                    <Instagram className="h-4 w-4" aria-hidden /> Instagram
                  </a>
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm bg-white/70 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                  </a>
                </div>
              </div>

              {/* Bloco lateral de atalhos */}
              <div className="space-y-3">
                <a
                  href={LINKS.cvPdf}
                  download
                  className="flex items-center justify-between rounded-xl border bg-white/80 dark:bg-slate-900/60 dark:border-white/10 px-4 py-3 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                      <Download className="h-5 w-5 text-emerald-600" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium">Baixar Currículo (PDF)</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Atualizado</p>
                    </div>
                  </div>
                  <Download className="h-4 w-4 opacity-60" aria-hidden />
                </a>

                <a
                  href={LINKS.mroscManual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border bg-white/80 dark:bg-slate-900/60 dark:border-white/10 px-4 py-3 hover:bg-white dark:hover:bg-slate-900 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-cyan-600" aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium">Manual MROSC — Transferegov</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Guia oficial (PDF)</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 opacity-60" aria-hidden />
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/60 dark:border-white/10">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Alessandra Vecchi — Impacto, Inovação & Cultura.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Feito com Next.js, Tailwind e muito carinho pelo 3º setor. ✨
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <WhatsAppFloat />

      {/* Utilidades / Print */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .shimmer::after { content:""; position:absolute; inset:0;
          background: linear-gradient(100deg, transparent 20%, rgba(255,255,255,.35) 50%, transparent 80%);
          transform: translateX(-100%); animation: shimmer 1.5s infinite; }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        @media print {
          .whats-float, .topnav, .scroll-progress,
          button, a[href^="http"], .border-dashed { display: none !important; }
          .rounded-xl, .shadow-sm, .shadow-lg { box-shadow: none !important; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
}

/* ============================================================================
   COMPONENTES AUXILIARES
   ========================================================================== */

/** Imagem com skeleton shimmer */
function SkeletonImg({
  src, alt, sizes, className = "object-contain",
}: { src: string; alt: string; sizes?: string; className?: string; }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`absolute inset-0 ${!loaded ? "shimmer bg-slate-200/60 dark:bg-slate-700/40 rounded-xl" : ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || "100vw"}
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}

/** Cabeçalho de seção */
function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-slate-700 dark:text-slate-300">{subtitle}</p>}
    </div>
  );
}

/** Destaques de Impacto (design tech) */
function ImpactHighlights() {
  const items = highlights;
  return (
    <motion.div {...fade(0)} className="mt-7">
      <div className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-900/70 dark:to-slate-900/50 backdrop-blur-md p-4 sm:p-5 shadow-[0_6px_30px_rgba(16,185,129,.08)]">
        {/* grade suave */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.12] mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)",
            backgroundSize: "26px 26px, 26px 26px",
          }}
        />
        {/* aura */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
          {items.map((it) => (
            <div key={it.label} className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-white/60 dark:border-white/10 p-3 sm:p-4 shadow-sm hover:shadow-md transition">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight
                              bg-gradient-to-r from-emerald-600 via-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
                {it.value}
              </div>
              <div className="mt-1 text-[13px] sm:text-sm text-slate-700/90 dark:text-slate-300/90 leading-snug">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/** Foto com tilt */
function ProfileBlock() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
      <div
        ref={ref}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
          const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
          setT({ x, y });
        }}
        onMouseLeave={() => setT({ x: 0, y: 0 })}
        className="group relative mx-auto w-[88%] max-w-[430px]"
        style={{ perspective: 900 }}
      >
        <div
          className="relative rounded-3xl p-[3px] bg-gradient-to-tr from-emerald-400 via-cyan-400 to-fuchsia-400"
          style={{ transform: `rotateX(${t.y}deg) rotateY(${t.x}deg)` }}
        >
          <div className="relative rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md">
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <SkeletonImg
                src="/images/alessandra.jpg"
                alt="Alessandra Vecchi"
                sizes="430px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-slate-900/80 px-3 py-1 text-xs shadow ring-1 ring-white/60 dark:ring-white/10">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            Impacto Social • Inovação • Cultura
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** Fundo tech + cultura */
function TechCultureBG() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-50 opacity-90"
        style={{
          background:
            "radial-gradient(60% 60% at 10% 10%, rgba(16,185,129,0.12) 0, transparent 60%), radial-gradient(55% 55% at 90% 20%, rgba(34,211,238,0.12) 0, transparent 60%), radial-gradient(60% 60% at 20% 90%, rgba(217,70,239,0.10) 0, transparent 60%), linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #f0fdf4 100%)",
        }}
      />
      <div className="pointer-events-none fixed -z-40 inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl animate-slow-float" />
        <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-slow-float-rev" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-80 w-[42rem] -translate-y-1/2 bg-gradient-to-r from-fuchsia-400/10 via-emerald-400/10 to-cyan-400/10 blur-2xl rounded-full rotate-6 animate-pulse-slow" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-30 opacity-[0.08] mix-blend-multiply dark:opacity-[0.12]"
        style={{
            backgroundImage:
              "linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)",
            backgroundSize: "26px 26px, 26px 26px",
        }}
      />
      <style jsx global>{`
        @keyframes slow-float { 0% { transform: translateY(0px); } 50% { transform: translateY(16px); } 100% { transform: translateY(0px); } }
        @keyframes slow-float-rev { 0% { transform: translateY(0px); } 50% { transform: translateY(-16px); } 100% { transform: translateY(0px); } }
        .animate-slow-float { animation: slow-float 12s ease-in-out infinite; }
        .animate-slow-float-rev { animation: slow-float-rev 12s ease-in-out infinite; }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </>
  );
}

/** Barra de progresso scroll (com rAF) */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const s = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setP(h > 0 ? Math.min(1, Math.max(0, s / h)) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="scroll-progress fixed top-0 left-0 right-0 z-[70]" aria-hidden>
      <div
        className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500"
        style={{ transform: `scaleX(${p})`, transformOrigin: "0 0" }}
      />
    </div>
  );
}

/** Theme toggle light/dark */
function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const nxt = !dark;
    setDark(nxt);
    document.documentElement.classList.toggle("dark", nxt);
    localStorage.setItem("theme", nxt ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      className="rounded-lg p-2 border bg-white/80 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {dark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
    </button>
  );
}

/** Top Navigation */
function TopNav({ active, open, setOpen }: { active: string; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <>
      <div className="topnav sticky top-0 z-[60]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-2 mb-3 flex h-14 items-center justify-between rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
            <a href="#inicio" className="ml-3 font-semibold tracking-wide">
              Alessandra <span className="text-emerald-600">Vecchi</span>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-1 pr-2">
              {NAV_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`px-3 py-1.5 rounded-lg text-sm transition ${
                    active === s.id
                      ? "bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200"
                      : "hover:bg-white dark:hover:bg-slate-900"
                  }`}
                >
                  {s.label}
                </a>
              ))}
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 rounded-lg p-2 border bg-white/80 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                aria-label="Abrir Instagram"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 rounded-lg p-2 border bg-white/80 dark:bg-slate-900/60 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition"
                aria-label="Abrir LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
              <ThemeToggle />
            </nav>

            {/* Mobile */}
            <div className="flex items-center gap-1 md:hidden mr-2">
              <ThemeToggle />
              <button
                className="rounded-lg p-2 border bg-white/80 dark:bg-slate-900/60 dark:border-white/10"
                aria-label="Abrir menu"
                onClick={() => setOpen(true)}
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/60 dark:border-white/10">
              <span className="font-semibold">Navegação</span>
              <button
                aria-label="Fechar"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 border bg-white/80 dark:bg-slate-900/60 dark:border-white/10"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav className="p-3 flex flex-col gap-1">
              {NAV_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm ${
                    active === s.id ? "bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200" : "hover:bg-white dark:hover:bg-slate-900"
                  }`}
                >
                  {s.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-2 px-3">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 border bg-white/80 dark:bg-slate-900/60 dark:border-white/10"
                  aria-label="Abrir Instagram"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 border bg-white/80 dark:bg-slate-900/60 dark:border-white/10"
                  aria-label="Abrir LinkedIn"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

/** WhatsApp flutuante */
function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(WHATSAPP.message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whats-float fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute -inset-1 rounded-full bg-green-500/40 blur-md opacity-70 group-hover:opacity-90 animate-pulse" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl ring-1 ring-green-600/40 transition hover:scale-105">
        <MessageCircle className="h-7 w-7" aria-hidden />
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 translate-x-2 opacity-0 group-hover:opacity-100 transition bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
        Fale no WhatsApp
      </div>
    </a>
  );
}

