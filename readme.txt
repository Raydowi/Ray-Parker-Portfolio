
SOURCE FOLDER: /src (ONLY EDIT THIS ONE)
OUTPUT FOLDER: /public

For GitHub pages hosting: connect /public to a GitHub repo and connect the repo to the correct domain. This website uses lots of references to root, so pages won't load correctly if you just open the raw HTML or use a GitHub repo link.

TO TEST THE REFERENCES, run this prompt:

powershell -ExecutionPolicy Bypass npm start

TLDR: Use the localhost below or make sure you have your domain hosting set up.

Always edit files in /src!

To build the website and host on localhost:
> Open this folder in terminal
> "npm start"
> open http://localhost:8080/ in your browser

To ONLY build:
> Open this folder in terminal
> "npx @11ty/eleventy"

Your demo page is at http://localhost:8080/demo