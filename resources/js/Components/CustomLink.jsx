import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import styled from 'styled-components';

const CustomLink = ({ href, secondary, children, className = "" }) => {
    return (
        <LinkStyle secondary={secondary} href={href} className={``+ className}>
            {children}
        </LinkStyle>
    );
};

const LinkStyle = styled(Link)`
  background: ${props => props.secondary ? "#4F6CA4" : "white"};
  color: ${props => props.secondary ? "white" : "#0F1727"};
  transform: translate(0%);
  transition: 0.3s ease-out;

  font-size: 1em;
  padding: 0.35em 1.1em;
  border-radius: 3px;

    &:hover {
      transform: translate(0%, -30%);
      transition: 0.3s ease-out;
    }
`;

export default CustomLink;