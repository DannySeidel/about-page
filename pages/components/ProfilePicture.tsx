import Image from "next/image"
import styled from "styled-components"

export const ProfilePicture = () => {
    return (
        <ImageContainer>
            <Image src="/me.webp" width={300} height={300} />
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 300px;
    height: 300px;
`
