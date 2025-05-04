const stages_data = {
  "stage-01": {
      "name": "Etapa 1",
      "date": "2025-05-04T12:51:00+0200",
      "finish": "2024-07-19T14:30:00+0200",
      "location": "Barcelona",
      "distance": 7.5924602524786,
      "up": 50.0,
      "down": -54.0,
      "type": "Team Time Trial"
  },
  "stage-02": {
      "name": "Etapa 2",
      "date": "2025-05-05T14:30:00+0200",
      "finish": "2024-07-20T14:26:00+0200",
      "location": "Molins de Rei to Sant Boi de Llobregat",
      "distance": 99.04005326766368,
      "up": 1363.0,
      "down": -1409.0,
      "type": "Hilly"
  },
  "stage-03": {
      "name": "Etapa 3",
      "date": "2025-05-06T13:40:00+0200",
      "finish": "2024-07-09T12:30:00+0200",
      "location": "Barbastro to Huesca",
      "distance": 131.60750356774275,
      "up": 1131.0,
      "down": -1009.0,
      "type": "Lumpy"
  },
  "stage-04": {
      "name": "Etapa 4",
      "date": "2025-05-07T14:10:00+0200",
      "finish": "2024-07-09T12:30:00+0200",
      "location": "Pedrola to Borja",
      "distance": 112.01922437710692,
      "up": 1475.0,
      "down": -1272.0,
      "type": "Medium Mountain"
  },
  "stage-05": {
      "name": "Etapa 5",
      "date": "2025-05-08T13:45:00+0200",
      "finish": "2024-07-09T12:30:00+0200",
      "location": "Golmayo to Lagunas de Neila",
      "distance": 120.07023624421028,
      "up": 2129.0,
      "down": -1309.0,
      "type": "Mountain"
  },
  "stage-06": {
      "name": "Etapa 6",
      "date": "2025-05-09T11:05:00+0200",
      "finish": "2024-07-09T12:30:00+0200",
      "location": "Becerril de Campos to Baltan\u00e1s",
      "distance": 126.88619165158478,
      "up": 754.0,
      "down": -743.0,
      "type": "Flat"
  }
};

const currentTime = new Date(stages_data["stage-01"].date);
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
  const stageStart = new Date(stageInfo.date);
  let etaValue = stageStart.getTime();
  const distance = stageInfo.distance;
  const elevation = stageInfo.up;

  if (stageKey === "stage-01") {
    etaValue += (69 * 60 * 1000);
  } else {
    etaValue += 75658.1904 * distance + 1484.9559 * elevation + -10175.2012;
  };
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
    stageFinish = new Date(stageStart.getTime() + (12 * 60 * 60 * 1000));
  };
  stageHeader.appendChild(stageStartTz);
  topElems.appendChild(stageHeader);
  if (currentTime.getTime() > stageFinish.getTime() + (60 * 60 * 1000)) {
    stageDiv.classList.add("done");
  };

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
