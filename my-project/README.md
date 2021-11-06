## README FILE md 
### DATE: 11.05.2021
### Instruction how to merge in git
1) if merging feature_x branch into master
2) git checkout master
3) git merge feature_x
4) OR
5) git checkout branchYouWantToMerge this is new branch
6) git checkout branchYouWantToMergeInto
7) git merge branchYouWantToMerge

### second situation in stackoverflow 38206196
1) Situation monday, tuesday, wednesday: 
2) monday: project not yet finished
2) tuesday: hotfix
3) wednesday: mess around branch
### FIRST
#### 365 upvotes: 
1) git checkout wednesday
2) git merge monday

### if monday commits ==>  tuesday, then rebase
1) git checkout tuesday
5) git rebase monday
6) this will update tuesday with latest of monday.

### But I want the opposite tuesday commits ==> monday
7) But developer wants monday with hot fix from tuesday
8) tuesday sees monday but monday does not see tuesday
9) so he can not rebase tuesday into monday
10) if rebase origin/tuesday: error invalid upstream origin/tuesday

### other version
1) git checkout monday
2) git merge tuesday (with the hotfix)
3) OR 
4) git checkout main, git merge tuesday (with the hotfix)

###  or create new branch on the run
1) git checkout saturday //new branch
2) git checkout monday
3) git merge saturday

## This is  SATURDAY.
### I have master, M, T, W, T, F, S, and Sunday.
#### Master is the first commit of Robin Wieruch tutorials: only console.log "Hello Project", gitignore, env, package.json, this README
#### ACTIONS done so far:
1) git remote add ssh npx-express-mcc-ejs
2) git pull origin main into saturday: NOPE 
### refusing to merge unrelated histories
3) git fetch origin main did something but I don't know where is it.
3) Created a new repository in github: QUARTER3
4) git@github.com:nelsondio/QUARTER3.git
5) need to set url to point to it

## INSTRUCTIONS AFTER CREATIN EMPTY REPOSITORY
### …or create a new repository on the command line
1) echo "# QUARTER3" >> README.md
2) git init
3) git add README.md
4) git commit -m "first commit"
5) git branch -M main
6) git remote add origin git@github.com:nelsondio/QUARTER3.git
7) git push -u origin main
### …or push an existing repository from the command line
1) git remote add origin git@github.com:nelsondio/QUARTER3.git
2) git branch -M main
3) git push -u origin main
### …or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

### git remote set-url git@github.com:nelsondio/QUARTER3.git

### git remote set-url origin git@github.com:nelsondio/QUARTER3.git git@github.com:nelsondio/npx-express-mcc-ejs.

## RESULTS
1) git push origin main: error => no reference or something.
2) git branch -M main: it forced sunday into main
3) git push origin main: it synced!!! But now no more sunday.
4) plan: push all branches.