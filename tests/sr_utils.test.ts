/* eslint-disable no-redeclare */
/* eslint-disable no-console */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
import {
  afterEach,
  beforeEach,
  assert,
  describe,
  test,
  it,
  expect,
  vi,
} from 'vitest';

// jest.setTimeout(2000000);

import { config } from 'dotenv';
// set environment variables
config();

const uploadDate = new Date();

//@ts-ignore
import { getS3HeadObjectDate } from '../src/myAWS';
vi.mock('@/myAWS', () => {
  return {
    getS3HeadObjectDate: vi.fn().mockImplementation((bucket, key) => {
      return uploadDate;
    }),
  };
});

//@ts-ignore
import { getReportOrMappingFiles } from '../src/sr_utils';

describe('Test mapping', () => {
  beforeEach(() => {});
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('getS3HeadObjectDate mock working', async () => {
    expect.assertions(1);
    // mocking works here
    var dateTest = await getS3HeadObjectDate();
    console.log('mocked Test date: ' + dateTest);

    // here mocking the import works
    expect(dateTest).toBeDefined();
  });

  test('getReportOrMappingFiles return mapping', async () => {
    expect.assertions(1);

    // here mocking the import fails
    const { mappingFiles } = await getReportOrMappingFiles();
    expect(mappingFiles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: 'audience_mapping.csv',
        }),
      ])
    );
  });
});
