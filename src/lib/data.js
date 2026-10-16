/* data.js — domain data, slots, contact + shared booking store */

export const ROUTES = ['home', 'browse', 'venue', 'booking', 'leagues', 'getagame', 'parties', 'events', 'coaching', 'nottsolympic', 'performancezone', 'shop', 'contact', 'privacy'];

export const HERO_VIDEO = '/hero.mp4';
export const HERO_POSTER = '/hero-poster.jpg';   // still frame shown while the video loads
export const PITCH_PHOTO = '/pitch.jpg';         // floodlit pitches photo used on Browse pitch cards
export const GETAGAME_VIDEO = '/getagame.mp4';   // background for the Get a Game hero
export const KINGSCLUB_VIDEO = '/kingsclub.mp4'; // background for the Kings Club hero
export const JUNIORS_VIDEO = '/juniors.mp4';     // background for the Juniors (pay & play) hero
export const ACADEMY_VIDEO = '/academy.mp4';     // background for the Academy (coaching & camps) hero

/* Prices here are DISPLAY ONLY. The actual amount charged is whatever Planyo
   calculates at booking time from the venue's pricing manager. If these drift
   apart, customers see one price and are charged another - keep them in step.
   Checked against astro-kings.com (Oct 2026): Classic £60/hr is confirmed.
   Samba and The Big One are NOT published there — confirm them in Planyo's
   pricing manager.

   price:null means the rate is not published — the card shows "Enquire"
   instead of a figure. The Performance Zone is sold on enquiry, not on a
   listed hourly rate. */
export const PITCHES = [
  { id:'classic', name:'Classic 5-a-side', price:60, unit:'/hr', size:'5v5', goals:'12ft × 4ft goals', tag:'Most booked', desc:'Rebound boards · 4G surface', spec:['Rebound boards','12ft × 4ft goals','4G rubber-crumb'] },
  { id:'samba',   name:'Samba 5-a-side',   price:60, unit:'/hr', size:'5v5', goals:'12ft × 6ft goals', tag:'', desc:'Bigger goals · rebound boards', spec:['Rebound boards','12ft × 6ft goals','4G rubber-crumb'] },
  { id:'big',     name:'The Big One',      price:90, unit:'/hr', size:'9v9', goals:'9v9 goals', tag:'9v9', desc:'Convertible · FA configurable', spec:['9v9 goals','Convertible layout','LED floodlights'] },
  { id:'zone',    name:'Performance Zone', price:null, unit:'', size:'1-2-1', goals:'coaching space', tag:'1-2-1 & small groups', desc:'Coaching space · equipment included', spec:['Full coaching set-up','For 1–6 players','Equipment & footballs included'] },
];

/* On-the-hour slots across the opening week. The venue opens 10:00 Mon–Fri and
   09:00 Sat–Sun, and closes 22:00 weekdays / 20:00 weekends, so this single list
   runs 10:00–21:00 — the hours bookable on every day. Real availability is
   always confirmed by Planyo at the booking step. */
export const SLOTS = (() => {
  const out = [];
  for (let h = 10; h < 22; h++) out.push(`${String(h).padStart(2,'0')}:00`);
  return out;
})();

export const TIME_BANDS = {
  morning:   { label:'10–12', from:10, to:12 },
  afternoon: { label:'12–17', from:12, to:17 },
  evening:   { label:'17–22', from:17, to:22 },
};
export const slotsInBand = (band) => {
  const b = TIME_BANDS[band]; if (!b) return SLOTS;
  return SLOTS.filter((s) => { const h = +s.split(':')[0]; return h >= b.from && h < b.to; });
};

export const CONTACT = {
  phone:'0115 888 0442',
  email:'play@astro-kings.com',
  addr:'Wigman Rd, Nottingham NG8 4PB',
  strap:"Nottingham's best 5-a-side football centre",
  maps:'https://maps.google.com/?q=Astro+Kings+Wigman+Rd+Nottingham+NG8+4PB',
  facebook:'https://www.facebook.com/astrokings/?locale=en_GB',
  instagram:'https://www.instagram.com/astrokingsuk/',
};

/* lightweight cross-page handoff (which pitch/slot the user picked) */
export const store = { venue:'classic', day:'', time:'19:00', players:'5v5' };
