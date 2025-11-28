# 🎯 Demonstração Final - Guia do Código

Este documento explica o código da demonstração passo a passo.

---

## 🚀 Como o Projeto Foi Criado

Este projeto foi criado com **Vite** - uma ferramenta moderna que cria projetos React muito rapidamente.

**Comandos usados:**

```bash
npm create vite@latest
# Escolher: React + JavaScript
npm install
npm run dev
```

**Porquê Vite?**

- Setup instantâneo (sem configurações complexas)
- Atualização super rápida no browser
- Recomendado pela documentação oficial do React

Documentação: https://vite.dev/guide/

---

## 📂 Estrutura do Código

### 1️⃣ `main.jsx` - Ponto de Entrada

**O que faz:**  
Conecta o React ao HTML (ficheiro `index.html`).

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

- Procura o elemento com `id="root"` no HTML
- Renderiza o componente `<App />` lá dentro
- Todo o React vive dentro deste elemento

---

### 2️⃣ `App.jsx` - Componente Principal

**O que faz:**  
É o componente raiz que organiza toda a aplicação.

**Contém:**

- `<BrowserRouter>` - ativa a navegação
- `<Header />` - cabeçalho com navegação
- `<Routes>` - define as páginas disponíveis
- `<Footer>` - rodapé

**Rotas definidas:**

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

Quando o utilizador vai para `/`, mostra `Home`.  
Quando vai para `/about`, mostra `About`.

---

### 3️⃣ Páginas

#### `Home.jsx`

Página principal que mostra todas as demonstrações numa sequência lógica.

Importa e usa todos os componentes:

```jsx
<JSXDemo />
<ListDemo />
<Counter />
<EffectDemo />
<SharedCounter />
<APIDemo />
```

#### `About.jsx`

Página simples com informação sobre a empresa.

Demonstra:

- Usar variáveis num objeto
- Mostrar dados com `{}`
- Listas básicas

---

## 🧩 Componentes (Explicação de Cada Um)

### `Header.jsx` - Navegação

**Demonstra:** JSX básico + navegação

**O que faz:**

- Mostra logo e título
- Botões de navegação (`Home` e `Sobre Nós`)
- Usa `<Link>` do React Router (não `<a>`)

**Porquê Link?**  
Muda URL sem recarregar a página → experiência mais rápida.

---

### `JSXDemo.jsx` - Mostrar Dados

**Demonstra:** Variáveis em JSX + renderização condicional

**O que faz:**

```jsx
const companyName = "ISCAC Junior Solutions";
<p>{companyName}</p>;
```

- Cria variáveis normais de JavaScript
- Mostra-as com `{}`
- Usa operador ternário: `{isActive ? '✅ Ativa' : '❌ Inativa'}`

**Conceito:** Curly braces `{}` = "volta para JavaScript"

---

### `ListDemo.jsx` - Renderizar Listas

**Demonstra:** Array `.map()` + `key`

**O que faz:**

```jsx
const members = [
  { id: 1, name: "Ana Silva", role: "Presidente" },
  { id: 2, name: "João Santos", role: "Developer" },
];

{
  members.map((member) => <li key={member.id}>{member.name}</li>);
}
```

- `map()` transforma cada elemento do array em JSX
- `key` ajuda o React a identificar cada item

**Regra importante:** Sempre colocar `key` única!

---

### `Counter.jsx` - Estado e Eventos

**Demonstra:** `useState` + event handlers

**O que faz:**

```jsx
const [members, setMembers] = useState(25);

function handleAdd() {
  setMembers(members + 1);
}

<button onClick={handleAdd}>+ Adicionar</button>;
```

- `useState` cria memória no componente
- `members` = valor atual
- `setMembers` = função para atualizar
- Quando clicas, chama `handleAdd` → atualiza estado → React re-renderiza

**Conceito:** Quando estado muda, componente atualiza automaticamente.

---

### `EffectDemo.jsx` - Efeitos Secundários

**Demonstra:** `useEffect`

**O que faz:**

```jsx
useEffect(() => {
  console.log("Componente renderizado!");

  setTimeout(() => {
    setMessage("Dados carregados!");
  }, 2000);
}, []);
```

- Corre **depois** do componente aparecer no ecrã
- `[]` vazio = corre apenas uma vez
- Útil para: buscar dados, timers, logs

**Ver na consola (F12):** A mensagem aparece!

---

### `SharedCounter.jsx` - Partilhar Estado

**Demonstra:** Lifting state up (elevar estado)

**O que faz:**

- Estado vive no **componente pai**
- Dois botões **filhos** partilham o mesmo estado
- Clicar num botão → ambos atualizam

```jsx
// Pai
function SharedCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterButton count={count} onClick={handleClick} />
      <CounterButton count={count} onClick={handleClick} />
    </>
  );
}

// Filho recebe via props
function CounterButton({ count, onClick }) {
  return <button onClick={onClick}>Cliques: {count}</button>;
}
```

**Conceito:** Quando dois componentes precisam partilhar dados, o estado vai para o pai comum.

---

### `APIDemo.jsx` - Pedidos HTTP

**Demonstra:** Axios + `async/await` + estados de loading/erro

**O que faz:**

```jsx
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);

async function fetchUsers() {
  setLoading(true);
  try {
    const response = await axios.get("API_URL");
    setUsers(response.data);
  } catch (err) {
    setError("Erro!");
  } finally {
    setLoading(false);
  }
}
```

**Fluxo:**

1. Clicar botão → `loading = true`
2. Buscar dados da API
3. Guardar dados → `setUsers()`
4. `loading = false` → mostrar resultados

**Conceito:** Sempre gerir 3 estados quando buscar dados: dados, loading, erro.

---

## 🎓 Resumo da Demonstração

| Componente    | Conceito React                  |
| ------------- | ------------------------------- |
| Header        | JSX + Navigation                |
| JSXDemo       | Variáveis em JSX + Condicionais |
| ListDemo      | `.map()` + `key`                |
| Counter       | `useState` + eventos            |
| EffectDemo    | `useEffect`                     |
| SharedCounter | Lifting state up                |
| APIDemo       | HTTP + Axios                    |

---

## 💡 Mensagens-Chave para Transmitir

1. **Componentes = Funções** que retornam JSX
2. **Props = Dados** passados de pai para filho
3. **State = Memória** do componente
4. **`{}` em JSX** = voltar para JavaScript
5. **`map()`** para listas (sempre com `key`)
6. **`useState`** para dados que mudam
7. **`useEffect`** para código após renderização
8. **Lifting state up** para partilhar dados

---

**Fim da demonstração! 🚀**
