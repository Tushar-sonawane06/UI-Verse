  function nowStr() {
    const d = new Date();
    return [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map(n => String(n).padStart(2,'0')).join(':');
  }

  //  Add log entry 
  function addLog(msg, type = '') {
    const logs = document.getElementById('logs');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="log-time">${nowStr()}</span><span class="log-msg ${type}">${msg}</span>`;
    logs.appendChild(entry);
    logs.scrollTop = logs.scrollHeight;
  }

  //  Control buttons 
  function logMove(dir) {
    const msgs = {
      FORWARD: 'Moving forward — path clear.',
      REVERSE: 'Reversing — obstacle check active.',
      LEFT:    'Turning left — 90° rotation.',
      RIGHT:   'Turning right — 90° rotation.',
      STOP:    'All movement halted.'
    };
    addLog(msgs[dir] || `CMD: ${dir}`, dir === 'STOP' ? 'warn' : '');
  }

  function runCmd(msg) {
    const isShutdown = msg.toLowerCase().includes('shutdown');
    addLog(msg, isShutdown ? 'error' : 'info');
  }

  //  Auto log feed 
  const feed = [
    ['Sensor sweep cycle completed.', ''],
    ['Obstacle detected at 2.4m — rerouting.', 'warn'],
    ['Battery optimized — peak efficiency.', ''],
    ['Navigation path updated.', 'info'],
    ['System running nominal.', ''],
    ['Thermal check passed — 38°C', ''],
    ['AI decision layer active.', 'info'],
    ['Motor torque adjusted.', ''],
  ];

  let feedIdx = 0;
  setInterval(() => {
    const [msg, type] = feed[feedIdx % feed.length];
    addLog(msg, type);
    feedIdx++;
  }, 3000);

  //  Build Chart 
  const chartData = [
    { day: 'MON', val: 70 },
    { day: 'TUE', val: 90 },
    { day: 'WED', val: 55 },
    { day: 'THU', val: 95 },
    { day: 'FRI', val: 75 },
    { day: 'SAT', val: 85 },
    { day: 'SUN', val: 65 },
  ];

  const chart = document.getElementById('chart');
  chartData.forEach(({ day, val }) => {
    const col = document.createElement('div');
    col.className = 'chart-col';
    col.innerHTML = `
      <div class="chart-bar-wrap" style="height:${val}%;">
        <div class="chart-bar-fill"></div>
      </div>
      <span class="chart-day">${day}</span>
    `;
    chart.appendChild(col);
  });