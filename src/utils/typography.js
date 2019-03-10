import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import { primaryColor, grey } from "./colors"

const typography = new Typography({
  title: "chrispop",
  baseFontSize: "20px",
  baseLineHeight: "1.6",
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Alegreya Sans",
      styles: ["400", "700"],
    },
    {
      name: "Alegreya",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Alegreya Sans", "sans-serif"],
  bodyFontFamily: ["Alegreya", "sans-serif"],
  headerGreyHue: "warm",
  bodyGreyHue: "warm",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: "#333333",
      borderBottom: `2px solid ${primaryColor}`,
      textDecoration: "none",
      transition: ".1s",
    },
    "a:hover": {
      borderBottom: `4px solid ${primaryColor}`,
      transition: ".1s",
    },
    blockquote: {
      marginLeft: 0,
      paddingLeft: "1.8rem",
      borderLeft: `6px solid ${primaryColor}`,
      fontStyle: "italic",
      color: grey,
    },
  }),
  plugins: [new CodePlugin()],
})

export default typography
