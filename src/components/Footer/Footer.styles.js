import styled from 'react-emotion'

export const ListContainer = styled('ul')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;

  li {
    margin: 0 5px;

    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`