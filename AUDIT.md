# Audit

## CSS
* Adding the bootstrap CDN for the bootstrap CSS File. Before the CDN, the page load was 45.91 seconds.
![Page Load without Changes](screenshots/start.jpg)
After adding the CDN, the loading time was reduced to 36.21 seconds.
![Page Load with CDN](screenshots/cdn.jpg)
* I minified the CSS File, this reduced the loading speed to 32.88 seconds.
![Page Load with Minified CSS](screenshots/minified.jpg)
* I added a critical CSS and used LoadCSS to load the rest of the CSS'es later on.
This reduced the loading speed to 33.09 seconds.
![Page Load with Critical and LoadCSS CSS](screenshots/critical.jpg)