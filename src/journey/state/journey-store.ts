import { create } from "zustand";

export type JourneyAct = 1 | 2 | 3 | 4 | 5 | 6 | "end";
export type Locomotion = "jeep" | "on-foot";
export type JourneyPhase = "opening" | "playing" | "paused";

type JourneyStore = {
  act: JourneyAct;
  locomotion: Locomotion;
  phase: JourneyPhase;
  muted: boolean;
  liteMode: boolean;
  activeInteractable: string | null;
  showLitePrompt: boolean;
  setAct: (act: JourneyAct) => void;
  setPhase: (phase: JourneyPhase) => void;
  setLocomotion: (locomotion: Locomotion) => void;
  toggleMute: () => void;
  toggleLiteMode: () => void;
  setActiveInteractable: (id: string | null) => void;
  setShowLitePrompt: (show: boolean) => void;
};

export const useJourneyStore = create<JourneyStore>((set) => ({
  act: 1,
  locomotion: "jeep",
  phase: "opening",
  muted: true,
  liteMode: false,
  activeInteractable: null,
  showLitePrompt: false,
  setAct: (act) => set({ act }),
  setPhase: (phase) => set({ phase }),
  setLocomotion: (locomotion) => set({ locomotion }),
  toggleMute: () => set((state) => ({ muted: !state.muted })),
  toggleLiteMode: () => set((state) => ({ liteMode: !state.liteMode })),
  setActiveInteractable: (activeInteractable) => set({ activeInteractable }),
  setShowLitePrompt: (showLitePrompt) => set({ showLitePrompt }),
}));
