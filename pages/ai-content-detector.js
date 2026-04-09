import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

/* ── Analysis Logic ──────────────────────────────────────────── */

function getSentences(text) {
  return text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0);
}

function getWords(text) {
  return text.toLowerCase().match(/\b[a-z']+\b/g) || [];
}

function scoreSentenceLengthUniformity(text) {
  const sentences = getSentences(text);
  if (sentences.length < 3) return { score: 0, detail: 'Not enough sentences to analyze' };
  const lengths = sentences.map(s => s.split(/\s+/).length);
  const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  if (avg === 0) return { score: 0, detail: 'Not enough text' };
  const variance = lengths.reduce((sum, l) => sum + Math.pow(l - avg, 2), 0) / lengths.length;
  const cv = Math.sqrt(variance) / avg; // coefficient of variation
  // Low CV = very uniform = more AI-like
  // Human writing typically has CV > 0.5, AI tends to be < 0.35
  let score;
  if (cv < 0.2) score = 95;
  else if (cv < 0.3) score = 80;
  else if (cv < 0.4) score = 60;
  else if (cv < 0.5) score = 40;
  else if (cv < 0.65) score = 25;
  else score = 10;
  return {
    score,
    detail: cv < 0.35
      ? `Sentences are very uniform in length (CV: ${cv.toFixed(2)}). AI tends to produce evenly-sized sentences.`
      : cv < 0.5
      ? `Moderate sentence length variation (CV: ${cv.toFixed(2)}). Somewhat typical of AI.`
      : `Good sentence length variation (CV: ${cv.toFixed(2)}). This looks more human.`,
  };
}

function scoreTransitionWords(text) {
  const lower = text.toLowerCase();
  const words = getWords(text);
  const totalWords = words.length;
  if (totalWords < 10) return { score: 0, detail: 'Not enough text' };

  const transitions = [
    'moreover', 'furthermore', 'additionally', 'consequently', 'nevertheless',
    'in conclusion', 'in summary', 'in addition', 'as a result', 'on the other hand',
    'in particular', 'for instance', 'specifically', 'notably', 'significantly',
    'it is worth noting', 'it should be noted', 'it is important to',
    'conversely', 'subsequently', 'accordingly', 'hence', 'thus', 'therefore',
    'in contrast', 'in essence', 'overall', 'ultimately', 'indeed',
  ];

  let count = 0;
  transitions.forEach(t => {
    const regex = new RegExp('\\b' + t.replace(/\s+/g, '\\s+') + '\\b', 'gi');
    const matches = lower.match(regex);
    if (matches) count += matches.length;
  });

  const density = (count / totalWords) * 100;
  let score;
  if (density > 3) score = 95;
  else if (density > 2) score = 80;
  else if (density > 1.2) score = 60;
  else if (density > 0.6) score = 40;
  else if (density > 0.2) score = 20;
  else score = 5;

  return {
    score,
    detail: count > 0
      ? `Found ${count} formal transition${count !== 1 ? 's' : ''} (${density.toFixed(1)}% density). ${density > 1.5 ? 'AI heavily uses connective phrases like "Moreover" and "Furthermore".' : 'Moderate use of transitions.'}`
      : 'No formal transitions detected. Human writers use fewer academic connectors.',
  };
}

function scorePassiveVoice(text) {
  const sentences = getSentences(text);
  if (sentences.length < 2) return { score: 0, detail: 'Not enough text' };

  // Simple passive voice detection: forms of "to be" + past participle pattern
  const passivePattern = /\b(is|are|was|were|be|been|being)\s+(\w+ed|written|shown|known|seen|taken|given|made|found|done|thought|built|kept|held|sent|brought|set|left|put|run|said|told|paid|read|grown|drawn|chosen|fallen|spoken|broken|driven|forgotten|hidden|ridden|risen|stolen|worn|sworn|torn|begun|drunk|sung|swum)\b/gi;
  let passiveCount = 0;
  sentences.forEach(s => {
    const matches = s.match(passivePattern);
    if (matches) passiveCount += matches.length;
  });

  const ratio = passiveCount / sentences.length;
  let score;
  if (ratio > 0.5) score = 90;
  else if (ratio > 0.35) score = 70;
  else if (ratio > 0.2) score = 50;
  else if (ratio > 0.1) score = 30;
  else score = 10;

  return {
    score,
    detail: passiveCount > 0
      ? `Detected ~${passiveCount} passive construction${passiveCount !== 1 ? 's' : ''} in ${sentences.length} sentences (${(ratio * 100).toFixed(0)}%). ${ratio > 0.3 ? 'AI tends to overuse passive voice.' : 'Moderate passive voice usage.'}`
      : 'Minimal passive voice detected. Active voice is more common in natural human writing.',
  };
}

function scoreVocabDiversity(text) {
  const words = getWords(text);
  if (words.length < 20) return { score: 0, detail: 'Not enough text' };

  const unique = new Set(words);
  const ttr = unique.size / words.length; // type-token ratio

  // AI text tends to have moderate TTR (0.4-0.55) due to repetitive phrasing
  // Very high TTR (>0.7) = human, very low (<0.35) = repetitive
  // Sweet spot for "AI-like" is 0.4-0.55
  let score;
  if (ttr < 0.35) score = 50; // too repetitive, could be either
  else if (ttr < 0.45) score = 70; // AI-like range
  else if (ttr < 0.55) score = 55; // borderline
  else if (ttr < 0.65) score = 35;
  else score = 15; // very diverse, likely human

  return {
    score,
    detail: `Vocabulary diversity: ${(ttr * 100).toFixed(0)}% unique words (${unique.size}/${words.length}). ${ttr < 0.5 ? 'Lower diversity is common in AI-generated text which reuses similar phrases.' : 'Good vocabulary diversity suggests more human-like writing.'}`,
  };
}

function scoreHedgingLanguage(text) {
  const lower = text.toLowerCase();
  const words = getWords(text);
  if (words.length < 10) return { score: 0, detail: 'Not enough text' };

  const hedges = [
    "it's important to note", "it is important to note",
    "it's worth mentioning", "it is worth mentioning",
    "it's worth noting", "it is worth noting",
    "it's essential to", "it is essential to",
    "it should be noted", "it must be emphasized",
    "one might argue", "it could be argued",
    "this is particularly", "this is especially",
    "plays a crucial role", "plays an important role",
    "serves as a", "functions as a",
    "in today's world", "in the modern era", "in today's digital",
    "it goes without saying", "needless to say",
    "at the end of the day", "when it comes to",
    "the fact that", "due to the fact",
    "in order to", "with that being said",
    "that said", "having said that",
    "it can be seen", "it is clear that",
    "delve into", "delve deeper",
    "navigate the", "leverage the",
    "landscape", "tapestry", "multifaceted",
    "holistic", "synergy", "paradigm",
  ];

  let count = 0;
  const found = [];
  hedges.forEach(h => {
    if (lower.includes(h)) {
      count++;
      found.push(h);
    }
  });

  let score;
  if (count >= 5) score = 95;
  else if (count >= 3) score = 80;
  else if (count >= 2) score = 60;
  else if (count >= 1) score = 40;
  else score = 5;

  return {
    score,
    detail: count > 0
      ? `Found ${count} hedging/filler phrase${count !== 1 ? 's' : ''}: "${found.slice(0, 3).join('", "')}". ${count >= 3 ? 'AI frequently uses these padding phrases.' : 'Some AI-typical phrasing detected.'}`
      : 'No common AI hedging phrases found. Human writers rarely use phrases like "It\'s important to note".',
  };
}

function scoreListPatterns(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length < 3) return { score: 0, detail: 'Not enough text' };

  // Detect numbered lists, bullet points, consistent heading patterns
  let listLines = 0;
  let colonHeaders = 0;
  lines.forEach(line => {
    if (/^\d+[.)]\s/.test(line)) listLines++;
    if (/^[-*]\s/.test(line)) listLines++;
    if (/^[A-Z][^.!?]*:\s/.test(line) && line.length < 80) colonHeaders++;
  });

  const listRatio = (listLines + colonHeaders) / lines.length;
  let score;
  if (listRatio > 0.5) score = 85;
  else if (listRatio > 0.3) score = 65;
  else if (listRatio > 0.15) score = 45;
  else if (listRatio > 0.05) score = 25;
  else score = 10;

  return {
    score,
    detail: listLines + colonHeaders > 0
      ? `Found ${listLines} list item${listLines !== 1 ? 's' : ''} and ${colonHeaders} header-like pattern${colonHeaders !== 1 ? 's' : ''}. ${listRatio > 0.3 ? 'AI loves structured lists even when not asked.' : 'Some structured formatting detected.'}`
      : 'No list or heavy formatting patterns. Unstructured prose is more human-like.',
  };
}

