const stages_data = {
  "stage-01": {
      "name": "Tappa 1",
      "date": "2026-05-30T15:30:00+0200",
      "location": "Cesenatico to Ravenna",
      "distance": 139.17790988372374,
      "up": 0,
      "down": 0,
      "type": "Flat"
  },
  "stage-02": {
      "name": "Tappa 2",
      "date": "2026-05-31T11:15:00+0200",
      "location": "Roncade to Caorle",
      "distance": 155.60384021934482,
      "up": 310.23,
      "down": -307.11999999999995,
      "type": "Flat"
  },
  "stage-03": {
      "name": "Tappa 3",
      "date": "2026-06-01T13:45:00+0200",
      "location": "Bibione to Buja",
      "distance": 156.0512347244453,
      "up": 726.95,
      "down": -529.3500000000001,
      "type": "Lumpy"
  },
  "stage-04": {
      "name": "Tappa 4",
      "date": "2026-06-02T14:00:00+0200",
      "location": "Belluno to Nevegal",
      "distance": 12.786302433196862,
      "up": 687.8199999999999,
      "down": -38.21999999999997,
      "type": "Individual Time Trial"
  },
  "stage-05": {
      "name": "Tappa 5",
      "date": "2026-06-03T13:10:00+0200",
      "location": "Longarone to Santo Stefano di Cadore",
      "distance": 145.53958616650783,
      "up": 3107.239999999999,
      "down": -2664.3600000000006,
      "type": "Mountain"
  },
  "stage-06": {
      "name": "Tappa 6",
      "date": "2026-06-04T14:00:00+0200",
      "location": "Ala to Brescello",
      "distance": 159.08960908434727,
      "up": 235.35,
      "down": -387.48,
      "type": "Flat"
  },
  "stage-07": {
      "name": "Tappa 7",
      "date": "2026-06-05T13:00:00+0200",
      "location": "Sorbolo Mezzani to Salice Terme",
      "distance": 159.2024244442293,
      "up": 702.4899999999999,
      "down": -560.3399999999999,
      "type": "Hilly"
  },
  "stage-08": {
      "name": "Tappa 8",
      "date": "2026-06-06T14:05:00+0200",
      "location": "Rivoli to Sestriere",
      "distance": 104.85412499183198,
      "up": 2652.1799999999994,
      "down": -978.6800000000003,
      "type": "Mountain"
  },
  "stage-09": {
      "name": "Tappa 9",
      "date": "2026-06-07T13:25:00+0200",
      "location": "Saluzzo to Saluzzo",
      "distance": 145.05169500778112,
      "up": 1901.0899999999997,
      "down": -1860.5399999999995,
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

  if (stageKey === "stage-04") {
    etaValue += 210 * 60 * 1000;
  } else {
    etaValue += 75658.1904 * distance + 1484.9559 * elevation + -10175.2012;
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
