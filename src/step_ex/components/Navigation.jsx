import './Navigation.css';
import { Link } from 'react-router-dom';


function Navigation() {

  return (
    <div className='navWrap'>
      <div className='nav'>
        
        <h1><Link to={`/`}>React Movie Reveiw</Link></h1>
        <div className='menuGroup'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;