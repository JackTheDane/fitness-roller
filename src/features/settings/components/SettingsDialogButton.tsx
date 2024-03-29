import { useState } from "react";
import { Dialog } from "../../../components/Dialog";
import { SettingsForm } from "./SettingsForm";
import styles from "./SettingsDialogButton.module.scss";

export const SettingsDialogButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button
        title="Open options"
        onClick={() => setIsDialogOpen(true)}
        // style={{ position: "fixed", bottom: 5, right: 5 }}
      >
        ⚙
      </button>
      <Dialog
        className={styles.dialog}
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <SettingsForm />
      </Dialog>
    </>
  );
};
