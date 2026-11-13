/**
 * Particules légères sur <canvas> (farine dans un rayon de lumière, braises qui montent…).
 * Se met en pause hors écran et ne démarre pas si l'utilisateur réduit les animations.
 */
export interface ParticleOptions {
  /** Couleur RGB des particules */
  color: [number, number, number];
  /** Nombre de particules pour 1000 px de largeur */
  density: number;
  /** Rayon min / max en px */
  size: [number, number];
  /** Vitesse verticale (px/s, négatif = monte) et dérive horizontale */
  vy: [number, number];
  vx: [number, number];
  /** Zone horizontale d'apparition (0 → 1) */
  spawn?: [number, number];
  /** Halo lumineux autour de chaque particule (braises) */
  glow?: boolean;
  /** Scintillement de l'opacité */
  flicker?: number;
}

interface P { x: number; y: number; r: number; vx: number; vy: number; a: number; phase: number; life: number }

export function startParticles(canvas: HTMLCanvasElement, o: ParticleOptions): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  let w = 0, h = 0, raf = 0, last = 0, running = false;
  let ps: P[] = [];

  const spawn = (fresh = false): P => {
    const [s0, s1] = o.spawn ?? [0, 1];
    return {
      x: rand(s0, s1) * w,
      y: fresh ? rand(0, h) : (o.vy[1] < 0 ? h + 10 : -10),
      r: rand(o.size[0], o.size[1]),
      vx: rand(o.vx[0], o.vx[1]),
      vy: rand(o.vy[0], o.vy[1]),
      a: rand(0.25, 0.9),
      phase: rand(0, Math.PI * 2),
      life: rand(0.6, 1),
    };
  };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.round((w / 1000) * o.density);
    ps = Array.from({ length: target }, () => spawn(true));
  };

  const frame = (t: number) => {
    const dt = Math.min((t - last) / 1000, 0.05); last = t;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i];
      p.x += p.vx * dt + Math.sin(t / 1400 + p.phase) * 0.15;
      p.y += p.vy * dt;
      if (p.y < -20 || p.y > h + 20 || p.x < -20 || p.x > w + 20) { ps[i] = spawn(); continue; }
      const fl = o.flicker ? 1 - o.flicker + o.flicker * (0.5 + 0.5 * Math.sin(t / 220 + p.phase * 3)) : 1;
      const alpha = p.a * fl * p.life;
      const [r, g, b] = o.color;
      if (o.glow) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(0.35, `rgba(${r},${g},${b},${alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
    }
    raf = requestAnimationFrame(frame);
  };

  const play = () => { if (running) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame); };
  const pause = () => { running = false; cancelAnimationFrame(raf); };

  resize();
  const ro = new ResizeObserver(resize); ro.observe(canvas);
  let inView = false;
  const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; inView ? play() : pause(); });
  io.observe(canvas);
  const onVis = () => (document.hidden ? pause() : inView && play());
  document.addEventListener('visibilitychange', onVis);

  return () => { pause(); ro.disconnect(); io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
}
