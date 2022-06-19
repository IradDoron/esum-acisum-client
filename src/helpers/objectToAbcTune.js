function objectToAbcTune(abcData) {
  let abcTuneStr = '';

  for (let field in abcData?.header) {
    abcTuneStr += `${field}: ${abcData.header[field]}\n`;
  }
  abcTuneStr += abcData?.body;

  return abcTuneStr ? abcTuneStr : null;
}

export default objectToAbcTune;
