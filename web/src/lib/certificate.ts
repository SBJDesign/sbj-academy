export interface CertificateCourseInfo {
  titleLine: string;
  subtitle: string;
  idPrefix: string;
}

export const certificateCourses: Record<string, CertificateCourseInfo> = {
  branding: {
    titleLine: 'The Art & Science of Brand Building',
    subtitle: 'Branding Mastery Course · 10 Modules',
    idPrefix: 'BM',
  },
  'brand-analysis': {
    titleLine: 'Brand Analysis — Position, Perception & Performance',
    subtitle: 'Brand Analysis · 6 Modules',
    idPrefix: 'BA',
  },
  'business-communication': {
    titleLine: 'The Art of Professional Communication',
    subtitle: 'Business Communication · 15 Modules',
    idPrefix: 'BC',
  },
};

const W = 900;
const H = 600;

/** e.g. "24th May, 2026" */
export function formatCertificateDate(iso: string): string {
  const d = new Date(iso);
  const day = d.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';
  const month = d.toLocaleString('en-GB', { month: 'long' });
  return `${day}${suffix} ${month}, ${d.getFullYear()}`;
}

export function generateCertificateId(
  courseSlug: string,
  completedAt: string
): string {
  const year = new Date(completedAt).getFullYear();
  const course = certificateCourses[courseSlug] ?? certificateCourses.branding;
  const hash = courseSlug.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const seq = String((hash * 7 + new Date(completedAt).getDate()) % 900 + 100).padStart(
    3,
    '0'
  );
  return `SBJ-${course.idPrefix}-${year}-${seq}`;
}

async function loadFonts() {
  await Promise.all([
    document.fonts.load('700 40px "Space Grotesk"'),
    document.fonts.load('700 13px "Inter"'),
    document.fonts.load('500 11px "Inter"'),
    document.fonts.load('600 22px "Space Grotesk"'),
    document.fonts.load('400 15px "Inter"'),
  ]);
}

function drawBackground(ctx: CanvasRenderingContext2D) {
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#0f0f22');
  g.addColorStop(0.5, '#14142e');
  g.addColorStop(1, '#0a0a18');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W / 2, H * 0.35, 0, W / 2, H * 0.35, W * 0.55);
  glow.addColorStop(0, 'rgba(54, 201, 194, 0.09)');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(54, 201, 194, 0.06)';
  ctx.lineWidth = 1;
  const step = 36;
  for (let x = step; x < W; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = step; y < H; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
}

function drawBorders(ctx: CanvasRenderingContext2D) {
  const pad = 22;
  ctx.strokeStyle = '#36c9c2';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(pad, pad, W - pad * 2, H - pad * 2);

  ctx.strokeStyle = 'rgba(54, 201, 194, 0.22)';
  ctx.lineWidth = 1;
  ctx.strokeRect(pad + 8, pad + 8, W - (pad + 8) * 2, H - (pad + 8) * 2);

  const corners: [number, number][] = [
    [pad, pad],
    [W - pad, pad],
    [pad, H - pad],
    [W - pad, H - pad],
  ];
  ctx.fillStyle = '#36c9c2';
  corners.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawHeader(ctx: CanvasRenderingContext2D) {
  const bandH = 72;
  ctx.fillStyle = 'rgba(54, 201, 194, 0.1)';
  ctx.fillRect(40, 40, W - 80, bandH);

  ctx.fillStyle = '#36c9c2';
  ctx.font = '700 13px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SBJ ACADEMY', W / 2, 72);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '500 11px "Inter", sans-serif';
  ctx.fillText('C E R T I F I C A T E   O F   C O M P L E T I O N', W / 2, 98);

  ctx.strokeStyle = 'rgba(54, 201, 194, 0.35)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, 118);
  ctx.lineTo(W - 100, 118);
  ctx.stroke();
}

function drawSeal(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.fillStyle = 'rgba(201, 54, 70, 0.85)';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r - 4, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = '700 11px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SBJ', cx, cy - 4);
  ctx.font = '500 9px "Inter", sans-serif';
  ctx.fillText('ACADEMY', cx, cy + 10);
}

export async function renderCertificateCanvas(
  canvas: HTMLCanvasElement,
  opts: {
    studentName: string;
    issuedDate: string;
    certificateId: string;
    course: CertificateCourseInfo;
  }
): Promise<void> {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  await loadFonts();

  canvas.width = W;
  canvas.height = H;

  drawBackground(ctx);
  drawBorders(ctx);
  drawHeader(ctx);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.font = '400 15px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('This certifies that', W / 2, 155);

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 40px "Space Grotesk", sans-serif';
  ctx.fillText(opts.studentName, W / 2, 215);

  const nameW = ctx.measureText(opts.studentName).width;
  const lineY = 228;
  const grad = ctx.createLinearGradient(W / 2 - nameW / 2, lineY, W / 2 + nameW / 2, lineY);
  grad.addColorStop(0, 'rgba(54, 201, 194, 0)');
  grad.addColorStop(0.5, '#36c9c2');
  grad.addColorStop(1, 'rgba(54, 201, 194, 0)');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(W / 2 - nameW / 2 - 12, lineY);
  ctx.lineTo(W / 2 + nameW / 2 + 12, lineY);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '400 15px "Inter", sans-serif';
  ctx.fillText('has successfully completed', W / 2, 268);

  ctx.fillStyle = '#36c9c2';
  ctx.font = '600 22px "Space Grotesk", sans-serif';
  ctx.fillText(opts.course.titleLine, W / 2, 310);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.font = '500 13px "Inter", sans-serif';
  ctx.fillText(opts.course.subtitle, W / 2, 338);

  ctx.strokeStyle = 'rgba(54, 201, 194, 0.2)';
  ctx.beginPath();
  ctx.moveTo(100, 368);
  ctx.lineTo(W - 100, 368);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.font = '500 12px "Inter", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`Issued: ${opts.issuedDate}`, 80, 410);

  ctx.textAlign = 'right';
  ctx.fillText(`ID: ${opts.certificateId}`, W - 80, 410);

  ctx.strokeStyle = 'rgba(54, 201, 194, 0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, 468);
  ctx.lineTo(260, 468);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(W - 260, 468);
  ctx.lineTo(W - 80, 468);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
  ctx.font = '500 11px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Programme Director', 170, 492);
  ctx.fillText('SBJ Academy', W - 170, 492);

  drawSeal(ctx, W - 130, 410, 42);
}

export function downloadCanvasPng(canvas: HTMLCanvasElement, filename: string) {
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = filename;
  a.click();
}
