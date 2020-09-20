import { getUserGreetings } from "./greetings";

window.myApp = {
  translations: {
    en: {
      greeting: "good morning",
    },
    pl: {
      greeting: "dzień dobry",
    },
    ru: {
      greeting: "доброе утро",
    },
    cz: {
      greeting: "dobré ráno",
    },
  },
  setLanguage(language) {
    this.language = language;
  },
  setUser(user) {
    this.user = user;
  },
  greetings() {
    return getUserGreetings(
      this.translations[this.language].greeting,
      this.user.firstName
    );
  },
};

window.myApp.setUser({ firstName: "Bob" });
window.myApp.setLanguage("en");

(function render() {
  window.root.innerHTML = `
    <div>Current language: ${window.myApp.language}</div>
    <h1>${window.myApp.greetings()}</h1>
    <button id="lang">New language</button>
  `;

  window.lang.addEventListener("click", () => {
    const langs = Object.keys(window.myApp.translations);
    window.myApp.setLanguage(langs[Math.floor(Math.random() * langs.length)]);
    render();
  });
})();
