"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

export default function List() {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);

  //
  useEffect(() => {
    const getDataList = async () => {
      await fetch("/api/post/list")
        .then((res) => res.json())
        .then((data) => setGetData(data))
        .then((suc) => setLoading(true));
    };
    getDataList();
  }, []);

  return (
    <div className="table">
      <ul className="tableHead">
        <li className="number">번호</li>
        <li className="title">제목</li>
        <li className="writer">글쓴이</li>
        <li className="date">작성일</li>
      </ul>
      {loading ? (
        getData.map((item, idx) => {
          return (
            <Link href={`/detail/${item.id}`} key={idx}>
              <ul className="contentList">
                <li className="number">{idx + 1}</li>
                <li className="title">{item.userTitle}</li>
                <li className="writer">{item.userName}</li>
                <li className="date">{item.userDate}</li>
              </ul>
            </Link>
          );
        })
      ) : (
        <Spinner animation="border" variant="primary" className="spinner" />
      )}
    </div>
  );
}

// setGetData(
//   querySnapshot.docs.map((res) => ({
//     ...res.data(),
//     id: res.id,
//   }))
// );
