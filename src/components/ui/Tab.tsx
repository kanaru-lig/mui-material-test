import MuiTab, { type TabProps } from "@mui/material/Tab";

export function Tab(props: TabProps) {
  return <MuiTab sx={{ flex: 1 }} {...props} />;
}
