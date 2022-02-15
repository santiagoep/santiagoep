export const useContactInfo = (): ContactInfo => ({
  findMe: {
    url: 'https://wa.me/573508108761',
  },
});

export interface ContactInfo {
  findMe: {
    url: string;
  };
}
