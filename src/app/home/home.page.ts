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
        francais: 'abandonner ',
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
        lingala: '  bomeseni, bomesenisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accommoder ',
        lingala: 'koengibinya, kolongibinya,kobongisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompagnateur, trice  ',
        lingala: 'mokambi',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompagnement ',
        lingala: 'bokambi, likambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompagner   ',
        lingala: 'kokamba   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompli, ie   ',
        lingala: '(e)kokísámí, (e)bongísámí   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accomplir   ',
        lingala: 'kokokisa, kosála, kosílisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accomplissement [ ',
        lingala: 'bokokisi, bosúkisi, bosílisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accord   ',
        lingala: 'boyókani, bobémbani  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accord (d’) ',
        lingala: 'kondima   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accordéon  ',
        lingala: 'lindánda   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accordéoniste ',
        lingala: 'mobeti-lindánda   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accorder  ',
        lingala: 'kopésa, kolingisa, kobémbisa,koyókanisa, komípesa ,kobémbinya,kobémbisana   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoter  ',
        lingala: 'koyekemisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouchée',
        lingala: 'mwasí wa bwakélé, bwakéléké,walékélé   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouchement  ',
        lingala: 'boboti   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoucher ',
        lingala: 'kobota   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoucheur, euse  ',
        lingala: 'mobótisi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouder (s’) ',
        lingala: 'koyekeme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouplement',
        lingala: 'bosíbani   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoupler ',
        lingala: 'kosíbisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accourir  ',
        lingala: 'kokíma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutrement  ',
        lingala: 'moláto, eláteli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutrer ',
        lingala: 'kolátisa na ndéngé ya kosekisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutumance  ',
        lingala: 'momeseno, limeseni, limesenyi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutumé (à l’) ',
        lingala: 'bó momeseno, na momeseno  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accra  ',
        lingala: 'akala   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accréditer ',
        lingala: 'kondima  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accréditif  ',
        lingala: 'lokásá-lifúta   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroc  ',
        lingala: 'kpokoso,ekánámí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accrochage ',
        lingala: 'likanga, libakú ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accrocher',
        lingala: 'kobáka, kokanga, kokákya   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroire  ',
        lingala: 'kobúba, kokósa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroissement  ',
        lingala: 'boyíkinyi, boyéi míngi, bokóli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroître   ',
        lingala: 'koyíkinya, kokólisa, koyéisa míngi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroupir (s’)',
        lingala: 'kokusama, kosotama, kosondama  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accueil   ',
        lingala: 'boyambi, bonkóndé, bonsalá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accueillant, ante  ',
        lingala: '-a bonsalá, -a bonkóndé,eyamba bapaya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accueillir   ',
        lingala: 'koyamba, konyángela   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acculturé, ée  ',
        lingala: 'mondelendombe   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accumulateur  ',
        lingala: 'esanginyi lotilíki   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accumulation  ',
        lingala: 'lisangisi, lisanginyi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accumuler  ',
        lingala: 'kosangisa, kosanginya  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accusateur, trice  ',
        lingala: '-a botúbi, -a bofúndi, -a bokambi, motúbi, mofúndi, mokambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accusation   ',
        lingala: 'bofúnfi, botúbi, bokambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accusé, ée  ',
        lingala: 'mofúndami, motúbami,mokambemi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accuser  ',
        lingala: 'kofúnda, kotúba, kokamba  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acéré, ée  ',
        lingala: '-pótú, -a míno, -a nsonge ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acétique   ',
        lingala: '-a mái ma ngai, -a ngai  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achalandé, ée   ',
        lingala: '-a biloko ebelé, -a biloko míngi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achalander ',
        lingala: 'kotíya biloko, kokotisa biloko  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acharnement   ',
        lingala: 'móléndé, moléndé, mbamba ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acharner (s’) ',
        lingala: 'koluka na móléndé, koluka nanzelá ínso, koléndisa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achat   ',
        lingala: 'esómbeli,ndombá,bosómbi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acheminer  ',
        lingala: 'komeme, kotínda, koyenda',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acheter ',
        lingala: 'kosómba   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acheteur, euse   ',
        lingala: 'mosómbi, kiliyá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achèvement  ',
        lingala: 'bosílisi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achoura     ',
        lingala: 'asúla  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acide ',
        lingala: 'kobúba, kokósa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'asíde ',
        lingala: 'kobúba, kokósa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acidifier ',
        lingala: 'kokomisa ngai tô asíde ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acidité  ',
        lingala: 'bongai  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acidulé, ée  ',
        lingala: '-a mwâ ngai  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acier   ',
        lingala: 'ebendé ekási ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acné  ',
        lingala: 'akiné ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acolyte',
        lingala: 'akolíte ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acompte   ',
        lingala: 'ndámbo, avási  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acoquiner (s’)  ',
        lingala: 'koyókana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquérir ',
        lingala: 'kozwa, kosómba  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquiescement   ',
        lingala: 'bondimi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquiescer   ',
        lingala: 'kondima (mobimba)  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquis, ise ',
        lingala: 'lizwi, eleko  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquisition   ',
        lingala: 'bosómbi, bozwi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquittement  ',
        lingala: 'bolóngisi, bolóngi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acte  ',
        lingala: '1.kofúta,kolóngisa,kokokisa, 2 monkandá, nkomá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aacteur, trice   ',
        lingala: 'mosani,mokeli   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actif, ive',
        lingala: '-kási   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'action  ',
        lingala: 'ekela, ekelá   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actionner   ',
        lingala: 'kotámbwisa, kopelisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'activement  ',
        lingala: 'na mpila, na bolingo, na mpíko  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'activer ',
        lingala: 'kotámbwisa mbángo, kokólisa mbángo, kokómisa makási  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'activité   ',
        lingala: 'mosálá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actualité  ',
        lingala: 'sango  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actuel, elle   ',
        lingala: '-a sika  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actuellement  ',
        lingala: 'sikáwa, sikasikáwa, sikóyo, sikasikóyo, bébe, sasaípi,sasépi, na mói mwa lelo  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acuité ',
        lingala: 'bopótú, nsÔnge  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aadage  ',
        lingala: 'lisɛsɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adaptable  ',
        lingala: '-a kolongibinya, -kolongobana, -a kokisana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adaptateur ',
        lingala: 'elongobinya   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adaptation ',
        lingala: 'bomɛsɛni, bomɛsɛnisi, bolongibinyi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'additif, ive  ',
        lingala: '-a kobakema  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'addition   ',
        lingala: 'bobakisi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'additionner  ',
        lingala: 'kobakisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adduction  ',
        lingala: 'bobéndi mai   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adepte   ',
        lingala: 'mondimi, moyambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adéquat, ate  ',
        lingala: '-a kolongobana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adéquation ',
        lingala: 'bokokani, bolongobani   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhérence  ',
        lingala: 'libándemi, libátemi, likangemi,lidátemi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhérent, ente  ',
        lingala: 'molandi, moyambi, mobátemi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhérer  ',
        lingala: 'kobándema,koyíngela na, kokÔ¡t¡ na  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhésif, ive',
        lingala: 'datidati, daidai ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhésion ',
        lingala: 'boyíngeli na, bokÔ¡ti na  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aadieu   ',
        lingala: 'moseso, eseseli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjectif   ',
        lingala: 'libakemi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjoindre  ',
        lingala: 'kosangisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjoint, ointe   ',
        lingala: 'molandi, mosálisi, mosungi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjudant   ',
        lingala: 'ázidá, ádjidá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjurer   ',
        lingala: 'kobÔondela  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admettre ',
        lingala: 'koyamba, kondima   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'administrateur, trice ',
        lingala: 'moyángeli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'administration  ',
        lingala: 'eyángeli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'administrer   ',
        lingala: 'koyángela , kopésa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admirable   ',
        lingala: '-a lisími, -a bosími  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admirateur, trice ',
        lingala: 'mosími   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admiration  ',
        lingala: 'lisími, bosími   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admirer   ',
        lingala: 'kokámwa, kosíma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admission  ',
        lingala: 'boyambi, bondimami   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admonestation ',
        lingala: 'lipáleli, lipámeli, lidosi, ligángeli, bopápeli, bopámeli, bodosi, bogángeli ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admonester   ',
        lingala: 'kopálela, kopámela, kodosa,kogángela  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adolescence  ',
        lingala: 'bolenge, bonzéngá, boseka  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adolescent, ente  ',
        lingala: 'elenge, monzéngá, móseka  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adonner (s’)  ',
        lingala: 'komípesa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adopter  ',
        lingala: 'kosangola, kokamata mwana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adoptif, ive   ',
        lingala: ' -a bosangolami,mosangoli,mokamati, mozwi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adoption  ',
        lingala: 'bosangoli, lisangoli, bokamati, bozwi mwana,bondimi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adorable  ',
        lingala: '-a bosími, -a lisími  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adorateur, trice  ',
        lingala: 'mokúmisi, mosími,mokúmbameli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adorer  ',
        lingala: 'kokúmisa, kokúmbamela, ko(n)gumbamela  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adosser  ',
        lingala: 'koyekemisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adoucir ',
        lingala: 'kolɛmbisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adresse   ',
        lingala: 'ntoki  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adresser  ',
        lingala: 'koloba, kolobisa, kolobela,kotínda, kotóma, kotíndela,koloba na  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adroit, oite   ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adroit, oite   ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },

    ]
  }


}
