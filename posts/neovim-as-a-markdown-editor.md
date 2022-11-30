---
title: Neovim as a Markdown Editor
abstract: A detailed explination of how I use neovim to edit markdown
introduction: Vim/Neovim has the power of quick navigation, fast editing etc. It's hard to go back to other markdown editors after using Neovim. However, Neovim doesn't look that good straigh out of the box. So here's my twists. 
category: WebDev
published: true
date: 11/30/2022
---

## Soft Wrap vs Hard Wrap 

**Hard wrap**: the editor addes a new line `\n` at defined width.  
**Soft wrap**: the editor makes the text looks like its on another line when reached the edge, but it's actually still one very long line.  

Hard wrap is easy to navigate since it break a long sentence into multiple lines so that we can use `j` or `k` to navigate to different part of that sentence.  
*gif here*  
However, when you delete in the middle of the paragraph, the later text won't follow, breaking the paragraph.  
*gif here*  

Soft wrap is the opposite. It will maintain the paragraph, but hard to navigate inside long paragraph. You will have to hold `w` or `b`. For me, this trade off is worth it.  
*gif here*

## Enabling Soft Wrap 

```vim
set wrap "enable soft wrap
set linebreak "optional - prevent breaking a word into half
```

## Goyo and Limelight 

[Goyo](https://github.com/junegunn/goyo.vim) is plugin that provides distration-free writing in vim.  
It's best used with [LimeLight](https://github.com/junegunn/limelight.vim)  
*gif here*  
