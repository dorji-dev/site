# AGENTS.md — Codex Behavior Rules (Strict Mode)

## Before ANY file change

For **every** user request that could result in file creation, modification, or deletion (including features, bug fixes, refactors, docs, configs, tests, or any code/text changes), you **MUST**:

1. **Do NOT edit any file yet**.
2. **Produce a change outline** with this exact structure:

   **Proposed changes**

   **Files to be modified:**

   `path/to/file1.ext` – [brief reason]

   `path/to/file2.ext` – [brief reason]

   **Files to be created:**

   `path/to/newfile.ext` – [brief reason]

   **Files to be deleted:**

   `path/to/old.ext` – [brief reason]

   **High-level summary:**
   - Bullet list of logical changes (max 8 bullets)
   - Include potential side effects or risks

3. **End with:**
   `→ Reply with "CONFIRM" exactly to proceed with these changes.`

4. **Wait** for the user to reply **exactly** with `CONFIRM` (case-sensitive, no extra words).

5. **Only then** apply the changes as outlined — no deviation without a new outline.

## If the user replies anything else

- If the user replies with `REJECT` – stop and ask for clarification.
- If the user replies with `NT:` at the start of the message – abandon the pending outline and treat the text after `NT:` as a new task.
- If the user asks a question – answer but do NOT change files.
- If the user replies with anything else while an outline is pending – treat it as additional context or a requested modification for the pending outline, produce a revised outline, and wait again for `CONFIRM`.
- If the user replies with anything else and the message seems unrelated to the pending outline – do NOT change files or produce a new outline. Ask the user to clarify whether the message is additional context for the pending outline or a new task. Remind them to start the message with `NT:` if it is a new task.

`NT:` must be the first characters of the message, including the colon.

## Exceptions (none by default)

No exceptions unless explicitly overridden by a user saying `"IGNORE AGENTS.md for this single request"` – but log a warning.

## Developer reply rule to actually make changes

**The developer must reply with:**
`CONFIRM`

(No quotes, no punctuation, no extra spaces.)

---

## After CONFIRM and applying changes

Once you have made the approved changes, you **MUST** include a high-priority manual testing note for the developer.

The testing note must:

- Clearly state that the developer should manually test the changes thoroughly before considering the work complete.
- Be specific to the actual change that was implemented.
- List exactly what to test, including primary flows, edge cases, and any relevant regression checks.
- For UI changes, explicitly include UI break checks such as long text, narrow widths, responsive layouts, overflow, truncation/line-clamp behavior, loading states, and empty states.
- Avoid generic wording like “please test the app” unless it is followed by concrete test steps.

Once you have made the approved changes, you **MUST** generate a commit message with this exact format:

```text
<type>(<scope>): <subject>

<detailed outline of what was changed>
Files modified: <list>

Files created: <list>

Files deleted: <list>

Co-authored-by: Codex codex@team.local

text
```

### Allowed `<type>`:

- `feat` – new feature
- `fix` – bug fix
- `refactor` – code change that neither fixes a bug nor adds a feature
- `perf` – performance improvement
- `docs` – documentation only
- `style` – formatting, missing semicolons, etc (no code change)
- `test` – adding missing tests or correcting existing tests
- `chore` – build process, tooling, config files

### `<scope>` (optional but encouraged):

Use the **module name** (e.g., `auth`, `api`, `db`, `ui/button`).
If no obvious module, omit the parentheses entirely: `feat: message`

### `<subject>` rules:

- Imperative mood ("Add" not "Added")
- No period at the end
- Max 72 characters

### Example:

```text
fix(auth): validate token expiry before session refresh

Added expiry check in token validator

Reject tokens expired >5 minutes

Added unit test for edge case

Files modified: src/auth/token.js, tests/auth/token.test.js

Files created: none

Files deleted: none

text
```

**Developer must review this message before committing.**

---

## For developers: quick reference

| You want to...              | Reply with...                              |
| --------------------------- | ------------------------------------------ |
| Approve and apply changes   | `CONFIRM`                                  |
| Reject the plan             | `REJECT`                                   |
| Add context to pending plan | Send the additional context normally       |
| Start a new task            | `NT: your new task`                        |
| Bypass rules (rare)         | `IGNORE AGENTS.md for this single request` |
