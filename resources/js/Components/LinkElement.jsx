import {Link} from "@inertiajs/inertia-react";
import styled, { css } from 'styled-components';

const LinkElement = ({ href, primary, children, className = "" }) => {
    return (
        <LinkStyle primary={primary} href={href} className={``+ className}>
            {children}
        </LinkStyle>
    )
}

const LinkStyle = styled(Link)`
  background: ${props => props.primary ? "#FFB400" : ""};
  color: ${props => props.primary ? "white" : "#FFB400"};
  transform: translate(0%);
  transition: 0.3s ease-out;

  font-size: 1em;
  padding: 0.35em 1.1em;
  border: 2px solid ${props => props.theme.colors.primary};;
  border-radius: 3px;

    &:hover {
      background: ${props => props.primary ? "transparent" : "#FFB400"};
      color: ${props => props.primary ? "#FFB400" : "white"};
      transform: translate(0%, -30%);
      transition: 0.3s ease-out;
    }
`;

export default LinkElement;
