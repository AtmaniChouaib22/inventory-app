const GameForm = () => {
  return (
    <div>
      <form action="/api/games" method="post" encType="multipart/form-data">
        <div></div>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input type="text" id="description" />
        </div>
        <div>
          <label htmlFor="picture"></label>
          <input type="file" id="picture" name="picture" />
        </div>
      </form>
    </div>
  );
};

export default GameForm;
