const stages_data = {
  "stage-01": {
      "name": "\u00c9tape 1",
      "date": "2026-07-04T17:05:00+0200",
      "location": "Barcelona to Barcelona (ES)",
      "distance": 19.561092646947635,
      "up": 131.0,
      "down": -36.0,
      "type": "Team Time Trial"
  },
  "stage-02": {
      "name": "\u00c9tape 2",
      "date": "2026-07-05T13:45:00+0200",
      "location": "Tarragona to Barcelona (ES)",
      "distance": 178.76682500193888,
      "up": 1905.0,
      "down": -1808.0,
      "type": "Lumpy"
  },
  "stage-03": {
      "name": "\u00c9tape 3",
      "date": "2026-07-06T12:10:00+0200",
      "location": "Granollers (ES) to Les Angles (FR)",
      "distance": 196.05346677944337,
      "up": 3523.0,
      "down": -1888.0,
      "type": "Mountain"
  },
  "stage-04": {
      "name": "\u00c9tape 4",
      "date": "2026-07-07T13:10:00+0200",
      "location": "Carcassonne to Foix",
      "distance": 182.20243445547453,
      "up": 2436.0,
      "down": -2149.0,
      "type": "Hilly"
  },
  "stage-05": {
      "name": "\u00c9tape 5",
      "date": "2026-07-08T14:05:00+0200",
      "location": "Lannemezan to Pau",
      "distance": 158.14575584685255,
      "up": 1041.0,
      "down": -1427.0,
      "type": "Flat"
  },
  "stage-06": {
      "name": "\u00c9tape 6",
      "date": "2026-07-09T12:25:00+0200",
      "location": "Pau to Gavarnie-G\u00e8dre",
      "distance": 186.20779984946606,
      "up": 3770.0,
      "down": -2588.0,
      "type": "Mountain"
  },
  "stage-07": {
      "name": "\u00c9tape 7",
      "date": "2026-07-10T13:15:00+0200",
      "location": "Hagetmau to Bordeaux",
      "distance": 174.85949983635206,
      "up": 298.0,
      "down": -428.0,
      "type": "Flat"
  },
  "stage-08": {
      "name": "\u00c9tape 8",
      "date": "2026-07-11T13:15:00+0200",
      "location": "P\u00e9rigueux to Bergerac",
      "distance": 179.81545802896431,
      "up": 845.0,
      "down": -916.0,
      "type": "Flat"
  },
  "stage-09": {
      "name": "\u00c9tape 9",
      "date": "2026-07-12T13:35:00+0200",
      "location": "Malemort to Ussel",
      "distance": 184.83660693348403,
      "up": 2853.0,
      "down": -2454.0,
      "type": "Hilly"
  },
  "rest-01": {
      "name": "Rest day 1",
      "date": "2026-07-13T12:00:00+0200",
      "location": "Cantal"
  },
  "stage-10": {
      "name": "\u00c9tape 10",
      "date": "2026-07-14T13:10:00+0200",
      "location": "Aurillac to Le Lioran",
      "distance": 167.08959182785975,
      "up": 3415.0,
      "down": -2753.0,
      "type": "Mountain"
  },
  "stage-11": {
      "name": "\u00c9tape 11",
      "date": "2026-07-15T13:50:00+0200",
      "location": "Vichy to Nevers",
      "distance": 161.34401748091753,
      "up": 685.0,
      "down": -761.0,
      "type": "Flat"
  },
  "stage-12": {
      "name": "\u00c9tape 12",
      "date": "2026-07-16T13:30:00+0200",
      "location": "Circuit Nevers Magny-Cours to Chalon-sur-Sa\u00f4ne",
      "distance": 178.97187902939214,
      "up": 897.0,
      "down": -950.0,
      "type": "Flat"
  },
  "stage-13": {
      "name": "\u00c9tape 13",
      "date": "2026-07-17T13:00:00+0200",
      "location": "Dole to Belfort",
      "distance": 205.98259605484532,
      "up": 1679.0,
      "down": -1520.0,
      "type": "Lumpy"
  },
  "stage-14": {
      "name": "\u00c9tape 14",
      "date": "2026-07-18T13:10:00+0200",
      "location": "Mulhouse to Le Markstein Fellering",
      "distance": 155.5722166950234,
      "up": 3637.0,
      "down": -2677.0,
      "type": "Mountain"
  },
  "stage-15": {
      "name": "\u00c9tape 15",
      "date": "2026-07-19T13:10:00+0200",
      "location": "Champagnole to Plateau de Solaison",
      "distance": 183.76199601746876,
      "up": 3779.0,
      "down": -2827.0,
      "type": "Mountain"
  },
  "rest-02": {
      "name": "Rest day 2",
      "date": "2026-07-20T12:00:00+0200",
      "location": "Haute-Savoie"
  },
  "stage-16": {
      "name": "\u00c9tape 16",
      "date": "2026-07-21T13:00:00+0200",
      "location": "\u00c9vian-les-Bains to Thonon-les-Bains",
      "distance": 26.030045145850128,
      "up": 439.0,
      "down": -439.0,
      "type": "Individual Time Trial"
  },
  "stage-17": {
      "name": "\u00c9tape 17",
      "date": "2026-07-22T13:20:00+0200",
      "location": "Chamb\u00e9ry to Voiron",
      "distance": 174.87620758279851,
      "up": 1929.0,
      "down": -1920.0,
      "type": "Flat"
  },
  "stage-18": {
      "name": "\u00c9tape 18",
      "date": "2026-07-23T12:35:00+0200",
      "location": "Voiron to Orci\u00e8res-Merlette",
      "distance": 185.34771425915605,
      "up": 3588.0,
      "down": -1974.0,
      "type": "Mountain"
  },
  "stage-19": {
      "name": "\u00c9tape 19",
      "date": "2026-07-24T14:00:00+0200",
      "location": "Gap to Alpe d'Huez",
      "distance": 128.2248494324594,
      "up": 3303.0,
      "down": -2373.0,
      "type": "Mountain"
  },
  "stage-20": {
      "name": "\u00c9tape 20",
      "date": "2026-07-25T11:20:00+0200",
      "location": "Le Bourg d'Oisans to Alpe d'Huez",
      "distance": 171.9216750383416,
      "up": 5292.72,
      "down": -4165.720000000001,
      "type": "Mountain"
  },
  "stage-21": {
      "name": "\u00c9tape 21",
      "date": "2026-07-26T16:15:00+0200",
      "location": "Thoiry to Paris Champs-\u00c9lys\u00e9es",
      "distance": 132.52736483590132,
      "up": 645.0,
      "down": -734.0,
      "type": "Flat"
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

  if (stageKey === "stage-01") {
    etaValue += 131 * 60 * 1000;
  } else if (stageKey === "stage-16") {
    etaValue += 290 * 60 * 1000;
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
