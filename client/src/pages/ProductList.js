import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import mobile from '../responsive';



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
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>vetements et chaussures :</Title>
        <FilterContainer>
            <Filter>
                <FilterText>filtrer les produits:</FilterText>
                <Select>
                    <Option disabled selected>Couleur :</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Taille :</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Par Produits:</FilterText>
                <Select>
                    <Option selected>Nouveau :</Option>
                    <Option>Prix (asc)</Option>
                    <Option>Prix (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList