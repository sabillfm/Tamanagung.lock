import React, { useState } from "react"; import { motion } from "framer-motion"; import { Lock } from "lucide-react";

export default function TamanagungLock() { const [showLogin, setShowLogin] = useState(false); const [username, setUsername] = useState(""); const [password, setPassword] = useState("");

function handleLogin(e) { e.preventDefault(); // placeholder: ganti dengan logic autentikasi yang sebenarnya alert(Mencoba login sebagai: ${username}); }

return ( <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50 flex items-center justify-center p-6"> <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* LEFT: Hero */} <motion.section initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative p-10 rounded-2xl shadow-2xl bg-white/70 backdrop-blur-md border border-white/40" > <div className="flex items-center gap-3 mb-6"> <div className="rounded-full p-3 bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg"> <Lock size={22} /> </div> <div> <h1 className="text-2xl md:text-3xl font-extrabold">Tamanagung.lock</h1> <p className="text-sm text-slate-600">Situs demo — desain ramping & tekstur saat ditekan</p> </div> </div>

<p className="text-slate-700 leading-relaxed mb-6">
        Selamat datang di demo Tamanagung.lock — klik tombol "Login" untuk membuka panel masuk. Desain ini dibuat agar mudah dikustom dan siap dipakai di projek React + Tailwind.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setShowLogin(true)}
          className="relative group overflow-hidden px-5 py-3 rounded-xl font-semibold shadow-md focus:outline-none"
          style={{
            background: "linear-gradient(180deg,#7c3aed,#5b21b6)",
            color: "white",
          }}
        >
          {/* Tekstur tekan dibuat dengan pseudo-like element (dengan gradient + transform pada active) */}
          <span className="pointer-events-none inline-block transform group-active:translate-y-[1px] transition-transform duration-150">
            Login
          </span>
          <span className="absolute inset-0 opacity-0 group-active:opacity-30 transition-opacity duration-150"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.06))",
              backgroundSize: "10px 10px, 100% 100%",
            }} />
        </button>

        <a
          href="#"
          className="px-5 py-3 rounded-xl border font-medium text-slate-700 hover:bg-slate-50 transition"
          onClick={(e) => e.preventDefault()}
        >
          Explore
        </a>
      </div>

      {/* decorative shapes */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-tr from-rose-200 to-yellow-200 opacity-30 blur-3xl mix-blend-multiply" />
    </motion.section>

    {/* RIGHT: Card with textured background + Login/menu */}
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 rounded-2xl shadow-lg bg-white/75 backdrop-blur-md border border-white/40"
    >
      <div className="mb-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <p className="text-sm text-slate-600">Akses cepat ke halaman penting</p>
      </div>

      <nav className="flex flex-col gap-3">
        {[
          { name: "Beranda", href: "#" },
          { name: "Tentang", href: "#" },
          { name: "Galeri", href: "#" },
          { name: "Kontak", href: "#" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => e.preventDefault()}
            className="group flex items-center justify-between px-4 py-3 rounded-lg hover:scale-[1.01] transition transform"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))",
            }}
          >
            <div>
              <div className="text-sm font-medium">{item.name}</div>
              <div className="text-xs text-slate-500">Deskripsi singkat</div>
            </div>
            <div className="text-xs text-slate-400">›</div>
          </a>
        ))}
      </nav>

      <div className="mt-6 border-t pt-4 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500">Status</div>
          <div className="text-sm font-medium">Siap digunakan</div>
        </div>
        <div>
          <button
            onClick={() => setShowLogin(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-sm"
            style={{
              background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
              color: "white",
            }}
          >
            <Lock size={16} />
            Login
          </button>
        </div>
      </div>

      {/* subtle texture footer */}
      <div className="mt-6 text-xs text-slate-500 opacity-80">
        Tip: tekan tombol dan perhatikan tekstur halus muncul — dibuat dengan overlay radial-dot + transform pada saat aktif.
      </div>
    </motion.aside>
  </div>

  {/* Login modal */}
  {showLogin && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setShowLogin(false)} />

      <motion.form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        onSubmit={handleLogin}
        className="relative z-10 w-[92%] max-w-md p-6 rounded-2xl bg-white shadow-2xl border"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-full p-2 bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
            <Lock size={18} />
          </div>
          <div>
            <h3 className="font-bold text-lg">Masuk ke Tamanagung.lock</h3>
            <p className="text-xs text-slate-500">Masukkan username dan kata sandi</p>
          </div>
        </div>

        <label className="block mb-3">
          <span className="text-sm text-slate-600">Username</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="nama.pengguna"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-slate-600">Kata sandi</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="••••••••"
            required
          />
        </label>

        <div className="flex items-center justify-between gap-3">
          <button
            type="submit"
            className="relative group px-5 py-2 rounded-xl font-semibold shadow-md"
            style={{
              background: "linear-gradient(180deg,#0ea5e9,#0369a1)",
              color: "white",
            }}
          >
            <span className="inline-block group-active:translate-y-[1px] transition-transform">Masuk</span>
            <span className="absolute inset-0 opacity-0 group-active:opacity-25 transition-opacity"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.05))",
                backgroundSize: "8px 8px, 100% 100%",
              }} />
          </button>

          <button
            type="button"
            onClick={() => setShowLogin(false)}
            className="px-4 py-2 rounded-xl border font-medium"
          >
            Batal
          </button>
        </div>

        <div className="mt-4 text-xs text-slate-500">Lupa kata sandi? Hubungi admin.</div>
      </motion.form>
    </div>
  )}

  {/* small global styles for press texture (tailwind can't target group-active::before easily inline) */}
  <style>{`
    /* accessibility: make buttons show a subtle inset shadow when keyboard-active */
    button:active {
      transform: translateY(1px);
      box-shadow: inset 0 2px 6px rgba(0,0,0,0.12);
    }

    /* add gentle textured background to the entire app */
    body, #root {
      background-image: radial-gradient(circle at 0 0, rgba(0,0,0,0.02) 1px, transparent 1px);
      background-size: 14px 14px;
    }
  `}</style>
</div>

); }

           
