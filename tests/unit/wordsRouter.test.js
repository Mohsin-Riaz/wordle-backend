const request = require('supertest');
const { app, server } = require('../../src/index'); // Import the app from your root index.js
const { rateLimitedRequest } = require('../helpers/apiHelper');

describe('API Routes', () => {
    // CHECK IF ABLE TO GET WORD
    it('GET /api/getword should return a word', async () => {
        const response = await rateLimitedRequest(() =>
            request(app).get('/api/getword')
        );

        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.word).toHaveLength(6); // Checks if a six letter word was received
    });

    // //CHECK IF GET WORD FAILED
    // it('GET /api/getword should not return a word', async () => {
    //     const response = await request(app).get('/api/getword');
    //     expect(response.status).not.toBe(404);
    // });

    // //CHECK IF AUTHORIZED
    // it('GET /api/getword should not return a word', async () => {
    //     const response = await request(app).get('/api/getword');
    //     expect(response.status).not.toBe(403);
    // });

    // CHECK If WORD EXISTS
    it('GET /api/checkword should return correct word data', async () => {
        const response = await rateLimitedRequest(() =>
            request(app).get('/api/checkword?word=turtle')
        );

        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(Array.isArray(response.body.results)).toBe(true);
    });

    // CHECK FOR NO WORD IN INPUT PARAMETER
    it('GET /api/checkword should not return word details for non-existant word parameter', async () => {
        const response = await rateLimitedRequest(() =>
            request(app).get('/api/checkword')
        );
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Word parameter is required');
    });

    // CHECK NON EXISTANT WORD
    it('GET /api/checkword?word=NOTAWORD should not return word details for non-existant word', async () => {
        const response = await rateLimitedRequest(() =>
            request(app).get('/api/checkword?word=NOTAWORD')
        );
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Word not found');
    });

    // CHECK FOR BAD ROUTES
    it('GET /api/nonexistent should return 404 for non existant route', async () => {
        const response = await rateLimitedRequest(() =>
            request(app).get('/api/nonexistent')
        );

        expect(response.status).toBe(404);
    });
    afterAll((done) => {
        server.close(done);
    });
});
