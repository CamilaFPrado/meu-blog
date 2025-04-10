import { Component, Input } from '@angular/core';

@Component({
  selector: 'post',
  template: `
    <div class="post">
      <h3>{{ titulo }}</h3>
      <p>{{ conteudo }}</p>
      <p><strong>Autor:</strong> {{ autor }}</p>
      <p><strong>Data:</strong> {{ data }}</p>
    </div>
  `,
  styles: []
})
export class PostComponent {
  @Input() titulo!: string;
  @Input() conteudo!: string;
  @Input() autor!: string;
  @Input() data!: string;
}
