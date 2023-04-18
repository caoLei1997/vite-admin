import Styled from "styled-components";

export const LoginContainer = Styled.div`
    position: relative;
    min-height: 100vh;
    background: red;
    min-width:500px;
    height:100%!important;
    display:flex;
    align-items:center;
    background:#eee;
    flex-direction: column;
    padding-top: 20vh;
   
    .form{
        width: 500px;
        padding: 25px;
        background-color: #fff;
        border-radius: 20px;

        .title{
            width: 500px;
            font-size: 40px;
            padding: 12px 0 20px;
        }
    }
`;
