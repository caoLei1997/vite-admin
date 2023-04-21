import styled from 'styled-components'

export const LoginContainer = styled.div`
    position: relative;
    min-height: 100vh;
    background: red;
    min-width:500px;
    height:100%!important;
    display:flex;
    align-items:center;
    background:#eee;
    flex-direction: column;
    padding-top: 25vh;
    background-image: url('/bg.svg');
    background-size:cover;
    background-repeat: no-repeat;
    background-position: 0 0px;
 
   
    .form{
        width: 500px;
        padding: 25px;
        background-color: #fff;
        border-radius: 20px;
        z-index: 999;

        .title{
            width: 500px;
            font-size: 40px;
            padding: 12px 0 20px;
        }
    }
`
