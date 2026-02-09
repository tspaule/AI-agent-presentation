# Building Blocks of an Agent — Detailed Content

## The Seven Building Blocks

An AI agent is built from seven core components. Understanding these building blocks is the key to understanding what agents can do — and how to configure them for your needs.

```
┌─────────────────────────────────────────────────────────────┐
│                    THE AGENT STACK                          │
├─────────────────────────────────────────────────────────────┤
│  1. 🧠 MODEL — The Brain                                    │
│     The underlying AI that reasons and generates            │
├─────────────────────────────────────────────────────────────┤
│  2. 📋 INSTRUCTIONS — The Identity & Rules                  │
│     Who the agent is and how it behaves                     │
├─────────────────────────────────────────────────────────────┤
│  3. ⚡ SKILLS — The Learned Capabilities                    │
│     Packaged expertise for specific outcomes                │
├─────────────────────────────────────────────────────────────┤
│  4. 🔧 TOOLS — The Actions It Can Take                      │
│     Discrete, single-purpose actions                        │
├─────────────────────────────────────────────────────────────┤
│  5. 📥 CONTEXT — The Task-Specific Information              │
│     Dynamic, relevant info for this particular job          │
├─────────────────────────────────────────────────────────────┤
│  6. 💾 MEMORY — Persistence Across Interactions             │
│     What the agent retains and applies to future sessions   │
├─────────────────────────────────────────────────────────────┤
│  7. 🎯 ORCHESTRATION — The Planning & Sequencing Layer      │
│     How the agent decides what to do, in what order         │
└─────────────────────────────────────────────────────────────┘
```

---

## 1. Model — The Brain

The underlying AI that reasons, understands, and generates responses. It determines the agent's raw intelligence, speed, and cost.

### Key Insight
**Not every task needs the most powerful model** — sometimes fast and cheap beats slow and brilliant.

### Example
> Choosing Claude Opus for complex financial analysis vs. Claude Haiku for simple transaction categorisation.

### What It Does
- **Reasoning:** Takes input, thinks through the problem, generates response
- **Planning:** Breaks complex tasks into steps
- **Understanding:** Interprets natural language, extracts intent
- **Generation:** Produces coherent, contextual output

### Key Models (2026)
| Model | Strength | Best For |
|-------|----------|----------|
| Claude Opus | Deep reasoning, complex tasks | Financial analysis, strategy, coding |
| Claude Sonnet | Balanced performance | Most everyday tasks |
| Claude Haiku | Fast & cheap | Simple categorisation, quick lookups |
| GPT-4/GPT-5 | Strong general purpose | Wide range of tasks |

### The Shift
- From single-turn Q&A to multi-step reasoning
- From isolated prompts to continuous workflows
- From human-guided to autonomous execution

---

## 2. Instructions — The Identity & Rules

Persistent definitions of who the agent is, how it behaves, and what its boundaries are. These don't change between tasks or conversations. They're the agent's **personality, standards, and guardrails**.

### Example
> "You are a senior financial controller. Be precise and conservative. Always flag discrepancies over $500. Never auto-approve payments above $10,000. Communicate in plain English, not accounting jargon."

### What Instructions Define
- **Identity:** Who is the agent? What role does it play?
- **Tone & Style:** How does it communicate?
- **Boundaries:** What is it NOT allowed to do?
- **Escalation Rules:** When should it stop and ask a human?
- **Quality Standards:** What level of precision is expected?

### Why This Matters
Without clear instructions, an agent is generic. With well-crafted instructions, an agent becomes a **specialist** — it knows its domain, its limits, and its standards.

### Instruction Categories
| Category | Example |
|----------|---------|
| Identity | "You are a senior bookkeeper with 15 years of experience" |
| Behaviour | "Be thorough but concise. Explain your reasoning." |
| Boundaries | "Never delete files without confirmation" |
| Escalation | "Flag any transaction over $10,000 for human review" |
| Preferences | "Default to Australian date format (DD/MM/YYYY)" |

---

## 3. Skills — The Learned Capabilities

Packaged expertise that combines **knowledge, judgment, and process** to achieve a specific outcome. Skills can be built-in, taught, or learned over time.

### Key Insight
Skills define **what the agent knows how to do** — not just what it has access to.

### Example
> **Month-end reconciliation.** The agent knows the steps, the sequence, what to check, what exceptions look like, and when to escalate — not because it was given a rule for every scenario, but because it has the expertise.

### The Matrix Analogy
"I know kung fu" — Neo has martial arts uploaded directly to his brain.

Skills for agents work the same way:
- Package a capability
- Upload to the agent
- Agent now has that ability

