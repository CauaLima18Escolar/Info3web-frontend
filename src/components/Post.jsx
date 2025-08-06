export default function Post({ post }) {
  return (
    <div className="bg-white flex flex-col">
      <li className="flex flex-col bg-white rounded-[10px] w-2xl h-96 p-5 gap-y-7">
        <div className="flex gap-2 items-center">
          <img src={post.imagemUser} alt="" />
          <p className="text-roxo_destaque">{post.nomeUser}</p>
        </div>
        <p className="text-wrap">{post.conteudo}</p>
        <div className="flex w-full justify-between">
          {(post.imagensPost).map((imagem) => (
            <img src = {imagem} ></img>
          ))}
        </div>
      </li>
    </div>
  );
}
