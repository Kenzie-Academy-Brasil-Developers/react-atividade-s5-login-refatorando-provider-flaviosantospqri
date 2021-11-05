import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
background-color: #D0D9F5;
form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 25%;
    input{
        height: 4vh;
        border-radius: 6px;
        padding: 5px;
        border: none;
        :hover{
            border: 1px solid #353F5C;
            cursor: pointer;
        }
    }
    button{
        height: 5vh;
        border-radius: 6px;
        border: none;
        font-weight: bold;
        color: #ffffff;
        background-color: #3E4866;
        :hover{
            background-color: #353F5C;
            border: 1px solid #ffffff;
            cursor: pointer;
        }
    }

}
`