import './styles.scss';
import { ReactComponent as Logo } from '../../assets/popcorn.svg';

export default function Navbar() {
  return(
    <nav className="nav-container">
      <Logo className='nav-logo'/>
      <h1 className="nav-text">MovieFlix</h1>
    </nav>
  )
}