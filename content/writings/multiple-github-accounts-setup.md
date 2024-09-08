---
title: "Setting Up Multiple GitHub Accounts with Git, SSH, ZSH, and Oh My Zsh"
description: "A comprehensive guide to configuring multiple GitHub accounts using SSH keys, scoped gitconfig, ZSH, and Oh My Zsh for autoloading SSH keys, with emphasis on backing up existing configurations"
publishedAt: 2024-09-04
readingMins: 20
---

Managing multiple GitHub accounts on a single machine can be tricky, but it's often necessary for developers who maintain separate personal and work accounts. This guide will walk you through the process of setting up multiple GitHub accounts using SSH keys, scoped gitconfig, and ZSH with Oh My Zsh for autoloading SSH keys.

## Prerequisites

- Git installed on your machine
- Access to multiple GitHub accounts
- Basic knowledge of terminal/command line operations
- ZSH installed (preferred shell)
- Oh My Zsh installed (or another ZSH plugin manager of your choice)

## Important: Backup Your Existing Configurations

Before proceeding with any changes, it's crucial to back up your existing configurations. This will allow you to revert changes if needed and prevent accidental loss of important settings.

1. Create a backup directory:

   ```shell
   mkdir ~/config_backups
   ```

2. Backup your existing files:

   ```shell
   cp ~/.zshrc ~/config_backups/.zshrc_backup
   cp ~/.gitconfig ~/config_backups/.gitconfig_backup
   cp ~/.ssh/config ~/config_backups/ssh_config_backup
   ```

3. If you have existing SSH keys, back them up as well:

   ```shell
   cp -r ~/.ssh/*.pub ~/config_backups/
   cp -r ~/.ssh/id_* ~/config_backups/
   ```

Remember to keep these backups in a safe place. You can also consider using version control or a cloud storage solution for additional safety.

## Step 1: Generate SSH Keys

For each GitHub account, you need to generate a unique SSH key.

1. Open your terminal.
2. Generate an SSH key for your first account:

   ```shell
   ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519_github_account1
   ```

3. Repeat the process for your second account:

   ```shell
   ssh-keygen -t ed25519 -C "your-other-email@example.com" -f ~/.ssh/id_ed25519_github_account2
   ```

## Step 2: Configure ZSH and Oh My Zsh for SSH Key Management

1. Open your ZSH configuration file:

   ```shell
   nano ~/.zshrc
   ```

2. Add the ssh-agent plugin to your Oh My Zsh plugins list:

   ```shell
   plugins=(... ssh-agent ...)
   ```

3. Configure the ssh-agent plugin to manage your SSH keys. Add the following lines after the plugins list:

   ```shell
   zstyle :omz:plugins:ssh-agent identities id_ed25519_github_account1 id_ed25519_github_account2
   zstyle :omz:plugins:ssh-agent lifetime 4h
   ```

   This configuration tells the ssh-agent plugin to automatically load your SSH keys and keep them in memory for 4 hours.

4. Save the file and exit the editor.

5. Reload your ZSH configuration:

   ```shell
   source ~/.zshrc
   ```

Now, your SSH keys will be automatically loaded when you start a new terminal session.

## Step 3: Add SSH Keys to GitHub Accounts

1. Copy the public key for the first account:

   ```shell
   cat ~/.ssh/id_ed25519_github_account1.pub | pbcopy
   ```

2. Log in to your first GitHub account.
3. Go to Settings > SSH and GPG keys > New SSH key.
4. Paste the copied key and save.
5. Repeat steps 1-4 for your second account using `id_ed25519_github_account2.pub`.

## Step 4: Create SSH Config File

1. Create or edit the SSH config file:

   ```shell
   nano ~/.ssh/config
   ```

2. Add the following content:

   ```ssh-config
   # Account 1
   Host github.com-account1
     HostName github.com
     User git
     IdentityFile ~/.ssh/id_ed25519_github_account1

   # Account 2
   Host github.com-account2
     HostName github.com
     User git
     IdentityFile ~/.ssh/id_ed25519_github_account2
   ```

## Step 5: Set Up Scoped GitConfig

1. Create a directory structure for your different Git accounts:

   ```shell
   mkdir -p ~/git/personal
   mkdir -p ~/git/work
   ```

2. Create a gitconfig file for each account:

   ```shell
   touch ~/git/personal/.gitconfig
   touch ~/git/work/.gitconfig
   ```

3. Edit the personal gitconfig (`~/git/personal/.gitconfig`):

   ```properties
   [user]
       name = Your Personal Name
       email = your-personal-email@example.com
   [github]
       user = your-personal-github-username
   [core]
       sshCommand = ssh -i ~/.ssh/id_ed25519_github_account1
   ```

4. Edit the work gitconfig (`~/git/work/.gitconfig`):

   ```properties
   [user]
       name = Your Work Name
       email = your-work-email@example.com
   [github]
       user = your-work-github-username
   [core]
       sshCommand = ssh -i ~/.ssh/id_ed25519_github_account2
   ```

5. Modify your global gitconfig (`~/.gitconfig`) to use these scoped configs:

   ```properties
   [includeIf "gitdir:~/git/personal/"]
       path = ~/git/personal/.gitconfig
   [includeIf "gitdir:~/git/work/"]
       path = ~/git/work/.gitconfig
   ```

## Step 6: Clone Repositories

When cloning repositories, make sure to clone them into the appropriate directory:

```shell
# For personal projects
cd ~/git/personal
git clone git@github.com:personal_github_account/repo.git

# For work projects
cd ~/git/work
git clone git@github.com:company_github_account/repo.git
```

Git will automatically use the correct configuration based on the directory.

## Step 7: Verify Setup

Test your SSH connections:

```shell
ssh -T git@github.com-account1
ssh -T git@github.com-account2
```

You should see a success message for each account.

## Additional Tips

1. You can still use the global gitconfig method for repository-specific configurations:

   ```properties
   [url "git@github.com-account1:personal_github_account/"]
       insteadOf = git@github.com:personal_github_account/

   [url "git@github.com-account2:company_github_account/"]
       insteadOf = git@github.com:company_github_account/
   ```

   Add this to your global `~/.gitconfig` if you need to override the SSH host for specific repositories.

2. Remember to always check which directory you're in when creating new repositories or cloning existing ones to ensure you're using the correct GitHub account.

3. If you're using a different ZSH plugin manager, consult its documentation for the equivalent setup to autoload SSH keys.

4. You can add aliases to your `~/.zshrc` file to quickly switch between personal and work directories:

   ```shell
   alias cdp="cd ~/git/personal"
   alias cdw="cd ~/git/work"
   ```

5. Regularly backup your configuration files, especially after making significant changes or before system updates.

By following these steps, you can effectively manage multiple GitHub accounts on a single machine using SSH keys, scoped gitconfig, and ZSH with Oh My Zsh. This setup allows you to keep your work and personal projects separate while maintaining secure access to your repositories, using the correct user information for each account, and automatically loading your SSH keys for a smoother workflow.

Remember, if you encounter any issues during setup, you can always refer back to your backups to restore your previous configuration.
