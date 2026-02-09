import TitleSlide from '../components/layouts/TitleSlide'
import SectionSlide from '../components/layouts/SectionSlide'
import ContentSlide from '../components/layouts/ContentSlide'
import QuoteSlide from '../components/layouts/QuoteSlide'
import ImageSlide from '../components/layouts/ImageSlide'
import ChartSlide from '../components/layouts/ChartSlide'
import ComparisonSlide from '../components/layouts/ComparisonSlide'
import BuildingBlockSlide from '../components/layouts/BuildingBlockSlide'
import DiagramSlide from '../components/layouts/DiagramSlide'
import DemoSlide from '../components/layouts/DemoSlide'
import AgentStackDiagram from '../components/diagrams/AgentStackDiagram'
import ChatbotVsAgentDiagram from '../components/diagrams/ChatbotVsAgentDiagram'
import ToolCallingDiagram from '../components/diagrams/ToolCallingDiagram'
import JCurveDiagram from '../components/diagrams/JCurveDiagram'
import OrchestrationDiagram from '../components/diagrams/OrchestrationDiagram'
import JackalBotDiagram from '../components/diagrams/JackalBotDiagram'

export const sections = [
  { title: 'Welcome', startSlide: 0 },
  { title: 'Survey', startSlide: 4 },
  { title: 'Theory', startSlide: 9 },
  { title: 'Practical', startSlide: 22 },
  { title: 'Close', startSlide: 30 },
]

