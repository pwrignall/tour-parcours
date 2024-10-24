const stages_data = {
  "stage-01": {
    name: "Tappa 1",
    date: "2024-07-07T11:35:00+0200",
    finish: "2024-07-07T14:30:00+0200",
    location: "Brescia",
    distance: 15.709923149330995,
    up: 106.74000000000004,
    down: -111.88000000000002,
    type: "Individual Time Trial",
  },
  "stage-02": {
    name: "Tappa 2",
    date: "2024-07-08T11:35:00+0200",
    finish: "2024-07-08T14:26:00+0200",
    location: "Sirmione to Volta Mantovana",
    distance: 109.28673192525555,
    up: 529.59,
    down: -506.0200000000002,
    type: "Flat",
  },
  "stage-03": {
    name: "Tappa 3",
    date: "2024-07-09T11:15:00+0200",
    finish: "2024-07-09T14:29:00+0200",
    location: "Sabbioneta to Toano",
    distance: 113.29105893083653,
    up: 1158.8399999999992,
    down: -292.72,
    type: "Hilly",
  },
  "stage-04": {
    name: "Tappa 4",
    date: "2024-07-10T10:25:00+0200",
    finish: "2024-07-10T14:30:00+0200",
    location: "Imola to Urbino",
    distance: 134.32505563450255,
    up: 1654.3599999999983,
    down: -1244.349999999999,
    type: "Hilly",
  },
  "stage-05": {
    name: "Tappa 5",
    date: "2024-07-11T11:30:00+0200",
    finish: "2024-07-11T14:31:00+0200",
    location: "Frontone to Foligno",
    distance: 108.06203288387313,
    up: 1152.5100000000007,
    down: -1247.719999999998,
    type: "Hilly",
  },
  "stage-06": {
    name: "Tappa 6",
    date: "2024-07-12T09:40:00+0200",
    finish: "2024-07-12T14:28:00+0200",
    location: "San Benedetto del Tronto to Chieti",
    distance: 152.8122679788988,
    up: 2553.040000000002,
    down: -2232.1500000000024,
    type: "Hilly",
  },
  "stage-07": {
    name: "Tappa 7",
    date: "2024-07-13T10:20:00+0200",
    finish: "2024-07-13T14:30:00+0200",
    location: "Lanciano to Blockhaus",
    distance: 120.23926072736585,
    up: 3713.5200000000004,
    down: -2275.4300000000003,
    type: "Mountain",
  },
  "stage-08": {
    name: "Tappa 8",
    date: "2024-07-14T10:40:00+0200",
    finish: "2024-07-14T14:30:00+0200",
    location: "Pescara to L'Aquila",
    distance: 117.32467435023813,
    up: 2369.4699999999993,
    down: -1682.6600000000021,
    type: "Mountain",
  },
};

const currentTime = new Date();
const tzInfoParagraph = document.getElementById("tz-info");
tzInfoParagraph.textContent += `${currentTime
  .toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "long",
  })
  .slice(5)}`;

Object.keys(stages_data).forEach((stageKey) => {
  const topElems = document.createElement("div");
  topElems.className = "top-elements";
  const bottomElems = document.createElement("div");
  bottomElems.className = "bottom-elements";

  const stageInfo = stages_data[stageKey];
  const stageDiv = document.getElementById(stageKey);
  const stageInfoDiv = document.createElement("div");
  stageInfoDiv.className = "stage-info";

  const profileDiv = document.createElement("div");
  profileDiv.className = "profile";
  profileDiv.dataset.stage = `${stageKey}`;

  const eta = document.createElement("p");
  eta.className = "eta";
  const stageStart = new Date(stages_data[stageKey].date);

  const stageFinish = new Date(stages_data[stageKey].finish);
  eta.textContent = `${stageFinish.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  })}`;
  const tz_text = document.createElement("span");
  tz_text.className = "tz";
  tz_text.textContent += `${stageFinish
    .toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    })
    .slice(5)}`;
  eta.appendChild(tz_text);

  const stageHeader = document.createElement("h2");
  stageHeader.textContent = stages_data[stageKey].name;
  stageHeader.textContent += ` : ${stageStart
    .toLocaleDateString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -5)
    .replace(",", "")}`;
  topElems.appendChild(stageHeader);

  Object.keys(stageInfo).forEach((key) => {
    if (!["name", "date", "finish"].includes(key)) {
      const p = document.createElement("p");
      p.className = `${key}`;
      if (key === "location") {
        p.innerHTML = `${stageInfo[key]}`;
        topElems.appendChild(p);
      } else if (key == "distance") {
        p.textContent = `${stageInfo[key].toFixed(1)}`;
        topElems.appendChild(p);
      } else if (["down", "up"].includes(key)) {
        p.textContent = `${Math.abs(stageInfo[key].toFixed(0))}`;
        stageInfoDiv.appendChild(p);
      } else if (key === "type") {
        p.dataset.type = `${stageInfo[key].toLowerCase().replaceAll(" ", "-")}`;
        p.textContent = `${stageInfo[key]}`;
        topElems.appendChild(p);
      } else {
        p.textContent = `${stageInfo[key]}`;
        stageInfoDiv.appendChild(p);
      }
      if (!["rest-01", "rest-02"].includes(stageKey)) {
        bottomElems.appendChild(profileDiv);
        stageInfoDiv.appendChild(eta);
      }

      bottomElems.appendChild(stageInfoDiv);
      stageDiv.appendChild(topElems);
      stageDiv.appendChild(bottomElems);
    }
  });
});
