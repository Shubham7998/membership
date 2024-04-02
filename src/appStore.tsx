import React from 'react'
import create, { StateCreator, GetState, SetState, StoreApi } from 'zustand'
import { persist } from "zustand/middleware";

type AppState = {
    dopen: boolean;
    updateOpen: (dopen: boolean) => void;
}

const appStore: StateCreator<AppState> = (set: SetState<AppState>, get: GetState<AppState>, api: StoreApi<AppState>) => ({
    dopen: true,
    updateOpen: (dopen: boolean) => set({ dopen }),
});

const persistedAppStore = persist(appStore, { name: "my_app_store" });

export const useAppStore = create(persistedAppStore);
