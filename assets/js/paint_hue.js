function switchTab(mode) {
    // Fetch tab buttons
    const btnGuided = document.getElementById('tabBtn-guided');
    const btnSketch = document.getElementById('tabBtn-sketch');
    const btnFree = document.getElementById('tabBtn-free');

    // Fetch dynamic text description elements
    const descGuided = document.getElementById('tabDesc-guided');
    const descSketch = document.getElementById('tabDesc-sketch');
    const descFree = document.getElementById('tabDesc-free');

    // Fetch mock images
    const imgGuided = document.getElementById('tabMockImage-guided');
    const imgSketch = document.getElementById('tabMockImage-sketch');
    const imgFree = document.getElementById('tabMockImage-free');

    // Reset active classes across all buttons
    [btnGuided, btnSketch, btnFree].forEach(btn => {
        btn.className = "px-5 py-4 font-bold text-sm sm:text-base border-b-2 border-transparent text-slate-400 hover:text-slate-600 transition-all flex items-center gap-2 cursor-pointer";
    });

    // Set all descriptions and images to hidden
    [descGuided, descSketch, descFree].forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('block');
    });

    [imgGuided, imgSketch, imgFree].forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('block');
    });

    // Show current active items
    if (mode === 'guided') {
        btnGuided.className = "px-5 py-4 font-bold text-sm sm:text-base border-b-2 border-[#3b82f6] text-[#3b82f6] transition-all flex items-center gap-2 cursor-pointer";
        descGuided.classList.remove('hidden');
        descGuided.classList.add('block');
        imgGuided.classList.remove('hidden');
        imgGuided.classList.add('block');
    } else if (mode === 'sketch') {
        btnSketch.className = "px-5 py-4 font-bold text-sm sm:text-base border-b-2 border-[#3b82f6] text-[#3b82f6] transition-all flex items-center gap-2 cursor-pointer";
        descSketch.classList.remove('hidden');
        descSketch.classList.add('block');
        imgSketch.classList.remove('hidden');
        imgSketch.classList.add('block');
    } else if (mode === 'free') {
        btnFree.className = "px-5 py-4 font-bold text-sm sm:text-base border-b-2 border-[#3b82f6] text-[#3b82f6] transition-all flex items-center gap-2 cursor-pointer";
        descFree.classList.remove('hidden');
        descFree.classList.add('block');
        imgFree.classList.remove('hidden');
        imgFree.classList.add('block');
    }
}

// Before & After swipe slider calculation
function updateCompareSlider(val) {
    const outlineLayer = document.getElementById('outlineLayer');
    const swipeSeparator = document.getElementById('swipeSeparator');

    // Re-render clipping layers widths
    outlineLayer.style.width = val + '%';
    swipeSeparator.style.left = val + '%';
}

// Toggle Tablet screen images (using block/hidden toggles)
function toggleLandscape(scene) {
    // Tablet Buttons
    const btnSplash = document.getElementById('landBtn-splash');
    const btnLevel = document.getElementById('landBtn-level');
    const btnFree = document.getElementById('landBtn-free');

    // Tablet Images
    const imgSplash = document.getElementById('landImage-splash');
    const imgLevel = document.getElementById('landImage-level');
    const imgFree = document.getElementById('landImage-free');

    // Reset buttons active classes
    [btnSplash, btnLevel, btnFree].forEach(btn => {
        btn.className = "px-5 py-2.5 rounded-xl text-xs font-bold border-2 border-transparent bg-slate-100 text-slate-600 transition-all cursor-pointer";
    });

    // Hide all images
    [imgSplash, imgLevel, imgFree].forEach(img => {
        img.classList.add('hidden');
        img.classList.remove('block');
    });

    // Toggle selected image
    if (scene === 'splash') {
        btnSplash.className = "px-5 py-2.5 rounded-xl text-xs font-bold border-2 border-[#3b82f6] bg-blue-50 text-[#3b82f6] transition-all cursor-pointer";
        imgSplash.classList.remove('hidden');
        imgSplash.classList.add('block');
    } else if (scene === 'level') {
        btnLevel.className = "px-5 py-2.5 rounded-xl text-xs font-bold border-2 border-[#3b82f6] bg-blue-50 text-[#3b82f6] transition-all cursor-pointer";
        imgLevel.classList.remove('hidden');
        imgLevel.classList.add('block');
    } else if (scene === 'free') {
        btnFree.className = "px-5 py-2.5 rounded-xl text-xs font-bold border-2 border-[#3b82f6] bg-blue-50 text-[#3b82f6] transition-all cursor-pointer";
        imgFree.classList.remove('hidden');
        imgFree.classList.add('block');
    }
}

// Accordion FAQ drawer controller
function toggleFAQ(id) {
    const ans = document.getElementById(`faqAnswer-${id}`);
    const icon = document.getElementById(`faqIcon-${id}`);

    if (ans.classList.contains('hidden')) {
        ans.classList.remove('hidden');
        icon.textContent = "➖";
    } else {
        ans.classList.add('hidden');
        icon.textContent = "➕";
    }
}