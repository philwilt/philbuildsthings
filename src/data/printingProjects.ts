export interface PrintingProject {
  id: string
  title: string
  description: string
  imageUrl: string
}

export const printingProjects: PrintingProject[] = [
  {
    id: 'LibBE4F-9Fk',
    title: 'Plate Holder',
    description:
      'Functional print for organizing Bambu build plates, produced with PETG HF and translucent lettering.',
    imageUrl: 'https://phil-builds-things.s3.us-east-1.amazonaws.com/plate-holder.jpg',
  },
  {
    id: 'qlsJiVdXiM4',
    title: 'Lamp Prototype',
    description:
      'Prototype lamp color test using Bambu translucent PETG materials to validate finish and look before final design decisions.',
    imageUrl: 'https://phil-builds-things.s3.us-east-1.amazonaws.com/spiral-lamp.jpg',
  },
  {
    id: 'KoCL5tCQo1c',
    title: 'Poop Chute',
    description:
      'Practical accessory print with magnet insets designed to keep filament waste contained while the machine is in use.',
    imageUrl: 'https://phil-builds-things.s3.us-east-1.amazonaws.com/poop-chute.jpg',
  },
  {
    id: 'aJfdrzwBa-Y',
    title: 'Year of the Horse',
    description:
      'Creative Bambu print celebrating the year of the horse as a reminder to keep building toward what is next.',
    imageUrl: 'https://phil-builds-things.s3.us-east-1.amazonaws.com/year-of-the-horse.jpg',
  },
]
