import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newPost = {
    titulo: '',
    conteudo: '',
    autor: '',
    data: '',
    status: 'pendente',
  };
  posts: any[] = [];
  filtroStatus: string = 'todos';
  editandoIndex: number | null = null;

  get postsFiltrados() {
    if (this.filtroStatus === 'todos') return this.posts;
    return this.posts.filter((p) => p.status === this.filtroStatus);
  }

  addPost() {
    if (this.editandoIndex === null) {
      this.posts.push({ ...this.newPost });
    } else {
      this.posts[this.editandoIndex] = { ...this.newPost };
      this.editandoIndex = null;
    }
    this.newPost = {
      titulo: '',
      conteudo: '',
      autor: '',
      data: '',
      status: 'pendente',
    };
  }

  editarPost(index: number) {
    this.editandoIndex = index;
    this.newPost = { ...this.posts[index] };
  }

  salvarEdicao() {
    this.addPost();
  }

  cancelarEdicao() {
    this.editandoIndex = null;
    this.newPost = {
      titulo: '',
      conteudo: '',
      autor: '',
      data: '',
      status: 'pendente',
    };
  }

  removerPost(index: number) {
    this.posts.splice(index, 1);
  }

  alterarStatus(post: any) {
    post.status = post.status === 'pendente' ? 'feito' : 'pendente';
  }
}
