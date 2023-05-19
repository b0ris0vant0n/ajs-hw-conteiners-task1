import Team from "../app";
import Character from "../character";

test("Добавление персонажа", () => {
  const team = new Team();
  team.add("Anton");
  expect(() => team.add("Anton")).toThrow("Такой игрок уже существует");
});
  
test("Добавление нескольких персонажей", () => {
  const players = new Team();
  const FirstPlayer = new Character("Anton");
  const SecondPlayer = new Character("Misha");
  const ThirdPlayer = new Character("Andrey");
  players.addAll(FirstPlayer, SecondPlayer, ThirdPlayer);
  expect(players.members.size).toEqual(3);
});
  
test("Конвертиция в массив", () => {
  const team = new Team();
  team.addAll("Anton", "Misha", "Andrey", "Misha");
  team.toArray();
  expect(team.members).toEqual(["Anton", "Misha", "Andrey"]);
});