import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  input {
    width: 100%;

    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const Publications = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 160%;
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-span']};
  }

  margin-bottom: 0.75rem;
  margin-top: 4.5rem;
`
