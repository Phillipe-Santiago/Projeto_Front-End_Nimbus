# ​<strong>⚙️ PROJETO CRONOS (VERSÃO 1.3)</strong>

Sobre o cliente: A Nimbus é uma construtech focada na gestão de risco climático em canteiros de obras realizando a previsões para avaliar os riscos dessas condições no cronograma de execução, evitando a perda de materiais e auxiliando na segurança dos trabalhadores, tornando a decisão do gestor mais ágil e assertiva, o que gera redução de prejuízos e aumento de eficiência.<br>

Objetivo: Este projeto Front-End tem como objetivo criar uma tela personalizada para receber todos os dados do Back-End e apresentá-los de maneira funcional, interativa, clara e coesa aos funcionários e clientes da empresa. A finalidade é facilitar a visualização e interpretação das previsões climáticas. O projeto é impulsionado pela necessidade de implementar um display mais compacto e responsivo para as informações recebidas dos Back-Ends por meio de Endpoints, que consistem em requisições GET com um corpo em formato JSON ou CSV. Além disso, a aplicação será capaz de exportar esses dados para PDF e CSV. No futuro, está prevista a implementação de uma versão móvel para ampliar a acessibilidade, uma vez que sites responsivos se adaptam ao tamanho das telas, tornando a visualização mais fácil e conveniente em dispositivos como celulares e tablets.<br>

# ​<strong>🛠️​ FERRAMENTAS DO PROJETO:</strong>

<p>
  Repositório de códigos: GitHub<br>
  Editor de códigos: Visual Studio Code<br>
  Comunicação: Microsoft Teams, Discord e WhatsApp<br>
  Linguagens: HTML, CSS, JavaScript e React<br>
  Metodologia aplicada: Kanban(Trello) e reunião semanal(weekly)<br>
  Site de referência: https://nimbusmeteorologia.com.br<br>
  Material de apoio: <a href="https://github.com/Phillipe-Santiago/Projeto_Front-End_Nimbus/blob/main/Material%20de%20apoio%20Nimbus.pdf">Apresentação Nimbus</a>
</p>

# <strong>🗃️ 5W2H:</strong>

Perguntas | Definições
--------------------------------|------------------------------------------------------------
Quem? | Clientes da empresa e usuários internos da Nimbus.
O que? | Sistema Web para visualização de dados referentes ao backend.
Quando? | O projeto devera ser finalizado até o fim do segundo semestre de 2023.
Onde? | Sistema implementado na Web e futuramente para dispositivos móveis.
Por que? | Melhorar a apresentação das informações dos dados.
Quanto? | Tempo investido pela equipe de desenvolvimento e pela equipe Nimbus.
Como? | Desenvolvido com as linguagens HTML, CSS e JavaScript.


# <strong>📝 REQUISITOS DO SISTEMA:</strong>

<strong>Requisitos Funcionais:</strong>
<ul>
  <li>RF-1: O sistema deve exportar as informações em um arquivo CSV, PDF ou PNG.</li>
  <li>RF-2: O sistema deve permitir o usuário se logar para acessar a tela com as informações.</li>
  <li>RF-3: O sistema deve manter um histórico de dados meteorológicos coletados ao longo do tempo.</li>
  <li>RF-4: O sistema deve permitir o usuário inserir os filtros, de sua escolha, a serem analisados.</li>
  <li>RF-5: O sistema deve exibir os dados fornecidos em tabelas, gráficos, listas e mapas.</li>
  <li>RF-6: O sistema deve permitir o usuário a requisitar relatorios de uma estação, data ou local de acordo com os dados previamente coletados.</li>
  <li>RF-7: O sistema deve ser capaz de notificar o usuário caso haja alguma mudança drástica em seus relatórios previamente fornecidos.</li>
  <li>RF-8: O sistema deve permitir interações com todos os elementos do Dashboard(Interface gráfica para exibição de listas, tabelas, mapas, calendários entre outros recursos).</li>
</ul>

<strong>Requisitos Não-Funcionais:</strong>
<ul>
  <li>RNF-1: O sistema deve ser multiplataforma.</li>
  <li>RNF-2: O sistema deve estar hospedado no GitHub.</li>
  <li>RNF-3: O sistema deve ser responsivo.</li>
  <li>RNF-4: O sistema deve tratar o JSON recebido com os dados.</li>
  <li>RNF-5: O sistema deve estar disponível full-time.</li>
</ul>

# <Strong>📜 CASOS DE USO:</strong>

