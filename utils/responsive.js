let _current_screen = '';

class Responsive {
  static SIZE = {
    TABLET: 1024,
    PHABLET: 767,
    MOBILE: 480,
    MOBILESMALL: 320,
    NONE: 0,
  }

  static SCREEN = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    PHABLET: 'phablet',
    MOBILE: 'mobile',
    MOBILESMALL: 'mobile_small',
    NONE: 'none',
  }

  static resize(callback, always) {
    let screen_size = window.innerWidth;
    _current_screen = this.getScreen(screen_size);
    callback(_current_screen, screen_size);

    window.onresize = (e) => {
      screen_size = e.target.innerWidth;
      const screen = this.getScreen(screen_size);

      if (screen !== _current_screen) {
        _current_screen = screen;
        if (!always) callback(_current_screen, screen_size);
      }

      if (always) callback(_current_screen, screen_size);
    }
  }

  static getScreen(size) {
    if (this.SIZE.TABLET < size) {
      return this.SCREEN.DESKTOP;
    } else if (this.SIZE.PHABLET < size && size <= this.SIZE.TABLET) {
      return this.SCREEN.TABLET;
    } else if (this.SIZE.MOBILE < size && size <= this.SIZE.PHABLET) {
      return this.SCREEN.PHABLET;
    } else if (this.SIZE.MOBILESMALL < size && size <= this.SIZE.MOBILE) {
      return this.SCREEN.MOBILE;
    } else {
      return this.SCREEN.MOBILESMALL;
    }
  }

  static removeEvent() {
    window.onresize = () => { }
  }
}

export default Responsive;