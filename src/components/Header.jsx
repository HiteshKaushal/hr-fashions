const Header = () => {

    return(
        <header>
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HR Fashions</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    
      <li class="nav-item">
          <a class="nav-link" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Portifilo">Portifilo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Sevice">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">Contact</a>
        </li>

      </ul>
  
    </div>
  </div>
</nav>

            </div>
        </header>

    );
};
export default Header;