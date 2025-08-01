import Sidebar from "./components/sidebar.jsx";
import Post from "./components/post.jsx"

export default function SidebarTest() {
  return (
    <div className="flex bg-body">
      <Sidebar />
      <main className="pl-64 p-10">
        <Post />
        <h1 className="text-2xl font-bold mb-4">Conteúdo ao lado da Sidebar</h1>
        <p>Testando layout com fundo</p>
        <p className="py-200">Testando Sidebar fixa</p>
      </main>
    </div>
  );
}
