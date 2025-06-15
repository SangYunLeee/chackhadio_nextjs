export interface Work {
  title: string;
  type: string;
  youtubeId: string;
  description: string;
  id: string;
  image?: string;
}

export interface Content {
  navbar: {
    title: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    video?: string;
  };
  works: Work[];
  about: {
    description: string;
    address: string;
    contact: {
      phone: {
        name: string;
        phone: string;
        email: string;
      }[];
      license: string;
      email: string;
    };
  };
  workType: string[];
}