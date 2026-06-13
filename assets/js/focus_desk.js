// Current date-clock ticking system
function startLiveClock() {
    function update() {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        const liveClockEl = document.getElementById('live-clock');
        if (liveClockEl) {
            liveClockEl.innerText = `${hrs}:${mins}:${secs}`;
        }
    }

    update();
    setInterval(update, 1000);
}

// Color and glow simulation logic
let currentGlowColor = 'amber';

function setGlow(color, hex) {
    currentGlowColor = color;
    const ind = document.getElementById('companion-indicator');
    const bulb = document.getElementById('ambient-bulb');
    const wallGlow = document.getElementById('simulated-wall-glow');

    // Reset glow classes
    ind.className = "w-2.5 h-2.5 rounded-full glow-dot";
    bulb.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center transition-all duration-700";

    if (color === 'amber') {
        ind.classList.add('bg-amber-500', 'glow-yellow');
        bulb.classList.add('bg-amber-500/10', 'text-amber-500');
        wallGlow.className = "absolute inset-0 m-auto w-64 h-64 bg-amber-500/10 rounded-full blur-[90px] -z-10 transition-all duration-700";
    } else if (color === 'emerald') {
        ind.classList.add('bg-emerald-500', 'glow-emerald');
        bulb.classList.add('bg-emerald-500/10', 'text-emerald-500');
        wallGlow.className = "absolute inset-0 m-auto w-64 h-64 bg-emerald-500/10 rounded-full blur-[90px] -z-10 transition-all duration-700";
    } else if (color === 'purple') {
        ind.classList.add('bg-purple-500', 'glow-purple');
        bulb.classList.add('bg-purple-500/10', 'text-purple-500');
        wallGlow.className = "absolute inset-0 m-auto w-64 h-64 bg-purple-500/10 rounded-full blur-[90px] -z-10 transition-all duration-700";
    } else if (color === 'stone') {
        ind.classList.add('bg-slate-500', 'glow-sky');
        bulb.classList.add('bg-slate-500/10', 'text-slate-400');
        wallGlow.className = "absolute inset-0 m-auto w-64 h-64 bg-slate-500/5 rounded-full blur-[90px] -z-10 transition-all duration-700";
    }

    // Adjust ring active highlights
    const buttons = document.querySelectorAll('#mock-colors button');
    buttons.forEach(btn => btn.className = btn.className.replace(/ring-\S+/g, ''));
    if (window.event && window.event.target) {
        window.event.target.classList.add('ring-2', 'ring-indigo-500/50');
    }

    triggerToast(`Ambient theme set to simulated ${color.toUpperCase()}`);
}

function changeGlowSlider(val) {
    document.getElementById('glow-label').innerText = val + '%';
    // Scale wall glow intensity
    const wallGlow = document.getElementById('simulated-wall-glow');
    if (val < 20) {
        wallGlow.style.opacity = '0.2';
    } else if (val < 60) {
        wallGlow.style.opacity = '0.6';
    } else {
        wallGlow.style.opacity = '1';
    }
}

// Live Pomodoro Countdown Logic
let pomoMinutes = 25;
let pomoSeconds = 0;
let pomoIsRunning = false;
let pomoInterval = null;

