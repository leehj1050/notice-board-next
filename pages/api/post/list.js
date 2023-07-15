import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { db } from "@/utils/firebaseDB";

export default async function GetList(req, res) {
  const post = collection(db, "post");
  const querySnapshot = await getDocs(
    query(post, orderBy("timestamp", "desc"))
  );

  const result = querySnapshot.docs.map((res) => ({
    ...res.data(),
    id: res.id,
  }));

  return res.status(200).json(result);
}
