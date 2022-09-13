import styled from 'styled-components'

export const IssueContainer = styled.article`
  height: 16.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};

  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 0 1px ${(props) => props.theme['brand-blue']};
    transition: box-shadow 0.2s;
  }

  p {
    height: 6.7rem;
    line-height: 160%;

    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`

export const Header = styled.header`
  display: flex;

  gap: 1rem;

  h3 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};

    width: 17.687rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }

  margin-bottom: 1.25rem;
`
