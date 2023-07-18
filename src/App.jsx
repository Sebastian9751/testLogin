
import "./App.css";
import { Card } from "@mui/material";
import { SignIn } from "./components/login/Login";

function App() {
  return (
    <div className="page-container">
      <div className="card-container">
        <Card sx={{ maxWidth: 875 }}>
          <SignIn />
        </Card>
      </div>
    </div>
  );
}

export default App;
