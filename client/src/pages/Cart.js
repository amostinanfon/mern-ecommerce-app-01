import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add , Remove } from "@material-ui/icons";


const Container = styled.div`
 width: 100vwh;
`;

const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.p`
    font-weight: 600;
    text-align: center;
    font-size: 25px;


`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;

`
const Bottom = styled.div`
    margin-top: 30px;
    padding-top: 20px;
`
const Info = styled.div`
    flex: 3;
`
const TopTexts = styled.p`
    display: flex;
`
const TopText = styled.p`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const TopBottom = styled.button`
    padding: 5px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    margin: 5px;

`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding-left: 30px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20% ;
    background-color: ${(props) => props.color};
`
const ProductSize = styled.span`
`
const PriceDetail = styled.div`
    flex:1;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`
const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;

`

const SummaryTitle = styled.h3`
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryTitleText = styled.span`
`

const SummaryItemPrice = styled.span`
`

const Button = styled.button`
background-color: black;
color: white;
font-size: 15px;
padding: 10px;
width: 100%;
`

const Cart = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <Title>Your Bag</Title>
              <Top>
                  <TopBottom>continuez vos achats</TopBottom>
                  <TopTexts>
                      <TopText>Shopping bag(2)</TopText>
                      <TopText>Your Wishlist(0)</TopText>
                  </TopTexts>
                  <TopBottom type="filled">régler maintenant</TopBottom>
              </Top>
              <Bottom>
                      <Info>
                        <Product >
                            <ProductDetail>
                                <Image src="https://media.alltricks.com/medium/16208365f044d81700127.56812821.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b>1234567890</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 300</ProductPrice>
                            </PriceDetail>
                            <Summary>
                                summary
                            </Summary>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="data:image/jpeg;base64,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"/>
                                <Details>
                                    <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b>1234567890</ProductId>
                                    <ProductColor color="lightblue"/>
                                    <ProductSize><b>Size:</b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 300</ProductPrice>
                            </PriceDetail>
                            <Summary>
                                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                                <SummaryItem>
                                    <SummaryTitleText>SubTotal</SummaryTitleText>
                                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryTitleText>Estimated Shipping</SummaryTitleText>
                                    <SummaryItemPrice>$ 30.8</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryTitleText>Shipping Discount</SummaryTitleText>
                                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryTitleText>Total</SummaryTitleText>
                                    <SummaryItemPrice>$30</SummaryItemPrice>
                                </SummaryItem>
                                <Button>CHECKOUT NOW</Button>
                            </Summary>
                        </Product>
                      </Info>
              </Bottom>
          </Wrapper>
          <Footer/>
      </Container>
  );
}





export default Cart;