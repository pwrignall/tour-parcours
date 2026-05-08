const stages_data = {
  "stage-01": {
    "name": "Tappa 1",
    "date": "2026-05-08T14:00:00+0200",
    "location": "Nesebar (BG) to Burgas (BG)",
    "distance": 146.5998430738015,
    "up": 596.2999999999998,
    "down": -572.72,
    "type": "Flat"
  },
  "stage-02": {
    "name": "Tappa 2",
    "date": "2026-05-09T12:05:00+0200",
    "location": "Burgas (BG) to Veliko Tarnovo (BG)",
    "distance": 221.162460999689,
    "up": 2162.7000000000003,
    "down": -2032.5299999999997,
    "type": "Hilly"
  },
  "stage-03": {
    "name": "Tappa 3",
    "date": "2026-05-10T13:15:00+0200",
    "location": "Plovdiv (BG) to Sofia (BG)",
    "distance": 175.0082417853649,
    "up": 1312.9600000000005,
    "down": -930.5000000000001,
    "type": "Lumpy"
  },
  "rest-01": {
    "name": "Rest day 1",
    "date": "2026-05-11T12:00:00+0200",
    "location": "Transition"
  },
  "stage-04": {
    "name": "Tappa 4",
    "date": "2026-05-12T14:00:00+0200",
    "location": "Catanzaro to Cosenza",
    "distance": 138.35004189750464,
    "up": 1361.62,
    "down": -1210.58,
    "type": "Lumpy"
  },
  "stage-05": {
    "name": "Tappa 5",
    "date": "2026-05-13T12:25:00+0200",
    "location": "Praia a Mare to Potenza",
    "distance": 203.38800601069738,
    "up": 3475.7599999999998,
    "down": -2779.460000000002,
    "type": "Hilly"
  },
  "stage-06": {
    "name": "Tappa 6",
    "date": "2026-05-14T14:05:00+0200",
    "location": "Paestum to Napoli",
    "distance": 141.97817483337778,
    "up": 423.9900000000001,
    "down": -400.84000000000003,
    "type": "Flat"
  },
  "stage-07": {
    "name": "Tappa 7",
    "date": "2026-05-15T10:55:00+0200",
    "location": "Formia to Blockhaus",
    "distance": 244.07216440019144,
    "up": 4141.930000000002,
    "down": -2517.2199999999993,
    "type": "Mountain"
  },
  "stage-08": {
    "name": "Tappa 8",
    "date": "2026-05-16T13:35:00+0200",
    "location": "Chieti to Fermo",
    "distance": 155.5854684596053,
    "up": 1574.8300000000002,
    "down": -1340.9799999999996,
    "type": "Lumpy"
  },
  "stage-09": {
    "name": "Tappa 9",
    "date": "2026-05-17T12:50:00+0200",
    "location": "Cervia to Corno alle Scale",
    "distance": 183.6175197501924,
    "up": 1942.0200000000004,
    "down": -478.7099999999999,
    "type": "Hilly"
  },
  "rest-02": {
    "name": "Rest day 2",
    "date": "2026-05-18T12:00:00+0200",
    "location": "Corno alle Scale"
  },
  "stage-10": {
    "name": "Tappa 10",
    "date": "2026-05-19T13:15:00+0200",
    "location": "Viareggio to Massa",
    "distance": 41.972469454770625,
    "up": 14.770000000000001,
    "down": -13.520000000000001,
    "type": "Individual Time Trial"
  },
  "stage-11": {
    "name": "Tappa 11",
    "date": "2026-05-20T12:30:00+0200",
    "location": "Porcari (Paper District) to Chiavari",
    "distance": 194.5910932291673,
    "up": 2678.6599999999994,
    "down": -2681.7399999999993,
    "type": "Hilly"
  },
  "stage-12": {
    "name": "Tappa 12",
    "date": "2026-05-21T13:15:00+0200",
    "location": "Imperia to Novi Ligure",
    "distance": 175.12101299932147,
    "up": 2215.8900000000017,
    "down": -2038.4100000000012,
    "type": "Flat"
  },
  "stage-13": {
    "name": "Tappa 13",
    "date": "2026-05-22T12:55:00+0200",
    "location": "Alessandria to Verbania",
    "distance": 188.84853809694857,
    "up": 1064.13,
    "down": -955.35,
    "type": "Flat"
  },
  "stage-14": {
    "name": "Tappa 14",
    "date": "2026-05-23T13:05:00+0200",
    "location": "Aosta to Pila",
    "distance": 132.779859186732,
    "up": 4140.850000000001,
    "down": -2942.6399999999994,
    "type": "Mountain"
  },
  "stage-15": {
    "name": "Tappa 15",
    "date": "2026-05-24T13:55:00+0200",
    "location": "Voghera to Milano",
    "distance": 156.53869717636155,
    "up": 154.63999999999993,
    "down": -116.50999999999993,
    "type": "Flat"
  },
  "rest-03": {
    "name": "Rest day 3",
    "date": "2026-05-25T12:00:00+0200",
    "location": "Milano"
  },
  "stage-16": {
    "name": "Tappa 16",
    "date": "2026-05-26T14:00:00+0200",
    "location": "Bellinzona to Car\u00ec",
    "distance": 113.07690462554866,
    "up": 2923.9399999999982,
    "down": -1512.5400000000006,
    "type": "Mountain"
  },
  "stage-17": {
    "name": "Tappa 17",
    "date": "2026-05-27T12:20:00+0200",
    "location": "Cassano d\u2019Adda to Andalo",
    "distance": 201.26623300764962,
    "up": 3102.04,
    "down": -2230.2999999999993,
    "type": "Hilly"
  },
  "stage-18": {
    "name": "Tappa 18",
    "date": "2026-05-28T13:30:00+0200",
    "location": "Fai della Paganella to Pieve di Soligo",
    "distance": 168.12733431185003,
    "up": 1682.9399999999998,
    "down": -1826.9599999999996,
    "type": "Lumpy"
  },
  "stage-19": {
    "name": "Tappa 19",
    "date": "2026-05-29T12:45:00+0200",
    "location": "Feltre to Alleghe",
    "distance": 150.82453982553562,
    "up": 4894.630000000002,
    "down": -3757.26,
    "type": "Mountain"
  },
  "stage-20": {
    "name": "Tappa 20",
    "date": "2026-05-30T11:00:00+0200",
    "location": "Gemona del Friuli to Piancavallo",
    "distance": 200.2104985738982,
    "up": 3845.8899999999985,
    "down": -2783.05,
    "type": "Mountain"
  },
  "stage-21": {
    "name": "Tappa 21",
    "date": "2026-05-31T15:45:00+0200",
    "location": "Roma to Roma",
    "distance": 131.12123447498257,
    "up": 595.5500000000005,
    "down": -589.9100000000001,
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

  if (stageKey === "stage-10") {
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
