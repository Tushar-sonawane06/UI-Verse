// charts.js - Logic for data visualization components

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Bar Chart
    const barChartContainer = document.getElementById('bar-chart-bars');
    if (barChartContainer) {
        const barData = [
            { label: 'Mon', value: 45 },
            { label: 'Tue', value: 75 },
            { label: 'Wed', value: 50 },
            { label: 'Thu', value: 90 },
            { label: 'Fri', value: 65 },
            { label: 'Sat', value: 100 },
            { label: 'Sun', value: 30 }
        ];

        barData.forEach((data, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'bar-wrapper';

            const bar = document.createElement('div');
            bar.className = 'bar';
            // Start at 0 for animation
            bar.style.height = '0%';
            
            // Set final height after a short delay for animation
            setTimeout(() => {
                bar.style.height = `${data.value}%`;
            }, 100 + (index * 50));

            const tooltip = document.createElement('div');
            tooltip.className = 'bar-tooltip';
            tooltip.innerText = `${data.value} users`;

            const label = document.createElement('div');
            label.className = 'bar-label';
            label.innerText = data.label;

            bar.appendChild(tooltip);
            wrapper.appendChild(bar);
            wrapper.appendChild(label);
            barChartContainer.appendChild(wrapper);
        });
    }

    // 2. Initialize Heatmap Activity Tracker
    const heatmapContainer = document.getElementById('heatmap-grid');
    if (heatmapContainer) {
        // Generate 36 random cells for the last month
        for(let i = 0; i < 36; i++) {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            
            // Random level 0-4
            const level = Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0;
            if (level > 0) {
                cell.setAttribute('data-level', level);
            }
            
            // Tooltip for cell
            cell.title = `Activity level: ${level}`;
            heatmapContainer.appendChild(cell);
        }
    }

    // 3. SVG Line Chart Points Interactions
    const points = document.querySelectorAll('.svg-point');
    points.forEach(point => {
        point.addEventListener('mouseenter', (e) => {
            // Optional: Create a custom tooltip element floating near the mouse
            const val = e.target.getAttribute('data-value');
            // For simplicity, we just rely on the built-in title if added, or we could create a custom div.
        });
    });
});

// Helper for copy code buttons
function toggleCode(id, btn) {
    const block = document.getElementById(id);
    if (!block) return;
    const isOpen = block.classList.toggle('show');
    btn.innerHTML = isOpen
        ? '<i class="fa-solid fa-eye-slash"></i> Hide Code'
        : '<i class="fa-solid fa-code"></i> View Code';
}

let toastTimer;
function showToast() {
    const toast = document.getElementById('copyToast');
    if (!toast) return;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function copyCode(id, btn) {
    const codeBlock = document.getElementById(id);
    if (!codeBlock) return;
    
    // Grab the pre code text or fallback to block text
    const textToCopy = codeBlock.querySelector('code')?.innerText || codeBlock.innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.classList.add('copied');
        showToast();
        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.classList.remove('copied');
        }, 2000);
    });
}

// Global Layout Logic
document.addEventListener('DOMContentLoaded', () => {
    /* Dark Mode Toggle */
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        const icon = toggle.querySelector('i');
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            if (icon) icon.className = 'fa-solid fa-sun';
        }
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    /* Scroll animations */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.component-card').forEach(el => observer.observe(el));
});

/* Sidebar */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('visible');
}

/* Scroll Top */
function scrollToTop() { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const navbar = document.getElementById('navbar');
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* =========================================================
   Radar Spider-Web Profile Configurations
   ========================================================= */
const radarProfiles = {
    striker: '100,20 180,60 135,160 55,160 30,60',
    balanced: '100,45 155,75 130,140 70,140 45,75',
    defender: '100,80 120,90 150,165 50,165 80,90'
};

function switchRadarProfile(profileKey, btn) {
    const tabs = btn.parentNode.querySelectorAll('.profile-tab');
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    
    const polygon = document.getElementById('radar-poly-el');
    if (polygon && radarProfiles[profileKey]) {
        polygon.setAttribute('points', radarProfiles[profileKey]);
    }
}

/* =========================================================
   Interactive Charts 6-10 Initialization
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // 6. Interactive Area Chart Hover Tracking
    const areaChart = document.getElementById('area-chart-6');
    const areaTooltip = document.getElementById('area-tooltip-el');
    const areaMarkerLine = document.getElementById('marker-line-el');
    
    if (areaChart && areaTooltip && areaMarkerLine) {
        const nodes = areaChart.querySelectorAll('.tracker-node');
        
        areaChart.addEventListener('mousemove', (e) => {
            const rect = areaChart.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            
            let closestNode = null;
            let minDistance = Infinity;
            
            nodes.forEach(node => {
                const nodeX = parseFloat(node.getAttribute('cx')) / 500 * rect.width;
                const dist = Math.abs(mouseX - nodeX);
                if (dist < minDistance) {
                    minDistance = dist;
                    closestNode = node;
                }
            });
            
            if (closestNode) {
                nodes.forEach(n => n.classList.remove('active'));
                closestNode.classList.add('active');
                
                const nodeXPercentage = parseFloat(closestNode.getAttribute('cx')) / 500 * 100;
                areaMarkerLine.style.left = `${nodeXPercentage}%`;
                areaMarkerLine.style.opacity = '1';
                
                const val = closestNode.getAttribute('data-val');
                const time = closestNode.getAttribute('data-time');
                
                areaTooltip.querySelector('.tooltip-time').textContent = time;
                areaTooltip.querySelector('.tooltip-val').textContent = `${val} Users`;
                
                const nodeYPercentage = parseFloat(closestNode.getAttribute('cy')) / 160 * 100;
                areaTooltip.style.left = `calc(${nodeXPercentage}% - 60px)`;
                areaTooltip.style.top = `calc(${nodeYPercentage}% - 55px)`;
                areaTooltip.style.opacity = '1';
            }
        });
        
        areaChart.addEventListener('mouseleave', () => {
            nodes.forEach(n => n.classList.remove('active'));
            areaMarkerLine.style.opacity = '0';
            areaTooltip.style.opacity = '0';
        });
    }

    // 7. Glassmorphism Pie Legend Rotation/Info Update
    const pieLegends = document.querySelectorAll('.pie-legend-tag');
    const pieCenterValue = document.getElementById('pie-center-value');
    const pieCenterLabel = document.getElementById('pie-center-label');
    const glassPie = document.getElementById('glass-pie-el');
    
    if (pieLegends.length && pieCenterValue && pieCenterLabel && glassPie) {
        const rotationMap = {
            'Chrome': '0deg',
            'Safari': '90deg',
            'Firefox': '180deg',
            'Edge': '270deg'
        };
        
        pieLegends.forEach(legend => {
            legend.addEventListener('mouseenter', () => {
                pieLegends.forEach(l => l.classList.remove('active'));
                legend.classList.add('active');
                
                const pct = legend.getAttribute('data-pct');
                const browser = legend.getAttribute('data-browser');
                
                pieCenterValue.textContent = `${pct}%`;
                pieCenterLabel.textContent = browser;
                
                glassPie.style.transform = `scale(1.05) rotate(${rotationMap[browser] || '0deg'})`;
            });
            
            legend.addEventListener('mouseleave', () => {
                glassPie.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    // 9. Real-Time Analytics Crawling path updates
    const rtPath = document.getElementById('rt-path-el');
    const rtArea = document.getElementById('rt-area-el');
    const rtValEl = document.getElementById('rt-value-el');
    
    if (rtPath && rtValEl) {
        const maxPoints = 20;
        const data = Array.from({ length: maxPoints }, () => 60);
        
        function updateRealTimeChart() {
            const lastVal = data[data.length - 1];
            const nextVal = Math.max(15, Math.min(105, lastVal + (Math.random() - 0.5) * 20));
            
            data.push(nextVal);
            data.shift();
            
            const xInterval = 400 / (maxPoints - 1);
            let pathD = `M0,${120 - data[0]}`;
            let areaD = `M0,120 L0,${120 - data[0]}`;
            
            for (let i = 1; i < data.length; i++) {
                const x = i * xInterval;
                const y = 120 - data[i];
                pathD += ` L${x},${y}`;
                areaD += ` L${x},${y}`;
            }
            
            areaD += ` L400,120 Z`;
            
            rtPath.setAttribute('d', pathD);
            if (rtArea) rtArea.setAttribute('d', areaD);
            rtValEl.textContent = `${nextVal.toFixed(1)} MB/s`;
        }
        
        updateRealTimeChart();
        setInterval(updateRealTimeChart, 1200);
    }

    // 10. Annual Heatmap Contribution Grid builder
    const annualGrid = document.getElementById('annual-grid-el');
    const heatmapDetail = document.getElementById('heatmap-detail-el');
    
    if (annualGrid && heatmapDetail) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 363);
        
        for (let i = 0; i < 364; i++) {
            const cell = document.createElement('div');
            cell.className = 'annual-cell';
            
            const cellDate = new Date(startDate);
            cellDate.setDate(startDate.getDate() + i);
            
            let commits = 0;
            const rand = Math.random();
            if (rand > 0.88) commits = 4;
            else if (rand > 0.78) commits = 3;
            else if (rand > 0.6) commits = 2;
            else if (rand > 0.4) commits = 1;
            
            let level = 0;
            if (commits >= 4) level = 4;
            else if (commits === 3) level = 3;
            else if (commits === 2) level = 2;
            else if (commits === 1) level = 1;
            
            if (level > 0) {
                cell.setAttribute('data-level', level);
            }
            
            const dateString = `${months[cellDate.getMonth()]} ${cellDate.getDate()}, ${cellDate.getFullYear()}`;
            cell.setAttribute('data-date', dateString);
            cell.setAttribute('data-commits', commits);
            
            cell.addEventListener('mouseenter', () => {
                const c = cell.getAttribute('data-commits');
                const d = cell.getAttribute('data-date');
                const commitWord = c === '1' ? 'commit' : 'commits';
                heatmapDetail.textContent = `${c} ${commitWord} on ${d}`;
                heatmapDetail.style.borderColor = 'var(--ch-cyan)';
                heatmapDetail.style.color = '#fff';
            });
            
            cell.addEventListener('mouseleave', () => {
                heatmapDetail.textContent = 'Hover over cells to see activity';
                heatmapDetail.style.borderColor = 'var(--ch-border)';
                heatmapDetail.style.color = 'var(--ch-text-dim)';
            });
            
            annualGrid.appendChild(cell);
        }
    }
});

