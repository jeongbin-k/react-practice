import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>게시글 상세</h1>
      <p>게시글 ID: {id}</p>
    </div>
  );
}
export default PostDetail;
