import Settings from "../Settings";
import options from "../options";

test("добавление корректной пары опция:значение", () => {
  const app = new Settings({
    theme: "gray",
  });
  const received = Object.fromEntries(app.settings.entries());
  const result = {
    theme: "gray",
    music: "trance",
    difficulty: "easy",
  };
  expect(received).toStrictEqual(result);
});

test("добавление некорректной опции", () => {
  expect(() => new Settings({ music: "grunge" })).toThrow(
    "несуществующее значение"
  );
});

test("добавление некорректной опции", () => {
  expect(() => new Settings({ balance: 100 })).toThrow("несуществующая опция");
});
