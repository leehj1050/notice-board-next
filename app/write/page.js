"use client";
import { Button } from "react-bootstrap";

export default function Write() {
  return (
    <main className="writePage">
      <h2 style={{ textAlign: "center" }}>글쓰기</h2>
      <form className="writeForm">
        <div className="userTitle">
          <label>제목</label>
          <input />
        </div>
        <div className="userName">
          <label>이름</label>
          <input />
        </div>
        <div className="userText">
          <label>내용</label>
          <textarea className="userContents" />
        </div>
        <div className="button">
          <Button variant="primary" className="successBtn">
            작성
          </Button>
          <Button variant="danger" className="cancelBtn">
            취소
          </Button>
        </div>
      </form>
    </main>
  );
}
