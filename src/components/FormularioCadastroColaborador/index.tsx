import { SaveOutlined } from '@mui/icons-material';
import { Box, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IColaborador from '../../types/IColaborador';
import { useParams } from 'react-router-dom';

const data = {
  colaboradores: [] as IColaborador[]
};

interface Props {
  token: any
}


export default function FormularioCadastroColaborador({ token }: Props) {
  const params = useParams();
  if(params.id) {
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/reconhecimentos/colaborador/${params.id}`)
        .then(resposta => {
          setColaborador(resposta.data);
        })
        .catch(erro => {
          console.log(erro);
        });
    }, []);
  }
  
  const [colaborador, setColaborador] = useState<IColaborador>({
    id: 0,
    nome: '',
    cpf: '',
    data_de_nascimento: '2021-01-01',
    usuario_id_do_chat: ''
  });

  const cadastrar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    data.colaboradores.push(colaborador);

    axios.post(
      'http://127.0.0.1:8000/login/colaborador/',
      JSON.stringify(data),
      {
        headers: {
          'Authorization': token.token
        }
      })
      .then(resposta => {
        console.log(resposta);
      })
      .catch(erro => {
        console.log(erro);

      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Cadastro de Colaboradores</h2>
      <form onSubmit={cadastrar} method="POST">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              required
              id="nome"
              label="Nome completo"
              value={colaborador.nome}
              onChange={evento => setColaborador({
                ...colaborador, nome: evento.target.value
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              id="cpf"
              label="CPF"
              value={colaborador.cpf}
              onChange={evento => setColaborador({
                ...colaborador, cpf: evento.target.value
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="data_de_nascimento"
              label="Data de nascimento"
              type="date"
              value={colaborador.data_de_nascimento}
              onChange={evento => setColaborador({
                ...colaborador, data_de_nascimento: evento.target.value
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="usuario_id_do_chat"
              label="Usuario id do chat do Discord"
              helperText="Saiba como encontrar o id do usu??rio do Discord: shorturl.at/eACIO"
              value={colaborador.usuario_id_do_chat}
              onChange={evento => setColaborador({
                ...colaborador, usuario_id_do_chat: evento.target.value
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" endIcon={<SaveOutlined />}>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}