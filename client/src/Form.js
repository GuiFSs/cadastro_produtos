import React from 'react';
import Caracteristica from './Caracteristica';
import Imagens from './Imagens';

import axios from 'axios';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      preco: '',
      descricao: '',
      categoria: '',
      avaliacao: '',
      qtdEstoque: '',
      caracteristicas: [{ caracteristica: '', valor: '' }],
      imagens: ['']
    };
  }

  handleAdicionarCaracteristica = () => {
    let arrai = [...this.state.caracteristicas];
    arrai.push({ caracteristica: '', valor: '' });

    this.setState({ caracteristicas: arrai });
  };

  handleCaracteristicaChange = (e, i) => {
    let arrai = [...this.state.caracteristicas];
    arrai[i].caracteristica = e.target.value;
    this.setState({ caracteristicas: arrai });
  };

  handleAdicionarImagem = () => {
    let arrai = [...this.state.imagens];
    arrai.push('');
    this.setState({ imagens: arrai });
  };

  handleImagemChange = (e, i) => {
    let arrai = [...this.state.imagens];
    arrai[i] = e.target.value;
    this.setState({ imagens: arrai });
  };

  handleValorChange = (e, i) => {
    let arrai = [...this.state.caracteristicas];
    arrai[i].valor = e.target.value;
    this.setState({ caracteristicas: arrai });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const produto = { ...this.state };
    produto.preco = parseFloat(produto.preco);
    produto.avaliacao = parseInt(produto.avaliacao);
    produto.qtdEstoque = parseInt(produto.qtdEstoque);
    const baseUrl = 'http://localhost:3003/api';

    try {
      const res = await axios.post(`${baseUrl}/produto`, produto);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { caracteristicas, imagens } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            type='text'
            name='nome'
            value={this.state.nome}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Preco:
          <input
            type='number'
            name='preco'
            value={this.state.preco}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />

        <label>
          Descrição:
          <input
            type='Text'
            name='descricao'
            value={this.state.descricao}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          <div>
            {caracteristicas.map((carac, i) => (
              <Caracteristica
                caracteristica={carac.caracteristica}
                key={i}
                valor={carac.valor}
                handleCaracteristicaChange={e =>
                  this.handleCaracteristicaChange(e, i)
                }
                handleValorChange={e => this.handleValorChange(e, i)}
              />
            ))}

            <button type='button' onClick={this.handleAdicionarCaracteristica}>
              Adicionar caracteristicas
            </button>
          </div>
        </label>
        <label>
          <div>
            {imagens.map((img, i) => (
              <Imagens
                link={img}
                key={i}
                handleImagemChange={e => this.handleImagemChange(e, i)}
              />
            ))}

            <button type='button' onClick={this.handleAdicionarImagem}>
              Adicionar imagens
            </button>
          </div>
        </label>
        <br />

        <label>
          Categoria:
          <input
            type='Text'
            name='categoria'
            value={this.state.categoria}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />

        <label>
          Avaliação:
          <input
            type='number'
            min={0}
            max={5}
            name='avaliacao'
            value={this.state.avaliacao}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />

        <label>
          QtdEstoque:
          <input
            type='number'
            name='qtdEstoque'
            value={this.state.qtdEstoque}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <input type='submit' value='Cadastrar' />
      </form>
    );
  }
}