function togglePomo() {
    const btnIc = document.getElementById('btn-pomo-ic');
    if (pomoIsRunning) {
        clearInterval(pomoInterval);
        pomoIsRunning = false;
        btnIc.setAttribute('data-lucide', 'play');
    } else {
        pomoIsRunning = true;
        btnIc.setAttribute('data-lucide', 'pause');
        pomoInterval = setInterval(() => {
            if (pomoSeconds === 0) {
                if (pomoMinutes === 0) {
                    clearInterval(pomoInterval);
                    pomoIsRunning = false;
                    btnIc.setAttribute('data-lucide', 'play');
                    triggerToast("🔔 Pomodoro deep session completed!");
                    resetPomo();
                    return;
                }
                pomoMinutes--;
                pomoSeconds = 59;
            } else {
                pomoSeconds--;
            }
            updateTimerDisplays();
        }, 1000);
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function resetPomo() {
    clearInterval(pomoInterval);
    pomoIsRunning = false;
    pomoMinutes = 25;
    pomoSeconds = 0;
    document.getElementById('btn-pomo-ic').setAttribute('data-lucide', 'play');
    updateTimerDisplays();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Live Stopwatch Logic
let swSeconds = 0;
let swMinutes = 0;
let swIsRunning = false;
let swInterval = null;

function toggleSw() {
    const btnIc = document.getElementById('btn-sw-ic');
    if (swIsRunning) {
        clearInterval(swInterval);
        swIsRunning = false;
        btnIc.setAttribute('data-lucide', 'play');
    } else {
        swIsRunning = true;
        btnIc.setAttribute('data-lucide', 'pause');
        swInterval = setInterval(() => {
            swSeconds++;
            if (swSeconds === 60) {
                swSeconds = 0;
                swMinutes++;
            }
            updateTimerDisplays();
        }, 1000);
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function resetSw() {
    clearInterval(swInterval);
    swIsRunning = false;
    swMinutes = 0;
    swSeconds = 0;
    document.getElementById('btn-sw-ic').setAttribute('data-lucide', 'play');
    updateTimerDisplays();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function updateTimerDisplays() {
    const pMinStr = String(pomoMinutes).padStart(2, '0');
    const pSecStr = String(pomoSeconds).padStart(2, '0');
    document.getElementById('pomo-display').innerText = `${pMinStr}:${pSecStr}:00`;

    const sMinStr = String(swMinutes).padStart(2, '0');
    const sSecStr = String(swSeconds).padStart(2, '0');
    document.getElementById('stopwatch-display').innerText = `${sMinStr}:${sSecStr}:00`;
}

// Toast feedback trigger
let toastTimeout;

function triggerToast(text) {
    const toast = document.getElementById('sim-toast');
    document.getElementById('toast-text').innerText = text;
    toast.className = "fixed bottom-6 right-6 px-4 py-3 bg-slate-900 text-white rounded-xl shadow-xl z-50 text-xs font-semibold flex items-center gap-2 transform translate-y-0 opacity-100 transition-all duration-300 border border-white/5";

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.className = "fixed bottom-6 right-6 px-4 py-3 bg-slate-900 text-white rounded-xl shadow-xl z-50 text-xs font-semibold flex items-center gap-2 transform translate-y-20 opacity-0 transition-all duration-300 border border-white/5";
    }, 3000);
}

// Soundscape click simulation
function playSoundcape(soundName) {
    triggerToast(`🎵 Now playing: ${soundName} ambient stream`);
}

// Tab Switch Logic for Planner Simulation Block
function switchPlannerTab(tab) {
    const tasksBtn = document.getElementById('tab-tasks-btn');
    const alarmsBtn = document.getElementById('tab-alarms-btn');
    const tasksContent = document.getElementById('planner-simple-tasks');
    const alarmsContent = document.getElementById('planner-alarmed-groups');

    if (tab === 'tasks') {
        tasksBtn.className = "py-2.5 rounded-xl text-xs font-bold transition bg-[#1a1a24] text-white";
        alarmsBtn.className = "py-2.5 rounded-xl text-xs font-bold transition text-slate-400 hover:text-white";
        tasksContent.classList.remove('hidden');
        alarmsContent.classList.add('hidden');
    } else {
        alarmsBtn.className = "py-2.5 rounded-xl text-xs font-bold transition bg-[#1a1a24] text-white";
        tasksBtn.className = "py-2.5 rounded-xl text-xs font-bold transition text-slate-400 hover:text-white";
        alarmsContent.classList.remove('hidden');
        tasksContent.classList.add('hidden');
    }
}

// Task interactivity & deletion logic
function toggleCheck(btn) {
    const isChecked = btn.classList.contains('bg-indigo-600');
    const taskTextNode = btn.nextElementSibling;
    const container = btn.closest('div').parentElement;

    if (isChecked) {
        // Uncheck
        btn.className = "w-5 h-5 border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-500 rounded flex items-center justify-center transition bg-white dark:bg-[#0b1329]";
        btn.innerHTML = '';
        taskTextNode.className = "text-sm font-medium text-slate-700 dark:text-slate-300";
        container.classList.remove('opacity-60');
    } else {
        // Check
        btn.className = "w-5 h-5 bg-indigo-600 border border-indigo-600 rounded flex items-center justify-center text-white";
        btn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i>';
        taskTextNode.className = "text-sm font-medium text-slate-700 dark:text-slate-400 line-through";
        container.classList.add('opacity-60');
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
    syncWidgets();
}

function deleteRow(btn) {
    const row = btn.closest('div').parentElement;
    row.remove();
    syncWidgets();
    triggerToast("Task removed from planner");
}

function addCustomTask() {
    const field = document.getElementById('task-input-field');
    const title = field.value.trim();
    if (!title) return;

    const list = document.getElementById('planner-task-list');
    const row = document.createElement('div');
    row.className = "flex items-center justify-between bg-white/40 dark:bg-[#232f54]/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/40 transition duration-300 hover:bg-white/80 dark:hover:bg-[#232f54]/60 animate-fade-in";
    row.innerHTML = `
                <div class="flex items-center gap-4">
                    <button onclick="toggleCheck(this)" class="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-500 rounded flex items-center justify-center transition bg-white dark:bg-[#0b1329]">
                    </button>
                    <span class="text-sm font-medium text-slate-700 dark:text-slate-300">${title}</span>
                </div>
                <div class="flex items-center gap-4">
                    <span class="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-lg">ONCE</span>
                    <button onclick="deleteRow(this)" class="text-slate-400 hover:text-rose-500"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                </div>
            `;
    list.appendChild(row);
    field.value = '';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    syncWidgets();
    triggerToast(`"${title}" added successfully!`);
}

// Keep simulated app widgets in sync with the interactive dashboard below
function syncWidgets() {
    const list = document.getElementById('planner-task-list');
    if (!list) return;
    const rows = list.children;
    let pendingCount = 0;
    let firstPendingName = "No goals left!";

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const btn = row.querySelector('button');
        const isChecked = btn && btn.classList.contains('bg-indigo-600');
        if (!isChecked) {
            pendingCount++;
            if (firstPendingName === "No goals left!") {
                firstPendingName = row.querySelector('span').innerText;
            }
        }
    }

    // Syncing live app header badge
    const liveCountEl = document.getElementById('live-p-count');
    const liveNameEl = document.getElementById('live-p-name');
    if (liveCountEl) liveCountEl.innerText = pendingCount;
    if (liveNameEl) liveNameEl.innerText = firstPendingName;

    // Sync features metrics card
    const total = rows.length;
    const completed = total - pendingCount;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 100;

    const percentLabel = document.getElementById('p-percent-label');
    const percentBar = document.getElementById('p-percent-bar');
    if (percentLabel) percentLabel.innerText = `${percentage}% DONE`;
    if (percentBar) percentBar.style.width = `${percentage}%`;
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth'});
}

// Placeholder simulation methods for internal tab execution
function createNewSimpleTask() { triggerToast("Simulation layout added a test task data element!"); }
function registerAlarmedGroup() { triggerToast("Simulation alarm structure registered into matrix!"); }

window.addEventListener('DOMContentLoaded', () => {
    startLiveClock();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    syncWidgets();
});