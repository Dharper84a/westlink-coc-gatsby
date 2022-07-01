import * as Fx from './keyframes/keyframes';

export const colors = {
  transparentWhite: '#FFFFFF4D',
  transparentBlack: '#0000004D',
  transparentGray: '#E7E7E74D',
  transparentGreen: '#0070574D',
  transparentBlueGray: '#6578864D',
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  darkBlack: '#404040',
  lightGreen: '#13b38f',
  pastelGreen: '#98BA96',
  mediumPastelGreen: '#7D997B',
  darkPastelGreen: '#688067',
  grayBlue: '#96AABA',
  pastelPurple: '#B896BA',
  brown: '#BAA696',
  green: '#007057',
  mediumGreen: '#005d48',
  charcoal: '#222629',
  lightCharcoal: '#2E3337',
  lightGray: '#D4D4D4',
  veryLightGray: '#E7E7E7',
  ultraLightGray: '#ececec',
  paleRed: '#f5625d',
  purple: '#5a0c81',
  blue: '#0085c6',
  mediumBlue: '#1d4acc',
  darkBlue: '#24305E',
  pink: '#f04ce4',
  blueGray: '#657886',
  mediumBlueGray: '#42525E',
  gradients: {
    special: 'linear-gradient(90deg, rgba(0,133,198,1) 0%, rgba(90,12,129,1) 50%, rgba(240,76,228,1) 100%)',
    green: 'linear-gradient(60deg, rgba(0,112,87,1) 0%, rgba(0,93,72,1) 100%)',
    greenTransparent: 'linear-gradient(90deg, rgba(0,112,87,1) 0%, rgba(0,112,87,0) 100%)',
    whiteBlueGray: 'linear-gradient(45deg, rgba(231,231,231,1) 0%, rgba(101,120,134,1) 100%)',
    radialWhiteBlueGray: 'radial-gradient(circle, rgba(231,231,231,1) 0%, rgba(101,120,134,1) 100%)',
    whiteTransparent: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
    radialPastelGreen: 'radial-gradient(circle, rgba(125,153,123,1) 0%, rgba(152,186,150,1) 100%)',
  },
}

const colorStyle = {
  darkText: colors.charcoal,
  lightText: colors.veryLightGray,
}

const boxShadowDown = '0 1px 1px rgba(0,0,0,0.05),0 2px 2px rgba(0,0,0,0.05),0 4px 4px rgba(0,0,0,0.05),0 8px 8px rgba(0,0,0,0.05),0 16px 24px rgba(0,0,0,0.05)';

const boxShadowUp = '0 -1px 1px rgba(0,0,0,0.05),0 -2px 2px rgba(0,0,0,0.05),0 -4px 4px rgba(0,0,0,0.05),0 -8px 8px rgba(0,0,0,0.05),0 -16px 24px rgba(0,0,0,0.05)';

const lineLimit = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
}
export const theme = {
  fx: Fx,
  colors,
  layout: {
    paddedContent: {
      css: {
        padding: '0 6% 0 6%'
      },
      top: '0',
      right: '6%',
      bottom: '0',
      left: '6%',
    },
    layers: {
      under: -1,
      base: 1,
      content: 10,
      overlay: 100,
      drawer: 200,
    },
    site: {
      default: {
        borderRadius: '1rem',
        gap: '3rem',
        sidePadding: '6%',
      },
      header: {
        height: '80px',
        padding: {
          top: '0.5rem',
          right: '3%',
          bottom: '0.5rem',
          left: '3%',
          all: '0.5rem 3% 0.5rem 3%',
        }
      },
      footer: {
        height: '40px',
        padding: {
          top: '0.5rem',
          right: '3%',
          bottom: '0.5rem',
          left: '3%',
          all: '0.5rem 3% 0.5rem 3%',
        }
      },
      main: {
        padding: {
          top: '0.5rem',
          right: '3%',
          bottom: '0.5rem',
          left: '3%',
          all: '0 6% 2rem 6%',
        }
      },
      p: {
        margin: '0.5rem 0',
        fontSize: '1.125rem',
        lineHeight: '1.6',
      }
    }
  },
  styles: {
    boxShadow: {
      down: boxShadowDown,
      up: boxShadowUp,
    },
    text: {
      color: colors.veryLightGray,
      lineLimit: {
        zero: {
          overflow: 'visible',
          textOverflow: 'none',
          display: 'inherit',
          WebkitBoxOrient: 'inherit',
        },
        two: {
          ...lineLimit,
          WebkitLineClamp: '2',
          lineClamp: '2',
        },
        three: {
          ...lineLimit,
          WebkitLineClamp: '3',
          lineClamp: '3',
        },
        four: {
          ...lineLimit,
          WebkitLineClamp: '4',
          lineClamp: '4',
        }
      }
    },
    background: {
      siteHeader: colors.green,
      siteFooter: colors.darkBlack,
    },
    button: {
      reset: {
        margin: '0',
        padding: '0',
        border: 'none',
        borderRadius: '0',
        color: colorStyle.darkText,
        fontSize: '1rem',
        lineHeight: '1',
        letterSpacing: '0',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
      defaults: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '0.5rem',
        paddingRight: '0.75rem',
        paddingBottom: '0.5rem',
        paddingLeft: '0.75rem',
        fontSize: '1rem',
        cursor: 'pointer',
        border: '1px solid',
        borderRadius: '0.25rem',
        transition: 'all 0.33s ease-in-out',
        svg: {
          fontSize: '0.95rem',
          paddingLeft: '0.5rem',
          transition: 'all 0.33s ease-in-out',
        }
      },
      hoverDefaults: {
        boxShadow: boxShadowDown,
      },
      solid: {
        light: {
          normal: {
            background: colors.lightCharcoal,
            color: colors.white,
            borderColor: colors.lightCharcoal,
            svg: {
              color: colors.white,
            },
          },
          hover: {
            background: colors.white,
            color: colors.charcoal,
            borderColor: colors.white,
            boxShadow: boxShadowDown,
            svg: {
              color: colors.charcoal,
            },
          }
        },
        dark: {
          normal: {
            background: colors.lightCharcoal,
            color: colors.white,
            borderColor: colors.charcoal,
            svg: {
              color: colors.white,
            },
          },
          hover: {
            background: colors.charcoal,
            borderColor: colors.lightCharcoal,
            boxShadow: boxShadowDown,
          }
        },
      },
      transparent: {
        light: {
          normal: {
            background: colors.darkPastelGreen,
            color: colors.darkBlack,
            border: '1px solid ' + colors.transparent,
            svg: {
              color: colors.darkBlack,
            },
          },
          hover: {
            background: colors.transparent,
            color: colors.darkBlack,
            boxShadow: 'none',
            svg: {
              // color: colors.lightCharcoal,
            },
          }
        },
      }
    },
    
  },
  devices: {
    iphonesUp: '(min-width: 768px)',
    ipadsUp: '(min-width: 1024px)',
    smallMacsUp: '(min-width: 1366px)',
    mediumMacsUp: '(min-width: 1600px)',
    largeMacsUp: '(min-width: 1900px)',
  }

}