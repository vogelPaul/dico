import { Component } from '@angular/core';
import { Mots } from 'src/modeles/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Words: Mots[];
  constructor() {
    this.Words = [
      {
        francais: 'à',
        lingala: 'na',
        exemple:'',
      },
      {
        francais: 'abaisser',
        lingala: "kokitisa,kolembisa,kosámbwisa,kosílisa lokúmu",
        exemple:'',
      },
      {
        francais: 'abandonner',
        lingala: 'botíki, bobóyi, bosundol',
        exemple:'Il a abandonné les siens: asundólí biloko bua ye. asundoli ba oyo ya ye',
      },
      {
        francais: 'abandonner v.tr. laisser, quitter ',
        lingala: 'kosundola like. sém. kotíka, kobóya . ',
        exemple:'Il a abandonné les siens: asundólí biloko bua ye. asundoli ba oyo ya ye',
      },
      {
        francais: 'abasourdir',
        lingala: ' kokomisa lokó, kozipa(koziba) matói like. sém. kozipa matói. 2 kokámwisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1 ces cris m’abasourdissent:  makelele maye mazalí kozipa ngáí matói. 2 ta réponse m’abasourdit: eyano na nayo ekámwísí ngáí'
      },
      {
        francais: 'abâtardir ',
        lingala: 'kobébisa, kosámbwisa, kokitisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abats ',
        lingala: 'bokítá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattage ',
        lingala: 'bokwéisi, bokáti, bobomi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattement ',
        lingala: 'bol¥mbi (nzóto)  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abatteur ',
        lingala: 'mokáti nzeté',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattis ',
        lingala: 'biloko bya káti ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattoir ',
        lingala: 'ebomelo-bibwele, ebomelo nyama ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattre ',
        lingala: ' kopkéisa (kokwéisa), kokáta, kobúka ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattu, ue ',
        lingala: 'a kolembe ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abbaye ',
        lingala: 'biloko bya káti ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattis ',
        lingala: 'ndáko ya babé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abbé ',
        lingala: 'nganganzámbe, sángó, labé, abé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abcès ',
        lingala: 'Litóngwáná, litóngáná, litúngáná, mónkole, ndalá, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abdication ',
        lingala: 'botíki bokonzi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abdiquer',
        lingala: 'kotíka, kosundola  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abdomen ',
        lingala: 'ebóbó, libumu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abeille ',
        lingala: 'nzói, monzói ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aberrant, ante ',
        lingala: 'a momesani te, -bé, -a mabé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aberration ',
        lingala: 'mabé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abhorrer ',
        lingala: 'kobóya, koyína  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abîme ',
        lingala: 'lobwakú',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abîmer',
        lingala: 'kobébisa, koboma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
     
      {
        francais: 'abject, ecte ',
        lingala: '-a boyini, -a bobóyi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abjurer ',
        lingala: 'koyángana, kowángana ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ablation',
        lingala: 'bokáti, bolongol',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ablution ',
        lingala: 'bosukoli, bolongoli botutu ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ablution ',
        lingala: 'bosukoli, bolongoli botutu ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },

    ]
  }


}
