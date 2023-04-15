import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((ele) => {
        return (
          <Article
            id={ele.id}
            title={ele.title}
            date={ele.date}
            preview={ele.preview}
          />
        );
      })}
    </main>
  );
}

export default ArticleList;
