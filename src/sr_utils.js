const { getS3HeadObjectDate } = require('./myAWS');

const getReportOrMappingFiles = async () => {
  var bucket = 'my_bucket',
    folder = '/somefolder',
    uploadDateTime = await getS3HeadObjectDate(
      bucket,
      folder + '/upload_success'
    );
  if (!uploadDateTime) {
    throw new Error('unable to read upload_success');
  }
  return { mappingFiles: [{ file: 'audience_mapping.csv' }] };
};

module.exports = {
  getReportOrMappingFiles,
};
