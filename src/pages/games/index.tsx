import { NextPage } from "next";
import Link from "next/link";
import { stringify } from "querystring";
import GameData from "types/gameData";

type Props = {
  gameData: GameData[];
};

const IndexPage: NextPage<Props> = ({ gameData }) => {
  // console.log({ gameData });
  return (
    <div>
      <h1>games 👋</h1>
      <ol>
        {gameData.map((game) => (
          <li key={game.id + game.name}>
            <Link href={"games/" + String(game.id)} passHref>
              {game.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const getStaticProps = async () => {
  const fetchGameData = await fetch("https://api.sampleapis.com/switch/games");
  const gameData = await fetchGameData.json();
  // console.log(gameData);

  return {
    props: { gameData },
  };
};

export default IndexPage;
