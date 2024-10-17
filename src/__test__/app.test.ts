import { severityRank } from '../config/constants';

describe('severityRank enum', () => {
    it('CRITICAL is 0', () => {
        expect(severityRank.CRITICAL).toBe(0);
    });

    it('ERROR is 1', () => {
        expect(severityRank.ERROR).toBe(1);
    });

    it('WARN is 2', () => {
        expect(severityRank.WARN).toBe(2);
    });

    it('INFO is 3', () => {
        expect(severityRank.INFO).toBe(3);
    });

    it('DEBUG is 4', () => {
        expect(severityRank.DEBUG).toBe(4);
    });
});
