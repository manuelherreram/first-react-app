import user from '../user.png';
function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Los Simpsons</span>
        <img
          src={user}
          alt="Perfil"
          width="30"
          height="30"
          className="d-inline-block align-text-top"
        />
      </div>
    </nav>
  );
}
export default Navbar;