### Skills vs Tools
| Skills | Tools |
|--------|-------|
| HOW to do something | WHAT to interact with |
| Judgment & process | Single actions |
| Expertise-based | Capability-based |
| "Know how to reconcile accounts" | "Can read a bank feed" |

### Example Skills
- **Email Management:** Compose, send, prioritise, organise
- **Month-End Close:** Reconciliation workflow with judgment
- **Client Reporting:** Generate insights from data
- **Web Research:** Search, synthesise, summarise
- **Code Review:** Analyse, critique, suggest improvements

### Skill Sources
1. **Pre-built skills:** Download from skill databases (ClawdHub, etc.)
2. **Custom skills:** Write your own for specific workflows
3. **Framework skills:** Built into the platform (OpenClaw, etc.)

### Security Warning
**Real attack vector:** Malicious skills uploaded to public databases
- Skill appears legitimate
- Contains hidden malicious code
- Once installed with elevated permissions — can access email, files, etc.

**Mitigation:**
- Only install from trusted sources
- Review skill code before installing
- Limit permissions where possible

---

## 4. Tools — The Actions It Can Take

Discrete, single-purpose actions the agent can execute. **Tools are the verbs** — each one does one thing.

### Key Insight
Tools give the agent the ability to interact with the outside world, but **they carry no judgment about when or why to use them**.

### Example
> Search the web. Query a database. Send an email. Read a bank feed. Create a document. Post a journal entry.

### How Tools Work
1. Agent receives a request
2. Agent determines which tool(s) to use (using Skills + Instructions)
3. Agent calls the tool with appropriate parameters
4. Tool returns result
5. Agent interprets result and continues

### Tool Categories
| Category | Examples |
|----------|----------|
| **Communication** | Send email, post message, create notification |
| **Information** | Search web, query database, read file |
| **Action** | Write file, execute code, call API |
| **Integration** | Update CRM, create calendar event, post journal |

### Tools vs Skills (Clarified)
```
SKILL: "Manage client communications"
  → Uses TOOLS: read_email, send_email, search_crm, create_task
  → Applies JUDGMENT: When to follow up, what tone to use, when to escalate

TOOL: "send_email"
  → Does ONE THING: Sends an email to a specified address
  → NO JUDGMENT: Doesn't decide if the email should be sent
```

---

## 5. Context — The Task-Specific Information

Dynamic, relevant information the agent needs **for this particular job**. It changes every time.

### Key Insight
Context is what's on the desk right now — the data, documents, and details that make the agent's work **specific rather than generic**.

### Example
> "Here's the client's chart of accounts, this month's 247 bank transactions, and their preference for cash-basis accounting. Their fiscal year ends in June."

### The Problem Context Solves
**User pain point:** "Copying and pasting everything into GPT"

Without good context:
- Every conversation starts from scratch
- User has to explain everything repeatedly
- Agent lacks awareness of user's world

With good context:
- Agent knows your projects, preferences, data
- Work is specific, not generic
- Less cognitive load on the user

### Context Sources
| Source | Example |
|--------|---------|
| **Direct input** | User provides data, documents, instructions |
| **System integration** | Email, calendar, CRM automatically loaded |
| **Document retrieval** | Relevant files pulled as needed |
| **Memory recall** | Previous conversations referenced |
| **Real-time feeds** | Bank transactions, market data |

### Context vs Memory
| Context | Memory |
|---------|--------|
| THIS task | ACROSS tasks |
| Changes every time | Persists over time |
| "What's on the desk" | "What's in my head" |
| Task-specific data | Learned preferences |

---

## 6. Memory — Persistence Across Interactions

What the agent retains from previous sessions and applies to future ones. Memory is what turns every interaction from a cold start into a continuation.

### Key Insight
Memory is how the agent **builds familiarity, learns preferences, and avoids repeating mistakes**.

### Example
> Remembering that this client always miscodes contractor payments to "office supplies," so the agent proactively flags and reclassifies them without being told.

### What Memory Enables
- **Continuity:** Pick up where you left off, not start fresh every time
- **Personalisation:** Learn your preferences, style, and patterns
- **Learning:** Avoid repeating past mistakes
- **Relationship:** Build familiarity over time

### Types of Memory
| Type | Description | Example |
|------|-------------|---------|
| **Short-term** | Current conversation | What we've discussed in this session |
| **Long-term** | Persists across sessions | Your communication preferences, project history |
| **Episodic** | Specific events/interactions | "Last month we decided to use cash-basis accounting" |
| **Semantic** | Facts and knowledge | "This client's fiscal year ends in June" |

