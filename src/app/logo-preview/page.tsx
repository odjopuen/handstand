export default function LogoPreview() {
  const charcoal = "#3D3229";
  const violet = "#8B5CF6";
  const offWhite = "#FFFDF8";
  const sand = "#F5ECD7";

  const all = [
    // ─── Round 1 ──────────────────────────────────────────────────────────────
    {
      id: "A", round: "Round 1", name: "The Figure",
      desc: "Stick figure, precise geometry.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="32" cy="10" r="3.5" fill={violet}/><circle cx="68" cy="10" r="3.5" fill={violet}/><line x1="32" y1="13" x2="50" y2="44" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="68" y1="13" x2="50" y2="44" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="44" x2="50" y2="70" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="70" x2="14" y2="86" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="70" x2="86" y2="86" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="14" cy="87" r="3.5" fill={violet}/><circle cx="86" cy="87" r="3.5" fill={violet}/><circle cx="50" cy="94" r="4.5" fill={violet}/></svg>,
    },
    {
      id: "B", round: "Round 1", name: "The Triangle",
      desc: "Feet at apex, hands at base. Pure geometry.",
      svg: <svg viewBox="0 0 100 100" fill="none"><path d="M50 8 L88 84 L12 84 Z" stroke={violet} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none"/><circle cx="50" cy="8" r="4" fill={violet}/><circle cx="12" cy="84" r="4" fill={violet}/><circle cx="88" cy="84" r="4" fill={violet}/><line x1="4" y1="92" x2="96" y2="92" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.3"/></svg>,
    },
    {
      id: "C", round: "Round 1", name: "The Arch",
      desc: "Single smooth arc — the handstand bridge shape.",
      svg: <svg viewBox="0 0 100 100" fill="none"><path d="M12 82 C12 82 18 14 50 10 C82 14 88 82 88 82" stroke={violet} strokeWidth="3.5" strokeLinecap="round" fill="none"/><circle cx="12" cy="82" r="4.5" fill={violet}/><circle cx="88" cy="82" r="4.5" fill={violet}/><line x1="4" y1="90" x2="96" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.3"/></svg>,
    },
    {
      id: "D", round: "Round 1", name: "Circle Mark",
      desc: "Figure inside a perfect circle.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" stroke={violet} strokeWidth="2.5" fill="none"/><circle cx="37" cy="20" r="2.8" fill={violet}/><circle cx="63" cy="20" r="2.8" fill={violet}/><line x1="37" y1="22.5" x2="50" y2="46" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="63" y1="22.5" x2="50" y2="46" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="46" x2="50" y2="66" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="66" x2="22" y2="78" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="66" x2="78" y2="78" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="22" cy="79" r="2.8" fill={violet}/><circle cx="78" cy="79" r="2.8" fill={violet}/><circle cx="50" cy="85" r="3.5" fill={violet}/></svg>,
    },
    {
      id: "E", round: "Round 1", name: "Minimal Line",
      desc: "One vertical, one horizontal, one dot.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="50" y1="12" x2="50" y2="70" stroke={violet} strokeWidth="4" strokeLinecap="round"/><line x1="16" y1="70" x2="84" y2="70" stroke={violet} strokeWidth="4" strokeLinecap="round"/><circle cx="50" cy="7" r="5" fill={violet}/><circle cx="16" cy="70" r="3.5" fill={violet}/><circle cx="84" cy="70" r="3.5" fill={violet}/><line x1="8" y1="84" x2="92" y2="84" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.25"/></svg>,
    },
    {
      id: "F", round: "Round 1", name: "Inverted Crown",
      desc: "Spread legs read as an upside-down crown.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="50" y1="52" x2="18" y2="12" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="52" x2="34" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="52" x2="66" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="52" x2="82" y2="12" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="52" x2="50" y2="72" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="72" x2="16" y2="86" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="72" x2="84" y2="86" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="18" cy="11" r="3" fill={violet}/><circle cx="34" cy="9" r="3" fill={violet}/><circle cx="66" cy="9" r="3" fill={violet}/><circle cx="82" cy="11" r="3" fill={violet}/><circle cx="16" cy="87" r="3" fill={violet}/><circle cx="84" cy="87" r="3" fill={violet}/><circle cx="50" cy="93" r="4" fill={violet}/></svg>,
    },
    // ─── Round 2 ──────────────────────────────────────────────────────────────
    {
      id: "G", round: "Round 2", name: "Side Silhouette",
      desc: "Filled profile view. Reads instantly at any size.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="40" cy="88" r="7" fill={violet}/><rect x="20" y="80" width="44" height="6" rx="3" fill={violet}/><rect x="36" y="42" width="8" height="40" rx="4" fill={violet}/><path d="M40 42 L22 10 Q20 6 24 6 L28 6 Q32 6 34 10 L44 36 Z" fill={violet}/><path d="M40 42 L58 10 Q60 6 56 6 L52 6 Q48 6 46 10 L36 36 Z" fill={violet}/></svg>,
    },
    {
      id: "H", round: "Round 2", name: "The W Mark",
      desc: "W = handstand from above. Built-in double meaning.",
      svg: <svg viewBox="0 0 100 100" fill="none"><path d="M8 20 L26 80 L50 46 L74 80 L92 20" stroke={violet} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/><line x1="4" y1="90" x2="96" y2="90" stroke={violet} strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/></svg>,
    },
    {
      id: "I", round: "Round 2", name: "Two Hands",
      desc: "Just the hands on the ground. Literal Ground Work.",
      svg: <svg viewBox="0 0 100 100" fill="none"><path d="M22 30 C22 30 18 52 16 68 C15 74 18 78 22 78 C26 78 28 74 28 68 L30 42" stroke={violet} strokeWidth="3.5" strokeLinecap="round" fill="none"/><path d="M78 30 C78 30 82 52 84 68 C85 74 82 78 78 78 C74 78 72 74 72 68 L70 42" stroke={violet} strokeWidth="3.5" strokeLinecap="round" fill="none"/><line x1="26" y1="32" x2="50" y2="14" stroke={violet} strokeWidth="3.5" strokeLinecap="round"/><line x1="50" y1="14" x2="74" y2="32" stroke={violet} strokeWidth="3.5" strokeLinecap="round"/><line x1="6" y1="88" x2="94" y2="88" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.25"/><circle cx="22" cy="30" r="3.5" fill={violet}/><circle cx="78" cy="30" r="3.5" fill={violet}/></svg>,
    },
    {
      id: "J", round: "Round 2", name: "Negative Space",
      desc: "Figure cut from a solid block. Bold and reversible.",
      svg: <svg viewBox="0 0 100 100" fill="none"><rect x="4" y="4" width="92" height="92" rx="14" fill={violet}/><circle cx="50" cy="82" r="5" fill={offWhite}/><line x1="50" y1="77" x2="50" y2="58" stroke={offWhite} strokeWidth="3.5" strokeLinecap="round"/><line x1="50" y1="64" x2="22" y2="76" stroke={offWhite} strokeWidth="3.5" strokeLinecap="round"/><line x1="50" y1="64" x2="78" y2="76" stroke={offWhite} strokeWidth="3.5" strokeLinecap="round"/><line x1="50" y1="58" x2="32" y2="22" stroke={offWhite} strokeWidth="3.5" strokeLinecap="round"/><line x1="50" y1="58" x2="68" y2="22" stroke={offWhite} strokeWidth="3.5" strokeLinecap="round"/><circle cx="32" cy="20" r="3.5" fill={offWhite}/><circle cx="68" cy="20" r="3.5" fill={offWhite}/><circle cx="22" cy="77" r="3" fill={offWhite}/><circle cx="78" cy="77" r="3" fill={offWhite}/></svg>,
    },
    {
      id: "K", round: "Round 2", name: "The Root",
      desc: "Branching lines from a trunk — grounded and organic.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="50" y1="10" x2="50" y2="58" stroke={violet} strokeWidth="3.5" strokeLinecap="round"/><path d="M50 20 Q38 32 22 44" stroke={violet} strokeWidth="3" strokeLinecap="round" fill="none"/><path d="M50 20 Q62 32 78 44" stroke={violet} strokeWidth="3" strokeLinecap="round" fill="none"/><path d="M50 50 Q34 62 14 72" stroke={violet} strokeWidth="3.5" strokeLinecap="round" fill="none"/><path d="M50 50 Q66 62 86 72" stroke={violet} strokeWidth="3.5" strokeLinecap="round" fill="none"/><circle cx="50" cy="8" r="3.5" fill={violet}/><circle cx="22" cy="45" r="3" fill={violet}/><circle cx="78" cy="45" r="3" fill={violet}/><circle cx="14" cy="73" r="3.5" fill={violet}/><circle cx="86" cy="73" r="3.5" fill={violet}/><circle cx="50" cy="84" r="5" fill={violet}/></svg>,
    },
    {
      id: "L", round: "Round 2", name: "The Compass",
      desc: "Cross inside a circle — the parent concept.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="44" stroke={violet} strokeWidth="2.5" fill="none"/><line x1="50" y1="8" x2="50" y2="92" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="8" y1="65" x2="92" y2="65" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="88" r="6" fill={violet}/><circle cx="50" cy="10" r="4" fill={violet}/><circle cx="12" cy="65" r="4" fill={violet}/><circle cx="88" cy="65" r="4" fill={violet}/><circle cx="50" cy="50" r="2.5" fill={violet} opacity="0.3"/></svg>,
    },
    {
      id: "M", round: "Round 2", name: "The Spark",
      desc: "Figure at centre with radiating lines.",
      svg: <svg viewBox="0 0 100 100" fill="none">{[0,45,90,135,180,225,270,315].map((a,i)=>{const r=a*Math.PI/180;return<line key={i} x1={50+28*Math.cos(r)} y1={50+28*Math.sin(r)} x2={50+44*Math.cos(r)} y2={50+44*Math.sin(r)} stroke={violet} strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>})}<circle cx="50" cy="64" r="3.5" fill={violet}/><line x1="50" y1="60" x2="50" y2="48" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="53" x2="36" y2="59" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="53" x2="64" y2="59" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="48" x2="40" y2="34" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="48" x2="60" y2="34" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="40" cy="33" r="2.5" fill={violet}/><circle cx="60" cy="33" r="2.5" fill={violet}/><circle cx="36" cy="60" r="2.5" fill={violet}/><circle cx="64" cy="60" r="2.5" fill={violet}/></svg>,
    },
    {
      id: "N", round: "Round 2", name: "Ground Line",
      desc: "Bold horizon — where every handstand begins.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="6" y1="72" x2="94" y2="72" stroke={violet} strokeWidth="4" strokeLinecap="round"/><circle cx="24" cy="72" r="4" fill={violet}/><circle cx="76" cy="72" r="4" fill={violet}/><line x1="24" y1="68" x2="50" y2="54" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="76" y1="68" x2="50" y2="54" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="54" x2="50" y2="34" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="34" x2="34" y2="14" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="34" x2="66" y2="14" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="34" cy="13" r="3.5" fill={violet}/><circle cx="66" cy="13" r="3.5" fill={violet}/><circle cx="50" cy="82" r="4.5" fill={violet}/></svg>,
    },
    // ─── Round 3 — Compass Variations ────────────────────────────────────────
    {
      id: "L1", round: "Compass Variations", name: "Balanced",
      desc: "Clean proportions, heavier dots.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="44" stroke={violet} strokeWidth="3" fill="none"/><line x1="50" y1="8" x2="50" y2="92" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="8" y1="65" x2="92" y2="65" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="88" r="6" fill={violet}/><circle cx="50" cy="10" r="4" fill={violet}/><circle cx="12" cy="65" r="4" fill={violet}/><circle cx="88" cy="65" r="4" fill={violet}/><circle cx="50" cy="50" r="2.5" fill={violet} opacity="0.3"/></svg>,
    },
    {
      id: "L2", round: "Compass Variations", name: "Broken Ring",
      desc: "Ring gaps at contact points — dynamic energy.",
      svg: <svg viewBox="0 0 100 100" fill="none"><path d="M 57 8.5 A 44 44 0 0 1 91.5 43" stroke={violet} strokeWidth="3" strokeLinecap="round" fill="none"/><path d="M 91.5 57 A 44 44 0 0 1 57 91.5" stroke={violet} strokeWidth="3" strokeLinecap="round" fill="none"/><path d="M 43 91.5 A 44 44 0 0 1 8.5 57" stroke={violet} strokeWidth="3" strokeLinecap="round" fill="none"/><path d="M 8.5 43 A 44 44 0 0 1 43 8.5" stroke={violet} strokeWidth="3" strokeLinecap="round" fill="none"/><line x1="50" y1="8" x2="50" y2="92" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="8" y1="65" x2="92" y2="65" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="88" r="6" fill={violet}/><circle cx="50" cy="10" r="4" fill={violet}/><circle cx="12" cy="65" r="4" fill={violet}/><circle cx="88" cy="65" r="4" fill={violet}/></svg>,
    },
    {
      id: "L3", round: "Compass Variations", name: "Filled Badge",
      desc: "Solid violet circle, figure in white.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill={violet}/><line x1="50" y1="10" x2="50" y2="90" stroke={offWhite} strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/><line x1="10" y1="66" x2="90" y2="66" stroke={offWhite} strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/><circle cx="50" cy="85" r="6" fill={offWhite}/><circle cx="50" cy="12" r="4" fill={offWhite}/><circle cx="13" cy="66" r="4" fill={offWhite}/><circle cx="87" cy="66" r="4" fill={offWhite}/><circle cx="50" cy="50" r="2.5" fill={offWhite} opacity="0.4"/></svg>,
    },
    {
      id: "L4", round: "Compass Variations", name: "Squircle",
      desc: "Rounded square compass — previous favicon.",
      svg: <svg viewBox="0 0 100 100" fill="none"><rect x="4" y="4" width="92" height="92" rx="22" fill={violet}/><line x1="50" y1="14" x2="50" y2="86" stroke={offWhite} strokeWidth="2.5" strokeLinecap="round"/><line x1="14" y1="64" x2="86" y2="64" stroke={offWhite} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="81" r="5.5" fill={offWhite}/><circle cx="50" cy="16" r="3.5" fill={offWhite}/><circle cx="17" cy="64" r="3.5" fill={offWhite}/><circle cx="83" cy="64" r="3.5" fill={offWhite}/><circle cx="50" cy="50" r="2.5" fill={offWhite} opacity="0.35"/></svg>,
    },
    {
      id: "L5", round: "Compass Variations", name: "Extended Crosshairs",
      desc: "Lines break past the ring — precision and focus.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="36" stroke={violet} strokeWidth="2.5" fill="none"/><line x1="50" y1="4" x2="50" y2="96" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="4" y1="65" x2="96" y2="65" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="92" r="5.5" fill={violet}/><circle cx="50" cy="6" r="3.5" fill={violet}/><circle cx="7" cy="65" r="3.5" fill={violet}/><circle cx="93" cy="65" r="3.5" fill={violet}/><circle cx="50" cy="50" r="3.5" fill={violet}/></svg>,
    },
    {
      id: "L6", round: "Compass Variations", name: "Big Head",
      desc: "Oversized head dot — geometric but with personality.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="44" stroke={violet} strokeWidth="2.5" fill="none"/><line x1="50" y1="8" x2="50" y2="88" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="8" y1="64" x2="92" y2="64" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="84" r="9" fill={violet}/><circle cx="50" cy="10" r="3.5" fill={violet}/><circle cx="11" cy="64" r="3.5" fill={violet}/><circle cx="89" cy="64" r="3.5" fill={violet}/><circle cx="50" cy="50" r="2" fill={violet} opacity="0.35"/></svg>,
    },
    {
      id: "L7", round: "Compass Variations", name: "Tilted",
      desc: "10° rotation — same mark, completely different energy.",
      svg: <svg viewBox="0 0 100 100" fill="none"><g transform="rotate(10, 50, 50)"><circle cx="50" cy="50" r="42" stroke={violet} strokeWidth="2.5" fill="none"/><line x1="50" y1="10" x2="50" y2="90" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="10" y1="65" x2="90" y2="65" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="86" r="6.5" fill={violet}/><circle cx="50" cy="12" r="3.5" fill={violet}/><circle cx="13" cy="65" r="3.5" fill={violet}/><circle cx="87" cy="65" r="3.5" fill={violet}/><circle cx="50" cy="50" r="2.5" fill={violet} opacity="0.3"/></g></svg>,
    },
    {
      id: "L8", round: "Compass Variations", name: "Double Ring",
      desc: "Inner thin ring + outer thick ring. Medal / emblem feel.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" stroke={violet} strokeWidth="3.5" fill="none"/><circle cx="50" cy="50" r="36" stroke={violet} strokeWidth="1.2" fill="none" opacity="0.45"/><line x1="50" y1="6" x2="50" y2="94" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="6" y1="66" x2="94" y2="66" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="89" r="6" fill={violet}/><circle cx="50" cy="8" r="4" fill={violet}/><circle cx="9" cy="66" r="4" fill={violet}/><circle cx="91" cy="66" r="4" fill={violet}/><circle cx="50" cy="50" r="3" fill={violet} opacity="0.4"/></svg>,
    },
    // ─── Round 4 — Stick Figures ──────────────────────────────────────────────
    {
      id: "F1", round: "Stick Figures", name: "Straddle",
      desc: "Front view, wide V-legs. The form you're working toward.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="8" y1="90" x2="92" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.2"/><line x1="28" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="72" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="60" x2="50" y2="70" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="76" r="5.5" fill={violet}/><line x1="50" y1="60" x2="50" y2="28" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="28" x2="14" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="28" x2="86" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="28" cy="84" r="3.5" fill={violet}/><circle cx="72" cy="84" r="3.5" fill={violet}/><circle cx="12" cy="8" r="4" fill={violet}/><circle cx="88" cy="8" r="4" fill={violet}/></svg>,
    },
    {
      id: "F2", round: "Stick Figures", name: "Straight",
      desc: "Legs together, vertical. Maximum height, clean form.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="8" y1="90" x2="92" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.2"/><line x1="30" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="70" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="60" x2="50" y2="70" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="76" r="5.5" fill={violet}/><line x1="50" y1="60" x2="50" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="30" cy="84" r="3.5" fill={violet}/><circle cx="70" cy="84" r="3.5" fill={violet}/><circle cx="50" cy="8" r="4.5" fill={violet}/></svg>,
    },
    {
      id: "F3", round: "Stick Figures", name: "Tuck",
      desc: "Knees pulled toward chest. The training-wheel position.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="8" y1="90" x2="92" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.2"/><line x1="28" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="72" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="60" x2="50" y2="70" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="76" r="5.5" fill={violet}/><line x1="50" y1="60" x2="50" y2="30" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="30" x2="34" y2="44" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="34" y1="44" x2="42" y2="28" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="30" x2="66" y2="44" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="66" y1="44" x2="58" y2="28" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="28" cy="84" r="3.5" fill={violet}/><circle cx="72" cy="84" r="3.5" fill={violet}/><circle cx="40" cy="26" r="3.5" fill={violet}/><circle cx="60" cy="26" r="3.5" fill={violet}/></svg>,
    },
    {
      id: "F4", round: "Stick Figures", name: "Pike",
      desc: "90° at the hips, legs out horizontal. Strength and control.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="8" y1="90" x2="92" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.2"/><line x1="28" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="72" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="60" x2="50" y2="70" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="76" r="5.5" fill={violet}/><line x1="50" y1="60" x2="50" y2="30" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="30" x2="8" y2="30" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="30" x2="92" y2="30" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="28" cy="84" r="3.5" fill={violet}/><circle cx="72" cy="84" r="3.5" fill={violet}/><circle cx="6" cy="30" r="4" fill={violet}/><circle cx="94" cy="30" r="4" fill={violet}/></svg>,
    },
    {
      id: "F5", round: "Stick Figures", name: "Wide Base",
      desc: "Hands far apart. Beginner stance — more ground, more confidence.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="4" y1="90" x2="96" y2="90" stroke={violet} strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/><line x1="10" y1="84" x2="50" y2="56" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="90" y1="84" x2="50" y2="56" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="56" x2="50" y2="66" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="72" r="5.5" fill={violet}/><line x1="50" y1="56" x2="50" y2="24" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="24" x2="24" y2="8" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="24" x2="76" y2="8" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="10" cy="84" r="4" fill={violet}/><circle cx="90" cy="84" r="4" fill={violet}/><circle cx="22" cy="6" r="4" fill={violet}/><circle cx="78" cy="6" r="4" fill={violet}/></svg>,
    },
    {
      id: "F6", round: "Stick Figures", name: "One Arm",
      desc: "Single point of contact, free arm out for balance. Pure skill.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="8" y1="90" x2="92" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.2"/><circle cx="58" cy="84" r="4" fill={violet}/><line x1="58" y1="84" x2="50" y2="62" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="72" x2="22" y2="60" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="20" cy="59" r="3.5" fill={violet}/><line x1="50" y1="62" x2="50" y2="72" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="78" r="5.5" fill={violet}/><line x1="50" y1="62" x2="48" y2="26" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="48" y1="26" x2="30" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="48" y1="26" x2="66" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><circle cx="28" cy="8" r="3.5" fill={violet}/><circle cx="68" cy="8" r="3.5" fill={violet}/></svg>,
    },
    {
      id: "F7", round: "Stick Figures", name: "Profile",
      desc: "Pure side view. The wall shot — body as a straight line.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="8" y1="90" x2="92" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.2"/><circle cx="46" cy="84" r="4" fill={violet}/><circle cx="56" cy="84" r="2.5" fill={violet} opacity="0.3"/><line x1="46" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="56" y1="84" x2="50" y2="60" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.35"/><circle cx="44" cy="74" r="5.5" fill={violet}/><line x1="50" y1="60" x2="50" y2="26" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="26" x2="48" y2="10" stroke={violet} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="26" x2="52" y2="10" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.35"/><circle cx="47" cy="8" r="4" fill={violet}/><circle cx="53" cy="8" r="2.5" fill={violet} opacity="0.35"/></svg>,
    },
    {
      id: "F8", round: "Stick Figures", name: "In the Ring",
      desc: "Figure contained in a circle. Stamp, seal, emblem.",
      svg: <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="44" stroke={violet} strokeWidth="2.5" fill="none"/><line x1="30" y1="78" x2="50" y2="58" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="70" y1="78" x2="50" y2="58" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="58" x2="50" y2="66" stroke={violet} strokeWidth="2" strokeLinecap="round"/><circle cx="50" cy="72" r="4.5" fill={violet}/><line x1="50" y1="58" x2="50" y2="28" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="28" x2="24" y2="14" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="50" y1="28" x2="76" y2="14" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="30" cy="78" r="3" fill={violet}/><circle cx="70" cy="78" r="3" fill={violet}/><circle cx="22" cy="12" r="3.5" fill={violet}/><circle cx="78" cy="12" r="3.5" fill={violet}/></svg>,
    },
    {
      id: "F9", round: "Stick Figures", name: "Badge ★ Current",
      desc: "Squircle format, figure in white — currently live as the favicon.",
      svg: <svg viewBox="0 0 100 100" fill="none"><rect x="4" y="4" width="92" height="92" rx="22" fill={violet}/><line x1="28" y1="82" x2="50" y2="60" stroke={offWhite} strokeWidth="3" strokeLinecap="round"/><line x1="72" y1="82" x2="50" y2="60" stroke={offWhite} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="60" x2="50" y2="70" stroke={offWhite} strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="76" r="5.5" fill={offWhite}/><line x1="50" y1="60" x2="50" y2="26" stroke={offWhite} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="26" x2="20" y2="10" stroke={offWhite} strokeWidth="3" strokeLinecap="round"/><line x1="50" y1="26" x2="80" y2="10" stroke={offWhite} strokeWidth="3" strokeLinecap="round"/><circle cx="28" cy="82" r="3.5" fill={offWhite}/><circle cx="72" cy="82" r="3.5" fill={offWhite}/><circle cx="18" cy="8" r="4" fill={offWhite}/><circle cx="82" cy="8" r="4" fill={offWhite}/></svg>,
    },
    {
      id: "F10", round: "Stick Figures", name: "Duo",
      desc: "Handstander + coach spotting. The Ground Work experience.",
      svg: <svg viewBox="0 0 100 100" fill="none"><line x1="4" y1="90" x2="96" y2="90" stroke={violet} strokeWidth="2" strokeLinecap="round" opacity="0.25"/><line x1="14" y1="86" x2="30" y2="66" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="44" y1="86" x2="30" y2="66" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="30" cy="74" r="4.5" fill={violet}/><line x1="30" y1="66" x2="30" y2="36" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="30" y1="36" x2="14" y2="18" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="30" y1="36" x2="46" y2="18" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="86" r="3" fill={violet}/><circle cx="44" cy="86" r="3" fill={violet}/><circle cx="12" cy="16" r="3.5" fill={violet}/><circle cx="48" cy="16" r="3.5" fill={violet}/><circle cx="74" cy="20" r="5.5" stroke={violet} strokeWidth="2.5" fill="none"/><line x1="74" y1="26" x2="74" y2="62" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="74" y1="40" x2="48" y2="36" stroke={violet} strokeWidth="2" strokeLinecap="round"/><line x1="74" y1="40" x2="84" y2="52" stroke={violet} strokeWidth="2" strokeLinecap="round"/><line x1="74" y1="62" x2="64" y2="90" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><line x1="74" y1="62" x2="82" y2="90" stroke={violet} strokeWidth="2.5" strokeLinecap="round"/><circle cx="64" cy="90" r="2.5" fill={violet}/><circle cx="82" cy="90" r="2.5" fill={violet}/></svg>,
    },
  ];

  const rounds = ["Round 1", "Round 2", "Compass Variations", "Stick Figures"];

  return (
    <div style={{ background: "#0e0c0a", minHeight: "100vh", padding: "60px 40px", fontFamily: "sans-serif" }}>
      <p style={{ color: violet, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
        Ground Work
      </p>
      <h1 style={{ color: offWhite, fontSize: 40, fontWeight: 900, marginBottom: 4 }}>All logo concepts</h1>
      <p style={{ color: "rgba(255,253,248,0.35)", fontSize: 14, marginBottom: 60, maxWidth: 480 }}>
        {all.length} concepts across 4 rounds. L4 (Squircle ★) is currently live.
      </p>

      {rounds.map(round => (
        <div key={round} style={{ marginBottom: 72 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 16, marginBottom: 28,
          }}>
            <p style={{ color: violet, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {round}
            </p>
            <div style={{ flex: 1, height: 1, background: "rgba(255,253,248,0.06)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {all.filter(l => l.round === round).map(logo => (
              <div
                key={logo.id}
                style={{
                  background: logo.id === "F9" ? "rgba(139,92,246,0.08)" : "#1a1612",
                  border: logo.id === "F9" ? "1px solid rgba(139,92,246,0.4)" : "1px solid rgba(255,253,248,0.05)",
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {/* Label */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                    <span style={{ color: violet, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                      {logo.id}
                    </span>
                    <span style={{ color: "rgba(255,253,248,0.25)", fontSize: 10 }}>—</span>
                    <span style={{ color: offWhite, fontSize: 12, fontWeight: 600 }}>{logo.name}</span>
                  </div>
                  <p style={{ color: "rgba(255,253,248,0.35)", fontSize: 12, lineHeight: 1.5 }}>{logo.desc}</p>
                </div>

                {/* Sizes on dark */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 28, height: 28, flexShrink: 0 }}>{logo.svg}</div>
                  <div style={{ width: 64, height: 64, flexShrink: 0 }}>{logo.svg}</div>
                  <div style={{ width: 120, height: 120, flexShrink: 0 }}>{logo.svg}</div>
                </div>

                {/* Header mockup on light */}
                <div style={{
                  background: offWhite,
                  borderRadius: 8,
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}>
                  <div style={{ width: 22, height: 22, flexShrink: 0 }}>{logo.svg}</div>
                  <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: 1, textTransform: "uppercase", color: charcoal, whiteSpace: "nowrap" }}>
                    Ground <span style={{ color: violet }}>Work</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <p style={{ color: "rgba(255,253,248,0.12)", fontSize: 12, textAlign: "center", marginTop: 40 }}>
        /logo-preview — delete when done
      </p>
    </div>
  );
}
