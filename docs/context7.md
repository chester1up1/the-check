# Context7 Setup

## Purpose

Context7 gives Codex access to up-to-date library and framework documentation through MCP.

For this project, that is especially useful when we work with:

- Next.js
- React
- Spotify APIs
- Apple Music APIs
- YouTube-related tooling
- auth, caching, and deployment libraries

## Project config

This repository includes a project-level Codex config at:

- `.codex/config.toml`

Configured MCP server:

- `context7`

## Required environment variable

Add this variable before launching Codex:

```env
CONTEXT7_API_KEY=your_key_here
```

You can keep the variable in your local environment or load it from your usual shell profile.

## Config shape

The config uses a local `stdio` MCP process:

```sh
npx -y @upstash/context7-mcp
```

The API key is provided through the environment variable:

- `CONTEXT7_API_KEY`

## Usage guidance

When asking for code, setup steps, library APIs, or integration examples, mention:

- `use context7`

Examples:

- `Set up a Next.js app router API route for track matching. use context7`
- `Show the latest Spotify search API pattern in TypeScript. use context7`

## Notes

- If Codex was already open before this config was added, restart the session or app so the MCP config is reloaded.
- If the MCP server does not appear, first verify that `CONTEXT7_API_KEY` is set in the environment that launches Codex.
- If you also configured Context7 globally, keep the transport consistent there too, preferably `stdio` on Windows.
