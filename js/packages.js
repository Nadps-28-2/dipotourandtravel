/**
 * packages.js - Dipo Tour & Travel Package Renderer & Catalog Engine
 * Mendukung filter kategori interaktif, perbandingan kendaraan dinamis, modal detail, dan WhatsApp CTA.
 */

// Nomor WhatsApp & nama brand dibaca dari SITE_CONFIG (js/main.js)
const DEFAULT_PHONE = SITE_CONFIG.phone;
const BRAND_NAME = SITE_CONFIG.brand;

const FALLBACK_PACKAGES = [
  {
    "id": "pkg-yogyakarta",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Rombongan",
    "title": "Paket Wisata Yogyakarta",
    "duration": "3 Hari 2 Malam",
    "badge": "Rombongan Big Bus",
    "badgeIcon": "fa-bus-simple",
    "image": "https://images.unsplash.com/photo-1765680482008-45427d959099?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/ph-yogyakarta.svg",
    "imageAlt": "Candi Prambanan, destinasi paket wisata Yogyakarta Dipo Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1765680482008-45427d959099?auto=format&fit=crop&w=1200&q=80",
      "wiki:en:Taman_Sari_(Yogyakarta)",
      "wiki:id:Tebing_Breksi"
    ],
    "description": "Paket rombongan 3 hari 2 malam ke Yogyakarta dengan Big Bus Pariwisata Dipo Trans PP dari Jabodetabek: wisata budaya, Tebing Breksi, Jeep Merapi Lava Tour, Pantai Parangtritis, hingga Keraton Yogyakarta.",
    "destinations": [
      "Candi Prambanan",
      "Tebing Breksi",
      "Jalan Malioboro",
      "Jeep Merapi Lava Tour",
      "Pantai Parangtritis",
      "Keraton Yogyakarta / Taman Sari"
    ],
    "features": [
      "Big Bus Pariwisata Dipo Trans PP dari Jabodetabek",
      "Minimal 45 peserta / 1 Big Bus",
      "Hotel rekanan, Twin/Triple Sharing",
      "Makan terjadwal & snack box saat keberangkatan",
      "Tiket masuk gerbang utama objek wisata",
      "Local guide & Tour Leader dari Jakarta/Depok"
    ],
    "itinerary": [
      {
        "day": "Hari 0 — Perjalanan Malam",
        "items": [
          "20.00: Kumpul di meeting point (Depok/Jakarta), pemuatan bagasi, dan briefing.",
          "21.00: Perjalanan malam via Tol Trans-Jawa (pembagian snack box)."
        ]
      },
      {
        "day": "Hari 1 — Wisata Budaya & Tebing",
        "items": [
          "Pagi: Tiba di Jogja, transit di resto lokal untuk mandi dan sarapan.",
          "Siang: Eksplorasi Candi Prambanan bersama local guide, dilanjutkan makan siang.",
          "Sore: Mengunjungi Tebing Breksi untuk foto-foto dengan latar tebing kapur ukir.",
          "Malam: Check-in hotel, makan malam, dan acara bebas di Jalan Malioboro."
        ]
      },
      {
        "day": "Hari 2 — Petualangan Merapi & Pantai",
        "items": [
          "Pagi: Sarapan di hotel, lalu Jeep Merapi Lava Tour (Bunker Kaliadem, Alien Rock).",
          "Siang: Makan siang di area Kaliurang.",
          "Sore: Berburu oleh-oleh (Bakpia & Batik), dilanjutkan sunset di Pantai Parangtritis.",
          "Malam: Makan malam keakraban (Gala Dinner grup) dan kembali ke hotel."
        ]
      },
      {
        "day": "Hari 3 — Sejarah Keraton & Perjalanan Pulang",
        "items": [
          "Pagi: Sarapan, check-out hotel, dan mengunjungi Keraton Yogyakarta atau Taman Sari.",
          "Siang: Makan siang terakhir di Jogja.",
          "13.30: Perjalanan pulang menuju Jabodetabek via tol. Tiba di titik awal sekitar pukul 23.00."
        ]
      }
    ],
    "price": "Rp1.550.000",
    "priceNote": "/ pax (min. 45 peserta)",
    "priceDisclaimer": "* Estimasi harga mulai dari (data demo dari materi Dipo Tour & Travel); tarif final dan ketersediaan perlu dikonfirmasi via WhatsApp.",
    "targetPackage": "Paket Wisata Yogyakarta 3 Hari 2 Malam",
    "ctaText": "Konsultasi Rombongan"
  },
  {
    "id": "pkg-bandung-short-trip",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • One Day Tour",
    "title": "Paket Bandung Short Trip",
    "duration": "1 Hari (One Day Tour)",
    "badge": "One Day Trip",
    "badgeIcon": "fa-sun",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama_Alam_Kawah_Putih_Ciwidey.jpg?width=1200",
    "imageFallback": "images/ph-bandung.svg",
    "imageAlt": "Danau kawah Kawah Putih Ciwidey, salah satu opsi destinasi Bandung Short Trip",
    "gallery": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama_Alam_Kawah_Putih_Ciwidey.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kawah_Putih_Ciwidey.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kawah_Putih_Bandung_Indonesia.jpg?width=1200",
      "wiki:en:Lembang"
    ],
    "description": "Wisata sehari ke Bandung dengan Bus Pariwisata AC Executive dari Depok/Jakarta: Lembang (Farmhouse atau Floating Market), lalu Kawah Putih atau belanja Factory Outlet di Jalan Riau / Cihampelas.",
    "destinations": [
      "Farmhouse Lembang",
      "Floating Market Lembang",
      "Kawah Putih (opsi Bandung Selatan)",
      "Factory Outlet Jl. Riau / Cihampelas"
    ],
    "features": [
      "Bus Pariwisata AC Executive",
      "Berangkat 06.00 dari Depok/Jakarta via Tol Purbaleunyi",
      "Snack box sarapan di bus",
      "Makan siang & makan malam di resto lokal",
      "Tiba kembali di Depok sebelum tengah malam"
    ],
    "itinerary": [
      {
        "day": "Susunan Acara Sehari",
        "items": [
          "06.00: Berangkat dari Depok/Jakarta menuju Bandung via Tol Purbaleunyi (sarapan snack box di bus).",
          "Siang: Tiba di Bandung Utara (Lembang), mengunjungi Farmhouse Lembang atau Floating Market. Makan siang di resto lokal.",
          "Sore: Mengunjungi Kawah Putih (jika mengambil opsi Bandung Selatan) atau belanja di Factory Outlet Jalan Riau / Cihampelas.",
          "Malam: Makan malam di resto lokal dengan pemandangan kota, perjalanan pulang ke Depok, dan tiba sebelum tengah malam."
        ]
      }
    ],
    "price": "Rp399.000",
    "priceNote": "/ pax",
    "priceDisclaimer": "* Estimasi harga mulai dari (data demo dari materi Dipo Tour & Travel); tarif final dan ketersediaan perlu dikonfirmasi via WhatsApp.",
    "targetPackage": "Paket Bandung Short Trip 1 Hari",
    "ctaText": "Konsultasi Short Trip"
  },
  {
    "id": "pkg-overland-bali",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Jalur Darat",
    "title": "Paket Overland Bali",
    "duration": "7 Hari 6 Malam",
    "badge": "Overland Jalur Darat",
    "badgeIcon": "fa-route",
    "image": "wiki:en:Tanah_Lot",
    "imageFallback": "images/ph-bali.svg",
    "imageAlt": "Pura Tanah Lot, Bali - destinasi Paket Overland Bali Dipo Tour & Travel",
    "gallery": [
      "wiki:en:Tanah_Lot",
      "wiki:en:Uluwatu_Temple",
      "wiki:en:Mount_Batur"
    ],
    "description": "Perjalanan darat Depok–Bali membelah Pulau Jawa via Tol Trans-Jawa dengan Big Bus Pariwisata Executive, menyeberang Ketapang–Gilimanuk, lalu menjelajah Tanah Lot, Penglipuran, Kintamani, Pandawa/Melasti, dan Uluwatu.",
    "destinations": [
      "Pura Tanah Lot",
      "Desa Penglipuran",
      "Kintamani (Gunung Batur)",
      "Pantai Pandawa / Melasti",
      "Pura Uluwatu & Tari Kecak",
      "Makan malam seafood Jimbaran"
    ],
    "features": [
      "Big Bus Pariwisata Executive (AC, Audio Karaoke, Reclining Seat)",
      "Minimal 90 peserta / 2 Big Bus",
      "Penyeberangan Selat Bali Ketapang–Gilimanuk",
      "Hotel rekanan, Twin/Triple Sharing",
      "Konsumsi terjadwal di resto transit & lokal"
    ],
    "itinerary": [
      {
        "day": "Hari 1–2 — Perjalanan Darat",
        "items": [
          "Perjalanan darat dari Depok membelah Pulau Jawa via Tol Trans-Jawa, istirahat dan makan di resto transit.",
          "Penyeberangan Selat Bali via Pelabuhan Ketapang–Gilimanuk."
        ]
      },
      {
        "day": "Hari 3 — Tiba di Bali",
        "items": [
          "Mengunjungi Pura Tanah Lot, check-in hotel, dan makan malam."
        ]
      },
      {
        "day": "Hari 4 — Budaya & Kintamani",
        "items": [
          "Tour budaya ke Desa Penglipuran, menikmati Kintamani (Gunung Batur), dan belanja di Krisna Oleh-Oleh."
        ]
      },
      {
        "day": "Hari 5 — Pantai & Uluwatu",
        "items": [
          "Mengunjungi Pantai Pandawa / Melasti, dilanjutkan ke Pura Uluwatu untuk melihat Tari Kecak, dan makan malam seafood di Jimbaran."
        ]
      },
      {
        "day": "Hari 6–7 — Perjalanan Pulang",
        "items": [
          "Check-out hotel, perjalanan kembali menyeberang ke Pulau Jawa, dan perjalanan pulang menuju Depok."
        ]
      }
    ],
    "price": "Rp1.876.000 – Rp2.107.000",
    "priceNote": "/ pax (min. 90 peserta)",
    "priceDisclaimer": "* Estimasi harga mulai dari (data demo dari materi Dipo Tour & Travel); tarif final dan ketersediaan perlu dikonfirmasi via WhatsApp.",
    "targetPackage": "Paket Overland Bali 7 Hari 6 Malam",
    "ctaText": "Konsultasi Overland"
  },
  {
    "id": "pkg-bangkok-pattaya",
    "categoryTag": "internasional",
    "category": "Wisata Internasional",
    "title": "Paket Eksotis Bangkok - Pattaya",
    "duration": "4 Hari 3 Malam",
    "badge": "Internasional",
    "badgeIcon": "fa-earth-asia",
    "image": "wiki:en:Wat_Arun",
    "imageFallback": "images/ph-bangkok.svg",
    "imageAlt": "Wat Arun (Temple of Dawn), Bangkok - destinasi Paket Bangkok Pattaya",
    "gallery": [
      "wiki:en:Wat_Arun",
      "wiki:en:Wat_Pho",
      "wiki:en:Nong_Nooch_Tropical_Garden"
    ],
    "description": "Paket 4 hari 3 malam ke Thailand: Wat Arun dan Wat Pho di Bangkok, Nong Nooch Tropical Garden dan Pattaya Floating Market, serta belanja di MBK Center / Platinum Mall.",
    "destinations": [
      "Wat Arun (Temple of Dawn)",
      "Wat Pho",
      "Nong Nooch Tropical Garden",
      "Pattaya Floating Market",
      "MBK Center / Platinum Mall",
      "Night Market Bangkok"
    ],
    "features": [
      "Hotel Bintang 3/4 di Bangkok & Pattaya",
      "Belum termasuk tiket pesawat PP",
      "Dijemput local guide di bandara Bangkok",
      "Armada bus wisata lokal resmi",
      "Konsumsi terjadwal & tiket masuk gerbang utama objek wisata"
    ],
    "itinerary": [
      {
        "day": "Hari 1 — Tiba di Bangkok",
        "items": [
          "Tiba di Bandara Don Mueang/Suvarnabhumi Bangkok, dijemput local guide, check-in hotel, dan waktu bebas di Night Market."
        ]
      },
      {
        "day": "Hari 2 — Wat Arun, Wat Pho & Pattaya",
        "items": [
          "Menyeberangi Sungai Chao Phraya dengan perahu menuju Wat Arun (Temple of Dawn) dan Wat Pho.",
          "Siang: perjalanan darat ke Pattaya, mengunjungi Nong Nooch Tropical Garden, dan makan malam."
        ]
      },
      {
        "day": "Hari 3 — Floating Market & Belanja",
        "items": [
          "Mengunjungi Pattaya Floating Market, belanja suvenir di Erawadee/Gems Gallery, kembali ke Bangkok, dan belanja di MBK Center / Platinum Mall."
        ]
      },
      {
        "day": "Hari 4 — Kembali ke Indonesia",
        "items": [
          "Sarapan, acara bebas hingga waktu antar kembali ke bandara untuk penerbangan ke Indonesia."
        ]
      }
    ],
    "price": "Rp2.600.000",
    "priceNote": "/ pax (belum termasuk tiket pesawat PP)",
    "priceDisclaimer": "* Estimasi harga mulai dari (data demo dari materi Dipo Tour & Travel); tarif final dan ketersediaan perlu dikonfirmasi via WhatsApp.",
    "targetPackage": "Paket Eksotis Bangkok - Pattaya 4 Hari 3 Malam",
    "ctaText": "Konsultasi Bangkok"
  },
  {
    "id": "pkg-tiga-negara",
    "categoryTag": "internasional",
    "category": "Wisata Internasional • Udara & Darat",
    "title": "Paket Jelajah 3 Negara",
    "duration": "7 Hari 6 Malam",
    "badge": "Singapura • Malaysia • Thailand",
    "badgeIcon": "fa-passport",
    "image": "wiki:en:Merlion",
    "imageFallback": "images/ph-tiga-negara.svg",
    "imageAlt": "Patung Merlion, Singapura - destinasi Paket Jelajah 3 Negara",
    "gallery": [
      "wiki:en:Merlion",
      "wiki:en:Petronas_Towers",
      "wiki:en:Batu_Caves"
    ],
    "description": "Perjalanan 7 hari 6 malam dengan sistem gabungan udara dan darat: Singapura, Kuala Lumpur dan Genting Highlands di Malaysia, lalu Hatyai di Thailand Selatan.",
    "destinations": [
      "Merlion Park & Gardens by the Bay",
      "Menara Kembar Petronas & Batu Caves",
      "Genting Highlands",
      "Hatyai: Samila Beach & Sleeping Buddha",
      "Khlong Hae Floating Market"
    ],
    "features": [
      "Sistem gabungan udara dan darat",
      "Bus internasional menuju Hatyai (Thailand Selatan)",
      "Hotel rekanan (minimal bintang 2 atau 3), Twin/Triple Sharing",
      "Konsumsi terjadwal & tiket masuk gerbang utama objek wisata",
      "Tiket pesawat & detail akomodasi: [Placeholder — dikonfirmasi admin]"
    ],
    "itinerary": [
      {
        "day": "Hari 1–2 — Singapura",
        "items": [
          "Penerbangan dari Jakarta ke Singapura. Tour foto di Merlion Park, Gardens by the Bay, dan Universal Studios (foto depan bola dunia).",
          "Malam hari menyeberang ke Malaysia lewat darat."
        ]
      },
      {
        "day": "Hari 3–4 — Malaysia",
        "items": [
          "Menjelajahi Kuala Lumpur (Menara Kembar Petronas, Batu Caves) dan menikmati wahana serta kereta gantung di Genting Highland."
        ]
      },
      {
        "day": "Hari 5–6 — Thailand Selatan",
        "items": [
          "Perjalanan bus internasional menuju kota Hatyai (Thailand Selatan).",
          "Mengunjungi Samila Beach, Sleeping Buddha, dan berbelanja kuliner khas Thailand di Khlong Hae Floating Market."
        ]
      },
      {
        "day": "Hari 7 — Perjalanan Pulang",
        "items": [
          "Perjalanan kembali ke Kuala Lumpur/Singapura untuk penerbangan pulang ke Jakarta."
        ]
      }
    ],
    "price": "Rp4.400.000",
    "priceNote": "/ pax",
    "priceDisclaimer": "* Estimasi harga mulai dari (data demo dari materi Dipo Tour & Travel); tarif final dan ketersediaan perlu dikonfirmasi via WhatsApp.",
    "targetPackage": "Paket Jelajah 3 Negara 7 Hari 6 Malam",
    "ctaText": "Konsultasi 3 Negara"
  }
];

let globalPackages = [];

function createWaLink(packageName, vehicleName = "", phone = DEFAULT_PHONE) {
  let message = `Halo ${BRAND_NAME}, saya tertarik dengan paket *${packageName}*`;
  if (vehicleName) {
    message += ` (Pilihan Kendaraan: *${vehicleName}*)`;
  }
  message += `. Boleh minta info ketersediaan unit dan detail jadwal/harga terbarunya?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}


// ── GAMBAR: URL langsung, atau "wiki:<bahasa>:<Judul_Artikel>" (foto utama artikel Wikipedia, lisensi terbuka) ──
function imgSrcAttrs(spec, fallback) {
  if (spec && spec.indexOf("wiki:") === 0) {
    const parts = spec.split(":");
    return `src="${fallback || 'images/hero-travel.svg'}" data-wiki="${parts[1]}:${parts.slice(2).join(":")}"`;
  }
  return `src="${spec}"`;
}

async function resolveWikiImage(img) {
  const spec = img.getAttribute("data-wiki");
  if (!spec) return;
  img.removeAttribute("data-wiki");
  const i = spec.indexOf(":");
  const lang = spec.slice(0, i), title = spec.slice(i + 1);
  const key = "wikiimg:" + spec;
  try {
    let url = null;
    try { url = sessionStorage.getItem(key); } catch (e) {}
    if (!url) {
      const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const d = await res.json();
      const orig = d.originalimage, th = d.thumbnail;
      if (orig && orig.width && orig.width <= 1200) url = orig.source;
      else if (th && th.source) url = th.source.replace(/\/(\d+)px-/, "/1000px-");
      else if (orig) url = orig.source;
      if (!url) throw new Error("no image");
      try { sessionStorage.setItem(key, url); } catch (e) {}
    }
    img.src = url;
  } catch (err) { /* tetap memakai gambar cadangan */ }
}

function resolveWikiImages(root) {
  (root || document).querySelectorAll("img[data-wiki]").forEach(resolveWikiImage);
}
window.resolveWikiImages = resolveWikiImages;

// Fallback image helper
function handleImageError(img) {
  const fb = img.getAttribute("data-fallback") || "images/hero-travel.svg";
  img.onerror = null;
  img.src = fb;
}

// Card accent colors (palet Dipo Tour & Travel: Indigo, Cyan tua, Oranye tua)
const CARD_ACCENTS = [
  { tag: "#3F4095" }, // Indigo (utama)
  { tag: "#0A8DB8" }, // Cyan (aksen, versi lebih tua untuk kontras)
  { tag: "#C77700" }  // Oranye hangat (promo)
];

function renderPackages(packages) {
  globalPackages = packages;
  const container = document.getElementById("packages-grid");
  if (!container) return;

  container.innerHTML = packages.map((pkg, idx) => {
    const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length];
    const initialWaUrl = createWaLink(pkg.targetPackage || pkg.title);
    const destinationTags = (pkg.destinations || []).slice(0, 4).map(d =>
      `<span class="pkg-dest-tag"><i class="fa-solid fa-location-dot"></i>${d}</span>`
    ).join("");
    const highlights = (pkg.features || []).slice(0, 3).map(f =>
      `<li><i class="fa-solid fa-circle-check"></i><span>${f}</span></li>`
    ).join("");

    // Custom Vehicle Selector block if vehicles available (Package 3)
    let vehicleBlock = "";
    if (pkg.vehicles && pkg.vehicles.length) {
      const pillsHtml = pkg.vehicles.map((v, vIdx) => `
        <button type="button" 
          class="vehicle-pill ${vIdx === 0 ? 'active' : ''}" 
          data-pkg-id="${pkg.id}" 
          data-vid="${v.id}"
          aria-label="Pilih ${v.name}">
          <span class="pill-name">${v.name.replace('Toyota ', '')}</span>
          <span class="pill-price">${v.price}</span>
        </button>
      `).join("");

      vehicleBlock = `
        <div class="vehicle-picker-block">
          <div class="vehicle-picker-header">
            <span class="vehicle-picker-label"><i class="fa-solid fa-car-side"></i> Pilih Armada:</span>
            <span class="vehicle-picker-sub" id="vehicle-sub-${pkg.id}">${pkg.vehicles[0].badge}</span>
          </div>
          <div class="vehicle-pills">
            ${pillsHtml}
          </div>
        </div>
      `;
    }

    return `
      <article class="pkg-pro-card fade-in" data-id="${pkg.id}" data-category="${pkg.categoryTag || 'all'}" style="--card-accent: ${accent.tag};">
        <div class="pkg-pro-img-wrap">
          <img id="pkg-img-${pkg.id}" ${imgSrcAttrs(pkg.image, pkg.imageFallback)} alt="${pkg.imageAlt}" loading="lazy" width="900" height="600" class="pkg-pro-img" data-fallback="${pkg.imageFallback || ''}" onerror="handleImageError(this)" />
          <div class="pkg-pro-img-overlay"></div>
          <span class="pkg-badge-main" id="pkg-badge-${pkg.id}"><i class="fa-solid ${pkg.badgeIcon || 'fa-tag'}"></i> ${pkg.badge}</span>
          <span class="pkg-badge-duration"><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>
        </div>

        <div class="pkg-pro-body">
          <span class="pkg-pro-category">${pkg.category}</span>
          <h3 class="pkg-pro-title">${pkg.title}</h3>
          <p class="pkg-pro-desc">${pkg.description}</p>
          
          <div class="pkg-dest-tags">${destinationTags}</div>
          
          ${vehicleBlock}

          <ul class="pkg-highlights">${highlights}</ul>

          <div class="pkg-pro-footer">
            <div class="pkg-pro-price-block">
              <span class="pkg-pro-price-label">Estimasi Harga Mulai Dari</span>
              <div class="pkg-pro-price" id="pkg-price-${pkg.id}">
                ${pkg.price}
                <span class="pkg-pro-price-sub" id="pkg-price-note-${pkg.id}">${pkg.priceNote || ''}</span>
              </div>
            </div>
            <div class="pkg-pro-actions">
              <button type="button" class="btn btn-outline-pkg pkg-detail-btn" data-id="${pkg.id}" aria-label="Lihat detail ${pkg.title}">
                <i class="fa-solid fa-circle-info"></i><span>Lihat Detail</span>
              </button>
              <a href="${initialWaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-wa-pkg" id="pkg-wa-btn-${pkg.id}" aria-label="Pesan ${pkg.title} via WhatsApp">
                <i class="fa-brands fa-whatsapp"></i><span>${pkg.ctaText || 'Konsultasi'}</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Setup Vehicle Switcher Click Handler on Cards
  setupCardVehicleSwitchers();

  // Attach Detail Button Click Handlers
  container.querySelectorAll(".pkg-detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const pkg = globalPackages.find(p => p.id === id);
      if (pkg) openPackageModal(pkg);
    });
  });

  resolveWikiImages(container);
  if (window.initScrollAnimations) window.initScrollAnimations();
}

