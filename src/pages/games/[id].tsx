import { NextPage } from "next";
import { pathToFileURL } from "url";
import GameData from "types/gameData";

type Props = {
  gameData: GameData;
};

const Index: NextPage<Props> = ({ gameData }) => {
  return (
    <div>
      <h1>{gameData.name}</h1>
      <p></p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const fetchGameData = await fetch(`https://api.sampleapis.com/switch/games`);
  const gameData = await fetchGameData.json();
  const paths = gameData.map((data) => ({
    params: { id: String(data.id) },
  }));
  console.log({ paths });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const fetchGameData = await fetch(
    `https://api.sampleapis.com/switch/games/${params.id}`
  );
  const gameData = await fetchGameData.json();
  return {
    props: { gameData },
  };
};

export default Index;
