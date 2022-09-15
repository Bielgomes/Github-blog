import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  padding: 2rem;

  margin-top: -85px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.25rem;
`

export const InfoGroup = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 0.5rem;
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  line-height: 160%;

  color: ${(props) => props.theme['base-span']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
