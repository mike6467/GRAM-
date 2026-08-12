import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, Check, ChevronDown, CircleHelp, ExternalLink, Menu, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';

type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  { question: 'Is this an official live airdrop?', answer: 'This experience is an eligibility preview for the GRAM AIRDROP campaign. It does not represent a live allocation, a guaranteed reward, or[...]' },
  { question: 'What is Gram?', answer: 'TON describes Gram as the heart of the TON blockchain: a Telegram-native currency for users, mini apps, and channels. It is designed for value to move at the[...]' },
  { question: 'What might determine eligibility?', answer: 'Campaign criteria can include activity windows, verified participation, and ecosystem engagement. The preview below is intentionally non-[...]' },
  { question: 'Do I need to connect a wallet now?', answer: 'No. You should never connect a wallet or share a seed phrase just to check campaign information. This preview only asks for an optional[...]' },
  { question: 'Why does TON feel fast?', answer: 'TON emphasizes sub-second finality and nearly zero fees, making it a natural environment for everyday transfers inside Telegram-native experiences[...]' },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function BrandMark() {
  return <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#188d82] text-[#f5fcfa] shadow-[0_3px_0_#126e67]"><span className="display text-lg font-bold">G</span></span>;
}

function Header({ onPreview }: { onPreview: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [['Network', 'network'], ['Journey', 'journey'], ['FAQ', 'faq']];
  const go = (id: string) => { setOpen(false); scrollTo(id); };
  return <header className="absolute inset-x-0 top-0 z-20">
    <div className="container-wide flex h-[82px] items-center justify-between">
      <button type="button" onClick={() => scrollTo('top')} data-testid="button-brand-home" className="flex items-center gap-3 focus-ring">
        <BrandMark /><span className="display text-[15px] font-bold tracking-[-.02em]">GRAM<span className="text-[#188d82]">/</span>AIRDROP</span>
      </button>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {links.map(([label, id]) => <button type="button" key={id} onClick={() => go(id)} data-testid={`link-nav-${id}`} className="mono text-[11px] font-medium uppercase tracking-[.12em] text-[#5[...]
      </nav>
      <button type="button" onClick={onPreview} data-testid="button-header-preview" className="btn-secondary hidden !border-[#a9ccca] !bg-transparent !px-4 !py-2.5 md:inline-flex"><span className=[...]
      <button type="button" onClick={() => setOpen(!open)} data-testid="button-mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="rounded-full border border-[#c3d9d8] p-2.5 md:[...]
    </div>
    {open && <div className="absolute left-4 right-4 top-[74px] rounded-2xl border border-[#28515a] bg-[#0d2029]/98 p-3 text-[#e7f8f4] shadow-[0_20px_50px_rgba(0,0,0,.35)] backdrop-blur md:hidden"[...]
      {links.map(([label, id]) => <button type="button" key={id} onClick={() => go(id)} data-testid={`link-mobile-${id}`} className="flex w-full items-center justify-between rounded-xl px-4 py-3 t[...]
      <button type="button" onClick={() => { setOpen(false); onPreview(); }} data-testid="button-mobile-preview" className="btn-primary mt-2 w-full">Check eligibility preview <ArrowRight size={16}[...]
    </div>}
  </header>;
}

function NetworkOrb() {
  return <div className="relative mx-auto aspect-square w-full max-w-[500px]">
    <div className="pulse-ring absolute inset-[12%] rounded-full border border-[#55b9ad]/60" />
    <div className="absolute inset-[24%] rounded-full border border-[#55b9ad]/50" />
    <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
      <path d="M108 166 Q230 94 381 170 T376 354 Q240 438 110 336 T108 166" fill="none" stroke="#87cfc4" strokeWidth="1.5" className="network-line" />
      <path d="M85 255 Q186 122 341 147 T409 304 Q344 421 196 365 T85 255" fill="none" stroke="#c4e6df" strokeWidth="1" />
      <path d="M157 105 Q298 154 355 286 T260 404 Q158 391 145 255 T157 105" fill="none" stroke="#55b9ad" strokeWidth="1.5" className="network-line" />
      {[['100','164'],['382','169'],['409','303'],['260','404'],['109','336'],['157','106'],['355','286'],['85','255']].map(([cx, cy], i) => <g key={i}><circle cx={cx} cy={cy} r="5" fill="#e3b743"[...]
    </svg>
    <div className="drift absolute inset-[28%] flex items-center justify-center rounded-[38%] bg-[#188d82] shadow-[0_24px_0_#126e67,0_35px_54px_rgba(18,110,103,.25)] rotate-[-4deg]">
      <div className="absolute inset-[9%] rounded-[33%] border border-white/20" />
      <div className="text-center text-[#f5fcfa]"><div className="display text-[86px] font-bold leading-none">G</div><div className="mono mt-1 text-[10px] uppercase tracking-[.3em] text-[#b7e4dd]"[...]
    </div>
    <div className="absolute left-[4%] top-[32%] rounded-full border border-[#b4d7d4] bg-[#eff7f5] px-3 py-2 mono text-[10px] text-[#527078]">node_014 <span className="ml-2 text-[#188d82]">●</sp[...]
    <div className="absolute bottom-[17%] right-[-1%] rounded-full border border-[#b4d7d4] bg-[#eff7f5] px-3 py-2 mono text-[10px] text-[#527078]">channel_pay <span className="ml-2 text-[#188d82]"[...]
  </div>;
}

function PreviewModal({ close }: { close: () => void }) {
  const [handle, setHandle] = useState('');
  const [step, setStep] = useState(1);
  const [safe, setSafe] = useState(false);
  
  const handleWalletConnect = () => {
    // Redirect to gramairdrop.site (changed from cm.gramairdrop.site)
    window.location.href = `https://gramairdrop.site/connect?handle=${encodeURIComponent(handle)}`;
  };
  
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (handle.trim() && safe) setStep(2); };
  return <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="preview-title">
    <div className="relative w-full max-w-[520px] overflow-hidden rounded-[26px] border border-[#2a5961] bg-[#102630] text-[#e7f8f4] shadow-[0_30px_100px_rgba(0,0,0,.45)]">
      <button type="button" onClick={close} data-testid="button-close-preview" aria-label="Close eligibility preview" className="absolute right-5 top-5 z-10 rounded-full p-2 text-[#91b9ba] hover:b[...]
      <div className="grid-paper border-b border-[#24505a] px-7 pb-6 pt-8"><div className="eyebrow">Campaign preview / {String(step).padStart(2, '0')}</div><h2 id="preview-title" className="displa[...]
      {step === 1 ? <form onSubmit={submit} className="space-y-5 p-7">
         <label className="block"><span className="mono text-[10px] uppercase tracking-[.14em] text-[#87b0b2]">Telegram handle <span className="text-[#668c8f]">(required for preview)</span></span>[...]
         <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-[#a9c5c5]"><input type="checkbox" checked={safe} onChange={e => setSafe(e.target.checked)} data-testid="inpu[...]
         <button type="submit" disabled={!handle.trim() || !safe} data-testid="button-submit-preview" className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-45">Check eligibili[...]
         <p className="flex items-start gap-2 text-[11px] leading-4 text-[#86a9aa]"><ShieldCheck size={14} className="mt-0.5 shrink-0 text-[#45bbae]" />You will never be asked for a seed phrase, p[...]
       </form> : <div className="p-7"><div className="eligibility-burst flex h-14 w-14 items-center justify-center rounded-full bg-[#45bbae] text-[#08232b]"><Check size={28} /></div><div className[...]
       <button type="button" onClick={handleWalletConnect} className="btn-primary w-full mt-4">Connect wallet → gramairdrop.site</button>
     </div>}
    </div>
  </div>;
}

function App() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  useEffect(() => {
    document.title = 'GRAM AIRDROP — Enter the network';
    const description = 'Explore the GRAM AIRDROP eligibility preview: a Telegram-native campaign experience built on the TON ecosystem.';
    let tag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag); }
    tag.content = description;
    const og = [['og:title', 'GRAM AIRDROP — Enter the network'], ['og:description', description], ['og:type', 'website']];
    og.forEach(([property, content]) => { let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null; if (!el) { el = document.createElement('meta'); el.setAttribute[...]
  }, []);
  return <div id="top" className="gram-page grain min-h-[100dvh]">
    <Header onPreview={() => setPreviewOpen(true)} />
    <main>
      <section className="grid-paper relative min-h-[760px] overflow-hidden border-b border-[#c9dfdc] pt-[120px] md:min-h-[840px] md:pt-[164px]" aria-labelledby="hero-title">
        <div className="container-wide grid items-center gap-8 pb-20 lg:grid-cols-[1.02fr_.98fr] lg:pb-28">
          <div className="relative z-10">
            <div className="eyebrow reveal">TON ecosystem / signal 001</div>
            <h1 id="hero-title" className="hero-title display reveal delay-1 mt-6 max-w-[720px] text-[clamp(4.7rem,10.2vw,9.4rem)] font-bold leading-[.84] tracking-[-.08em] text-[#1b3441]">The fir[...]
            <p className="reveal delay-2 mt-8 max-w-[460px] text-[15px] leading-7 text-[#5a7178]">GRAM is the Telegram-native currency built to move through users, mini apps, and channels. This i[...]
            <div className="reveal delay-3 mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => setPreviewOpen(true)} data-testid="button-hero-preview" className="btn-primary">Check el[...]
            <p className="mono reveal delay-3 mt-7 text-[10px] uppercase tracking-[.11em] text-[#7b9295]"><span className="mr-2 text-[#e3b743]">●</span>The allocation is currently live and ongo[...]
          </div>
          <div className="relative z-0 lg:pt-3"><NetworkOrb /></div>
        </div>
        <div className="container-wide absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-between mono text-[10px] uppercase tracking-[.12em] text-[#7c9395]"><span>01 / open ch[...]
      </section>

      <section id="network" className="section-pad border-b border-[#c9dfdc] bg-[#f4f9f8] py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="eyebrow">02 / The living layer</div><h2 className="display mt-5 max-w-[500px] text-5xl font-bold[...]
          <div className="mt-16 grid gap-4 md:grid-cols-3"><article className="group rounded-2xl border border-[#c4dedb] bg-[#e9f5f2] p-6 transition-transform hover:-translate-y-1"><div className[...]
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1b3441] py-24 text-[#edf8f5]"><div className="absolute right-[-10%] top-[-40%] h-[600px] w-[600px] rounded-full border border-[#3b6a6d] opa[...]

      <section id="journey" className="section-pad bg-[#eef4f5] py-28"><div className="container-wide"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div clas[...]

      <section className="border-y border-[#c9dfdc] bg-[#dcefeb] py-20"><div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div className=[...]

      <section id="faq" className="section-pad bg-[#f4f9f8] py-28"><div className="container-wide grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><div className="eyebrow">05 / Signal clarity</div><[...]

      <section className="relative overflow-hidden bg-[#e3b743] py-24"><div className="absolute -right-20 -top-28 h-[380px] w-[380px] rounded-full border border-[#bd982c]/50" /><div className="co[...]
    </main>
    <footer className="bg-[#1b3441] py-10 text-[#d9ebe7]"><div className="container-wide flex flex-col justify-between gap-7 md:flex-row md:items-center"><div className="flex items-center gap-3">[...]
    {previewOpen && <PreviewModal close={() => setPreviewOpen(false)} />}
  </div>;
}

export default App;
