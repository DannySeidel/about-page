import styled from "styled-components"
import FooterWrapper from "./FooterWrapper"
import Logo from "./Logo"

const Footer = () => {
    return (
        <FooterWrapper>
            <Copyright>
                <p>Copyright by © 2022 Danny Seidel</p>
            </Copyright>
            <MadeWith>
                <p>Deployed with</p>
                <Logo href="https://vercel.com" src="/vercel.svg" alt="Vercel Logo" />
                <Spacer />
                <p>Made with</p>
                <Logo href="https://nextjs.org" src="/nextjs.svg" alt="Next.js Logo" />
            </MadeWith>
        </FooterWrapper>
    )
}

export default Footer

const Copyright = styled.div`
    margin: 1em 2em;
    text-align: left;
`

const MadeWith = styled.div`
    margin: 1em 2em;
    text-align: right;
    display: flex;
    flex-direction: row;
`

const Spacer = styled.div`
    width: 1em;
    height: 1em;
`
