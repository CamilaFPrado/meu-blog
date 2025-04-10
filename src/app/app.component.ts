import { Component } from '@angular/core';
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostComponent]
})
export class AppComponent {
  // Inicializando o objeto newPost
  newPost = {
    titulo: '',
    conteudo: '',
    autor: '',
    data: ''
  };

  // Array de posts
  posts: any[] = [];

  // Função para adicionar um post
  addPost() {
    if (this.newPost.titulo && this.newPost.conteudo && this.newPost.autor && this.newPost.data) {
      this.posts.push({ ...this.newPost });
      this.newPost = { titulo: '', conteudo: '', autor: '', data: '' }; // Limpa o formulário
    }
  }
}
