import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import token from './data/token.json';
import Menu from './components/Menu';
import CadastroColaboradores from './pages/CadastroColaboradores';
import ListagemColaboradoresCadastrados from './pages/ListagemColaboradoresCadastrados';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function AprecieRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<ListagemColaboradoresCadastrados />} />
        <Route path="/cadastro" element={<CadastroColaboradores token={token} />} />
        <Route path="/cadastro/:id" element={<CadastroColaboradores token={token} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}