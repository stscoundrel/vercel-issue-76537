import { createMocks } from 'node-mocks-http'
import previewHandler from 'pages/api/preview'

describe('API preview route', () => {
  test('Should error on incorrect secret', async () => {
    // Add non-matching secret.
    process.env.WP_PREVIEW_SECRET = 321

    const { req, res } = createMocks({
      method: 'GET',
      url: '/api/preview/',
      query: {
        secret: '123',
      },
    });

    await previewHandler(req, res);

    const data = res._getJSONData() // eslint-disable-line
    expect(res.statusCode).toBe(401)
    expect(data.message).toBe('Invalid request - missing or incorrect secret')
  })

  test('Should error on missing slug', async () => {
    // Make secret match query.
    process.env.WP_PREVIEW_SECRET = 123

    const { req, res } = createMocks({
      method: 'GET',
      url: '/api/preview/',
      query: {
        secret: '123',
      },
    });

    await previewHandler(req, res);

    const data = res._getJSONData() // eslint-disable-line
    expect(res.statusCode).toBe(401)
    expect(data.message).toBe('Invalid request - missing preview data')
  })
})
