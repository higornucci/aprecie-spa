import { Container } from '@mui/material';
import token from '../data/token.json';
import DataGridColaborador from '../components/DataGridColaborador';
import FormularioCadastroColaborador from '../components/FormularioCadastroColaborador';

export default function App() {
  return (
    <Container maxWidth="sm">
      <FormularioCadastroColaborador token={token.token}/>
      <DataGridColaborador />
    </Container>
  );
}
