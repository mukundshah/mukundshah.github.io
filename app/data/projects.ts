export interface Project {
  id: string
  title: string
  techs: string[]
  link: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    id: '4fin',
    title: '4Fin',
    techs: ['Django', 'Nuxt', 'PostgreSQL'],
    link: 'https://fourfin.app/?utm_source=portfolio&utm_medium=web&utm_campaign=project_card',
    isComingSoon: true,
  },
  {
    id: 'mediaconvert',
    title: 'Media Convert',
    techs: ['Go', 'FFmpeg', 'S3', 'Redis'],
    link: 'https://github.com/mukundshah/mediaconvert',
  },
]

export default projects
