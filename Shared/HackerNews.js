class HackerNews {
  static get baseURL() {
    return "https://hacker-news.firebaseio.com/v0/";
  }

  static get sections() {
    return Object.keys(this._sectionMap)
  }

  static URLForSectionIndex(index) {
    return this.baseURL + this._sectionMap[this.sections[index]]
  }

  static get _sectionMap() {
    return {
      New: "newstories",
      Top: "topstories",
      Best: "beststories"
    }
  }
}

module.exports = HackerNews;
