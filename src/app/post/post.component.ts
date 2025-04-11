import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="post-card">
      <mat-card-title>{{ titulo }}</mat-card-title>
      <mat-card-content>
        <p>{{ conteudo }}</p>
        <p><strong>Autor:</strong> {{ autor }}</p>
        <p>
          <small>{{ data }}</small>
        </p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .post-card {
        margin-bottom: 1rem;
        background-color: #fff;
        border-radius: 8px;
      }
    `,
  ],
})
export class PostComponent {
  @Input() titulo!: string;
  @Input() conteudo!: string;
  @Input() autor!: string;
  @Input() data!: string;
}
