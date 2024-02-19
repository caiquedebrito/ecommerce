import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React, { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de envio do formulário se necessário
    console.log("Formulário enviado!");
    setFormSubmitted(true);
  };

  return (
    <div>
      <Header />
      <br />
      <div className="box">
      <div style={{ marginBottom: '20px', margin: '0 auto', maxWidth: '970px' }}>
          <h1 style={{ marginBottom: '10px', fontSize: "30px"}}><b>CONTATE-NOS</b></h1>
          <div style={{ borderBottom: '2px solid #2563eb' }}></div>
          <br />
        </div>

        {formSubmitted ? (
          <div style={{ textAlign: 'center', padding: '20px', margin: '0 auto', maxWidth: '600px' }}>
            <h2 style={{ color: 'green' }}>Enviado!</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <fieldset>
            <div className="inputBox" style={{ padding: '20px', margin: '0 auto', maxWidth: '1000px' }}>
                <legend style={{fontSize: "30px", color: "#2563eb"}}><b>FORMULÁRIO DE CONTATO</b></legend>
                <span>*Campos obrigatórios</span>
                <br />
                <br />
                <span style={{ fontWeight: 'bold', marginRight: '269px' }}>NOME:*</span>
                <span style={{ fontWeight: 'bold', marginRight: '265px' }}>E-MAIL:*</span>
                <span style={{ fontWeight: 'bold', marginRight: '20px' }}>TELEFONE:*</span>
                <br />
                <input type="text" name="nome" id="nome" className="inputUser" style={{ width: '32%', marginRight: '24px' }} required/>
                <label className="labelinput" htmlFor="nome"></label>

                <input type="email" name="email" id="email" className="inputUser" style={{ width: '32%',  marginRight: '24px' }} required />
                <label className="labelinput" htmlFor="email"></label>
                
                <input type="tel" name="telefone" id="telefone" className="inputUser" style={{ width: '31%'}}  required />
                <label className="labelinput" htmlFor="telefone"></label>

                <br />
                <br />

                <b>MENSAGEM:*</b>
                <br />
                <textarea id="message" name="message" className="inputUser" rows="5" style={{ width: '100%' }} required></textarea>
                <label className="labelinput" htmlFor="message"></label>
                <br />
                <input type="submit" name="submit" id="submit" className="submit-btn" style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#2563eb', padding: '10px' }} />
              </div>
            </fieldset>
          </form>
        )}
      </div>
      <br />
      <div style={{ marginBottom: '20px', margin: '0 auto', maxWidth: '970px' }}>
          <h1 style={{ marginBottom: '10px', fontSize: "30px", color: "#2563eb"}}><b>LOCALIZAÇÃO</b></h1>
          <span><b>Endereço:</b> Rod. Eng. Vasco Filho, Km 521 - Aviário, Feira de Santana - BA <br />
          <b>CEP:</b> 44096-486 <br />
          <b>Telefone:</b> (61) 3314-9603</span>
          <br />
          <br />
        </div>
      <Footer />
    </div>
  );
}
