import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../src/content/brand-analysis/course.json');

const modBodies = [
  // Module 1 — Define Your Brand Foundation
  `<motion.div class="section"><h3>Introduction: What is Brand Analysis?</h3>
<p>Brand analysis is the systematic process of evaluating how your brand is <strong>perceived in the marketplace</strong>, how it stands against competitors, and whether it is effectively communicating its intended value to the right audience. It is not a one-time audit — it is an ongoing strategic practice at the heart of every successful marketing and growth strategy.</p>
<p>Think of brand analysis as a <strong>health check for your brand</strong>. Just as a doctor measures vitals like blood pressure and cholesterol, brand analysis measures awareness, sentiment, share of voice, and positioning — so you know exactly where you stand and what needs to improve.</p>
<div class="callout"><strong>Why it matters</strong>Brands that regularly conduct analysis grow up to 3× faster than those that don't, because they can quickly identify what's working, what's broken, and where new opportunities lie before competitors do.</div>
</div>

<div class="section"><h3>The Three Pillars of Brand Analysis</h3>
<div class="card-grid">
<div class="c-card"><h4>1. Brand Position</h4><p>The place your brand occupies in the minds of your target audience relative to competitors. Are you premium or affordable? Innovative leader or safe choice? Which pain points does your brand "own"?</p></div>
<div class="c-card"><h4>2. Brand Perception</h4><p>How customers actually feel and think about your brand — often different from how you intend. Do they trust you? Is the emotional association positive? Does the brand feel relevant?</p></div>
<div class="c-card"><h4>3. Brand Performance</h4><p>How effectively your brand translates identity into business results — awareness growth, engagement, conversions, loyalty, and share of voice vs. competitors.</p></div>
</div>
</motion.div>

<div class="section"><h3>Who Should Conduct Brand Analysis?</h3>
<table class="comp-table">
<thead><tr><th>Who</th><th>Why It Matters</th></tr></thead>
<tbody>
<tr><td>Startups &amp; Scale-ups</td><td>Establish market presence and understand how the early brand lands with the target audience.</td></tr>
<tr><td>Established Brands</td><td>Monitor brand health over time and detect reputation risks before they become crises.</td></tr>
<tr><td>Marketing Teams</td><td>Measure ROI of brand campaigns and justify brand spend to stakeholders.</td></tr>
<tr><td>Product Teams</td><td>Understand how new launches affect brand perception and positioning.</td></tr>
<tr><td>Agencies &amp; Consultants</td><td>Deliver actionable brand audits and competitive intelligence for clients.</td></tr>
<tr><td>PR &amp; Comms Teams</td><td>Track media coverage sentiment and manage brand narrative proactively.</td></tr>
</tbody>
</table>
</div>

<div class="section"><h3>Step 1: Define Your Brand Foundation</h3>
<p>Before you can analyze anything, you need a clear definition of what your brand is supposed to stand for. Without this foundation, you have no benchmark to measure against.</p>
<div class="callout"><strong>Common mistake</strong>Many teams skip this step and jump straight into data gathering. Without a defined brand identity, your analysis has no north star — you won't know whether your data shows success or failure.</div>
</div>

<div class="section"><h3>1.1 Write Your Mission Statement</h3>
<p>Your mission statement is a single, clear sentence answering: <strong>why does your brand exist?</strong> It is not about what you sell — it is about the purpose behind what you sell.</p>
<ul class="step-list">
<li><span class="step-num">1</span><motion.div>Start with your target audience — who are you serving?</motion.div></li>
<li><span class="step-num">2</span><div>Identify the core problem you solve for them.</div></li>
<li><span class="step-num">3</span><motion.div>Articulate the transformation or outcome you deliver.</motion.div></li>
<li><span class="step-num">4</span><div>Express why this matters beyond the transaction.</div></li>
</ul>
<div class="deep-dive"><div class="deep-dive-label">Example</motion.div>
<p><strong>Weak:</strong> "We build project management software."<br><strong>Strong:</strong> "We help distributed teams eliminate the chaos of remote work so they can do their best collaborative work from anywhere."</p>
</div>
</div>

<div class="section"><h3>1.2 Define Your Core Values</h3>
<p>Core values are guiding principles that inform how your brand behaves — internally and externally. They are not aspirational slogans; they are values you would refuse to compromise even if it cost you business.</p>
<div class="framework-box">
<div class="framework-header">Example Values in Practice</div>
<div class="framework-body">
<div class="framework-row"><span class="fw-key">Transparency</span><span>Openly share pricing, processes, and even failures with customers.</span></div>
<div class="framework-row"><span class="fw-key">Customer Obsession</span><span>Every decision starts with "how does this serve the customer better?"</span></div>
<div class="framework-row"><span class="fw-key">Innovation</span><span>Push beyond current industry standards consistently.</span></div>
<div class="framework-row"><span class="fw-key">Inclusivity</span><span>Design products and communications for people of all backgrounds.</span></div>
</div>
</div>
</div>

<div class="section"><h3>1.3 Establish Your Brand Personality</h3>
<p>Brand personality is the set of human characteristics associated with your brand. Jennifer Aaker's Five Dimensions framework is the most referenced model:</p>
<table class="comp-table">
<thead><tr><th>Dimension</th><th>Description &amp; Examples</th></tr></thead>
<tbody>
<tr><td>Sincerity</td><td>Honest, genuine, wholesome — Dove, Patagonia</td></tr>
<tr><td>Excitement</td><td>Bold, spirited, imaginative — Nike, Tesla</td></tr>
<tr><td>Competence</td><td>Reliable, intelligent, successful — IBM, Google</td></tr>
<tr><td>Sophistication</td><td>Charming, upper-class, glamorous — Apple, Chanel</td></tr>
<tr><td>Ruggedness</td><td>Tough, outdoorsy, rugged — Jeep, Timberland</td></tr>
</tbody>
</table>
<p>Ask: if our brand walked into a room, how would it dress, speak, and act?</p>
</div>

<div class="section"><h3>1.4 Define Your Target Audience</h3>
<p>Go beyond demographics. You need a deep psychographic profile including beliefs, motivations, pain points, goals, and media consumption.</p>
<div class="terms-grid">
<div class="term"><div class="term-name">Demographics</div><div class="term-def">Age, gender, income, education, location, profession.</motion.div></div>
<div class="term"><div class="term-name">Psychographics</div><motion.div class="term-def">Values, beliefs, personality, lifestyle, attitudes.</motion.div></div>
<div class="term"><div class="term-name">Pain Points</motion.div><div class="term-def">Problems that frustrate them daily — what keeps them up at night?</div></div>
<div class="term"><div class="term-name">Goals &amp; Aspirations</div><div class="term-def">What they are trying to achieve personally or professionally.</div></div>
<div class="term"><motion.div class="term-name">Buying Triggers</motion.div><div class="term-def">Price, social proof, urgency, status — what motivates purchase?</div></div>
<div class="term"><div class="term-name">Media Consumption</div><div class="term-def">Platforms, podcasts, publications where they spend time.</div></div>
</div>
</div>`.replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', '')),

  // Module 2 — Audit Brand Identity
  `<div class="section"><h3>Step 2: Audit Your Brand Identity</h3>
<p>Your brand identity is the collection of all visual and verbal elements that communicate who you are. A brand identity audit evaluates every customer-facing touchpoint for consistency, on-brand expression, and effectiveness at conveying your intended positioning.</p>
<div class="callout"><strong>The consistency rule</strong>Customers interact with your brand across website, social media, packaging, support, and advertising. Each interaction must feel like the same brand. Consistent brand presentation increases revenue by up to 23% (Lucidpress).</div>
</div>

<div class="section"><h3>2.1 Visual Identity Audit</h3>
<p>Evaluate logo, color palette, typography, imagery style, iconography, and design system across every channel.</p>
<ul class="step-list">
<li><span class="step-num">1</span><div><strong>Logo &amp; Color Palette</strong> — Are approved versions used only? Are color codes documented (HEX, RGB, CMYK)? Is there sufficient contrast for accessibility (WCAG 2.1)?</div></li>
<li><span class="step-num">2</span><div><strong>Typography</strong> — Is the primary typeface consistent across web, social, and print? Is typographic hierarchy documented in brand guidelines?</div></li>
<li><span class="step-num">3</span><motion.div><strong>Imagery &amp; Photography</strong> — Is there a consistent style guide for lighting, subject matter, mood, and color treatment?</motion.div></li>
</ul>
</div>

<div class="section"><h3>2.2 Verbal Identity Audit</h3>
<p>Verbal identity is how your brand speaks — tone of voice, vocabulary, messaging hierarchy, and key phrases.</p>
<table class="comp-table">
<thead><tr><th>We are…</th><th>We are NOT…</th></tr></thead>
<tbody>
<tr><td>Conversational</td><td>Jargon-heavy</td></tr>
<tr><td>Empowering</td><td>Preachy or condescending</td></tr>
<tr><td>Direct and clear</td><td>Vague or over-complicated</td></tr>
<tr><td>Warm and human</td><td>Corporate and stiff</td></tr>
<tr><td>Confident</td><td>Arrogant or dismissive</td></tr>
</tbody>
</table>
<div class="framework-box">
<div class="framework-header">Messaging Hierarchy</div>
<div class="framework-body">
<div class="framework-row"><span class="fw-key">Brand promise</span><span>One sentence capturing your overall value proposition.</span></div>
<div class="framework-row"><span class="fw-key">Value pillars</span><span>Three to five key themes supporting the promise.</span></div>
<div class="framework-row"><span class="fw-key">Proof points</span><span>Facts, data, or stories validating each pillar.</span></motion.div></div>
<div class="framework-row"><span class="fw-key">Call to action</span><span>What you want the audience to do next.</span></div>
</div>
</div>
</div>

<div class="section"><h3>2.3 Digital Presence Audit</h3>
<table class="comp-table">
<thead><tr><th>Channel</th><th>What to Audit</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>Website</td><td>Design, copy, UX, load speed, mobile responsiveness, value proposition above the fold</td><td>High</td></tr>
<tr><td>Social Media</td><td>Profile photos, bios, pinned content, consistency across platforms</td><td>High</td></tr>
<tr><td>Email Templates</td><td>Design consistency, logo usage, on-brand copy</td><td>Medium</td></tr>
<tr><td>Paid Advertising</td><td>Ad creative visually consistent with organic channels</td><td>Medium</td></tr>
<tr><td>App / Product UI</td><td>In-product experience feels like an extension of the brand</td><td>High</td></tr>
<tr><td>Third-Party Listings</td><td>Google Business, LinkedIn, G2, Clutch — accurate descriptions</td><td>Low</td></tr>
</tbody>
</table>
</div>`.replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', '')),

  // Module 3 — Measure Brand Awareness
  `<div class="section"><h3>Step 3: Measure Brand Awareness</h3>
<p>Brand awareness is the extent to which your target audience is familiar with your brand and can recall or recognize it. Without awareness, no other brand metrics matter. There are two types: <strong>unaided awareness</strong> (can people name your brand without prompts?) and <strong>aided awareness</strong> (do people recognize it when they see it?).</p>
</div>

<div class="section"><h3>3.1 Branded Search Volume</h3>
<p>One of the most reliable measures of brand awareness is the volume of branded keyword searches on Google. If people search for your brand name, they are aware of you.</p>
<ul class="step-list">
<li><span class="step-num">1</span><div>Open Google Search Console → Performance section.</div></li>
<li><span class="step-num">2</span><div>Filter by queries containing your brand name and common misspellings.</div></li>
<li><span class="step-num">3</span><div>Export monthly data to track trends over 6–12 months.</div></li>
<li><span class="step-num">4</span><div>Cross-reference with Google Trends for geographic interest.</div></li>
</ul>
<div class="callout"><strong>Benchmark</strong>Consistent month-over-month growth of 10–30% in branded search volume signals awareness-building is working. A sudden spike (50%+) typically indicates a viral moment or press mention.</div>
</div>

<div class="section"><h3>3.2 Social Media Monitoring</h3>
<p>Social listening tracks every mention of your brand name, products, executives, hashtags, and relevant keywords across platforms, news sites, blogs, and forums.</p>
<div class="terms-grid">
<div class="term"><div class="term-name">Mention Volume</div><div class="term-def">Total times your brand is mentioned in a given period.</div></div>
<div class="term"><div class="term-name">Reach</div><p class="term-def">Total potential audience size reached by all mentions.</p></div>
<div class="term"><div class="term-name">Share of Voice</div><motion.div class="term-def">Your brand's % of total mentions in your industry category.</motion.div></div>
<div class="term"><div class="term-name">Engagement Rate</div><div class="term-def">Likes, comments, and shares on posts mentioning your brand.</div></div>
</div>
</div>

<div class="section"><h3>3.3 Brand Recall Surveys</h3>
<table class="comp-table">
<thead><tr><th>Survey Type</th><th>How to Use It</th></tr></thead>
<tbody>
<tr><td>Unaided Awareness</td><td>"Name the first three brands that come to mind when you think of [category]." Top-of-mind recall — the gold standard.</td></tr>
<tr><td>Aided Awareness</td><td>Show a list of brands: "Which have you heard of?" Captures recognition when recall is low.</td></tr>
<tr><td>Aided Familiarity</td><td>"How familiar are you with [brand]?" on a 1–5 scale. Reveals depth, not just breadth.</td></tr>
<tr><td>Purchase Intent</td><td>"How likely are you to consider [brand] next time you need [category]?" Connects awareness to commercial potential.</td></tr>
</tbody>
</table>
<div class="key-takeaway"><div class="key-takeaway-label">Pro tip</div><p>Run brand recall surveys quarterly with consistent sample size and methodology. Use SurveyMonkey, Typeform, or Pollfish with audience targeting for your exact demographic.</p></div>
</div>

<div class="section"><h3>3.4 Share of Voice (SoV)</h3>
<p>Share of voice is the percentage of all online conversations in your industry that mention your brand, compared to total conversation volume across all competitors.</p>
<div class="framework-box">
<div class="framework-header">Formula</div>
<div class="framework-body">
<div class="framework-row"><span class="fw-key">SoV</span><span>(Your Brand Mentions ÷ Total Industry Mentions) × 100</span></div>
</div>
</div>
<p>To grow SoV, focus on content marketing, PR, thought leadership, and consistent social media presence. Brands with high SoV tend to command higher brand equity and sustain premium pricing.</p>
</motion.div>`.replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', '')),

  // Module 4 — Analyze Brand Sentiment
  `<div class="section"><h3>Step 4: Analyze Brand Sentiment</h3>
<p>Brand sentiment analysis identifies and categorizes emotions in conversations about your brand — positive, neutral, or negative. Awareness tells you <em>how many</em> people talk about you; sentiment tells you <em>what they think and feel</em>.</p>
<div class="callout"><strong>Why sentiment matters more than awareness</strong>71% of consumers say they would stop buying from a brand they no longer trust (Edelman Trust Barometer). Negative sentiment, left unaddressed, erodes retention and acquisition.</div>
</div>

<div class="section"><h3>4.1 The Three Sentiment Categories</h3>
<div class="card-grid">
<div class="c-card"><h4>Positive Sentiment</h4><p>Approval, satisfaction, excitement, gratitude, advocacy. Your most valuable signals — organic word-of-mouth. Respond, thank, share (with permission), and activate advocates.</p></div>
<div class="c-card"><h4>Neutral Sentiment</h4><p>Informational mentions — news, comparisons, reports with no strong emotion. Analyze context: buying journey research or general reference? Monitor for trending neutral mentions.</p></div>
<div class="c-card"><h4>Negative Sentiment</h4><p>Complaints, criticism, poor reviews, frustration. Your most actionable data. Respond within one hour, move to private channels, categorize by issue type, escalate if negative mentions exceed 20% weekly.</p></div>
</div>
</div>

<div class="section"><h3>4.2 Setting Up Sentiment Monitoring</h3>
<p>Modern media monitoring tools use AI-powered NLP to automatically classify mentions at scale.</p>
<ul class="step-list">
<li><span class="step-num">1</span><motion.div>Create a project with brand name, products, executives, and hashtags as keywords.</motion.div></li>
<li><span class="step-num">2</span><div>Review auto-detected sentiment manually for the first week to calibrate accuracy.</div></li>
<li><span class="step-num">3</span><div>Set up email or Slack alerts for negative sentiment spikes.</div></li>
<li><span class="step-num">4</span><div>Review sentiment trends weekly, noting correlation with launches or events.</div></li>
<li><span class="step-num">5</span><div>Export monthly sentiment reports for leadership.</div></li>
</ul>
</div>

<div class="section"><h3>Sentiment Benchmarks by Industry</h3>
<table class="comp-table">
<thead><tr><th>Industry</th><th>Typical Distribution</th></tr></thead>
<tbody>
<tr><td>E-commerce &amp; Retail</td><td>Positive 65–75% | Neutral 15–20% | Negative 10–15%</td></tr>
<tr><td>SaaS &amp; Technology</td><td>Positive 60–70% | Neutral 20–25% | Negative 10–20%</td></tr>
<tr><td>Financial Services</td><td>Positive 50–65% | Neutral 20–25% | Negative 15–25%</td></tr>
<tr><td>Hospitality &amp; Travel</td><td>Positive 70–80% | Neutral 10–15% | Negative 10–15%</td></tr>
<tr><td>Healthcare</td><td>Positive 60–70% | Neutral 20–30% | Negative 5–15%</td></tr>
</tbody>
</table>
</div>`.replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', '')),

  // Module 5 — Competitive Analysis
  `<div class="section"><h3>Step 5: Conduct Competitive Analysis</h3>
<p>No brand exists in isolation. Competitive analysis benchmarks your brand's awareness, sentiment, positioning, and performance against direct and indirect competitors. Without context, you cannot know whether 1,000 monthly mentions is strength or weakness.</p>
<div class="callout"><strong>Key insight</strong>Competitive brand analysis is not about copying competitors. It is about understanding the landscape clearly enough to identify white space — positioning territory no competitor owns — and moving into it decisively.</motion.div>
</div>

<div class="section"><h3>5.1 Identify Your Competitors</h3>
<table class="comp-table">
<thead><tr><th>Tier</th><th>Definition</th></tr></thead>
<tbody>
<tr><td>Tier 1 — Direct</td><td>Same core product/service to the same target audience. Prospects compare you to these most frequently.</td></tr>
<tr><td>Tier 2 — Indirect</td><td>Solve the same underlying problem through different means. Customers may choose them instead of you.</td></tr>
<tr><td>Tier 3 — Aspirational</td><td>Category-defining brands that set the standard for positioning, even if not direct competitors.</td></tr>
</tbody>
</table>
<p>Limit active monitoring to 3–5 Tier 1 and 2–3 Tier 2 competitors. Tracking too many dilutes focus.</p>
</div>

<div class="section"><h3>5.2 Competitive Brand Metrics to Track</h3>
<div class="terms-grid">
<div class="term"><motion.div class="term-name">Share of Voice</motion.div><div class="term-def">Your mention volume vs. each competitor as % of total. Tools: Brand24, Mention.</div></div>
<div class="term"><div class="term-name">Sentiment Score</div><div class="term-def">Compare positive/negative ratio against each competitor.</div></div>
<div class="term"><div class="term-name">Branded Search Volume</div><div class="term-def">Google Trends comparison over time vs. competitors.</div></div>
<div class="term"><div class="term-name">Review Scores</motion.div><div class="term-def">G2, Capterra, Trustpilot, Google Reviews averages.</div></div>
<div class="term"><div class="term-name">Domain Authority</div><div class="term-def">Backlink profiles as proxy for credibility. Tools: Ahrefs, SEMrush.</div></div>
</div>
</div>

<div class="section"><h3>5.3 Brand Positioning Map</h3>
<p>A 2×2 grid plotting your brand and competitors along two differentiation dimensions — revealing white space opportunities.</p>
<ul class="step-list">
<li><span class="step-num">1</span><div>Identify two dimensions that matter most to buying decisions (Price vs. Premium, Innovation vs. Traditional, etc.).</div></li>
<li><span class="step-num">2</span><div>Plot your brand and Tier 1 competitors based on actual perception, not aspiration.</div></li>
<li><span class="step-num">3</span><div>Identify quadrants with few or no competitors — potential positioning territory.</div></li>
<li><span class="step-num">4</span><div>Validate with 5–10 customer interviews or surveys.</div></li>
</ul>
</div>

<div class="section"><h3>5.4 SWOT Analysis Through a Brand Lens</h3>
<table class="comp-table">
<thead><tr><th>Element</th><th>Brand Context</th></tr></thead>
<tbody>
<tr><td>Strengths</td><td>Brand assets uniquely yours — where you score higher on sentiment vs. competitors.</td></tr>
<tr><td>Weaknesses</td><td>Areas where competitors are perceived more favorably; repeating negative sentiment patterns.</td></tr>
<tr><td>Opportunities</td><td>Unowned positioning territory, audience segments, or content gaps no competitor has claimed.</td></tr>
<tr><td>Threats</td><td>Competitors rising in share of voice, negative category narratives, regulatory changes.</td></tr>
</tbody>
</table>
</div>`.replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', '')),

  // Module 6 — Track KPIs & Optimize
  `<div class="section"><h3>Step 6: Track KPIs &amp; Continuously Optimize</h3>
<p>Brand analysis only creates business impact when it informs ongoing strategy and is measured consistently over time. Build a brand measurement system: regular data collection, review, and decision-making that keeps your brand on a trajectory of intentional growth.</p>
<div class="callout"><strong>The optimization mindset</strong>Brand analysis is a loop, not a linear process. You analyze, act, re-analyze, refine. The brands that grow fastest learn fastest from their data.</div>
</div>

<div class="section"><h3>6.1 Your Brand Health Dashboard</h3>
<table class="comp-table">
<thead><tr><th>KPI</th><th>Target Benchmark</th></tr></thead>
<tbody>
<tr><td>Brand Mention Volume</td><td>10–30% month-over-month growth</td></tr>
<tr><td>Sentiment Score</td><td>Maintain ≥60% positive</td></tr>
<tr><td>Share of Voice</td><td>Upward trend vs. prior period</td></tr>
<tr><td>Branded Search Volume</td><td>Consistent upward trend</td></tr>
<tr><td>Net Promoter Score (NPS)</td><td>Score ≥50 is excellent</td></tr>
<tr><td>Review Rating Average</td><td>Maintain ≥4.2 stars</td></tr>
<tr><td>Crisis Incidents</td><td>Zero negative sentiment threshold breaches</td></tr>
</tbody>
</table>
</div>

<div class="section"><h3>6.2 Cadence &amp; Review Schedule</h3>
<table class="comp-table">
<thead><tr><th>Frequency</th><th>What to Do</th></tr></thead>
<tbody>
<tr><td>Daily</td><td>Monitor real-time alerts; address complaints within one hour.</td></tr>
<tr><td>Weekly</td><td>Review dashboard metrics; share brief brand health summary with team.</td></tr>
<tr><td>Monthly</td><td>Full brand health report vs. prior month and year; competitive benchmarking.</td></tr>
<tr><td>Quarterly</td><td>Full analysis cycle: re-audit identity, run perception survey, update positioning map and SWOT.</td></tr>
<tr><td>Annually</td><td>Comprehensive brand health study; brand equity valuation; set KPI targets for coming year.</td></tr>
</tbody>
</table>
</div>

<div class="section"><h3>6.3 Turning Insights into Actions</h3>
<ul class="step-list">
<li><span class="step-num">1</span><div><strong>State the insight:</strong> "35% of negative mentions relate to slow customer onboarding."</div></li>
<li><span class="step-num">2</span><div><strong>Hypothesize the cause:</strong> "Customers aren't contacted by success manager within 48 hours."</div></li>
<li><span class="step-num">3</span><div><strong>Define the action:</strong> "Implement automated Day 1 welcome call sequence."</div></li>
<li><span class="step-num">4</span><motion.div><strong>Set a success metric:</strong> "Reduce onboarding-related negative sentiment by 50% in 90 days."</motion.div></li>
<li><span class="step-num">5</span><div><strong>Assign ownership</strong> and schedule re-analysis at 30, 60, and 90 days.</div></li>
</ul>
</motion.div>

<div class="section"><h3>Recommended Tools</h3>
<div class="card-grid">
<div class="c-card"><h4>Media Monitoring</h4><p>Brand24, Mention, Brandwatch, Sprout Social — real-time listening, sentiment, share of voice.</p></div>
<div class="c-card"><h4>Search &amp; SEO</h4><p>Google Search Console, Google Trends, SEMrush, Ahrefs — branded search and competitor analysis.</p></div>
<div class="c-card"><h4>Surveys</h4><p>SurveyMonkey, Typeform, Pollfish, UserTesting — awareness, NPS, perception studies.</p></div>
<div class="c-card"><h4>Reviews</h4><p>G2, Trustpilot, Google Business, ReviewTrackers — reputation management.</p></div>
</div>
</div>

<div class="section"><h3>Final Thoughts</h3>
<p>Brand analysis transforms brand management from creative intuition into a data-informed discipline. The brands that dominate their markets understand their position most clearly, listen most attentively to perception, and iterate most quickly on what they learn.</p>
<div class="key-takeaway"><div class="key-takeaway-label">Remember</div><p>The goal of brand analysis is not to generate reports. It is to make better decisions, faster, with more confidence. Every data point should help you answer: <strong>what should we do next to build a stronger brand?</strong></p></div>
</div>`.replace(/<\/?motion\.motion.div>/g, '').replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', '')),
];

