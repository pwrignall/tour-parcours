const stages_data = {
  "stage-01": {
    name: "Tappa 1",
    date: "2025-05-09T13:30:00+0200",
    location: "Durr\u00ebs to Tiran\u00eb (AL)",
    distance: 159.8545136783667,
    up: 1792.9200000000014,
    down: -1685.4999999999998,
    type: "Hilly",
  },
  "stage-02": {
    name: "Tappa 2",
    date: "2025-05-10T13:55:00+0200",
    location: "Tiran\u00eb to Tiran\u00eb (AL)",
    distance: 13.764004229722548,
    up: 103.7,
    down: -106.13,
    type: "Individual Time Trial",
  },
  "stage-03": {
    name: "Tappa 3",
    date: "2025-05-11T13:25:00+0200",
    location: "Vlor\u00eb to Vlor\u00eb (AL)",
    distance: 159.39951602301642,
    up: 2882.9299999999994,
    down: -2888.56,
    type: "Medium Mountain",
  },
  "rest-01": {
    name: "Rest day 1",
    date: "2025-05-12T12:00:00Z",
    location: "Albania to Italy",
  },
  "stage-04": {
    name: "Tappa 4",
    date: "2025-05-13T13:05:00+0200",
    location: "Alberobello (Pietramadre) to Lecce",
    distance: 188.6768729388924,
    up: 790.4000000000002,
    down: -1190.1899999999991,
    type: "Flat",
  },
  "stage-05": {
    name: "Tappa 5",
    date: "2025-05-14T13:50:00+0200",
    location: "Ceglie Messapica to Matera",
    distance: 151.36791789499048,
    up: 1586.9499999999998,
    down: -1467.4299999999992,
    type: "Lumpy",
  },
  "stage-06": {
    name: "Tappa 6",
    date: "2025-05-15T11:50:00+0200",
    location: "Potenza to Napoli",
    distance: 225.87538030585702,
    up: 2546.3699999999994,
    down: -3456.2699999999995,
    type: "Hilly",
  },
  "stage-07": {
    name: "Tappa 7",
    date: "2025-05-16T12:55:00+0200",
    location: "Castel di Sangro to Tagliacozzo",
    distance: 168.1034492203248,
    up: 3391.1899999999964,
    down: -2783.3499999999976,
    type: "Mountain",
  },
  "stage-08": {
    name: "Tappa 8",
    date: "2025-05-17T12:25:00+0200",
    location: "Giulianova to Castelraimondo",
    distance: 197.0024619667114,
    up: 3755.2100000000014,
    down: -3460.0400000000045,
    type: "Medium Mountain",
  },
  "stage-09": {
    name: "Tappa 9",
    date: "2025-05-18T13:05:00+0200",
    location: "Gubbio to Siena",
    distance: 180.40417535197028,
    up: 2597.4800000000005,
    down: -2741.26,
    type: "Lumpy",
  },
  "rest-02": {
    name: "Rest day 2",
    date: "2025-05-19T12:00:00Z",
    location: "Toscana",
  },
  "stage-10": {
    name: "Tappa 10",
    date: "2025-05-20T13:15:00+0200",
    location: "Lucca to Pisa",
    distance: 28.673470143659,
    up: 105.53999999999999,
    down: -119.85000000000001,
    type: "Individual Time Trial",
  },
  "stage-11": {
    name: "Tappa 11",
    date: "2025-05-21T12:20:00+0200",
    location: "Viareggio to Castelnova ne' Monti",
    distance: 186.0667282371727,
    up: 3567.5399999999963,
    down: -2861.3000000000025,
    type: "Medium Mountain",
  },
  "stage-12": {
    name: "Tappa 12",
    date: "2025-05-22T13:25:00+0200",
    location: "Modena to Viadana (Oglio-Po)",
    distance: 172.06680069502735,
    up: 1465.61,
    down: -1484.2599999999982,
    type: "Lumpy",
  },
  "stage-13": {
    name: "Tappa 13",
    date: "2025-05-23T13:05:00+0200",
    location: "Rovigo to Vicenza",
    distance: 180.20140474473016,
    up: 1484.8299999999992,
    down: -1370.2899999999995,
    type: "Lumpy",
  },
  "stage-14": {
    name: "Tappa 14",
    date: "2025-05-24T12:55:00+0200",
    location: "Treviso to Nova Gorica (SI)",
    distance: 191.66448207522166,
    up: 880.3,
    down: -809.7399999999996,
    type: "Flat",
  },
  "stage-15": {
    name: "Tappa 15",
    date: "2025-05-25T11:35:00+0200",
    location: "Fiume Veneto to Asiago",
    distance: 219.3317536624193,
    up: 3699.4799999999996,
    down: -2726.119999999996,
    type: "Mountain",
  },
  "rest-03": {
    name: "Rest day 3",
    date: "2025-05-26T12:00:00Z",
    location: "Veneto",
  },
  "stage-16": {
    name: "Tappa 16",
    date: "2025-05-27T11:35:00+0200",
    location: "Piazzola sul Brenta to San Valentino (Brentonico)",
    distance: 203.35441406001698,
    up: 4703.8099999999995,
    down: -3420.81,
    type: "Mountain",
  },
  "stage-17": {
    name: "Tappa 17",
    date: "2025-05-28T13:00:00+0200",
    location: "San Michele all'Adige (Fondazione Edmund Mach) to Bormio",
    distance: 154.911840520949,
    up: 3715.090000000002,
    down: -2726.2100000000037,
    type: "Mountain",
  },
  "stage-18": {
    name: "Tappa 18",
    date: "2025-05-29T14:00:00+0200",
    location: "Morbegno to Cesano Maderno",
    distance: 143.8576081451113,
    up: 1644.5900000000015,
    down: -1665.7600000000002,
    type: "Lumpy",
  },
  "stage-19": {
    name: "Tappa 19",
    date: "2025-05-30T12:30:00+0200",
    location: "Biella to Champoluc",
    distance: 165.5847439796672,
    up: 4892.860000000007,
    down: -3698.7400000000016,
    type: "Mountain",
  },
  "stage-20": {
    name: "Tappa 20",
    date: "2025-05-31T10:50:00+0200",
    location: "Verr\u00e8s - Sestri\u00e8re (Vialattea)",
    distance: 204.57924902271694,
    up: 4299.599999999992,
    down: -2622.09,
    type: "Mountain",
  },
  "stage-21": {
    name: "Tappa 21",
    date: "2025-06-01T15:25:00+0200",
    location: "Roma to Roma",
    distance: 143.93379068038587,
    up: 798.179999999999,
    down: -803.64,
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

  if (stageKey === "stage-02") {
    etaValue += 199 * 60 * 1000;
  } else if (stageKey === "stage-10") {
    etaValue += 239 * 60 * 1000;
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
