import React from "react";
import PropTypes from "prop-types";

import MainContainer from "../MainContainer";
import { GridContainer, FlexContainer, GridItem } from "../../mainStyles";
import { Icon, Img, IconContainer } from "../Icon/styles";
import Typography from "../Typography";

import {
  FooterColumnsContainer,
  FooterColumn,
  CopyRightIconsContainer,
  CopyRightIcon,
} from "./styles";

class FooterComponent extends React.Component {
  render() {
    const { logo, contacts, copyRight } = this.props.items;

    return (
      <footer id="footer">
        <MainContainer
          settings={{
            backgroundColorMainContainer: "footer",
            heightMainContainer: "footer",
            stylesBlock: "callTo",
          }}
          contentContainer={
            <FlexContainer heightFlexContainer="footer">
              <FooterColumnsContainer mediaGridBlock="footer">
                <FooterColumn
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IconContainer>
                    <Img
                      backgroundImg={logo.imgLogo}
                      heightImg="38px"
                      widthImg="80px"
                    />
                  </IconContainer>

                  <Typography
                    items={logo}
                    settings={{ stylesText: "footerLogo" }}
                  />
                </FooterColumn>

                {contacts.map((item, index) => {
                  return (
                    <FooterColumn>
                      <Typography
                        key={`copyRight${index}`}
                        items={item}
                        settings={{
                          stylesText: "footer",
                          gridGap: "1.3vw",
                        }}
                      />
                    </FooterColumn>
                  );
                })}
              </FooterColumnsContainer>
            </FlexContainer>
          }
        />

        <MainContainer
          settings={{
            backgroundColorMainContainer: "copyRight",
            stylesBlock: "callTo",
          }}
          contentContainer={
            <FlexContainer heightFlexContainer="header">
              <Typography
                items={copyRight}
                settings={{ mediaText: "copyRigth" }}
              />
              <CopyRightIconsContainer>
                {copyRight.icons.map(({ icon, href }) => {
                  return (
                    <CopyRightIcon>
                      <a
                        key={href}
                        href={href}
                        style={{ textDecoration: "none" }}
                      >
                        <Icon className={icon} stylesIcon="footer"></Icon>
                      </a>
                    </CopyRightIcon>
                  );
                })}
              </CopyRightIconsContainer>
            </FlexContainer>
          }
        />
      </footer>
    );
  }
}

FooterComponent.propTypes = {
  items: PropTypes.array,
};

FooterComponent.defaultProps = {
  items: [
    {
      logo: {},
      contacts: [
        {
          title: "",
          text: "",
        },
      ],
      copyRight: {},
    },
  ],
};

export default FooterComponent;
