import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
   return (
      <BrowserRouter>
         <Layout>
            <h2>Shariar Hossain Riad</h2>
         </Layout>
      </BrowserRouter>
   );
}

export default App;