<strong>◆ Caso de Uso 1 :</strong> Visualizar pagina inicial<br>
Ator Principal: Usuário<br>
Ator secundário: Sistema<br>

Pré-condições: Ter uma conta criada na Nimbus.

Fluxo Básico:
<ul>
  <li>Passo 1: O usuário deverá se logar ao sistema usando login e senha.<br><br></li>
  <li>Passo 2: O usuário terá acesso a visualização do mapa no meio da tela com informações meteorológicas genéricas. A sua esquerda (A discutir) havera um menu de seleção para o usuário escolher um uso mais especifico que gostaria de ter ao utilizar o programa.<br><br></li>
</ul>

<strong>◆ Caso de uso 2 :</strong> Risco de chuva em determinada época.<br>
Ator Principal: Usuário.<br>
Ator secundário: Sistema.<br>

Pré-condições: Estar logado no sistema.

Fluxo Básico:

<ul>
  <li>Passo 1: O usuário selecionara a função "Risco de chuva" no menu previamente citado.<br><br></li>
  <li>Passo 2: O usuário ira inserir a data que gostaria de obter a previsão.<br><br></li>
  <li>Passo 3: O usuário escolhe o local em que será feita a previsão.<br><br></li>
  <li>Passo 4: O site entrega de forma clara e intuitiva a informação que o usuário deseja.<br><br></li>
  <li>Passo 5: A direita da tela haverão as informações (relatório) geradas pelo site e imediatamente abaixo do relatório em texto o usuário tera opções de exportação de tal relatório para o formato que escolher.</li>
</ul>

# <strong>🖼️ LAYOUT DAS TELAS:</strong>
<img src="https://github.com/Phillipe-Santiago/Projeto_Front-End_Nimbus/blob/main/Design%20das%20telas%20do%20app/Mapa.JPG">
<img src="https://github.com/Phillipe-Santiago/Projeto_Front-End_Nimbus/blob/main/Design%20das%20telas%20do%20app/Hist%C3%B3rico.JPG">

# <strong>💻 API´S PESQUISADAS:</strong>
<strong>API´s de mapas:</strong>
<ul>
  <li><a href="https://www.openstreetmap.org/#map=2/-25.5/-97.5"> OpenStreetMap</a></li>
  <li><a href="https://www.npmjs.com/package/google-maps-react"> Google Maps React</a></li>
  <li><a href="https://docs.mapbox.com/mapbox-gl-js/api/"> Mapbox GL JS</a></li>
</ul>

<strong>Resumo das API´s:</strong>
<ul>
  <li> OpenStreetMap é um projeto open-source de mapeamento colaborativo, sendo uma valiosa fonte de informações geográficas. 
Seus dados são coletados e atualizados por uma comunidade ativa de colaboradores e estão disponíveis para qualquer um.
O OSM possui integração com o React através do Leaflet, oferecendo poderosos recursos de personalização.</li><br>
  <li>Biblioteca que simplifica a integração de mapas do Google em aplicativos React. Ela fornece componentes React que facilitam a incorporação de mapas interativos do Google Maps em seus aplicativos, permitindo personalização e controle avançado sobre os mapas e seus elementos. É uma escolha popular para projetos que requerem integração com o Google Maps no ambiente React.</li><br>
  <li>Biblioteca de mapeamento que permite a criação de mapas interativos e personalizáveis em aplicativos da web. Ela se destaca por oferecer recursos avançados, como visualizações 3D, mapas personalizáveis e suporte a dados geoespaciais. A API é desenvolvida pela Mapbox e é amplamente utilizada para criar experiências de mapeamento interativas e sofisticadas em aplicações web, oferecendo a flexibilidade de personalizar a aparência e o comportamento dos mapas de acordo com as necessidades do projeto. É uma escolha popular para desenvolvedores que buscam criar mapas altamente personalizados e visualmente atraentes em seus aplicativos.</li>
</ul>

<strong>API´s de gráficos:</strong>
<ul>
  <li><a href=""> </a></li>
  <li><a href=""> </a></li>
  <li><a href=""> </a></li>
</ul>

<strong>Resumo das API´s:</strong>
<ul>
  <li> </li>
  <li> </li>
  <li> </li>
</ul>

# <strong>👥 CONTRIBUIDORES:</strong>

Brenda Mendes<br>
Ian Esteves<br>
Phillipe Secondo<br>
João Victor Franco

<!-- TO DO: Observações sobre o trabalho aqui !!! (20/09) -->
