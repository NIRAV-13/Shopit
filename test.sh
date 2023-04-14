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

# Read URLs from file into an array
urls=()
while read -r line; do
  urls+=("$line")
done < repositories.txt

# Loop through repositories and import them
for i in "${!repository[@]}"
do
    repo="${repository[i]}"
    url="${urls[i]}"

    # Clone source repository from URL
    git clone "$url"

    # Change directory to local repository
    cd "$repo"

    # Add new remote for target repository in different workplace
    git remote add new-origin https://github.com/${USERNAME}/${repo}.git

    # Push changes to target repository
    git push -u new-origin master

    # Change directory back to script directory
    cd "$OLDPWD"
done
