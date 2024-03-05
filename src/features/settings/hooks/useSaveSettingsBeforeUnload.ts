import { useEffect } from "react";
import { SettingsStore } from "../stores/SettingsStore";
import { SETTINGS_STORAGE_IDENTIFIER } from "../constants";

export const useSaveSettingsBeforeUnload = () => {
  useEffect(() => {
    const callback = () => {
      localStorage.setItem(
        SETTINGS_STORAGE_IDENTIFIER,
        JSON.stringify(SettingsStore.getState())
      );
    };

    window.addEventListener("beforeunload", callback);

    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, []);
};
