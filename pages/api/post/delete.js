import { db } from "@/utils/firebaseDB";
import { deleteDoc, doc } from "firebase/firestore/lite";

export default async function DeleteApi(req, res) {
  await deleteDoc(doc(db, "post", req.query.id));
  return res.status(200).json("삭제가 완료 되었습니다.");
}
