import styled from "styled-components";



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
    ),
    url("https://img.freepik.com/photos-gratuite/femme-elegante-sacs-provisions_23-2148733313.jpg?w=2000")
    center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
`
const Form = styled.form`
    display: flex; 
    flex-wrap: wrap;
`
const Title = styled.h1`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 300;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`




const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>créer un compte</Title>
                <Form>
                    <Input placeholder="prénom"/>
                    <Input placeholder="nom"/>
                    <Input placeholder="utilisateur"/>
                    <Input placeholder="email"/>
                    <Input placeholder="mot de passe"/>
                    <Input placeholder="confirmer le mot de passe"/>
                    <Agreement>
                        Occaecat non velit incididunt ad cupidatat irure et officia
                        Occaecat non velit incididunt ad cupidatat <b>PRIVACY POLICY</b>.
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register