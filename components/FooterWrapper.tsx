import styled from "styled-components"
import { Logo } from "./Logo"
import { Divider } from "./Divider"

export const FooterWrapper = () => {
    return (
        <FooterContainer>
            <Divider />
            <Footer>
                <Copyright>
                    <StyledText>Copyright by © 2022 Danny Seidel</StyledText>
                    <Logo
                        href="https://github.com/DannySeidel/about-page"
                        src="/github.svg"
                        alt="GitHub Logo"
                        width={20}
                        height={20}
                    />
                </Copyright>
                <MadeWithContainer>
                    <MadeWith>
                        <StyledText>Deployed with</StyledText>
                        <Logo href="https://vercel.com" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </MadeWith>
                    <Spacer />
                    <MadeWith>
                        <StyledText>Made with</StyledText>
                        <Logo href="https://nextjs.org" src="/nextjs.svg" alt="Next.js Logo" width={72} height={16} />
                    </MadeWith>
                </MadeWithContainer>
            </Footer>
        </FooterContainer>
    )
}

const Footer = styled.footer`
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
    @media (max-width: 790px) {
        justify-content: center;
        flex-direction: column;
    }
`

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`

const StyledText = styled.p`
    @media (max-width: 790px) {
        margin: 0.5em 0;
    }
`

const Copyright = styled.div`
    margin: 1em 2em;
    text-align: left;
    display: flex;
    flex-direction: row;
    @media (max-width: 790px) {
        margin: 0.5em 0 0;
        justify-content: center;
    }
`

const MadeWithContainer = styled.div`
    margin: 1em 2em;
    text-align: right;
    display: flex;
    flex-direction: row;
    @media (max-width: 790px) {
        margin: 0;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 0.5em;
    }
`

const MadeWith = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Spacer = styled.div`
    width: 1em;
    height: 1px;
`
