import React, { useRef, useState, useEffect, useLayoutEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Button from "../../Buttons"

import {
  DividedSidesComponent,
  Left,
  Right,
  Content,
  Copy,
  Heading,
  BorderAccent,
  Footer,
} from "./styles"
export const DividedSides = (props) => {

  return (
    <DividedSidesComponent className={props.layout}>
      <Left>
        <Content>
            {props.heading &&
            <Heading>{props.heading}</Heading>
            }
            {props.copy &&
            <Copy>{props.copy}</Copy>
            }
            
            <Footer>
              {props.hrefDetails &&
              <Button label={props.hrefDetailsLabel} type="solid" variant="dark" />
              }
              {props.hrefOther &&
              <Button label={props.hrefOtherLabel} type="solid" variant="dark" />
              }
            </Footer>
        </Content>
      </Left>
      <Right bgImage={props.image || ''}>
        <BorderAccent></BorderAccent>
        {/* <Content></Content> */}
      </Right>
    </DividedSidesComponent>
  )
}

export default DividedSides
