import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';



const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
        flex: 1;
`
const Image  = styled.img`
    width: 100%;
    height: 73vh;
    object-fit: cover;
    padding: 0 50px;

`

const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h2`
    font-weight: 600;

`
const Desc = styled.p`
margin: 20px 0px;

`

const Price = styled.span`
    font-weight: 100%;
    font-size: 40px;
`


const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content:space-between;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterTitle = styled.span`
    font-style: 20px;
    font-weight: 200px;
`
const FilterSizeOption = styled.option`
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: space-between;
    justify-content: center;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    justify-content: space-between;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    return (<Container>
                <Navbar />
                <Announcement />
                <Wrapper >
                    <ImgContainer>
                        <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Amos TINA NFON   </Title>
                        <Desc>Proident officia consequat cillum qui eiusmod dolor in nostrud mollit culpa.
                             Reprehenderit officia cupidatat laboris eu reprehenderit occaecat elit dolore 
                             officia pariatur non ea. Ea minim nisi excepteur elit ad ipsum culpa dolore. 
                             Excepteur labore veniam consequat commodo exercitation do consectetur duis. I
                             ncididunt anim aliquip et sit dolore minim pariatur mollit eu reprehenderit magna.
                              Duis enim irure dolore id aute culpa non.
                            Ipsum consectetur ad enim anim in ut magna fugiat excepteur pariatur anim.

                        </Desc>
                        <Price>$ 20</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Couleur</FilterTitle>
                                <FilterColor color="black"/>
                                <FilterColor color="darkblue"/>
                                <FilterColor color="gray"/>
                            </Filter>
                            <Filter>
                                <FilterTitle>Taille</FilterTitle>
                              <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                              </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
    </Container>)
}




export default Product;
