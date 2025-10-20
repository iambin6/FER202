import { useReducer } from "react";
import { Form, Button, Card, Container, Row, Col, Modal } from "react-bootstrap";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},
  showModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]:
            action.value.trim() === "" ? `${action.field} is required` : undefined,
        },
      };

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "SHOW_MODAL":
      return { ...state, showModal: true };

    case "HIDE_MODAL":
      return { ...initialState };

    default:
      return state;
  }
}

function RegisterForm({ onSubmit }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, email, password, confirmPassword, errors, showModal } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Kiểm tra dữ liệu
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    dispatch({ type: "SET_ERRORS", payload: newErrors });

    // Nếu không có lỗi -> hiển thị modal hoặc gửi dữ liệu ra ngoài
    if (Object.keys(newErrors).length === 0) {
      // onSubmit({ username, email, password });
      dispatch({ type: "SHOW_MODAL" });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Register</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {/* Username */}
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_FIELD",
                        field: "username",
                        value: e.target.value,
                      })
                    }
                    isInvalid={!!errors.username}
                    placeholder="Enter username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_FIELD",
                        field: "email",
                        value: e.target.value,
                      })
                    }
                    isInvalid={!!errors.email}
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_FIELD",
                        field: "password",
                        value: e.target.value,
                      })
                    }
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Confirm Password */}
                <Form.Group controlId="confirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_FIELD",
                        field: "confirmPassword",
                        value: e.target.value,
                      })
                    }
                    isInvalid={!!errors.confirmPassword}
                    placeholder="Confirm your password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal hiển thị khi đăng ký thành công */}
      <Modal show={showModal} onHide={() => dispatch({ type: "HIDE_MODAL" })} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome, {username}! Your account has been created successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: "HIDE_MODAL" })}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RegisterForm;