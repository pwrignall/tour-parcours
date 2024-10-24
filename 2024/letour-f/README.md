# Tour de France Femmes stage info

This project continues from my original TdF2024 one, adapting for the Tour de Frances Femmes avec Zwift!

## Why?

I wanted to create a spoiler-free reference of this year's Tour de France stages, so I could see all on one page what's coming up, what are good days to catch the longer highlights, that kind of thing.

This was meant to be a starting point to develop more features such as those I've got listed under "improvements?" but let's see how that goes.

## How?

Fumbling around in the dark with my basic web skills. Copilot assisting in a few places.

It was also an opportunity to use D3.js to create the elevation profiles. Copilot helped with this.

I got the stage profiles as GPX files from https://www.cyclingstage.com/tour-de-france-2024-route/ and have a Python script that parsed those, downsampled the data points and calculated distances, ups and downs. I will make that code more generic and add it to a separate repository.

## Improvements?

- Click on a profile to see more details about that stage like you see on the official site such as:
  - A map and info on specific climbs along the way
  - Distance markers of key points, plus a toggle to invert the distance (distance to go instead of distance gone)
  - A tidy, compact view of the stage results and top n GC standings each day
- Animate the D3 bits
