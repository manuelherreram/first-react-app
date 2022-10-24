import Post from "./Post";

const posts = [
  {
    id: 1,
    img: "https://via.placeholder.com/150",
    title: "Episode 1",
    description: "Episode 1 description",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150",
    title: "Episode 2",
    description: "Episode 2 description",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150",
    title: "Episode 3",
    description: "Episode 3 description",
  },
  {
    id: 4,
    img: "https://via.placeholder.com/150",
    title: "Episode 4",
    description: "Episode 4 description",
  },
];

function PostList() {
  const postsComponents = posts.map((post) => (
    <Post
      key={post.id}
      img={post.img}
      title={post.title}
      description={post.description}
    />
  ));

  return <div className="d-flex flex-rows flex-wrap justify-content-center">{postsComponents}</div>;
}

export default PostList;
