import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import mobile from '../responsive';
import { useLocation } from "react-router-dom";
import { useState } from 'react';



const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection:"column"})}

`

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Option = styled.option`

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}

`


const ProductList = () => {

    const location = useLocation();
    const cat =  location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("nouveau");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value, 
        });

    };
    const handleNew = (e) => {
        const value = e.target.value;
        setSort(value)
    };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrer les produits</FilterText>
                <Select name="couleur" onChange={handleFilters}>
                    <Option disabled >Couleur</Option>
                    <Option>blanc</Option>
                    <Option>noir</Option>
                    <Option>rouge</Option>
                    <Option>bleu</Option>
                    <Option>jaune</Option>
                    <Option>vert</Option>
                </Select>
                <Select name="taille" onChange={handleFilters}>
                    <Option disabled >Taille</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Par Produits:</FilterText>
                {/* <Select onChange={(e) => setSort(e.target.value)}> */}
                    <Select name="sort" onChange={handleNew}>
                    <Option name="nouveau">nouveau</Option>
                    <Option name="asc">Prix (asc)</Option>
                    <Option name="desc">Prix (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList