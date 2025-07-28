const stages_data = {
  "stage-01": {
    name: "\u00c9tape 1",
    date: "2025-07-26T17:25:00+0200",
    location: "Vannes to Plumelec",
    distance: 76.41927119099007,
    up: 699.0,
    down: -558.0,
    type: "Hilly",
  },
  "stage-02": {
    name: "\u00c9tape 2",
    date: "2025-07-27T12:10:00+0200",
    location: "Brest to Quimper",
    distance: 112.70576349349939,
    up: 1382.0,
    down: -1320.0,
    type: "Hilly",
  },
  "stage-03": {
    name: "\u00c9tape 3",
    date: "2025-07-28T13:50:00+0200",
    location: "La Gacilly to Angers",
    distance: 163.59621038875275,
    up: 494.0,
    down: -493.0,
    type: "Flat",
  },
  "stage-04": {
    name: "\u00c9tape 4",
    date: "2025-07-29T14:35:00+0200",
    location: "Saumur to Poitiers",
    distance: 128.09229535071222,
    up: 364.0,
    down: -289.0,
    type: "Flat",
  },
  "stage-05": {
    name: "\u00c9tape 5",
    date: "2025-07-30T13:20:00+0200",
    location: "Chasseneuil-du-Poitou Futuroscope to Gu\u00e9ret",
    distance: 164.60440722362608,
    up: 1218.0,
    down: -854.0,
    type: "Hilly",
  },
  "stage-06": {
    name: "\u00c9tape 6",
    date: "2025-07-31T14:00:00+0200",
    location: "Clermont-Ferrand to Ambert",
    distance: 122.77543930300146,
    up: 2165.0,
    down: -1948.0,
    type: "Mountain",
  },
  "stage-07": {
    name: "\u00c9tape 7",
    date: "2025-08-01T13:30:00+0200",
    location: "Bourg-en-Bresse to Chamb\u00e9ry",
    distance: 160.24531787849028,
    up: 1543.0,
    down: -1502.0,
    type: "Hilly",
  },
  "stage-08": {
    name: "\u00c9tape 8",
    date: "2025-08-02T13:45:00+0200",
    location: "Chamb\u00e9ry to Col de la Madeleine",
    distance: 112.37446119641203,
    up: 3425.0,
    down: -1765.0,
    type: "Mountain",
  },
  "stage-09": {
    name: "\u00c9tape 9",
    date: "2025-08-03T15:20:00+0200",
    location: "Praz-sur-Arly to Ch\u00e2tel les Portes du Soleil",
    distance: 124.17720939519235,
    up: 2682.0,
    down: -2427.0,
    type: "Mountain",
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

  etaValue += 75658.1904 * distance + 1484.9559 * elevation + -10175.2012;
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
