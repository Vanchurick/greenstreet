# The Green Street Development

### Useful links:
- [The Meistertask table](https://www.meistertask.com/app/project/nhK6nEaf/green-street-project "The Meistertask table") - project task manager

------------
## Steps to start developing
### 1. Clone repo

`git clone https://github.com/Vanchurick/greenstreet.git`

### 2. Install dependencies
**Add [ESlint](https://marketplace.visualstudio.com/items?itemname=dbaeumer.vscode-eslint "eslint") and [Prettier](https://marketplace.visualstudio.com/items?itemname=esbenp.prettier-vscode "prettier") as extensions for VS Code editor**

`npm install`

### 3. Start project to develop

`npm start`

### Format all files according to project codestyle 

`npm run pretty`

------------



## How to commit
In terminal:
1. `git add .` - add all changed files to commit
2. `git commit -m "Commit message"`

### Example of the correct commit

`GS-001: The correct commit mesage`

1. `GS-001` - the number of the [Meistertask table](https://www.meistertask.com/app/project/nhK6nEaf/green-street-project "Meistertask task table") task
2. `:(space)` - correct separator
3. `The correct commit mesage` - example of commit message according to the [Meistertask table](https://www.meistertask.com/app/project/nhK6nEaf/green-street-project "Meistertask task table") task. Can be changed by developer.

### How to revert last commit
In terminal:
`git reset HEAD~1`

### How to add commited changes to the remote repo
In terminal:
`git push origin [branch name]`

### How to download last changes from the develop branch
In terminal:
`git pull develop`
