var cad=`<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<h1 class="nombre-emprendimiento"> La cocina de Juan</h1>
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">Home </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="contact.html"> Contacto </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="singin.html">Registrarse</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="ubication.html">Sucursales</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="customers.html">Nuestros clientes</a>
      </li>

    </ul>
  </div>
</div>
</nav>
`
document.getElementById('idHeader').innerHTML= cad;

cad=`
<a href="https://www.twitter.com/ssofiaavila" target="_blank"><i class="fa-brands fa-twitter" aria-hidden="true"> </i> </a>
        <a href="https://github.com/ssofiaavila" target="_blank">  <i class="fa-brands fa-github" aria-hidden="true"> </i></a>
        <a href="https://instagram.com/ssofiaavila" target="_blank"> <i class="fa-brands fa-instagram" aria-hidden="true"> </i></a>
        <a href="https://open.spotify.com/user/sxfxx_?si=a742d3024cfc4ad4" target="_blank"> <i class="fa-brands fa-spotify" aria-hidden="true"> </i></a>
       
        <p> Sofia Agostina Avila | 2022 </p>
`
document.getElementById('idFooter').innerHTML= cad;
