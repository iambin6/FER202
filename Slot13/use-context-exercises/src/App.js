//áp dụng ThemeProvider để bao bọc toàn bộ ứng dụng
import { ThemeProvider } from "./contexts/ThemeContext";
import LightSwitch from "./ex1/LightSwitch";
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from "./ex1/CounterComponent";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./ex1/LoginForm";

function App() {
  return (
    <div>
  <ThemeProvider>
      <CounterComponent />
      <LightSwitch />
      </ThemeProvider>

    <AuthProvider>
    <div className="App">
      <LoginForm />
    </div>
    </AuthProvider>
    </div>
  
  );
}

export default App;
