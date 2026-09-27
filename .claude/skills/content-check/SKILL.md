---
name: content-check
description: Audit visible site copy (the files in content/) against AGENTS.md's content-setup.md "Things Claude Must Never Invent" list and its content principles. Use before finishing any task that adds or edits visible text, or when the user asks to check the site for inaccurate/invented claims.
---

Re-read AGENTS.md's `content-setup.md` section, specifically:

- "Things Claude Must Never Invent" (university, degree, clients, company names, employment, project results/metrics, years, certifications, testimonials, job titles, responsibilities, technologies not actually used)
- "Content Principles" (is it true? is it useful? does it sound like Setayesh? is it unnecessarily promotional?)

Then scan the visible copy in `content/` (profile.ts, projects.ts, resume.ts, certificates.ts, copy.ts) for:

1. Any specific fact not traceable to content-setup.md — a date, number, client name, credential, or result that looks plausible but isn't sourced there.
2. Promotional/advertising language that content-setup.md's Voice section calls out as bad (e.g. "I transform businesses", consulting-style claims, exaggerated titles like Business Consultant/Strategist/Architect that content-setup.md explicitly says she is NOT positioning as).
3. Any of design.md/claude-prompt.md's explicitly banned elements if they've crept into copy (skill percentages, star ratings, "expert/master/ninja" labels, fake CTAs like "Book a call"/"Get a quote"/"Hire me now").

Report findings as a flat list: quote the exact text, say which rule it violates, and either point to the correct sourced version (if content-setup.md has it) or recommend omitting/marking it TODO. Do not silently fix anything — content changes should go through the user since factual accuracy can't be inferred from the code.
