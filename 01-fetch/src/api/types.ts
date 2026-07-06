export interface PostBase {
  userId: number
  title: string
  body: string
}

export interface Post extends PostBase {
  id: number
}

export type CreatePostDto = PostBase

export type UpdatePostDto = PostBase

export type PatchPostDto = Partial<PostBase>
