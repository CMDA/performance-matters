# AUDIT.md

## Non blocking JS and CSS 15-3-2017
I changed the location of the css and js to above the fold and made the JS none blocking
"<head>
    {% include './app-meta.html' %}

    <style>{% include '../dist/css/critical.css' %}</style>
    <script>loadCSS('/dist/css/fonts.css');</script>
    <noscript><link rel="preload" href="/dist/css/fonts.css" as="style"></noscript>

    <script src="/assets/js/vendor/loadcss.min.js" defer></script>
    <script src="/assets/js/vendor/fontfaceobserver.js" defer></script>
    <script src="/assets/js/vendor/nonBlockingFont.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" defer></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" defer></script>
    <script src="/assets/js/docs.min.js" defer></script>
    <script src="/assets/js/ie10-viewport-bug-workaround.js" defer></script>

    {% block head_extra %}{% endblock %}
</head>"



## Screenshots - Chrome Development Tools
![Screenshot after images](./screenshots/loadingSpeed-GulpCriticalCSS.JPG "basic")
![Screenshot after images](./screenshots/loadingSpeed-NonBlockingJSAndCss.JPG "basic")


## Sources
- Declan Rek : cmd-preformance-matters-2017.pdf
