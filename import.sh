#!/bin/bash

# Set GitHub username and token
USERNAME="NIRAV-13"
TOKEN="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"

# Set OLDPWD to the script's current working directory
OLDPWD=$(pwd)

# Read repositories from file into an array
repositories=()
while read -r line; do
  repositories+=("$line")
done < repositories.txt

# Loop through repositories and import them
for repo in "${repositories[@]}"
do
    # Create new GitHub repository
    curl -u $USERNAME:$TOKEN https://api.github.com/user/repos -d '{"name":"'${repo}'"}'

    # Change directory to local repository
    cd ~/Desktop/bashForRepos/Repos/${repo}

    # Initialize local repository as a Git repository
    git init

    # Add GitHub repository as a remote
    git remote add origin https://github.com/${USERNAME}/${repo}.git

    # Add all files to Git and commit
    git add .
    git commit -m "Initial commit"

    # Push local repository to GitHub repository
    git push -u origin master

    # Change directory back to script directory
    cd $OLDPWD
done




