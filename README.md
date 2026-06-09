# @n8n-dev/n8n-nodes-orbit-love

![orbit-love Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-orbit-love.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-orbit-love)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing orbit-love API integrations by hand.**

Every time you connect n8n to orbit-love, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to orbit-love took 5 minutes, not half a day?**

This node gives you **9+ resources** out of the box: **Activity Types**, **Activities**, **Webhooks**, **Members**, **Notes**, and 4 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-orbit-love
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-orbit-love`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **orbit-love API** → paste your API key
3. Drag the **orbit-love** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Activity Types</b> (1 operations)</summary>

- Get List all activity types for a workspace

</details>

<details>
<summary><b>Activities</b> (7 operations)</summary>

- Get List activities for a workspace
- Post Create a Custom or a Content activity for a new or existing member
- Get List activities for a member
- Post Create a Custom or a Content activity for a member
- Delete a post activity
- Put Update a custom activity for a member
- Get List member activities in an organization

</details>

<details>
<summary><b>Webhooks</b> (4 operations)</summary>

- Get List webhooks in a workspace
- Post Create a WEBHOOK
- Delete a WEBHOOK
- Put Update a WEBHOOK

</details>

<details>
<summary><b>Members</b> (8 operations)</summary>

- Get List members in a workspace
- Post Create or update a member
- Get Find a member by an identity
- Delete a member
- Put Update a member
- Delete Remove identity from a member
- Post Add identity to a member
- Get List members in an organization

</details>

<details>
<summary><b>Notes</b> (3 operations)</summary>

- Get the member s notes
- Post Create a note
- Put Update a note

</details>

<details>
<summary><b>Organizations</b> (2 operations)</summary>

- Get List organizations in a workspace
- Put Update an organization

</details>

<details>
<summary><b>Reports</b> (1 operations)</summary>

- Get a workspace stats

</details>

<details>
<summary><b>Users</b> (1 operations)</summary>

- Get info about the current user

</details>

<details>
<summary><b>Workspaces</b> (1 operations)</summary>

- Get all workspaces for the current user

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from orbit-love docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official orbit-love OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **orbit-love** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the orbit-love API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
