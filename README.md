# Hugo Project

## Purpose

This repository is a part of my portfolio through which I aim to showcase my Technical writing skills. In this repository, I aim to impart two main ideas:
- A how-to guide to install and configure a Python SDK library
- How to publish this guide on a website using Hugo and GitHub Actions and host it on GitHub Pages.

We’ll walk through the process of building a website using Hugo, a static site generator, and hosting it on GitHub Pages. 

## GitHub Pages
Since the code is hosted on GitHub, GitHub Pages is a convenient way to publish the project documentation.

### GitHub Actions
Using GitHub Actions, you can automate the deployment of your project documentation. At the root of your repository, create a new GitHub Actions workflow, e.g., .github/workflows/hugo.yml, and copy and paste the following contents:

Now, when a new commit is pushed to the main branch, the static site is automatically built and deployed. Push your changes to see the workflow in action.

The Hugo site is published at https://janetjotw.github.io/hugo-project-revised/.
