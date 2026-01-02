<<<<<<< HEAD
# Smart and Sustainable Transportation Lab Website

This repository hosts the source code for the **Smart and Sustainable Transportation Lab (SSTL)** website, based in Québec City, Canada.  

The lab focuses on **AI-driven and data-driven methods for transportation**, with applications in:
- Analysis of travel behavior and discrete choice modeling.
- Development of integrated urban mobility solutions like Mobility as a Service (MaaS).
- Examination of the relationship between transportation, climate change, and land use.
- Application of AI, machine learning, and econometric modeling to solve transportation problems.

 **Live website:** https://sstl-ul.github.io

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Run Locally](#run-locally)
- [Editing Content](#editing-content)
  - [Home Page](#home-page)
  - [Team Profiles](#team-profiles)
  - [Projects](#projects)
  - [Publications and Files](#publications-and-files)
  - [Images and Photos](#images-and-photos)
- [Development Notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

This is a static, GitHub Pages–hosted website that presents the work of the Smart and Sustainable Transportation Lab:

- lab vision and research themes,
- team members and collaborators,
- current and past projects,
- publications, talks, and related material,
- news and opportunities for students and collaborators,
- contact information and location (Québec City, Canada).

The site is based on the **academicpages** template and adapted for the SSTL.

---

## Features

- Responsive website suitable for desktop and mobile.
- Dedicated pages for:
  - **Home** (`index.html`, `home-index.html`)
  - **Team overview** (`team.html`)
  - **Individual team members** (`team/*.html`)
  - **Projects overview** (`projects.html`)
  - **Individual project pages** (`project_page/project_1.html` – `project_7.html`)
  - **Publications** (`publications.html`, `files/`)
  - **News and updates** (`news.html`)
  - **Opportunities** (`opportunities.html`)
  - **Contact** (`contact.html`, `forms/contact.php`)
- Storage of:
  - papers, slides, and BibTeX entries in `files/`,
  - team photos and lab images in `photoes/` and `images/`.
- GitHub integration:
  - issue templates for bug reports and feature requests,
  - GitHub Actions workflows (e.g., scraping talks or data),
  - ready for deployment via GitHub Pages.

---

## Tech Stack

- **HTML5 / CSS3 / JavaScript** (static site)
- **SCSS** for styling (compiled to CSS)
- **GitHub Pages** for hosting
- Tooling:
  - **Ruby / Bundler** (from the original academicpages/Jekyll setup)
  - **VS Code Dev Containers** (via `.devcontainer/`)

---

## Repository Structure

High-level structure of the repository:


.devcontainer/          # VS Code dev container configuration
.github/
  ISSUE_TEMPLATE/       # GitHub issue templates (bug report, feature request)
  workflows/            # GitHub Actions workflows (e.g., scrape_talks.yml)

.idea/                  # JetBrains IDE project configuration (optional/local)

_site/                  # Built static site used by GitHub Pages
  assets/               # Compiled CSS, JS, fonts, images...
  files/                # Deployed PDFs, slides, BibTeX, etc.

assets/                 # Source assets
  css/                  # Stylesheets
  fonts/                # Font files
  img/                  # Template images
  js/                   # JavaScript files
  scss/                 # SCSS sources
  vendor/               # Third-party libraries
  webfonts/             # Web fonts

files/                  # Publications and slides (source files)
  bibtex1.bib
  paper1.pdf
  slides1.pdf
  ...

forms/
  contact.php           # PHP script handling the contact form
  Readme.txt            # Notes related to the forms

images/                 # General images for the site
  themes/
    logo_4_3_1.png      # Lab logo
    manifest.json       # Web app manifest

photoes/                # Photos of team members.
  Olivier.png
  camille.jpg
  hamid.png
  madi.JPG
  marc.jpg
  ...

project_page/           # Project-specific pages and project section
  project_1.html
  project_2.html
  project_3.html
  project_4.html
  project_5.html
  project_6.html
  project_7.html
  

team/                   # Individual team member profile pages
  camille-godbout.html
  hamid-hasanzadeh.html
  mahdie-asl-javadian.html
  marc-jacoby.html
  meryam-chaieb.html
  olivier-bussiere.html
  rahul-iyer.html
  xianyu-zhong.html
  ...

.gitignore              # Git ignore rules
.nojekyll               # Disable GitHub's automatic Jekyll processing

Gemfile                 # Ruby dependencies (from academicpages)
Gemfile.lock            # Locked Ruby dependency versions

LICENSE                 # Repository license
README.md               # This file

about-bobin.html        # Individual profile/biography page
contact.html            # Main contact page
home-index.html         # Home page content
index.html              # Entry point for GitHub Pages
news.html               # News page
opportunities.html      # Opportunities page
projects.html           # Projects overview page
publications.html       # Publications page
team.html               # Team overview page

# Getting Started
## Prerequisites

To view or do basic edits:

Git

A modern web browser

Optional (for more advanced development or replicating the template toolchain):

Ruby and Bundler

VS Code with Dev Containers, or Docker

Run Locally

Clone the repository
```bash

git clone https://github.com/SSTL-UL/SSTL-UL.github.io.git
cd SSTL-UL.github.io


Open the site in a browser

The simplest option is to open index.html directly in your browser (double-click or drag and drop).

For a more realistic setup, you can use a simple local HTTP server, for example with Python:

```bash
# Python 3
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

(Optional) Test the contact form

Because forms/contact.php uses PHP, you need a PHP-capable server:

```bash

php -S localhost:8000
# Then open http://localhost:8000/contact.html
```
## Editing Content

Most updates can be done by editing static HTML files and replacing assets.

### Home Page 
- Main entry point: index.html

- Home content/hero section: home-index.html

- Update text, links, and sections directly in these files.

### Team Profiles

- Team overview: team.html

- Individual member pages live in the team/ folder
(e.g., team/camille-godbout.html, team/hamid-hasanzadeh.html, etc.).

To add or edit a member:

- Create or edit the corresponding HTML file in team/.

- Add/update the member card and link in team.html.

- Add/update their photo in photoes/ and ensure the path in the HTML is correct.

### Projects

- Projects overview: projects.html

- Individual project pages: project_page/project_1.html to project_7.html.

- To add a new project: Duplicate one of the existing project_X.html files in project_page/.

- Update title, description, members, links, etc.

- Add a link to the new project page in projects.html.

### Publications and Files

- Publications listing: publications.html

- Files: files/ for source files, _site/files/ for the deployed copies.

To add a new publication:

- Place the PDF/slides/BibTeX file into files/.

- Add an entry in publications.html linking to the file(s).

- If using any automated build process, regenerate _site/ (otherwise GitHub Pages will serve the static files you commit).

### Images and Photos

- General images and favicons: images/ (and images/themes/).

- Team and lab photos: photoes/.

- To change the logo, hero image, or photos:

- Replace the corresponding image file in images/ or photoes/.

- Make sure file names and paths referenced in the HTML and CSS match.

## Development Notes

* The _site/ directory contains the built version of the site.
In general you should edit files outside of _site/ and commit both sources and, if desired, the built files.

* The .devcontainer/ folder defines a containerized development environment.
If you open this repo in VS Code with the Dev Containers extension, it can automatically configure tools to match the original template.

* The .github/ folder configures:

    * issue templates (bug report, feature request),

    * GitHub Actions workflows such as scrape_talks.yml.

# Contributing

Contributions are welcome, especially from SSTL members and collaborators.

1- Fork the repository.

2- Create a new branch:
```bash
git checkout -b feature/my-feature
```

3- Make your changes and commit:
```bash
git commit -m "Add my feature"
```

4- Push to your fork and open a pull request against master.

Please use the existing issue templates when reporting bugs or requesting features.

# License

This project is distributed under the terms of the license specified in the LICENSE file.
=======
# SSTL-UL.github.io
final_version
>>>>>>> 7094ad0a30edf523cdd17795ddc710397010e4f3
