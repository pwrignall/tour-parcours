const stages_data = {
  "stage-01": {
    name: "\u00c9tape 1",
    date: "2026-08-01T14:15:00+0200",
    location: "Lausanne to Lausanne (CH)",
    distance: 138.27978485308364,
    up: 1152.0,
    down: -1267.0,
    type: "Flat",
  },
  "stage-02": {
    name: "\u00c9tape 2",
    date: "2026-08-02T14:20:00+0200",
    location: "Aigle to Gen\u00e8ve (CH)",
    distance: 150.79968404965274,
    up: 1259.0,
    down: -1265.0,
    type: "Flat",
  },
  "stage-03": {
    name: "\u00c9tape 3",
    date: "2026-08-03T13:25:00+0200",
    location: "Gen\u00e8ve (CH) to Poligny (FR)",
    distance: 157.74073288373378,
    up: 2025.0,
    down: -2152.0,
    type: "Hilly",
  },
  "stage-04": {
    name: "\u00c9tape 4",
    date: "2026-08-04T14:34:00+0200",
    location: "Gevrey-Chambertin to Dijon",
    distance: 20.989686185122736,
    up: 199.0,
    down: -224.0,
    type: "Individual Time Trial",
  },
  "stage-05": {
    name: "\u00c9tape 5",
    date: "2026-08-05T13:45:00+0200",
    location: "M\u00e2con to Belleville-en-Beaujolais",
    distance: 139.82661706471796,
    up: 2466.0,
    down: -2474.0,
    type: "Hilly",
  },
  "stage-06": {
    name: "\u00c9tape 6",
    date: "2026-08-06T13:35:00+0200",
    location: "Montbrison to Tournon-sur-Rh\u00f4ne",
    distance: 153.8097792227476,
    up: 2221.0,
    down: -2479.0,
    type: "Hilly",
  },
  "stage-07": {
    name: "\u00c9tape 7",
    date: "2026-08-07T12:50:00+0200",
    location: "La Voulte-sur-Rh\u00f4ne to Mont Ventoux",
    distance: 145.01585474577553,
    up: 3067.0,
    down: -1288.0,
    type: "Mountain",
  },
  "stage-08": {
    name: "\u00c9tape 8",
    date: "2026-08-08T13:40:00+0200",
    location: "Sisteron to Nice",
    distance: 176.2426867823019,
    up: 1299.0,
    down: -1816.0,
    type: "Flat",
  },
  "stage-09": {
    name: "\u00c9tape 9",
    date: "2026-08-09T16:05:00+0200",
    location: "Nice to Nice",
    distance: 99.88364475199306,
    up: 2005.0,
    down: -2014.0,
    type: "Hilly",
  },
};

const currentTime = new Date();
const firstStageStart = new Date(stages_data["stage-01"].date);
const postStageDate = new Date(
  stages_data[
    Object.keys(stages_data)[Object.keys(stages_data).length - 1]
  ].date
);
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
    etaValue += 201 * 60 * 1000;
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
