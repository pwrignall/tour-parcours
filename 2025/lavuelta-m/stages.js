const stages_data = {
  "stage-01": {
    "name": "Etapa 1",
    "date": "2025-08-23T12:55:00+0200",
    "location": "Torino (IT) - Reggia di Venaria to Novara (IT)",
    "distance": 187.91455680373082,
    "up": 954.0,
    "down": -1027.0,
    "type": "Flat"
  },
  "stage-02": {
    "name": "Etapa 2",
    "date": "2025-08-24T13:35:00+0200",
    "location": "Alba (IT) to Limone Piemonte (IT)",
    "distance": 160.41235279050193,
    "up": 1682.0,
    "down": -475.0,
    "type": "Lumpy"
  },
  "stage-03": {
    "name": "Etapa 3",
    "date": "2025-08-25T14:20:00+0200",
    "location": "San Maurizio Canavese (IT) to Ceres, IT",
    "distance": 135.01482022936935,
    "up": 1668.0,
    "down": -1306.0,
    "type": "Medium Mountain"
  },
  "stage-04": {
    "name": "Etapa 4",
    "date": "2025-08-26T14:35:00+0200",
    "location": "Susa (IT) to Voiron (FR)",
    "distance": 207.09524189142334,
    "up": 2567.4300000000003,
    "down": -2997.4299999999994,
    "type": "Medium Mountain"
  },
  "stage-05": {
    "name": "Etapa 5",
    "date": "2025-08-27T16:37:00+0200",
    "location": "Figueres to Figueres",
    "distance": 24.147018990107803,
    "up": 12.0,
    "down": -50.0,
    "type": "Team Time Trial"
  },
  "stage-06": {
    "name": "Etapa 6",
    "date": "2025-08-28T12:35:00+0200",
    "location": "Olot to Pal. Andorra",
    "distance": 170.57476337596248,
    "up": 3115.0,
    "down": -1808.0,
    "type": "Mountain"
  },
  "stage-07": {
    "name": "Etapa 7",
    "date": "2025-08-29T11:55:00+0200",
    "location": "Andorra la Vella to Cerler.Huesca La Magia",
    "distance": 187.9151912107912,
    "up": 3843.0,
    "down": -2742.0,
    "type": "Mountain"
  },
  "stage-08": {
    "name": "Etapa 8",
    "date": "2025-08-30T13:40:00+0200",
    "location": "Monz\u00f3n Templario to Zaragoza",
    "distance": 163.91107158565083,
    "up": 854.0,
    "down": -939.0,
    "type": "Flat"
  },
  "stage-09": {
    "name": "Etapa 9",
    "date": "2025-08-31T12:20:00+0200",
    "location": "Alfaro to Estaci\u00f3n de esqu\u00ed de Valdezcaray",
    "distance": 196.5586433783553,
    "up": 2771.0,
    "down": -1538.0,
    "type": "Hilly"
  },
  "rest-01": {
    "name": "Rest day 1",
    "date": "2025-09-01T12:00:00+0200",
    "location": "Pamplona"
  },
  "stage-10": {
    "name": "Etapa 10",
    "date": "2025-09-02T12:55:00+0200",
    "location": "Parque de la Naturaleza Sendaviva to El Ferial Larra Belagua",
    "distance": 175.23661471412342,
    "up": 2539.0,
    "down": -1227.0,
    "type": "Flat"
  },
  "stage-11": {
    "name": "Etapa 11",
    "date": "2025-09-03T13:30:00+0200",
    "location": "Bilbao to Bilbao",
    "distance": 157.79563598428817,
    "up": 2583.0,
    "down": -2564.0,
    "type": "Hilly"
  },
  "stage-12": {
    "name": "Etapa 12",
    "date": "2025-09-04T14:00:00+0200",
    "location": "Laredo to Los Corrales de Buelna",
    "distance": 145.41844596275118,
    "up": 2007.0,
    "down": -1948.0,
    "type": "Medium Mountain"
  },
  "stage-13": {
    "name": "Etapa 13",
    "date": "2025-09-05T11:50:00+0200",
    "location": "Cabez\u00f3n de la Sal to L'Angliru",
    "distance": 202.98234821362558,
    "up": 3294.0,
    "down": -1848.0,
    "type": "Mountain"
  },
  "stage-14": {
    "name": "Etapa 14",
    "date": "2025-09-06T13:30:00+0200",
    "location": "Avil\u00e9s to La Farrapona. Lagos de Somiedo",
    "distance": 135.98292395168755,
    "up": 3620.0,
    "down": -1934.0,
    "type": "Mountain"
  },
  "stage-15": {
    "name": "Etapa 15",
    "date": "2025-09-07T13:05:00+0200",
    "location": "A Veiga/Vegadeo to Monforte de Lemos",
    "distance": "0",
    "up": "0",
    "down": "0",
    "type": "Medium Mountain"
  },
  "rest-02": {
    "name": "Rest day 2",
    "date": "2025-09-08T12:00:00+0200",
    "location": "Pontevedra"
  },
  "stage-16": {
    "name": "Etapa 16",
    "date": "2025-09-09T13:05:00+0200",
    "location": "Poio to Mos.Castro de Herville",
    "distance": "0",
    "up": "0",
    "down": "0",
    "type": "Medium Mountain"
  },
  "stage-17": {
    "name": "Etapa 17",
    "date": "2025-09-10T13:30:00+0200",
    "location": "O Barco de Valdeorras to Alto de El Morredero",
    "distance": "0",
    "up": "0",
    "down": "0",
    "type": "Medium Mountain"
  },
  "stage-18": {
    "name": "Etapa 18",
    "date": "2025-09-11T13:12:00+0200",
    "location": "Valladolid to Valladolid",
    "distance": "0",
    "up": "0",
    "down": "0",
    "type": "Individual Time Trial"
  },
  "stage-19": {
    "name": "Etapa 19",
    "date": "2025-09-12T13:50:00+0200",
    "location": "Rueda to Guijuelo",
    "distance": "0",
    "up": "0",
    "down": "0",
    "type": "Flat"
  },
  "stage-20": {
    "name": "Etapa 20",
    "date": "2025-09-13T13:00:00+0200",
    "location": "Robledo de Chavela to Bola del Mundo. Puerto de Navacerrada",
    "distance": "0",
    "up": "0",
    "down": "0",
    "type": "Mountain"
  },
  "stage-21": {
    "name": "Etapa 21",
    "date": "2025-09-14T16:40:00+0200",
    "location": "Alalpardo to Madrid",
    "distance": "0",
    "up": "0",
    "down": "0",
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

  if (stageKey === "stage-05") {
    etaValue += 113 * 60 * 1000;
  } else if (stageKey === "stage-18") {
    etaValue += 89 * 60 * 1000;
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
