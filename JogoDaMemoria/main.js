import CardGame from "./src/components/cardGame";

const $root = document .querySelector("#root")
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);

