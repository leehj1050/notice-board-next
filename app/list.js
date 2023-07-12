"use client";

import Table from "react-bootstrap/Table";

export default function List() {
  return (
    <Table striped="column" bordered hover>
      <thead>
        <tr>
          <th className="number">번호</th>
          <th className="title">제목</th>
          <th className="writer">글쓴이</th>
          <th className="date">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="number">1</td>
          <td className="title">Mark</td>
          <td className="writer">Otto</td>
          <td className="date">@mdo</td>
        </tr>
        <tr>
          <td className="number">2</td>
          <td className="title">Jacob</td>
          <td className="writer">Thornton</td>
          <td className="date">@fat</td>
        </tr>
        <tr>
          <td className="number">2</td>
          <td className="title">Jacob</td>
          <td className="writer">Thornton</td>
          <td className="date">@fat</td>
        </tr>
        <tr>
          <td className="number">2</td>
          <td className="title">Jacob</td>
          <td className="writer">Thornton</td>
          <td className="date">@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}
