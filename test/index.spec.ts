import { expect } from 'chai';
import { describe, it } from 'mocha';
import Url from '../src';

/* Tests */
describe('index.ts', (): void => {
    it('1. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('invalid url')).to.be.false;
    });

    it('2. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('//test.com')).to.be.true;
    });

    it('3. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('http://test.com')).to.be.true;
    });

    it('4. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://test.com')).to.be.true;
    });

    it('5. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('ftp://test.com')).to.be.true;
    });

    it('6. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('file://test.com')).to.be.true;
    });

    it('7. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('torrent://test.com')).to.be.true;
    });

    it('8. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('image://test.com')).to.be.true;
    });

    it('9. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('irc://test.com')).to.be.true;
    });

    it('10. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('ssh://test.com')).to.be.true;
    });

    it('11. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('ssl://test.com')).to.be.true;
    });

    it('12. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://test.com')).to.be.true;
    });

    it('13. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://user@test.com')).to.be.true;
    });

    it('14. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://user:password@test.com')).to.be.true;
    });

    it('15. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://192.168.0.1')).to.be.true;
    });

    it('16. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://test.com')).to.be.true;
    });

    it('17. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://test.com.')).to.be.true;
    });

    it('18. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://test.com:8080')).to.be.true;
    });

    it('19. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://test.com/test')).to.be.true;
    });

    it('20. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://test.com/test/test')).to.be.true;
    });

    it('21. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('invalid url')).to.be.false;
    });

    it('22. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('httpx://test.com')).to.be.false;
    });

    it('23. matchUrl', async (): Promise<void> => {
        expect(Url.matchUrl('https://1000.000.000.000')).to.be.false;
    });

    it('24. matchUri', async (): Promise<void> => {
        expect(Url.matchUri('invalid uri')).to.be.false;
    });

    it('25. matchUri', async (): Promise<void> => {
        expect(Url.matchUri('test@test')).to.be.false;
    });

    it('26. matchUri', async (): Promise<void> => {
        expect(Url.matchUri('/test/test2')).to.be.true;
    });
});
