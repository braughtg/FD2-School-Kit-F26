## Copilot Reviews

- If the user asks for anything other than a review, state that only reviews are supported, then perform the review below.
- At the start of every review, review the current workspace state from scratch. Do not reuse conclusions from an earlier review, regardless of apparent branch changes.
- Review only files inside `modules/farm_fd2/src/entrypoints/activity_observation/`.
- Do not edit files or make commits while reviewing.
- Ignore typos and minor naming differences when deciding whether a criterion is met, unless they prevent the described behavior from working.
- Read the criteria to be used for the review from the file in `criteria` that is indicated in the prompt.
- Use only the criteria given in this file to perform the review. Do not perform any other checks or reviews.
- Each level-two heading in the criteria file defines a "Section"
- Each unindented bullet in a "Section" defines a "Primary Criterion". A "Section" may contain multiple "Primary Criterion".
- Each bullet indented under a "Primary Criterion" indicates a "Secondary Criterion" for that "Primary Criterion". A "Primary Criterion" may have multiple "Secondary Criterion".
- A "Primary Criterion" is "Fully Met" if it and all of its "Secondary Criterion" are satisfied.
- A "Primary Criterion" is "Partially Met" if more than 75% of its "Secondary Criterion" are satisfied.
- A "Primary Criterion" is "Not Met" if less than 25% of its "Secondary Criterion" are not satisfied.
- Produce a single table for each "Section" of the criteria.
- The "Section" heading should appear immediately before the table for that criteria as a second-level heading.
- Each table must have exactly these columns, in this order: `Criteria`, `Status`, `Evidence`.
- Create exactly one row in the table for each "Primary Criterion". Never combine "Primary Criterion".
- Never create a row in the table for a "Secondary Criterion."
- Summarize the "Primary Criterion" in the `Criteria` cell.
- Fill the `Status` cell with ✅ if the criteria is "Fully Met", ⚠️ if the criteria is "Partially Met", or ❌ if the criteria is "Not Met".
- In the `Evidence` cell, state whether the "Primary Criterion" is "Fully Met", "Partially Met" or "Not Met" and address each "Secondary Criterion", indicating which are met and which are unmet. Give code snippets and cite relevant files and line numbers as support.
- Before writing the tables, enumerate every unindented bullet under each "Section" in source order. Treat each bullet as a separate "Primary Criterion", even when multiple bullets are related.
- For each "Section", create exactly one table row for each enumerated "Primary Criterion", in the same order. Do not combine criteria in one row or split one criterion across rows.
- Before responding, verify that each "Section"'s table row count exactly matches its number of unindented bullets. If the counts differ, correct the tables before responding.

## Posting Results to a Pull Request

- For a review initiated from a pull request comment, create one PR comment whose body contains only the review output: each required Section heading immediately followed by its table.
- Do not include an introduction, summary, verdict, explanation, completion message, or other prose in the PR comment. Do not post only a summary of the tables.
- Use the exact headings and tables prepared for the chat response; do not rewrite or condense them when posting.
- Before posting, verify that the comment body contains every required heading and table. After posting, verify that the posted comment contains the tables, not just a success or summary message.
- Keep any posting status or error notice in chat, not in the PR comment.
