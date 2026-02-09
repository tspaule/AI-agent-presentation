# JackalBot — Technical Context

## What Is JackalBot?

JackalBot is Thomas Paule's personal AI agent, built on the ClawdBot/OpenClaw framework. It's a custom deployment of an autonomous AI assistant that can:
- Receive and process messages via Discord
- Transcribe and understand voice notes
- Send emails on Thomas's behalf
- Search the web
- Manage calendar and tasks
- Access various tools and skills
- Maintain memory and context across conversations

## Architecture

### Platform
- **Framework:** ClawdBot (now open-sourced as OpenClaw)
- **Hosting:** Digital Ocean (cloud-hosted, not local)
- **Interface:** Discord (for bidirectional communication)
- **LLM Backend:** Claude (Anthropic)

### Why Cloud-Hosted?
1. **Security Isolation:** If something goes wrong, it's contained in the cloud environment
2. **Always On:** Available 24/7, not dependent on local machine being on
3. **Centralized Access:** Can interact from any device via Discord
4. **Resource Efficiency:** Heavy processing happens in the cloud

### Why Discord?
1. **Bidirectional Communication:** Messages, files, voice notes in both directions
2. **Structured Channels:** Can organize by topic/project
3. **Notifications:** Real-time alerts on any device
4. **API Access:** Robust API for bot integration
5. **Thread Support:** Keeps conversations organized

## Capabilities

### Communication
- **Voice Note Processing:** Transcribes audio → text → understanding → action
- **Email Sending:** Can compose and send emails via connected Gmail
- **Discord Messaging:** Responds in threads, channels, DMs

### Information Access
- **Web Search:** Can search the web and summarize findings
- **Calendar Access:** Reads Google Calendar for scheduling
- **Memory:** Maintains persistent notes about preferences, projects, context

### Tool Use
- **Skills Framework:** Modular skills that can be added/removed
- **File Operations:** Can read/write files within its environment
- **API Integrations:** Various connected services

## The Name

"Jackal" — as described in Thomas's setup:
- Cool and calculated, contrarian by nature
- A thinking partner, not just an assistant
- Challenges ideas, doesn't just execute
- Has a point of view
- Direct, sharp, occasionally funny

## Example Interactions

### Voice Note → Email
```
User: [voice note] "Hey Jackal, send an email to Sarah about the meeting tomorrow. Tell her 3pm works and I'll bring the project brief."

JackalBot: 
1. Transcribes voice note
2. Identifies intent: send email
3. Extracts: recipient (Sarah), content (meeting confirmation, 3pm, project brief)
4. Drafts email
5. Sends via Gmail
6. Confirms completion in Discord
```

### Information Retrieval
```
User: "What's on my calendar for tomorrow?"

JackalBot:
1. Reads Google Calendar
2. Extracts tomorrow's events
3. Formats response
4. Sends summary in Discord
```

### Complex Task
```
User: "Research the top 3 competitors to Visory and summarize their pricing models"

JackalBot:
1. Identifies task: competitive research
2. Searches web for Visory competitors
3. Visits each competitor's pricing page
4. Extracts and synthesizes information
5. Formats comparison summary
6. Delivers in Discord
```

## Security Considerations

### What JackalBot Has Access To
- Discord (messaging interface)
- Gmail (send/read emails)
- Google Calendar (read events)
- Web browsing (search and fetch)
- File system (within its container)
- Various configured skills

### Risks to Discuss
1. **Email Access:** Can send emails as Thomas — requires trust in the agent
2. **Skill Installation:** Third-party skills could contain malicious code
3. **Context Leakage:** Agent has access to personal information
4. **Action Without Confirmation:** Some actions happen automatically

### Mitigations
1. **Cloud Isolation:** Runs in Digital Ocean, not on local machine
2. **Skill Vetting:** Only install reviewed/trusted skills
3. **Permission Scoping:** Limit what the agent can access
4. **Audit Logging:** Track what actions the agent takes
5. **Human in the Loop:** For high-risk actions, require confirmation

## Demo Scenarios for Presentation

### Scenario 1: Voice → Email (Primary Demo)
- Send voice note with task
- Watch transcription
- Watch email composition
- Confirm delivery
- Attendees check inbox

### Scenario 2: Live Q&A
- Attendees ask JackalBot questions in Discord
- Show real-time reasoning and response
- Demonstrate tool use

### Scenario 3: Context Awareness
- Ask JackalBot about Thomas's schedule
- Show it remembering previous conversations
- Demonstrate personalization

## Technical Details for Curious Attendees

### ClawdBot/OpenClaw
- Open source framework: https://github.com/clawdbot/clawdbot
- Documentation: https://docs.clawd.bot
- Community: Discord server

### Setup Requirements
- Server/hosting (Digital Ocean, AWS, etc.)
- Discord bot token
- API keys for connected services (Gmail, etc.)
- Claude API key
- Configuration files (YAML-based)

### Skill Examples
- Email (Gmail integration)
- Calendar (Google Calendar)
- Web search (Brave API)
- Weather
- GitHub integration
- Custom scripts
