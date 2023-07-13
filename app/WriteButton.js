"use client";

import Link from "next/link";
import { Button } from "react-bootstrap";

export default function WriteButton() {
  return (
    <Link href="/write">
      <Button variant="outline-dark">글쓰기</Button>
    </Link>
  );
}
