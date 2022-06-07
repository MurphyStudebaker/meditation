import '../styles/globals.css'
import styled from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <Global>
    <Component {...pageProps} />
  </Global> )
}

const Global = styled.div`
height: 100%;
.text-source-sans {
  font-family: "Source Sans Pro", sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

/* TOKENS */
html {
  --spacing: 8px;
  --color-primary: #14233e;
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html,
body,
#root {
  height: 100%;
}

body {
  background-color: var(--color-gray-100);
  font-family: "Crimson Pro", sans-serif;
}

/*
  Remove default button styles. We'll provide our own at the
  component level
*/
button {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
`

export default MyApp
