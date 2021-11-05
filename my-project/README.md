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