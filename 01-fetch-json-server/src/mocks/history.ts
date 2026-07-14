export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type RequestResult = 'success' | 'error'

export interface RequestHistoryItem {
  id: string
  method: HttpMethod
  endpoint: string
  result: RequestResult
  statusCode: number | null
  message: string
  createdAt: string
}

export const requestHistoryMock: RequestHistoryItem[] = [
  {
    id: 'request-1',
    method: 'GET',
    endpoint: '/posts',
    result: 'success',
    statusCode: 200,
    message: 'Список постов загружен',
    createdAt: '2026-07-14T14:32:00+03:00',
  },
  {
    id: 'request-2',
    method: 'POST',
    endpoint: '/posts',
    result: 'success',
    statusCode: 201,
    message: 'Пост успешно создан',
    createdAt: '2026-07-14T14:36:00+03:00',
  },
  {
    id: 'request-3',
    method: 'PATCH',
    endpoint: '/posts/3',
    result: 'success',
    statusCode: 200,
    message: 'Пост обновлён',
    createdAt: '2026-07-14T14:40:00+03:00',
  },
  {
    id: 'request-4',
    method: 'DELETE',
    endpoint: '/posts/2',
    result: 'error',
    statusCode: 500,
    message: 'Не удалось удалить пост',
    createdAt: '2026-07-14T14:41:00+03:00',
  },
  {
    id: 'request-5',
    method: 'GET',
    endpoint: '/posts',
    result: 'success',
    statusCode: 200,
    message: 'Список постов загружен',
    createdAt: '2026-07-14T14:45:00+03:00',
  },
]
