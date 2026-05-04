const stages_data = {
  "stage-01": {
    "name": "Etapa 1",
    "date": "2026-05-03T11:35:00+0200",
    "location": "Mar\u00edn to Salvaterra de Mi\u00f1o",
    "distance": 113.92185882319168,
    "up": 1791.8,
    "down": -1778.9999999999973,
    "type": "Hilly"
  },
  "stage-02": {
    "name": "Etapa 2",
    "date": "2026-05-04T14:17:00+0200",
    "location": "Lobios to San Cibrao das Vi\u00f1as",
    "distance": 109.82608587596636,
    "up": 2106.0000000000005,
    "down": -2178.2,
    "type": "Hilly"
  },
  "stage-03": {
    "name": "Etapa 3",
    "date": "2026-05-05T14:04:00+0200",
    "location": "Padr\u00f3n to A Coru\u00f1a",
    "distance": 121.217251604839,
    "up": 1894.7999999999986,
    "down": -1880.699999999997,
    "type": "Flat"
  },
  "stage-04": {
    "name": "Etapa 4",
    "date": "2026-05-06T14:18:00+0200",
    "location": "Monforte de Lemos to Antas de Ulla",
    "distance": 115.62407144473076,
    "up": 1903.5000000000002,
    "down": -1642.7000000000012,
    "type": "Hilly"
  },
  "stage-05": {
    "name": "Etapa 5",
    "date": "2026-05-07T14:16:00+0200",
    "location": "Le\u00f3n to Astorga",
    "distance": 119.66635123488824,
    "up": 1030.8999999999992,
    "down": -1034.799999999999,
    "type": "Flat"
  },
  "stage-06": {
    "name": "Etapa 6",
    "date": "2026-05-08T14:53:00+0200",
    "location": "Xix\u00f3n to Les Praeres. Nava",
    "distance": 106.54238202671336,
    "up": 2101.9,
    "down": -1367.300000000001,
    "type": "Mountain"
  },
  "stage-07": {
    "name": "Etapa 7",
    "date": "2026-05-09T10:36:00+0200",
    "location": "Pola de Laviana to L'Angliru",
    "distance": 132.6035932507989,
    "up": 3266.9000000000033,
    "down": -1978.799999999998,
    "type": "Mountain"
  }
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
  stageHeader.textContent += ` : ${stageStart
    .toLocaleDateString("en-GB", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
    .replace(",", "")}`;
  const stageStartTz = document.createElement("span");
  stageStartTz.className = "tz";
  stageStartTz.textContent = `${stageStart
    .toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    })
    .slice(5)}`;
  if (stageKey === "rest-01" || stageKey === "rest-02") {
    stageStartTz.textContent = "";
    stageHeader.textContent = stageHeader.textContent.slice(0, -7);
    stageFinish = new Date(stageStart.getTime() + 12 * 60 * 60 * 1000);
  }
  stageHeader.appendChild(stageStartTz);
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
