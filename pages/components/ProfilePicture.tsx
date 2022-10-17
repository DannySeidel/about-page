import Image from "next/image"
import styled from "styled-components"

const ProfilePicture = () => {
    return (
        <ImageContainer>
            <Image src="/me.webp" alt="Picture of Me" width={750} height={750} />
        </ImageContainer>
    )
}

export default ProfilePicture

const ImageContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 300px;
    height: 300px;
`
