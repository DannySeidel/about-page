import Image from "next/image"
import styled from "styled-components"

export const ProfilePicture = () => {
    return (
        <ImageContainer>
            <Image src="/me.webp" alt="Picture of Me" width={320} height={320} />
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
`
