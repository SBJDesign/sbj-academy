'use client';

import { useEffect, useRef, useState } from 'react';
import {
  certificateCourses,
  downloadCanvasPng,
  formatCertificateDate,
  generateCertificateId,
  renderCertificateCanvas,
} from '@/lib/certificate';

interface CertificateModalProps {
  open: boolean;
  onClose: () => void;
  courseSlug: string;
  defaultName?: string;
  completedAt: string;
  existingId?: string;
  onSave: (name: string, certId: string) => void;
}

export function CertificateModal({
  open,
  onClose,
  courseSlug,
  defaultName = '',
  completedAt,
  existingId,
  onSave,
}: CertificateModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState(defaultName);
  const [rendering, setRendering] = useState(false);

  const course = certificateCourses[courseSlug] ?? certificateCourses.branding;
  const issuedDate = formatCertificateDate(completedAt);
  const certId = existingId ?? generateCertificateId(courseSlug, completedAt);

  useEffect(() => {
    if (open) setName(defaultName);
  }, [open, defaultName]);

  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const displayName = name.trim() || 'Your Name';

    setRendering(true);
    renderCertificateCanvas(canvas, {
      studentName: displayName,
      issuedDate,
      certificateId: certId,
      course,
    })
      .catch(console.error)
      .finally(() => setRendering(false));
  }, [open, name, issuedDate, certId, course]);

  if (!open) return null;

  const handleDownload = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    onSave(trimmed, certId);
    const canvas = canvasRef.current;
    if (canvas) {
      downloadCanvasPng(
        canvas,
        `SBJ_Certificate_${trimmed.replace(/\s+/g, '_')}.png`
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal
      aria-labelledby="cert-title"
    >
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
        <div className="border-b border-border px-6 py-4">
          <h2 id="cert-title" className="font-display text-xl font-semibold">
            🎓 Your certificate
          </h2>
          <p className="mt-1 text-sm text-muted">
            Enter your name as it should appear on the certificate.
          </p>
        </div>

        <div className="space-y-4 p-6">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Full name</span>
            <input
              type="text"
              className="input-field w-full"
              placeholder="e.g. Amina Okafor"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <div className="cert-preview-wrap overflow-hidden rounded-xl border border-teal/20 bg-[#14142e] shadow-lg">
            <canvas
              ref={canvasRef}
              width={900}
              height={600}
              className="block h-auto w-full"
            />
            {rendering && (
              <p className="py-2 text-center text-xs text-white/50">Updating…</p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-primary flex-1 sm:flex-none"
              disabled={!name.trim() || rendering}
              onClick={handleDownload}
            >
              Download PNG
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
