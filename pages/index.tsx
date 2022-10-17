import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import Divider from "./components/Divider"
import ProfilePicture from "./components/ProfilePicture"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta lang="en" name="description" content="About Me Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Title>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hi I'm
                <br />
                Danny Seidel
            </Title>

            <Container>
                <ProfilePicture />
                <h4>Dual Computer Science Student</h4>
            </Container>

            <FooterContainer>
                <Divider />
                <Footer>
                    <Copyright>
                        <p>Copyright by © 2022 Danny Seidel</p>
                    </Copyright>
                    <MadeWith>
                        <p>Deployed with</p>
                        <StyledDiv>
                            <Logo src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </StyledDiv>
                        <Spacer />
                        <p>Made with</p>
                        <StyledDiv>
                            <Logo src="/nextjs.svg" alt="Next.js Logo" width={72} height={16} />
                        </StyledDiv>
                    </MadeWith>
                </Footer>
            </FooterContainer>
            {/*<a*/}
            {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*>*/}
            {/*    Powered by{" "}*/}
            {/*    <span>*/}
            {/*        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
            {/*    </span>*/}
            {/*</a>*/}
        </>
    )
}

export default Home

const Title = styled.h1`
    text-align: center;
    margin: 3rem;
`

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Footer = styled.footer`
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
`

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`

const Copyright = styled.div`
    margin: 0.5em 2em 1em;
    text-align: left;
`

const MadeWith = styled.div`
    margin: 0.5em 2em 1em;
    text-align: right;
    display: flex;
    flex-direction: row;
`

const Logo = styled(Image)`
    filter: invert(0);
    @media (prefers-color-scheme: dark) {
        filter: invert(1);
    }
`

const StyledDiv = styled.div`
    margin: auto 0.5em;
`

const Spacer = styled.div`
    width: 1em;
    height: 1em;
`
