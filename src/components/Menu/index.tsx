import { ReactComponent as Logo } from '../../assets/logo-orange.svg';

export default function Menu() {
  const rotas = [{
    label: 'Colaboradores',
    to: '/'
  },
  {
    label: 'Cadastro',
    to: '/cadastro'
  },
  {
    label: 'Apreciações',
    to: '/apreciacoes'
  }];
  return (
    <nav>
      <Logo />
      <ul>
        {rotas.map((rota, index) => (
          <li key={index}>
            <a href={rota.to}>
              {rota.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}