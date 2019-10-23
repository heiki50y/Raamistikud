import React from 'react'
import logo from './logo.svg';
import example from './react_tutorial.jpeg';

export default function Home() {
    return (
        <React.Fragment>
            <div className="landpage">
            <h1 class="heading-primary">
                <div className="heading">
                    <span class="heading-primary--main">React.js õppekeskond</span>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </h1>
            </div>
            <section className="section">
                <h1 className="heading--1">Mis on react.js?</h1>
                <div className="container">
                    <h2 className="heading--2">React on Javascript raamistik kasutajaliidese loomiseks</h2>
                    <p className="paragraph">React võimaldab arendajatel luua suuremahulisi veebirakendusi, mis kasutavad andmeid ja muutuvad ajas, ilma et veebilehte uuesti laaditaks. Selle eesmärk on eelkõige kiiruse, lihtsuse ja skaleeritavuse tagamine. React tegeleb rakendustes ainult kasutajaliidestega. See vastab View osale Model-View-Controller (MVC) mudelis ning seda on võimalik kombineerida teiste JavaScripti teekide või raamistikega MVC mudelis, näiteks AngularJS.</p>
                    <p className="paragraph">
                    Reacti looja on Facebooki tarkvaraarendaja Jordan Walke. Idee sai alguse raamistikust XHP, mis on HTML-komponentide raamistik PHP-le. See võeti esmakordselt kasutusele Facebooki ajajoonel 2011. aastal ja hiljem tehti seda ka veebilehel Instagram.com 2012. aastal.[7] Lähtekood avaldati JSConfi USA konverentsil 2013. aasta mais.
                    </p>
                    
                </div>
                <div className="example">
                    <img src={example} alt="logo" />
                </div>
            </section>
        </React.Fragment>
    )
}

