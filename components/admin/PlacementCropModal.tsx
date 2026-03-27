"use client";

import React, { useCallback, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { getCroppedPlacementImage } from "@/lib/getCroppedPlacementImage";
import { PLACEMENT_ASPECT_RATIO } from "@/lib/placementConstants";

type Props = {
  imageSrc: string;
  open: boolean;
  onClose: () => void;
  onCropped: (file: File) => void;
};

export function PlacementCropModal({ imageSrc, open, onClose, onCropped }: Props) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [busy, setBusy] = useState(false);
  const [cropError, setCropError] = useState<string | null>(null);

  const onCropComplete = useCallback((_area: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const onCropAreaChange = useCallback((_area: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  async function handleApply() {
    if (!croppedAreaPixels) return;
    setCropError(null);
    setBusy(true);
    try {
      const blob = await getCroppedPlacementImage(imageSrc, croppedAreaPixels);
      const file = new File([blob], "placement-card.jpg", { type: "image/jpeg" });
      onCropped(file);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setCropError(msg);
    } finally {
      setBusy(false)
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Crop placement card"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(76,117,255,0.1),transparent_55%)]"
        aria-hidden
      />

      <div className="relative flex w-full max-w-2xl flex-col gap-5 rounded-2xl border border-white/20 bg-white/[0.12] p-5 shadow-xl shadow-black/15 backdrop-blur-2xl sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
              Crop image
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-[#A7ADBE]">
              Fixed ratio matches placement cards (247.656 × 270). Drag to reposition; use zoom to
              fit.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-[#d1d5e0] backdrop-blur-sm transition hover:bg-white/18 hover:text-white"
            onClick={onClose}
            disabled={busy}
          >
            Cancel
          </button>
        </div>

        {cropError ? (
          <p className="rounded-xl border border-red-400/35 bg-red-500/10 px-3 py-2 text-xs text-red-100" role="alert">
            {cropError}
          </p>
        ) : null}

        <div className="relative h-[min(55vh,420px)] w-full overflow-hidden rounded-xl border border-white/15 bg-black/30 ring-1 ring-white/10">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={PLACEMENT_ASPECT_RATIO}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            onCropAreaChange={onCropAreaChange}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-[#9aa3b8]">
            <span>Zoom</span>
            <span className="tabular-nums text-[#A7ADBE]">{zoom.toFixed(2)}×</span>
          </div>
          <input
            type="range"
            min={1}
            max={3}
            step={0.05}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#4C75FF] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#4C75FF] [&::-webkit-slider-thumb]:shadow-md"
          />
        </div>

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            type="button"
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-[#d1d5e0] backdrop-blur-sm transition hover:bg-white/18 hover:text-white"
            onClick={onClose}
            disabled={busy}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:opacity-45"
            onClick={handleApply}
            disabled={busy || !croppedAreaPixels}
          >
            {busy ? "Processing…" : "Use cropped image"}
          </button>
        </div>
      </div>
    </div>
  );
}