function scoreRepetitivePatterns(text) {
  const sentences = getSentences(text);
  if (sentences.length < 4) return { score: 0, detail: 'Not enough text' };

  // Check for sentences starting the same way
  const starters = sentences.map(s => {
    const words = s.split(/\s+/).slice(0, 3).join(' ').toLowerCase();
    return words;
  });

  const starterCounts = {};
  starters.forEach(s => { starterCounts[s] = (starterCounts[s] || 0) + 1; });

  let repeatedStarters = 0;
  Object.values(starterCounts).forEach(c => { if (c > 1) repeatedStarters += c; });

  const repeatRatio = repeatedStarters / sentences.length;

  // Check for repeated bigrams
  const words = getWords(text);
  const bigrams = [];
  for (let i = 0; i < words.length - 1; i++) {
    bigrams.push(words[i] + ' ' + words[i + 1]);
  }
  const bigramCounts = {};
  bigrams.forEach(b => { bigramCounts[b] = (bigramCounts[b] || 0) + 1; });
  const overusedBigrams = Object.entries(bigramCounts).filter(([, c]) => c >= 3).length;

  let score;
  const combined = repeatRatio * 50 + (overusedBigrams > 5 ? 50 : overusedBigrams * 10);
  if (combined > 60) score = 90;
  else if (combined > 40) score = 70;
  else if (combined > 25) score = 50;
  else if (combined > 10) score = 30;
  else score = 10;

  return {
    score,
    detail: `${repeatedStarters} sentences share opening phrases, ${overusedBigrams} overused word pair${overusedBigrams !== 1 ? 's' : ''}. ${combined > 30 ? 'AI often repeats sentence structures and phrase patterns.' : 'Low repetition suggests more natural writing.'}`,
  };
}

