/**
 * packages.js - Duta Tour Bandung Package Renderer & Catalog Engine
 * Mendukung filter kategori interaktif, perbandingan kendaraan dinamis, modal detail, dan WhatsApp CTA.
 */

const DEFAULT_PHONE = "6281221737511";
const BRAND_NAME = "Duta Tour Bandung";

const FALLBACK_PACKAGES = [
  {
    id: "pkg-open-trip-bali-malang",
    categoryTag: "open-trip",
    category: "Open Trip (Perjalanan Publik)",
    title: "Open Trip Bali & Malang Pro (Unggulan)",
    duration: "6 Hari 5 Malam",
    badge: "Paket Unggulan",
    badgeIcon: "fa-award",
    image: "images/pkg-bali-pro.jpg",
    imageAlt: "Open Trip Bali dan Malang Pro Duta Tour Bandung",
    gallery: [
      "images/pkg-bali-pro.jpg",
      "images/dest-malang.jpg",
      "images/pkg-bromo.jpg",
      "images/pkg-bali.jpg"
    ],
    description: "Program perjalanan wisata gabungan terjadwal yang terbuka untuk perorangan, pasangan, hingga kelompok kecil. Menikmati eksotisme Pulau Dewata dan pesona sejuk Malang dengan fasilitas all-in.",
    destinations: [
      "Bali (2 Malam): Pantai Kuta, Pandawa & Tanah Lot",
      "Malang (1 Malam): Wisata Kota Malang & Kawasan Bromo",
      "Spot Sunrise & Wisata Budaya Interaktif",
      "Pusat Oleh-Oleh Khas Bali & Malang"
    ],
    features: [
      "Transportasi PP All-In & Nyaman",
      "Hotel Penginapan (Bali 2 Malam + Malang 1 Malam)",
      "Makan & Snack Selama Program Trip",
      "Tiket Masuk Seluruh Objek Wisata",
      "Itinerary Terstruktur & Tour Leader Berpengalaman"
    ],
    price: "Rp2.500.000",
    priceNote: "/ pax",
    priceDisclaimer: "* Harga mulai dan jadwal keberangkatan open trip perlu dikonfirmasi via WhatsApp sebelum booking",
    targetPackage: "Open Trip Bali & Malang Pro (Unggulan)",
    ctaText: "Daftar Open Trip"
  },
  {
    id: "pkg-tour-pangandaran",
    categoryTag: "gathering",
    category: "Corporate & Family Gathering",
    title: "Custom Tour Pantai Pangandaran",
    duration: "3 Hari 2 Malam (Fleksibel)",
    badge: "Favorit Rombongan",
    badgeIcon: "fa-people-group",
    image: "images/pkg-pangandaran.jpg",
    imageAlt: "Custom Tour Pantai Pangandaran dan Body Rafting Ciwayang Duta Tour Bandung",
    gallery: [
      "images/pkg-pangandaran.jpg",
      "images/dest-ciwayang.jpg",
      "images/bus-pariwisata.jpg",
      "images/pkg-gathering.jpg"
    ],
    description: "Solusi liburan kustom (custom trip) berskala besar untuk malam keakraban (makrab) organisasi, korporasi, hingga acara purnabakti instansi, rombongan sekolah, karang taruna, dan wisata desa.",
    destinations: [
      "Pantai Barat & Pantai Timur Pangandaran",
      "Wisata Air & Body Rafting Ciwayang",
      "Kawasan Cagar Alam & Wisata Bahari",
      "Area Makrab & Pesta Barbeque Pantai"
    ],
    features: [
      "Bus Pariwisata Premium AC & Reclining Seats",
      "Konsumsi Lengkap (Makan Utama & Snack)",
      "Instruktur Lokal Profesional Body Rafting",
      "Dokumentasi Perjalanan & Spanduk Acara Khusus",
      "Pengelolaan Logistik & Koordinator Lapangan"
    ],
    price: "Sesuai Penawaran",
    priceNote: "(Hubungi Admin)",
    priceDisclaimer: "* Tarif rombongan fleksibel menyesuaikan jumlah peserta, titik jemput, dan fasilitas tambahan",
    targetPackage: "Custom Tour Pantai Pangandaran",
    ctaText: "Konsultasi Rombongan"
  },
  {
    id: "pkg-tour-priangan",
    categoryTag: "study-tour",
    category: "School Trip & Study Tour",
    title: "Custom Tour Lokal Priangan (Pangalengan / Lembang)",
    duration: "1 Hari (One Day Trip)",
    badge: "Edukasi & Outing Populer",
    badgeIcon: "fa-graduation-cap",
    image: "images/dest-pangalengan.jpg",
    imageAlt: "Custom Tour Lokal Priangan Pangalengan dan Lembang Duta Tour Bandung",
    gallery: [
      "images/dest-pangalengan.jpg",
      "images/dest-orchid-forest.jpg",
      "images/dest-kawah-putih.jpg",
      "images/pkg-studytour.jpg"
    ],
    description: "Pengorganisasian perjalanan edukasi siswa sekolah (SD/SMP/SMA) dan universitas dengan destinasi interaktif, serta outing singkat keluarga yang menyegarkan di kawasan alam sejuk Priangan.",
    destinations: [
      "Eksplorasi Kebun Teh Pangalengan / Ciwidey",
      "Destinasi Nuansa Alam & Edukasi Lembang",
      "Wahana Outbound & Interaksi Alam Terbuka",
      "Spot Foto Alam & Agro Wisata Priangan"
    ],
    features: [
      "Transportasi Lokal Prima & Pengemudi Ramah",
      "Tiket Masuk Terusan Objek Wisata",
      "Snack Box & Air Mineral",
      "Peralatan P3K & Standar Keselamatan",
      "Bantuan Dokumentasi Lapangan"
    ],
    price: "Sesuai Paket",
    priceNote: "(Hubungi Admin)",
    priceDisclaimer: "* Paket study tour dapat disesuaikan dengan kurikulum edukasi atau tema kegiatan sekolah",
    targetPackage: "Custom Tour Lokal Priangan (Pangalengan / Lembang)",
    ctaText: "Konsultasi Study Tour"
  },
  {
    id: "pkg-premium-transport",
    categoryTag: "transport-handling",
    category: "Premium Transport & Handling",
    title: "Premium Transport & Handling All-In",
    duration: "Fleksibel / Sesuai Jadwal",
    badge: "Paket All-In Handling",
    badgeIcon: "fa-van-shuttle",
    image: "images/bus-pariwisata.jpg",
    imageAlt: "Bus pariwisata premium dan armada wisata Duta Tour Bandung",
    gallery: [
      "images/bus-pariwisata.jpg",
      "images/car-hiace.jpg",
      "images/car-innova.jpg",
      "images/car-avanza.jpg"
    ],
    description: "Paket all-in yang mencakup bus pariwisata premium, pengelolaan logistik perjalanan, konsumsi, pemandu (tour leader), hingga dokumentasi eksklusif untuk kenyamanan perjalanan tanpa repot.",
    destinations: [
      "Rute Wisata Jawa Barat & Priangan",
      "Rute Wisata Jawa Tengah & Jawa Timur",
      "Rute Eksplorasi Bali & Lombok",
      "Layanan Antar Jemput & Drop Off Khusus"
    ],
    features: [
      "Bus Pariwisata Premium & Opsi HiAce / MPV",
      "Pengelolaan Logistik Perjalanan Menyeluruh",
      "Penyediaan Konsumsi & Snack Rombongan",
      "Pemandu (Tour Leader) Profesional & Ramah",
      "Dokumentasi Eksklusif Selama Kegiatan"
    ],
    price: "Sesuai Penawaran",
    priceNote: "(Tarif Terbaik)",
    priceDisclaimer: "* Harga dan ketersediaan armada perlu dikonfirmasi via WhatsApp sebelum pemesanan resmi",
    targetPackage: "Premium Transport & Handling All-In",
    ctaText: "Pilih Armada & Layanan",
    vehicles: [
      {
        id: "v-bus",
        name: "Bus Pariwisata Premium",
        category: "Big / Medium Bus",
        price: "Sesuai Penawaran",
        priceNote: "/ trip",
        capacity: "30–50 Seat",
        image: "images/bus-pariwisata.jpg",
        imageAlt: "Bus Pariwisata Premium Duta Tour Bandung",
        badge: "Kapasitas 30–50 Seat",
        highlights: "Bus pariwisata premium ber-AC, reclining seat, audio video entertainment, bagasi lega, didampingi crew berpengalaman."
      },
      {
        id: "v-hiace",
        name: "Toyota Hiace",
        category: "Microbus / Van",
        price: "Sesuai Penawaran",
        priceNote: "/ hari",
        capacity: "Hingga 14 orang",
        image: "images/car-hiace.jpg",
        imageAlt: "Toyota Hiace armada rombongan Duta Tour Bandung",
        badge: "Kapasitas hingga 14 Orang",
        highlights: "Kapasitas hingga 14 orang. Kabin luas & tinggi dengan AC merata untuk rombongan wisata keluarga dan gathering instansi."
      },
      {
        id: "v-innova",
        name: "Toyota Innova Reborn",
        category: "Medium MPV Premium",
        price: "Sesuai Penawaran",
        priceNote: "/ hari",
        capacity: "6–7 orang",
        image: "images/car-innova.jpg",
        imageAlt: "Toyota Innova Reborn armada wisata Duta Tour Bandung",
        badge: "Kapasitas 6–7 Orang",
        highlights: "Kapasitas 6–7 orang. Kabin lapang, suspensi nyaman, dan elegan untuk liburan keluarga, tamu VIP, dan perjalanan dinas."
      },
      {
        id: "v-avanza",
        name: "Toyota Avanza",
        category: "MPV Keluarga",
        price: "Sesuai Penawaran",
        priceNote: "/ hari",
        capacity: "1–6 orang",
        image: "images/car-avanza.jpg",
        imageAlt: "Toyota Avanza armada wisata Duta Tour Bandung",
        badge: "Kapasitas 1–6 Orang",
        highlights: "Kapasitas 1–6 orang. Mobil keluarga andalan yang lincah dan nyaman untuk mobilitas di Bandung maupun rute luar kota."
      }
    ]
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

// Fallback image helper
function handleImageError(img) {
  img.onerror = null;
  img.src = "images/hero-bandung.jpg";
}

// Card accent colors (dari palet Duta Tour Bandung: Hijau Terang, Oranye, Biru, Ungu)
const CARD_ACCENTS = [
  { tag: "#339933" }, // Hijau Terang (Utama)
  { tag: "#FCB040" }, // Oranye (Aksen Logo)
  { tag: "#1075BD" }, // Biru (Aksen Logo)
  { tag: "#92278F" }  // Ungu (Aksen Logo)
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
          <img id="pkg-img-${pkg.id}" src="${pkg.image}" alt="${pkg.imageAlt}" loading="lazy" width="900" height="600" class="pkg-pro-img" onerror="handleImageError(this)" />
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
              <span class="pkg-pro-price-label">Tarif Referensi (Demo)</span>
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
        <div class="pkg-modal-thumb ${i === 0 ? 'active' : ''}" data-src="${img}">
          <img src="${img}" alt="Thumbnail ${i + 1}" loading="lazy" onerror="handleImageError(this)" />
        </div>
      `).join("")}
    </div>
  ` : '';

  const waUrl = createWaLink(pkg.targetPackage || pkg.title, currentVehicleName);
  const featuresList = pkg.features.map(f =>
    `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`
  ).join("");
  const destList = (pkg.destinations || []).map(d =>
    `<li><i class="fa-solid fa-location-dot"></i> <span>${d}</span></li>`
  ).join("");

  modal.querySelector(".pkg-modal-inner").innerHTML = `
    <div class="pkg-modal-img-wrap">
      <img id="modal-main-img" src="${currentMainImage}" alt="${pkg.imageAlt}" loading="lazy" onerror="handleImageError(this)" />
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
          <h4><i class="fa-solid fa-map-location-dot"></i> Destinasi & Jangkauan Rute</h4>
          <ul class="pkg-modal-list">${destList}</ul>
        </div>
        <div>
          <h4><i class="fa-solid fa-shield-halved"></i> Fasilitas & Keunggulan</h4>
          <ul class="pkg-modal-list">${featuresList}</ul>
        </div>
      </div>

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
      const src = thumb.getAttribute("data-src");
      if (mainImg) mainImg.src = src;
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
