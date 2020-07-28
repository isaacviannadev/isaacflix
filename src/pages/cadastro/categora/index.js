import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastrarCategoria() {
    return (
        <PageDefault>
            <h1>Cadastrar Categoria</h1>
            
            <Link to="/">
               Home
            </Link>
        </PageDefault>
    );
}

export default CadastrarCategoria;