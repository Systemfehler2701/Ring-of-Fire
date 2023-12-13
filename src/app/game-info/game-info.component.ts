import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Waterfall', description: ' Alle Spieler setzen zum trinken an. Im Uhrzeigersinn darf erst dann mit dem Trinken aufgehört werden, wenn der rechte Sitznachbar davor seinen Wasserfall beendet hat. Der Spieler, der das Ass zieht darf zu erst aufhören zu trinken (wann er will).' },
    { title: 'You', description: ' Du darfst eine Person bestimmen, die einen Schluck trinken muss.' },
    { title: 'Me', description: 'Glückwunsch! Du musst einen Schluck trinken.' },
    { title: 'Floor', description: 'Berühre mit deiner Hand den Boden. Der Mitspieler, der zuletzt den Boden berührt, muss trinken.' },
    { title: 'Thumbmaster', description: 'Lege deinen Daumen auf die Tischplatte. Der Mitspieler der zuletzt den Tisch berührt, muss trinken.' },
    { title: 'Chicks', description: 'Alle Frauen müssen trinken.' },
    { title: 'Heaven', description: 'PHände hoch! Der letzte Spieler muss trinken!' },
    { title: 'Mate', description: 'Bestimme einen Mitspieler, der von nun an jedes Mal mit dir einen Schluck trinken muss, wenn du dazu aufgefordert wirst.' },
    { title: 'Rhyme', description: 'Such dir ein Wort aus. Im Uhrzeigersinn müssen die Mitspieler einen Reim darauf finden. Wer ein Wort wiederholt oder keinen neuen Reim mehr nennen kann, muss einen Schluck trinken.' },
    { title: 'Men', description: 'Alle Männer müssen.' },
    { title: 'Rule', description: 'Du darfst dir eine Regel aussichen die das ganze Spiel über nicht gebrochen werden darf. Wer sie bricht muss trinken. Die Regel darf keine anderen außer Kraft setzen.' },
    { title: 'Never have i ever...', description: 'Sage etwas das du noch nie getan hast. Jeder der es gemacht hat muss trinken.' },
    { title: 'King', description: ' Wird ein König gezogen, darf der Spieler ein Getränk seiner Wahl in den Kingscup gießen. Wird der vierte König gezogen, so muss der Spieler unverzüglich den Kingscup leeren.' },
  ];

  title: string = '';
  description: string = '';

  @Input() card: string;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
