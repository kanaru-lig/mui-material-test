import MuiButton from "@mui/material/Button";
import { Button } from "@/components/ui/Button";

export function ButtonExample() {
  return (
    <div className="space-y-4">
      <h3>Material UI デフォルト</h3>
      <div className="space-x-4">
        <MuiButton variant="contained" color="primary">
          ログイン
        </MuiButton>
        <MuiButton variant="outlined" color="primary">
          ログイン
        </MuiButton>
        <MuiButton variant="text" color="primary">
          ログイン
        </MuiButton>
        <MuiButton disabled color="primary">
          ログイン
        </MuiButton>
      </div>
      <h3>カスタマイズ済み</h3>
      <div className="space-x-4">
        <Button variant="contained" color="primary">
          ログイン
        </Button>
        <Button variant="outlined" color="primary">
          ログイン
        </Button>
        <Button variant="text" color="primary">
          ログイン
        </Button>
        <Button disabled color="primary">
          ログイン
        </Button>
      </div>
      <h2>size propsをいじった場合</h2>
      <div className="space-x-4">
        <Button variant="contained" color="primary" size="small">
          small
        </Button>
        <Button variant="contained" color="primary" size="medium">
          medium
        </Button>
        <Button variant="contained" color="primary" size="large">
          large
        </Button>
      </div>
    </div>
  );
}
