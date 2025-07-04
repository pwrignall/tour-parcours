const stages_data = {
  "stage-01": {
    name: "Tappa 1",
    date: "2025-07-06T11:35:00+0200",
    location: "Bergamo to Bergamo",
    distance: 14.25060287855187,
    up: 64.7000000000001,
    down: -77.50000000000006,
    type: "Individual Time Trial",
  },
  "stage-02": {
    name: "Tappa 2",
    date: "2025-07-07T11:40:00+0200",
    location: "Clusone to Aprica",
    distance: 91.50729602874807,
    up: 1428.4299999999987,
    down: -716.6300000000005,
    type: "Hilly",
  },
  "stage-03": {
    name: "Tappa 3",
    date: "2025-07-08T11:20:00+0200",
    location: "Vezza d'Oglio to Trento",
    distance: 122.24036912563928,
    up: 1115.4000000000003,
    down: -2010.4899999999993,
    type: "Hilly",
  },
  "stage-04": {
    name: "Tappa 4",
    date: "2025-07-09T10:15:00+0200",
    location: "Castello Tesino to Pianezze (Valdobbiadene)",
    distance: 142.38367681894286,
    up: 2580.7800000000007,
    down: -1960.1200000000003,
    type: "Mountain",
  },
  "stage-05": {
    name: "Tappa 5",
    date: "2025-07-10T11:40:00+0200",
    location: "Mirano to Monselice",
    distance: 120.09098504577267,
    up: 197.77000000000007,
    down: -192.27000000000007,
    type: "Flat",
  },
  "stage-06": {
    name: "Tappa 6",
    date: "2025-07-11T10:25:00+0200",
    location: "Bellaria-Igea Marina to Terre Roveresche (Orciano di Pesaro)",
    distance: 144.81779354052495,
    up: 2371.7300000000014,
    down: -2126.0299999999997,
    type: "Hilly",
  },
  "stage-07": {
    name: "Tappa 7",
    date: "2025-07-12T09:50:00+0200",
    location: "Fermignano to Monte Nerone",
    distance: 149.4840417497814,
    up: 3545.820000000002,
    down: -2372.0700000000015,
    type: "Mountain",
  },
  "stage-08": {
    name: "Tappa 8",
    date: "2025-07-13T10:40:00+0200",
    location: "Forl\u00ec to Imola (Autodromo Enzo e Dino Ferrari)",
    distance: 134.0095015397473,
    up: 2345.350000000003,
    down: -2328.739999999993,
    type: "Hilly",
  },
};

const currentTime = new Date();
const firstStageStart = new Date(stages_data["stage-01"].date);
const postStageDate = new Date(stages_data[Object.keys(stages_data)[Object.keys(stages_data).length - 1]].date);
postStageDate.setDate(postStageDate.getDate() + 3);
const tzInfoParagraph = document.getElementById("tz-info");
tzInfoParagraph.textContent += `${firstStageStart
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
  const stageStart = new Date(stageInfo.date);
  let etaValue = stageStart.getTime();
  const distance = stageInfo.distance;
  const elevation = stageInfo.up;

  if (stageKey === "stage-05") {
    etaValue += 272 * 60 * 1000;
  } else if (stageKey === "stage-13") {
    etaValue += 261 * 60 * 1000;
  } else {
    etaValue += 75654.775 * distance + 720.2032 * elevation + -138987.3812;
  }
  let stageFinish = new Date(etaValue);
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
  if (stageKey.startsWith("rest")) {
    stageHeader.textContent += ` : ${stageStart
      .toLocaleDateString("en-GB", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
      .replaceAll(",", "")}`;
    stageFinish = new Date(stageStart.getTime() + 12 * 60 * 60 * 1000);
  } else {
    stageHeader.textContent += ` : ${stageStart
      .toLocaleDateString("en-GB", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
      .replaceAll(",", "")}`;
  }
  if (!stageKey.startsWith("rest")) {
    const stageStartTz = document.createElement("span");
    stageStartTz.className = "tz";
    stageStartTz.textContent = `${stageStart
      .toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      })
      .slice(5)}`;
    stageHeader.appendChild(stageStartTz);
  }
  topElems.appendChild(stageHeader);
  if (
    currentTime.getTime() > stageFinish.getTime() + 60 * 60 * 1000 &&
    currentTime.getTime() < postStageDate.getTime()
  ) {
    stageDiv.classList.add("done");
  }

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
      if (!stageKey.startsWith("rest")) {
        bottomElems.appendChild(profileDiv);
        stageInfoDiv.appendChild(eta);
      }

      bottomElems.appendChild(stageInfoDiv);
      stageDiv.appendChild(topElems);
      stageDiv.appendChild(bottomElems);
    }
  });
});
