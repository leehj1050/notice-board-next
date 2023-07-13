"use client";

import Link from "next/link";

export default function List() {
  return (
    <div className="table">
      <ul className="tableHead">
        <li className="number">번호</li>
        <li className="title">제목</li>
        <li className="writer">글쓴이</li>
        <li className="date">작성일</li>
      </ul>
      <ul className="contentList">
        <li className="number">1</li>
        <li className="title">안녕하세요</li>
        <li className="writer">이혜진</li>
        <li className="date">07-13</li>
      </ul>
      <ul className="contentList">
        <li className="number">2</li>
        <li className="title">게시판이에요</li>
        <li className="writer">뚱이</li>
        <li className="date">07-10</li>
      </ul>
      <ul className="contentList">
        <li className="number">3</li>
        <li className="title">프론트엔드 개발자입니다.</li>
        <li className="writer">천재개발자</li>
        <li className="date">07-09</li>
      </ul>
      <ul className="contentList">
        <li className="number">3</li>
        <li className="title">프론트엔드 개발자입니다.</li>
        <li className="writer">천재개발자</li>
        <li className="date">07-09</li>
      </ul>
      <ul className="contentList">
        <li className="number">300</li>
        <li className="title">개발자입니다.</li>
        <li className="writer">천재개발자</li>
        <li className="date">07-09</li>
      </ul>
    </div>
  );
}
