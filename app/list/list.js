"use client";

import { db } from "@/utils/firebaseDB";
import Link from "next/link";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function List() {
  const [getData, setGetData] = useState([]);

  //
  useEffect(() => {
    const fetchData = async () => {
      const post = collection(db, "post");
      const querySnapshot = await getDocs(
        query(post, orderBy("timestamp", "desc"))
      );

      setGetData(
        querySnapshot.docs.map((res) => ({ ...res.data(), id: res.id }))
      );
    };

    fetchData();
  }, []);

  return (
    <div className="table">
      <ul className="tableHead">
        <li className="number">번호</li>
        <li className="title">제목</li>
        <li className="writer">글쓴이</li>
        <li className="date">작성일</li>
      </ul>
      {getData.map((item, idx) => {
        return (
          <Link href="#" key={idx}>
            <ul className="contentList">
              <li className="number">{idx + 1}</li>
              <li className="title">{item.userTitle}</li>
              <li className="writer">{item.userName}</li>
              <li className="date">{item.userDate}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}
