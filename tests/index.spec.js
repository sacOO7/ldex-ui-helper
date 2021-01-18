import LiskChainClient from "../src";


describe("Lisk Chain Client",() => {
    it("Should generate passphrase",() => {
        const passphrase = new LiskChainClient().generatePassphrase();
        const words = passphrase.split(" ");
        expect(words.length).toBeGreaterThan(8);
        expect(passphrase).toBeDefined();
    });

    it("Should validate passphrase",() => {
        const lskClient = new LiskChainClient();
        const passphrase = lskClient.generatePassphrase();
        const isPassphraseValid = lskClient.isPassphraseValid(passphrase);
        expect(isPassphraseValid).toBeTruthy();
    });

    it("should get wallet details", () => {
        const lskClient = new LiskChainClient();
        const passphrase = lskClient.generatePassphrase();
        const { address, publicKey } = lskClient.getWalletDetails(passphrase);
        expect(address).toBeTruthy();
        expect(publicKey).toBeTruthy();
    } )

})
