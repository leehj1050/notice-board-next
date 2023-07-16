import { db } from "@/utils/firebaseDB";
import { doc, getDoc } from "firebase/firestore/lite";

export default async function PostDetail(req, res) {
  //
  const getPost = await getDoc(doc(db, "post", req.query.id)).then((data) =>
    data.data()
  );

  return res.status(200).json(getPost);
}
