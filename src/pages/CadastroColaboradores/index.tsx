import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FormularioCadastroColaborador from '../../components/FormularioCadastroColaborador';

interface Props {
    token: any
}

export default function CadastroColaboradores({ token }: Props) {
  const navegar = useNavigate();

  return (
    <Box >
      <FormularioCadastroColaborador token={token} />
      <Button 
        sx={{mt: 2}}
        variant="contained" 
        endIcon={<KeyboardBackspaceIcon />}
        onClick={() => navegar(-1)} />
    </Box>
  );
}