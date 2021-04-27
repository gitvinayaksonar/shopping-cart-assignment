import styled from 'styled-components'
import Form from "../components/form/Form"
import Button from "../components/form/Button"
import Input from "../components/form/Input"
import { FooterGrayStripe } from "../components/footer";

export default function Register(){    

    return (
        <div>
            <SignupContainer>
                <LeftDivContainer>
                    <h2> Signup</h2>
                    <p>We do not share your personal details with anyone</p>
                </LeftDivContainer>

                <div>
                    <Form name = 'registerForm' targetPage = 'http://localhost:3000/login'>
                        <Input type = 'text' placeholder = 'First Name' name = 'firstname'/>
                        <Input type = 'text' placeholder = 'Last Name' name = 'lastname'/>  
                        <Input type= 'email' placeholder = 'Email' name = 'email' />          
                        <Input type= 'password' placeholder = 'Password' name = 'password'/>
                        <Input type= 'password' placeholder = 'Confirm password' name = 'password' />
                        <Button name = "Signup" type = "submit" />
                    </Form>
                </div>
            </SignupContainer>
            <FooterGrayStripe>
                <p>
                    Copyright <span>&copy;</span> 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
                </p>
            </FooterGrayStripe>
        </div>
    )
}


<Button name = "Signup" type = "submit" onClickMethod = {(e) => cb(e)}/> 

const LeftDivContainer = styled.div`
    width : 65%;
`

const SignupContainer = styled.div`
    margin: 0 auto;
    max-width: 60%;
    margin-top : 55px;
    display: flex;
`