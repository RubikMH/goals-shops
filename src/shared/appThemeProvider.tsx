import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

export default function appThemeProvider(children) {
    return <CacheProvider value={muiCache}>
        <ThemeProvider theme={myTheme}>
            <Root />
        </ThemeProvider>
    </CacheProvider>,
};


