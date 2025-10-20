import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const initialAccounts = [
  {
    id: 1,
    username: "rauditngu",
    password: "123456",
    avatar: "/picture/raudit.jpg",
  },
  {
    id: 2,
    username: "sondien",
    password: "12345",
    avatar: "/picture/son.jpg",
  },
  {
    id: 3,
    username: "xuansucvat",
    password: "1234",
    avatar: "/picture/xuan.jpg",
  },
];

export default function AccountSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [accounts] = useState(initialAccounts);

  const filteredAccounts = accounts.filter((acc) =>
    acc.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Tìm kiếm tài khoản</h2>

      {/* Ô tìm kiếm */}
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Nhập username cần tìm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      {/* Kết quả */}
      {filteredAccounts.length === 0 ? (
        <p className="text-center text-danger">Không tìm thấy kết quả</p>
      ) : (
        <Row>
          {filteredAccounts.map((acc) => (
            <Col key={acc.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <div style={{ width: "100%", height: "350px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={acc.avatar}
                    alt={acc.username}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">{acc.username}</Card.Title>
                  <Card.Text className="text-center">ID: {acc.id}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
