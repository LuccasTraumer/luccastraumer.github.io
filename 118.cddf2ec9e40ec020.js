"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[118],{2118:(w,u,i)=>{i.r(u),i.d(u,{ArticlesModule:()=>I});var r=i(6814),s=i(6538),e=i(4946),g=i(5619);let l=(()=>{class o{constructor(){this.dataArticle=new g.X(null)}getDataValue(){return this.dataArticle.getValue()}setValueData(a){this.dataArticle.next(a)}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function b(o,n){if(1&o&&(e.TgZ(0,"h3",13),e._uU(1),e.qZA()),2&o){const a=e.oxw().$implicit;e.xp6(1),e.Oqu(a.titleSection)}}function f(o,n){if(1&o&&(e.TgZ(0,"pre",14),e._uU(1),e.qZA()),2&o){const a=e.oxw().$implicit;e.xp6(1),e.hij("        ",a.code,"\n      ")}}function v(o,n){if(1&o&&e._UZ(0,"img",18),2&o){const a=e.oxw(2).$implicit;e.Q6J("src",a.image,e.LSH)}}function x(o,n){if(1&o&&(e.TgZ(0,"figcaption"),e._uU(1),e.qZA()),2&o){const a=e.oxw(2).$implicit;e.xp6(1),e.Oqu(a.imageBy)}}function h(o,n){if(1&o&&(e.TgZ(0,"figure",15),e.YNc(1,v,1,1,"img",16),e.YNc(2,x,2,1,"figcaption",17),e.qZA()),2&o){const a=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",a.image),e.xp6(1),e.Q6J("ngIf",a.imageBy)}}function q(o,n){if(1&o&&(e.ynx(0),e.YNc(1,b,2,1,"h3",9),e.TgZ(2,"p",10),e._uU(3),e.qZA(),e.YNc(4,f,2,1,"pre",11),e.YNc(5,h,3,2,"figure",12),e.BQk()),2&o){const a=n.$implicit;e.xp6(1),e.Q6J("ngIf",a.titleSection),e.xp6(2),e.Oqu(a.content),e.xp6(1),e.Q6J("ngIf",a.code),e.xp6(1),e.Q6J("ngIf",a.image)}}function _(o,n){1&o&&(e.TgZ(0,"p",19),e._uU(1,"tags:"),e.qZA())}function A(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"p",20),e._uU(2),e.qZA(),e.BQk()),2&o){const a=n.$implicit;e.xp6(2),e.hij(" ",a," ")}}let m=(()=>{class o{constructor(a,t){this.route=a,this.dataService=t}ngOnInit(){console.warn(this.dataService.getDataValue()),this.route.data.subscribe(a=>{console.warn(JSON.stringify(a.article)),this.article=a.article})}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(s.gz),e.Y36(l))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-article"]],decls:14,vars:9,consts:[[1,"content"],[1,"content__time"],[1,"content__date--publish"],[1,"content__date--read"],[1,"content__title","title"],[1,"content__description"],[4,"ngFor","ngForOf"],[1,"content__tags"],["class","content__tags--title",4,"ngIf"],["class","content__description--subtitle",4,"ngIf"],[1,"content__description--content"],["class","content__description--code",4,"ngIf"],["class","content__description--image",4,"ngIf"],[1,"content__description--subtitle"],[1,"content__description--code"],[1,"content__description--image"],["alt","",3,"src",4,"ngIf"],[4,"ngIf"],["alt","",3,"src"],[1,"content__tags--title"],[1,"content__tags--item"]],template:function(a,t){1&a&&(e.TgZ(0,"article",0)(1,"div",1)(2,"time",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"p",3),e._uU(6),e.qZA()(),e.TgZ(7,"h2",4),e._uU(8),e.qZA(),e.TgZ(9,"div",5),e.YNc(10,q,6,4,"ng-container",6),e.qZA(),e.TgZ(11,"div",7),e.YNc(12,_,2,0,"p",8),e.YNc(13,A,3,1,"ng-container",6),e.qZA()()),2&a&&(e.xp6(3),e.Oqu(e.xi3(4,6,t.article.date,"medium")),e.xp6(3),e.hij("",t.article.timeRead," min read"),e.xp6(2),e.hij(" ",t.article.title," "),e.xp6(2),e.Q6J("ngForOf",t.article.description),e.xp6(2),e.Q6J("ngIf",t.article.tags),e.xp6(1),e.Q6J("ngForOf",t.article.tags))},dependencies:[r.sg,r.O5,r.uU],styles:[".flex-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.flex-start[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.flex-start-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.flex-inline[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center}.flex-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.content[_ngcontent-%COMP%]{background:#F9F9F9;padding-top:8rem;height:100%}.content__time[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4rem;border-bottom:.1rem solid #474747;margin:1rem 0;padding:.5rem 0}.content__title[_ngcontent-%COMP%]{color:#4831d4}.content__description[_ngcontent-%COMP%]{letter-spacing:.011rem;margin-bottom:1.25em;box-sizing:border-box;padding:1rem 0}@media screen and (min-width: 1024px){.content__description[_ngcontent-%COMP%]{padding:1rem 1.5rem}}.content__description--subtitle[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem;padding:1rem 0}.content__description--content[_ngcontent-%COMP%]{font-size:1rem;padding:.5rem 0}.content__description--code[_ngcontent-%COMP%]{background:#fff;margin:1rem 0;width:max-content;word-break:normal;max-width:90vw}@media screen and (min-width: 1024px){.content__description--code[_ngcontent-%COMP%]{width:50%}}.content__description--image[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;padding:1rem 0}.content__description--image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{font-size:.8rem}.content__tags[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.content__tags--title[_ngcontent-%COMP%]{text-transform:capitalize}.content__tags--item[_ngcontent-%COMP%]{text-transform:lowercase;display:flex;gap:.5rem}"]}),o})();class c{}function P(o,n){if(1&o){const a=e.EpF();e.TgZ(0,"li",4)(1,"a",5),e.NdJ("click",function(){const C=e.CHM(a).$implicit,O=e.oxw();return e.KtG(O.redirectToArticle(C.linkPost))}),e.TgZ(2,"article",6)(3,"time",7),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"h3",8),e._uU(7),e.qZA(),e.TgZ(8,"p",9),e._uU(9),e.qZA()()()()}if(2&o){const a=n.$implicit,t=e.oxw();e.xp6(4),e.hij(" ",e.xi3(5,3,a.date,"medium")," "),e.xp6(3),e.hij(" ",a.title," "),e.xp6(2),e.hij(" ",t.getDescription(a)," ")}}c.LIST_ARTICLE=[{date:new Date("08-01-2021"),title:"Estruturas de Dados \u2014 Conceito de Pilha(Stack) e Fila(Queue).",description:[{content:"Neste post vou tentar explicar qual a diferen\xe7a entre dois conceitos utilizados na computa\xe7\xe3o e que provavelmente voc\xea ver\xe1 ou est\xe1 vendo na mat\xe9ria de Estrutura de Dados em seu curso de TI.\n\nVou come\xe7ar dizendo que n\xe3o sou um escritor ou professor, meu intuito com a s\xe9rie de posts que irei fazer \xe9 tentar explicar de uma forma simples como essas estruturas funcionam com exemplos e trazendo a implementa\xe7\xe3o.\n\nDado as devidas observa\xe7\xf5es, vamos l\xe1 para que eu possa come\xe7ar a te explicar sobre Pilha(Stack) e Fila(Queue) voc\xea precisa ter um conhecimento pr\xe9vio em Array(Vetores), pelo menos \xe9 o recomendado."},{titleSection:"Fila ou Queue em Ingl\xeas:",content:"Como o pr\xf3prio nome diz, fica um pouco mais simples de entender, o conceito da fila vai ser algo semelhante a de uma fila de Supermercado, \u201ccomo assim ?\u201d. Em uma fila de supermercado os clientes ser\xe3o atendidos pela ordem de chegada na FILA, correto ?(desconsiderando exce\xe7\xf5es). O conceito da FILA em computa\xe7\xe3o \xe9 o mesmo, onde o primeiro elemento que foi colocado nesta estrutura ser\xe1 tamb\xe9m o primeiro a sair. Existe em Ingl\xeas uma sigla para identificar esta l\xf3gica que \xe9 o FIFO(First In First Out). Resumindo o Conceito principal que voc\xea deve se lembrar da Fila \xe9 que o:",image:"https://upload.wikimedia.org/wikipedia/commons/7/76/Data_queue.svg"},{titleSection:"Pilha ou Stack em Ingl\xeas:",content:"O conceito da pilha pode parecer um pouco confuso \xe0 primeira vista mas observando bem, voc\xea consegue entender o conceito. Uma analogia que normalmente se utiliza e \xe9 bem simples de entender o conceito s\xe3o os livros. Vamos supor que voc\xea tenha \xe0 sua disposi\xe7\xe3o alguns livros, agora imagine que voc\xea come\xe7a a colocar um sobre o outro, este ato \xe9 o Empilhamento. Continuando a linha de racioc\xednio, ap\xf3s voc\xea empilhar todos os livros, voc\xea precisa remover um em especifico que se encontra no meio desta Pilha, voc\xea humano poderia ir diretamente e pux\xe1-lo de l\xe1 mas o conceito da Pilha n\xe3o te deixa fazer este movimento, o que te resta \xe9 come\xe7ar a remover os elementos a partir do TOPO. Este \xe9 o \xfanico movimento de remo\xe7\xe3o que voc\xea pode fazer com esta estrutura, remover do topo. Note que levando em considera\xe7\xe3o o movimento de remo\xe7\xe3o que podemos executar, o primeiro elemento(o que est\xe1 abaixo de todos) da Pilha ser\xe1 o \xfaltimo a sair. Assim como a FILA \xe0 PILHA, tamb\xe9m tem uma sigla em Ingl\xeas que identifica este conceito que \xe9 FILO( First In Last Out) que em Portugu\xeas fica:",image:"https://miro.medium.com/v2/resize:fit:720/0*K1UFL3lGn-aHYX5k",imageBy:"By Maxtremus \u2014 Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=44458752"},{content:"Estes conceitos, tanto o de FILA quanto o de PILHA, podem ser implementados com Vetores ou com Lista.\n\nNo meu pr\xf3ximo post irei continuar abordando os conceitos de Estruturas de Dados \xe9 prov\xe1vel que irei falar sobre Lista, caso tenha interesse \xe9 s\xf3 buscar em meu perfil que talvez ele j\xe1 tenha sido publicado."},{titleSection:"Implementa\xe7\xe3o:",content:"As implementa\xe7\xf5es estar\xe3o meio Portugu\xeas e meio Ingl\xeas, pe\xe7o desculpas por isso mas estou utilizando o c\xf3digo de um Reposit\xf3rio que tenho."},{titleSection:"PILHA:",content:"Utilizando tanto a List que irei abordar em um pr\xf3ximo post, quanto com Vetor.",code:'public class Stack {\n    private List list;\n    private Person[] arrayPerson;\n    private int index = 0;\n\n    public Stack() {\n        list = new List();\n    }\n\n    public Stack(int size) {\n        this.arrayPerson = new Person[size];\n    }\n\n    public void addInList(Person person) {\n        list.addPerson(person);\n    }\n\n    public void addInArray(Person person) {\n        this.arrayPerson[index++] = person;\n    }\n\n    public void removeInList() {\n        this.list.removePerson();\n    }\n\n    public void removeInArray() {\n        this.arrayPerson[index--] = null;\n    }\n\n    public Integer sizeInList() {\n        return this.list.sizeList();\n    }\n\n    public Integer sizeInArray() {\n        return this.index;\n    }\n\n    public boolean clientInList(Person person) {\n        return this.list.thisPersonInList(person);\n    }\n\n    public boolean clientInArray(Person person) {\n        for(int ind = 0; ind < index; ind++) {\n            if(this.arrayPerson[ind].equals(person))\n                return true;\n        }\n\n        return false;\n    }\n\n    public String toStringInList() {\n        return list.showList();\n    }\n\n    public String toStringInArray() {\n        String resultado = "";\n        for(int ind = 0; ind < index; ind++)\n            resultado += this.arrayPerson[ind] + "\\n";\n\n        return resultado;\n    }\n}'},{titleSection:"FILA:",content:"",code:'public class Queue {\n    private List list;\n    private Person[] arrayPerson;\n    private int index = 0;\n\n    public Queue() {\n        this.list = new List();\n    }\n\n    public Queue(int size) {\n        this.arrayPerson = new Person[size];\n    }\n\n    public void addClientInList(Person person) {\n        this.list.addClient(person);\n    }\n\n    public void addClientInArray(Person person) {\n        this.arrayPerson[index++] = person;\n    }\n\n    public void removeClientInList() {\n        this.list.removeClient();\n    }\n\n    public void removeClientInArray() {\n        Person[] auxArray = this.arrayPerson.clone();\n        if (auxArray.length == 1) {\n            auxArray[index--] = null;\n            return;\n        }\n\n        for(int slowIndex = 0; slowIndex < index; slowIndex++) {\n            auxArray[slowIndex] = auxArray[slowIndex++];\n        }\n        auxArray[index--] = null;\n        this.arrayPerson = auxArray;\n    }\n\n    public Integer sizeQueueInList() {\n        return this.list.sizeQueue();\n    }\n\n    public Integer sizeQueueInArray() {\n        return this.index;\n    }\n\n    public boolean clientInQueueInList(Person person) {\n        return this.list.clientIsInclude(person);\n    }\n\n    public boolean clientInQueueInArray(Person person) {\n        for (int ind = 0; ind < index; ind++) {\n            if (this.arrayPerson[ind].equals(person))\n                return true;\n        }\n        return false;\n    }\n\n    public String toStringInList() {\n        return this.list.toString();\n    }\n\n    public String toStringInArray() {\n        String resultado = "";\n        for (int ind = 0; ind < index; ind++) {\n            resultado += this.arrayPerson[ind] + "\\n";\n        }\n\n        return resultado;\n    }\n}'},{content:"Note que em ambas as implementa\xe7\xf5es, o modo como se \xe9 inclu\xeddo nestes conceitos \xe9 o mesmo, o que ir\xe1 mudar ser\xe1 a maneira como voc\xea ir\xe1 olha-lo ao tentar remover.\n"},{content:"Repare que enquanto na Pilha removemos diretamente do topo",code:"public void removeInArray() {\n        this.arrayPerson[index--] = null;\n}"},{content:"como normalmente se \xe9 utilizado em um vetor."},{content:"Mas j\xe1 com uma FILA, \xe9 algo um pouco mais complexo. Pois temos que remover do inicio do vetor e passar todos os valores para a esquerda, ou seja temos que tomar um pouco mais de cuidado.",code:"public void removeClientInArray() {\n        Person[] auxArray = this.arrayPerson.clone();\n        if (auxArray.length == 1) {\n            auxArray[index--] = null;\n            return;\n        }\n\n        for(int slowIndex = 0; slowIndex < index; slowIndex++) {\n            auxArray[slowIndex] = auxArray[slowIndex++];\n        }\n        auxArray[index--] = null;\n        this.arrayPerson = auxArray;\n    }"},{content:"Lembre-se que ambas implementa\xe7\xf5es no final das contas s\xe3o CONCEITOS de armazenamento de dados, que poder\xe1 variar em que momento utilizar. Variando de acordo com suas necessidades."},{content:"Alguns exemplos de onde elas s\xe3o utilizadas:"},{content:"<em>Pilha:</em> Se voc\xea utiliza a Linguagem Java em seu dia a dia \xe9 prov\xe1vel que voc\xea j\xe1 tenha visto uma Pilha, pois sempre que \xe9 lan\xe7ado uma exce\xe7\xe3o, esta come\xe7a a subir para onde foi chamado. Isto \xe9 toda a execu\xe7\xe3o do c\xf3digo \xe9 posto em uma PILHA que \xe9 a Stacktrace do JAVA, onde ir\xe1 te informar onde em cada parte do c\xf3digo ele parou."},{content:"Exemplo:",code:'Exception in thread "main" java.lang.NullPointerException\n        at com.example.myproject.Book.getTitle(Book.java:16)\n        at com.example.myproject.Author.getBookTitles(Author.java:25)\n        at com.example.myproject.Bootstrap.main(Bootstrap.java:14)'},{content:"Note que a exce\xe7\xe3o vai subindo na hierarquia de execu\xe7\xe3o at\xe9 estourar na classe Main."},{content:"Outro exemplo seria o gerenciador de apps do seu aparelho celular, quando voc\xea abre o Gerenciador de Apps, ele ir\xe1 te mostrar do ultimo app em que voc\xea estava at\xe9 o primeiro que est\xe1 sendo executado em segundo plano. Isto tamb\xe9m \xe9 uma <em>PILHA</em>."},{content:"J\xe1 com a <em>Fila</em> um exemplo seria, chamadas para um servidor, todas as chamadas s\xe3o executadas uma ap\xf3s a outra onde a primeira que chegou ser\xe1 tamb\xe9m a primeira a ser executada. N\xe3o vou trazer um outro exemplo para FILA, pois \xe9 algo mais comumente encontrado no dia a dia e de f\xe1cil assimila\xe7\xe3o(tamb\xe9m n\xe3o consegui pensar em nada shaushaus)."},{content:"Pode ser que haja algum erro ou alguma melhor forma de implementar estes dois conceitos, caso haja e voc\xea queira divulgar este conte\xfado deixo meu reposit\xf3rio dispon\xedvel para isto, tenho um reposit\xf3rio onde pretendo implementar a maior quantidade de Estrutura de dados com a maior quantidade diferentes de linguagem. Estou fazendo isso para divulgar conhecimento e aprender mais sobre conceitos e linguagens, \xe9 a maneira que achei de conhecer novos horizontes e pode devolver a comunidade o que aprendi."},{titleSection:'Link do Reposit\xf3rio no <a href="https://github.com/LuccasTraumer/algorithms" target="_blank">GitHub. </a>',content:"Me coloco a disposi\xe7\xe3o caso voc\xea tenha alguma sugest\xe3o ou queira discutir sobre."},{content:"Desde j\xe1, Obrigado !!"},{content:"<em>Revis\xe3o: Rafael Oliveira.</em>"}],id:0,linkPost:"data-structure",tags:["Data Structure","Queue","Stack","Development"],timeRead:4},{date:new Date("12-05-2021"),title:"Pesquisa Bin\xe1ria",description:[{content:"Voc\xea j\xe1 ouviu falar sobre Pesquisa Bin\xe1ria ? N\xe3o ? Pois ent\xe3o irei lhe apresentar esse meio de buscar dados de uma maneira mais eficiente para seus problemas."},{content:"Vou come\xe7ar falando sobre o que normalmente acontece quando temos uma lista ou array com diversos elementos e queremos verificar ou buscar algum dado em espec\xedfico na lista."},{content:"O que normalmente fazemos \xe9 percorrer essa lista do seu primeiro elemento ao \xfaltimo, fazendo uma verifica\xe7\xe3o dos dados, correto ? E isso n\xe3o est\xe1 errado, funciona!"},{content:"Mas essa pode n\xe3o ser a melhor solu\xe7\xe3o para esse problema. Por exemplo, em uma lista com uma quantidade de elementos pequena de 100 itens, essa busca vai acontecer em quest\xe3o de segundos, \xf3timo!"},{content:"O problema \xe9 que caso essa lista comece a crescer, voc\xea passa a ter 1.000.000 de itens ou 1.000.000.000 de itens. Como comentei acima, nossas buscas nestes contexto ser\xe1 de O(n) onde n \xe9 o numero de instru\xe7\xe3o de que iremos executar, na pior das hip\xf3teses ter\xedamos que acessar o n\xfamero de elemento que temos e para este exemplo considere que o tempo de acesso a um item seja de 1ms, caso houvesse no exemplo de 1.000.000 somente essa busca levaria cerca de 1000s ou 16.67 min que \xe9 muito tempo de execu\xe7\xe3o, um cliente ou um servidor n\xe3o ficaria esperando esse tempo para alguma tomada de decis\xe3o. S\xf3 a t\xedtulo de curiosidade a busca de 1.000.000.000 seria 1000000s ou 16666,6667 minutos que \xe9 igual a 277,7777783333 horas 11,574074097220834 dias, ou seja \xe9 um tempinho rs."},{content:"E qual a solu\xe7\xe3o para isso, uma poss\xedvel solu\xe7\xe3o para isto \xe9 a Pesquisa Bin\xe1ria, mas que raios \xe9 isso ? Ela precisa de um pr\xe9-requisitos para ser executada que \xe9 a Lista a ser percorrida <em>DEVE</em> esta ordenada."},{content:"Essa pesquisa leva em considera\xe7\xe3o o tamanho da lista ou array a ser percorrido e \u201cdivide\u201d este trabalho."},{content:"Essa pesquisa leva em considera\xe7\xe3o o tamanho da lista ou array a ser percorrido e \u201cdivide\u201d este trabalho."},{content:"Dado que temos o nosso meio e que nossa lista est\xe1 ordenada, iremos verificar o elemento que est\xe1 nessa posi\xe7\xe3o e validar se ele \xe9 maior que o elemento que estamos buscando."},{content:"Caso ele (elemento do meio) seja maior iremos mudar o nosso indicador de fim para o meio. Sendo assim, sabemos que o elemento que buscamos N\xc3O est\xe1 \xe0 direita da nossa lista. Pois o elemento que verificamos \xe9 MAIOR do que n\xf3s estamos buscando."},{content:"",image:"https://miro.medium.com/v2/resize:fit:720/0*ipHin0Kk5OZVm-EY",imageBy:"Efetuando a primeira busca."},{content:"Com o in\xedcio valendo Zero(0) como podemos observar na imagem, e o fim est\xe1 valendo 5. O resultado por se tratar de um n\xfamero inteiro ser\xe1 2, pois 5/2 \xe9 2.5 mas por se tratar de um numero inteiro ignoramos as casas decimais. E nosso meio fica no \xedndice dois(2) da lista."},{content:"Exemplificando o que foi dito anteriormente com a imagem, caso estiv\xe9ssemos procurando pelo n\xfamero 110, na primeira busca iremos comparar o valor que est\xe1 no \xedndice do meio com o valor que queremos buscar. O valor 110 \xe9 maior que 15, caso sim sabemos que a posi\xe7\xe3o do elemento n\xe3o est\xe1 \xe0 nossa esquerda, pois todos os valores \xe0 esquerda s\xe3o menores que 15. Com isso iremos recalcular nosso in\xedcio para que ele seja o meio e o meio seja recalculado. Ficar\xe1 assim:",image:"https://miro.medium.com/v2/resize:fit:720/0*KdZguUHwK3MPL2CR",imageBy:"Efetuando a busca pela segunda vez."},{content:"Dados que mudamos o nosso fim, iremos recalcular nosso meio, e efetuar a busca novamente. E faremos isso at\xe9 que o valor seja encontrado ou caso ele n\xe3o esteja contido, retornaremos uma exce\xe7\xe3o ou algo que nos identifique que n\xe3o est\xe1 contido na lista."},{content:"E continuando, novamente faremos a mesma a\xe7\xe3o de comparar o valor do \xedndice do meio com quem estamos buscando. Neste caso, veremos se 50 \xe9 maior que 110, o resultado nos fala que o \xedndice que estamos buscando est\xe1 mais \xe0 direita."},{content:"Faremos a mudan\xe7a do in\xedcio e do meio novamente.Onde o in\xedcio passa a receber o \xedndice do meio e o meio \xe9 recalculado(soma do in\xedcio com o fim, dividido por 2). Ficar\xe1 assim:",image:"https://miro.medium.com/v2/resize:fit:720/0*Q2RKak7zzdbW5ep2",imageBy:"Efetuando a busca pela terceira vez."},{content:"Agora ao verificarmos o valor que est\xe1 no \xedndice do meio, ele ser\xe1 igual ao valor que buscamos. Com isso conclu\xedmos nossa pesquisa."},{content:"Note que precisamos de apenas 3 verifica\xe7\xf5es em nossa lista para podermos obter o valor que est\xe1vamos buscando. Ou seja, levando em considera\xe7\xe3o que cada acesso leve 1ms com a Pesquisa Bin\xe1ria levamos 3ms."},{content:"Podemos nos perguntar se isso acontece somente para listas pequenas e a resposta \xe9 <em>N\xc3O</em>. Foi exemplificado com uma lista pequena, por did\xe1tica. Sendo mais f\xe1cil de exemplificar."},{content:"Mais um exemplo com uma lista ou array com 4.000.000.000 de itens na Pesquisa simples (verifica\xe7\xe3o item a item) ter\xedamos que percorrer os 4.000.000.000 na pior das hip\xf3teses."},{content:"J\xe1 com a Pesquisa Bin\xe1ria, precisamos acessar apenas 32 itens e conseguimos encontrar o valor. Esse \xe9 o poder da Pesquisa Bin\xe1ria, voc\xea consegue otimizar sua busca de uma maneira incr\xedvel, claro que isso fica muito mais evidente em Lista ou array, com uma grande quantidade de itens. Este exemplo foi retirado do livro Entendendo Algoritmos."},{content:"Vimos um exemplo com um valor alto, ou seja, sempre est\xe1vamos indo a direita mas o que aconteceria se o valor fosse menor ? Seria a mesma l\xf3gica, s\xf3 que em vez do in\xedcio se \u201cmovimentar\u201d que iria se mover ser\xe1 o fim. O fim receber\xe1 o meio e o meio ser\xe1 recalculado."},{content:"De modo geral o c\xf3digo ficaria desta forma:",code:'import java.util.ArrayList;\n\nimport java.util.List;\n\nimport static java.util.Objects.isNull;\n\npublic class BinarySearch {\n    private List<Person> list;\n    private int inicio = 0;\n    private int meio = 0;\n    private int fim = 0;\n    private int contadorAcesso = 0;\n\n    public BinarySearch() {\n        this.list = new ArrayList<>();\n    }\n\n    public Person findElement(final Person element) throws Exception {\n        List<Person> orderList = sort(this.list);\n\n        fim = this.list.size();\n        meio = (inicio + fim) / 2;\n        while(orderList.iterator().hasNext()) {\n            if (((Client) orderList.get(meio)).compareTo((Client) element) == 0)\n                return orderList.get(meio);\n\n            if (((Client) element).compareTo(((Client) orderList.get(meio))) ==  -1) {\n                System.out.println("O numero " + ((Client) orderList.get(meio)).getAge() +\n                        " \xe9 maior que o numero " + ((Client) element).getAge());\n\n                this.contadorAcesso++;\n                fim = meio;\n                meio = (inicio + fim) / 2;\n                orderList.iterator().next();\n            } else if (((Client) element).compareTo(((Client) orderList.get(meio))) == 1) {\n                System.out.println("O numero " + ((Client) orderList.get(meio)).getAge() +\n                        " \xe9 menor que o numero " + ((Client) element).getAge());\n\n                this.contadorAcesso++;\n                inicio = meio;\n                meio = (inicio + fim) / 2;\n                orderList.iterator().next();\n            }\n        }\n\n        System.out.println(((Client) orderList.get(meio)).getAge());\n        return null;\n    }\n\n    public Person findElement(final List<Person> list, final Person element) {\n\n        return null;\n    }\n\n    public void setList(List<Person> list) {\n        this.list = list;\n    }\n\n    public List<Person> getList() {\n        return this.list;\n    }\n\n    private List<Person> sort(List<Person> list) throws Exception {\n        if (isNull(list))\n            throw new Exception("Empty list!");\n\n        for(int slowIndex = 0; slowIndex < list.size(); slowIndex++) {\n            for (int fastindex = slowIndex +1; fastindex < list.size(); fastindex++) {\n                if(((Client) list.get(slowIndex)).getAge() > ((Client)list.get(fastindex)).getAge()) {\n                    Person aux = list.get(slowIndex);\n                    list.set(slowIndex, list.get(fastindex));\n                    list.set(fastindex, aux);\n                }\n            }\n        }\n        return list;\n    }\n\n    public Integer getQntdAcesso() {\n        return Integer.valueOf(this.contadorAcesso);\n    }\n}'},{content:"Foi desenvolvido em Java mas a linguagem \xe9 indiferente, poder\xedamos utilizar quaisquer outras."},{content:"Caso tenha interesse em ver mais algumas implementa\xe7\xf5es de algoritmos, como lista, Pilha, Fila, Algoritmos de Ordena\xe7\xe3o, etc\u2026 Estou fazendo neste reposit\xf3rio. Fique \xe0 vontade para contribuir. O intuito \xe9 desenvolver estes algoritmos em diversas linguagens e documentar para outras pessoas."}],id:1,linkPost:"search-binary",tags:["Data Structures","Binary Search","Estruturas De Dados","Pesquisa Binaria","Algorithms"],timeRead:5},{date:new Date("12-25-2021"),title:"Diferen\xe7a entre Lista e Array. Entendendo uma Lista Ligada",description:[{content:"Neste post como prometido em um dos anteriores irei tentar explicar o conceito e a implementa\xe7\xe3o da Estrutura de dado LISTA, tamb\xe9m conhecida como Lista Simples, vamos l\xe1 ?"},{content:"Relembrando que N\xc3O SOU UM PROFESSOR, meu intuito \xe9 tentar explicar de uma outra forma esta estrutura. E este post est\xe1 aberto a sugest\xf5es."},{content:"Para come\xe7ar falando sobre a lista estou levando em considera\xe7\xe3o que voc\xea j\xe1 saiba utilizar um Array de elementos, ou ao menos seu conceito."},{content:"A estrutura lista para muitas pessoas pode parecer um bicho de sete cabe\xe7as mas ao entender seu funcionamento, ver\xe1 que \xe9 bem mais simples do que se parece. Esta estrutura \xe9 auto explicativa, funcionando como o pr\xf3prio nome diz, uma Lista."},{content:"Mas o que \xe9 uma lista, veja que uma lista por nomenclatura n\xe3o h\xe1 um limite de itens que se pode haver, correto ?"},{content:"Voc\xea pode ter lista de 10 itens ou lista de milhares de itens, e ainda sim ambas s\xe3o uma lista."},{content:"A estrutura lista seguir\xe1 este mesmo conceito."},{content:"Uma d\xfavida comum de se aparecer \xe9: \u201cQual a diferen\xe7a entre uma lista e um array?\u201d."},{content:"A primeira grande diferen\xe7a \xe9 que Arrays no momento de duas cria\xe7\xf5es(na instancia\xe7\xe3o) seu tamanho s\xe3o definidos, ou seja um limite de elementos que podem haver ali dentro. J\xe1 a Lista n\xe3o tem limita\xe7\xf5es de tamanho(claro, vai depender da mem\xf3ria da m\xe1quina) mas fora essa limita\xe7\xe3o, n\xe3o h\xe1 outra interfer\xeancia para seu tamanho."},{content:"Um exemplo disto \xe9:"},{content:"Temos um micro servi\xe7o que faz uma consulta no Banco de Dados, e nos tr\xe1s a lista de Barbearias em um bairro. Neste bairro est\xe3o contidas 10 Barbearias."},{content:"No momento do desenvolvimento do micro servi\xe7o, o desenvolvedor achou que seria uma boa colocar estes dados em um Array de tamanho 20, pois s\xf3 haviam 10 e caso, criassem mais barbearias haveria ainda 10 espa\xe7os no Array."},{content:"S\xf3 que este mesmo software est\xe1 sendo vendido para uma cidade que tem 200 Barbearias, com isso ir\xe1 precisar que haja uma manuten\xe7\xe3o nesta consulta pois o n\xfamero de barbearias aumentou, o que seria uma boa op\xe7\xe3o? alterar o n\xfamero para a quantidade de barbearias da Cidade ou criar uma LISTA que n\xe3o precisa ter um n\xfamero fixo de posi\xe7\xf5es, ela se adequa a quantidade de elementos conforme a necessidade ?"},{content:"Este \xe9 um dos exemplos, array s\xe3o excelentes para quando se trata de uma sequ\xeancia de itens de n\xfameros FIXOS. Lista s\xe3o muito boas para quando se precisa armazenar diversos valores mas n\xe3o se sabe quantos elementos possam haver."},{titleSection:"Como \xe9 implementado uma Lista.",content:"Para que possamos implementar a lista, s\xf3 gostaria de explicar mais um ponto que \xe9 de extrema import\xe2ncia para isso."},{content:"N\xf3\u2019s ou Node: N\xf3\u2019s s\xe3o elementos que comp\xf5em a lista, os n\xf3s ir\xe3o armazenar as suas informa\xe7\xf5es e a informa\xe7\xe3o de quem \xe9 o pr\xf3ximo elemento.",image:"https://miro.medium.com/v2/resize:fit:720/0*nRjHXmIPju4YPpuL",imageBy:"Apontamento para o pr\xf3ximo elemento."},{content:"Dado este overview, vamos l\xe1"},{content:"Irei criar em Java pois \xe9 mais c\xf4modo mas a linguagem n\xe3o faz tanta diferen\xe7a, o que importa mesmo \xe9 o conceito."},{titleSection:"Esta \xe9 a classe do nosso node:",content:"",code:"import java.util.Objects;\n\npublic class Barbearia {\n    private String nome;\n    private String endereco;\n    private String cep;\n\n    private Barbearia proximo = null;\n\n    public Barbearia(String nome, String endereco, String cep) {\n        this.nome = nome;\n        this.endereco = endereco;\n        this.cep = cep;\n    }\n\n    public Barbearia() {}\n\n    public String getNome() {\n        return nome;\n    }\n\n    public void setNome(String nome) {\n        this.nome = nome;\n    }\n\n    public String getCep() {\n        return cep;\n    }\n\n    public void setCep(String cep) {\n        this.cep = cep;\n    }\n\n    public Barbearia getNextBarbearia() {\n        return proximo;\n    }\n\n    public void setNextBarbearia(Barbearia nextPerson) {\n        this.proximo = nextPerson;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Barbearia person = (Barbearia) o;\n        return Objects.equals(nome, person.nome) &&\n                Objects.equals(endereco, person.endereco) &&\n                Objects.equals(cep, person.cep) &&\n                Objects.equals(proximo, person.proximo);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(nome, endereco, cep, proximo);\n    }\n\n}"},{content:"Note que existe um atributo do tipo Barbearia, dentro da declara\xe7\xe3o da classe Barbearia, a primeira vez que vi isso fiquei muito confuso mas sim, \xe9 desta forma e faz sentido, pois ele ir\xe1 \u201capontar\u201d para o pr\xf3ximo elemento da lista."},{content:"E tamb\xe9m teremos a informa\xe7\xe3o da Barbearia."},{content:"Al\xe9m do atributo proximo, temos alguns espec\xedficos das barbearias, como: nome, endereco e cep. S\xe3o dados fict\xedcios s\xf3 para exemplifica\xe7\xe3o."},{titleSection:"Esta \xe9 a nossa lista:",content:"",code:"public class LinkedList {\n    private Barbearia headBarbearia;\n\n    void addBarbearia(Barbearia barbearia) {\n        if (this.headBarbearia == null) {\n            headBarbearia = barbearia;\n        } else {\n            Barbearia personAux = headBarbearia;\n            while(personAux.getNextBarbearia() != null) {\n                personAux = personAux.getNextBarbearia();\n            }\n            this.headBarbearia.setNextBarbearia(barbearia);\n        }\n    }\n\n    void removeBarbearia(Barbearia person) {\n        Barbearia aux = this.headBarbearia;\n        if (aux != null) {\n            while (aux.getNextBarbearia() != null) {\n                if (aux.equals(person)) {\n                    aux = aux.getNextBarbearia();\n                    aux.setNextBarbearia(null);\n                }\n                aux = aux.getNextBarbearia();\n            }\n        }\n        this.headBarbearia = aux;\n    }\n\n    boolean thisBarberInList(Barbearia person) {\n        boolean inList = false;\n        Barbearia aux = this.headBarbearia;\n        while(aux.getNextBarbearia() != null) {\n            if (aux.equals(person))\n                inList = true;\n            aux = aux.getNextBarbearia();\n        }\n\n        return inList;\n    }\n\n    Integer sizeList() {\n        int size = 1;\n        Barbearia aux = this.headBarbearia;\n        while(aux.getNextBarbearia() != null) {\n            size++;\n            aux = aux.getNextBarbearia();\n        }\n\n        return size;\n    }\n}"},{content:"E \xe9 basicamente isso, a implementa\xe7\xe3o de uma Lista simples, note que poder\xedamos utilizar o genetics para que os dados fossem gen\xe9ricos, mas o n\xedvel de complexidade iria aumentar um pouco, e precisaria explicar sobre Generics que fica para uma pr\xf3xima."},{titleSection:"Entendendo a implementa\xe7\xe3o da Lista:",content:"Na classe da Lista note que temos um atributo com nome de headBarbearia, esta barbearia vai ser nosso \u201cn\xf3 raiz\u201d, o primeiro elemento da lista. E trabalharemos praticamente toda altera\xe7\xe3o inclus\xe3o e afins em cima deste objeto."},{content:"No m\xe9todo addBarbearia, iremos incluir uma nova barbearia \xe0 lista. No m\xe9todo temos uma condi\xe7\xe3o verificando se nosso atributo headBarbearia est\xe1 nulo, caso de fato ele esteja nulo, o elemento que est\xe1 sendo incluso \xe9 o nosso primeiro elemento, ou seja iremos atribuir ao headBarbearia o elemento que recebemos por par\xe2metro do m\xe9todo. Mas caso o headBarbearia n\xe3o seja nulo, onde ele j\xe1 tem um objeto, iremos percorrer os pr\xf3ximos elementos para verificar qual n\xe3o tem pr\xf3ximo est\xe1 nulo, para que possamos preencher com o dado que estamos recebendo."},{content:"O m\xe9todo de <b>removeBarbearia</b>, ir\xe1 seguir um conceito similar ao de inclus\xe3o, onde tamb\xe9m iremos fazer a busca pelos pr\xf3ximos e quando encontrarmos um elemento a ser removido, iremos mud\xe1-lo para nulo, e tamb\xe9m iremos mudar o apontamento do elemento anterior para que pule este nulo.",image:"https://miro.medium.com/v2/resize:fit:720/0*mubpkqO9vLyXXxUL",imageBy:"Removendo um elemento da Lista"},{titleSection:"Utiliza\xe7\xe3o da Lista.",content:"Com isso podemos come\xe7ar a utilizar nossa lista, para criarmos um Objeto \xe9 simples, como em qualquer outro."},{content:"LinkedList list = new LinkedList();"},{content:"Barbearia barbearia = new Barbearia(\u201cLucas Barbearia\u201d, \u201cRua X\u201d, \u201c12391\u2013000\u201d);"},{content:"list.addBarbearia(barbearia);"},{content:"E para que possamos adicionar um elemento na lista, basta criar este elemento e chamar o m\xe9todo addBarbearia, essa chamada para o m\xe9todo de inclus\xe3o vai."},{content:"Simples desse jeito, \xe9 a inclus\xe3o de um novo elemento na lista."},{titleSection:"Percorrer",content:"Para que possamos percorrer a lista \xe9 bem simples tamb\xe9m, podemos fazer de algumas maneiras sendo por recurs\xe3o e pela estrutura de repeti\xe7\xe3o While, do-While, neste post vou utilizar apenas o while pois \xe9 mais simples e de f\xe1cil compreens\xe3o."},{content:"Iremos percorrer utilizando como condi\xe7\xe3o de repeti\xe7\xe3o, a verifica\xe7\xe3o de que se existe um pr\xf3ximo elemento a ser \u201cobservado\u201d."},{content:"Barbearia personAux = headBarbearia;\n\nwhile(personAux.getNextBarbearia() != null) {\n\npersonAux = personAux.getNextBarbearia();\n\n}"},{content:"Essa estrutura ser\xe1 muito comum, pois para podermos incluir, remover, buscar iremos utiliz\xe1-la. Ent\xe3o entender seu conceito \xe9 de suma import\xe2ncia."},{titleSection:"Observa\xe7\xf5es:",content:"Dado que entendemos Lista e Array, \xe9 importante informar que Lista N\xc3O \xe9 uma bala de prata para todo problema, \xe9 importante saber avaliar quais s\xe3o suas necessidades."},{content:"Pois caso voc\xea precise pesquisar ou buscar valores espec\xedficos em alguma dessas duas estruturas \xe9 mais simples buscar em um array pois h\xe1 um n\xfamero limitado de possibilidades e porque dependendo se este array estiver ordenado, podemos ir pelo \xedndice."},{content:"De modo geral, caso voc\xea precise de uma estrutura de dados para armazenar uma lista de elementos mas n\xe3o se sabe ao certo, quantos elementos \xe9 uma boa Lista mas caso, voc\xea precise acessar informa\xe7\xf5es espec\xedficas em uma das estruturas recomendo a utiliza\xe7\xe3o.",image:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*wN9POK6eOjkr-mLsh50o3Q.png",imageBy:"Tabela de Performance"}],id:2,linkPost:"list-and-array",tags:["Data Structures","Linked Lists","Lists","Arrays","Estruturas De Dados"],timeRead:5}];const y=[{path:"",component:(()=>{class o{constructor(a,t,d){this.router=a,this.route=t,this.dataService=d,this.listArticle=c.LIST_ARTICLE}getDescription(a){return a.description[0].content.length>147?`${a.description[0].content.substring(0,147)}...`:a.description}redirectToArticle(a){console.warn(`${this.router.url}/${a}`),this.dataService.setValueData("teste"),this.router.navigate([a],{relativeTo:this.route})}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(l))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-presentation-article"]],decls:5,vars:1,consts:[[1,"content"],[1,"content__title"],[1,"content__list"],["class","content__list__item",4,"ngFor","ngForOf"],[1,"content__list__item"],[3,"click"],[1,""],[1,"content__list__item--date"],[1,"content__list__item--title"],[1,"content__list__item--description"]],template:function(a,t){1&a&&(e.TgZ(0,"section",0)(1,"h2",1),e._uU(2,"Articles"),e.qZA(),e.TgZ(3,"ul",2),e.YNc(4,P,10,6,"li",3),e.qZA()()),2&a&&(e.xp6(4),e.Q6J("ngForOf",t.listArticle))},dependencies:[r.sg,r.uU],styles:['.content[_ngcontent-%COMP%]{background:#F9F9F9;padding-top:8rem}.content__title[_ngcontent-%COMP%]{color:#474747;text-align:center;font-size:2rem;font-weight:700;padding:1rem 0;visibility:hidden;display:none;text-transform:lowercase}.content__title[_ngcontent-%COMP%]:before{content:"/";opacity:50%}@media screen and (min-width: 768px){.content__title[_ngcontent-%COMP%]{visibility:visible;display:block}}.content__list__item[_ngcontent-%COMP%]{padding:1rem 0}.content__list__item--date[_ngcontent-%COMP%]{letter-spacing:.011rem;font-size:.8em;margin-bottom:1rem;opacity:.8;color:#474747}.content__list__item--title[_ngcontent-%COMP%]{color:#474747;font-weight:700;font-size:1.6rem}.content__list__item--description[_ngcontent-%COMP%]{letter-spacing:.011rem;font-weight:400;font-size:.9em;margin-top:1rem}@media screen and (min-width: 460px){.content__list__item[_ngcontent-%COMP%]{border-bottom:.01rem solid #474747;padding:1.3rem 0}}']}),o})()},{path:"data-structure",component:m,data:{article:c.LIST_ARTICLE[0]}},{path:"search-binary",component:m,data:{article:c.LIST_ARTICLE[1]}},{path:"list-and-array",component:m,data:{article:c.LIST_ARTICLE[2]}},{path:"**",redirectTo:"",pathMatch:"full"}];let L=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(y),s.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,L]}),o})()}}]);