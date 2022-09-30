/**
 * returns last modified date of S3 object or null
 * if the object does not exist
 * @param {string} bucket
 * @param {string} key
 */
async function getS3HeadObjectDate(bucket, key) {
  // eslint-disable-next-line no-unused-vars
  const params = {
    Bucket: bucket,
    Key: key,
  };
  // simple way to ensure failure when not being mocked
  throw new Error("I'm not mocked");
}
module.exports = {
  getS3HeadObjectDate,
};
