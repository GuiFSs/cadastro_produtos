import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      preco: '',
      descricao: '',
      imagens: '',
      categoria: '',
      avaliacao: '',
      qtdEstoque: ''
    };
  }

  handleNomeChange = event => {
    this.setState({ nome: event.target.value });
  };

  handlePrecoChange = event => {
    this.setState({ preco: event.target.value });
  };

  handleDescricaoChange = event => {
    this.setState({ descricao: event.target.value });
  };

  handleImagensChange = event => {
    this.setState({ imagens: event.target.value });
  };

  handleCategoriaChange = event => {
    this.setState({ categoria: event.target.value });
  };

  handleAvaliacaoChange = event => {
    this.setState({ avaliacao: event.target.value });
  };

  handleQtdEstoqueChange = event => {
    this.setState({ qtdEstoque: event.target.value });
  };

  handleSubmit = event => {
    alert(
      'nome: ' +
        this.state.nome +
        '      |||    idade: ' +
        this.state.preco +
        '         ||||         Descricao: ' +
        this.state.descricao +
        'imagem: ' +
        this.state.imagens +
        'categoria: ' +
        this.state.categoria +
        'avaliacao: ' +
        this.state.avaliacao +
        'qtdEstoque: ' +
        this.state.qtdEstoque +
        'testando caracteristicas: '
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            type='text'
            value={this.state.nome}
            onChange={this.handleNomeChange}
            required
          />
        </label>
        <br />
        <label>
          Preco:
          <input
            type='number'
            value={this.state.preco}
            onChange={this.handlePrecoChange}
            required
          />
        </label>
        <br />

        <label>
          Descrição:
          <input
            type='Text'
            value={this.state.descricao}
            onChange={this.handleDescricaoChange}
            required
          />
        </label>
        <br />

        <label>
          <Caracteristicas />
          <NovaCaracteristica />
        </label>
        <label>
          Imagens:
          <input
            type='Text'
            value={this.state.imagens}
            onChange={this.handleImagensChange}
            required
          />
        </label>
        <br />

        <label>
          Categoria:
          <input
            type='Text'
            value={this.state.categoria}
            onChange={this.handleCategoriaChange}
            required
          />
        </label>
        <br />

        <label>
          Avaliação:
          <input
            type='Text'
            value={this.state.avaliacao}
            onChange={this.handleAvaliacaoChange}
            required
          />
        </label>
        <br />

        <label>
          QtdEstoque:
          <input
            type='number'
            value={this.state.qtdEstoque}
            onChange={this.handleQtdEstoqueChange}
            required
          />
        </label>
        <br />
        <input type='submit' value='Cadastrar' />
      </form>
    );
  }
}

class Caracteristicas extends React.Component {
  state = {
    caracteristica: '',
    valor: ''
  };

  handleCaracteristicaChange = e => {
    this.setState({ caracteristica: e.target.value });
  };

  handleValorChange = e => {
    this.setState({ valor: e.target.value });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <label>
          Caracteristica:
          <input
            type='text'
            onChange={this.handleCaracteristicaChange}
            value={this.state.caracteristica}
            required
          />
          Valor:{' '}
          <input
            value={this.state.valor}
            onChange={this.handleValorChange}
            type='text'
            required
          />
        </label>
      </div>
    );
  }
}

class NovaCaracteristica extends React.Component {
  constructor(props) {
    super(props);
    this.state = { caracteristicas: [] };
  }

  handleAdicionarCaracteristica = () => {
    let caracteristicas = this.state.caracteristicas;
    caracteristicas.push({ Carac: '' });

    this.setState({
      caracteristicas: caracteristicas
    });
  };

  render() {
    const caracteristicas = this.state.caracteristicas.map((r, i) => (
      <Caracteristicas key={i} />
    ));
    return (
      <div>
        {caracteristicas}

        <button type='button' onClick={this.handleAdicionarCaracteristica}>
          Adicionar caracteristicas
        </button>
      </div>
    );
  }
}
