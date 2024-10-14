import type {
  OnNameLookupHandler,
} from '@metamask/snaps-sdk';

export const onNameLookup: OnNameLookupHandler = async (request) => {
  const { address, domain } = request;

  if (domain) {
    if (domain.startsWith('scheme:') || domain.startsWith('schm:')) {

      console.log(`Got: ${domain}`);

      return {
        resolvedAddresses: [
          {
            resolvedAddress: "0x000000000000000000000000000000000000dEaD",
            protocol: 'Ethereum',
            domainName: "scheme:0xdead",
          },
        ],
      };

    } else if (domain.endsWith('.tld')) {
      
      console.log(`Got: ${domain}`); 

      return {
        resolvedAddresses: [
          {
            resolvedAddress: "0x000000000000000000000000000000000000dEaD",
            protocol: 'Ethereum',
            domainName: "0xdead.tld",
          },
        ],
      };
    }
  }

  return null;
};