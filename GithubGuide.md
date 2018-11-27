Shreddit GitHub Guide

Say you want to do some work on the project. Here's what to do:

1. cd into the DnD-Campaign directory.
2. `git pull` so that your local master is synced up with the remote master.
3. Create and check out a new branch from your local master with `git checkout -b [branchName]`
    - Make sure that you name your branch after the feature you're working on. That way it will be clear during pull requests what features are being merged.
4. Make your changes. Commit to your local branch often with `git add .` and `git commit -m [Message]`
5. When you're ready to merge your changes into the remote master, sync your local master branch with the remote master with `git fetch origin master`
6. Merge your local branch into your local master with `git merge master`
7. Resolve any conflicts locally.
8. When your conflicts are resolved on your local branch, push it up to the remote with `git push origin [branchName]` 
9. Go on to *github.com* and find your branch. Click on "Submit pull request" to request your branch be merged into master.
10. When the branch is merged, the project manager will remove the branch from GitHub. The feature is added, and the branch is no longer needed.
    - You can delete your local branch with `git branch -d [branchName]`
    - You don't have to do this, but it can clean up your local repo and prevent you from accidentally checking out an old branch that's way behind the master.
11. To work on a new feature, `git checkout master` so you're no longer on your old branch.
12. Then, go back to step 1 and create a new branch named after the new feature you'll be working on.
