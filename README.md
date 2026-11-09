# 🏀 Galeria de Jogadores da NBA

Trabalho prático desenvolvido em **React** para a criação de uma galeria com astros da NBA, utilizando componentes reutilizáveis, gerenciamento de estado e filtros interativos.

---

## 📌 Funcionalidades

- **Componentização:**
  - `Header`: Cabeçalho com título da galeria e identificação do projeto.
  - `Card`: Exibe foto, nome, equipe, posição, número da camisa e média de pontos do jogador, além de botão para curtir.
  - `Footer`: Rodapé da aplicação.
- **Interatividade:**
  - Busca em tempo real por nome do atleta ou equipe.
  - Filtro por posição (Armador, Ala, Ala-Pivô, Pivô).
  - Clique em qualquer card para abrir o painel de detalhes com a biografia completa do jogador.
  - Contador de curtidas com estado individual.
- **Hooks Utilizados:**
  - `useState`: Para controle da lista de atletas, busca, filtro de posição e jogador selecionado.
  - `useEffect`: Para carregar os dados iniciais dos atletas na montagem da tela.

---

## 👥 Jogadores Cadastrados

1. LeBron James (Los Angeles Lakers - #23)
2. Stephen Curry (Golden State Warriors - #30)
3. Giannis Antetokounmpo (Milwaukee Bucks - #34)
4. Luka Dončić (Dallas Mavericks - #77)
5. Nikola Jokić (Denver Nuggets - #15)
6. Jayson Tatum (Boston Celtics - #0)

---

## 🚀 Como Executar

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Executar o servidor local:
   ```bash
   npm run dev
   ```

3. Gerar a versão de produção:
   ```bash
   npm run build
   ```
