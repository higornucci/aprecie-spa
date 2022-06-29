import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataGridColaborador from './components/DataGridColaborador';
import FormularioCadastroColaborador from './components/FormularioCadastroColaborador';
import token from './data/token.json';
export default function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<DataGridColaborador />} />
        <Route path='/cadastro' element={<FormularioCadastroColaborador token={token} />} />
      </Routes>
    </Router>
  );
}