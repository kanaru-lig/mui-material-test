// 参考 : https://mui.com/base-ui/guides/next-js-app-router/#emotion

"use client";

import { useState, type ReactNode } from "react";
import createCache, { type Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import tokens from "@digital-go-jp/design-tokens";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0017C1",
      50: tokens.Color.Primitive.Blue[50].value,
      100: tokens.Color.Primitive.Blue[100].value,
      200: tokens.Color.Primitive.Blue[200].value,
      300: tokens.Color.Primitive.Blue[300].value,
      400: tokens.Color.Primitive.Blue[400].value,
      500: tokens.Color.Primitive.Blue[500].value,
      600: tokens.Color.Primitive.Blue[600].value,
      700: tokens.Color.Primitive.Blue[700].value,
      800: tokens.Color.Primitive.Blue[800].value,
      900: tokens.Color.Primitive.Blue[900].value,
      A100: tokens.Color.Primitive.Blue[1000].value,
      A200: tokens.Color.Primitive.Blue[1100].value,
      A400: tokens.Color.Primitive.Blue[1200].value,
      A700: tokens.Color.Primitive.Blue[1200].value,
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
