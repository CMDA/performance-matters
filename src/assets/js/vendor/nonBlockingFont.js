function createCookie(name, value) {
        document.cookie = `${name}=${value}; path=/`;
      }
      const font = new FontFaceObserver('source_sans_pro');
      font.load().then(function () {
        document.documentElement.className += ' fonts-loaded';
        createCookie('fontsLoaded', true);
      });
