import React from 'react'
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { InfoAndResourcesComponent, Left, Right, Content, Heading, SubHeading, Copy, LinkList, LinkItem, LinksContainer } from './styles';

export const InfoAndResources = (props) => {
  const variant = props.variant ? props.variant : 'normal';

  return (
    <InfoAndResourcesComponent>
      <Left>
        {variant === 'normal' &&
        <Content>
          <Heading>
            {props.heading}
          </Heading>
          <Copy>
            {props.copy}
          </Copy>
        </Content>
        }
        {variant === 'flipped' &&
        <Content>

        </Content>
        }
      </Left>
      <Right>
        {variant === 'flipped' &&
        <Content>
          <Heading>
            {props.heading}
          </Heading>
          <Copy>
            {props.copy}
          </Copy>
        </Content>
        }
        {variant === 'normal' &&
        <Content>
          {props.links &&
          <LinksContainer>
          <SubHeading>
            More Info
          </SubHeading>
          <LinkList>
            {props.links.map((link, key) => {
              return(
                <LinkItem>
                  <FontAwesomeIcon icon={faArrowRight} /><Link to={link.href} key={key}>{link.label}</Link>
                </LinkItem>
              )

            })}
          </LinkList>
          </LinksContainer>
          }
        </Content>
        }
      </Right>

    </InfoAndResourcesComponent>
  )
}

export default InfoAndResources;