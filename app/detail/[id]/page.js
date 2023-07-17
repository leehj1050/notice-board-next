"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

export default function Detail(props) {
  const router = useRouter();
  const [postItem, setPostItem] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  const { id } = props.params;
  //
  useEffect(() => {
    fetch(`/api/post/detail?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPostItem(data), setLoading(true);
      });
  }, []);

  //handleDelete
  const handleDelete = () => {
    fetch(`/api/post/delete?id=${id}`)
      .then((res) => res.json())
      .then((msg) => {
        alert(msg), router.push("/");
      });
  };

  return (
    <main>
      {loading ? (
        <div>
          <h3>{postItem.userTitle}</h3>
          <div style={{ marginBottom: "5em" }}>
            <p>작성자:{postItem.userName}</p>
            <p>{postItem.userText}</p>
          </div>
          <div className="button">
            <Link href="/">
              <Button variant="primary" className="goList">
                목록
              </Button>
            </Link>
            <Link href={`/edit/${id}`}>
              <Button variant="warning" className="goEdit">
                수정
              </Button>
            </Link>
            <Button variant="danger" onClick={handleDelete}>
              삭제
            </Button>
          </div>
        </div>
      ) : (
        <Spinner animation="border" variant="primary"></Spinner>
      )}
    </main>
  );
}
