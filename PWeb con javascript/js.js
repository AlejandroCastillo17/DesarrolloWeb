
const section = document.createElement('section');

const pagina = `
<header class="encabezado">
    <h1>Balones de Oro de Cristiano Ronaldo</h1>
    <ul>
        <li> <a href="#bio">Ver historia</a></li>
        <li> <a href="#balones">Ver balones de oro</a></li>
    </ul>
</header>
<section class="introduccion">
    <h2>Introducción</h2>
    <p>Cristiano Ronaldo es uno de los futbolistas más exitosos de todos
    los tiempos y ha ganado varios Balones de Oro, un prestigioso premio
    otorgado al mejor jugador del mundo. A continuación, te presentamos
    información sobre los Balones de Oro que ha ganado Cristiano Ronaldo
    a lo largo de su carrera.
    </p>
    <img class="img" src="bo.jpg" alt="" width="200" height="180">
</section
<section>
    <section class="biografia" id="bio">
        <h1>Biografia de Cristiano Ronaldo</h1>
        <p>Cristiano Ronaldo, cuyo nombre completo es Cristiano Ronaldo dos Santos Aveiro,
        nació el 5 de febrero de 1985 en Funchal, Madeira, Portugal. Es uno de los futbolistas
        más destacados y exitosos de la historia del fútbol. A lo largo de su carrera, ha logrado 
        numerosos récords y premios. Cristiano Ronaldo comenzó su carrera profesional en el 
        Sporting de Lisboa en Portugal antes de unirse al Manchester United en 2003. En el 
        Manchester United, ganó tres títulos de la Premier League y una Liga de Campeones de la
        UEFA, además de su primer Balón de Oro. en 2008. En 2009, se trasladó al Real Madrid por
        entonces un récord mundial de transferencia y pasó nueve temporadas con el club español.
        Durante su tiempo en el Real Madrid, Cristiano Ronaldo se convirtió en el máximo goleador
        de la historia del club y ganó cuatro Balones de Oro adicionales. En 2018, Cristiano Ronaldo 
        se unió a la Juventus en Italia, donde continuó acumulando éxitos y rompiendo récords en la 
        Serie A. A lo largo de su carrera, ha sido conocido por su impresionante capacidad goleadora, 
        velocidad y versatilidad en el campo. Además de sus logros a nivel de clubes, Cristiano Ronaldo
        ha tenido una destacada carrera internacional con la selección de Portugal. Ha participado
        en varias Copas del Mundo y Eurocopas y ha sido una parte fundamental en el éxito de su 
        selección, incluyendo la victoria en la Eurocopa 2016 y la Liga de Naciones de la UEFA en 2019.
        Cristiano Ronaldo es ampliamente considerado como uno de los mejores futbolistas
        de todos los tiempos y ha sido un ícono en el mundo del deporte debido a su dedicación,
        ética de trabajo y habilidades sobresalientes en el fútbol.</p>
    </section>
</section>
<br>
<br>
<section class="contenido" id="balones">
    <h2>Historia de los Balones de Oro de Cristiano Ronaldo</h2>    
    <ul>
        <li>2008: Cristiano Ronaldo ganó su primer Balón de Oro cuando jugaba para el Manchester United.</li>
        <li>2013: Ganó su segundo Balón de Oro después de un exitoso año con el Real Madrid.</li>
        <li>2014: Repitió su victoria y ganó su tercer Balón de Oro.</li>
        <li>2016: Cristiano Ronaldo ganó su cuarto Balón de Oro después de una temporada impresionante.</li>
        <li>2017: Continuó su dominio al ganar su quinto Balón de Oro.</li>
    </ul>
</section>
<img src="crb1.jpeg" alt="" width="200" height="200">
<img src="crb2.jpeg" alt="" width="200" height="200">
<img src="crb3.jpg" alt="" width="200" height="200">
<img src="crb4.jpg" alt="" width="200" height="200">
<img src="crb5.jpg" alt="" width="200" height="200">
<section class="piedepagina">
    <h2>Conclusión</h2>
    <p>Cristiano Ronaldo es uno de los jugadores más destacados en la historia del fútbol, y sus múltiples Balones de Oro son un testimonio de su habilidad y éxito en el campo de juego. Su dedicación y trabajo duro lo han convertido en un ícono del deporte.</p>
</section>
`;

section.innerHTML = pagina;
document.body.appendChild(section);