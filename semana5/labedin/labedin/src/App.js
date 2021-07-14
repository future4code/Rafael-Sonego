import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './img/perfil.jpg'
import dev from './img/dev.webp'
import react from './img/react.png'
import email from './img/email.png'
import location from './img/location.png'
import servidor from './img/servidor.png'
import escola from './img/escola.png'
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={perfil}
          nome="Rafael"
          descricao="Oi, eu sou o Rafael. Sou aluno da Labenu."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={email}
          nome="Email"
          descricao="rasonego@google.com"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem={location}
          nome="Endereço"
          descricao="Rua De Colores"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={dev}
          nome="Labenu"
          descricao="Formando em Ciências da Computação"
        />

        <CardGrande
          imagem={react}
          nome="DEV"
          descricao="Desenvolvedor Sênior - React"
        />

        <CardGrande
          imagem={servidor}
          nome="Infraestrutura"
          descricao="Tech Leader - Data Center - VIVO"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências Acadêmica</h2>
        <CardGrande
          imagem={escola}
          nome="Escola Dominicana"
          descricao="Desenvolvimento do site da escola"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