### Memory vs Context
| Memory | Context |
|--------|---------|
| ACROSS interactions | THIS interaction |
| What's in my head | What's on the desk |
| Learned over time | Provided right now |
| Preferences, patterns | Task-specific data |

---

## 7. Orchestration — The Planning & Sequencing Layer

How the agent decides what to do, in what order, and when to adapt. Orchestration is the difference between following a fixed script and dynamically reasoning through a complex, multi-step task.

### Key Insight
Orchestration is what turns a collection of capabilities into **coherent work**.

### Example
> The agent receives a new client onboarding request. It plans the steps — gather documents, set up the chart of accounts, connect bank feeds, run an initial categorisation pass, flag exceptions for review — and sequences them, adjusting if something fails or new information arrives.

### What Orchestration Does
- **Plans:** Breaks a goal into steps
- **Sequences:** Decides the order of operations
- **Adapts:** Adjusts when things change or fail
- **Reasons:** Figures out what to do next based on what just happened

### Without Orchestration
```
Fixed script:
Step 1 → Step 2 → Step 3 → Done

If Step 2 fails? Crash.
If new info arrives? Ignored.
If order needs to change? Can't.
```

### With Orchestration
```
Dynamic reasoning:
Goal received → Plan steps → Execute Step 1 → 
Evaluate result → Adjust plan if needed → 
Execute Step 2 → Handle exception → 
Continue or escalate → Deliver result
```

### The Orchestration Loop
1. **Receive goal** — What are we trying to achieve?
2. **Plan approach** — What steps will get us there?
3. **Execute step** — Do the next thing
4. **Evaluate result** — Did it work? What changed?
5. **Adapt plan** — Adjust based on what we learned
6. **Repeat or complete** — Keep going or deliver

### Why This Matters
Orchestration is the difference between:
- **Automation:** Fixed rules, predictable paths
- **Agency:** Dynamic reasoning, adaptive execution

An agent without orchestration is just a fancy script. An agent WITH orchestration can handle complexity, uncertainty, and change.

---

## The Big Leap: Chatbots → Agents

### Chatbot Era (Before)
```
User: Question
Bot: Answer
User: Follow-up question
Bot: Answer
User: Take answer, do something with it manually
User: Come back with new question
Bot: Answer
...

Human is the glue between steps
Human "jockeys" the system
Each interaction is isolated
```

### Agent Era (Now)
```
User: Goal
Agent: Plans multi-step approach (using Instructions)
Agent: Applies expertise (using Skills)
Agent: Gathers information (using Tools)
Agent: Works with provided data (using Context)
Agent: Reasons through the problem (using Model)
Agent: Takes actions
Agent: Verifies results
Agent: Iterates if needed
Agent: Delivers completed work

Agent is the execution engine
Human sets direction, agent completes
Workflow is autonomous
```

### What Changed
1. **Model:** Better reasoning, longer context, more reliable
2. **Instructions:** Agents have persistent identity and rules
3. **Skills:** Packaged expertise, not just raw capability
4. **Tools:** Ability to interact with the world
5. **Context:** Right information at the right time

### The Key Insight
> "You're no longer the glue between prompts and outputs."

The human used to:
- Copy output from AI
- Paste into another tool
- Take result back to AI
- Repeat until done

Now the agent:
- Understands the end goal
- Plans the steps
- Executes them
- Delivers the result

**This is the fundamental shift.**

---

## Summary Table

| Building Block | What It Is | Example |
|----------------|------------|---------|
| **Model** | The brain — raw intelligence | Claude Opus for analysis, Haiku for categorisation |
| **Instructions** | Identity & rules — personality and guardrails | "Be conservative. Flag discrepancies over $500." |
| **Skills** | Learned capabilities — expertise with judgment | Month-end reconciliation workflow |
| **Tools** | Actions — discrete, single-purpose verbs | Send email, query database, create document |
| **Context** | Task-specific info — what's on the desk now | This client's transactions, chart of accounts |
| **Memory** | Persistence — what's retained across sessions | Remembering client miscodes contractor payments |
| **Orchestration** | Planning & sequencing — dynamic reasoning | Multi-step client onboarding with adaptation |

---

## For the Presenter

### Key Messages to Land
1. **Seven blocks** — this is the complete framework for understanding agents
2. **Skills ≠ Tools** — Skills have judgment, Tools are just verbs
3. **Context changes, Instructions persist** — know the difference
4. **Memory creates continuity** — turns cold starts into continuations
5. **Orchestration creates agency** — the difference between automation and intelligence
6. **Model selection matters** — right tool for the job, not always the biggest
7. **The shift is from "doing" to "instructing"** — you orchestrate, the agent executes
