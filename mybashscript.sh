#!/bin/bash

# Define the name of the file containing the repository URLs
repo_list="repositories.txt"

# Loop through each repository URL in the file
while read repo_url; do
  # Stop reading the file if we reach the end-of-file delimiter
  if [ "$repo_url" == "END_OF_FILE" ]; then
    break
  fi

  # Print the repository URL for debugging
  echo "Downloading repository: $repo_url"

  # Clone the repository to a directory with the same name as the repository
  repo_name="$(echo "$repo_url" | awk -F'/' '{print $NF}' | sed 's/.git$//')"
  git clone "$repo_url" "$repo_name"
done < "$repo_list"

# Output end-of-script message
echo "Script completed successfully."
