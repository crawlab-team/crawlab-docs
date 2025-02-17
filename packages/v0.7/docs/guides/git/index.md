---
sidebar_position: 7
title: Git
---

# Git

:::info
Git support is only available in **Crawlab Pro**.
:::

You can integrate Git to Crawlab for team collaboration, version control and CI/CD. Crawlab supports both HTTPS and SSH
for Git repositories.

## Clone Git Repository

1. Navigate to the `Git Repo` list page.
2. Click the `New Git Repo` button.
   ![Create Git Repo](/img/guides/git/create-git-repo.png)
3. Enter the URL of the Git repository, and the system will detect whether it's HTTPS or SSH.
4. Enter the username and password for the Git repository or SSH key.
5. Click the `Confirm` button.
6. The system will start cloning the Git repository.
   ![Git Repo List](/img/guides/git/git-repo-list.png)

## Switch Branch

1. Click the `Checkout` button.
2. Select the branch you want to check out.
3. Click the `Confirm` button.

## Pull Code

1. Click the `Pull` button and confirm.
2. The system will pull the code from the remote repository.

## Configure Auto Pull

1. Check the `Auto Pull` option.
2. Select the interval for code pulling.
3. For spiders with the `Auto Pull` option checked, the system will automatically pull the code every minute.

## Commit Changes

1. Select the `Changes` tab.
2. Check the files you want to commit.
3. Click the `Commit` button and confirm.