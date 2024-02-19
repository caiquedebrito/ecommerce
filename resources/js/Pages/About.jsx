import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';
import Empresa from "../assets/primeira3.jpg"
import Cultura from "../assets/segunda3.jpg"

export default function About() {
  return (
    <div>
      <Header />
      <div>
      <img src={Empresa} alt="" style={{ maxWidth: '100%', width: '100vw' }} />

      <br />
      <div style={{ marginBottom: '20px', margin: '0 auto', maxWidth: '970px' }}>
          <p style={{ marginBottom: '10px'}}>
          Esta é a narrativa envolvente de uma lanchonete fundamentada em dedicação, esforço e respeito pela clientela. O LancheExpresso é resultado da visão empreendedora de seu fundador, Teobaldo Costa, um indivíduo humilde que, com notável empenho, transformou uma simples barraca de frutas e verduras iniciada em 1979 em uma das maiores redes de lanchonetes expressas do Brasil. <br /><br />
          
          A primeira unidade foi inaugurada em Salvador, no ano de 1994. Desde então, a empresa não cessou sua expansão, estendendo suas operações para outras cidades da Bahia. <br /><br />
          
          Como pioneiro no segmento no estado, o LancheExpresso cultivou uma cultura sólida fundamentada nos valores Atitude de Dono, Honestidade, Simplicidade, Respeito e Disciplina. Esses princípios representam a essência da empresa, personificando o "Sangue Laranja", presente no comportamento e na postura de seus colaboradores. <br /><br />
          
          Com o compromisso de contribuir para um Nordeste mais justo e melhor, a lanchonete busca reduzir o custo de vida da população. Em suas lojas, oferece qualidade, variedade, atendimento cordial, produtos frescos e, é claro, preços acessíveis nos serviços de lanches, confeitaria, salgados e uma ampla variedade de produtos, totalizando mais de 10 mil itens. Esse comprometimento diário permeia todas as atividades, desde a parceria com a agricultura familiar até o cuidado com sua marca própria — Ekobom. <br /><br />
          
          Este é apenas um resumo da trajetória de uma empresa genuinamente baiana, uma história com singularidade que teve início com Teobaldo e evolui diariamente graças à dedicação de Maria, Antônio, Ana, José, João e inúmeros outros associados que contribuem para o sucesso cotidiano. <br /><br />
          
          O LancheExpresso continua firme em sua trajetória de crescimento, conduzido por muito trabalho, disciplina e determinação para oferecer o simples de maneira excepcional. A empresa permanece focada em sua visão de ser a melhor lanchonete de alimentos da Bahia e uma das 10 maiores do Brasil até 2025. Afinal, ter o "Sangue Laranja" é possuir uma paixão inabalável pela vitória. <br /><br /></p>
        </div>
          <img src={Cultura} alt="" style={{ maxWidth: '100%', width: '100vw' }} />
          <br />
          <div style={{ marginBottom: '20px', margin: '0 auto', maxWidth: '970px' }}>
          <h1 style={{ marginBottom: '10px', fontSize: "30px", color: "#2563eb"}}><b>Propósito</b></h1>
          <p>Facilitar a vida da comunidade, reduzindo os gastos diários e promovendo um Nordeste mais equitativo e próspero.</p>
          <br />
          <h1 style={{ marginBottom: '10px', fontSize: "30px", color: "#2563eb"}}><b>Missão</b></h1>
          <p>Oferecer produtos de alta qualidade a preços acessíveis, proporcionando um atendimento caloroso e eficiente, e impactando positivamente a vida de nossos colaboradores.</p>
          <br />
          <h1 style={{ marginBottom: '10px', fontSize: "30px", color: "#2563eb"}}><b>Visão</b></h1>
          <p>Almejamos ser reconhecidos como a principal referência em alimentos na Bahia, buscando constantemente o crescimento para figurar entre as 10 maiores empresas do setor no Brasil até 2025.</p>
          <br />
          <h1 style={{ marginBottom: '10px', fontSize: "30px", color: "#2563eb"}}><b>Valores</b></h1>
          <p><b>Comprometimento com a Qualidade:</b> Buscamos a excelência em todos os aspectos, desde a seleção de ingredientes até o atendimento ao cliente. <br /><br />
          
          <b>Preço Justo:</b> Acreditamos que produtos de qualidade devem ser acessíveis a todos, contribuindo para a redução do custo de vida. <br /><br />
          
          <b>Atendimento Simpático e Rápido:</b> Valorizamos a cordialidade e eficiência no atendimento, criando uma experiência positiva para nossos clientes. <br /><br />

          <b>Integridade e Transparência:</b> Agimos com honestidade e transparência em todas as nossas operações, mantendo a confiança dos nossos clientes e colaboradores. <br /><br />
          
          <b>Desenvolvimento dos Associados:</b> Comprometemo-nos a promover o crescimento profissional e pessoal de nossos associados, reconhecendo o papel fundamental que desempenham em nosso sucesso. <br /><br />
          
          <b>Inovação Contínua:</b> Buscamos constantemente maneiras inovadoras de aprimorar nossos produtos, serviços e processos, mantendo-nos à frente no setor de alimentos. <br /><br />
          
          <b>Responsabilidade Social e Ambiental:</b> Contribuímos ativamente para o desenvolvimento da comunidade e o cuidado com o meio ambiente, adotando práticas sustentáveis em nossas operações.</p><br />
        </div>
        </div>
        <Footer />
      </div>
    );
  }
