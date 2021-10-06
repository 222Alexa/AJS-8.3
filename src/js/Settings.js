import options from "./options";

export default class Settings {
  constructor(...rest) {
    this.userSettings = new Map();
    this.defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);

    rest.forEach((elem) => {
      for (const prop in elem) {
        if (Object.prototype.hasOwnProperty.call(options, prop)) {
          if (!options[prop].includes(elem[prop])) {
            throw new Error("несуществующее значение");
          }
          this.userSettings.set(prop, elem[prop]);
        } else {
          throw new Error("несуществующая опция");
        }
      }
    });
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
