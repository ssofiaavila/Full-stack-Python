var element=`<nav class="nav-bar">
            <ul class="links">
                <li> <a href="index.html">Home</a></li> 
                <li> <a href="about.html">Acerca de</a></li> 
                <li><a href="contact.html">Contacto</a></li> 
                <li><a href="sucursales.html">Sucursales</a></li>
                <li><a href="login.html"> Regístrese</a></li>
            </ul>           
        </nav>
        
        <h1>La cocina de Juan</h1>
`
document.getElementById('idHeader').innerHTML= element;

element=`<div class="footer"<h4> Derechos reservados @2023</h4> </div>
`
document.getElementById('idFooter').innerHTML= element;
