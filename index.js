const { getReportOrMappingFiles } = require('./src/sr_utils');

async function getMapping() {
  const mappingFiles = await getReportOrMappingFiles();
  return mappingFiles;
}

function main() {
  const mapping = getMapping();
  console.log(mapping);
}

main();
