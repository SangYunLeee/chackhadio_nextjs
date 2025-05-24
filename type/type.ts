export interface Work {
  title: string;
  type: string;
  youtubeId: string;
  description: string;
  id: string;
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
    contact: {
      address: string;
      phone: string;
      email: string;
    };
  };
  workType: string[];
}