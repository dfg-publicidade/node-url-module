import { expect } from 'chai';
import { describe, it } from 'mocha';
import Url from '../src';

/* Tests */
describe('index.ts', (): void => {
    it('1. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('invalid url')).to.be.false;
        expect(Url.matchUrl('https://test.com')).to.be.true;
    });

    it('2. matchUri', async (): Promise<void> => {
        expect(Url.matchUri('invalid uri')).to.be.false;
        expect(Url.matchUri('/test/test2')).to.be.true;
    });
});
