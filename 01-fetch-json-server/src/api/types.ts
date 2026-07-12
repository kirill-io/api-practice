export interface PostBase {
  title: string
  body: string
  author: string
}

export interface Post extends PostBase {
  id: number
  createdAt: string
}

export type CreatePostDto = PostBase

export type UpdatePostDto = PostBase

export type PatchPostDto = Partial<PostBase>
