import { ButtonExample } from "@/components/ButtonExample";
import { ModalExample } from "@/components/ModalExample";
import { TabExample } from "@/components/TabExample";

export default function Home() {
  return (
    <main className="mx-auto p-4 max-w-2xl space-y-4">
      <ButtonExample />
      <ModalExample />
      <TabExample />
    </main>
  );
}
