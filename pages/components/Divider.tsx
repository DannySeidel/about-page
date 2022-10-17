import styled from "styled-components"

export const Divider = () => {
    return (
        <Container>
            <StyledDivider />
        </Container>
    )
}

const StyledDivider = styled.div`
    width: 97%;
    height: 2px;
    opacity: 0.5;
    background: black;
    @media (prefers-color-scheme: dark) {
        background: white;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`