// ── VEHICLE SWITCHER INTERACTION IN CARDS ─────────────────────────────────────
function setupCardVehicleSwitchers() {
  document.querySelectorAll(".vehicle-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      e.preventDefault();
      const pkgId = pill.getAttribute("data-pkg-id");
      const vid = pill.getAttribute("data-vid");
      const pkg = globalPackages.find(p => p.id === pkgId);
      if (!pkg || !pkg.vehicles) return;

      const vehicle = pkg.vehicles.find(v => v.id === vid);
      if (!vehicle) return;

      // Update active state among pills
      const parentBlock = pill.closest(".vehicle-picker-block");
      if (parentBlock) {
        parentBlock.querySelectorAll(".vehicle-pill").forEach(p => p.classList.remove("active"));
      }
      pill.classList.add("active");

      // Update image
      const imgEl = document.getElementById(`pkg-img-${pkgId}`);
      if (imgEl && vehicle.image) {
        imgEl.src = vehicle.image;
        imgEl.alt = vehicle.imageAlt;
      }

      // Update badge
      const badgeEl = document.getElementById(`pkg-badge-${pkgId}`);
      if (badgeEl && vehicle.badge) {
        badgeEl.innerHTML = `<i class="fa-solid fa-car-side"></i> ${vehicle.badge}`;
      }

      // Update sub label
      const subEl = document.getElementById(`vehicle-sub-${pkgId}`);
      if (subEl) {
        subEl.textContent = vehicle.badge;
      }

      // Update price
      const priceEl = document.getElementById(`pkg-price-${pkgId}`);
      if (priceEl) {
        priceEl.innerHTML = `${vehicle.price} <span class="pkg-pro-price-sub">${vehicle.priceNote}</span>`;
      }

      // Update WA Button Link
      const waBtn = document.getElementById(`pkg-wa-btn-${pkgId}`);
      if (waBtn) {
        waBtn.href = createWaLink(pkg.title, vehicle.name);
      }
    });
  });
}

