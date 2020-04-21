const got = require('got');
const { expect } = require('chai');
const nock = require('nock');
const { default: defaultValues } = require('../lib/server/defaultValues');

describe('return type check', () => {
    it('Check 200 http and Name', async () => {
        const firstExpectedId = 59791234;
        const secondExpectedId = 59744176;

        nock(`http://${defaultValues.address}:${defaultValues.port}`)
            .get('/')
            .reply(200, {
                expected: {
                    questionId: '59791234',
                    tags:       'node.js,testing,intellij-idea,jestjs,testcafe',
                    title:      '	testcafe execution via intelliJ run action'
                }
            })
            .get('/')
            .reply(200, {
                expected: {
                    questionId: '59744176',
                    tags:       'testing,automation,automated-tests,e2e-testing,testcafe',
                    title:      'Data Driven test not passing 1 parameter'
                } });

        const answer = await got(`http://${defaultValues.address}:${defaultValues.port}`);

        expect(JSON.parse(answer.body).expected.questionId).to.equal(`${firstExpectedId}`);

        const answer2 = await got(`http://${defaultValues.address}:${defaultValues.port}`);

        expect(JSON.parse(answer2.body).expected.questionId).to.equal(`${secondExpectedId}`);

    });

});


