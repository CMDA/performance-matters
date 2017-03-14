    function createCookie(name, value) {
        document.cookie = `${name}=${value}; path=/`;
    }
    var html = document.documentElement;
    var font = new FontFaceObserver('source_sans_pro');
    font.load(null, 30000).then(function () {
        document.documentElement.className += ' fonts-loaded';
        createCookie('fontsLoaded', true);
    });
