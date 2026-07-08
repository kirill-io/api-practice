export type ProjectConfig = {
  projectNumber: string
  slug: string
  title: string
  subtitle: string
  footerDescription: string
}

export const PROJECT_CONFIG = {
  projectNumber: '01',
  slug: '01-fetch-json-server',
  title: 'Posts API Practice',
  subtitle: 'Fetch + JSON Server + CRUD',
  footerDescription: 'Учебный проект для практики работы с API и состояниями',
} as const satisfies ProjectConfig

// export const projectConfig = {
//   projectNumber: '__PROJECT_NUMBER__',
//   slug: '__PROJECT_SLUG__',
//   title: '__PROJECT_TITLE__',
//   subtitle: '__PROJECT_SUBTITLE__',
//   footerDescription: '__PROJECT_DESCRIPTION__',
// } as const satisfies ProjectConfig