// ── INTERACTIVE CATEGORY FILTER ───────────────────────────────────────────────
function initCategoryFilter() {
  const filterButtons = document.querySelectorAll(".pkg-filter-btn");
  if (!filterButtons.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cards = document.querySelectorAll(".pkg-pro-card");
      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.classList.remove("is-hidden");
          card.style.display = "flex";
        } else {
          card.classList.add("is-hidden");
          card.style.display = "none";
        }
      });
    });
  });
}

// ── PACKAGE DETAIL MODAL ──────────────────────────────────────────────────────
function openPackageModal(pkg, initialVehicleId = null) {
  let modal = document.getElementById("pkg-detail-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "pkg-detail-modal";
    modal.className = "pkg-modal-overlay";
    modal.innerHTML = `
      <div class="pkg-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-pkg-title">
        <button class="pkg-modal-close" aria-label="Tutup Detail">&times;</button>
        <div class="pkg-modal-inner"></div>
      </div>`;
    document.body.appendChild(modal);

    modal.addEventListener("click", e => { if (e.target === modal) closePackageModal(); });
    modal.querySelector(".pkg-modal-close").addEventListener("click", closePackageModal);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePackageModal(); });
  }

  // Gallery thumbnails setup
  const galleryImages = pkg.gallery && pkg.gallery.length ? pkg.gallery : [pkg.image];
  let currentMainImage = galleryImages[0];
  let currentVehicleName = "";

  // If vehicle package, setup vehicle tabs inside modal
  let modalVehicleHtml = "";
  if (pkg.vehicles && pkg.vehicles.length) {
    const selVehicle = initialVehicleId 
      ? (pkg.vehicles.find(v => v.id === initialVehicleId) || pkg.vehicles[0]) 
      : pkg.vehicles[0];
    currentVehicleName = selVehicle.name;
    currentMainImage = selVehicle.image;

    const tabsHtml = pkg.vehicles.map(v => `
      <button type="button" 
        class="vehicle-pill modal-v-pill ${v.id === selVehicle.id ? 'active' : ''}" 
        data-vid="${v.id}">
        <span class="pill-name">${v.name.replace('Toyota ', '')}</span>
        <span class="pill-price">${v.price}</span>
      </button>
    `).join("");

    modalVehicleHtml = `
      <div class="modal-vehicle-select-wrap">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="margin:0; font-size:0.9rem; color:var(--color-primary);"><i class="fa-solid fa-car-side"></i> Pilihan Tipe Kendaraan</h4>
          <span id="modal-vehicle-badge" style="font-size:0.75rem; color:var(--color-secondary); font-weight:700;">${selVehicle.badge}</span>
        </div>
        <div class="modal-vehicle-tabs">
          ${tabsHtml}
        </div>
        <p id="modal-vehicle-highlights" style="margin-top:10px; font-size:0.84rem; color:var(--color-text-muted);">
          <i class="fa-solid fa-circle-check" style="color:var(--color-secondary);"></i> ${selVehicle.highlights}
        </p>
      </div>
    `;
  }

  // Thumbnails row HTML
  const thumbsHtml = galleryImages.length > 1 ? `
    <div class="pkg-modal-thumbs" id="modal-thumbs">
      ${galleryImages.map((img, i) => `
        <div class="pkg-modal-thumb ${i === 0 ? 'active' : ''}">
          <img ${imgSrcAttrs(img, pkg.imageFallback)} alt="${pkg.title} - foto ${i + 1}" loading="lazy" data-fallback="${pkg.imageFallback || ''}" onerror="handleImageError(this)" />
        </div>
      `).join("")}
    </div>
  ` : '';

  const waUrl = createWaLink(pkg.targetPackage || pkg.title, currentVehicleName);
  const featuresList = pkg.features.map(f =>
    `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`
  ).join("");
  const itineraryHtml = (pkg.itinerary && pkg.itinerary.length) ? `
    <div class="pkg-modal-itinerary">
      <h4><i class="fa-solid fa-list-check"></i> Susunan Acara (Itinerary)</h4>
      ${pkg.itinerary.map(d => `
        <div class="itin-day">
          <div class="itin-day-title">${d.day}</div>
          <ul class="itin-items">${(d.items || []).map(it => `<li>${it}</li>`).join("")}</ul>
        </div>`).join("")}
    </div>` : "";
  const destList = (pkg.destinations || []).map(d =>
    `<li><i class="fa-solid fa-location-dot"></i> <span>${d}</span></li>`
  ).join("");

  modal.querySelector(".pkg-modal-inner").innerHTML = `
    <div class="pkg-modal-img-wrap">
      <img id="modal-main-img" ${imgSrcAttrs(currentMainImage, pkg.imageFallback)} alt="${pkg.imageAlt}" loading="lazy" data-fallback="${pkg.imageFallback || ''}" onerror="handleImageError(this)" />
      <span class="pkg-modal-badge" id="modal-badge"><i class="fa-solid ${pkg.badgeIcon || 'fa-tag'}"></i> ${pkg.badge}</span>
    </div>
    ${thumbsHtml}
    <div class="pkg-modal-content">
      <span class="pkg-modal-category">${pkg.category}</span>
      <h2 class="pkg-modal-title" id="modal-pkg-title">${pkg.title}</h2>
      
      <div class="pkg-modal-meta">
        <span><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>
        <span id="modal-price"><i class="fa-solid fa-tag"></i> ${pkg.price} ${pkg.priceNote || ''}</span>
      </div>

      <p class="pkg-modal-desc">${pkg.description}</p>
      
      ${modalVehicleHtml}

      <div class="pkg-modal-cols">
        <div>
          <h4><i class="fa-solid fa-map-location-dot"></i> Destinasi Unggulan</h4>
          <ul class="pkg-modal-list">${destList}</ul>
        </div>
        <div>
          <h4><i class="fa-solid fa-shield-halved"></i> Fasilitas Paket</h4>
          <ul class="pkg-modal-list">${featuresList}</ul>
        </div>
      </div>

      ${itineraryHtml}

      <p class="pkg-modal-disclaimer">${pkg.priceDisclaimer || "* Data demonstrasi, silakan hubungi kami untuk konfirmasi ketersediaan dan penawaran resmi."}</p>
      
      <a href="${waUrl}" id="modal-wa-btn" target="_blank" rel="noopener noreferrer" class="btn btn-accent pkg-modal-wa-btn">
        <i class="fa-brands fa-whatsapp"></i>
        <span>Pesan & Konsultasi via WhatsApp</span>
      </a>
    </div>
  `;

  // Attach thumbnail clicks
  const mainImg = modal.querySelector("#modal-main-img");
  modal.querySelectorAll(".pkg-modal-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      modal.querySelectorAll(".pkg-modal-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      const tImg = thumb.querySelector("img");
      if (mainImg && tImg) mainImg.src = tImg.src;
    });
  });

  // Attach modal vehicle switcher if present
  modal.querySelectorAll(".modal-v-pill").forEach(vPill => {
    vPill.addEventListener("click", () => {
      const vid = vPill.getAttribute("data-vid");
      const v = pkg.vehicles.find(item => item.id === vid);
      if (!v) return;

      modal.querySelectorAll(".modal-v-pill").forEach(p => p.classList.remove("active"));
      vPill.classList.add("active");

      // Update main img
      if (mainImg && v.image) mainImg.src = v.image;

      // Update badge
      const badgeEl = modal.querySelector("#modal-vehicle-badge");
      if (badgeEl) badgeEl.textContent = v.badge;

      // Update highlights
      const hEl = modal.querySelector("#modal-vehicle-highlights");
      if (hEl) hEl.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--color-secondary);"></i> ${v.highlights}`;

      // Update price
      const priceEl = modal.querySelector("#modal-price");
      if (priceEl) priceEl.innerHTML = `<i class="fa-solid fa-tag"></i> ${v.price} ${v.priceNote || ''}`;

      // Update WA Button
      const waBtn = modal.querySelector("#modal-wa-btn");
      if (waBtn) waBtn.href = createWaLink(pkg.title, v.name);
    });
  });

  resolveWikiImages(modal);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePackageModal() {
  const modal = document.getElementById("pkg-detail-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ── LOAD DATA AND INITIALIZE ──────────────────────────────────────────────────
async function loadPackages() {
  try {
    const response = await fetch("data/packages.json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    renderPackages(data);
  } catch (err) {
    console.log("Using fallback package data:", err.message);
    renderPackages(FALLBACK_PACKAGES);
  }
  initCategoryFilter();
}

document.addEventListener("DOMContentLoaded", () => {
  loadPackages();
});
