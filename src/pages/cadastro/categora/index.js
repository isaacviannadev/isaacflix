import React, { useState, useEfect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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
        });
    }

    function handleChange(infosDoEvento) {
        // const { getAttribute, value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }


    useEfect(() => {
        const URL = 'http://localhost:8080/categorias';
        fetch(URL).then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json();
            setCategoria([
                ...resposta,
            ]);
        })

    }, []);

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


                <Button>Cadastrar</Button>

            </form>

            {categorias.length === 0 && (

                <div>
                    Loadind...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
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