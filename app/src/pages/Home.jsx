const Home = () => {
  return (
    <div className="flex justify-center items-center pt-20 flex-col gap-5 pb-60">
      <h1 className="text-4xl">welcome to your games inventory</h1>
      <ul>
        <li># you can add, view,delete, update game, genre , developer</li>
        <li># associate a game to genre and developer</li>
        <li># view game count for every genre and developer</li>
        <li># all game data is required </li>
        <li>
          # only genres and developers will show on the dev and genres pages
        </li>
      </ul>
    </div>
  );
};

export default Home;
