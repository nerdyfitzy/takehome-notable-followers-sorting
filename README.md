# Take-Home: Notable Followers Sorting Bug

Welcome, and thanks for taking the time to work on this. This is a small,
self-contained React + TypeScript app. The assignment is designed to take around 1 hour, with a maximum recommended time of 2 hours, so please avoid spending significantly more time than that.

## The product

An artist's page shows a **Notable Followers** table — a list of well-known
accounts that follow the artist, with their follower counts. Users can click a
column header to sort the table. Clicking **Followers** should put the biggest
accounts on top.

## The bug (reported by a customer)

> "When looking at Notable Followers on the Instagram tab, it does not sort
> correctly by number of followers. An account with **1M** followers shows up
> _below_ accounts with **500k** when sorting from top to bottom."

## Your task

1. Get the app running and reproduce the bug in the browser.
2. Investigate and find the root cause.
3. Fix the sorting so that ordering by follower count is correct in both
   directions (descending = largest first, ascending = smallest first).
4. Make the provided test suite pass.

We care more about _how_ you reason about the problem than about lines of code. Use the pr_description_template.md file to explain your solution. The template already includes sections for user-facing and team-facing messages, which will be used to evaluate your communication skills.


## Getting started

```bash
npm install
npm test       # the suite currently fails — that's expected
npm run dev     # open the printed localhost URL and click the "Followers" header
```

## What we're evaluating

- Correctly identifying the root cause (not just hard-coding a fix for this
  one column).
- A clean fix that keeps the sorting helper **generic** — it's used by many
  tables across the app, so the other columns (e.g. Username, Country) must
  keep sorting correctly too.
- Clear communication about what was wrong and what you changed.

## Project layout

```
src/
  data.ts            # the notable-followers data, shaped like our API response
  sortUtils.ts       # generic sorting helpers used across the app
  SortableTable.tsx  # a clickable-header table that uses sortUtils
  App.tsx            # renders the Notable Followers table
  __tests__/
    sortUtils.test.ts  # the acceptance test you need to make pass
```

You should only need to touch `src/`. You shouldn't need to edit the test or
the data, but read them carefully.

## Bonus (optional)

Make sure your fix doesn't break the other columns. If you have time, jot down
how you'd make this sorting more robust as the app and its data grow, and what
trade-offs your approach introduces.

## Submission Instructions

1. Fork this repository.
2. Complete the assignment in your own fork.
3. Open a pull request with your completed solution.
4. Use the `pr_description_template.md` file for your PR description.
   - Explain the root cause and your solution.
   - Include the customer-facing follow-up message requested in the template.
   - Include the team-facing message requested in the template.
5. Email the GitHub link to your pull request to hiring@chartmetric.com with the subject line:

   `[Your Name - Customer Success Engineer] Take-Home Assignment`

