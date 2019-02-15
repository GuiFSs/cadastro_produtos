import React from 'react';
import Caracteristica from './Caracteristica';
import Imagens from './Imagens';

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
      imagens: [{ imagem: '', link: '' }]
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
    arrai.push({ imagem: '', link: '' });

    this.setState({ imagens: arrai });
  };

  handleImagemChange = (e, i) => {
    let arrai = [...this.state.imagens];
    arrai[i].imagem = e.target.value;
    this.setState({ imagens: arrai });
  };

  handleLinkChange = (e, i) => {
    let arrai = [...this.state.imagens];
    arrai[i].link = e.target.value;
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

  handleSubmit = event => {
    const { caracteristicas } = this.state;
    const { imagens } = this.state;
    console.log(caracteristicas);
    console.log(imagens);

    alert('nome:' + this.state.nome);
    alert('preço:' + this.state.preco);
    alert('descricao: ' + this.state.descricao);
    alert('categoria: ' + this.state.categoria);
    alert('avalição : ' + this.state.avaliacao);
    alert('qtd: ' + this.state.qtdEstoque);

    event.preventDefault();
  };

  render() {
    const { caracteristicas } = this.state;
    const { imagens } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Preco:
          <input
            type="number"
            name="preco"
            value={this.state.preco}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />

        <label>
          Descrição:
          <input
            type="Text"
            name="descricao"
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

            <button type="button" onClick={this.handleAdicionarCaracteristica}>
              Adicionar caracteristicas
            </button>
          </div>
        </label>
        <label>
          <div>
            {imagens.map((img, i) => (
              <Imagens
                imagem={img.imagem}
                link={img.link}
                key={i}
                handleImagemChange={e => this.handleImagemChange(e, i)}
                handleLinkChange={e => this.handleLinkChange(e, i)}
              />
            ))}

            <button type="button" onClick={this.handleAdicionarImagem}>
              Adicionar imagens
            </button>
          </div>
        </label>
        <br />

        <label>
          Categoria:
          <input
            type="Text"
            name="categoria"
            value={this.state.categoria}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />

        <label>
          Avaliação:
          <input
            type="Text"
            name="avaliacao"
            value={this.state.avaliacao}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />

        <label>
          QtdEstoque:
          <input
            type="number"
            name="qtdEstoque"
            value={this.state.qtdEstoque}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <input type="submit" value="Cadastrar" />
      </form>
    );
  }
}