function scoreEmojisAndColloquial(text) {
  const words = getWords(text);
  if (words.length < 10) return { score: 0, detail: 'Not enough text' };

  // Check for emoji
  const emojiPattern = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
  const emojis = text.match(emojiPattern) || [];

  // Colloquial markers
  const lower = text.toLowerCase();
  const colloquial = [
    'lol', 'lmao', 'haha', 'tbh', 'imo', 'imho', 'ngl', 'idk', 'btw',
    'gonna', 'wanna', 'gotta', 'kinda', 'sorta', 'yeah', 'nope', 'yep',
    'omg', 'wtf', 'bruh', 'dude', 'literally', 'basically', 'honestly',
    'like,', 'you know', 'i mean', 'right?', 'pretty much', 'super ',
  ];
  let colloquialCount = 0;
  colloquial.forEach(c => { if (lower.includes(c)) colloquialCount++; });

  // Contractions
  const contractions = (text.match(/\b\w+'(t|re|ve|ll|d|s|m)\b/g) || []).length;
  const contractionRatio = contractions / words.length;

  const humanSignals = emojis.length + colloquialCount + (contractionRatio > 0.03 ? 2 : 0);

  let score;
  if (humanSignals === 0) score = 75;
  else if (humanSignals <= 1) score = 55;
  else if (humanSignals <= 3) score = 35;
  else score = 10;

  return {
    score,
    detail: emojis.length === 0 && colloquialCount === 0 && contractionRatio < 0.02
      ? 'No emojis, slang, or colloquialisms. AI-generated text is typically "clean" and formal.'
      : `Found ${emojis.length} emoji${emojis.length !== 1 ? 's' : ''}, ${colloquialCount} informal expression${colloquialCount !== 1 ? 's' : ''}, ${contractions} contraction${contractions !== 1 ? 's' : ''}. Informal markers suggest human authorship.`,
  };
}

function analyzeText(text) {
  if (!text || text.trim().length < 50) return null;

  const signals = [
    { key: 'sentenceUniformity', label: 'Sentence Uniformity', icon: '📏', ...scoreSentenceLengthUniformity(text), weight: 15 },
    { key: 'transitions', label: 'Transition Words', icon: '🔗', ...scoreTransitionWords(text), weight: 15 },
    { key: 'passiveVoice', label: 'Passive Voice', icon: '🔄', ...scorePassiveVoice(text), weight: 12 },
    { key: 'vocabDiversity', label: 'Vocabulary Diversity', icon: '📚', ...scoreVocabDiversity(text), weight: 12 },
    { key: 'hedging', label: 'Hedging / Filler Language', icon: '🌫', ...scoreHedgingLanguage(text), weight: 18 },
    { key: 'listPatterns', label: 'List & Structure Patterns', icon: '📋', ...scoreListPatterns(text), weight: 10 },
    { key: 'repetition', label: 'Repetitive Patterns', icon: '🔁', ...scoreRepetitivePatterns(text), weight: 10 },
    { key: 'colloquial', label: 'Informal / Human Markers', icon: '💬', ...scoreEmojisAndColloquial(text), weight: 8 },
  ];

  // Weighted average
  const totalWeight = signals.reduce((sum, s) => sum + s.weight, 0);
  const weightedSum = signals.reduce((sum, s) => sum + s.score * s.weight, 0);
  const overallScore = Math.round(weightedSum / totalWeight);

  return { overallScore, signals };
}

function getVerdict(score) {
  if (score >= 85) return { label: 'Very Likely AI', color: '#DC2626' };
  if (score >= 70) return { label: 'Probably AI', color: '#EA580C' };
  if (score >= 50) return { label: 'Mixed Signals', color: '#D97706' };
  if (score >= 30) return { label: 'Probably Human', color: '#059669' };
  return { label: 'Very Likely Human', color: '#059669' };
}

function getHumanizeTips(signals) {
  const tips = [];

  const s = (key) => signals.find(sig => sig.key === key);

  if (s('sentenceUniformity').score >= 50) {
    tips.push('Vary your sentence lengths dramatically. Mix short punchy sentences with longer flowing ones. Fragment sometimes.');
  }
  if (s('transitions').score >= 40) {
    tips.push('Remove formal transitions like "Moreover" and "Furthermore." Just start the next thought. Real people don\'t talk in academic connectors.');
  }
  if (s('passiveVoice').score >= 40) {
    tips.push('Rewrite passive constructions as active voice. Instead of "The report was generated," write "I generated the report."');
  }
  if (s('hedging').score >= 40) {
    tips.push('Cut filler phrases like "It\'s important to note" and "In today\'s world." Be direct. Say the thing.');
  }
  if (s('listPatterns').score >= 40) {
    tips.push('Break up lists into paragraphs. Don\'t number everything. Weave points into natural prose instead of bullet points.');
  }
  if (s('repetition').score >= 40) {
    tips.push('Rephrase repeated sentence starters. If three sentences begin with "This," rewrite two of them with different openings.');
  }
  if (s('colloquial').score >= 50) {
    tips.push('Add personal voice. Use contractions (don\'t, can\'t, I\'ve). Throw in an opinion or anecdote. Sound like a person, not a textbook.');
  }
  if (s('vocabDiversity').score >= 50) {
    tips.push('Use more varied vocabulary. Replace repeated words with synonyms or restructure sentences to avoid echoing the same terms.');
  }

  if (tips.length === 0) {
    tips.push('Your text already reads quite naturally. Keep using personal voice and varied sentence structures.');
  }

  return tips;
}

/* ── Gauge Component ─────────────────────────────────────────── */

function ScoreGauge({ score, size = 220 }) {
  const [animated, setAnimated] = useState(0);
  const verdict = getVerdict(animated);

  useEffect(() => {
    setAnimated(0);
    let current = 0;
    const step = score / 45;
    const interval = setInterval(() => {
      current += step;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      setAnimated(Math.round(current));
    }, 16);
    return () => clearInterval(interval);
  }, [score]);

  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  // Use 75% of circle (270 degrees) for the arc
  const arcLength = circumference * 0.75;
  const offset = arcLength - (animated / 100) * arcLength;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(135deg)' }}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#E5E7EB" strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeLinecap="round"
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={verdict.color} strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.05s ease, stroke 0.3s ease' }}
        />
      </svg>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        paddingTop: 10,
      }}>
        <span style={{ fontSize: size * 0.22, fontWeight: 900, color: verdict.color, lineHeight: 1 }}>
          {animated}
        </span>
        <span style={{ fontSize: size * 0.065, color: '#6B7280', fontWeight: 600, marginTop: 4 }}>
          out of 100
        </span>
        <span style={{ fontSize: size * 0.075, fontWeight: 800, color: verdict.color, marginTop: 6 }}>
          {verdict.label}
        </span>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', padding: '0 20px',
        marginTop: -16, fontSize: 11, color: '#9CA3AF', fontWeight: 600,
      }}>
        <span>Human</span>
        <span>AI</span>
      </div>
    </div>
  );
}

