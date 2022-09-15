import styled from 'styled-components'

interface linkProps {
  iconPosition: 'left' | 'right'
}

export const Link = styled.a<linkProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.iconPosition === 'left' ? 'row-reverse' : 'row'};
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
