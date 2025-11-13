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
    title: '4fin',
    techs: ['Django', 'Nuxt', 'PostgreSQL'],
    link: 'https://fourfin.app/',
    isComingSoon: true,
  },
  {
    id: 'media-ingestion-server',
    title: 'Media Ingestion Server',
    techs: ['Go', 'FFmpeg', 'ImageMagick', 'Docker', 'S3'],
    link: 'https://github.com/mukundshah/media-ingestion-server',
  },
]

export default projects
