import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastrarCategoria() {
    const initialValues = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategoria] = useState([]);
    const [values, setValues] = useState(initialValues);


    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        // const { getAttribute, value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastrar Categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategoria([
                    ...categorias,
                    values
                ]);

                setValues(initialValues)
            }}>
                <FormField
                    label="Nova Categoria"
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />


                <button>Cadastrar</button>

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    );
}

export default CadastrarCategoria;