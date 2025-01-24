What are Git Hooks?
Git hooks are scripts that you can set up to run at certain events in the Git lifecycle. These events include different stages of a commit, like before a commit (pre-commit) and after a commit (post-commit).

These are useful in that they allow developers to run custom code tasks or even enforce standards by automating other scripts to run those tasks.

==================================================================================================

1. Install Husky

npm install husky --save-dev

<!-- 2. Enable Git Hooks


npx husky install -->

3. Add Husky Initialization to package.json

"scripts": {
"prepare": "husky install"
}

4. Add a Pre-commit Hook

npx husky add .husky/pre-commit "npm run lint"

```

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint

```

```
Explanation
Regex Syntax:

^: Matches the start of the string.
$: Matches the end of the string.
.+: Matches one or more characters.
|: Acts as an OR operator in regex.
Branch Name Patterns:

^(feature|bugfix)/: Ensures the branch starts with feature/ or bugfix/.
-important: Ensures the branch contains -important.
-ticket$: Ensures the branch ends with -ticket.
```
