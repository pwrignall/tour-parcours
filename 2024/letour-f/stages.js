const stages_data = {
  "stage-01": {
    "name": "\u00c9tape 1",
    "date": "2024-08-12T12:15:00+0200",
    "location": "Rotterdam to The Hague (NL)",
    "distance": 122.78260682402917,
    "up": 258.28999999999996,
    "down": -256.98999999999995,
    "type": "Flat"
  },
  "stage-02": {
    "name": "\u00c9tape 2",
    "date": "2024-08-13T09:50:00+0200",
    "location": "Dordrecht to Rotterdam (NL)",
    "distance": 69.39226632724254,
    "up": 191.89999999999998,
    "down": -190.70000000000005,
    "type": "Flat"
  },
  "stage-03": {
    "name": "\u00c9tape 3",
    "date": "2024-08-13T15:10:00+0200",
    "location": "Rotterdam to Rotterdam (NL)",
    "distance": 6.302160570517018,
    "up": 24.98,
    "down": -26.68,
    "type": "Individual Time Trial"
  },
  "stage-04": {
    "name": "\u00c9tape 4",
    "date": "2024-08-14T12:25:00+0200",
    "location": "Valkenburg (NL) to Li\u00e8ge (BE)",
    "distance": 122.69796119273879,
    "up": 1814.5800000000015,
    "down": -1825.6899999999991,
    "type": "Lumpy"
  },
  "stage-05": {
    "name": "\u00c9tape 5",
    "date": "2024-08-15T11:55:00+0200",
    "location": "Bastogne (BE) to Amn\u00e9ville",
    "distance": 152.3519035148211,
    "up": 1989.4699999999964,
    "down": -2307.8099999999986,
    "type": "Lumpy"
  },
  "stage-06": {
    "name": "\u00c9tape 6",
    "date": "2024-08-16T11:30:00+0200",
    "location": "Remiremont to Morteau",
    "distance": 159.23727020495917,
    "up": 2186.5499999999997,
    "down": -1802.3400000000013,
    "type": "Hilly"
  },
  "stage-07": {
    "name": "\u00c9tape 7",
    "date": "2024-08-17T10:30:00+0200",
    "location": "Champagnole to Le Grand-Bornand",
    "distance": 166.16843937626527,
    "up": 2880.2799999999997,
    "down": -2160.3700000000003,
    "type": "Mountain"
  },
  "stage-08": {
    "name": "\u00c9tape 8",
    "date": "2024-08-18T13:40:00+0200",
    "location": "Le Grand-Bornand to Alpe d'Huez",
    "distance": 149.96323570039732,
    "up": 3729.010000000004,
    "down": -2565.3400000000024,
    "type": "Mountain"
  }
};

const currentTime = new Date();
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
  
  if (stageKey === "stage-03") {
    etaValue += (160 * 60 * 1000);
  } else {
    etaValue += 75658.1904 * distance + 1484.9559 * elevation + -10175.2012;
  };
  const stageFinish = new Date(etaValue);
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
  stageHeader.appendChild(stageStartTz);
  topElems.appendChild(stageHeader)

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
