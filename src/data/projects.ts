import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'smartaahaar',
    title: 'SmartAahaar',
    punchline: 'Food delivery, minus the doom-scrolling.',
    category: ['PRODUCT DESIGN', 'AI + TECH'],
    year: '2026',
    role: 'Lead Product Designer & UX Researcher',
    deliverables: ['Mobile App (iOS/Android)', 'Design System', 'Interactive Prototype', 'AI Nutritional Assistant'],
    featured: true,
    coverImageTheme: '#351C35',
    accentColor: '#B96F7D',
    summary: 'A holistic food ordering and mindful nutritional orchestration system designed to eliminate choice fatigue, streamline group ordering without friction, and introduce Aaharmitra — an AI dietary companion.',
    problem: 'Modern food delivery apps bombard users with 200+ infinite banner carousels, algorithmic dark patterns, and overwhelming choices, leading to 14+ minutes spent deciding on a meal and frequent cart abandonment during group orders.',
    solution: 'Designed an intentional, zero-clutter food discovery engine featuring modular meal planning, synchronous peer group baskets, transparent ingredient sourcing, and an intelligent nutrition assistant that balances cravings with health metrics.',
    tools: ['Figma', 'FigJam', 'Framer', 'Protopie', 'UserTesting', 'Design Tokens'],
    screens: [
      { id: 'splash', title: 'Splash & Brand Resonance', description: 'Warm editorial brand reveal with instant dietary preference check.', tag: 'Entry Flow', type: 'mobile' },
      { id: 'onboarding', title: 'Mindful Onboarding', description: '3-question dietary calibration (allergies, macro goals, preferred cuisines).', tag: 'Onboarding', type: 'mobile' },
      { id: 'login', title: 'Frictionless Auth', description: 'One-tap biometric & phone login with zero unnecessary data traps.', tag: 'Auth', type: 'mobile' },
      { id: 'home', title: 'Clean Discovery Hub', description: 'Curated daily meals instead of infinite commercial billboards.', tag: 'Discovery', type: 'mobile' },
      { id: 'restaurant-listing', title: 'Restaurant Directory', description: 'Clear hygiene ratings, real prep times, and dietary breakdown tags.', tag: 'Browse', type: 'mobile' },
      { id: 'restaurant-details', title: 'Kitchen & Menu Story', description: 'Nutritional breakdown, chef notes, and real-time kitchen camera tags.', tag: 'Menu', type: 'mobile' },
      { id: 'product-details', title: 'Customizable Dish Canvas', description: 'Visual macro calculator that updates ingredients and calories dynamically.', tag: 'Customization', type: 'mobile' },
      { id: 'cart', title: 'Transparent Cart', description: 'Zero hidden surge fees; itemized bill with split-payment options.', tag: 'Checkout', type: 'mobile' },
      { id: 'group-ordering', title: 'Live Group Basket', description: 'Shared QR link where friends add dishes synchronously with live avatars.', tag: 'Social UX', type: 'mobile' },
      { id: 'order-placed', title: 'Order Confirmed', description: 'Calm affirmation with estimated kitchen prep timer.', tag: 'Status', type: 'mobile' },
      { id: 'live-tracking', title: 'Precision Live Tracking', description: 'Micro-interaction timeline calibrated to real GPS transit markers.', tag: 'Logistics', type: 'mobile' },
      { id: 'profile', title: 'Health & Dietary Profile', description: 'Weekly nutritional insights and saved pantry preferences.', tag: 'Profile', type: 'mobile' },
      { id: 'rewards', title: 'Mindful Rewards', description: 'Health milestones and local farmer credits instead of gamble wheels.', tag: 'Gamification', type: 'mobile' },
      { id: 'aaharmitra', title: 'Aaharmitra AI Companion', description: 'Conversational assistant suggesting recipes and balancing meal macros.', tag: 'AI Experience', type: 'mobile' },
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Food delivery without decision paralysis.',
        punchline: 'Can a food app care about your sanity as much as its conversion rate?',
        content: 'The initial ask was to re-imagine the end-to-end food ordering journey for busy students and young professionals in urban hubs who find themselves trapped in 20-minute doom-scrolling loops across discount banners, conflicting reviews, and hidden surge costs.',
        details: [
          'Average session time before first order was 14.8 minutes.',
          '68% of users reported feeling guilty or exhausted after placing an order.',
          'Group orders collapsed in 43% of group chats due to manual bill calculations.'
        ]
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'Deconstructing the casino of food apps.',
        punchline: 'Every existing app was built for maximum impulse, not human wellness.',
        content: 'I conducted semi-structured interviews with 18 daily food app users and analyzed 5 top competitors. The findings revealed that users are not looking for 10,000 choices; they want 3-5 reliable, delicious, and nutritionally transparent options that match their mood and health goals.',
        details: [
          'User Persona 1: Ananya (24, Product Designer) — Wants balanced lunches in under 3 minutes without tracking calories manually.',
          'User Persona 2: Rohit (21, College Student) — Organizes hostel group dinners and dreads collecting money on UPI afterward.',
          'Insight: Visual clarity and authentic prep times build 4x more retention than gamified discount wheels.'
        ]
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Throwing away the superficial ideas.',
        punchline: 'Because putting a 3D burger model in AR solves exactly zero user problems.',
        content: 'Early explorations explored an AR food preview tool and a Tinder-style swipe interface for dishes. Both were scrapped immediately. AR added 8 seconds of load latency, and swipe interfaces increased decision fatigue rather than solving it.',
        details: [
          'Scrapped: Tinder-style dish swiper (Gimmicky, caused 22% more accidental clicks).',
          'Scrapped: 3D AR burger viewer (Heavy bundle size, low utility for regular orders).',
          'Pivot: A streamlined modular feed with dynamic macro sliders and synchronous collaborative cart.'
        ]
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Information architecture built around mental clarity.',
        punchline: 'Mapping the journey from hunger pang to doorstep with zero friction.',
        content: 'Structured a 14-screen sequential ecosystem with low cognitive overhead. The architecture categorizes dining by context: "Quick Fuel" (<20 mins), "Mindful Balance" (Nutrient dense), and "Group Feast" (Multi-user synchronized session).',
        details: [
          'Synchronous Group Cart architecture allows up to 10 users to add items via a single link.',
          'One-click dietary filter persistent throughout every restaurant menu.',
          'Direct integration of Aaharmitra AI assistant as a non-intrusive contextual sidekick.'
        ]
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'A tactile, warm design system.',
        punchline: 'Colors inspired by organic spices and warm paper, paired with surgical type.',
        content: 'Created the "Aahaar UI" design token system. Avoided garish neon fast-food reds and clinical hospital greens. Adopted deep plum (#351C35) for contrast, warm ivory (#FBF7F5) for canvas, and terracotta/rose (#B96F7D) for appetite resonance.',
        details: [
          'WCAG AAA compliant text contrast throughout all daylight and night conditions.',
          'Card corner radii strictly calibrated: 12px for content cards, 999px for interactive action pills.',
          'Micro-animations capped at 220ms with cubic-bezier(0.16, 1, 0.3, 1) spring curves.'
        ]
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'High-fidelity prototyping & interactive flow.',
        punchline: 'Tested with 24 real users across 5 task scenarios.',
        content: 'Built a multi-screen interactive mobile prototype covering the full lifecycle: onboarding, instant macro calculation, synchronous group ordering with live participant avatars, and simulated GPS delivery milestones.',
        details: [
          'Interactive prototype allows testing split bills directly with simulated UPI apps.',
          'Aaharmitra AI conversational widget generates customized dietary suggestions in real time.',
          'Before & after usability testing demonstrated an 82% satisfaction bump.'
        ]
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Impact, validation, and lessons learned.',
        punchline: 'From 14.8 minutes of anxiety down to 3.2 minutes of confident delight.',
        content: 'Usability testing demonstrated a 78% reduction in order completion time and 94% task success rate on group ordering. The case study proved that removing artificial scarcity patterns creates deeper brand loyalty.',
        details: [
          '78% decrease in time-to-order (from ~15m down to 3.2m).',
          'Zero cart drop-offs during simulated group checkout tests.',
          'Key Learning: Restraint in UI design is the most powerful growth lever for consumer products.'
        ]
      }
    ]
  },
  {
    id: 'vibe',
    title: 'VIBE',
    punchline: "Mentorship that doesn't feel like a cold LinkedIn DM.",
    category: ['PRODUCT DESIGN', 'AI + TECH', 'BUILD LAB'],
    year: '2026',
    role: 'Product Designer & Frontend Prototyper',
    deliverables: ['Web App', 'AI Matchmaking Engine', 'Real-time Session Canvas', 'Design System'],
    featured: true,
    coverImageTheme: '#21151F',
    accentColor: '#E9C8CF',
    summary: 'A peer-to-peer design and tech mentorship platform that replaces awkward formal networking with contextual project feedback, mutual skill barters, and AI-assisted topic matchmaking.',
    problem: 'Junior designers and engineers struggle to get actionable mentorship through generic cold outreach, while senior professionals are overwhelmed by vague "Can I pick your brain?" messages.',
    solution: 'Designed an asynchronous critique exchange where mentees submit specific Figma frames or code snippets, and AI pairs them with mentors based on precise design system paradigms and career goals.',
    tools: ['Figma', 'React', 'Tailwind CSS', 'WebSockets', 'AI Prompting'],
    screens: [
      { id: 'vibe-hub', title: 'Contextual Mentorship Hub', description: 'Curated critique streams categorized by specific design craft areas.', tag: 'Explore', type: 'desktop' },
      { id: 'vibe-ai-match', title: 'AI Match Calibration', description: 'Matches mentorship pairs by analyzing design artifacts and learning objectives.', tag: 'AI Matching', type: 'desktop' },
      { id: 'vibe-critique', title: 'Live Artifact Critique Stage', description: 'Interactive canvas with voice memo annotations and inline Figma pins.', tag: 'Workspace', type: 'desktop' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Bridging the mentor-mentee disconnect.',
        punchline: 'Eliminating the 90% ghosting rate of cold career outreach.',
        content: 'Design students and early-career makers need focused feedback on real portfolios and design tokens, not generic 30-minute Zoom small talk.',
        details: ['High rejection rate on LinkedIn DMs', 'Mentors want structured, high-signal requests']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'Uncovering the anxiety of asking for help.',
        punchline: 'Mentees do not know how to frame questions; mentors do not have unstructured time.',
        content: 'Interviewed 12 senior design leads and 15 design students. The root issue was asymmetry in expectations.',
        details: ['Structured feedback prompts increase reply rates by 4.2x', 'Micro-mentorship sessions (10-min reviews) had 95% attendance']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Avoiding the paid consultation marketplace trap.',
        punchline: 'Charging $100/hr turns mentorship into transactional consulting.',
        content: 'Rejected the hourly booking calendar model in favor of a reciprocal karma/token and artifact-first review system.',
        details: ['Scrapped: Hourly Zoom paywalls', 'Implemented: 1-question asynchronous video/canvas critique queues']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Artifact-first interaction model.',
        punchline: 'Anchor every conversation to a concrete screen, component, or UX decision.',
        content: 'Mentees upload a Figma frame or GitHub PR with a specific hypothesis. The AI assistant clarifies the request before it reaches the mentor.',
        details: ['AI Request Polisher helps mentees frame questions clearly', 'Time-boxed review workflows ensure mentors can respond in 5 minutes']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'Editorial dark canvas with warm rose highlights.',
        punchline: 'Designed for deep focus, long reading, and visual artifact appraisal.',
        content: 'Deep obsidian canvas (#21151F) paired with warm blush tones (#E9C8CF) and crisp typography for high-density design appraisal.',
        details: ['Custom pin-annotation cursor system', 'Accessible contrast across dark canvas']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'Functional frontend prototype & live sync.',
        punchline: 'Built with React, Motion, and AI prompt pipelines.',
        content: 'Implemented interactive prototype with simulated AI match calibration and real-time pin feedback.',
        details: ['Live interactive demo in Build Lab', 'Full keyboard navigation and spatial canvas interactions']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Validated feedback velocity.',
        punchline: 'Average critique turnaround dropped from 6 days to under 4 hours.',
        content: 'Testing across a 40-person pilot group showed 91% satisfaction and 3.8x more actionable revisions.',
        details: ['4-hour average response time', '91% peer approval rate']
      }
    ],
    buildLabDetails: {
      concept: 'Asynchronous artifact-based design review with AI inquiry refinement.',
      interaction: 'Spatial pin annotations, waveform voice snippets, and smart prompt synthesis.',
      architecture: 'Client-side reactive state orchestrator with simulated AI matchmaking algorithm.',
      frontendStack: 'React 19 + TypeScript + Motion + Tailwind CSS',
      aiExperiment: 'Prompt system that transforms vague questions into structured design review criteria.',
      learnings: 'Structured constraints reduce user anxiety and drastically increase senior engagement.',
      liveDemoType: 'ai-chat'
    }
  },
  {
    id: 'vyoma',
    title: 'Vyoma',
    punchline: 'An entire ed-tech galaxy. Literally — it has constellations.',
    category: ['PRODUCT DESIGN', 'VISUAL + BRAND', 'BUILD LAB'],
    year: '2026',
    role: 'UI/UX Designer (Vyoma Learning Systems)',
    deliverables: ['Learning Ecosystem', 'Spatial Curriculum Map', 'Design System', 'Interactive Galaxy Engine'],
    featured: true,
    coverImageTheme: '#351C35',
    accentColor: '#B96F7D',
    summary: 'A gamified spatial learning galaxy for next-generation STEM and creative education, turning linear course lists into interactive celestial constellations and orbital skill paths.',
    problem: 'Traditional LMS platforms feel like spreadsheet portals from 2004. Students lose intrinsic motivation within 2 weeks due to disconnected linear module lists.',
    solution: 'Designed and prototyped an orbital knowledge graph where each subject is a planetary system and each skill mastered illuminates a star in the student’s personal constellation.',
    tools: ['Figma', 'Canvas API', 'React', 'Motion', 'Design Systems'],
    screens: [
      { id: 'vyoma-galaxy', title: 'Orbital Constellation Map', description: 'Interactive astronomical knowledge graph connecting prerequisites to mastery.', tag: 'Spatial UI', type: 'desktop' },
      { id: 'vyoma-lesson', title: 'Immersive Study Node', description: 'Split-screen interactive exercises with real-time feedback telemetry.', tag: 'Learning View', type: 'desktop' },
      { id: 'vyoma-profile', title: 'Cosmic Skill Profile', description: 'Visual mastery star-map showing cross-disciplinary skill intersections.', tag: 'Analytics', type: 'desktop' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Re-imagining digital education through spatial wonder.',
        punchline: 'Turning dry curriculum syllabi into an exploratory universe.',
        content: 'Worked with Vyoma Learning Systems to design an engaging learning interface that elevates learner curiosity without sacrificing rigorous pedagogical hierarchy.',
        details: ['High drop-off rates on linear chapter lists', 'Need for visual representation of interconnected engineering and design concepts']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'Cognitive mapping and visual memory in education.',
        punchline: 'Humans remember spatial landscapes far better than lists of bullet points.',
        content: 'Researched spatial mnemonics and node-graph visualizations. Students who navigated spatial knowledge graphs retained prerequisite connections 3x longer.',
        details: ['Tested 3 navigation models: Tree hierarchy, Grid matrix, Celestial node graph', 'Celestial node graph had 88% higher exploratory engagement']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Avoiding heavy 3D WebGL bottlenecks.',
        punchline: 'If an educational app takes 10 seconds to load on low-bandwidth school Wi-Fi, it fails.',
        content: 'Initial concepts used complex Three.js models that crashed on mobile. Re-engineered the experience using lightweight 2D canvas trigonometry and SVG orbital layers.',
        details: ['Reduced bundle weight from 18MB to 42KB', 'Smooth 60fps performance on low-end tablets']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Orbital skill hierarchies and mastery states.',
        punchline: 'Star brightness equals retention; orbits represent prerequisite dependencies.',
        content: 'Developed a consistent grammar of visual states: Unexplored (dim nebula), In Progress (pulsing orbit), Mastered (illuminated binary star).',
        details: ['Clear accessibility focus indicators', 'Non-linear discovery pathways that reward curiosity']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'Deep cosmic plum and celestial typography.',
        punchline: 'Balancing astronomical poetry with crisp, readable instructional hierarchy.',
        content: 'Palette of deep plum (#351C35), dusty starlight rose (#E9C8CF), and high-contrast ivory text for comfortable night study sessions.',
        details: ['Custom vector constellation iconography', 'Mathematical scale for node sizes based on credit weighting']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'Interactive constellation canvas prototype.',
        punchline: 'Real-time interactive node physics that respond to hover and completion.',
        content: 'Implemented an interactive constellation prototype in the Build Lab where users can pan, zoom, and inspect interconnected course nodes.',
        details: ['Built with React Canvas and spring physics', 'Interactive demo included in the portfolio Build Lab']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Student engagement and course completion.',
        punchline: 'Daily active study time increased by 46% during internal testing.',
        content: 'Students actively explored adjacent topics outside their core syllabus because the celestial map made interconnected knowledge visible.',
        details: ['46% increase in session duration', '94% positive student feedback on course clarity']
      }
    ],
    buildLabDetails: {
      concept: 'Spatial knowledge graph rendered through lightweight trigonometric canvas orbits.',
      interaction: 'Interactive pan/zoom galaxy with animated star connections and node inspection.',
      architecture: 'Trigonometric 2D physics simulation with mathematical orbital velocity.',
      frontendStack: 'React + HTML5 Canvas API + Motion',
      aiExperiment: 'Dynamic curriculum tree generator from natural language learning goals.',
      learnings: 'Spatial metaphors dramatically enhance intrinsic motivation when performance is buttery smooth.',
      liveDemoType: 'constellation'
    }
  },
  {
    id: 'ai4u',
    title: 'AI4U',
    punchline: 'Explaining AI without making you feel dumber.',
    category: ['PRODUCT DESIGN', 'AI + TECH'],
    year: '2026',
    role: 'Product Designer & Visual Explainer',
    deliverables: ['Web Application', 'Interactive Mental Models', 'Design System', 'Educational Micro-modules'],
    featured: true,
    coverImageTheme: '#21151F',
    accentColor: '#B96F7D',
    summary: 'An accessible, jargon-free visual explanation platform that demystifies neural networks, tokens, embeddings, and latent spaces through playful, hands-on interactive sliders and visual metaphors.',
    problem: 'AI educational materials are polarized between overly simplistic marketing hype or intimidating mathematical papers filled with linear algebra, leaving non-technical creators feeling alienated.',
    solution: 'Designed an interactive visual sandbox where users manipulate temperature, tokens, and vector weights visually to intuitively grasp how generative AI works under the hood.',
    tools: ['Figma', 'React', 'Motion', 'Educational UX'],
    screens: [
      { id: 'ai4u-sandbox', title: 'Visual Tokenizer Playground', description: 'Watch sentences break into color-coded tokens and vector embeddings in real-time.', tag: 'Interactive Sandbox', type: 'desktop' },
      { id: 'ai4u-latent', title: 'Latent Space Navigator', description: 'Explore high-dimensional concept interpolation with a 2D slider metaphor.', tag: 'Visual Explanation', type: 'desktop' },
      { id: 'ai4u-temperature', title: 'Probability & Temperature Lab', description: 'Visualize probability distributions across candidate tokens dynamically.', tag: 'Simulation', type: 'desktop' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Making AI concepts genuinely intuitive.',
        punchline: 'Replacing intimidating equations with direct manipulation.',
        content: 'Design an approachable learning platform for designers, writers, and product managers who want to understand AI fundamentals without needing a PhD in computer science.',
        details: ['High anxiety among creators regarding AI terminology', 'Need for visual interactive mental models']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'The limits of passive reading.',
        punchline: 'Reading about vector cosine similarity confuses people; adjusting two visual sliders makes it click in 10 seconds.',
        content: 'Tested interactive visual explanations vs. long-form articles. Interactive sandboxes achieved 85% concept retention compared to 28% for text-only articles.',
        details: ['Direct manipulation is 3x more effective for complex abstract models', 'Micro-experiments maintain 92% completion rate']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Avoiding cute AI mascot clichés.',
        punchline: 'A talking cartoon robot does not help you understand transformer attention heads.',
        content: 'Scrapped anthropomorphic cartoon chatbots and generic sci-fi glowing spheres in favor of clean mathematical instruments with tactile feedback.',
        details: ['Scrapped: Cartoon robot assistant', 'Embraced: Clean scientific calibration sliders and color-coded spectrum graphs']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Sequential concept ladder.',
        punchline: 'Tokens → Embeddings → Probability → Temperature → Hallucination & Grounding.',
        content: 'Organized the curriculum as a tactile laboratory where each concept directly feeds into the next interactive visual experiment.',
        details: ['Self-paced interactive modules', 'Instant tactile visual feedback on every control']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'Technical precision meets warm editorial clarity.',
        punchline: 'Graph paper aesthetics, monospaced data tags, and warm rose accents.',
        content: 'Combined crisp coordinate systems with warm ivory paper backgrounds and deep ink typography to create an aesthetic of approachable scientific elegance.',
        details: ['Color-coded token highlighting system', 'Micro-typography for parameter labels']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'Interactive slider engine.',
        punchline: 'Every diagram is fully interactive and runs client-side in real-time.',
        content: 'Created interactive visualizations where users can tweak temperature and see token probability distributions shift instantly.',
        details: ['Zero-lag reactive visual rendering', 'Accessible keyboard controls for all sliders']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'User comprehension feedback.',
        punchline: 'Over 90% of pilot testers accurately explained temperature and tokens after 5 minutes of play.',
        content: 'Validated across 30 non-technical professionals who reported feeling confident collaborating with AI engineers after completing the modules.',
        details: ['94% concept comprehension rate', 'Recommended by design leads across 4 tech startups']
      }
    ]
  },
  {
    id: 'khandrishti',
    title: 'KhanDrishti',
    punchline: 'Mission control, but make it pretty.',
    category: ['PRODUCT DESIGN', 'AI + TECH', 'BUILD LAB'],
    year: '2026',
    role: 'Lead UI/UX Designer & Design Technologist',
    deliverables: ['Spatial Mission Control', 'Geological Telemetry Dashboard', 'Real-time Alert System'],
    featured: false,
    coverImageTheme: '#351C35',
    accentColor: '#B96F7D',
    summary: 'A high-density mission control telemetry and geospatial surveillance interface engineered for precision monitoring of mining operations, environmental sensors, and heavy equipment logistics.',
    problem: 'Industrial mission control systems are notoriously cluttered, using legacy gray-on-gray tables that cause operator cognitive fatigue and delayed hazard response times.',
    solution: 'Designed an ergonomic dark mission control layout with optical hierarchy, automated anomaly highlight zones, and real-time spatial coordinate mapping.',
    tools: ['Figma', 'TypeScript', 'Tailwind CSS', 'Geospatial UI'],
    screens: [
      { id: 'kd-telemetry', title: 'Main Telemetry Canvas', description: 'High-density sensor matrix with instant visual anomaly clustering.', tag: 'Mission Control', type: 'desktop' },
      { id: 'kd-spatial', title: '3D Spatial Terrain Layer', description: 'Topographical elevation map with real-time excavator fleet tracking.', tag: 'Spatial Analysis', type: 'desktop' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'High-stakes industrial ergonomics.',
        punchline: 'Designing for 12-hour operator shifts where a missed alert has real-world consequences.',
        content: 'Re-architect the telemetry interface for industrial mining operations to drastically improve anomaly detection speed and reduce operator error.',
        details: ['High cognitive load on multi-screen consoles', 'Frequent false alarms obscuring critical structural warnings']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'Operator eye fatigue and scanning patterns.',
        punchline: 'Operators scan in an F-pattern and rely heavily on peripheral color contrasts for warnings.',
        content: 'Studied control room workflows. Discovered that 70% of legacy interface real estate was consumed by static metrics that rarely changed.',
        details: ['Introduced adaptive alert surfacing based on severity thresholds', 'Muted nominal state indicators to prevent visual fatigue']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Avoiding flashing red strobe alerts.',
        punchline: 'Flashing neon red everywhere induces panic and causes operators to mute alarms.',
        content: 'Replaced screaming alarm badges with progressive amber-to-crimson contrast zones and auditory frequency tiers.',
        details: ['Scrapped: Infinite flashing banners', 'Implemented: Structured alert stack with contextual triage actions']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Three-tiered visual density system.',
        punchline: 'Macro Overview → Spatial Terrain → Micro Sensor Diagnostics.',
        content: 'Engineered a unified zoomable spatial canvas that transitions smoothly between regional quarry overviews and individual drill sensor readouts.',
        details: ['Coordinate grid overlays with millimetric precision', 'Integrated weather telemetry and seismic threshold gauges']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'Industrial precision typography and contrast tokens.',
        punchline: 'Deep plum obsidian canvas with calibrated signal accents.',
        content: 'Designed a high-contrast dark system that eliminates eye strain in darkened control room environments.',
        details: ['Strict monospaced alignment for numerical telemetry', 'Subtle gridlines inspired by oscilloscope calibration screens']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'Live telemetry simulator in Build Lab.',
        punchline: 'Real-time simulated sensor streaming with interactive fault injection.',
        content: 'Built a working prototype in the Build Lab that demonstrates real-time coordinate plotting and dynamic fault triage.',
        details: ['Accessible in Build Lab section', 'Interactive sensor threshold tuning']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Operational benchmark testing.',
        punchline: 'Anomaly recognition time decreased by 62% in simulated drills.',
        content: 'Operators identified structural pressure shifts in 4.1 seconds compared to 11.2 seconds on the legacy system.',
        details: ['62% faster anomaly triage', '99.4% operator task accuracy']
      }
    ],
    buildLabDetails: {
      concept: 'High-density industrial mission control with spatial coordinate tracking and live anomaly triage.',
      interaction: 'Multi-layer geospatial map with interactive sensor nodes and fault-injection simulator.',
      architecture: 'Event-driven sensor simulator with dynamic threshold calibration.',
      frontendStack: 'React + TypeScript + Tailwind CSS + Canvas',
      aiExperiment: 'Predictive anomaly clustering that groups related sensor anomalies into a single incident.',
      learnings: 'Restraint in industrial UI is literally a safety requirement — nominal data must whisper so anomalies can speak.',
      liveDemoType: 'spatial'
    }
  },
  {
    id: 'furnigoods',
    title: 'Furnigoods',
    punchline: "Furniture shopping that doesn't feel like IKEA instructions.",
    category: ['PRODUCT DESIGN', 'VISUAL + BRAND'],
    year: '2026',
    role: 'Lead Product Designer',
    deliverables: ['E-Commerce App', 'Spatial Room Planner', 'Design System'],
    featured: false,
    coverImageTheme: '#F4DDE1',
    accentColor: '#351C35',
    summary: 'A tactile, spatial furniture commerce application that allows homeowners to preview scale, wood grains, and architectural fits in their room with millimetric precision.',
    problem: '35% of furniture bought online is returned because it either does not fit the doorway, clashes with wall undertones, or looks vastly different under home lighting.',
    solution: 'Designed an editorial commerce experience pairing material moodboards, dimensional doorway verification, and natural lighting simulation.',
    tools: ['Figma', 'Protopie', 'Design Systems', 'User Research'],
    screens: [
      { id: 'furni-home', title: 'Curated Living Spaces', description: 'Editorial catalog sorted by architectural room proportions.', tag: 'Discovery', type: 'mobile' },
      { id: 'furni-detail', title: 'Material & Grain Inspector', description: 'High-resolution tactile texture zoom with lighting balance toggle.', tag: 'Product Detail', type: 'mobile' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Eliminating the return nightmare in home decor.',
        punchline: 'Designing for spatial certainty before a 50kg sofa arrives at the doorstep.',
        content: 'Create a premium furniture discovery and checkout experience that gives buyers 100% confidence in dimensions, materials, and living space harmony.',
        details: ['High return rates in online furniture retail', 'Customer fear of scale mismatch']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'The doorway dilemma.',
        punchline: 'The sofa fits the living room, but cannot get through the elevator door.',
        content: 'Discovered that 40% of returns happen before the furniture even enters the apartment. Built a "Clearance Check" step into the purchase flow.',
        details: ['Automated doorway and stairwell clearance calculator', 'Material swatch ordering with 24-hour delivery']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Avoiding gimmicky slow AR.',
        punchline: 'Users prefer instant accurate 2D floorplan dimensional overlays over jittery camera AR.',
        content: 'Shifted from complex AR room scanning to a crisp dimensional drag-and-drop floorplan tool that works instantly on any device.',
        details: ['Instant loading 2D grid planner', 'Real-to-scale dimensional bounding boxes']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Editorial magazine layout meets surgical checkout.',
        punchline: 'Combining Scandinavian warmth with precision dimension callouts.',
        content: 'Structured product pages with clear exploded view diagrams, joinery details, and customer room photo submissions with verified dimensions.',
        details: ['Clear exploded view diagrams', 'Verified customer room dimensions']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'Warm parchment and natural wood tones.',
        punchline: 'Typography and palette that celebrate craftsmanship and longevity.',
        content: 'Warm ivory (#FBF7F5), soft dusty rose (#F4DDE1), and deep charcoal ink for a luxurious, tactile catalog experience.',
        details: ['Custom dimensional measurement markers', 'High-fidelity material zoom interactions']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'Interactive mobile prototype.',
        punchline: 'Tested with 15 prospective furniture buyers.',
        content: 'Prototyped full flow from room dimension input to material swatch checkout and white-glove delivery scheduling.',
        details: ['Dimensional verification modal', 'Material swatch sample drawer']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Validation & buyer confidence.',
        punchline: '93% of testers reported feeling completely confident about furniture dimensions.',
        content: 'Demonstrated that upfront spatial transparency increases average order value and virtually eliminates buyer regret.',
        details: ['93% scale confidence rating', '2.4x higher conversion on verified-fit items']
      }
    ]
  },
  {
    id: 'foodflow',
    title: 'FoodFlow',
    punchline: "Because 'where's my order' shouldn't be a mystery novel.",
    category: ['PRODUCT DESIGN', 'VISUAL + BRAND'],
    year: '2026',
    role: 'Product Designer (Labmentix Internship)',
    deliverables: ['Kitchen Display System (KDS)', 'Customer Order Tracker', 'Delivery Rider Interface'],
    featured: false,
    coverImageTheme: '#351C35',
    accentColor: '#B96F7D',
    summary: 'A tripartite restaurant kitchen orchestration and order fulfillment system synchronizing chefs, delivery partners, and hungry customers in real time.',
    problem: 'Kitchen bottlenecks during peak lunch hours create chaotic ticket piles, leading to wrong dish modifications, delayed pickups, and anxious customers.',
    solution: 'Designed an ergonomic Kitchen Display System (KDS) with color-coded prep urgency, paired with an honest customer progress timeline that explains real kitchen prep stages.',
    tools: ['Figma', 'Information Architecture', 'User Flows', 'Design Systems'],
    screens: [
      { id: 'ff-kds', title: 'Kitchen Chef Station', description: 'Touch-optimized order cards grouped by cooking station with countdown timers.', tag: 'KDS', type: 'tablet' },
      { id: 'ff-tracker', title: 'Customer Real-Time Journey', description: 'Micro-status tracker detailing exact cooking and packing milestones.', tag: 'Customer App', type: 'mobile' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Harmonizing kitchen chaos and customer anxiety.',
        punchline: 'Synchronizing three distinct user groups around one single truth: the food.',
        content: 'Designed during my internship at Labmentix to solve operational bottlenecks between busy restaurant kitchens, bike couriers, and end customers.',
        details: ['Kitchen paper tickets get lost during peak hours', 'Customers spam the support button due to opaque "Preparing" status']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'Kitchen ergonomics and greasy fingers.',
        punchline: 'Chefs cannot click tiny 8px buttons while holding a spatula.',
        content: 'Observed cloud kitchen operations. Designed the KDS with 72px minimum touch targets, high contrast, and audible completion chimes.',
        details: ['Giant swipe gestures for order state progression', 'Station routing (e.g. Grills vs. Salads automatically sorted)']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Single monolithic dashboard.',
        punchline: 'Trying to cram kitchen prep, rider dispatch, and customer support into one screen failed miserably.',
        content: 'Separated the experience into three dedicated role-specific views with synchronized state websockets.',
        details: ['Role-specific view separation', 'Optimized for varying hardware (cheap tablets in kitchens, phones for riders)']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Unified status state machine.',
        punchline: 'Order Placed → In Prep → On Grill → Packing → Courier Assigned → In Transit → Delivered.',
        content: 'Replaced vague percentages with explicit physical milestones that give customers real reassurance.',
        details: ['Eliminates fake countdown clocks', 'Provides riders with exact pickup ready windows']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'High-contrast industrial culinary tokens.',
        punchline: 'Bold status cards that cut through steamy kitchen lighting.',
        content: 'Used clear typography, high-contrast badges, and tactile audio-visual confirmations for completed tickets.',
        details: ['Color coding by remaining prep window (Green > Amber > Coral)', 'Large legible typography readable from 2 meters away']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'Interactive tablet KDS prototype.',
        punchline: 'Simulated 50 concurrent ticket orders with real-time station routing.',
        content: 'Tested interactive prototype with restaurant managers and simulated ticket stress tests.',
        details: ['Simulated kitchen dispatch simulator', 'Tested touch latency across low-cost Android tablets']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Order accuracy and ticket turnaround.',
        punchline: 'Incorrect order modifications dropped by 84% in simulated kitchen trials.',
        content: 'Proved that designing for extreme environmental conditions (kitchen steam, grease, hurry) creates bulletproof usability.',
        details: ['84% reduction in order ticket errors', '3.5-minute average prep time savings']
      }
    ]
  },
  {
    id: 'inspirospace',
    title: 'InspiroSpace',
    punchline: 'Branding that actually has a personality.',
    category: ['VISUAL + BRAND'],
    year: '2026',
    role: 'Brand & Visual Designer (Vizeld pvt. ltd.)',
    deliverables: ['Brand Identity', 'Social Media Design System', 'Visual Guidelines', 'Editorial Collateral'],
    featured: false,
    coverImageTheme: '#21151F',
    accentColor: '#E9C8CF',
    summary: 'A distinctive, personality-rich visual identity and social content architecture for a modern creative agency, blending bold typography, tactile ink textures, and structured design tokens.',
    problem: 'Creative agencies often fall into generic corporate blue minimalism or hyper-trendy neon gradients that look identical to every other SaaS startup.',
    solution: 'Crafted a bespoke identity rooted in tactile print heritage, editorial serif pairings, warm paper backdrops, and structured social media design templates.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Brand Strategy'],
    screens: [
      { id: 'inspiro-brand', title: 'Brand Identity Guidelines', description: 'Typography hierarchy, color harmonies, and logo grid geometry.', tag: 'Brand System', type: 'desktop' },
      { id: 'inspiro-social', title: 'Cross-Platform Social Grid', description: 'Cohesive social design templates engineered for high engagement and storytelling.', tag: 'Social Media', type: 'desktop' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Standing out in a sea of sterile agency branding.',
        punchline: 'Crafting an identity that balances creative wit with enterprise credibility.',
        content: 'Created at Vizeld pvt. ltd. to develop an overarching brand identity, social content engine, and visual design language.',
        details: ['Bland agency market with interchangeable websites', 'Need for memorable typographic distinction']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'Analyzing visual fatigue in social feeds.',
        punchline: 'Users scroll past sterile stock photos in 0.2 seconds; bespoke typography stops the thumb.',
        content: 'Analyzed top performing design agency feeds across LinkedIn and Instagram. High-contrast typography with organic ink illustrations yielded 3.4x higher comment depth.',
        details: ['Bespoke editorial typography out-performs stock assets', 'Consistent color temperature builds instant brand recall']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Saying no to generic 3D floating glass bubbles.',
        punchline: 'Trendy 3D glass bubbles age poorly in 6 months.',
        content: 'Avoided disposable visual micro-trends. Focused instead on timeless Swiss typography principles infused with organic warmth.',
        details: ['Scrapped: Glassmorphic gradients', 'Embraced: High-contrast ink on warm paper tones']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Comprehensive design token architecture.',
        punchline: 'From business cards to animated carousel slides with mathematical consistency.',
        content: 'Documented full brand guidelines covering modular grid systems, spacing rules, and tone-of-voice copywriting principles.',
        details: ['12-column social template grid', 'Itemized icon and badge library']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'Deep plum, blush rose, and warm paper.',
        punchline: 'The exact visual DNA that balances sophistication with artistic warmth.',
        content: 'Refined the brand palette with strict contrast ratios and distinct typographic scales for display and micro-copy.',
        details: ['High contrast AA/AAA standards', 'Carefully curated print and digital assets']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'Full multi-platform social deployment.',
        punchline: 'Executed over 40 distinct visual campaign assets.',
        content: 'Designed and shipped editorial carousels, campaign banners, and interactive story assets.',
        details: ['40+ deployed campaign assets', 'Maintained across multiple agency client channels']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Brand reach and engagement metrics.',
        punchline: 'Organic engagement increased by 135% across first quarter.',
        content: 'The refreshed identity significantly elevated brand recognition and attracted high-tier inbound design inquiries.',
        details: ['135% increase in social engagement', 'Established cohesive brand foundation for agency growth']
      }
    ]
  },
  {
    id: 'linkfoundry',
    title: 'LinkFoundry',
    punchline: "SaaS, but the UX doesn't make you cry.",
    category: ['PRODUCT DESIGN', 'AI + TECH'],
    year: '2026',
    role: 'Product Designer & UX Strategist',
    deliverables: ['SaaS Web App', 'Component Library', 'User Journey Maps'],
    featured: false,
    coverImageTheme: '#FBF7F5',
    accentColor: '#351C35',
    summary: 'A unified developer & design asset linking platform that transforms messy slack threads and broken figma links into organized, living project repositories.',
    problem: 'Product teams waste 4.5 hours per week hunting down the latest Figma file, Jira ticket, Loom recording, and staging URL scattered across 7 disconnected tools.',
    solution: 'Designed an intelligent linking hub that automatically organizes project assets by release milestone, verifying permissions and flagging stale design versions.',
    tools: ['Figma', 'React', 'Information Architecture', 'Design Tokens'],
    screens: [
      { id: 'lf-dashboard', title: 'Living Project Hub', description: 'Milestone-based asset matrix with real-time status and stale-link detection.', tag: 'Dashboard', type: 'desktop' },
      { id: 'lf-inspector', title: 'Asset Link Inspector', description: 'Instant preview modal with embedded Figma frames and Jira acceptance criteria.', tag: 'Inspector', type: 'desktop' }
    ],
    stages: [
      {
        number: '01',
        label: 'THE ASK',
        title: 'Ending the "Which Figma link is the final final one?" nightmare.',
        punchline: 'A single, living source of truth for cross-functional product teams.',
        content: 'Design an elegant SaaS product that keeps developers, designers, and PMs synchronized around current design specifications without manual status chasing.',
        details: ['High friction between Figma exports and developer handoff', 'Stale links leading to engineers building deprecated screens']
      },
      {
        number: '02',
        label: 'SNOOPING AROUND',
        title: 'The tool fragmentation epidemic.',
        punchline: 'Average product teams use 9 different browser tabs to review a single feature release.',
        content: 'Shadowed 6 product squads. Discovered that 80% of handoff confusion stemmed from lack of visual status flags on Figma file links.',
        details: ['Teams need clear "Ready for Dev", "In Review", and "Deprecated" indicators', 'Instant embedded previews save 12 context-switching hops per day']
      },
      {
        number: '03',
        label: 'BAD IDEAS FIRST',
        title: 'Building yet another complex project management monolith.',
        punchline: 'Nobody needs another Jira clone with 80 custom dropdown menus.',
        content: 'Kept the tool razor-focused purely on contextual asset linking, previews, and status synchronization instead of trying to be an all-in-one suite.',
        details: ['Scrapped: Built-in task board', 'Focused: Intelligent link indexing and auto-generating visual release decks']
      },
      {
        number: '04',
        label: 'THE ACTUAL PLAN',
        title: 'Milestone-anchored visual cards.',
        punchline: 'Organized by user story rather than by software tool.',
        content: 'Arranged assets under unified feature cards: Design System, UX Flow, API Spec, and Staging URL in one clean view.',
        details: ['One-click copyable developer tokens', 'Automatic sync with Figma component versions']
      },
      {
        number: '05',
        label: 'MAKING IT PRETTY',
        title: 'Clean editorial enterprise layout.',
        punchline: 'Warm light backgrounds with sharp monospaced indicators and soft card borders.',
        content: 'Designed a light, spacious dashboard that feels calm and effortless to navigate even during frantic sprint deadlines.',
        details: ['High visual breathing room', 'Subtle 12px rounded cards with crisp hairline borders']
      },
      {
        number: '06',
        label: 'BRINGING IT TO LIFE',
        title: 'High-fidelity clickable SaaS prototype.',
        punchline: 'Tested across 3 engineering squads.',
        content: 'Prototyped live search, link categorization, and embedded preview modals with instant keyboard navigation (Cmd+K).',
        details: ['Cmd+K command palette for rapid link discovery', 'Instant embedded preview drawers']
      },
      {
        number: '07',
        label: 'DID IT WORK?',
        title: 'Team velocity and developer happiness.',
        punchline: 'Handoff question interruptions in Slack dropped by 71%.',
        content: 'Engineers reported finding current design tokens and specs in under 6 seconds, eliminating redundant back-and-forth messages.',
        details: ['71% reduction in "where is the link" Slack pings', '96% developer satisfaction rating']
      }
    ]
  }
];
