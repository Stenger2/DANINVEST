import './App.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Layout from './Components/Layout';
import Content from './Components/Content';
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Content/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
