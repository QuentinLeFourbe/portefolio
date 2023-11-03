export const theme = {
  extend: {
    tokens: {
      colors: {
        textPrimary: { value: "#213547" },
        textSecondary: { value: "grey" },
        titleBackground: { value: "#01717D" },
        titleColor: { value: "white" },
        headerBackground: { value: "#FFF7A3" },
        headerColor: { value: "#293156" },
        middleBorder: { value: "#f2d78e" },

        lightGold: { value: "#BFAA87" },
        mediumGold: { value: "#A89773" },
        darkGold: { value: "#8E7D59" },
        cream: { value: "#FFF8E7" },
        lightGrey: { value: "#F5F5F5" },
        brokenWhite: { value: "#FAF3E0" },
        whiteGold: { value: "#f2eee4" },
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
          primary: {
            value: {
              base: "{colors.greyGold.800}",
              _dark: "{colors.darkGold}",
            },
          },
          title: {
            value: {
              base: "{colors.titleBackground}",
              _dark: "{colors.lightGold}",
            },
          },
        },
        background: {
          primary: {
            value: {
              base: "{colors.greyGold.200}",
              _dark: "{colors.brokenWhite}",
            },
          },
          secondary: {
            value: {
              base: "{colors.lightGrey}",
              _dark: "{colors.lightGrey}",
            },
          },
        },
        navbar: {
          text: {
            value: {
              base: "{colors.teal.800}",
              _dark: "{colors.lightGold}",
            },
          },
          background: {
            value: {
              base: "{colors.greyGold.200}",
              _dark: "{colors.mediumGold}",
            },
          },
          border: {
            value: {
              base: "{colors.greyGold.400}",
              _dark: "{colors.mediumGold}",
            },
          },
          dot: {
            value: {
              base: "{colors.teal.600}",
              _dark: "{colors.darkGold}",
            },
          },
        },
        card: {
          background: {
            primary: {
              value: {
                base: "{colors.greyGold.200}",
                _dark: "{colors.brokenWhite}",
              },
            },
            secondary: {
              value: {
                base: "{colors.greyGold.700}",
                _dark: "{colors.lightGold}",
              },
            },
          },
          border: {
            value: {
              base: "{colors.teal.600}",
              _dark: "{colors.darkGold}",
            },
          },
          text: {
            value: {
              base: "{colors.greyGold.200}",
              _dark: "{colors.darkGold}",
            },
          },
        },
      },
    },

    keyframes: {},
  },
};

export default theme;
