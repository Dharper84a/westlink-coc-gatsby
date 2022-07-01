import styled, {css} from 'styled-components';

const defaultCss = css`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  /* height: 60px; */
  padding: 1rem 0.5rem;
  color: ${({theme}) => theme.styles.button.textColor};
  background: transparent;
  border: none;
  cursor: pointer;
`

export default defaultCss;