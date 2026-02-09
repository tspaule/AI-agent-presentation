# Demo Scripts & Talking Points

## Demo 1: Claude Code

### Setup
- Have a GitHub repo open with a spec document
- Claude Code running in terminal
- Example project: a simple web app or automation script

### Script

**Before starting:**
"I'm going to show you how I use Claude Code to build software. This is an agent — not a chatbot. It plans, it reasons, it uses tools, it completes."

**Show the spec:**
"Here's a specification document I created. It describes what I want built — the requirements, the structure, the expected behavior. I'm not writing code. I'm writing intent."

**Point the agent at it:**
"Now I point Claude Code at this spec. Watch what happens."

**Narrate the chain of thought:**
"See how it's breaking down the problem? It's creating a plan, a to-do list. It's reading the existing codebase — if there is one. It's figuring out what needs to change."

**Show tool use:**
"Now it's writing code. But notice — it's also running tests, checking for errors, iterating. This isn't just text generation. It's using tools."

**The overnight story:**
"I ran this on a more complex project overnight. Went to bed, woke up to 26,000 lines of working code. Not perfect — I had to refine some things. But 90% of the work was done while I slept. That's the shift."

**Key point:**
"I didn't write the code. I wrote the intent. The agent figured out the rest."

---

## Demo 2: Claude Cowork

### Setup
- Local folder with all context files visible
- Show folder structure in file manager
- Claude Cowork interface ready

### Script

**Before starting:**
"This is going to be meta. I'm showing you how this presentation was built."

**Show the folder:**
"Here's my context folder. Everything the agent needs to know is in here:
- The survey data you filled out
- The agenda structure
- My speaker notes
- The images I want to use
- The style guide from my brand

This is the 'context loading' we talked about. Instead of copy-pasting into ChatGPT, I organized it in a folder."

**Show the prompt:**
"Here's my instruction prompt. It tells the agent what I want: Create a PowerPoint presentation, use this style guide, follow this structure, incorporate these images."

**Start the agent:**
"Now I let it run. Watch the chain of thought. It's reading the files, building a plan, creating the slides."

**Narrate:**
"See how it references the survey data? It's not making things up — it's using the context I provided. That's the power of well-organized context."

**Key point:**
"I didn't build this presentation slide by slide. I built a context folder and gave clear instructions. The agent did the work."

---

## Demo 3: JackalBot

### Setup
- Discord open with JackalBot channel
- Voice note ready to send
- Attendee emails ready (or placeholder demo)

### Script

**Before starting:**
"Now for the fun one. This is JackalBot — my personal AI agent. Think of it like my own JARVIS."

**Explain the architecture:**
"JackalBot runs on a framework called ClawdBot, now called OpenClaw. It's cloud-hosted on Digital Ocean — not on my laptop. Why? Security. If something goes wrong, it's isolated from my personal files."

**Show Discord:**
"I talk to it through Discord. Why Discord? Because the agent needs an interface to send data back and forth. Discord handles that well — messages, files, voice notes."

**The demo:**
"Let me show you something cool. I'm going to send a voice note."

*Record a voice note saying something like:*
"Hey Jackal, I need you to send an email to everyone in this room. Tell them: Thanks for coming tonight. The slides will be shared tomorrow. Include my signature."

**Send and narrate:**
"Watch what happens. It's transcribing the voice note... processing the request... now it's drafting the email... and sending."

**Show the result:**
"Check your inbox."

*Wait for reactions*

**Key point:**
"That just happened in real-time. I spoke, it transcribed, it understood, it acted, it completed. No copy-paste. No switching apps. No human glue."

---

## Demo 3B: JackalBot Skills Demo (Optional)

### Setup
- Discord thread
- Show skills configuration

### Script

**Show skills in action:**
"Let me show you how skills work. JackalBot has access to various skills — email, calendar, web search, file management."

**Example interaction:**
"Hey Jackal, what's on my calendar tomorrow?"

*Wait for response*

"See how it pulled that information? That's a skill — calendar access. I gave it permission to read my calendar, and now it can answer questions about my schedule."

**Another example:**
"Jackal, search the web for the latest news on AI agents and give me a summary."

*Wait for response*

"Web search — another skill. It went out, found information, synthesized it."

**Key point:**
"Skills are like apps for your agent. The more skills you give it, the more capable it becomes. But remember — the more access you give, the more careful you need to be about security."

---

## Security Demo / Discussion

### Script

**Transition:**
"Let's talk about the elephant in the room. I've just shown you an agent with email access. What could go wrong?"

**Real risk:**
"Remember those skills databases I mentioned? Where you can download pre-built skills? People have uploaded malware disguised as skills. If you install one of those and give your agent elevated permissions..."

**Pause for effect**

"Your agent could send emails on your behalf. Access your files. Execute code. That's a real risk."

**How I mitigate:**
"That's why JackalBot runs in the cloud, not on my local machine. It's isolated. If something goes wrong, it can't touch my personal files."

"I only install skills I've reviewed or built myself."

"I'm careful about what permissions I grant."

**Key point:**
"The more powerful the agent, the more careful you need to be. This isn't fear-mongering — it's responsible use. Think about it like giving someone the keys to your house. You'd want to trust them first."

---

## Backup Demos (If Time/Tech Issues)

### Backup 1: Screen Recording
- Have a pre-recorded video of JackalBot working
- "Let me show you a recording of this in action"

### Backup 2: Simple Claude Chat
- Fall back to showing Claude's reasoning in a standard chat
- "Let me show you the chain of thought in a simpler example"

### Backup 3: Live Q&A with JackalBot
- "Ask JackalBot a question in the Discord thread"
- Let attendees interact directly
