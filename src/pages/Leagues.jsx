/* Leagues.jsx — team leagues at Astro Kings.

   This page deliberately states no nights, divisions, prices, availability or
   standings. The previous version invented all of them, including a "live"
   league table of fictional teams, and its buttons did nothing. Nothing goes
   back on this page until Dan supplies the real details. Until then the page's
   job is to collect team enquiries, which reach play@astro-kings.com tagged
   "leagues". */

import { I } from '../lib/icons.jsx';
import { scrollToId } from '../lib/router.js';
import { Glass, Btn, Eyebrow, PageHead } from '../components/ui.jsx';
import { EnquiryForm } from '../components/Enquiry.jsx';
import { Footer } from '../components/Nav.jsx';

/* What a team can expect to be asked — keeps the enquiry useful without
   claiming anything about how the leagues are actually run. */
const ASK = [
  'Your team name, or that you need putting into one',
  'How many players you can usually field',
  'Which nights of the week suit you',
  'Whether you have played in a league before',
];

export function Leagues(){
  const jump = (id)=>(e)=>{ e.preventDefault(); scrollToId(id); };

  return (
    <div>
      <PageHead eyebrow="leagues" title="Enter a team"
        sub="Team leagues run at Astro Kings on our floodlit 4G pitches. Tell us about your team and we&rsquo;ll come back with the nights, format and price.">
        <a href="#leagues-enquiry" onClick={jump('leagues-enquiry')}>
          <Btn kind="primary" iconEnd={I.arrow({})}>Enquire about a league</Btn>
        </a>
      </PageHead>

      {/* ---------- enquiry ---------- */}
      <section id="leagues-enquiry" className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_440px]">
          <div>
            <Eyebrow>get your team in</Eyebrow>
            <h2 className="hero-title mt-3 text-3xl font-semibold md:text-4xl">Tell us about your team</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
              Send us a few details and we&rsquo;ll let you know which nights have space, what the
              block costs and when the next one starts. Individual players looking to join a team
              are welcome too — say so and we&rsquo;ll see who needs numbers.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ASK.map(a=>(
                <div key={a} className="flex items-start gap-3 text-[14px] text-white/75">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full accent-bg text-[#0b0b0b]">
                    <span style={{width:13,height:13}}>{I.check({})}</span>
                  </span>
                  {a}
                </div>
              ))}
            </div>
          </div>
          <Glass strong className="rounded-[30px] p-7">
            <div className="text-[12px] uppercase tracking-wide text-white/45">league enquiry</div>
            <p className="mt-2 text-[13px] text-white/55">We&rsquo;ll come back to you with nights, format and price.</p>
            <div className="mt-4">
              <EnquiryForm
                cta="Enquire about a league"
                source="leagues"
                placeholder="e.g. 8 of us, we&rsquo;d want a weeknight, played 5-a-side before…" />
            </div>
          </Glass>
        </div>
      </section>

      <Footer />
    </div>
  );
}
