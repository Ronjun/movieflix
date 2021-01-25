import './styles.scss';
import { ReactComponent as Logo } from '../../assets/popcorn.svg';
import { useHistory } from 'react-router-dom';

export default function Navbar() {

  const history = useHistory();

  function onClick(event: React.MouseEvent<HTMLHeadingElement, MouseEvent>){
    history.push('/');
  }

  return(
    <nav className="nav-container">
      <Logo className='nav-logo'/>
      <h1 className="nav-text" onClick={onClick}>MovieFlix</h1>
    </nav>
  )
}