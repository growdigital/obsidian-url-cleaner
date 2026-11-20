# URL Cleaner

Remove tracking parameters from URLs in Obsidian notes.

## Features

* Removes utm_* parameters
* Removes fbclid
* Removes gclid
* Removes igshid
* Removes mc_cid
* Removes mc_eid
* Removes rcm
* Removes ref
* Removes ref_src

## Command

Clean tracking parameters from URLs in current note

## Example

Before:

`https://www.linkedin.com/posts/example?utm_source=linkedin&utm_medium=social&rcm=abc123`

After:

https://www.linkedin.com/posts/example

## Installation

Install from the Obsidian Community Plugins directory.

Or manually install by copying:

* `manifest.json`
* `main.js`
* `styles.css`

into:

`VaultFolder/.obsidian/plugins/url-cleaner/`
