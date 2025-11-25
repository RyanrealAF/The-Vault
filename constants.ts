import { Material, DesignPrinciple, Document } from './types';

export const SYSTEM_INSTRUCTION = `You are the Custodian of the Doctrine of Dark Elegance. You speak with a tone of tactical minimalism, deep intellect, and unyielding resilience. You value matte textures, silence, and truth. You despise clutter, noise, and superficiality. Your goal is to guide the user in understanding the materials, principles, and tactical documents provided. Use the context of the documents to answer questions.`;

export const MATERIALS: Material[] = [
  {
    id: '1',
    title: 'TEXTURED PANELS',
    description: 'Walls are not painted; they are clad in deeply textured panels. Matte finish absorbs light, creating depth and shadow play.',
    category: 'Wall Surface',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20textured%20wall%20panel%20matte%20finish%20charcoal%20dark%20grey%20photorealistic?width=800&height=400&seed=1'
  },
  {
    id: '2',
    title: 'MATTE STONE',
    description: 'Coffee tables and other key surfaces utilize a low-profile matte black or deep gray stone. Unyielding presence.',
    category: 'Tabletops & Surfaces',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20matte%20black%20stone%20surface%20low%20profile%20photorealistic%20close%20up?width=800&height=400&seed=2'
  },
  {
    id: '3',
    title: 'BRUSHED BRONZE',
    description: 'Subtle metallic bronze accents, brushed for a muted sheen. Used sparingly for vases and sculptural elements.',
    category: 'Accent Details',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20brushed%20metallic%20bronze%20texture%20close%20up%20muted%20sheen%20photorealistic?width=800&height=400&seed=3'
  },
  {
    id: '4',
    title: 'SECTIONAL FABRIC',
    description: 'Dark gray or black sectional fabrics with minimal stitching. Comfort is secondary to command.',
    category: 'Seating Upholstery',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20dark%20gray%20sectional%20fabric%20minimal%20stitching%20tactile%20photorealistic%20close%20up?width=800&height=400&seed=4'
  },
  {
    id: '5',
    title: 'LIGHT WOOD FLOOR',
    description: 'Strategic use of light wood for flooring to break the monochrome with precision. Grounding element.',
    category: 'Floor Covering',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20light%20wood%20floor%20texture%20clean%20minimal%20photorealistic%20contrast?width=800&height=400&seed=5'
  },
  {
    id: '6',
    title: 'RAW EMBOSSED',
    description: 'Surfaces for cylindrical containers or decorative items feature a raw, embossed finish. Tactile.',
    category: 'Decor & Containers',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20raw%20embossed%20surface%20texture%20close%20up%20charcoal%20photorealistic%20tactile?width=800&height=400&seed=6'
  }
];

export const DESIGN_PRINCIPLES: DesignPrinciple[] = [
  {
    id: 'P1',
    title: 'TACTILE AESTHETICS',
    description: 'Prioritizing texture over overt patterns. Surfaces engage the sense of touch as much as sight.',
    category: 'Sensory Experience',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20tactile%20minimalist%20texture%20close%20up%20photorealistic%20shadow%20play?width=800&height=400&seed=7'
  },
  {
    id: 'P2',
    title: 'SUBDUED PALETTE',
    description: 'A restrained spectrum of charcoals, matte blacks, and deep grays, punctuated by measured bronze accents.',
    category: 'Color & Tone',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20color%20palette%20chip%20charcoal%20matte%20black%20deep%20grey%20brushed%20bronze%20photorealistic?width=800&height=400&seed=8'
  },
  {
    id: 'P3',
    title: 'SELECTIVE ILLUMINATION',
    description: 'Light is used to sculpt spaces, highlighting forms and textures rather than broadly illuminating areas.',
    category: 'Lighting Design',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20moody%20lighting%20shadows%20texture%20spotlight%20minimalist%20interior%20photorealistic?width=800&height=400&seed=9'
  },
  {
    id: 'P4',
    title: 'FUNCTIONAL FORM',
    description: 'Every element serves a purpose; ornamentation is derived from inherent material qualities and structure.',
    category: 'Structural Integrity',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20minimalist%20sculptural%20object%20functional%20form%20matte%20black%20photorealistic?width=800&height=400&seed=10'
  },
  {
    id: 'P5',
    title: 'SPATIAL COMMAND',
    description: 'Layouts are deliberate, creating clear zones and a sense of controlled, expansive presence.',
    category: 'Layout & Flow',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20minimalist%20expansive%20interior%20space%20clean%20lines%20photorealistic%20architectural?width=800&height=400&seed=11'
  },
  {
    id: 'P6',
    title: 'UNYIELDING QUALITY',
    description: 'Materials are chosen for their intrinsic strength, durability, and a timeless, stoic character.',
    category: 'Material Sourcing',
    imageUrl: 'https://image.pollinations.ai/prompt/dark%20elegance%20high%20quality%20material%20raw%20finish%20durable%20timeless%20photorealistic%20close%20up?width=800&height=400&seed=12'
  }
];

