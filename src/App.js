import { useState, useEffect } from "react";
import { get, getDatabase, ref, set, push, onValue } from "firebase/database";
import firebase from "./firebaseConnection";

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [posts, setPosts] = useState([]);
  const [autor, setAutor] = useState("");

  const db = getDatabase();
  const collection = ref(db, "posts");

  useEffect(() => {
    async function listarTodos() {
      onValue(collection, (snapshot) => {
        let postsGravadosFireBase = [];
        snapshot.forEach((item) => {
          let itemGravado = item.toJSON();
          postsGravadosFireBase.push({
            key: item.key,
            titulo: itemGravado.titulo,
            autor: itemGravado.autor,
          });
        });
        setPosts(postsGravadosFireBase);
      });
    }

    listarTodos();
  }, []);

  async function cadastrar() {
    const novoPost = push(collection);
    set(novoPost, {
      titulo,
      autor,
    }).then(() => {
      console.log("Adicionado");
      setTitulo("");
      setAutor("");
    });
  }

  return (
    <>
      <div>
        <label>
          Titulo
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Autor
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </label>
        <br />
        <button onClick={() => cadastrar()}>Cadastrar</button>
      </div>
      <div>
        {posts.map((item) => {
          return (
            <div>
              {item.key} - {item.titulo} - {item.autor}
            </div>
          );
        })}
      </div>
    </>
  );
}
