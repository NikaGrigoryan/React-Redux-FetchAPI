import styled from "styled-components";

export const StyledCard = styled.div`
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    max-width: 350px;
    width: 100%;
    overflow: hidden;
    margin: 0.5em;
    padding: 0.5em;
    .text{
        color: ${({color})=>color}
    }
    header{
        overflow: hidden;
        height: 200px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`