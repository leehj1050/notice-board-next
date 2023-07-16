import { db } from "@/utils/firebaseDB";
import { doc, updateDoc } from "firebase/firestore/lite";

export default async function EditApi(req, res) {
  //
  if (req.method === "PUT") {
    req.body = JSON.parse(req.body);
    //
    try {
      await updateDoc(doc(db, "post", req.body.id), {
        userTitle: req.body.userTitle,
        userText: req.body.userText,
      });
      return res
        .status(200)
        .json({ message: "게시물이 성공적으로 수정 되었습니다." });
    } catch (error) {
      console.error("게시물 추가 오류:", error);
      return res
        .status(500)
        .json({ message: "게시물 수정 중 오류가 발생했습니다" });
    }
  }
  return res.status(405).json({ message: "허용되지 않은 메서드입니다" });
}
