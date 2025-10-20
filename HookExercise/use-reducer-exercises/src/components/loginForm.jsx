import { useReducer } from "react";
import { Form, Button, Card, Container, Row, Col, Modal } from "react-bootstrap";

const initialState = {
  username: "",
  password: "",
  errors: {},
  showModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
        errors: {
          ...state.errors,
          username: action.payload.trim() === "" ? "Username is required" : undefined,
        },
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
        errors: {
          ...state.errors,
          password: action.payload.trim() === "" ? "Password is required" : undefined,
        },
      };

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "SHOW_MODAL":
      return { ...state, showModal: true };

    case "HIDE_MODAL":
      return { ...initialState }; // Reset lại toàn bộ form

    default:
      return state;
  }
}

function LoginForm({ onSubmit }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, errors, showModal } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (username.trim() === "") newErrors.username = "Username is required";
    if (password.trim() === "") newErrors.password = "Password is required";

    dispatch({ type: "SET_ERRORS", payload: newErrors });

    if (Object.keys(newErrors).length === 0) {
      // onSubmit({ username, password });
      dispatch({ type: "SHOW_MODAL" });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Login</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) =>
                      dispatch({ type: "SET_USERNAME", payload: e.target.value })
                    }
                    isInvalid={!!errors.username}
                    placeholder="Enter username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) =>
                      dispatch({ type: "SET_PASSWORD", payload: e.target.value })
                    }
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal hiển thị khi đăng nhập thành công */}
      <Modal show={showModal} onHide={() => dispatch({ type: "HIDE_MODAL" })} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome, {username}!</p>
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

export default LoginForm;