export const slides = [
  // ============================================================
  // SECTION 1: Scene Setting & Agenda (Slides 0-3)
  // ============================================================

  // Slide 0: Title
  () => (
    <TitleSlide
      title="AI Agent Session"
      subtitle="Mander Beer & Learn"
      presenter="Thomas Paule"
      date="February 2026"
      brandLine="AI from the Inside"
    />
  ),

  // Slide 1: Why Are We Here?
  () => (
    <ContentSlide
      title="Why Are We Here?"
      accentWord="Here?"
      bullets={[
        { icon: '\u{1F4AC}', text: 'AI has moved from "chatbots" to "agents" \u2014 and most people haven\'t noticed' },
        { icon: '\u{1F30D}', text: 'Most people know ChatGPT \u2014 fewer know what\'s actually possible now' },
        { icon: '\u{1F3AF}', text: 'Tonight: demystify AI agents, show practical use cases, answer your questions' },
      ]}
      footnote="No prior AI experience required \u2014 we'll start from first principles."
    />
  ),

  // Slide 2: Tonight's Agenda
  () => (
    <ContentSlide
      title="Tonight's Agenda"
      accentWord="Agenda"
      bullets={[
        { icon: '\u{1F4CA}', heading: 'Your Feedback', text: '\u2014 what you told us you wanted' },
        { icon: '\u{1F9E0}', heading: 'Theory', text: '\u2014 WTF are AI Agents?' },
        { icon: '\u{1F6E0}\uFE0F', heading: 'Practical', text: '\u2014 Agents doing real work (demos!)' },
        { icon: '\u2753', heading: 'Questions', text: '\u2014 Open discussion' },
      ]}
    />
  ),

  // Slide 3: Rules of Engagement
  () => (
    <ContentSlide
      title="Rules of Engagement"
      accentWord="Engagement"
      bullets={[
        { icon: '\u270B', text: 'Raise your hand for questions \u2014 keeps things orderly' },
        { icon: '\u{1F37A}', text: 'Beers encouraged, heckling discouraged' },
        { icon: '\u{1F914}', text: 'No "dumb questions" \u2014 if you\'re thinking it, others are too' },
        { icon: '\u{1F4F1}', text: 'Feel free to follow along on your phone' },
      ]}
    />
  ),

  // ============================================================
  // SECTION 2: Survey Playback (Slides 4-8)
  // ============================================================

  // Slide 4: Section - Survey
  () => (
    <SectionSlide
      sectionNumber="1"
      title="We Asked, You Answered"
      subtitle="12 of you shared your thoughts \u2014 here's what we learned"
      icon={'\u{1F4CA}'}
    />
  ),

  // Slide 5: Experience Level
  () => (
    <ChartSlide
      title="Your Experience Level"
      subtitle="Survey Results"
      pie={[
        { value: 42, color: '#ec4899' },
        { value: 58, color: 'rgba(236,72,153,0.3)' },
      ]}
      legend={[
        { label: '42% Daily Users \u2014 AI integral to workflow', color: '#ec4899' },
        { label: '58% Occasional Users \u2014 still exploring', color: 'rgba(236,72,153,0.3)' },
      ]}
      bars={[
        { label: 'Daily Users', value: 42, icon: '\u{1F525}' },
        { label: 'Occasional Users', value: 58, icon: '\u{1F4AD}' },
        { label: 'Complete Beginners', value: 0, icon: '\u{1F476}' },
      ]}
      message="We'll make sure tonight works for both groups"
    />
  ),

  // Slide 6: Top Concerns
  () => (
    <ChartSlide
      title="Your Top Concerns"
      subtitle="What worries you about AI"
      bars={[
        { label: 'Data Privacy & Security', value: 58, icon: '\u{1F512}' },
        { label: 'Accuracy (Hallucinations)', value: 50, icon: '\u{1F3AF}' },
        { label: 'Not Knowing Where to Start', value: 50, icon: '\u{1F937}' },
        { label: 'Cost / Subscriptions', value: 33, icon: '\u{1F4B0}' },
      ]}
      message="We heard you \u2014 we'll address all of these tonight"
    />
  ),

  // Slide 7: Pain Points
  () => (
    <ContentSlide
      title="Tasks That Should Be Easier"
      subtitle="Your Pain Points"
      accentWord="Easier"
      bullets={[
        { icon: '\u{1F4E7}', heading: 'Email management', text: '\u2014 #1 pain point across the group' },
        { icon: '\u{1F4CA}', heading: 'Data reporting', text: '\u2014 weekly insights and analysis' },
        { icon: '\u{1F504}', heading: '"Copying and pasting into GPT"', text: '\u2014 context loading tedium' },
        { icon: '\u{1F465}', heading: 'Client monitoring', text: '\u2014 touchpoints and follow-ups' },
      ]}
      footnote={'"I want to come to work and the report is sitting there waiting for me" \u2014 Survey Respondent'}
    />
  ),

  // Slide 8: What You Want
  () => (
    <ContentSlide
      title="What You Want From Tonight"
      subtitle="In Your Words"
      accentWord="Tonight"
      bullets={[
        { icon: '\u{1F4AC}', text: '"Is there a genuine AI agent I should be using TODAY?"' },
        { icon: '\u{1F4AC}', text: '"Practical steps to set up a usable AI stack"' },
        { icon: '\u{1F4AC}', text: '"How to build an agent in a secure environment"' },
        { icon: '\u{1F4AC}', text: '"Best tools and best way to use them"' },
      ]}
      footnote="Let's answer these questions."
    />
  ),

  // ============================================================
  // SECTION 3: Theory \u2014 WTF Are AI Agents? (Slides 9-21)
  // ============================================================

  // Slide 9: Section - Theory
  () => (
    <SectionSlide
      sectionNumber="2"
      title="WTF Are AI Agents?"
      subtitle="The Seven Building Blocks"
      icon={'\u{1F9E0}'}
    />
  ),

  // Slide 10: Seven Building Blocks Overview
  () => (
    <DiagramSlide
      title="The Seven Building Blocks"
      subtitle="Agent Architecture"
      message="Master these seven, and you understand agents."
    >
      <AgentStackDiagram />
    </DiagramSlide>
  ),

  // Slide 11: Building Block 1 - Model
  () => (
    <BuildingBlockSlide
      number="1"
      icon={'\u{1F9E0}'}
      title="Model"
      subtitle="The underlying AI that reasons and generates"
      keyInsight="Not every task needs the most powerful model \u2014 sometimes fast and cheap beats slow and brilliant."
      details={[
        'Determines raw intelligence, speed, and cost',
        'From single-turn Q&A to multi-step reasoning',
        'The brain that powers everything else',
      ]}
      example="Claude Opus for complex financial analysis vs. Claude Haiku for simple transaction categorisation."
    />
  ),

  // Slide 12: Building Block 2 - Instructions
  () => (
    <BuildingBlockSlide
      number="2"
      icon={'\u{1F4CB}'}
      title="Instructions"
      subtitle="Who the agent is and how it behaves"
      keyInsight="Without clear instructions, an agent is generic. With well-crafted instructions, it becomes a specialist."
      details={[
        'Persistent definitions that don\'t change between tasks',
        'The agent\'s personality, standards, and guardrails',
        'Identity, tone, boundaries, and escalation rules',
      ]}
      example="You are a senior financial controller. Be precise and conservative. Always flag discrepancies over $500. Never auto-approve payments above $10,000."
    />
  ),

  // Slide 13: Building Block 3 - Skills (with Matrix image)
  () => (
    <ImageSlide
      title="Skills \u2014 The Learned Capabilities"
      subtitle="Building Block 3"
      imageSrc="/image-003.png"
      imageAlt="Matrix - I Know Kung Fu"
      caption="Skills define what the agent knows how to do \u2014 not just what it has access to. Like uploading kung fu to Neo's brain."
      overlay="bg-gradient-to-t from-surface via-surface/80 to-surface/40"
    />
  ),

  // Slide 14: Skills vs Tools
  () => (
    <ComparisonSlide
      title="Skills vs Tools"
      subtitle="The Critical Difference"
      left={{
        title: 'Skills',
        icon: '\u26A1',
        items: [
          { icon: '\u{2192}', text: 'HOW to do something' },
          { icon: '\u{2192}', text: 'Judgment & process' },
          { icon: '\u{2192}', text: 'Expertise-based' },
          { icon: '\u{2192}', text: '"Know how to reconcile accounts"' },
        ],
      }}
      right={{
        title: 'Tools',
        icon: '\u{1F527}',
        items: [
          { icon: '\u{2192}', text: 'WHAT to interact with' },
          { icon: '\u{2192}', text: 'Single actions (verbs)' },
          { icon: '\u{2192}', text: 'Capability-based' },
          { icon: '\u{2192}', text: '"Can read a bank feed"' },
        ],
      }}
      message="Skills use Tools, but add judgment about when and how"
    />
  ),

  // Slide 15: Building Block 4 - Tools
  () => (
    <DiagramSlide
      title="Tools \u2014 The Actions"
      subtitle="Building Block 4"
      message="Tools are the verbs \u2014 each one does one thing."
    >
      <ToolCallingDiagram />
    </DiagramSlide>
  ),

  // Slide 16: Building Block 5 - Context
  () => (
    <BuildingBlockSlide
      number="5"
      icon={'\u{1F4E5}'}
      title="Context"
      subtitle="What's on the desk right now"
      keyInsight="Context solves the copy-paste problem. No more explaining the same thing every conversation."
      details={[
        'Dynamic, relevant information for THIS particular job',
        'Changes every time \u2014 makes the agent\'s work specific, not generic',
        'Sources: direct input, system integrations, document retrieval, real-time feeds',
      ]}
      example="Here's the client's chart of accounts, this month's 247 bank transactions, and their preference for cash-basis accounting."
    />
  ),

  // Slide 17: Building Block 6 - Memory
  () => (
    <BuildingBlockSlide
      number="6"
      icon={'\u{1F4BE}'}
      title="Memory"
      subtitle="What the agent retains across interactions"
      keyInsight="Memory turns every interaction from a cold start into a continuation."
      details={[
        'Builds familiarity, learns preferences, avoids repeating mistakes',
        'Short-term (this conversation) and long-term (across sessions)',
        'Enables personalisation and relationship-building over time',
      ]}
      example="Remembering that this client always miscodes contractor payments to 'office supplies,' so the agent proactively flags and reclassifies them."
    />
  ),

  // Slide 18: Building Block 7 - Orchestration
  () => (
    <DiagramSlide
      title="Orchestration \u2014 Planning & Sequencing"
      subtitle="Building Block 7"
      message="Orchestration is what turns a collection of capabilities into coherent work."
    >
      <OrchestrationDiagram />
    </DiagramSlide>
  ),

  // Slide 19: The Big Leap
  () => (
    <DiagramSlide
      title="The Big Leap"
      subtitle="From Chatbots to Agents"
      message="You're no longer the glue between prompts and outputs."
    >
      <ChatbotVsAgentDiagram />
    </DiagramSlide>
  ),

  // Slide 20: From Doers to Instructors
  () => (
    <ComparisonSlide
      title="From Doers to Instructors"
      subtitle="The Role of Humans"
      left={{
        title: 'Old Model',
        icon: '\u{1F4BC}',
        items: [
          { icon: '\u{2192}', text: 'You do the work, AI assists' },
          { icon: '\u{2192}', text: 'You manage every handoff' },
          { icon: '\u{2192}', text: 'You are the execution layer' },
          { icon: '\u{2192}', text: 'Value = doing' },
        ],
      }}
      right={{
        title: 'New Model',
        icon: '\u{1F680}',
        items: [
          { icon: '\u{2192}', text: 'AI does the work, you direct' },
          { icon: '\u{2192}', text: 'Clear, logical instruction (often by voice)' },
          { icon: '\u{2192}', text: 'You orchestrate AI agents' },
          { icon: '\u{2192}', text: 'Value = instructing' },
        ],
      }}
      message="AI went from Talkers to Doers. We're going from Doers to Instructors."
    />
  ),

  // Slide 21: Theory transition
  () => (
    <SectionSlide
      sectionNumber="\u2713"
      title="Theory Complete"
      subtitle="Now let's see it in action"
      icon={'\u{1F6E0}\uFE0F'}
    />
  ),

  // ============================================================
  // SECTION 4: Practical \u2014 Agents Doing Real Work (Slides 22-29)
  // ============================================================

  // Slide 22: Section - Practical
  () => (
    <SectionSlide
      sectionNumber="3"
      title="Agents Doing Real Work"
      subtitle="Live Demos & Practical Examples"
      icon={'\u{1F527}'}
    />
  ),

  // Slide 23: Why Claude (with meme)
  () => (
    <ImageSlide
      title="Why Claude?"
      subtitle="The Tech Stack"
      imageSrc="/image-005.png"
      imageAlt="Distracted boyfriend meme - Claude vs ChatGPT"
      caption="Better reasoning, better coding, better tool use. This is what we'll demo tonight."
      overlay="bg-gradient-to-t from-surface via-surface/70 to-surface/30"
    />
  ),

  // Slide 24: Demo 1 - Claude Code
  () => (
    <DemoSlide
      title="Claude Code"
      subtitle="Chain of thought, planning, and execution"
      steps={[
        'Create a prototype spec in GitHub',
        'Point the agent at it',
        'Watch it plan, reason, and build',
        'Review the completed output',
      ]}
      stat="26,000"
      statLabel="lines of code written overnight"
      message="I didn't write the code. I wrote the intent. The agent figured out the rest."
    />
  ),

  // Slide 25: Recursive Improvement
  () => (
    <DiagramSlide
      title="The Recursive Leap"
      subtitle="Improvements Are Compounding"
      message="We're on the steep part of the J-curve."
    >
      <JCurveDiagram />
    </DiagramSlide>
  ),

  // Slide 26: Demo 2 - Claude Cowork
  () => (
    <DemoSlide
      title="Claude Cowork"
      subtitle="Building this presentation"
      steps={[
        'Local folder with all context loaded',
        'Clear prompt instructions',
        'Watch the agent run its chain of thought',
        'Agent builds, tests, and delivers',
      ]}
      message="This presentation was built using the technique I'm about to show you."
    />
  ),

  // Slide 27: JackalBot intro (JARVIS image)
  () => (
    <ImageSlide
      title="Meet JackalBot"
      subtitle="Personal AI Agent"
      imageSrc="/image-001.png"
      imageAlt="Tony Stark JARVIS workshop"
      caption="What if you had your own JARVIS?"
      overlay="bg-gradient-to-t from-surface via-surface/60 to-surface/20"
    />
  ),

  // Slide 28: JackalBot Architecture
  () => (
    <DiagramSlide
      title="How JackalBot Works"
      subtitle="Architecture"
      message="Cloud-hosted on Digital Ocean \u2014 not on my local machine, for security."
    >
      <JackalBotDiagram />
    </DiagramSlide>
  ),

  // Slide 29: Security
  () => (
    <ContentSlide
      title="Power Comes With Risk"
      subtitle="Security Matters"
      accentWord="Risk"
      bullets={[
        { icon: '\u26A0\uFE0F', heading: 'More data + more tools', text: '= more risk if misconfigured' },
        { icon: '\u{1F41B}', heading: 'Attack vector:', text: 'Skills databases with malicious code hidden inside' },
        { icon: '\u{1F511}', heading: 'If you give it email access', text: '+ elevated permissions... think carefully' },
        { icon: '\u{1F6E1}\uFE0F', heading: 'Security isn\'t optional', text: '\u2014 it\'s critical at every layer' },
      ]}
      footnote="With great power comes great responsibility."
    />
  ),

  // ============================================================
  // SECTION 5: Questions & Close (Slides 30-33)
  // ============================================================

  // Slide 30: Human Skills
  () => (
    <ContentSlide
      title="Skills for the AI Age"
      subtitle="The Human Edge"
      accentWord="AI Age"
      bullets={[
        { icon: '\u{1F5E3}\uFE0F', heading: 'Clear instruction', text: '\u2014 logical, specific direction (increasingly by voice)' },
        { icon: '\u{1F4A1}', heading: 'Novel application', text: '\u2014 thinking of new uses for intelligence' },
        { icon: '\u{1F3BC}', heading: 'Agent orchestration', text: '\u2014 becoming a true manager of AI agents' },
      ]}
      footnote="Your value shifts from execution to orchestration."
    />
  ),

  // Slide 31: Start Somewhere
  () => (
    <ContentSlide
      title="Start Somewhere, Start Small"
      accentWord="Start"
      bullets={[
        { icon: '1\uFE0F\u20E3', heading: 'Level 1:', text: 'Better prompting in ChatGPT / Claude' },
        { icon: '2\uFE0F\u20E3', heading: 'Level 2:', text: 'Zapier / Make automations' },
        { icon: '3\uFE0F\u20E3', heading: 'Level 3:', text: 'Claude Code / Custom agents' },
      ]}
      footnote="Don't boil the ocean. Pick one tedious task and automate it. Then do another."
    />
  ),

  // Slide 32: Thank You
  () => (
    <SectionSlide
      sectionNumber=""
      title="Thank You"
      subtitle="Questions & Discussion"
      icon={'\u{1F64F}'}
    />
  ),

  // Slide 33: Final Quote
  () => (
    <QuoteSlide
      quote="Today is the worst AI will ever be. It's only going to get better from here."
      large
    />
  ),
]
