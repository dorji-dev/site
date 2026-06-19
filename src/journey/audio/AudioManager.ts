import { Howl } from "howler";

let ambientSound: Howl | null = null;

// Populated in Sprint 3d when ambient audio assets are added.
const AMBIENT_SRC: string[] = [];

export const initAmbientAudio = (): void => {
  if (ambientSound || AMBIENT_SRC.length === 0) {
    return;
  }

  ambientSound = new Howl({
    src: AMBIENT_SRC,
    loop: true,
    volume: 0.2,
  });
};

export const setAmbientMuted = (muted: boolean): void => {
  if (!ambientSound) {
    return;
  }

  if (muted) {
    ambientSound.stop();
    return;
  }

  if (!ambientSound.playing()) {
    ambientSound.play();
  }
};

export const hasAmbientAudio = (): boolean => AMBIENT_SRC.length > 0;