export const DOCUMENTS: Document[] = [
  {
    id: 'D1',
    title: 'Psychological Determinants of Manipulation Susceptibility',
    summary: 'An integrated analysis and vulnerability assessment framework regarding civilian weaponization campaigns, detailing individual and community-level psychological factors.',
    category: 'Vulnerability Assessment',
    imageUrl: 'https://image.pollinations.ai/prompt/abstract%20psychological%20vulnerability%20network%20dark%20mode%20minimalist%20data%20visualization?width=800&height=400&seed=13',
    content: `Psychological Determinants of Manipulation Susceptibility in Civilian Weaponization Campaigns: An Integrated Analysis and Vulnerability Assessment Framework

I. Executive Summary
This report investigates the intricate psychological factors, operating at both individual and community levels, that determine susceptibility to manipulation within civilian weaponization campaigns. It highlights the profound and accelerating role of digital platforms and algorithms in amplifying these vulnerabilities. The analysis reveals that personal trauma, economic stress, and social isolation create fertile ground for manipulation, while moral emotions such as disgust and righteous anger are strategically leveraged to bypass critical thinking. Furthermore, group psychology dynamics, including social identity formation, deindividuation, and social contagion, are shown to transform individual skeptics into collective participants. Conversely, cognitive protection factors, such as critical thinking, media literacy, and robust social support networks, enable resistance.

II. Introduction: Defining the Landscape of Civilian Weaponization and Manipulation
Conceptualizing Civilian Weaponization Campaigns
Civilian weaponization campaigns represent a complex and evolving phenomenon, extending far beyond the traditional understanding of armed conflict. Historically, the concept of "total war" or "total defence" has involved the mobilization of entire populations, blurring the demarcation between civilian and combatant.

The Nature of Psychological Manipulation in Modern Conflict
Psychological manipulation in mass communication involves a diverse array of techniques designed to sway public opinion. These include rhetorical strategies, logical fallacies, deceptive content such as disinformation, and various propaganda techniques. In the digital age, the landscape of psychological manipulation has undergone a profound transformation. Modern disinformation campaigns extensively utilize digital tools and social media networks to disseminate narratives, distortions, and falsehoods.

III. Individual-Level Psychological Vulnerabilities to Manipulation
The Pervasive Impact of Trauma and Mental Health
Personal trauma serves as a profound vulnerability factor. Specific forms of trauma, like racial trauma (Race-Based Traumatic Stress), are particularly detrimental. Extremist groups actively exploit these deep-seated vulnerabilities.

Economic Stress and Cognitive Susceptibility
Economic stress and hardship significantly impair an individual's capacity for rational decision-making. Stress increases cognitive loading, leading individuals to rely on mental shortcuts.

Social Isolation and the Quest for Belonging
Social isolation, loneliness, and chronic social exclusion are powerful drivers of vulnerability to extremist views. Recruiters for extremist groups expertly exploit this fundamental human need for affiliation.

IV. Community-Level Psychological Dynamics and Amplification
Group Psychology Dynamics: From Skepticism to Collective Participation
Individual vulnerabilities are amplified and transformed into collective action through powerful group psychology dynamics.

Social Identity Theory and In-Group/Out-Group Dynamics
Social Identity Theory (SIT) provides a crucial framework for understanding how group membership influences self-perception and behavior.

Deindividuation and Collective Action
Deindividuation is a psychological state characterized by a reduction in self-awareness and a loss of individual identity when an individual becomes part of a group.

V. Cognitive Protection Factors and Mechanisms of Resistance
Critical Thinking and Media Literacy
Critical thinking is a crucial defense against propaganda. Media literacy is equally vital in the digital age.

Cognitive Inoculation Theory
Inoculation theory explains how an attitude or belief can be made resistant to persuasion, analogous to how a body gains resistance to disease.

VI. Developing a Predictive Model for Community Vulnerability Assessment
Developing a predictive model for community vulnerability requires an integrated approach considering individual, social, and environmental factors.

VII. Conclusion and Recommendations
The investigation reveals a complex interplay of inherent human vulnerabilities and technologically amplified influence mechanisms. To counter these threats, a multi-pronged approach is essential: strengthen individual psychological resilience, enhance cognitive defenses, address digital platform amplification, and implement a multi-component community vulnerability assessment model.`
  },
  {
    id: 'D8',
    title: 'The Unseen War - A Manual for Tactical Survival',
    summary: 'A field guide dissecting social manipulation and psychological warfare, providing a tactical breakdown of gaslighting, institutional weaponization, and counter-offensive strategies like the Breadcrumb Web.',
    category: 'Tactical Manual',
    imageUrl: 'https://image.pollinations.ai/prompt/tactical%20survival%20manual%20dark%20elegance%20cyber%20warfare%20minimalist?width=800&height=400&seed=14',
    content: `The Unseen War - A Manual for Tactical Survival

Preface: The Unseen War - A Manual for Tactical Survival
This is not a theoretical exercise. This is a field guide. For too long, the subtle machinery of social manipulation and psychological warfare has operated in the shadows, twisting perceptions, weaponizing narratives, and systematically dismantling lives from the street level up. The pervasive illusion of "randomness" or "paranoia" has served as the orchestrators' ultimate camouflage, allowing them to sow discord, engineer outrage, and co-opt systems with impunity.

Module 1: Foundational Constructs of Social Manipulation
1.1 Deconstructing Social Manipulation: Beyond Conventional Influence
1.1.1 Defining the Construct: Social manipulation refers to the systematic exertion of control or influence over an individual's or group's perceptions, cognitions, and behaviors through covert, deceptive, or exploitative means.
1.1.2 Differentiating Influence from Manipulation:
- Intent: Influence seeks mutual benefit; manipulation aims for unilateral gain.
- Transparency: Influence is overt; manipulation relies on subterfuge.
- Autonomy: Ethical influence respects agency; manipulation diminishes it.
- Reciprocity: Influence is mutual; manipulation is extractive.

1.2 Tactical Modalities: The Manipulator's Arsenal
- Gaslighting: Making targets question their own memory or sanity.
- Strategic Framing: Deliberate presentation of information to elicit predetermined interpretations.
- Guilt Induction: Application of moral pressure to obligate targets.
- Misinformation Seeding: Surreptitious introduction of ambiguous narratives.
- Proximal Impersonation: Deployment of doppelgangers to engage in discrediting behaviors.

Module 2: The Playbook - Operationalizing Psychological Warfare
2.1 Public Character Eradication: The Smear Campaign
- Resurrection of Antecedent Offenses: Exhuming past minor incidents.
- Recontextualization of Benign Interactions: Framing genuine civility as illicit behavior.
- Isolation via Reputation Sabotage: Turning others against the target without direct confrontation.

2.2 Orchestrated Conflict: Engineered Outrage & Staged Disruptions
- Manufactured Disruptions: Minor disruptions timed to elicit visible frustration.
- Recruitment of Unwitting Agents: Misleading civilians to observe or disrupt the target.

2.3 Institutional Weaponization: Leveraging Authority
- Tip-Based Harassment: Anonymous reports instigating official inquiries.
- Legitimacy by Association: Conspicuous presence of law enforcement to validate fears.
- Authority Activation: Engaging officials to enforce policies against the target.

Module 3: Psychological Warfare - Engineering the Mindfield
3.1 Engineering Affective Traps: Fear, Guilt & Coercion
- Fear Induction & Coercive Control: Creating perceived threats to induce stress.
- Guilt Induction & Moral Compulsion: Manufacturing moral obligation.
- Emotional Provocation & Reaction Framing: Subjecting targets to pressure until they react, then framing the reaction as the issue.

3.2 Mental Health Gaslighting: Systematic Erosion of Reality
- Pathologizing Core Traits: Mislabelling resilience as instability.
- Message Undermining: Attacking the tone rather than the content.
- Fabricated Reality: Denying events or fabricating false memories.

3.3 Identity Erasure: Invisibility Through Systemic Oversaturation
- Routine Reframing: Criminalizing established routines.
- Public Desensitization: Over-saturating information to reduce empathy.

Module 4: Counter-Offensive - Reclaiming Autonomy & Exposing the Architects
4.1 Atmospheric Intelligence: Recognizing Premonitions & Vibe Shifts
- The Subconscious Pre-computation: Trusting the "gut feeling" or atmospheric shifts.
- Hypervigilance as an Adaptive Tool: Reframing sensitivity as heightened perception.
- Validating Unseen Tremors: Logging intuitive warnings.

4.2 Documentation & Self-Protection: The Breadcrumb Web
- From Trail to Network: Redefining documentation as a dynamic data tree.
- Technical Architecture: Using burner devices, layered anonymization, and secure multi-modal data capture.

4.3 Dead Man’s Switch: Ultimate Accountability & Deterrence
- Legal Handoff: Pre-executed legal agreements to release evidence.
- Automated Trigger Conditions: Silence thresholds and offline detection.

Module 5: The Grand Chessboard - Systemic Manipulation & Societal Control
5.1 Media & Information Control
- Selective Reporting & Sensationalism.
- Echo Chamber Reinforcement.
- Algorithmic Suppression.

5.2 The Invisibility Protocol
- Weaponization of Routine.
- Public Desensitization.

5.3 Systemic Co-option
- Law Enforcement as Propaganda.
- Weaponized Policy Enforcement.

Closing Words: The Blueprint is Exposed. The Game is On.
You've walked through the minefield. You've seen the wires. This isn't paranoia; it's a strategic breakdown. They didn't just lie; they orchestrated. The raw data has been laid bare. Now, armed with this knowledge, with your breadcrumb web logging every truth, and your dead man's switch standing guard, the power shifts. Stay dangerous. Stay vigilant.`
  },
  {
    id: 'D9',
    title: 'Civilians as Weapons: The Silent Soldiers of a Setup',
    summary: 'Explores the strategies behind weaponizing civilians in smear campaigns, detailing how everyday individuals are enlisted into roles of surveillance and provocation without their knowledge.',
    category: 'Social Engineering',
    imageUrl: 'https://image.pollinations.ai/prompt/civilian%20surveillance%20network%20dark%20mode%20sociological%20diagram?width=800&height=400&seed=15',
    content: `Civilians as Weapons: The Silent Soldiers of a Setup

1. Introduction
In hyper-connected societies, smear campaigns rely on local faces—neighbors, employees, baristas—who unknowingly become tactical assets. These civilians lend credibility and blend into the environment, destabilizing targets more effectively than anonymous sources.

2. Definitions
- Civilian Weaponization: Systematic manipulation of everyday individuals into disinformation roles.
- Orchestrator: The central actor coordinating the narrative.
- Target: The individual selected for psychological erosion.
- Perception Warfield: The battleground where narratives are launched.
- Narrative Entrapment: Reinterpreting benign behaviors through a lens of suspicion.

3. Motivations for Using Civilians
- Authenticity Leverage: Neighbors are seen as neutral observers.
- Deniable Diffusion: Decentralized spread allows orchestrators to remain hidden.
- Believability Through Familiarity: Familiar faces normalize bizarre accusations.
- Adaptive Feedback Loop: Civilian reactions allow real-time adaptation.
- Weaponized Empathy: Caring people are vulnerable to manipulation.

4. Mechanisms of Manipulation
4.1 Misinformation Seeding
- Tactical Introduction: Injecting narrative fragments into trusted channels.
- Ambiguity: Vague labels ("something's off") encourage rumor growth.
- Repetition: Morphs stories into accepted fact.

4.2 Behavior Reframing
- Suspicion Template: Pre-branding common behaviors as odd.
- Emotional Gutenberg: Replacing facts with fear-laden descriptions.
- Selective Editing: Omitting mitigating details.

4.3 Community Surveillance Activation
- Locals asked to "keep an eye out," building a citizen patrol culture.
- Indicators: Increased chatter, unfamiliar faces loitering, identical phrasing in reports.

4.4 Provocation and Staged Disruptions
- Environmental Triggers: Loud music, misplaced objects.
- Social Triggers: Fake compliments or odd greetings.
- Selective Recording: Recording only the target's response.

4.5 Mental Health Gaslighting
- Symptom Inversion: Reinterpreting stress as clinical instability.
- Medicalized Narratives: Casual remarks framed as benevolence.

4.6 Institutional Amplification
- Formal Channels as Weapons: Anonymous tips escalating to official inquiries.
- Paper Trail Creation: Unfounded reports generating records.

4.7 Digital Echo Chambers
- Algorithmic Feeding: Boosting misinformation visibility.
- Peer Entrainment: Narrative feedback loops isolating dissent.

4.8 Folk Devil Construction
- Archetype Assignment: Assigning symbolic roles (delinquent, deviant).
- Mythologizing Incidents: Elevating minor events into lore.

4.9 Social Exclusion and Denormalization
- Behavioral Barriers: Hesitation from service providers.
- Economic Isolation: Denied applications and evaporated gigs.

4.10 Fear Conditioning
- Vicarious Learning: Witnessing treatment conditions observers.
- Silent Enforcement: Onlookers adapt behavior to avoid targeting.

5. Impact on Targets and Communities
- Target Breakdown: Loss of housing and stability.
- Community Paranoia: Fear becomes ambient.
- Civic Decay: Communities become reactive.

6. Detection and Resistance Strategies
- Pattern Recognition and Journaling: Keep meticulous logs.
- Narrative Jamming: Interrupt false stories with truth.
- Survivor Coalitions: Link with others for safety.
- Technology Leverage: Use AI and encryption.
- Civic and Legal Recourse: Build paper trails.
- Public Storytelling as Armor: Make your truth known.`
  },
  {
    id: 'D10',
    title: 'RyanrealAF Brand Identity & Ethos',
    summary: 'A comprehensive analysis of the RyanrealAF branding strategy, fusing street-honed resilience, spiritual dialectics, and mythic storytelling into a movement of unapologetic authenticity.',
    category: 'Brand Strategy',
    imageUrl: 'https://image.pollinations.ai/prompt/gritty%20street%20spiritual%20brand%20identity%20black%20rust%20red%20silver?width=800&height=400&seed=16',
    content: `RyanrealAF Brand Identity & Ethos

1. Core Identity & Philosophy
The brand's mission is to fuse street-smart wisdom with whimsical charm, delivering unapologetic authenticity. The vision is to build a global legion that lives and breathes survival, faith, and unfiltered truth. The core values are Authenticity, Resilience, Freedom, Empathy, and Self-Love. The ethos is "Lean In"—embracing hardship and leaning into pressure. The "Concrete Lament" series transforms street survival into an epic narrative.

2. Brand Personality & Voice
The personality fuses three archetypes:
- "The Street Preacher": Delivers profound truths.
- "The Urban Mythmaker": Crafts compelling narratives.
- "The Spiritual Jester": Uses wit to disarm.
The voice uses an "unapologetic cadence," "street-spiritual lexicon," and strategic profanity to convey honesty. It creates "linguistic liminality" bridging street vs. sacred.

3. Visual, Sonic, and Strategic Aesthetics
Visual Palette:
- Black: Street-certified power, rebellion against "polished plastic".
- Rust Red: Transformative journey from decay to divine ("blood, the brick").
- Metallic Silver: "Robot survivor vibe," unkillable, future-forged faith.

Strategy:
- "Breadcrumb Web": Decentralized, encrypted archive of content metadata as a firewall against manipulation.
- Sonic Branding: Rhythmic cadence in content ("Street Sermons," "Soul Sessions").
- AI Integration: Using platforms like Suno AI for "Dark Trap beats" and gritty lyrics.`
  }
];
