import styled from 'styled-components';
import { Facebook, Pinterest, Instagram, Twitter , Room , MailOutline , Phone} from '@material-ui/icons';


const Container = styled.div`
    display: flex;
    padding-bottom: 10px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Logo = styled.h3`

`
const Desc = styled.p`
    margin: 25px 0px ;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`

const Title = styled.h3`
    margin: ${props => props.style};
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 15px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AMOS.</Logo>
            <Desc>
                lorem sssssssssssss
                ggggggggggggg gggggggg
                hhhhhhhhhh hhhhhhhhhh
                jjjjjjjjjj <br/>jjjjjjjj
                lorem ssssssssssssssss
                ggggggggggggg
                hhhhhhhhhhhhhhhhhhh
            </Desc>
            <SocialContainer>
                <SocialIcon color="seagreen">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="coral">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="teal">
                    <Twitter/>
                </SocialIcon >
                <SocialIcon color="blue">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title style={{marginBottom:"10px"}}>Usefull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whistlist</ListItem>
                <ListItem>Whistlist</ListItem>
                <ListItem>Whistlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title style={{marginBottom:"10px"}}>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>Douala Cameroun , B.P . 4256 
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+237 694 29 11 73
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>amostinanfon!&@gmail.com
            </ContactItem>
            <Payment src="https://www.citypng.com/public/uploads/preview/hd-visa-mastercard-paypal-payment-methods-logos-png-21635415866zngy8aj06k.png"/>
        </Right>
    </Container>
  )
}

export default Footer