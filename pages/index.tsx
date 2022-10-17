import type { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import ProfilePicture from "./components/ProfilePicture"
import Footer from "./components/Footer"

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

            <Footer />
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