/* ── Signal Bar ──────────────────────────────────────────────── */

function SignalBar({ label, score, icon, detail }) {
  const color = score >= 70 ? '#DC2626' : score >= 50 ? '#D97706' : '#059669';
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>
          {icon} {label}
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color, padding: '2px 10px', background: score >= 70 ? '#FEF2F2' : score >= 50 ? '#FFFBEB' : '#F0FDF4', borderRadius: 100 }}>
          {score >= 70 ? 'AI-like' : score >= 50 ? 'Mixed' : 'Human-like'}
        </span>
      </div>
      <div style={{ height: 8, background: '#E5E7EB', borderRadius: 100, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${score}%`, borderRadius: 100,
          background: color,
          transition: 'width 0.6s ease',
        }} />
      </div>
      <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.5, margin: '6px 0 0' }}>{detail}</p>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────── */

export default function AIContentDetector() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [analysisCount, setAnalysisCount] = useState(4200);
  const resultRef = useRef(null);

  useEffect(() => {
    try {
      const stored = parseInt(localStorage.getItem('midas_detector_count') || '0', 10);
      setAnalysisCount(4200 + stored);
    } catch (e) {}
  }, []);

  const charCount = text.trim().length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleAnalyze = () => {
    const analysis = analyzeText(text);
    if (!analysis) return;
    setResult(analysis);
    try {
      const prev = parseInt(localStorage.getItem('midas_detector_count') || '0', 10);
      const next = prev + 1;
      localStorage.setItem('midas_detector_count', String(next));
      setAnalysisCount(4200 + next);
    } catch (e) {}
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setText('');
    setResult(null);
  };

  const tips = result ? getHumanizeTips(result.signals) : [];
  const verdict = result ? getVerdict(result.overallScore) : null;

  const title = 'Free AI Content Detector — Is Your Text AI Generated? | Midas Tools';
  const description = 'Detect AI-generated text instantly with our free AI content detector. Analyzes 8 linguistic signals to determine if text was written by ChatGPT, Claude, or Gemini. No signup required.';
  const url = 'https://www.midastools.co/ai-content-detector';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="ai content detector, ai text detector, is my text ai generated, detect chatgpt text, ai writing detector, ai checker, gpt detector, ai detection tool, free ai detector 2026" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'AI Content Detector',
          description: description,
          url: url,
          applicationCategory: 'Utility',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How does the AI Content Detector work?', acceptedAnswer: { '@type': 'Answer', text: 'The detector analyzes 8 linguistic signals including sentence length uniformity, transition word density, passive voice usage, vocabulary diversity, hedging language, structural patterns, repetitive phrases, and informal markers. AI-generated text tends to score high on uniformity and formal phrasing while lacking personal voice and colloquialisms.' }},
            { '@type': 'Question', name: 'Is the AI Content Detector free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100% free with no signup required. Analyze unlimited texts. Everything runs in your browser — we never store or read your content.' }},
            { '@type': 'Question', name: 'Can it detect ChatGPT, Claude, and Gemini text?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The detector identifies common patterns shared across all major AI models including ChatGPT, Claude, Gemini, and others. AI writing shares similar linguistic fingerprints regardless of the model used.' }},
            { '@type': 'Question', name: 'How accurate is AI content detection?', acceptedAnswer: { '@type': 'Answer', text: 'No AI detector is 100% accurate. Our tool uses heuristic analysis of 8 linguistic signals for a balanced assessment. Heavily edited AI text or AI text written with specific prompts may score lower. Use results as a guide, not absolute proof.' }},
            { '@type': 'Question', name: 'How can I make AI text sound more human?', acceptedAnswer: { '@type': 'Answer', text: 'Key tips: vary sentence lengths, remove formal transitions like "Moreover" and "Furthermore", use active voice, add personal anecdotes and opinions, use contractions, avoid filler phrases like "It is important to note", and break up list-heavy formatting into natural paragraphs.' }},
          ],
        })}} />
      </Head>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 80px 24px 48px;
          max-width: 800px;
          margin: 0 auto;
        }
        .badge {
          display: inline-block;
          background: #EEF2FF;
          color: #3B5FFF;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .hero h1 {
          font-size: 48px;
          font-weight: 800;
          color: #111827;
          line-height: 1.1;
          margin: 0 0 16px;
        }
        .hero p {
          font-size: 20px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }
        .hero .highlight {
          color: #3B5FFF;
          font-weight: 600;
        }
        .counter {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 14px;
          color: #9CA3AF;
          font-weight: 500;
        }
        .counter strong {
          color: #374151;
          font-weight: 700;
        }

        .detector {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 48px;
        }
        .detector-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 32px;
        }
        .detector-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .detector-textarea {
          width: 100%;
          min-height: 200px;
          padding: 16px;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          color: #111827;
          line-height: 1.6;
          resize: vertical;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .detector-textarea:focus {
          outline: none;
          border-color: #3B5FFF;
        }
        .detector-textarea::placeholder {
          color: #9CA3AF;
        }
        .meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
        }
        .char-count {
          font-size: 13px;
          color: #9CA3AF;
        }
        .char-warn {
          color: #D97706;
        }
        .btn-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .btn-analyze {
          flex: 1;
          padding: 16px 24px;
          background: #3B5FFF;
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          letter-spacing: -0.3px;
        }
        .btn-analyze:hover:not(:disabled) {
          background: #2D4ADB;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(59, 95, 255, 0.3);
        }
        .btn-analyze:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .btn-reset {
          padding: 16px 24px;
          background: #F3F4F6;
          color: #374151;
          border: none;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-reset:hover {
          background: #E5E7EB;
        }

        .results {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 48px;
        }
        .results-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 40px 32px;
        }
        .score-header {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 36px;
        }
        .gauge-wrap {
          flex-shrink: 0;
        }
        .score-info h2 {
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 8px;
        }
        .score-summary {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }

        .breakdown-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 20px;
          padding-top: 24px;
          border-top: 2px solid #E5E7EB;
        }

        .tips-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 2px solid #E5E7EB;
        }
        .tips-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 16px;
        }
        .tip-item {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 10px;
          padding: 14px 18px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #374151;
          line-height: 1.6;
          display: flex;
          gap: 10px;
        }
        .tip-bullet {
          color: #059669;
          font-weight: 700;
          flex-shrink: 0;
        }

        .upsell {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        .upsell-card {
          background: #111827;
          border-radius: 20px;
          padding: 48px 40px;
          text-align: center;
          color: white;
        }
        .upsell-badge {
          display: inline-block;
          background: rgba(59, 95, 255, 0.2);
          color: #93A8FF;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .upsell-card h2 {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 12px;
        }
        .upsell-card p {
          font-size: 18px;
          color: #9CA3AF;
          margin: 0 0 32px;
          line-height: 1.6;
        }
        .upsell-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .upsell-btn {
          display: inline-block;
          background: #3B5FFF;
          color: white;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 17px;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s;
          letter-spacing: -0.3px;
        }
        .upsell-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 24px rgba(59, 95, 255, 0.4);
        }
        .upsell-btn-secondary {
          display: inline-block;
          background: transparent;
          color: white;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
          border: 2px solid rgba(255,255,255,0.2);
        }
        .upsell-btn-secondary:hover {
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-2px);
        }

        .faq {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        .faq h2 {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 32px;
        }
        .faq-item {
          border-bottom: 1px solid #E5E7EB;
          padding: 20px 0;
        }
        .faq-q {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px;
        }
        .faq-a {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }

        .related {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        .related h2 {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 24px;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .related-card {
          background: #F9FAFB;
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .related-card .rc-title {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px;
        }
        .related-card .rc-desc {
          font-size: 13px;
          color: #6B7280;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 700px) {
          .hero h1 { font-size: 32px; }
          .hero p { font-size: 17px; }
          .detector-card { padding: 20px; }
          .results-card { padding: 24px 20px; }
          .score-header {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
          .btn-row { flex-direction: column; }
          .upsell-card { padding: 32px 20px; }
          .upsell-card h2 { font-size: 26px; }
          .related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div className="badge">100% Free -- No Signup Required</div>
        <h1>AI Content <span className="highlight">Detector</span></h1>
        <p>
          Paste any text and instantly find out if it was <span className="highlight">written by AI</span>.
          Get a detailed breakdown of 8 linguistic signals plus tips to humanize your content.
        </p>
        <div className="counter">
          <strong>{analysisCount.toLocaleString()}</strong> texts analyzed
        </div>
      </section>

      {/* Detector Input */}
      <section className="detector">
        <div className="detector-card">
          <label className="detector-label">Paste your text below (minimum 50 characters)</label>
          <textarea
            className="detector-textarea"
            placeholder={"Paste the text you want to check here...\n\nThe more text you provide, the more accurate the analysis. We recommend at least 100 words for best results."}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="meta-row">
            <span className={`char-count ${charCount > 0 && charCount < 50 ? 'char-warn' : ''}`}>
              {charCount > 0 && charCount < 50 ? `${50 - charCount} more characters needed` : `${wordCount} word${wordCount !== 1 ? 's' : ''} / ${charCount} characters`}
            </span>
          </div>
          <div className="btn-row">
            <button
              className="btn-analyze"
              onClick={handleAnalyze}
              disabled={charCount < 50}
            >
              Detect AI Content
            </button>
            {result && (
              <button className="btn-reset" onClick={handleReset}>
                Start Over
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      {result && (
        <section className="results" ref={resultRef}>
          <div className="results-card">

            {/* Score + Gauge */}
            <div className="score-header">
              <div className="gauge-wrap">
                <ScoreGauge score={result.overallScore} />
              </div>
              <div className="score-info">
                <h2 style={{ color: verdict.color }}>{verdict.label}</h2>
                <p className="score-summary">
                  {result.overallScore >= 85
                    ? 'This text displays strong AI-generated patterns across multiple signals. The writing style, structure, and language choices are highly consistent with AI output from models like ChatGPT, Claude, or Gemini.'
                    : result.overallScore >= 70
                    ? 'This text shows several AI-typical patterns. It may be AI-generated or heavily AI-assisted. The formal tone, consistent structure, and specific word choices are common in AI output.'
                    : result.overallScore >= 50
                    ? 'This text shows a mix of human and AI-like signals. It could be AI-generated text that was edited, or human writing with a formal/academic style.'
                    : result.overallScore >= 30
                    ? 'This text appears mostly human-written. Some AI-like patterns exist but the overall voice, variation, and style lean toward natural human authorship.'
                    : 'This text shows strong human-writing characteristics. The sentence variation, personal voice, and natural flow are consistent with organic human authorship.'}
                </p>
              </div>
            </div>

            {/* Signal Breakdown */}
            <h3 className="breakdown-title">Signal Breakdown</h3>
            {result.signals.map((s, i) => (
              <SignalBar key={i} label={s.label} score={s.score} icon={s.icon} detail={s.detail} />
            ))}

            {/* Humanize Tips */}
            {tips.length > 0 && (
              <div className="tips-section">
                <h3 className="tips-title">How to Humanize This Text</h3>
                {tips.map((tip, i) => (
                  <div key={i} className="tip-item">
                    <span className="tip-bullet">{i + 1}.</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Upsell */}
      <section className="upsell">
        <div className="upsell-card">
          <div className="upsell-badge">Write Like a Human, Think Like an Expert</div>
          <h2>AI Prompt Mega Pack -- 2,000+ Prompts</h2>
          <p>
            Get prompts engineered to produce natural, human-sounding output.
            Every prompt includes tone, voice, and style instructions so AI writes like you, not a robot.
          </p>
          <div className="upsell-buttons">
            <a href="https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d" className="upsell-btn" target="_blank" rel="noopener noreferrer">
              Get Mega Pack -- $29
            </a>
            <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" className="upsell-btn-secondary" target="_blank" rel="noopener noreferrer">
              Full Bundle -- Save 60%
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {[
          { q: 'How does the AI Content Detector work?', a: 'The detector analyzes 8 linguistic signals including sentence uniformity, transition word density, passive voice, vocabulary diversity, hedging language, list patterns, repetitive phrases, and colloquial markers. AI-generated text tends to be highly uniform and formal while human writing is more varied and personal.' },
          { q: 'Is this AI detector free?', a: 'Yes, 100% free with no signup, no account, and no limits. Everything runs locally in your browser. We never store, transmit, or read your text.' },
          { q: 'Can it detect text from ChatGPT, Claude, and Gemini?', a: 'Yes. All major AI models share similar linguistic patterns: uniform sentence lengths, overuse of transitions like "Moreover" and "Furthermore," excessive hedging, and lack of personal voice. The detector identifies these shared fingerprints.' },
          { q: 'How accurate is AI content detection?', a: 'No detection tool is 100% accurate. Our analyzer provides a probabilistic assessment based on 8 signals. Heavily edited AI text, or human writing in formal/academic contexts, may produce less definitive results. Use it as a guide, not a verdict.' },
          { q: 'How can I make AI-generated text sound more human?', a: 'Vary your sentence lengths dramatically, remove formal transitions, use contractions, add personal anecdotes and opinions, break up lists into prose, and cut filler phrases like "It is important to note." Our Prompt Mega Pack includes prompts specifically designed to produce natural-sounding output.' },
          { q: 'Is my text AI generated if I used AI to help write it?', a: 'AI-assisted writing exists on a spectrum. If you used AI for a first draft but heavily edited it with your own voice and ideas, it may score lower (more human). The detector measures the linguistic fingerprint of the final text, not how it was produced.' },
        ].map((item, i) => (
          <div key={i} className="faq-item">
            <h3 className="faq-q">{item.q}</h3>
            <p className="faq-a">{item.a}</p>
          </div>
        ))}
      </section>

      {/* Related Tools */}
      <section className="related">
        <h2>More Free AI Tools</h2>
        <div className="related-grid">
          <Link href="/prompt-scorer" className="related-card">
            <h3 className="rc-title">AI Prompt Scorer</h3>
            <p className="rc-desc">Score your prompts 0-100 and get actionable tips to improve AI output quality.</p>
          </Link>
          <Link href="/prompt-enhancer" className="related-card">
            <h3 className="rc-title">AI Prompt Enhancer</h3>
            <p className="rc-desc">Get 5 enhanced versions of any prompt -- Professional, Creative, Viral & more.</p>
          </Link>
          <Link href="/prompt-generator" className="related-card">
            <h3 className="rc-title">AI Prompt Generator</h3>
            <p className="rc-desc">Generate expert-level prompts for any use case. 8 categories, instant results.</p>
          </Link>
          <Link href="/prompt-roaster" className="related-card">
            <h3 className="rc-title">AI Prompt Roaster</h3>
            <p className="rc-desc">Get your prompt brutally roasted for 10 common sins, then get a fixed version.</p>
          </Link>
          <Link href="/tools" className="related-card">
            <h3 className="rc-title">All Free Tools</h3>
            <p className="rc-desc">Browse our complete collection of free AI tools for entrepreneurs.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
