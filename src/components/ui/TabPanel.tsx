import { type ReactNode } from "react";

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

export function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <div>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}
