export const theme = {
  extend: {
    tokens: {
      colors: {
        darkdarkBlue: { value: "#213547" },
        greyLight: { value: "grey" },
        duckTeal: { value: "#01717D" },
        white: { value: "#fff" },
        yellowLight: { value: "#FFF7A3" },
        darkBlue: { value: "#293156" },
        middleBorder: { value: "#f2d78e" },

        lightGold: { value: "#BFAA87" },
        mediumGold: { value: "#A89773" },
        darkGold: { value: "#8E7D59" },
        cream: { value: "#FFF8E7" },
        lightGrey: { value: "#F5F5F5" },
        brokenWhite: { value: "#FAF3E0" },
        whiteGold: { value: "#f2eee4" },
        grey: {
          50: { value: "#f8f8f1" }, // Or très clair
          100: { value: "#e8e7d9" },
          200: { value: "#d7d6c2" },
          300: { value: "#c7c6ac" },
          400: { value: "#b7b69b" },
          500: { value: "#a6a589" },
          600: { value: "#92917a" },
          700: { value: "#7e7d6b" },
          800: { value: "#6a695d" },
          900: { value: "#55544d" },
          950: { value: "#403f3e" },
        },
        greyGold: {
          50: { value: "#fbf7f2" },
          100: { value: "#f6f1e6" },
          200: { value: "#e8e1ca" },
          300: { value: "#d9d0ae" },
          400: { value: "#cac091" },
          500: { value: "#b9ae7b" },
          600: { value: "#a09a66" },
          700: { value: "#877751" },
          800: { value: "#6f623d" },
          900: { value: "#59502e" },
          950: { value: "#403921" },
        },
        teal: {
          50: { value: "#f2f9f9" },
          100: { value: "#e6f4f4" },
          200: { value: "#c9e6e6" },
          300: { value: "#acd8d8" },
          400: { value: "#8fcaca" },
          500: { value: "#75b8b8" },
          600: { value: "#669e9e" },
          700: { value: "#518585" },
          800: { value: "#3e6f6f" },
          900: { value: "#2e5959" },
          950: { value: "#214040" },
        },
      },
      fonts: {
        body: { value: "var(--font-roboto), sans-serif" },
        heading: { value: "var(--font-playfair), serif" },
        dancing: { value: "var(--font-dancing)" },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          title: {
            value: {
              base: "{colors.teal.800}",
              _dark: "{colors.greyGold.400}",
            },
          },
          subtitle: {
            value: {
              base: "{colors.greyGold.800}",
              _dark: "{colors.greyGold.400}",
            },
          },
          primary: {
            value: {
              base: "{colors.greyGold.800}",
              _dark: "{colors.greyGold.100}",
            },
          },
          secondary: {
            value: {
              base: "{colors.teal.800}",
              _dark: "{colors.grey.200}",
            },
          },
          link: {
            value: {
              base: "{colors.teal.800}",
              _dark: "{colors.grey.200}",
            },
          },
        },
        background: {
          primary: {
            value: {
              base: "{colors.greyGold.100}",
              _dark: "{colors.grey.950}",
            },
          },
        },
        navbar: {
          text: {
            active: {
              value: {
                base: "{colors.greyGold.50}",
                _dark: "{colors.greyGold.50}",
              },
            },
            inactive: {
              value: {
                base: "{colors.teal.800}",
                _dark: "{colors.grey.300}",
              },
            },
          },
          background: {
            inactive: {
              value: {
                base: "{colors.greyGold.200}",
                _dark: "{colors.grey.900}",
              },
            },
            active: {
              value: {
                base: "{colors.teal.800}",
                _dark: "{colors.greyGold.600}",
              },
            },
          },
          border: {
            value: {
              base: "{colors.teal.800}",
              _dark: "{colors.greyGold.600}",
            },
          },
          dot: {
            value: {
              base: "{colors.teal.600}",
              _dark: "{colors.teal.800}",
            },
          },
          mobileBackground: {
            value: {
              base: "{colors.greyGold.200}",
              _dark: "{colors.grey.900}",
            },
          },
        },
        card: {
          background: {
            primary: {
              value: {
                base: "{colors.greyGold.200}",
                _dark: "{colors.grey.900}",
              },
            },
            secondary: {
              value: {
                base: "{colors.greyGold.700}",
                _dark: "{colors.grey.800}",
              },
            },
            hover: {
              value: {
                base: "{colors.greyGold.900}",
                _dark: "{colors.greyGold.700}",
              },
            },
          },
          border: {
            primary: {
              value: {
                base: "{colors.teal.600}",
                _dark: "{colors.teal.700}",
              },
            },
            secondary: {
              value: {
                base: "{colors.greyGold.400}",
                _dark: "{colors.greyGold.800}",
              },
            },
            hover: {
              value: {
                base: "{colors.greyGold.900}",
                _dark: "{colors.greyGold.600}",
              },
            },
          },
          text: {
            primary: {
              value: {
                base: "{colors.greyGold.200}",
                _dark: "{colors.greyGold.200}",
              },
            },
            hover: {
              value: {
                base: "{colors.greyGold.100}",
                _dark: "{colors.greyGold.100}",
              },
            },
          },
        },
        expandedCard: {
          closeButton: {
            base: {
              value: {
                base: "{colors.greyGold.600}",
                _dark: "{colors.greyGold.100}",
              },
            },
            hover: {
              value: {
                base: "{colors.grey.300}",
                _dark: "{colors.teal.800}",
              },
            },
          },
          background: {
            value: {
              base: "{colors.greyGold.200}",
              _dark: "{colors.grey.900}",
            },
          },
        },
        buttons: {
          primary: {
            background: {
              base: {
                value: {
                  base: "{colors.greyGold.400}",
                  _dark: "{colors.greyGold.300}",
                },
              },
              hover: {
                value: {
                  base: "{colors.greyGold.600}",
                  _dark: "{colors.greyGold.500}",
                },
              },
            },
            text: {
              base: {
                value: {
                  base: "{colors.greyGold.50}",
                  _dark: "{colors.greyGold.800}",
                },
              },
              hover: {
                value: {
                  base: "{colors.greyGold.100}",
                  _dark: "{colors.greyGold.900}",
                },
              },
            },
          },
          secondary: {
            background: {
              base: {
                value: {
                  base: "{colors.greyGold.300}",
                  _dark: "{colors.grey.600}",
                },
              },
              hover: {
                value: {
                  base: "{colors.greyGold.600}",
                  _dark: "{colors.greyGold.200}",
                },
              },
            },
            text: {
              base: {
                value: {
                  base: "{colors.greyGold.900}",
                  _dark: "{colors.greyGold.200}",
                },
              },
              hover: {
                value: {
                  base: "{colors.greyGold.100}",
                  _dark: "{colors.grey.800}",
                },
              },
            },
          },
          tertiary: {
            background: {
              base: {
                value: {
                  base: "{colors.greyGold.200}",
                  _dark: "{colors.grey.800}",
                },
              },
              hover: {
                value: {
                  base: "{colors.greyGold.600}",
                  _dark: "{colors.greyGold.200}",
                },
              },
            },
            text: {
              base: {
                value: {
                  base: "{colors.greyGold.900}",
                  _dark: "{colors.greyGold.200}",
                },
              },
              hover: {
                value: {
                  base: "{colors.greyGold.50}",
                  _dark: "{colors.greyGold.900}",
                },
              },
            },
            border: {
              base: {
                value: {
                  base: "{colors.greyGold.300}",
                  _dark: "{colors.greyGold.200}",
                },
              },
              hover: {
                value: {
                  base: "{colors.greyGold.800}",
                  _dark: "{colors.grey.800}",
                },
              },
            },
          },
        },
        contact: {
          borders: {
            primary: {
              value: {
                base: "{colors.greyGold.600}",
                _dark: "{colors.teal.700}",
              },
            },
            secondary: {
              value: {
                base: "{colors.greyGold.400}",
                _dark: "{colors.greyGold.600}",
              },
            },
          },
        },
        cv: {
          header: {
            text: { value: "{colors.darkBlue}" },
            background: { value: "{colors.yellowLight}" },
          },
          title: {
            text: { value: "{colors.white}" },
            background: { value: "{colors.duckTeal}" },
          },
          text: {
            primary: { value: "{colors.darkdarkBlue}" },
            secondary: { value: "{colors.greyLight}" },
          },
        },
      },
    },
    keyframes: {},
  },
};

export default theme;
