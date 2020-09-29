import metro from './data.json'

export default {
  getMetroLineByStationName(stationName) {
    const metroLine = metro.lines
    for (let l = 0; l < metroLine.length; l++) {
      const lineStations = metroLine[l].stations
      for (let s = 0; s < lineStations.length; s++) {
        if (lineStations[s].name.toLowerCase() === stationName.toLowerCase()) {
          return metroLine[l]
        }
      }
    }
  },

  getMetroLineColorByStationName(station) {
    if (this.getMetroLineByStationName(stationName)) {
      return this.getMetroLineByStationName(stationName).hex_color
    }

    return undefined
  },
}
