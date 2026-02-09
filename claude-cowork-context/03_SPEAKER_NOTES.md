# Speaker Notes — Slide by Slide

## SECTION 1: Scene Setting

### Slide 1.1: Title
- Welcome everyone, grab a drink
- Quick intro of yourself if needed
- "Thanks for filling out the survey — it really shaped tonight"

### Slide 1.2: Why Are We Here?
- "Most of you use ChatGPT or Copilot in some form"
- "But there's a big leap happening right now — from chatbots to agents"
- "Tonight I want to show you what's actually possible, not just what's hyped"
- Personal hook: "This has fundamentally changed how I work"

### Slide 1.3: Agenda
- Quick run through the sections
- "We'll start with your feedback, get into some theory, then spend most of our time on practical demos"
- "Leave plenty of time for questions"

### Slide 1.4: Rules of Engagement
- Keep it light: "Look, this is beer & learn, not a board meeting"
- "But if everyone yells questions at once it'll be chaos — so raise a hand and I'll get to you"
- "There are no dumb questions — if you're wondering something, someone else is too"

---

## SECTION 2: Survey Playback

### Slide 2.1: We Asked, You Answered
- "Before I built this presentation, I wanted to know what YOU actually care about"
- "12 of you filled out the survey — thank you"
- "Let me show you what I learned"

### Slide 2.2: Experience Level
- "We've got a good mix in the room"
- "Some of you use AI every day — it's core to your workflow"
- "Others are still exploring, trying to figure out where it fits"
- "I'll make sure tonight works for both groups"

### Slide 2.3: Top Concerns
- "This is where it gets interesting"
- "Your #1 concern? Privacy and security. 58% of you flagged it."
- "I'm going to address this head-on — not gloss over it"
- "Half of you also worry about hallucinations — AI making stuff up. Valid concern."
- "And half of you said you just don't know where to start. Too many tools, too confusing."

### Slide 2.4: Pain Points
- "I asked what tasks feel tedious — what should be easier"
- "Email management — by far the #1 answer"
- "Data reporting — some of you spend hours every week on this"
- Pause on the quote: "One of you said: 'I want to come to work on Thursday and the report is just sitting there, ready for me.' — That's EXACTLY what agents can do"

### Slide 2.5: What You Want
- "When I asked what you want to walk away with tonight..."
- "It wasn't 'explain the theory' — it was 'tell me what to actually USE'"
- "'Is there a genuine AI agent I should be using today?' — I'll answer that"
- "'How do I set this up securely?' — we'll cover that too"

---

## SECTION 3: Theory

### Slide 3.1: Section Title
- "Alright, quick bit of theory — I promise to keep it tight"
- "We need a shared language before we dive into demos"
- "Everything comes down to five building blocks"

### Slide 3.2: The Seven Building Blocks (Overview)
- "Every agent — from ChatGPT to a custom enterprise system — is built from these seven components"
- Walk through quickly: Model, Instructions, Skills, Tools, Context, Memory, Orchestration
- "Master these seven, and you understand agents"
- "Let's go through each one"

### Slide 3.3: Building Block 1 — Model
- "First: the Model. This is the brain — the raw AI."
- "Different models have different strengths — intelligence, speed, cost"
- "Key insight: not every task needs the most powerful model"
- "Example: Claude Opus for complex financial analysis vs Claude Haiku for simple categorisation"
- "Match the model to the task"

### Slide 3.4: Building Block 2 — Instructions
- "Second: Instructions. This is WHO the agent IS."
- "Persistent definitions — personality, standards, guardrails"
- "This is what turns a generic AI into YOUR specialist"
- Read the example: "You are a senior financial controller. Be precise and conservative. Always flag discrepancies over $500. Never auto-approve payments above $10,000."
- "Without good instructions, you get a generic AI. With them, you get a specialist."

### Slide 3.5: Building Block 3 — Skills
- Reference the Matrix image
- "Remember this scene? Neo gets kung fu uploaded directly into his brain"
- "Skills are packaged expertise — not just what the agent can access, but what it KNOWS HOW to do"
- "Example: Month-end reconciliation. The agent knows the steps, the sequence, what exceptions look like, when to escalate"
- "Not because it has a rule for every scenario — because it has the expertise"

### Slide 3.6: Building Block 4 — Tools
- "Fourth: Tools. These are the verbs — discrete, single-purpose actions."
- "Search the web. Query a database. Send an email. Read a bank feed."
- "Each tool does ONE thing."
- "Important: Tools have NO judgment about when or why to use them"
- "That's what Skills and Instructions are for"

### Slide 3.7: Skills vs Tools
- "This is a crucial distinction — people get confused here"
- "Skills = HOW to do something, with judgment and process"
- "Tools = WHAT to interact with, single actions"
- "Example: 'Know how to manage client communications' is a Skill"
- "It USES Tools: read_email, send_email, search_crm"
- "But the Skill decides WHEN and HOW to use those tools"

### Slide 3.8: Building Block 5 — Context
- "Fifth: Context. What's on the desk right now."
- "This is dynamic, task-specific information"
- "Remember that pain point — 'copying and pasting everything into GPT'?"
- "Context fixes that — the agent gets the right information automatically"
- Read the example: "Here's the client's chart of accounts, this month's 247 bank transactions, and their preference for cash-basis accounting."
- "Context makes the work specific, not generic"

