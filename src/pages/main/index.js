import React, { Component } from "react";
import Api from "../../services/api";
import "./styles.css";

export default class main extends Component {
  state = {
    personagem: []
  };
  componentDidMount() {
    this.loadPersonagens();
  }

  loadPersonagens = async () => {
    const response = await Api.get("/");
    this.setState({ personagem: response.data.results });
  };

  render() {
    const { personagem } = this.state;
    return (
      <div className="body">
        <div className="character-list">
          {personagem.map(personagem => (
            <article key={personagem._id}>
              <strong>{personagem.name}</strong>
              <p>Status: {personagem.status}</p>
              <p>Espécie: {personagem.species}</p>
              <p>Gênero: {personagem.gender}</p>
              <p>Origem: {personagem.origin.name}</p>
              <p>Localidade Atual: {personagem.location.name}</p>
              <a href={personagem.image} target="_blank">
                Imagem
              </a>
            </article>
          ))}
        </div>
      </div>
    );
  }
}
