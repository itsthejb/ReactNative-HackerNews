class HackerNews {
  static get baseURL() {
    return "https://hacker-news.firebaseio.com/v0/";
  }

  static get sections() {
    return ["New", "Top", "Best"]
  }

  static URLForSectionIndex(index) {
    return this.baseURL
  }
}

module.exports = HackerNews;
