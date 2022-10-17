import type { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import Divider from "./components/Divider"
import ProfilePicture from "./components/ProfilePicture"
import Logo from "./components/Logo"

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
                <h2>Dual Computer Science Student</h2>
            </Container>

            <FooterContainer>
                <Divider />
                <Footer>
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
