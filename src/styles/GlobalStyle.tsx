import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      /* Pretendard 폰트를 CDN에서 불러오기 */
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        font-family: "Pretendard", sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
