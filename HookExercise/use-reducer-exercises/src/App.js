import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/lightUseReducer';
import QuestionBank from './components/QuestionBank';
import LoginForm from './components/loginForm';
import RegisterForm from './components/signUpForm';

function App() {
  return (
    <div>
      <CounterComponent />
      <LightSwitch />
      <QuestionBank />
      <LoginForm />
      <RegisterForm />

    </div>
  );
}

export default App;
