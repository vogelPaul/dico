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
        francais: 'abnégation ',
        lingala: 'bomíkabi',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboiement',
        lingala: 'ligbóma, bogángi bwa mbwá',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abois (être aux -)  ',
        lingala: '(kozala na -) nkaká ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abolir (supprimer)',
        lingala: 'koboma (kolongola)',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abolition ',
        lingala: 'bobomi, bolongoli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abominable ',
        lingala: '-a nsomo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abomination  ',
        lingala: 'nsomo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abominer',
        lingala: 'koyina, kobóya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abondamment ',
        lingala: 'míngi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abondance ',
        lingala: 'boíké, míngi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonder ',
        lingala: 'kotónda, kofúluka ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonné, ée ',
        lingala: 'aboné ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonnement ',
        lingala: 'abondemá, abonemá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonner ',
        lingala: 'kozwa abondemá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abord (d’) ',
        lingala: 'naíno, yambo ya máns¡  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abordable  ',
        lingala: '-lámu, -a malámu ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aborder ',
        lingala: ' kolobisa, kosolisa moto, kolobela, kosola mpÊ¡ ya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abortif, ive  ',
        lingala: '-a kosopisa zémi, -a kolongolisa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutir ',
        lingala: 'kosúka, kokóma ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutissement  ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboyer  ',
        lingala: 'kogbóma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abracadabrant, ante  ',
        lingala: '-a loléngé, -a ndéngé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrégé (en)  ',
        lingala: 'na likwé, na bokúsé',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abréger',
        lingala: 'kokúsa, kokáta mokúsé',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abreuver   ',
        lingala: 'komelisa, konwísa',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abreuvoir ',
        lingala: 'emeliselo, enwíselo   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abréviation',
        lingala: 'bokúsé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abri   ',
        lingala: 'ebómbelo, ebómamelo,ekímelo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abriter ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrogation',
        lingala: 'bobomi, bolongoli ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abroger ',
        lingala: 'koboma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrupt, upte',
        lingala: '-a botengemi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abruptement  ',
        lingala: 'mbálákáká  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abruti, ie  ',
        lingala: 'zóba, elémá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrutir ',
        lingala: 'kokómisa zóba, kozóbisa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absence',
        lingala: 'kutukúlu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absent, ente  ',
        lingala: 'mokutukúlu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absentéïsme  ',
        lingala: 'bokutukúlu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absenter (s’) ',
        lingala: 'kozánga, kozala te  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolu, ue  ',
        lingala: '-a ntángo na ndelo -a ntángo na ntembe  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolument   ',
        lingala: 'ntángo na ndelo, ntángo na ntembe ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolution  ',
        lingala: 'bolímbisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolutisme   ',
        lingala: 'bokonzi ndelo te',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absorbant, ante  ',
        lingala: '-a komele mái, emele mái  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absorber   ',
        lingala: 'komele, konwá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absorption   ',
        lingala: 'bomeli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absoudre  ',
        lingala: 'kolimbisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absous, oute   ',
        lingala: 'molimbisami, molímbámí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstenir (s’)  ',
        lingala: 'kotíka, kokila   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstention   ',
        lingala: 'boboyi, bokili  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstentionnisme  ',
        lingala: 'bobóyi vÔ¡ti tô maponi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstentionniste   ',
        lingala: 'mobóyi vÔti   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstinence  ',
        lingala: 'ekila, ngizi, mongilo, bomípimi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstraction   ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutissement  ',
        lingala: 'bolongoli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstraire  ',
        lingala: 'kotangola   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstrait, aite  ',
        lingala: '-a bwányá, -a mayele ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutissement  ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absurde  ',
        lingala: '(e)-zángá ntina, -a ntína te  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absurdité ',
        lingala: 'bozángi ntína  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abus   ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abuser   ',
        lingala: 'kolútisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abusif, ive   ',
        lingala: '-a bosáleli mabé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abusivement  ',
        lingala: 'na lokútá, na moíbi, mabé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acabit (du même -)    ',
        lingala: 'ndéngé yokÔ   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acacia  ',
        lingala: 'akasyá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'académicien, enne  ',
        lingala: 'moí-akademí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'académie   ',
        lingala: 'akademí   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acajou   ',
        lingala: 'mokole, akazú  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acara, accra, akara ou akra  ',
        lingala: 'mokáté, akala  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acariâtre  ',
        lingala: '-a nkándánkándá   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acarien  ',
        lingala: 'liyanzi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acassa ou akassa   ',
        lingala: 'mokáté mwa masángú, akasa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accablant, ante   ',
        lingala: '-a kolembisa, -a nsomo, -a mpási, -a koleka ndelo  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accablement   ',
        lingala: 'monyoko, monyokoli,mondondo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accabler  ',
        lingala: 'konyokolo, kolekisa, kolembisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accalmie   ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'kímyá, bobóto, nye  ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aaccaparer   ',
        lingala: 'kowéla, kopunza, kozwa na nkó  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accapareur, euse  ',
        lingala: 'mopunzi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accéder   ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'kokóma, kokoto, koyíngela  ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accélérateur  ',
        lingala: 'etámbwisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accélérateur, trice  ',
        lingala: '-a bokólisi mbángu, -a bobakisi mbángu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accélérer   ',
        lingala: 'kokólisa mbángo, koléndisa mbángu   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accent    ',
        lingala: 'elembo,elobeli, mongóngó  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accentuer  ',
        lingala: 'kotíya elembo na nkomá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acceptable   ',
        lingala: '-a kondima ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },  {
        francais: 'acceptation  ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accepter   ',
        lingala: 'kondima, kozwa, koyamba',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accès   ',
        lingala: 'nzelá, nzilá   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokoti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accident    ',
        lingala: 'likámá, asidá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accidenté, ée  ',
        lingala: '-a likámá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accidentellement  ',
        lingala: '(-a ) likámá, (-a) asidá ; moílikámá, moí-asidá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acclamation  ',
        lingala: 'milóló, byelele, nsáko, bokúmisi',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acclamer  ',
        lingala: 'kokúmisa, kobete maboko kogánga na nsáí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acclimater  ',
        lingala: 'komesinisa, komesinya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accolade ',
        lingala: 'ekopi, ezingi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoler  ',
        lingala: 'kosangisa, kosanginya  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accommodation   ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accommodation   ',
        lingala: 'bomeseni, bomesenisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accommoder ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'koengibinya, kolongibinya,kobongisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokÔti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },

    ]
  }


}
