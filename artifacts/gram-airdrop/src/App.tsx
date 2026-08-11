import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, Check, ChevronDown, CircleHelp, ExternalLink, Menu, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';

type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  { question: 'Is this an official live airdrop?', answer: 'This experience is an eligibility preview for the GRAM AIRDROP campaign. It does not represent a live allocation, a guaranteed reward, or an official TON distribution. Always confirm campaign details through official TON and Gram channels before taking action.' },
  { question: 'What is Gram?', answer: 'TON describes Gram as the heart of the TON blockchain: a Telegram-native currency for users, mini apps, and channels. It is designed for value to move at the speed of conversation.' },
  { question: 'What might determine eligibility?', answer: 'Campaign criteria can include activity windows, verified participation, and ecosystem engagement. The preview below is intentionally non-binding and helps you understand the journey before any official criteria are announced.' },
  { question: 'Do I need to connect a wallet now?', answer: 'No. You should never connect a wallet or share a seed phrase just to check campaign information. This preview only asks for an optional Telegram handle so you can see the flow.' },
  { question: 'Why does TON feel fast?', answer: 'TON emphasizes sub-second finality and nearly zero fees, making it a natural environment for everyday transfers inside Telegram-native experiences.' },
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
        {links.map(([label, id]) => <button type="button" key={id} onClick={() => go(id)} data-testid={`link-nav-${id}`} className="mono text-[11px] font-medium uppercase tracking-[.12em] text-[#557078] transition-colors hover:text-[#188d82] focus-ring">{label}</button>)}
      </nav>
      <button type="button" onClick={onPreview} data-testid="button-header-preview" className="btn-secondary hidden !border-[#a9ccca] !bg-transparent !px-4 !py-2.5 md:inline-flex"><span className="h-1.5 w-1.5 rounded-full bg-[#e3b743]" />Check preview</button>
      <button type="button" onClick={() => setOpen(!open)} data-testid="button-mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="rounded-full border border-[#c3d9d8] p-2.5 md:hidden focus-ring">{open ? <X size={18} /> : <Menu size={18} />}</button>
    </div>
    {open && <div className="absolute left-4 right-4 top-[74px] rounded-2xl border border-[#28515a] bg-[#0d2029]/98 p-3 text-[#e7f8f4] shadow-[0_20px_50px_rgba(0,0,0,.35)] backdrop-blur md:hidden">
      {links.map(([label, id]) => <button type="button" key={id} onClick={() => go(id)} data-testid={`link-mobile-${id}`} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold text-[#e7f8f4] hover:bg-[#173843]">{label}<ArrowRight size={16} className="text-[#45bbae]" /></button>)}
      <button type="button" onClick={() => { setOpen(false); onPreview(); }} data-testid="button-mobile-preview" className="btn-primary mt-2 w-full">Check eligibility preview <ArrowRight size={16} /></button>
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
      {[['100','164'],['382','169'],['409','303'],['260','404'],['109','336'],['157','106'],['355','286'],['85','255']].map(([cx, cy], i) => <g key={i}><circle cx={cx} cy={cy} r="5" fill="#e3b743" /><circle cx={cx} cy={cy} r="12" fill="none" stroke="#e3b743" strokeOpacity=".35" /></g>)}
    </svg>
    <div className="drift absolute inset-[28%] flex items-center justify-center rounded-[38%] bg-[#188d82] shadow-[0_24px_0_#126e67,0_35px_54px_rgba(18,110,103,.25)] rotate-[-4deg]">
      <div className="absolute inset-[9%] rounded-[33%] border border-white/20" />
      <div className="text-center text-[#f5fcfa]"><div className="display text-[86px] font-bold leading-none">G</div><div className="mono mt-1 text-[10px] uppercase tracking-[.3em] text-[#b7e4dd]">gram / ton</div></div>
    </div>
    <div className="absolute left-[4%] top-[32%] rounded-full border border-[#b4d7d4] bg-[#eff7f5] px-3 py-2 mono text-[10px] text-[#527078]">node_014 <span className="ml-2 text-[#188d82]">●</span></div>
    <div className="absolute bottom-[17%] right-[-1%] rounded-full border border-[#b4d7d4] bg-[#eff7f5] px-3 py-2 mono text-[10px] text-[#527078]">channel_pay <span className="ml-2 text-[#188d82]">●</span></div>
  </div>;
}

function PreviewModal({ close }: { close: () => void }) {
  const [handle, setHandle] = useState('');
  const [step, setStep] = useState(1);
  const [safe, setSafe] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (handle.trim() && safe) setStep(2); };
  return <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="preview-title">
    <div className="relative w-full max-w-[520px] overflow-hidden rounded-[26px] border border-[#2a5961] bg-[#102630] text-[#e7f8f4] shadow-[0_30px_100px_rgba(0,0,0,.45)]">
      <button type="button" onClick={close} data-testid="button-close-preview" aria-label="Close eligibility preview" className="absolute right-5 top-5 z-10 rounded-full p-2 text-[#91b9ba] hover:bg-[#1a3b45] focus-ring"><X size={18} /></button>
      <div className="grid-paper border-b border-[#24505a] px-7 pb-6 pt-8"><div className="eyebrow">Campaign preview / {String(step).padStart(2, '0')}</div><h2 id="preview-title" className="display mt-4 max-w-[410px] text-3xl font-bold leading-[.98]">{step === 1 ? 'Find your place in the network.' : 'Your signal is confirmed.'}</h2><p className="mt-3 max-w-[420px] text-sm leading-6 text-[#9bb9bb]">{step === 1 ? 'Enter your Telegram handle for a quick eligibility walkthrough. No wallet connection is needed to check.' : 'Your preview result is ready. Continue to the secure wallet connection page when you are ready to claim.'}</p></div>
      {step === 1 ? <form onSubmit={submit} className="space-y-5 p-7">
         <label className="block"><span className="mono text-[10px] uppercase tracking-[.14em] text-[#87b0b2]">Telegram handle <span className="text-[#668c8f]">(required for preview)</span></span><div className="mt-2 flex items-center rounded-xl border border-[#2a5961] bg-[#0b1c25] px-3 focus-within:border-[#45bbae]"><span className="text-[#668c8f]">@</span><input value={handle} onChange={e => setHandle(e.target.value.replace('@',''))} data-testid="input-telegram-handle" className="w-full bg-transparent px-2 py-3 text-sm text-[#f1fffc] outline-none placeholder:text-[#557477]" placeholder="yourhandle" /></div></label>
         <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-[#a9c5c5]"><input type="checkbox" checked={safe} onChange={e => setSafe(e.target.checked)} data-testid="input-safety-confirmation" className="mt-1 h-4 w-4 accent-[#45bbae]" />I understand this is a preview and not a guaranteed allocation.</label>
         <button type="submit" disabled={!handle.trim() || !safe} data-testid="button-submit-preview" className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-45">Check eligibility <ArrowRight size={16} /></button>
         <p className="flex items-start gap-2 text-[11px] leading-4 text-[#86a9aa]"><ShieldCheck size={14} className="mt-0.5 shrink-0 text-[#45bbae]" />You will never be asked for a seed phrase, private key, or payment here.</p>
       </form> : <div className="p-7"><div className="eligibility-burst flex h-14 w-14 items-center justify-center rounded-full bg-[#45bbae] text-[#08232b]"><Check size={28} /></div><div className="mono mt-6 text-[10px] uppercase tracking-[.16em] text-[#66cabc]">Eligibility result / @{handle}</div><h3 className="display mt-3 text-5xl font-bold tracking-[-.06em] text-[#f4fffc]">1,290 <span className="text-[#45bbae]">GRAM</span></h3><p className="mt-4 text-sm leading-6 text-[#a9c5c5]">Your campaign preview says you’re eligible for 1,290 GRAM TOKENS. Connect a wallet to continue to the claim page.</p><button type="button" onClick={() => window.open('https://claimgram.netlify.app', '_blank', 'noopener,noreferrer')} data-testid="button-connect-wallet" className="btn-primary mt-6 w-full">Connect wallet to claim <ArrowRight size={17} /></button><button type="button" onClick={() => setStep(1)} data-testid="button-back-to-handle" className="btn-secondary mt-3 w-full !border-[#2a5961] !bg-transparent !text-[#b1cccb]">Edit Telegram name</button></div>}
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
    og.forEach(([property, content]) => { let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null; if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); } el.content = content; });
  }, []);
  return <div id="top" className="gram-page grain min-h-[100dvh]">
    <Header onPreview={() => setPreviewOpen(true)} />
    <main>
      <section className="grid-paper relative min-h-[760px] overflow-hidden border-b border-[#c9dfdc] pt-[120px] md:min-h-[840px] md:pt-[164px]" aria-labelledby="hero-title">
        <div className="container-wide grid items-center gap-8 pb-20 lg:grid-cols-[1.02fr_.98fr] lg:pb-28">
          <div className="relative z-10">
            <div className="eyebrow reveal">TON ecosystem / signal 001</div>
            <h1 id="hero-title" className="hero-title display reveal delay-1 mt-6 max-w-[720px] text-[clamp(4.7rem,10.2vw,9.4rem)] font-bold leading-[.84] tracking-[-.08em] text-[#1b3441]">The first<br /><span className="text-[#188d82]">telegram</span><br />airdrop.</h1>
            <p className="reveal delay-2 mt-8 max-w-[460px] text-[15px] leading-7 text-[#5a7178]">GRAM is the Telegram-native currency built to move through users, mini apps, and channels. This is your first look at the airdrop journey — before you take a single step.</p>
            <div className="reveal delay-3 mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => setPreviewOpen(true)} data-testid="button-hero-preview" className="btn-primary">Check eligibility preview <ArrowRight size={16} /></button><button type="button" onClick={() => scrollTo('network')} data-testid="button-hero-explore" className="btn-secondary">Explore Gram <ArrowDownRight size={16} /></button></div>
            <p className="mono reveal delay-3 mt-7 text-[10px] uppercase tracking-[.11em] text-[#7b9295]"><span className="mr-2 text-[#e3b743]">●</span>The allocation is currently live and ongoing</p>
          </div>
          <div className="relative z-0 lg:pt-3"><NetworkOrb /></div>
        </div>
        <div className="container-wide absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-between mono text-[10px] uppercase tracking-[.12em] text-[#7c9395]"><span>01 / open channel</span><span className="hidden sm:inline">scroll to decode <ArrowDownRight className="ml-2 inline" size={13} /></span><span>ton://gram</span></div>
      </section>

      <section id="network" className="section-pad border-b border-[#c9dfdc] bg-[#f4f9f8] py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="eyebrow">02 / The living layer</div><h2 className="display mt-5 max-w-[500px] text-5xl font-bold leading-[.94] tracking-[-.055em] md:text-7xl">A currency<br /><span className="text-[#188d82]">inside the flow.</span></h2></div><p className="max-w-[410px] text-[15px] leading-7 text-[#60767c]">TON’s public vision puts Gram at the heart of its blockchain — a native unit for the places people already spend time. No separate universe. No tab to keep open.</p></div>
          <div className="mt-16 grid gap-4 md:grid-cols-3"><article className="group rounded-2xl border border-[#c4dedb] bg-[#e9f5f2] p-6 transition-transform hover:-translate-y-1"><div className="mono text-[11px] text-[#188d82]">NODE / 01</div><h3 className="display mt-14 text-2xl font-bold">Users</h3><p className="mt-3 text-sm leading-6 text-[#647a7e]">Value that feels as native as sending a message — built for people, not paperwork.</p><div className="mt-8 flex justify-end"><span className="rounded-full bg-[#cfeae4] p-2 text-[#188d82]"><ArrowDownRight size={18} /></span></div></article><article className="group rounded-2xl border border-[#bed6e2] bg-[#eaf3f7] p-6 transition-transform hover:-translate-y-1 md:translate-y-8"><div className="mono text-[11px] text-[#1684a1]">NODE / 02</div><h3 className="display mt-14 text-2xl font-bold">Mini apps</h3><p className="mt-3 text-sm leading-6 text-[#647a7e]">A payment rail for the tiny moments that make Telegram feel like a platform.</p><div className="mt-8 flex justify-end"><span className="rounded-full bg-[#d4eaf1] p-2 text-[#1684a1]"><Zap size={18} /></span></div></article><article className="group rounded-2xl border border-[#e0d8ae] bg-[#faf5dd] p-6 transition-transform hover:-translate-y-1"><div className="mono text-[11px] text-[#ae8422]">NODE / 03</div><h3 className="display mt-14 text-2xl font-bold">Channels</h3><p className="mt-3 text-sm leading-6 text-[#756b4a]">Community, commerce, and coordination — all speaking the same value language.</p><div className="mt-8 flex justify-end"><span className="rounded-full bg-[#f0e5b9] p-2 text-[#ae8422]"><Sparkles size={18} /></span></div></article></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1b3441] py-24 text-[#edf8f5]"><div className="absolute right-[-10%] top-[-40%] h-[600px] w-[600px] rounded-full border border-[#3b6a6d] opacity-40" /><div className="container-wide relative"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><div className="eyebrow !text-[#70cfc0]">03 / Why TON</div><h2 className="display mt-5 max-w-[440px] text-5xl font-bold leading-[.93] tracking-[-.05em] md:text-7xl">Built for<br /><span className="text-[#e3b743]">now.</span></h2></div><div className="grid gap-5 sm:grid-cols-2"><div className="border-t border-[#52777a] pt-5"><div className="mono text-4xl text-[#71cfc0]">≈ 0</div><h3 className="mt-3 font-bold">near-zero fees</h3><p className="mt-2 text-sm leading-6 text-[#a6c1c0]">Designed for everyday movement, not just occasional transfers.</p></div><div className="border-t border-[#52777a] pt-5"><div className="mono text-4xl text-[#71cfc0]">&lt; 1s</div><h3 className="mt-3 font-bold">finality</h3><p className="mt-2 text-sm leading-6 text-[#a6c1c0]">TON emphasizes sub-second finality, keeping actions close to real time.</p></div><div className="border-t border-[#52777a] pt-5"><div className="mono text-4xl text-[#e3b743]">1:1</div><h3 className="mt-3 font-bold">human scale</h3><p className="mt-2 text-sm leading-6 text-[#a6c1c0]">A network that starts where people already are: Telegram.</p></div><div className="border-t border-[#52777a] pt-5"><div className="mono text-4xl text-[#e3b743]">∞</div><h3 className="mt-3 font-bold">open routes</h3><p className="mt-2 text-sm leading-6 text-[#a6c1c0]">Users, mini apps, and channels can share one native currency.</p></div></div></div></div></section>

      <section id="journey" className="section-pad bg-[#eef4f5] py-28"><div className="container-wide"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="eyebrow">04 / The journey</div><h2 className="display mt-5 max-w-[570px] text-5xl font-bold leading-[.94] tracking-[-.055em] md:text-7xl">Three signals.<br /><span className="text-[#188d82]">One clear path.</span></h2></div><p className="max-w-[300px] text-sm leading-6 text-[#60767c]">No mystery steps. Just a transparent preview of what responsible participation can look like.</p></div><div className="relative mt-16 grid gap-4 md:grid-cols-3"><div className="absolute left-[12%] right-[12%] top-6 hidden border-t border-dashed border-[#8fc8c0] md:block" />{[['01','Discover','Understand Gram, TON, and the verified channels carrying the signal.'],['02','Check','Preview your place without connecting a wallet or making a promise.'],['03','Participate','If an official campaign opens, follow its published criteria — and nothing else.']].map(([num,title,desc], i) => <article key={num} className="relative rounded-2xl border border-[#c8dddb] bg-[#f8fbfa] p-6 shadow-[0_14px_30px_rgba(34,72,78,.05)]"><div className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#eef4f5] ${i === 1 ? 'bg-[#e3b743]' : 'bg-[#188d82]'} mono text-xs font-bold ${i === 1 ? 'text-[#253942]' : 'text-white'}`}>{num}</div><h3 className="display mt-12 text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#647a7e]">{desc}</p><div className="mono mt-10 text-[10px] uppercase tracking-[.12em] text-[#94a7a8]">{i === 2 ? 'await official signal' : 'signal confirmed'}</div></article>)}</div></div></section>

      <section className="border-y border-[#c9dfdc] bg-[#dcefeb] py-20"><div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div className="flex items-start gap-4"><div className="mt-1 rounded-full bg-[#188d82] p-2 text-white"><ShieldCheck size={18} /></div><div><h2 className="display text-2xl font-bold">Safety is part of the protocol.</h2><p className="mt-2 max-w-[620px] text-sm leading-6 text-[#587176]">Verify official links before clicking. Gram AIRDROP will never ask for a seed phrase, private key, or a payment to unlock an allocation.</p></div></div><button type="button" onClick={() => setPreviewOpen(true)} data-testid="button-safety-preview" className="btn-secondary shrink-0 !bg-[#f6fbfa]">Preview safely <ArrowRight size={16} /></button></div></section>

      <section id="faq" className="section-pad bg-[#f4f9f8] py-28"><div className="container-wide grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><div className="eyebrow">05 / Signal clarity</div><h2 className="display mt-5 text-5xl font-bold leading-[.94] tracking-[-.05em] md:text-7xl">Questions<br />before<br /><span className="text-[#188d82]">action.</span></h2><div className="mt-8 flex items-center gap-3 text-sm text-[#688087]"><CircleHelp size={17} className="text-[#188d82]" />No wallet connection required.</div></div><div className="divide-y divide-[#cbdedb] border-y border-[#cbdedb]">{faqs.map((item, i) => <div key={item.question}><button type="button" onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} aria-expanded={activeFaq === i} data-testid={`button-faq-${i}`} className="flex w-full items-center justify-between gap-4 py-6 text-left font-bold focus-ring"><span>{item.question}</span><ChevronDown size={18} className={`shrink-0 text-[#188d82] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} /></button>{activeFaq === i && <p data-testid={`text-faq-answer-${i}`} className="max-w-[680px] pb-6 pr-8 text-sm leading-7 text-[#60767c]">{item.answer}</p>}</div>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#e3b743] py-24"><div className="absolute -right-20 -top-28 h-[380px] w-[380px] rounded-full border border-[#bd982c]/50" /><div className="container-wide relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"><div><div className="eyebrow !text-[#5e551f]">06 / Open channel</div><h2 className="display mt-5 max-w-[690px] text-5xl font-bold leading-[.9] tracking-[-.06em] text-[#263842] md:text-8xl">Your signal<br />starts here.</h2></div><div className="max-w-[300px]"><p className="text-sm leading-6 text-[#635922]">Get the campaign preview. Keep your keys private. Wait for the verified signal.</p><button type="button" onClick={() => setPreviewOpen(true)} data-testid="button-final-preview" className="btn-primary mt-6 !bg-[#1b3441] !shadow-[0_7px_0_#0e222c] hover:!bg-[#274955]">Check eligibility preview <ArrowRight size={16} /></button></div></div></section>
    </main>
    <footer className="bg-[#1b3441] py-10 text-[#d9ebe7]"><div className="container-wide flex flex-col justify-between gap-7 md:flex-row md:items-center"><div className="flex items-center gap-3"><BrandMark /><span className="display text-sm font-bold">GRAM/AIRDROP</span></div><div className="flex flex-wrap gap-x-6 gap-y-2 mono text-[10px] uppercase tracking-[.1em] text-[#91b3b0]"><button type="button" onClick={() => scrollTo('network')} data-testid="link-footer-network" className="hover:text-white">Network</button><button type="button" onClick={() => scrollTo('journey')} data-testid="link-footer-journey" className="hover:text-white">Journey</button><button type="button" onClick={() => scrollTo('faq')} data-testid="link-footer-faq" className="hover:text-white">FAQ</button><a href="https://ton.org" target="_blank" rel="noreferrer" data-testid="link-footer-ton" className="inline-flex items-center gap-1 hover:text-white">TON.org <ExternalLink size={11} /></a></div><p className="mono text-[10px] uppercase tracking-[.1em] text-[#759895]">Built for the open network / 2025</p></div></footer>
    {previewOpen && <PreviewModal close={() => setPreviewOpen(false)} />}
  </div>;
}

export default App;