// Fix any remaining motion.div typos from accidental paste
const cleanBodies = modBodies.map((b) =>
  b.replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', ''))
);

const course = {
  slug: 'brand-analysis',
  modMeta: [
    {
      tag: 'Module 1 · Foundation',
      title: 'Define Your Brand Foundation',
      sub: 'Codify your brand DNA — mission, values, personality, and target audience — before you measure anything.',
      dur: '50 min',
      lessons: '6 lessons',
    },
    {
      tag: 'Module 2 · Identity',
      title: 'Audit Your Brand Identity',
      sub: 'Evaluate visual, verbal, and digital touchpoints for consistency and on-brand effectiveness.',
      dur: '55 min',
      lessons: '6 lessons',
    },
    {
      tag: 'Module 3 · Awareness',
      title: 'Measure Brand Awareness',
      sub: 'Track branded search, social monitoring, recall surveys, and share of voice.',
      dur: '50 min',
      lessons: '5 lessons',
    },
    {
      tag: 'Module 4 · Sentiment',
      title: 'Analyze Brand Sentiment',
      sub: 'Classify positive, neutral, and negative mentions and set up automated monitoring.',
      dur: '45 min',
      lessons: '5 lessons',
    },
    {
      tag: 'Module 5 · Competition',
      title: 'Conduct Competitive Analysis',
      sub: 'Benchmark against competitors, build positioning maps, and run brand-focused SWOT.',
      dur: '55 min',
      lessons: '6 lessons',
    },
    {
      tag: 'Module 6 · Optimization',
      title: 'Track KPIs & Optimize',
      sub: 'Build a brand health dashboard, review cadence, and insight-to-action framework.',
      dur: '50 min',
      lessons: '6 lessons',
    },
  ],
  modBodies: cleanBodies,
  quizzes: [
    {
      title: 'Module 1 Quiz — Brand Foundation',
      questions: [
        {
          q: 'Brand analysis is best described as:',
          opts: [
            'A one-time logo review',
            'An ongoing practice of evaluating perception, position, and performance',
            'Only for large corporations',
            'A substitute for marketing campaigns',
          ],
          correct: 1,
        },
        {
          q: 'Which is NOT one of the three pillars of brand analysis?',
          opts: ['Brand Position', 'Brand Perception', 'Brand Performance', 'Brand Inventory'],
          correct: 3,
        },
        {
          q: 'A strong mission statement should answer:',
          opts: [
            'What your office address is',
            'Why your brand exists beyond making money',
            'Your annual revenue target',
            'Your competitor list',
          ],
          correct: 1,
        },
        {
          q: 'Jennifer Aaker\'s framework defines:',
          opts: [
            'Pricing tiers',
            'Brand personality dimensions',
            'SEO keywords',
            'Employee org charts',
          ],
          correct: 1,
        },
      ],
    },
    {
      title: 'Module 2 Quiz — Brand Identity Audit',
      questions: [
        {
          q: 'Consistent brand presentation can increase revenue by up to:',
          opts: ['5%', '23%', '50%', '100%'],
          correct: 1,
        },
        {
          q: 'Verbal identity includes:',
          opts: [
            'Only the logo',
            'Tone of voice, vocabulary, and messaging hierarchy',
            'Office furniture choices',
            'Server hosting provider',
          ],
          correct: 1,
        },
        {
          q: 'Which channel is highest priority in a digital presence audit?',
          opts: ['Third-party listings only', 'Website and social profiles', 'Internal Slack channels', 'Print brochures'],
          correct: 1,
        },
        {
          q: 'Brand voice is:',
          opts: [
            'Different on every channel',
            'The consistent personality of communication',
            'Only used in advertising',
            'The same as brand tone with no difference',
          ],
          correct: 1,
        },
      ],
    },
    {
      title: 'Module 3 Quiz — Brand Awareness',
      questions: [
        {
          q: 'Unaided brand awareness means:',
          opts: [
            'People recognize your logo when shown',
            'People name your brand without prompts',
            'People follow you on social media',
            'People visit your website',
          ],
          correct: 1,
        },
        {
          q: 'Branded search volume is tracked primarily via:',
          opts: ['Google Search Console', 'Payroll software', 'Inventory systems', 'HR platforms'],
          correct: 0,
        },
        {
          q: 'Share of Voice formula is:',
          opts: [
            '(Your Mentions ÷ Total Industry Mentions) × 100',
            'Total revenue ÷ ad spend',
            'Followers × engagement rate',
            'Website visits ÷ page views',
          ],
          correct: 0,
        },
        {
          q: 'Strong branded search growth benchmark is typically:',
          opts: ['1–2% monthly', '10–30% monthly', '100% daily', '0% — flat is ideal'],
          correct: 1,
        },
      ],
    },
    {
      title: 'Module 4 Quiz — Brand Sentiment',
      questions: [
        {
          q: 'Negative sentiment is valuable because it:',
          opts: [
            'Should be ignored',
            'Tells you exactly where the brand is failing',
            'Means your brand is unknown',
            'Only matters for B2C brands',
          ],
          correct: 1,
        },
        {
          q: 'Brands should respond to complaints ideally within:',
          opts: ['One week', 'One hour', 'One month', 'Never publicly'],
          correct: 1,
        },
        {
          q: 'If negative mentions exceed 20% of total in a week, you should:',
          opts: [
            'Celebrate viral attention',
            'Escalate to leadership immediately',
            'Delete all social accounts',
            'Ignore until next quarter',
          ],
          correct: 1,
        },
        {
          q: 'Sentiment monitoring at scale typically uses:',
          opts: [
            'Manual reading of every mention',
            'AI-powered NLP classification',
            'Random sampling only',
            'Annual surveys exclusively',
          ],
          correct: 1,
        },
      ],
    },
    {
      title: 'Module 5 Quiz — Competitive Analysis',
      questions: [
        {
          q: 'Tier 1 competitors are:',
          opts: [
            'Aspirational category leaders only',
            'Direct competitors with same product and audience',
            'Companies in unrelated industries',
            'Internal team members',
          ],
          correct: 1,
        },
        {
          q: 'A brand positioning map helps you find:',
          opts: ['Office locations', 'White space positioning opportunities', 'Tax deductions', 'Employee salaries'],
          correct: 1,
        },
        {
          q: 'Competitive analysis is primarily about:',
          opts: [
            'Copying competitor campaigns',
            'Understanding the landscape to find differentiation',
            'Eliminating all competitors legally',
            'Matching competitor pricing exactly',
          ],
          correct: 1,
        },
        {
          q: 'In a brand SWOT, "Opportunities" include:',
          opts: [
            'Unowned positioning territory and audience gaps',
            'Your current logo file formats',
            'Office lease terms',
            'Employee vacation policies',
          ],
          correct: 0,
        },
      ],
    },
    {
      title: 'Module 6 Quiz — KPIs & Optimization',
      questions: [
        {
          q: 'A healthy sentiment score target is typically:',
          opts: ['≥60% positive', '≥10% positive', '100% negative', '50% neutral only'],
          correct: 0,
        },
        {
          q: 'Full brand analysis cycles should run at minimum:',
          opts: ['Daily', 'Quarterly', 'Once per decade', 'Never — ad hoc only'],
          correct: 1,
        },
        {
          q: 'The insight-to-action framework starts with:',
          opts: [
            'Designing a new logo',
            'Stating a clear insight from the data',
            'Increasing ad spend blindly',
            'Hiring a new agency',
          ],
          correct: 1,
        },
        {
          q: 'Brand analysis creates impact when it:',
          opts: [
            'Generates reports only',
            'Informs decisions and measurable actions',
            'Replaces all creative work',
            'Eliminates the need for strategy',
          ],
          correct: 1,
        },
      ],
    },
  ],
  resources: [
    'Brand Foundation Worksheet',
    'Brand Identity Audit Checklist',
    'Brand Awareness Measurement Template',
    'Sentiment Monitoring Setup Guide',
    'Competitive Analysis Workbook',
    'Brand Health Dashboard Template',
  ],
  modNames: [
    'Brand Foundation',
    'Identity Audit',
    'Brand Awareness',
    'Brand Sentiment',
    'Competitive Analysis',
    'KPIs & Optimize',
  ],
};

writeFileSync(out, JSON.stringify(course, null, 2), 'utf8');
console.log('Wrote', out);
