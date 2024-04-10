import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar titleText="TextUtils" aboutText="About" homeText="Home"/>
    <TextForm></TextForm>
    </>
  );
}

export default App;
