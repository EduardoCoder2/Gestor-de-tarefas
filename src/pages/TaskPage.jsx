import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-800 p-6 flex justify-center">
      <div className="w-[600px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes da tarefa
        </h1>
        <div className="bg-slate-700 p-4 rounded space-y-2">
          <h2 className="text-2xl text-slate-100 font-bold">{title}</h2>
          <p className="text-slate-200">{description}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-2)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
