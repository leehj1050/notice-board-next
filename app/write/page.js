"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Write() {
  //useRouter()
  const router = useRouter();
  //
  const today = new Date();
  let year = today.getFullYear(); //년도
  let month = today.getMonth() + 1; //월
  let day = today.getDate(); //요일
  const date = `${year}-${month}-${day}`;

  //
  const [userResult, setUserResult] = useState({
    userDate: date,
    userTitle: "",
    userName: "",
    userText: "",
    timestamp: today, //firebase시간순으로 나타내기 위해서 보내는 객체
  });

  //글작성시
  const handleOnchange = (e) => {
    let { value, name } = e.target;
    if (name === "title") {
      setUserResult({ ...userResult, userTitle: value });
    } else if (name === "name") {
      setUserResult({ ...userResult, userName: value });
    } else {
      setUserResult({ ...userResult, userText: value });
    }
  };

  //전송버튼
  const handleCreate = async () => {
    if (userResult.userTitle === "") {
      return alert("제목을 입력해주세요.");
    } else if (userResult.userName === "") {
      return alert("이름을 입력해주세요.");
    } else if (userResult.userText === "") {
      return alert("내용이 없습니다. 내용을 입력해주세요.");
    } else {
      if (confirm("등록 하시겠습니까?")) {
        try {
          const response = await fetch("/api/post/new", {
            method: "POST",
            body: JSON.stringify(userResult),
          });
          setUserResult({
            userDate: date,
            userTitle: "",
            userName: "",
            userText: "",
          });
          if (response.ok) {
            // 성공적인 응답 처리를 수행합니다 (필요한 경우)

            // 원하는 페이지로 리다이렉션합니다
            router.push("/"); // '/'를 원하는 URL로 대체하십시오
          } else {
            // 오류 처리를 수행합니다 (필요한 경우)
            console.error("POST 요청이 실패했습니다.");
          }
        } catch (error) {
          // 네트워크 또는 기타 오류 처리를 수행합니다
          console.error("오류가 발생했습니다:", error);
        }
      }
    }
  };

  return (
    <main className="writePage">
      <h2 style={{ textAlign: "center" }}>글쓰기</h2>
      <form className="writeForm">
        <div className="userTitle">
          <label>제목</label>
          <input
            onChange={handleOnchange}
            name="title"
            value={userResult.userTitle}
          />
        </div>
        <div className="userName">
          <label>이름</label>
          <input
            onChange={handleOnchange}
            name="name"
            value={userResult.userName}
          />
        </div>
        <div className="userText">
          <label>내용</label>
          <textarea
            className="userContents"
            onChange={handleOnchange}
            name="text"
            value={userResult.userText}
          />
        </div>
        <div className="button">
          <Button
            variant="primary"
            className="successBtn"
            onClick={handleCreate}
          >
            작성
          </Button>
          <Link href="/">
            <Button variant="danger">취소</Button>
          </Link>
        </div>
      </form>
    </main>
  );
}

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     const response = await fetch("/api/NewPost", {
//       method: "POST",
//       // 필요한 헤더나 요청 본문 데이터를 추가합니다 (필요한 경우): headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       // 성공적인 응답 처리를 수행합니다 (필요한 경우)

//       // 원하는 페이지로 리다이렉션합니다
//       router.push("/"); // '/'를 원하는 URL로 대체하십시오
//     } else {
//       // 오류 처리를 수행합니다 (필요한 경우)
//       console.error("POST 요청이 실패했습니다.");
//     }
//   } catch (error) {
//     // 네트워크 또는 기타 오류 처리를 수행합니다
//     console.error("오류가 발생했습니다:", error);
//   }
// };
