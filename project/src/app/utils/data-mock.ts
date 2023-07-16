import { ArticlePost } from '../modulos/shared/models/article-post';

export class DataMock {
  static readonly LIST_ARTICLE: ArticlePost[] = [
    {
      date: new Date('08-01-2021'),
      title: 'Estruturas de Dados — Conceito de Pilha(Stack) e Fila(Queue).',
      description: [
        {
          content: 'Neste post vou tentar explicar qual a diferença entre dois conceitos utilizados na computação e que provavelmente você verá ou está vendo na matéria de Estrutura de Dados em seu curso de TI.\n' +
            '\n' +
            'Vou começar dizendo que não sou um escritor ou professor, meu intuito com a série de posts que irei fazer é tentar explicar de uma forma simples como essas estruturas funcionam com exemplos e trazendo a implementação.\n' +
            '\n' +
            'Dado as devidas observações, vamos lá para que eu possa começar a te explicar sobre Pilha(Stack) e Fila(Queue) você precisa ter um conhecimento prévio em Array(Vetores), pelo menos é o recomendado.',
        },
        {
          titleSection: 'Fila ou Queue em Inglês:',
          content: 'Como o próprio nome diz, fica um pouco mais simples de entender, o conceito da fila vai ser algo semelhante a de uma fila de Supermercado, “como assim ?”. Em uma fila de supermercado os clientes serão atendidos pela ordem de chegada na FILA, correto ?(desconsiderando exceções). O conceito da FILA em computação é o mesmo, onde o primeiro elemento que foi colocado nesta estrutura será também o primeiro a sair. Existe em Inglês uma sigla para identificar esta lógica que é o FIFO(First In First Out). Resumindo o Conceito principal que você deve se lembrar da Fila é que o:',
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Data_queue.svg'
        },
        {
          titleSection: 'Pilha ou Stack em Inglês:',
          content: 'O conceito da pilha pode parecer um pouco confuso à primeira vista mas observando bem, você consegue entender o conceito. Uma analogia que normalmente se utiliza e é bem simples de entender o conceito são os livros. Vamos supor que você tenha à sua disposição alguns livros, agora imagine que você começa a colocar um sobre o outro, este ato é o Empilhamento. Continuando a linha de raciocínio, após você empilhar todos os livros, você precisa remover um em especifico que se encontra no meio desta Pilha, você humano poderia ir diretamente e puxá-lo de lá mas o conceito da Pilha não te deixa fazer este movimento, o que te resta é começar a remover os elementos a partir do TOPO. Este é o único movimento de remoção que você pode fazer com esta estrutura, remover do topo. Note que levando em consideração o movimento de remoção que podemos executar, o primeiro elemento(o que está abaixo de todos) da Pilha será o último a sair. Assim como a FILA à PILHA, também tem uma sigla em Inglês que identifica este conceito que é FILO( First In Last Out) que em Português fica:',
          image: 'https://miro.medium.com/v2/resize:fit:720/0*K1UFL3lGn-aHYX5k',
          imageBy: 'By Maxtremus — Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=44458752'
        },
        {
          content: 'Estes conceitos, tanto o de FILA quanto o de PILHA, podem ser implementados com Vetores ou com Lista.\n' +
            '\n' +
            'No meu próximo post irei continuar abordando os conceitos de Estruturas de Dados é provável que irei falar sobre Lista, caso tenha interesse é só buscar em meu perfil que talvez ele já tenha sido publicado.'
        },
        {
          titleSection: 'Implementação:',
          content: 'As implementações estarão meio Português e meio Inglês, peço desculpas por isso mas estou utilizando o código de um Repositório que tenho.'
        },
        {
          titleSection: 'PILHA:',
          content: 'Utilizando tanto a List que irei abordar em um próximo post, quanto com Vetor.',
          code: '' +
            'public class Stack {\n' +
            '    private List list;\n' +
            '    private Person[] arrayPerson;\n' +
            '    private int index = 0;\n' +
            '\n' +
            '    public Stack() {\n' +
            '        list = new List();\n' +
            '    }\n' +
            '\n' +
            '    public Stack(int size) {\n' +
            '        this.arrayPerson = new Person[size];\n' +
            '    }\n' +
            '\n' +
            '    public void addInList(Person person) {\n' +
            '        list.addPerson(person);\n' +
            '    }\n' +
            '\n' +
            '    public void addInArray(Person person) {\n' +
            '        this.arrayPerson[index++] = person;\n' +
            '    }\n' +
            '\n' +
            '    public void removeInList() {\n' +
            '        this.list.removePerson();\n' +
            '    }\n' +
            '\n' +
            '    public void removeInArray() {\n' +
            '        this.arrayPerson[index--] = null;\n' +
            '    }\n' +
            '\n' +
            '    public Integer sizeInList() {\n' +
            '        return this.list.sizeList();\n' +
            '    }\n' +
            '\n' +
            '    public Integer sizeInArray() {\n' +
            '        return this.index;\n' +
            '    }\n' +
            '\n' +
            '    public boolean clientInList(Person person) {\n' +
            '        return this.list.thisPersonInList(person);\n' +
            '    }\n' +
            '\n' +
            '    public boolean clientInArray(Person person) {\n' +
            '        for(int ind = 0; ind < index; ind++) {\n' +
            '            if(this.arrayPerson[ind].equals(person))\n' +
            '                return true;\n' +
            '        }\n' +
            '\n' +
            '        return false;\n' +
            '    }\n' +
            '\n' +
            '    public String toStringInList() {\n' +
            '        return list.showList();\n' +
            '    }\n' +
            '\n' +
            '    public String toStringInArray() {\n' +
            '        String resultado = "";\n' +
            '        for(int ind = 0; ind < index; ind++)\n' +
            '            resultado += this.arrayPerson[ind] + "\\n";\n' +
            '\n' +
            '        return resultado;\n' +
            '    }\n' +
            '}'
        },
        {
          titleSection: 'FILA:',
          content: '',
          code:
            'public class Queue {\n' +
            '    private List list;\n' +
            '    private Person[] arrayPerson;\n' +
            '    private int index = 0;\n' +
            '\n' +
            '    public Queue() {\n' +
            '        this.list = new List();\n' +
            '    }\n' +
            '\n' +
            '    public Queue(int size) {\n' +
            '        this.arrayPerson = new Person[size];\n' +
            '    }\n' +
            '\n' +
            '    public void addClientInList(Person person) {\n' +
            '        this.list.addClient(person);\n' +
            '    }\n' +
            '\n' +
            '    public void addClientInArray(Person person) {\n' +
            '        this.arrayPerson[index++] = person;\n' +
            '    }\n' +
            '\n' +
            '    public void removeClientInList() {\n' +
            '        this.list.removeClient();\n' +
            '    }\n' +
            '\n' +
            '    public void removeClientInArray() {\n' +
            '        Person[] auxArray = this.arrayPerson.clone();\n' +
            '        if (auxArray.length == 1) {\n' +
            '            auxArray[index--] = null;\n' +
            '            return;\n' +
            '        }\n' +
            '\n' +
            '        for(int slowIndex = 0; slowIndex < index; slowIndex++) {\n' +
            '            auxArray[slowIndex] = auxArray[slowIndex++];\n' +
            '        }\n' +
            '        auxArray[index--] = null;\n' +
            '        this.arrayPerson = auxArray;\n' +
            '    }\n' +
            '\n' +
            '    public Integer sizeQueueInList() {\n' +
            '        return this.list.sizeQueue();\n' +
            '    }\n' +
            '\n' +
            '    public Integer sizeQueueInArray() {\n' +
            '        return this.index;\n' +
            '    }\n' +
            '\n' +
            '    public boolean clientInQueueInList(Person person) {\n' +
            '        return this.list.clientIsInclude(person);\n' +
            '    }\n' +
            '\n' +
            '    public boolean clientInQueueInArray(Person person) {\n' +
            '        for (int ind = 0; ind < index; ind++) {\n' +
            '            if (this.arrayPerson[ind].equals(person))\n' +
            '                return true;\n' +
            '        }\n' +
            '        return false;\n' +
            '    }\n' +
            '\n' +
            '    public String toStringInList() {\n' +
            '        return this.list.toString();\n' +
            '    }\n' +
            '\n' +
            '    public String toStringInArray() {\n' +
            '        String resultado = "";\n' +
            '        for (int ind = 0; ind < index; ind++) {\n' +
            '            resultado += this.arrayPerson[ind] + "\\n";\n' +
            '        }\n' +
            '\n' +
            '        return resultado;\n' +
            '    }\n' +
            '}'
        },
        {
          content: 'Note que em ambas as implementações, o modo como se é incluído nestes conceitos é o mesmo, o que irá mudar será a maneira como você irá olha-lo ao tentar remover.\n'
        },
        {
          content: 'Repare que enquanto na Pilha removemos diretamente do topo',
          code:
            'public void removeInArray() {\n' +
            '        this.arrayPerson[index--] = null;\n' +
            '}'
        },
        {
          content: 'como normalmente se é utilizado em um vetor.'
        },
        {
          content: 'Mas já com uma FILA, é algo um pouco mais complexo. Pois temos que remover do inicio do vetor e passar todos os valores para a esquerda, ou seja temos que tomar um pouco mais de cuidado.',
          code: 'public void removeClientInArray() {\n' +
            '        Person[] auxArray = this.arrayPerson.clone();\n' +
            '        if (auxArray.length == 1) {\n' +
            '            auxArray[index--] = null;\n' +
            '            return;\n' +
            '        }\n' +
            '\n' +
            '        for(int slowIndex = 0; slowIndex < index; slowIndex++) {\n' +
            '            auxArray[slowIndex] = auxArray[slowIndex++];\n' +
            '        }\n' +
            '        auxArray[index--] = null;\n' +
            '        this.arrayPerson = auxArray;\n' +
            '    }'
        },
        {
          content: 'Lembre-se que ambas implementações no final das contas são CONCEITOS de armazenamento de dados, que poderá variar em que momento utilizar. Variando de acordo com suas necessidades.'
        },
        {
          content: 'Alguns exemplos de onde elas são utilizadas:'
        },
        {
          content: '<em>Pilha:</em> Se você utiliza a Linguagem Java em seu dia a dia é provável que você já tenha visto uma Pilha, pois sempre que é lançado uma exceção, esta começa a subir para onde foi chamado. Isto é toda a execução do código é posto em uma PILHA que é a Stacktrace do JAVA, onde irá te informar onde em cada parte do código ele parou.'
        },
        {
          content: 'Exemplo:',
          code: 'Exception in thread "main" java.lang.NullPointerException\n' +
            '        at com.example.myproject.Book.getTitle(Book.java:16)\n' +
            '        at com.example.myproject.Author.getBookTitles(Author.java:25)\n' +
            '        at com.example.myproject.Bootstrap.main(Bootstrap.java:14)'
        },
        {
          content: 'Note que a exceção vai subindo na hierarquia de execução até estourar na classe Main.'
        },
        {
          content: 'Outro exemplo seria o gerenciador de apps do seu aparelho celular, quando você abre o Gerenciador de Apps, ele irá te mostrar do ultimo app em que você estava até o primeiro que está sendo executado em segundo plano. Isto também é uma <em>PILHA</em>.'
        },
        {
          content: 'Já com a <em>Fila</em> um exemplo seria, chamadas para um servidor, todas as chamadas são executadas uma após a outra onde a primeira que chegou será também a primeira a ser executada. Não vou trazer um outro exemplo para FILA, pois é algo mais comumente encontrado no dia a dia e de fácil assimilação(também não consegui pensar em nada shaushaus).'
        },
        {
          content: 'Pode ser que haja algum erro ou alguma melhor forma de implementar estes dois conceitos, caso haja e você queira divulgar este conteúdo deixo meu repositório disponível para isto, tenho um repositório onde pretendo implementar a maior quantidade de Estrutura de dados com a maior quantidade diferentes de linguagem. Estou fazendo isso para divulgar conhecimento e aprender mais sobre conceitos e linguagens, é a maneira que achei de conhecer novos horizontes e pode devolver a comunidade o que aprendi.'
        },
        {
          titleSection: 'Link do Repositório no <a href="https://github.com/LuccasTraumer/algorithms" target="_blank">GitHub. </a>',
          content: 'Me coloco a disposição caso você tenha alguma sugestão ou queira discutir sobre.'
        },
        {
          content: 'Desde já, Obrigado !!'
        },
        {
          content: '<em>Revisão: Rafael Oliveira.</em>'
        }
      ],
      id: 0,
      linkPost: 'data-structure',
      tags: ['Data Structure', 'Queue', 'Stack', 'Development'],
      timeRead: 4
    },
    {
      date: new Date('12-05-2021'),
      title: 'Pesquisa Binária',
      description: [
        {
          content: 'Você já ouviu falar sobre Pesquisa Binária ? Não ? Pois então irei lhe apresentar esse meio de buscar dados de uma maneira mais eficiente para seus problemas.',
        },
        {
          content: 'Vou começar falando sobre o que normalmente acontece quando temos uma lista ou array com diversos elementos e queremos verificar ou buscar algum dado em específico na lista.'
        },
        {
          content: 'O que normalmente fazemos é percorrer essa lista do seu primeiro elemento ao último, fazendo uma verificação dos dados, correto ? E isso não está errado, funciona!'
        },
        {
          content: 'Mas essa pode não ser a melhor solução para esse problema. Por exemplo, em uma lista com uma quantidade de elementos pequena de 100 itens, essa busca vai acontecer em questão de segundos, ótimo!'
        },
        {
          content: 'O problema é que caso essa lista comece a crescer, você passa a ter 1.000.000 de itens ou 1.000.000.000 de itens. Como comentei acima, nossas buscas nestes contexto será de O(n) onde n é o numero de instrução de que iremos executar, na pior das hipóteses teríamos que acessar o número de elemento que temos e para este exemplo considere que o tempo de acesso a um item seja de 1ms, caso houvesse no exemplo de 1.000.000 somente essa busca levaria cerca de 1000s ou 16.67 min que é muito tempo de execução, um cliente ou um servidor não ficaria esperando esse tempo para alguma tomada de decisão. Só a título de curiosidade a busca de 1.000.000.000 seria 1000000s ou 16666,6667 minutos que é igual a 277,7777783333 horas 11,574074097220834 dias, ou seja é um tempinho rs.'
        },
        {
          content: 'E qual a solução para isso, uma possível solução para isto é a Pesquisa Binária, mas que raios é isso ? Ela precisa de um pré-requisitos para ser executada que é a Lista a ser percorrida <em>DEVE</em> esta ordenada.'
        },
        {
          content: 'Essa pesquisa leva em consideração o tamanho da lista ou array a ser percorrido e “divide” este trabalho.'
        },
        {
          content: 'Essa pesquisa leva em consideração o tamanho da lista ou array a ser percorrido e “divide” este trabalho.'
        },
        {
          content: 'Dado que temos o nosso meio e que nossa lista está ordenada, iremos verificar o elemento que está nessa posição e validar se ele é maior que o elemento que estamos buscando.'
        },
        {
          content: 'Caso ele (elemento do meio) seja maior iremos mudar o nosso indicador de fim para o meio. Sendo assim, sabemos que o elemento que buscamos NÃO está à direita da nossa lista. Pois o elemento que verificamos é MAIOR do que nós estamos buscando.'
        },
        {
          content: '',
          image: 'https://miro.medium.com/v2/resize:fit:720/0*ipHin0Kk5OZVm-EY',
          imageBy: 'Efetuando a primeira busca.'
        },
        {
          content: 'Com o início valendo Zero(0) como podemos observar na imagem, e o fim está valendo 5. O resultado por se tratar de um número inteiro será 2, pois 5/2 é 2.5 mas por se tratar de um numero inteiro ignoramos as casas decimais. E nosso meio fica no índice dois(2) da lista.'
        },
        {
          content: 'Exemplificando o que foi dito anteriormente com a imagem, caso estivéssemos procurando pelo número 110, na primeira busca iremos comparar o valor que está no índice do meio com o valor que queremos buscar. O valor 110 é maior que 15, caso sim sabemos que a posição do elemento não está à nossa esquerda, pois todos os valores à esquerda são menores que 15. Com isso iremos recalcular nosso início para que ele seja o meio e o meio seja recalculado. Ficará assim:',
          image: 'https://miro.medium.com/v2/resize:fit:720/0*KdZguUHwK3MPL2CR',
          imageBy: 'Efetuando a busca pela segunda vez.'
        },
        {
          content: 'Dados que mudamos o nosso fim, iremos recalcular nosso meio, e efetuar a busca novamente. E faremos isso até que o valor seja encontrado ou caso ele não esteja contido, retornaremos uma exceção ou algo que nos identifique que não está contido na lista.'
        },
        {
          content: 'E continuando, novamente faremos a mesma ação de comparar o valor do índice do meio com quem estamos buscando. Neste caso, veremos se 50 é maior que 110, o resultado nos fala que o índice que estamos buscando está mais à direita.'
        },
        {
          content: 'Faremos a mudança do início e do meio novamente.Onde o início passa a receber o índice do meio e o meio é recalculado(soma do início com o fim, dividido por 2). Ficará assim:',
          image: 'https://miro.medium.com/v2/resize:fit:720/0*Q2RKak7zzdbW5ep2',
          imageBy: 'Efetuando a busca pela terceira vez.'
        },
        {
          content: 'Agora ao verificarmos o valor que está no índice do meio, ele será igual ao valor que buscamos. Com isso concluímos nossa pesquisa.'
        },
        {
          content: 'Note que precisamos de apenas 3 verificações em nossa lista para podermos obter o valor que estávamos buscando. Ou seja, levando em consideração que cada acesso leve 1ms com a Pesquisa Binária levamos 3ms.'
        },
        {
          content: 'Podemos nos perguntar se isso acontece somente para listas pequenas e a resposta é <em>NÃO</em>. Foi exemplificado com uma lista pequena, por didática. Sendo mais fácil de exemplificar.'
        },
        {
          content: 'Mais um exemplo com uma lista ou array com 4.000.000.000 de itens na Pesquisa simples (verificação item a item) teríamos que percorrer os 4.000.000.000 na pior das hipóteses.'
        },
        {
          content: 'Já com a Pesquisa Binária, precisamos acessar apenas 32 itens e conseguimos encontrar o valor. Esse é o poder da Pesquisa Binária, você consegue otimizar sua busca de uma maneira incrível, claro que isso fica muito mais evidente em Lista ou array, com uma grande quantidade de itens. Este exemplo foi retirado do livro Entendendo Algoritmos.'
        },
        {
          content: 'Vimos um exemplo com um valor alto, ou seja, sempre estávamos indo a direita mas o que aconteceria se o valor fosse menor ? Seria a mesma lógica, só que em vez do início se “movimentar” que iria se mover será o fim. O fim receberá o meio e o meio será recalculado.'
        },
        {
          content: 'De modo geral o código ficaria desta forma:',
          code: 'import java.util.ArrayList;\n' +
            '\n' +
            'import java.util.List;\n' +
            '\n' +
            'import static java.util.Objects.isNull;\n' +
            '\n' +
            'public class BinarySearch {\n' +
            '    private List<Person> list;\n' +
            '    private int inicio = 0;\n' +
            '    private int meio = 0;\n' +
            '    private int fim = 0;\n' +
            '    private int contadorAcesso = 0;\n' +
            '\n' +
            '    public BinarySearch() {\n' +
            '        this.list = new ArrayList<>();\n' +
            '    }\n' +
            '\n' +
            '    public Person findElement(final Person element) throws Exception {\n' +
            '        List<Person> orderList = sort(this.list);\n' +
            '\n' +
            '        fim = this.list.size();\n' +
            '        meio = (inicio + fim) / 2;\n' +
            '        while(orderList.iterator().hasNext()) {\n' +
            '            if (((Client) orderList.get(meio)).compareTo((Client) element) == 0)\n' +
            '                return orderList.get(meio);\n' +
            '\n' +
            '            if (((Client) element).compareTo(((Client) orderList.get(meio))) ==  -1) {\n' +
            '                System.out.println("O numero " + ((Client) orderList.get(meio)).getAge() +\n' +
            '                        " é maior que o numero " + ((Client) element).getAge());\n' +
            '\n' +
            '                this.contadorAcesso++;\n' +
            '                fim = meio;\n' +
            '                meio = (inicio + fim) / 2;\n' +
            '                orderList.iterator().next();\n' +
            '            } else if (((Client) element).compareTo(((Client) orderList.get(meio))) == 1) {\n' +
            '                System.out.println("O numero " + ((Client) orderList.get(meio)).getAge() +\n' +
            '                        " é menor que o numero " + ((Client) element).getAge());\n' +
            '\n' +
            '                this.contadorAcesso++;\n' +
            '                inicio = meio;\n' +
            '                meio = (inicio + fim) / 2;\n' +
            '                orderList.iterator().next();\n' +
            '            }\n' +
            '        }\n' +
            '\n' +
            '        System.out.println(((Client) orderList.get(meio)).getAge());\n' +
            '        return null;\n' +
            '    }\n' +
            '\n' +
            '    public Person findElement(final List<Person> list, final Person element) {\n' +
            '\n' +
            '        return null;\n' +
            '    }\n' +
            '\n' +
            '    public void setList(List<Person> list) {\n' +
            '        this.list = list;\n' +
            '    }\n' +
            '\n' +
            '    public List<Person> getList() {\n' +
            '        return this.list;\n' +
            '    }\n' +
            '\n' +
            '    private List<Person> sort(List<Person> list) throws Exception {\n' +
            '        if (isNull(list))\n' +
            '            throw new Exception("Empty list!");\n' +
            '\n' +
            '        for(int slowIndex = 0; slowIndex < list.size(); slowIndex++) {\n' +
            '            for (int fastindex = slowIndex +1; fastindex < list.size(); fastindex++) {\n' +
            '                if(((Client) list.get(slowIndex)).getAge() > ((Client)list.get(fastindex)).getAge()) {\n' +
            '                    Person aux = list.get(slowIndex);\n' +
            '                    list.set(slowIndex, list.get(fastindex));\n' +
            '                    list.set(fastindex, aux);\n' +
            '                }\n' +
            '            }\n' +
            '        }\n' +
            '        return list;\n' +
            '    }\n' +
            '\n' +
            '    public Integer getQntdAcesso() {\n' +
            '        return Integer.valueOf(this.contadorAcesso);\n' +
            '    }\n' +
            '}'
        },
        {
          content: 'Foi desenvolvido em Java mas a linguagem é indiferente, poderíamos utilizar quaisquer outras.'
        },
        {
          content: 'Caso tenha interesse em ver mais algumas implementações de algoritmos, como lista, Pilha, Fila, Algoritmos de Ordenação, etc… Estou fazendo neste repositório. Fique à vontade para contribuir. O intuito é desenvolver estes algoritmos em diversas linguagens e documentar para outras pessoas.'
        }
      ],
      id: 1,
      linkPost: 'search-binary',
      tags: ['Data Structures', 'Binary Search', 'Estruturas De Dados', 'Pesquisa Binaria', 'Algorithms'],
      timeRead: 5
    },
    {
      date: new Date('12-25-2021'),
      title: 'Diferença entre Lista e Array. Entendendo uma Lista Ligada',
      description: [
        {
          content: 'Neste post como prometido em um dos anteriores irei tentar explicar o conceito e a implementação da Estrutura de dado LISTA, também conhecida como Lista Simples, vamos lá ?',
        },
        {
          content: 'Relembrando que NÃO SOU UM PROFESSOR, meu intuito é tentar explicar de uma outra forma esta estrutura. E este post está aberto a sugestões.'
        },
        {
          content: 'Para começar falando sobre a lista estou levando em consideração que você já saiba utilizar um Array de elementos, ou ao menos seu conceito.'
        },
        {
          content: 'A estrutura lista para muitas pessoas pode parecer um bicho de sete cabeças mas ao entender seu funcionamento, verá que é bem mais simples do que se parece. Esta estrutura é auto explicativa, funcionando como o próprio nome diz, uma Lista.'
        },
        {
          content: 'Mas o que é uma lista, veja que uma lista por nomenclatura não há um limite de itens que se pode haver, correto ?'
        },
        {
          content: 'Você pode ter lista de 10 itens ou lista de milhares de itens, e ainda sim ambas são uma lista.'
        },
        {
          content: 'A estrutura lista seguirá este mesmo conceito.'
        },
        {
          content: 'Uma dúvida comum de se aparecer é: “Qual a diferença entre uma lista e um array?”.'
        },
        {
          content: 'A primeira grande diferença é que Arrays no momento de duas criações(na instanciação) seu tamanho são definidos, ou seja um limite de elementos que podem haver ali dentro. Já a Lista não tem limitações de tamanho(claro, vai depender da memória da máquina) mas fora essa limitação, não há outra interferência para seu tamanho.'
        },
        {
          content: 'Um exemplo disto é:'
        },
        {
          content: 'Temos um micro serviço que faz uma consulta no Banco de Dados, e nos trás a lista de Barbearias em um bairro. Neste bairro estão contidas 10 Barbearias.'
        },
        {
          content: 'No momento do desenvolvimento do micro serviço, o desenvolvedor achou que seria uma boa colocar estes dados em um Array de tamanho 20, pois só haviam 10 e caso, criassem mais barbearias haveria ainda 10 espaços no Array.'
        },
        {
          content: 'Só que este mesmo software está sendo vendido para uma cidade que tem 200 Barbearias, com isso irá precisar que haja uma manutenção nesta consulta pois o número de barbearias aumentou, o que seria uma boa opção? alterar o número para a quantidade de barbearias da Cidade ou criar uma LISTA que não precisa ter um número fixo de posições, ela se adequa a quantidade de elementos conforme a necessidade ?'
        },
        {
          content: 'Este é um dos exemplos, array são excelentes para quando se trata de uma sequência de itens de números FIXOS. Lista são muito boas para quando se precisa armazenar diversos valores mas não se sabe quantos elementos possam haver.'
        },
        {
          titleSection: 'Como é implementado uma Lista.',
          content: 'Para que possamos implementar a lista, só gostaria de explicar mais um ponto que é de extrema importância para isso.'
        },
        {
          content: 'Nó’s ou Node: Nó’s são elementos que compõem a lista, os nós irão armazenar as suas informações e a informação de quem é o próximo elemento.',
          image: 'https://miro.medium.com/v2/resize:fit:720/0*nRjHXmIPju4YPpuL',
          imageBy: 'Apontamento para o próximo elemento.'
        },
        {
          content: 'Dado este overview, vamos lá'
        },
        {
          content: 'Irei criar em Java pois é mais cômodo mas a linguagem não faz tanta diferença, o que importa mesmo é o conceito.'
        },
        {
          titleSection: 'Esta é a classe do nosso node:',
          content: '',
          code: 'import java.util.Objects;\n' +
            '\n' +
            'public class Barbearia {\n' +
            '    private String nome;\n' +
            '    private String endereco;\n' +
            '    private String cep;\n' +
            '\n' +
            '    private Barbearia proximo = null;\n' +
            '\n' +
            '    public Barbearia(String nome, String endereco, String cep) {\n' +
            '        this.nome = nome;\n' +
            '        this.endereco = endereco;\n' +
            '        this.cep = cep;\n' +
            '    }\n' +
            '\n' +
            '    public Barbearia() {}\n' +
            '\n' +
            '    public String getNome() {\n' +
            '        return nome;\n' +
            '    }\n' +
            '\n' +
            '    public void setNome(String nome) {\n' +
            '        this.nome = nome;\n' +
            '    }\n' +
            '\n' +
            '    public String getCep() {\n' +
            '        return cep;\n' +
            '    }\n' +
            '\n' +
            '    public void setCep(String cep) {\n' +
            '        this.cep = cep;\n' +
            '    }\n' +
            '\n' +
            '    public Barbearia getNextBarbearia() {\n' +
            '        return proximo;\n' +
            '    }\n' +
            '\n' +
            '    public void setNextBarbearia(Barbearia nextPerson) {\n' +
            '        this.proximo = nextPerson;\n' +
            '    }\n' +
            '\n' +
            '    @Override\n' +
            '    public boolean equals(Object o) {\n' +
            '        if (this == o) return true;\n' +
            '        if (o == null || getClass() != o.getClass()) return false;\n' +
            '        Barbearia person = (Barbearia) o;\n' +
            '        return Objects.equals(nome, person.nome) &&\n' +
            '                Objects.equals(endereco, person.endereco) &&\n' +
            '                Objects.equals(cep, person.cep) &&\n' +
            '                Objects.equals(proximo, person.proximo);\n' +
            '    }\n' +
            '\n' +
            '    @Override\n' +
            '    public int hashCode() {\n' +
            '        return Objects.hash(nome, endereco, cep, proximo);\n' +
            '    }\n' +
            '\n' +
            '}'
        },
        {
          content: 'Note que existe um atributo do tipo Barbearia, dentro da declaração da classe Barbearia, a primeira vez que vi isso fiquei muito confuso mas sim, é desta forma e faz sentido, pois ele irá “apontar” para o próximo elemento da lista.'
        },
        {
          content: 'E também teremos a informação da Barbearia.'
        },
        {
          content: 'Além do atributo proximo, temos alguns específicos das barbearias, como: nome, endereco e cep. São dados fictícios só para exemplificação.'
        },
        {
          titleSection: 'Esta é a nossa lista:',
          content: '',
          code: 'public class LinkedList {\n' +
            '    private Barbearia headBarbearia;\n' +
            '\n' +
            '    void addBarbearia(Barbearia barbearia) {\n' +
            '        if (this.headBarbearia == null) {\n' +
            '            headBarbearia = barbearia;\n' +
            '        } else {\n' +
            '            Barbearia personAux = headBarbearia;\n' +
            '            while(personAux.getNextBarbearia() != null) {\n' +
            '                personAux = personAux.getNextBarbearia();\n' +
            '            }\n' +
            '            this.headBarbearia.setNextBarbearia(barbearia);\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    void removeBarbearia(Barbearia person) {\n' +
            '        Barbearia aux = this.headBarbearia;\n' +
            '        if (aux != null) {\n' +
            '            while (aux.getNextBarbearia() != null) {\n' +
            '                if (aux.equals(person)) {\n' +
            '                    aux = aux.getNextBarbearia();\n' +
            '                    aux.setNextBarbearia(null);\n' +
            '                }\n' +
            '                aux = aux.getNextBarbearia();\n' +
            '            }\n' +
            '        }\n' +
            '        this.headBarbearia = aux;\n' +
            '    }\n' +
            '\n' +
            '    boolean thisBarberInList(Barbearia person) {\n' +
            '        boolean inList = false;\n' +
            '        Barbearia aux = this.headBarbearia;\n' +
            '        while(aux.getNextBarbearia() != null) {\n' +
            '            if (aux.equals(person))\n' +
            '                inList = true;\n' +
            '            aux = aux.getNextBarbearia();\n' +
            '        }\n' +
            '\n' +
            '        return inList;\n' +
            '    }\n' +
            '\n' +
            '    Integer sizeList() {\n' +
            '        int size = 1;\n' +
            '        Barbearia aux = this.headBarbearia;\n' +
            '        while(aux.getNextBarbearia() != null) {\n' +
            '            size++;\n' +
            '            aux = aux.getNextBarbearia();\n' +
            '        }\n' +
            '\n' +
            '        return size;\n' +
            '    }\n' +
            '}'
        },
        {
          content: 'E é basicamente isso, a implementação de uma Lista simples, note que poderíamos utilizar o genetics para que os dados fossem genéricos, mas o nível de complexidade iria aumentar um pouco, e precisaria explicar sobre Generics que fica para uma próxima.'
        },
        {
          titleSection: 'Entendendo a implementação da Lista:',
          content: 'Na classe da Lista note que temos um atributo com nome de headBarbearia, esta barbearia vai ser nosso “nó raiz”, o primeiro elemento da lista. E trabalharemos praticamente toda alteração inclusão e afins em cima deste objeto.',
        },
        {
          content: 'No método addBarbearia, iremos incluir uma nova barbearia à lista. No método temos uma condição verificando se nosso atributo headBarbearia está nulo, caso de fato ele esteja nulo, o elemento que está sendo incluso é o nosso primeiro elemento, ou seja iremos atribuir ao headBarbearia o elemento que recebemos por parâmetro do método. Mas caso o headBarbearia não seja nulo, onde ele já tem um objeto, iremos percorrer os próximos elementos para verificar qual não tem próximo está nulo, para que possamos preencher com o dado que estamos recebendo.'
        },
        {
          content: 'O método de <b>removeBarbearia</b>, irá seguir um conceito similar ao de inclusão, onde também iremos fazer a busca pelos próximos e quando encontrarmos um elemento a ser removido, iremos mudá-lo para nulo, e também iremos mudar o apontamento do elemento anterior para que pule este nulo.',
          image: 'https://miro.medium.com/v2/resize:fit:720/0*mubpkqO9vLyXXxUL',
          imageBy: 'Removendo um elemento da Lista'
        },
        {
          titleSection: 'Utilização da Lista.',
          content: 'Com isso podemos começar a utilizar nossa lista, para criarmos um Objeto é simples, como em qualquer outro.'
        },
        {
          content: 'LinkedList list = new LinkedList();'
        },
        {
          content: 'Barbearia barbearia = new Barbearia(“Lucas Barbearia”, “Rua X”, “12391–000”);'
        },
        {
          content: 'list.addBarbearia(barbearia);'
        },
        {
          content: 'E para que possamos adicionar um elemento na lista, basta criar este elemento e chamar o método addBarbearia, essa chamada para o método de inclusão vai.'
        },
        {
          content: 'Simples desse jeito, é a inclusão de um novo elemento na lista.'
        },
        {
          titleSection: 'Percorrer',
          content: 'Para que possamos percorrer a lista é bem simples também, podemos fazer de algumas maneiras sendo por recursão e pela estrutura de repetição While, do-While, neste post vou utilizar apenas o while pois é mais simples e de fácil compreensão.'
        },
        {
          content: 'Iremos percorrer utilizando como condição de repetição, a verificação de que se existe um próximo elemento a ser “observado”.'
        },
        {
          content: 'Barbearia personAux = headBarbearia;\n' +
            '\n' +
            'while(personAux.getNextBarbearia() != null) {\n' +
            '\n' +
            'personAux = personAux.getNextBarbearia();\n' +
            '\n' +
            '}'
        },
        {
          content: 'Essa estrutura será muito comum, pois para podermos incluir, remover, buscar iremos utilizá-la. Então entender seu conceito é de suma importância.'
        },
        {
          titleSection: 'Observações:',
          content: 'Dado que entendemos Lista e Array, é importante informar que Lista NÃO é uma bala de prata para todo problema, é importante saber avaliar quais são suas necessidades.'
        },
        {
          content: 'Pois caso você precise pesquisar ou buscar valores específicos em alguma dessas duas estruturas é mais simples buscar em um array pois há um número limitado de possibilidades e porque dependendo se este array estiver ordenado, podemos ir pelo índice.'
        },
        {
          content: 'De modo geral, caso você precise de uma estrutura de dados para armazenar uma lista de elementos mas não se sabe ao certo, quantos elementos é uma boa Lista mas caso, você precise acessar informações específicas em uma das estruturas recomendo a utilização.',
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*wN9POK6eOjkr-mLsh50o3Q.png',
          imageBy: 'Tabela de Performance'
        }
      ],
      id: 2,
      linkPost: 'list-and-array',
      tags: ['Data Structures', 'Linked Lists', 'Lists', 'Arrays', 'Estruturas De Dados'],
      timeRead: 5
    }
  ]
}
