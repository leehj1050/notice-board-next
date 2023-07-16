"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function EditPost(props) {
  const router = useRouter();
  //
  const { id } = props.params;
  //
  const [propsData, setPropsData] = useState({});
  const [editData, setEditData] = useState({});

  //useEffect
  useEffect(() => {
    fetch(`/api/post/detail?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPropsData(data);
      });
  }, []);

  //function
  const handleOnchange = (e) => {
    let { value, name } = e.target;
    if (name === "title") {
      setEditData({ ...editData, userTitle: value });
    } else {
      setEditData({ ...editData, userText: value });
    }
  };

  //handleEdit
  const handleEdit = async () => {
    if (editData.userTitle === "") {
      return alert("제목을 입력해주세요");
    } else if (editData.userText === "") {
      return alert("내용이 없습니다. 내용을 입력해주세요.");
    } else {
      if (confirm("수정을 완료 하시겠습니까?")) {
        try {
          const response = await fetch("/api/post/edit", {
            method: "PUT",
            body: JSON.stringify({
              userTitle: editData.userTitle
                ? editData.userTitle
                : propsData.userTitle,
              userText: editData.userText
                ? editData.userText
                : propsData.userText,
              id: id,
            }),
          });
          if (response.ok) {
            // 성공적인 응답 처리를 수행합니다 (필요한 경우)

            // 원하는 페이지로 리다이렉션합니다
            router.push("/"); // '/'를 원하는 URL로 대체하십시오
          } else {
            // 오류 처리를 수행합니다 (필요한 경우)
            console.error("수정 요청이 실패했습니다.");
          }
        } catch (error) {
          // 네트워크 또는 기타 오류 처리를 수행합니다
          console.error("오류가 발생했습니다:", error);
        }
      }
    }
  };

  //   console.log(editData);

  return (
    <main className="writePage">
      <h2 style={{ textAlign: "center" }}>수정페이지</h2>
      <form className="writeForm">
        <div className="userTitle">
          <label>제목</label>
          <input
            onChange={handleOnchange}
            name="title"
            defaultValue={propsData.userTitle}
          />
        </div>
        <div className="userName">
          <label>이름</label>
          <input name="name" value={propsData.userName} />
        </div>
        <div className="userText">
          <label>내용</label>
          <textarea
            className="userContents"
            onChange={handleOnchange}
            name="text"
            defaultValue={propsData.userText}
          />
        </div>
        <div className="button">
          <Button variant="primary" className="successBtn" onClick={handleEdit}>
            수정완료
          </Button>
          <Link href={`/detail/${id}`}>
            <Button variant="danger">취소</Button>
          </Link>
        </div>
      </form>
    </main>
  );
}
