const stages_data = {
  "stage-01": {
    name: "\u00c9tape 1",
    date: "2024-06-29T12:00:00+0200",
    location: "Florence to Rimini (Italy)",
    distance: 206.4531278796486,
    up: 3657.2400000000007,
    down: -3729.089999999997,
    type: "Hilly",
  },
  "stage-02": {
    name: "\u00c9tape 2",
    date: "2024-06-30T12:15:00+0200",
    location: "Cesenatico to Bologna (Italy)",
    distance: 198.63389770931815,
    up: 1865.5299999999988,
    down: -1812.619999999999,
    type: "Lumpy",
  },
  "stage-03": {
    name: "\u00c9tape 3",
    date: "2024-07-01T11:15:00+0200",
    location: "Piacenza to Turin (Italy)",
    distance: 230.11486307570704,
    up: 1526.039999999999,
    down: -1338.0400000000004,
    type: "Flat",
  },
  "stage-04": {
    name: "\u00c9tape 4",
    date: "2024-07-02T13:05:00+0200",
    location: "Pinerolo (Italy) to Valloire",
    distance: 139.36362934799382,
    up: 3799.1700000000033,
    down: -2798.649999999995,
    type: "Mountain",
  },
  "stage-05": {
    name: "\u00c9tape 5",
    date: "2024-07-03T13:20:00+0200",
    location: "Saint-Jean-de-Maurienne to Saint-Vulbas",
    distance: 177.23890130566122,
    up: 1022.0900000000004,
    down: -1308.7199999999991,
    type: "Flat",
  },
  "stage-06": {
    name: "\u00c9tape 6",
    date: "2024-07-04T13:35:00+0200",
    location: "M\u00e2con to Dijon",
    distance: 163.15172757836964,
    up: 949.1600000000004,
    down: -946.2500000000011,
    type: "Flat",
  },
  "stage-07": {
    name: "\u00c9tape 7",
    date: "2024-07-05T13:05:00+0200",
    location: "Nuits-Saint-Georges to Gevrey-Chambertin",
    distance: 25.22746255288768,
    up: 296.8900000000001,
    down: -274.7100000000001,
    type: "Individual Time Trial",
  },
  "stage-08": {
    name: "\u00c9tape 8",
    date: "2024-07-06T13:05:00+0200",
    location: "Semur-en-Auxois to Colombey-les-Deux-\u00c9glises",
    distance: 183.29249930965597,
    up: 2308.190000000002,
    down: -2314.4200000000014,
    type: "Lumpy",
  },
  "stage-09": {
    name: "\u00c9tape 9",
    date: "2024-07-07T13:15:00+0200",
    location: "Troyes to Troyes",
    distance: 198.70553931582816,
    up: 2017.0799999999992,
    down: -2023.0599999999977,
    type: "Lumpy",
  },
  "rest-01": {
    name: "Rest day 1",
    date: "2024-07-08T12:00:00+0200",
    location: "Orl\u00e9ans",
  },
  "stage-10": {
    name: "\u00c9tape 10",
    date: "2024-07-09T13:05:00+0200",
    location: "Orl\u00e9ans to Saint-Amand-Montrond",
    distance: 187.0476374048068,
    up: 876.1600000000009,
    down: -813.0300000000004,
    type: "Flat",
  },
  "stage-11": {
    name: "\u00c9tape 11",
    date: "2024-07-10T11:20:00+0200",
    location: "\u00c9vaux-les-Bains to <nobr>Le Lioran</nobr>",
    distance: 211.18076369893973,
    up: 4314.1500000000015,
    down: -3577.680000000002,
    type: "Hilly",
  },
  "stage-12": {
    name: "\u00c9tape 12",
    date: "2024-07-11T12:35:00+0200",
    location: "Aurillac to Villeneuve-sur-Lot",
    distance: 203.74306737220525,
    up: 2131.2299999999977,
    down: -2670.6199999999994,
    type: "Lumpy",
  },
  "stage-13": {
    name: "\u00c9tape 13",
    date: "2024-07-12T13:30:00+0200",
    location: "Agen to Pau",
    distance: 165.12150491333014,
    up: 1896.4000000000015,
    down: -1759.9299999999998,
    type: "Lumpy",
  },
  "stage-14": {
    name: "\u00c9tape 14",
    date: "2024-07-13T13:05:00+0200",
    location: "Pau to Saint-Lary-Soulan (<nobr>Pla d'Adet</nobr>)",
    distance: 151.7185610103865,
    up: 3976.1500000000024,
    down: -2503.24,
    type: "Mountain",
  },
  "stage-15": {
    name: "\u00c9tape 15",
    date: "2024-07-14T11:55:00+0200",
    location: "Loudenvielle to Plateau de Beille",
    distance: 197.9937620293742,
    up: 4796.569999999994,
    down: -4041.560000000003,
    type: "Mountain",
  },
  "rest-02": {
    name: "Rest day 2",
    date: "2024-07-15T12:00:00+0200",
    location: "Gruissan",
  },
  "stage-16": {
    name: "\u00c9tape 16",
    date: "2024-07-16T13:05:00+0200",
    location: "Gruissan to N\u00eemes",
    distance: 188.0510271894693,
    up: 1133.61,
    down: -1143.3299999999997,
    type: "Flat",
  },
  "stage-17": {
    name: "\u00c9tape 17",
    date: "2024-07-17T12:35:00+0200",
    location: "Saint-Paul-Trois-Ch\u00e2teaux to SuperD\u00e9voluy",
    distance: 177.53338979033586,
    up: 2820.9200000000023,
    down: -1407.5799999999995,
    type: "Mountain",
  },
  "stage-18": {
    name: "\u00c9tape 18",
    date: "2024-07-18T13:00:00+0200",
    location: "Gap to Barcelonnette",
    distance: 179.44922132595534,
    up: 3105.8099999999995,
    down: -2818.5199999999986,
    type: "Hilly",
  },
  "stage-19": {
    name: "\u00c9tape 19",
    date: "2024-07-19T12:20:00+0200",
    location: "Embrun to <nobr>Isola 2000</nobr>",
    distance: 144.69239044284498,
    up: 4476.379999999994,
    down: -3345.26,
    type: "Mountain",
  },
  "stage-20": {
    name: "\u00c9tape 20",
    date: "2024-07-20T13:35:00+0200",
    location: "Nice to Col de la Couillole",
    distance: 133.82864504343223,
    up: 4600.83999999999,
    down: -2982.619999999999,
    type: "Mountain",
  },
  "stage-21": {
    name: "\u00c9tape 21",
    date: "2024-07-21T14:40:00+0200",
    location: "Monaco to Nice",
    distance: 33.67044537976801,
    up: 696.4800000000004,
    down: -694.7300000000004,
    type: "Individual Time Trial",
  },
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
  const stageStart = new Date(stages_data[stageKey].date);
  let etaValue = stageStart.getTime();
  const distance = stages_data[stageKey].distance;
  switch (stages_data[stageKey].type) {
    case "Flat":
      etaValue +=
        -77.804 * Math.pow(distance, 3) +
        45444.6795 * Math.pow(distance, 2) +
        -8654157.6816 * distance +
        553605879.4001;
      break;
    case "Lumpy":
      etaValue +=
        -192.1655 * Math.pow(distance, 3) +
        106181.1413 * Math.pow(distance, 2) +
        -19407559.948 * distance +
        1188564652.9984;
      break;
    case "Hilly":
      etaValue +=
        -4481.3973 * Math.pow(distance, 2) +
        1871583.3782 * distance +
        -175344122.0155;
      break;
    case "Mountain":
      etaValue +=
        83.6297 * Math.pow(distance, 3) +
        -40482.9596 * Math.pow(distance, 2) +
        6537458.2183 * distance +
        -336862447.0355;
      break;
    case "Individual Time Trial":
      etaValue += 184768.823 * distance + 11178751.4377;
      break;
  }
  const etaText = new Date(etaValue);
  eta.textContent = `${etaText.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  })}`;
  const tz_text = document.createElement("span");
  tz_text.className = "tz";
  tz_text.textContent += `${etaText
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
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -5)
    .replace(",", "")}`;
  topElems.appendChild(stageHeader);

  Object.keys(stageInfo).forEach((key) => {
    if (!["name", "date"].includes(key)) {
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
