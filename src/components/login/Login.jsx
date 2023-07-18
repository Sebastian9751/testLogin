import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState(false);
  const [response] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      username: username,
      password: password,
    };

    fetch("https://restaurantiumm.azurewebsites.net/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // respuesta de la API
        console.log(data);
        if (data.username == null) {
          console.log("no logged");
        } else {
          setSucces(true);
          response.push(data)
          console.log(response);
          console.log(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {succes && <h1> Hola {response[0].email} </h1>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
