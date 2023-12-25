import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main className="mx-auto p-4 max-w-2xl">
      <div className="space-x-4">
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="outlined" color="primary">
          Button
        </Button>
        <Button variant="text" color="primary">
          Button
        </Button>
      </div>
      <div className="space-x-4">
        <Button variant="contained" color="secondary">
          Button
        </Button>
        <Button variant="outlined" color="secondary">
          Button
        </Button>
        <Button variant="text" color="secondary">
          Button
        </Button>
      </div>
    </main>
  );
}
