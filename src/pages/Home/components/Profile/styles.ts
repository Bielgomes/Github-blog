import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;

  margin-top: -100px;
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  display: flex;
  gap: 2rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};

    padding-bottom: 0.5rem;
  }

  span {
    line-height: 160%;
  }
`

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['brand-blue']};

  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
    transition: border 0.2s;
  }

  span {
    display: flex;
    padding: 0.218rem 0;
  }
`

export const InfoGroup = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
