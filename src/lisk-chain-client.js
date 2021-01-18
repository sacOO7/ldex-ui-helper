import * as cryptography from '@liskhq/lisk-cryptography';
import {Mnemonic} from "@liskhq/lisk-passphrase";
import * as transactions from '@liskhq/lisk-transactions';

export default class LiskChainClient {

    prepareTransaction = ( passphrase, amount, recipientAddress, data) => {
        const amountInBeddows = transactions.utils.convertLSKToBeddows(amount).toString();
        return transactions.transfer({
            amount: amountInBeddows,
            recipientId: recipientAddress,
            data,
            passphrase,
        });
    }

    generatePassphrase = () => {
        return Mnemonic.generateMnemonic();
    }

    isPassphraseValid = (passphrase) => {
        return Mnemonic.validateMnemonic(passphrase, Mnemonic.wordlists.english);
    }

    getWalletDetails = (passphrase) => {
        return cryptography.getAddressAndPublicKeyFromPassphrase(passphrase);
    }
}
