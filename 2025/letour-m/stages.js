const stages_data = {
  "stage-01": {
    name: "\u00c9tape 1",
    date: "2025-07-05T13:10:00+0200",
    location: "Lille M\u00e9tropole to Lille M\u00e9tropole",
    distance: 184.68385577373928,
    up: 1012.0,
    down: -1030.0,
    type: "Flat",
  },
  "stage-02": {
    name: "\u00c9tape 2",
    date: "2025-07-06T12:15:00+0200",
    location: "Lauwin-Planque to Boulogne-sur-Mer",
    distance: 208.8996412423296,
    up: 1905.0,
    down: -1878.0,
    type: "Lumpy",
  },
  "stage-03": {
    name: "\u00c9tape 3",
    date: "2025-07-07T13:10:00+0200",
    location: "Valenciennes to Dunkerque",
    distance: 177.82158504103506,
    up: 768.0,
    down: -783.0,
    type: "Flat",
  },
  "stage-04": {
    name: "\u00c9tape 4",
    date: "2025-07-08T13:15:00+0200",
    location: "Amiens M\u00e9tropole to Rouen",
    distance: 173.78588865160285,
    up: 1659.0,
    down: -1677.0,
    type: "Lumpy",
  },
  "stage-05": {
    name: "\u00c9tape 5",
    date: "2025-07-09T13:10:00+0200",
    location: "Caen to Caen",
    distance: 32.99563930757752,
    up: 182.0,
    down: -179.0,
    type: "Individual Time Trial",
  },
  "stage-06": {
    name: "\u00c9tape 6",
    date: "2025-07-10T12:35:00+0200",
    location: "Bayeux to Vire Normandie",
    distance: 202.15058399157738,
    up: 2907.0,
    down: -2762.0,
    type: "Hilly",
  },
  "stage-07": {
    name: "\u00c9tape 7",
    date: "2025-07-11T12:10:00+0200",
    location: "Saint-Malo to M\u00fbr-de-Bretagne Guerl\u00e9dan",
    distance: 195.63758522497415,
    up: 2024.0,
    down: -1781.0,
    type: "Hilly",
  },
  "stage-08": {
    name: "\u00c9tape 8",
    date: "2025-07-12T13:10:00+0200",
    location: "Saint-M\u00e9en-le-Grand to Laval Espace Mayenne",
    distance: 171.4407636925475,
    up: 1179.0,
    down: -1168.0,
    type: "Flat",
  },
  "stage-09": {
    name: "\u00c9tape 9",
    date: "2025-07-13T13:10:00+0200",
    location: "Chinon to Ch\u00e2teauroux",
    distance: 173.7050574443343,
    up: 942.0,
    down: -864.0,
    type: "Flat",
  },
  "stage-10": {
    name: "\u00c9tape 10",
    date: "2025-07-14T13:10:00+0200",
    location: "Ennezat to Le Mont-Dore Puy de Sancy",
    distance: 165.44947620063323,
    up: 4312.0,
    down: -3315.0,
    type: "Medium Mountain",
  },
  "rest-01": {
    name: "Rest day 1",
    date: "2025-07-15T12:00:00+0200",
    location: "Toulouse",
  },
  "stage-11": {
    name: "\u00c9tape 11",
    date: "2025-07-16T13:15:00+0200",
    location: "Toulouse to Toulouse",
    distance: 154.17334862462755,
    up: 1568.0,
    down: -1567.0,
    type: "Flat",
  },
  "stage-12": {
    name: "\u00c9tape 12",
    date: "2025-07-17T13:10:00+0200",
    location: "Auch to Hautacam",
    distance: 180.42160905638173,
    up: 3783.0,
    down: -2404.0,
    type: "Mountain",
  },
  "stage-13": {
    name: "\u00c9tape 13",
    date: "2025-07-18T13:10:00+0200",
    location: "Loudenvielle to Peyragudes",
    distance: 10.915275503913488,
    up: 645.0,
    down: -43.0,
    type: "Individual Time Trial",
  },
  "stage-14": {
    name: "\u00c9tape 14",
    date: "2025-07-19T12:00:00+0200",
    location: "Pau to Luchon-Superbagn\u00e8res",
    distance: 182.43289628663186,
    up: 5020.0,
    down: -3412.0,
    type: "Mountain",
  },
  "stage-15": {
    name: "\u00c9tape 15",
    date: "2025-07-20T13:20:00+0200",
    location: "Muret to Carcassonne",
    distance: 168.821416306688,
    up: 2299.0,
    down: -2393.0,
    type: "Hilly",
  },
  "rest-02": {
    name: "Rest day 2",
    date: "2025-07-21T12:00:00+0200",
    location: "Montpellier",
  },
  "stage-16": {
    name: "\u00c9tape 16",
    date: "2025-07-22T12:10:00+0200",
    location: "Montpellier to Mont Ventoux",
    distance: 171.06110991403503,
    up: 2858.0,
    down: -1027.0,
    type: "Mountain",
  },
  "stage-17": {
    name: "\u00c9tape 17",
    date: "2025-07-23T13:35:00+0200",
    location: "Boll\u00e8ne to Valence",
    distance: 160.55519365018728,
    up: 1592.0,
    down: -1511.0,
    type: "Lumpy",
  },
  "stage-18": {
    name: "\u00c9tape 18",
    date: "2025-07-24T12:10:00+0200",
    location: "Vif to Courchevel Col de la Loze",
    distance: 172.12417200053937,
    up: 5652.0,
    down: -3645.0,
    type: "Mountain",
  },
  "stage-19": {
    name: "\u00c9tape 19",
    date: "2025-07-25T13:30:00+0200",
    location: "Albertville to La Plagne",
    distance: 130.29675348913378,
    up: 4610.0,
    down: -2924.0,
    type: "Mountain",
  },
  "stage-20": {
    name: "\u00c9tape 20",
    date: "2025-07-26T12:05:00+0200",
    location: "Nantua to Pontarlier",
    distance: 184.91252410120575,
    up: 2930.0,
    down: -2637.0,
    type: "Hilly",
  },
  "stage-21": {
    name: "\u00c9tape 21",
    date: "2025-07-27T16:10:00+0200",
    location: "Mantes-la-Ville to Paris Champs-\u00c9lys\u00e9es",
    distance: 131.49099909352046,
    up: 830.0,
    down: -823.0,
    type: "Flat",
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
