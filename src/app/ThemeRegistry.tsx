// 参考 : https://mui.com/base-ui/guides/next-js-app-router/#emotion

"use client";

import { useState, type ReactNode } from "react";
import createCache, { type Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0017C1",
      50: "#E8F1FE",
      100: "#D9E6FF",
      200: "#C5D7FB",
      300: "#9DB7F9",
      400: "#7096F8",
      500: "#4979F5",
      600: "#3460FB",
      700: "#264AF4",
      800: "#0031D8",
      900: "#0017C1",
    },
  },
});

type Props = {
  options: Options;
  children: ReactNode;
};

export function ThemeRegistry({ options, children }: Props) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