### Slide 3.9: Building Block 6 — Memory
- "Sixth: Memory. What persists across interactions."
- "Memory turns every conversation from a cold start into a continuation"
- "The agent builds familiarity, learns preferences, avoids repeating mistakes"
- Read the example: "Remembering that this client always miscodes contractor payments to 'office supplies' — so the agent proactively flags and reclassifies them without being told"
- "This is what makes it feel like YOUR assistant, not a generic AI"

### Slide 3.10: Building Block 7 — Orchestration
- "Seventh, and this is the big one: Orchestration."
- "This is the planning and sequencing layer"
- "The difference between following a fixed script and dynamically reasoning through complexity"
- "Orchestration is what turns a collection of capabilities into coherent work"
- Read the example: "New client onboarding — the agent plans: gather documents, set up chart of accounts, connect bank feeds, run categorisation, flag exceptions — and sequences them, adjusting if something fails"
- "Without orchestration, you have automation. WITH orchestration, you have agency."

### Slide 3.8: The Big Leap
- "Here's the key insight"
- "With a chatbot: Question, answer, question, answer. YOU are the glue."
- "You have to 'jockey' the system — prompt, read, prompt again, take the output somewhere"
- "With an agent: You give it a GOAL. It plans, reasons, uses tools, completes."
- "The human is no longer the glue between steps"
- "This is the leap. This is what's changed."

### Slide 3.9: Transition
- "Okay, theory done. Now let's see this in action."

---

## SECTION 4: Practical

### Slide 4.1: Section Title
- "This is the fun part"
- "I'm going to show you three different ways agents work in my life"

### Slide 4.2: Tech Stack
- Show the meme, get a laugh
- "Look, I used ChatGPT for years. It's good."
- "But Claude and Claude Code have pulled ahead — especially for coding and complex tasks"
- "This is what we'll demo tonight"

### Slide 4.3: Claude Code
- "First demo: Claude Code"
- "This is an agent that can write and modify code"
- "The workflow: I create a spec document in GitHub — what I want built"
- "I point the agent at it"
- "It reads the spec, plans the work, and builds"
- Demo highlight: "I ran this overnight on a project. Woke up to 26,000 lines of working code."
- "Not perfect — had to refine. But 90% of the work was done while I slept."

### Slide 4.4: Recursive Improvement
- "Here's what's mind-bending"
- "Software is now building software"
- "The tools that build AI are being improved BY AI"
- "This is recursive improvement — it compounds"
- Reference the J-curve
- "We're on the steep part of the curve right now"
- "This is moving faster than anything I've seen in my career"

### Slide 4.5: Claude Cowork
- "Second demo: Claude Cowork"
- "This is meta — I'm showing you how this presentation was built"
- "I set up a local folder with all my context — survey data, images, brand guidelines"
- "Clear instructions on what I wanted"
- "The agent planned it out, built the structure, wrote the content"
- Live demo if possible

### Slide 4.6: JackalBot Intro
- Show the JARVIS image
- "Now for the fun one"
- "What if you had your own JARVIS?"
- "Not science fiction — this is real and running right now"
- "Meet JackalBot — my personal AI agent"

### Slide 4.7: Architecture
- "Quick technical overview"
- "JackalBot runs on ClawdBot/OpenClaw — an open source framework"
- "It's cloud-hosted on Digital Ocean — NOT on my local machine"
- "Why? Security. If something goes wrong, it's isolated."
- "I talk to it through Discord — that's the interface for sending data back and forth"

### Slide 4.8: Live Demo
- "Let me show you"
- "I'm going to send a voice note to the bot"
- "Watch it transcribe, process, and then email everyone in the room"
- Actually do the demo
- "That just happened in real-time — no human glue required"

### Slide 4.9: The Risk Side
- "Okay, let's talk about the elephant in the room"
- "You give an agent access to your email, your files, your systems..."
- "What happens if it goes wrong?"
- "Real example: Skills databases online. People uploaded malware disguised as skills."
- "If you install that and give the agent elevated permissions... bad news."
- "Security isn't optional. The more powerful the agent, the more careful you need to be."
- "This is why I run mine in an isolated cloud environment"

---

## SECTION 5: Closing

### Slide 5.1: The Role of Humans
- "Before we open for questions, I want to address something important"
- "What's the human role in all this?"
- "Here's how I think about it: AI has moved from 'Talkers to Doers'"
- "That means WE are moving from 'Doers to Instructors'"
- "The skills that matter now are different:"
- "First: Giving clear and logical instruction — increasingly by voice"
- "Second: Thinking of novel applications for intelligence — what COULD this do?"
- "Third: Agent orchestration — becoming a true manager of AI agents"
- "Your value shifts from execution to orchestration"

### Slide 5.2: From Doers to Instructors
- "Let me be concrete about this"
- "Old model: You do the work, AI assists"
- "New model: AI does the work, you direct"
- "The best results come from humans who can:"
- "Articulate clearly what they want"
- "Define outcomes precisely"
- "Know when to intervene and when to let it run"
- "The skill is knowing what to ask for and how to ask for it"
- "Voice is becoming huge here — being able to speak your instructions naturally"

### Slide 5.3: Thank You
- "That's the formal part done"
- "I want to leave plenty of time for questions"
- "Anything you wanted to ask but felt was too basic — now's the time"

### Slide 5.4: Final Thought
- "I'll leave you with this"
- "Today is the worst AI will ever be. It's only going to get better from here."
- "The question isn't IF this changes your work — it's WHEN and HOW you adapt"
- "Thanks for coming tonight"
