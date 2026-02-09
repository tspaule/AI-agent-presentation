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
  { title: 'Theory', startSlide: 11 },
  { title: 'Practical', startSlide: 25 },
  { title: 'Close', startSlide: 35 },
]

export const slides = [
  // ============================================================
  // SECTION 1: SCENE SETTING & AGENDA (0-3)
  // ============================================================

  // 0: Title
  () => (
    <TitleSlide
      title="AI Agent Session"
      subtitle="Mander Beer & Learn"
      presenter="Thomas Paule"
      date="February 2026"
      brandLine="AI from the Inside"
    />
  ),

  // 1: Why Are We Here
  () => (
    <ContentSlide
      title="Why Are We Here?"
      accentWord="Here?"
      bullets={[
        { icon: '\u{1F4AC}', text: 'AI has quietly moved from chatbots to autonomous agents' },
        { icon: '\u{1F30D}', text: 'Most people know ChatGPT \u2014 fewer know what\u2019s actually possible now' },
        { icon: '\u{1F3AF}', text: 'Tonight: demystify agents, show real use cases, answer your questions' },
      ]}
    />
  ),

  // 2: Tonight's Agenda
  () => (
    <ContentSlide
      title="Tonight\u2019s Agenda"
      accentWord="Agenda"
      bullets={[
        { icon: '\u{1F4CA}', heading: 'Your Feedback', text: '\u2014 what you told us you wanted' },
        { icon: '\u{1F9E0}', heading: 'Theory', text: '\u2014 WTF are AI Agents?' },
        { icon: '\u{1F6E0}\uFE0F', heading: 'Practical', text: '\u2014 agents doing real work (live demos!)' },
        { icon: '\u2753', heading: 'Questions', text: '\u2014 open discussion' },
      ]}
    />
  ),

  // 3: Rules of Engagement
  () => (
    <ContentSlide
      title="Rules of Engagement"
      accentWord="Engagement"
      bullets={[
        { icon: '\u270B', text: 'Raise your hand for questions \u2014 keeps things orderly' },
        { icon: '\u{1F37A}', text: 'Beers encouraged, heckling discouraged' },
        { icon: '\u{1F914}', text: 'No \u201Cdumb questions\u201D \u2014 if you\u2019re thinking it, others are too' },
        { icon: '\u{1F4F1}', text: 'Feel free to follow along on your phone' },
      ]}
      footnote="This is beer & learn, not a board meeting."
    />
  ),

  // ============================================================
  // SECTION 2: SURVEY PLAYBACK (4-10)
  // ============================================================

  // 4: Section divider
  () => (
    <SectionSlide
      sectionNumber="1"
      title="We Asked, You Answered"
      subtitle="12 of you shared your thoughts \u2014 here\u2019s what we learned"
      icon={'\u{1F4CA}'}
    />
  ),

  // 5: Experience Level
  () => (
    <ChartSlide
      title="Your Experience Level"
      subtitle="Who\u2019s in the room"
      bars={[
        { label: 'Daily Users \u2014 AI integral to workflow', value: 42, icon: '\u{1F525}' },
        { label: 'Occasional Users \u2014 still exploring', value: 58, icon: '\u{1F4AD}' },
        { label: 'Complete Beginners', value: 0, icon: '\u{1F331}' },
      ]}
      message="We\u2019ll make sure tonight works for both groups."
    />
  ),

  // 6: Top Concerns
  () => (
    <ChartSlide
      title="Your Top Concerns"
      subtitle="What worries you about AI"
      bars={[
        { label: 'Data Privacy & Security', value: 58, icon: '\u{1F512}' },
        { label: 'Accuracy / Hallucinations', value: 50, icon: '\u{1F3AF}' },
        { label: 'Not Knowing Where to Start', value: 50, icon: '\u{1F937}' },
        { label: 'Cost / Subscriptions', value: 33, icon: '\u{1F4B0}' },
      ]}
      message="We heard you \u2014 we\u2019ll address all of these tonight."
    />
  ),

  // 7: Pain Points
  () => (
    <ContentSlide
      title="Tasks That Should Be Easier"
      subtitle="Your Pain Points"
      accentWord="Easier"
      bullets={[
        { icon: '\u{1F4E7}', heading: '#1 Email management', text: '\u2014 the top pain point across the group' },
        { icon: '\u{1F4CA}', heading: 'Data reporting', text: '\u2014 weekly insights and analysis taking hours' },
        { icon: '\u{1F504}', heading: 'Context loading', text: '\u2014 \u201CCopying and pasting everything into GPT\u201D' },
        { icon: '\u{1F465}', heading: 'Client monitoring', text: '\u2014 periodic touchpoints and follow-ups' },
      ]}
    />
  ),

  // 8: Dream Quote
  () => (
    <QuoteSlide
      quote="I\u2019ve been wanting to learn how to setup an agent so that every Thursday when data is released, I come to work and a report is sitting there for me."
      attribution="Survey Respondent"
      context="This is exactly what agents can do."
    />
  ),

  // 9: What You Want
  () => (
    <ContentSlide
      title="What You Want From Tonight"
      subtitle="In Your Words"
      accentWord="Tonight"
      bullets={[
        { icon: '\u{1F4AC}', text: '\u201CIs there a genuine AI agent I should be using today?\u201D' },
        { icon: '\u{1F4AC}', text: '\u201CPractical steps to set up a usable AI stack\u201D' },
        { icon: '\u{1F4AC}', text: '\u201CHow to build an agent in a secure environment\u201D' },
        { icon: '\u{1F4AC}', text: '\u201CBest tools and best way to use them\u201D' },
      ]}
      footnote="Let\u2019s answer these questions."
    />
  ),

  // 10: Context loading frustration
  () => (
    <QuoteSlide
      quote="I\u2019m starting to find it very tedious pushing context into ChatGPT. I wish I could automatically connect it to my email, calendar, Teams chats and HubSpot."
      attribution="Survey Respondent"
      context="Context is one of the seven building blocks. We\u2019ll get to it."
    />
  ),

  // ============================================================
  // SECTION 3: THEORY \u2014 WTF ARE AI AGENTS? (11-24)
  // ============================================================

  // 11: Section divider
  () => (
    <SectionSlide
      sectionNumber="2"
      title="WTF Are AI Agents?"
      subtitle="The Building Blocks of an Agent"
      icon={'\u{1F9E0}'}
    />
  ),

  // 12: Seven Building Blocks Overview
  () => (
    <DiagramSlide
      title="The Seven Building Blocks"
      subtitle="Agent Architecture"
      message="Master these seven, and you understand agents."
    >
      <AgentStackDiagram />
    </DiagramSlide>
  ),

  // 13: Building Block 1 \u2014 Model
  () => (
    <BuildingBlockSlide
      number="1"
      icon={'\u{1F9E0}'}
      title="Model \u2014 The Brain"
      subtitle="The underlying AI that reasons and generates"
      keyInsight="Not every task needs the most powerful model. Sometimes fast and cheap beats slow and brilliant."
      details={[
        'Determines raw intelligence, speed, and cost',
        'Claude Opus for deep analysis vs Haiku for simple categorisation',
        'Match the model to the task',
      ]}
    />
  ),

  // 14: Building Block 2 \u2014 Instructions
  () => (
    <BuildingBlockSlide
      number="2"
      icon={'\u{1F4CB}'}
      title="Instructions \u2014 Identity & Rules"
      subtitle="Who the agent is and how it behaves"
      keyInsight="Without clear instructions, an agent is generic. With them, it becomes your specialist."
      example="You are a senior financial controller. Be precise and conservative. Always flag discrepancies over $500. Never auto-approve payments above $10,000."
    />
  ),

  // 15: Building Block 3 \u2014 Skills (Matrix image)
  () => (
    <ImageSlide
      title="Skills \u2014 Learned Capabilities"
      subtitle="Building Block 3"
      imageSrc="/image-003.png"
      imageAlt="Matrix \u2014 I Know Kung Fu"
      caption="Skills define what the agent knows how to do. Like uploading kung fu to Neo\u2019s brain."
      overlay="bg-gradient-to-t from-black via-black/70 to-black/30"
    />
  ),

  // 16: Skills detail
  () => (
    <BuildingBlockSlide
      number="3"
      icon={'\u26A1'}
      title="Skills \u2014 Packaged Expertise"
      subtitle="Knowledge, judgment, and process bundled together"
      keyInsight="Skills can be built-in, custom-written, or downloaded from skills databases online and plugged into your agent."
      details={[
        'Not just access \u2014 expertise with judgment about when and how',
        'Pre-built skills available from databases (ClawdHub, OpenClaw)',
        'Custom skills for your specific workflows',
      ]}
      example="Month-end reconciliation: the agent knows the steps, the sequence, what exceptions look like, and when to escalate."
    />
  ),

  // 17: Skills vs Tools
  () => (
    <ComparisonSlide
      title="Skills vs Tools"
      subtitle="The Critical Difference"
      left={{
        title: 'Skills',
        icon: '\u26A1',
        items: [
          { icon: '\u2192', text: 'HOW to do something' },
          { icon: '\u2192', text: 'Judgment & process' },
          { icon: '\u2192', text: 'Expertise-based' },
          { icon: '\u2192', text: '\u201CKnow how to reconcile accounts\u201D' },
        ],
      }}
      right={{
        title: 'Tools',
        icon: '\u{1F527}',
        items: [
          { icon: '\u2192', text: 'WHAT to interact with' },
          { icon: '\u2192', text: 'Single actions (verbs)' },
          { icon: '\u2192', text: 'Capability-based' },
          { icon: '\u2192', text: '\u201CCan read a bank feed\u201D' },
        ],
      }}
      message="Skills use Tools, but add judgment about when and how."
    />
  ),

  // 18: Building Block 4 \u2014 Tools
  () => (
    <DiagramSlide
      title="Tools \u2014 The Actions"
      subtitle="Building Block 4"
      message="Tools are the verbs \u2014 each one does one thing."
    >
      <ToolCallingDiagram />
    </DiagramSlide>
  ),

  // 19: Building Block 5 \u2014 Context
  () => (
    <BuildingBlockSlide
      number="5"
      icon={'\u{1F4E5}'}
      title="Context \u2014 What\u2019s on the Desk"
      subtitle="Dynamic, task-specific information"
      keyInsight="Context solves the copy-paste problem. No more explaining the same thing every conversation."
      details={[
        'Changes every time \u2014 makes work specific, not generic',
        'Sources: email, calendar, CRM, documents, real-time feeds',
        'The agent knows your world without you pasting it in',
      ]}
    />
  ),

  // 20: Building Block 6 \u2014 Memory
  () => (
    <BuildingBlockSlide
      number="6"
      icon={'\u{1F4BE}'}
      title="Memory \u2014 Persistence"
      subtitle="What the agent retains across interactions"
      keyInsight="Memory turns every interaction from a cold start into a continuation."
      details={[
        'Builds familiarity, learns preferences, avoids repeating mistakes',
        'Short-term (this conversation) and long-term (across sessions)',
        'What makes it feel like YOUR assistant, not a generic AI',
      ]}
      example="Remembering that this client always miscodes contractor payments to \u2018office supplies,\u2019 so the agent proactively flags and reclassifies them."
    />
  ),

  // 21: Building Block 7 \u2014 Orchestration
  () => (
    <DiagramSlide
      title="Orchestration \u2014 Planning & Sequencing"
      subtitle="Building Block 7"
      message="Without orchestration, you have automation. With it, you have agency."
    >
      <OrchestrationDiagram />
    </DiagramSlide>
  ),

  // 22: The Big Leap \u2014 title
  () => (
    <SectionSlide
      sectionNumber=""
      title="The Big Leap"
      subtitle="From chatbots to agents"
      icon={'\u{1F680}'}
    />
  ),

  // 23: The Big Leap \u2014 diagram
  () => (
    <DiagramSlide
      title="From Chatbots to Agents"
      subtitle="The Big Leap"
      message="You\u2019re no longer the glue between prompts and outputs."
    >
      <ChatbotVsAgentDiagram />
    </DiagramSlide>
  ),

  // 24: Theory complete
  () => (
    <SectionSlide
      sectionNumber={'\u2713'}
      title="Theory Complete"
      subtitle="Now let\u2019s see it in action"
      icon={'\u{1F6E0}\uFE0F'}
    />
  ),

  // ============================================================
  // SECTION 4: PRACTICAL \u2014 AGENTS DOING REAL WORK (25-34)
  // ============================================================

  // 25: Section divider
  () => (
    <SectionSlide
      sectionNumber="3"
      title="Agents Doing Real Work"
      subtitle="My Daily Use Cases"
      icon={'\u{1F527}'}
    />
  ),

  // 26: Tech Stack \u2014 Why Claude (meme)
  () => (
    <ImageSlide
      title="Why Claude?"
      subtitle="The Tech Stack"
      imageSrc="/image-005.png"
      imageAlt="Distracted boyfriend meme \u2014 Claude vs ChatGPT"
      caption="Better reasoning. Better coding. Better tool use. This is what we\u2019ll demo tonight."
      overlay="bg-gradient-to-t from-black via-black/60 to-black/20"
    />
  ),

  // 27: Demo 1 \u2014 Claude Code
  () => (
    <DemoSlide
      title="Claude Code"
      subtitle="Chain of thought, planning, and execution"
      steps={[
        'Create a prototype spec in GitHub',
        'Point the agent at the spec',
        'Watch it plan, reason, and build autonomously',
        'Review the completed output',
      ]}
      stat="26,000"
      statLabel="lines of code written overnight"
    />
  ),

  // 28: Claude Code \u2014 Key insight
  () => (
    <QuoteSlide
      quote="I didn\u2019t write the code. I wrote the intent. The agent figured out the rest."
      large
    />
  ),

  // 29: Recursive Improvement \u2014 J-Curve
  () => (
    <DiagramSlide
      title="The Recursive Leap"
      subtitle="Software building software"
      message="We\u2019re on the steep part of the J-curve."
    >
      <JCurveDiagram />
    </DiagramSlide>
  ),

  // 30: Demo 2 \u2014 Claude Cowork
  () => (
    <DemoSlide
      title="Claude Cowork"
      subtitle="Building this presentation"
      steps={[
        'Local folder with all context loaded (survey, brand, structure)',
        'Clear prompt instructions on what to build',
        'Agent plans its chain of thought and to-do list',
        'Builds, tests, and delivers the result',
      ]}
      message="This presentation was built using the technique I\u2019m about to show you."
    />
  ),

  // 31: JackalBot Intro (JARVIS image)
  () => (
    <ImageSlide
      title="Meet JackalBot"
      subtitle="Personal AI Agent"
      imageSrc="/image-001.png"
      imageAlt="Tony Stark \u2014 JARVIS workshop"
      caption="What if you had your own JARVIS?"
      overlay="bg-gradient-to-t from-black via-black/60 to-black/20"
    />
  ),

  // 32: JackalBot Architecture
  () => (
    <DiagramSlide
      title="How JackalBot Works"
      subtitle="Architecture"
      message="Cloud-hosted on Digital Ocean \u2014 not on my local machine, for security."
    >
      <JackalBotDiagram />
    </DiagramSlide>
  ),

  // 33: JackalBot Live Demo
  () => (
    <DemoSlide
      title="JackalBot Live"
      subtitle="Let\u2019s see it in action"
      steps={[
        'Send a voice note to JackalBot via Discord',
        'Watch it transcribe and process the request',
        'It emails everyone in the room with the chosen task',
        'All in real-time \u2014 no human glue required',
      ]}
      message="Discord is the interface for sending data back and forth to the server."
    />
  ),

  // 34: Security & Risk
  () => (
    <ContentSlide
      title="Power Comes With Risk"
      subtitle="The Security Side"
      accentWord="Risk"
      bullets={[
        { icon: '\u26A0\uFE0F', heading: 'More data + more tools', text: '= more risk if misconfigured' },
        { icon: '\u{1F41B}', heading: 'Real attack vector:', text: 'malicious skills uploaded to public databases' },
        { icon: '\u{1F4E7}', heading: 'Email + elevated permissions', text: 'means a compromised skill can send on your behalf' },
        { icon: '\u{1F6E1}\uFE0F', heading: 'Isolation matters:', text: 'run agents in the cloud, not on your local machine' },
      ]}
      footnote="With great power comes great responsibility."
    />
  ),

  // ============================================================
  // SECTION 5: CLOSE (35-37)
  // ============================================================

  // 35: Human Skills
  () => (
    <ContentSlide
      title="From Doers to Instructors"
      subtitle="The Human Edge"
      accentWord="Instructors"
      bullets={[
        { icon: '\u{1F5E3}\uFE0F', heading: 'Clear instruction', text: '\u2014 logical, specific direction (increasingly by voice)' },
        { icon: '\u{1F4A1}', heading: 'Novel application', text: '\u2014 thinking of new uses for intelligence' },
        { icon: '\u{1F3BC}', heading: 'Agent orchestration', text: '\u2014 becoming a true manager of AI agents' },
      ]}
      footnote="Your value shifts from execution to orchestration."
    />
  ),

  // 36: Thank You
  () => (
    <SectionSlide
      sectionNumber=""
      title="Thank You"
      subtitle="Questions & Discussion"
      icon={'\u{1F64F}'}
    />
  ),

  // 37: Final Quote
  () => (
    <QuoteSlide
      quote="Today is the worst AI will ever be. It\u2019s only going to get better from here."
      large
    />
  ),
]
