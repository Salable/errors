import {HTTPClientException, HTTPServerException} from '../';

describe('HTTP Exception', () => {
  describe('Client Exception', () => {
    test('Should set properties correctly', () => {
      const errorPayload = {
        message: 'Unable to connect to account',
        description:
          'Your changes were saved, but we could not connect your account due to a technical issue on our end. Please try connecting again.',
      };
      const error = new HTTPClientException('NOT_FOUND', errorPayload.message, {description: errorPayload.description});
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe(errorPayload.message);
      expect(error.description).toBe(errorPayload.description);
    });
    it('Should set default values correctly', () => {
      const message = 'Bad request';
      const error = new HTTPClientException('BAD_REQUEST', message);
      expect(error.statusCode).toBe(400);
      expect(error.message).toBe(message);
      expect(error.description).toBeUndefined();
    });
  });
  describe('Server Exception', () => {
    test('Should set properties correctly', () => {
      const errorPayload = {
        message: 'Unable to connect to network',
        description:
          'No changes were made, but we could not connect your account due to a technical issue on our end. Please try connecting again.',
      };
      const error = new HTTPServerException('INTERNAL_SERVER_ERROR', errorPayload.message, {
        description: errorPayload.description,
      });
      expect(error.statusCode).toBe(500);
      expect(error.message).toBe(errorPayload.message);
      expect(error.description).toBe(errorPayload.description);
    });
    it('Should set default values correctly', () => {
      const message = 'Internal server error';
      const error = new HTTPServerException('INTERNAL_SERVER_ERROR', message);
      expect(error.statusCode).toBe(500);
      expect(error.message).toBe(message);
      expect(error.description).toBeUndefined();
    });
  });
});
