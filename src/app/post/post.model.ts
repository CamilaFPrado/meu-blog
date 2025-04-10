export class Post {
  titulo: string;
  conteudo: string;
  autor: string;
  data: string;

  constructor(titulo: string, conteudo: string, autor: string, data: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.autor = autor;
    this.data = data;
  }
}
export class PostModel {
  id: number;
  post: Post;

  constructor(id: number, post: Post) {
    this.id = id;
    this.post = post;
  }
}
export class PostModelList {
  posts: PostModel[] = [];

  constructor(posts: PostModel[]) {
    this.posts = posts;
  }

  addPost(post: PostModel) {
    this.posts.push(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
